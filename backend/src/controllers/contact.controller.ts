import { Request, Response } from 'express';
import Contact from '../models/contact.model';

export const submitContact = async (req: Request, res: Response): Promise<void> => {
          const { email, phone } = req.body;

          if (!email || !phone) {
                     res.status(400).json({ message: 'Email and phone are required.' });
          }

          try {
                    // Check if email already exists (optional safety check)
                    const existing = await Contact.findOne({ email });
                    if (existing) {
                               res.status(409).json({ message: 'This email has already been used.' });
                    }

                    const contact = new Contact({ email, phone });
                    await contact.save();

                    res.status(201).json({
                              message: 'Contact submitted successfully!',
                              data: contact,
                    });
          } catch (error) {
                    res.status(500).json({ message: 'Server error', error });
          }
};
