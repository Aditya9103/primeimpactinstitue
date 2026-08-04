import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';
import { ENV } from '../config/env.js';

// @desc    Submit a new contact inquiry
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      res.status(400);
      throw new Error('Please fill in all required fields');
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (contact) {
      // 1. Send confirmation email to the user
      await sendEmail({
        email: contact.email,
        subject: 'Thank you for contacting Prime Impact',
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f4f7f6; padding: 40px 20px; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
              <div style="background-color: #111723; padding: 30px; text-align: center; border-bottom: 3px solid #d99820;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Prime Impact</h1>
              </div>
              <div style="padding: 40px 30px;">
                <h2 style="color: #111723; font-size: 20px; margin-top: 0;">Hello ${contact.name},</h2>
                <p style="font-size: 15px; line-height: 1.6; color: #555;">Thank you for reaching out to us. We have received your inquiry regarding <strong style="color: #111723;">${contact.subject}</strong>.</p>
                <p style="font-size: 15px; line-height: 1.6; color: #555;">Our team is reviewing your message and will get back to you as soon as possible, usually within 24 hours.</p>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="font-size: 15px; line-height: 1.6; color: #555; margin-bottom: 5px;">Best Regards,</p>
                  <p style="font-size: 16px; font-weight: bold; color: #111723; margin-top: 0;">Prime Impact Team</p>
                </div>
              </div>
              <div style="background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #999;">
                <p style="margin: 0;">© ${new Date().getFullYear()} Prime Impact. All rights reserved.</p>
              </div>
            </div>
          </div>
        `,
      });

      // 2. Send notification email to the support team
      await sendEmail({
        email: ENV.SUPPORT_EMAIL,
        subject: `New Contact Inquiry: ${contact.subject}`,
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f4f7f6; padding: 40px 20px; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
              <div style="background-color: #d99820; padding: 30px; text-align: center;">
                <h1 style="color: #111723; margin: 0; font-size: 22px; font-weight: 700;">New Inquiry Received</h1>
              </div>
              <div style="padding: 40px 30px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 30%;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Name</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723; font-weight: 600;">${contact.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Email</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723;">${contact.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Phone</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723;">${contact.phone || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Subject</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723;">${contact.subject}</td>
                  </tr>
                </table>
                <div style="margin-top: 30px;">
                  <strong style="color: #888; font-size: 13px; text-transform: uppercase; display: block; margin-bottom: 10px;">Message</strong>
                  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #444; white-space: pre-wrap;">${contact.message}</div>
                </div>
              </div>
              <div style="background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #999;">
                <p style="margin: 0;">Log in to the Admin Dashboard to reply or update status.</p>
              </div>
            </div>
          </div>
        `,
      });

      res.status(201).json({ message: 'Contact submitted successfully', contact });
    } else {
      res.status(400);
      throw new Error('Invalid contact data');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact inquiries
// @route   GET /api/contact
// @access  Private/Admin
export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

// @desc    Update contact status
// @route   PUT /api/contact/:id/status
// @access  Private/Admin
export const updateContactStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findById(req.params.id);

    if (contact) {
      contact.status = status || contact.status;
      const updatedContact = await contact.save();
      res.json(updatedContact);
    } else {
      res.status(404);
      throw new Error('Contact not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Private/Admin
export const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (contact) {
      if (contact.status !== 'Resolved') {
        res.status(400);
        throw new Error('You can only delete resolved inquiries.');
      }
      await contact.deleteOne();
      res.json({ message: 'Contact removed' });
    } else {
      res.status(404);
      throw new Error('Contact not found');
    }
  } catch (error) {
    next(error);
  }
};
