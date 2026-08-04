import Demo from '../models/Demo.js';
import sendEmail from '../utils/sendEmail.js';
import { ENV } from '../config/env.js';

// @desc    Submit a new demo booking
// @route   POST /api/demo
// @access  Public
export const bookDemo = async (req, res, next) => {
  try {
    const { name, email, phone, course, date, time, message } = req.body;

    if (!name || !email || !phone || !course) {
      res.status(400);
      throw new Error('Please provide name, email, phone, and course');
    }

    const demo = await Demo.create({
      name,
      email,
      phone,
      course,
      date,
      time,
      message
    });

    if (demo) {
      
      const exactTime = demo.time === 'morning' ? 'Morning (10 AM - 12 PM)' :
                        demo.time === 'afternoon' ? 'Afternoon (2 PM - 4 PM)' :
                        demo.time === 'evening' ? 'Evening (6 PM - 8 PM)' : 
                        demo.time === 'anytime' ? 'Any Time' : 'Any Time';

      // 1. Send confirmation email to the user
      await sendEmail({
        email: demo.email,
        subject: 'Your Demo Booking at Prime Impact',
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f4f7f6; padding: 40px 20px; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
              <div style="background-color: #111723; padding: 30px; text-align: center; border-bottom: 3px solid #d99820;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Prime Impact</h1>
              </div>
              <div style="padding: 40px 30px;">
                <h2 style="color: #111723; font-size: 20px; margin-top: 0;">Hello ${demo.name},</h2>
                <p style="font-size: 15px; line-height: 1.6; color: #555;">Thank you for requesting a demo for our <strong style="color: #111723;">${demo.course}</strong> program.</p>
                
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0;">
                  <p style="margin: 0 0 10px 0; font-size: 14px; color: #555;"><strong>Preferred Date:</strong> ${demo.date ? new Date(demo.date).toLocaleDateString() : 'Any Date'}</p>
                  <p style="margin: 0 0 10px 0; font-size: 14px; color: #555;"><strong>Preferred Time:</strong> ${exactTime}</p>
                  <p style="margin: 0; font-size: 14px; color: #555;"><strong>Your Message:</strong> ${demo.message || 'None provided'}</p>
                </div>

                <p style="font-size: 15px; line-height: 1.6; color: #555;">Our team is reviewing your request and will contact you shortly to confirm your session.</p>
                
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
        subject: `New Demo Booking: ${demo.course}`,
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f4f7f6; padding: 40px 20px; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
              <div style="background-color: #d99820; padding: 30px; text-align: center;">
                <h1 style="color: #111723; margin: 0; font-size: 22px; font-weight: 700;">New Demo Booking</h1>
              </div>
              <div style="padding: 40px 30px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 30%;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Name</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723; font-weight: 600;">${demo.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Email</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723;">${demo.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Phone</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723;">${demo.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Course</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723;">${demo.course}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Date</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723;">${demo.date || 'Any Date'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #888; font-size: 13px; text-transform: uppercase;">Time</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111723; text-transform: capitalize;">${exactTime}</td>
                  </tr>
                </table>
                <div style="margin-top: 30px;">
                  <strong style="color: #888; font-size: 13px; text-transform: uppercase; display: block; margin-bottom: 10px;">Message / Goals</strong>
                  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #444; white-space: pre-wrap;">${demo.message || 'No additional message provided.'}</div>
                </div>
              </div>
              <div style="background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #999;">
                <p style="margin: 0;">Log in to the Admin Dashboard to manage this booking.</p>
              </div>
            </div>
          </div>
        `,
      });

      res.status(201).json({ message: 'Demo booked successfully', demo });
    } else {
      res.status(400);
      throw new Error('Invalid demo data');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get all demo bookings
// @route   GET /api/demo
// @access  Private/Admin
export const getDemos = async (req, res, next) => {
  try {
    const demos = await Demo.find({}).sort({ createdAt: -1 });
    res.json(demos);
  } catch (error) {
    next(error);
  }
};

// @desc    Update demo status
// @route   PUT /api/demo/:id/status
// @access  Private/Admin
export const updateDemoStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const demo = await Demo.findById(req.params.id);

    if (demo) {
      demo.status = status || demo.status;
      const updatedDemo = await demo.save();
      res.json(updatedDemo);
    } else {
      res.status(404);
      throw new Error('Demo not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Delete demo booking
// @route   DELETE /api/demo/:id
// @access  Private/Admin
export const deleteDemo = async (req, res, next) => {
  try {
    const demo = await Demo.findById(req.params.id);

    if (demo) {
      if (demo.status !== 'Completed') {
        res.status(400);
        throw new Error('You can only delete completed demos.');
      }
      await demo.deleteOne();
      res.json({ message: 'Demo removed' });
    } else {
      res.status(404);
      throw new Error('Demo not found');
    }
  } catch (error) {
    next(error);
  }
};
