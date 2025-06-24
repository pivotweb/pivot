import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
          name: string;
          email: string;
          message: string;
}

const contactSchema = new Schema<IContact>(
          {
                    name: {
                              type: String,
                              required: true,
                              trim: true,
                    },
                    email: {
                              type: String,
                              required: true,
                              trim: true,
                    },
                    message: {
                              type: String,
                              required: true,
                    },
          },
          { timestamps: true }
);

const Contact = mongoose.model<IContact>('Contact', contactSchema);

export default Contact;
