import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
          email: string;
          phone: string;
}

const contactSchema = new Schema<IContact>(
          {
                    email: {
                              type: String,
                              required: true,
                              unique: true, 
                    },
                    phone: {
                              type: String,
                              required: true,
                              //I didnt make phone unique because multiple contacts can have the same phone number
                    },
          },
          { timestamps: true }
);

const Contact = mongoose.model<IContact>('Contact', contactSchema);

export default Contact;
