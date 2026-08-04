import Newsletter from '../models/Newsletter.js';

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
// @access  Public
export const subscribeNewsletter = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400);
      throw new Error('Please provide an email address');
    }

    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      if (existingSubscriber.status === 'Unsubscribed') {
        existingSubscriber.status = 'Subscribed';
        await existingSubscriber.save();
        return res.status(200).json({ message: 'Successfully re-subscribed!' });
      }
      res.status(400);
      throw new Error('You are already subscribed!');
    }

    await Newsletter.create({ email });
    res.status(201).json({ message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    next(error);
  }
};
