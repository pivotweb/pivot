import { Request, Response } from 'express';
import Contact from '../models/contact.model';

export const submitContact = async (req: Request, res: Response): Promise<void> => {
          const { name, email, message } = req.body;

          if (!name || !email || !message) {
                     res.status(400).json({ message: 'Name, email, and message are required.' });
          }

          try {
                    const contact = new Contact({ name, email, message });
                    await contact.save();

                    res.status(201).json({
                              message: 'Contact submitted successfully!',
                              data: contact,
                    });
          } catch (error) {
                    res.status(500).json({ message: 'Server error', error });
          }
};
