import { Schema, model, Document } from "mongoose"
export interface IMentor extends Document {
  name : string
  email : string
  expertise : string[] // list of skills/topics they teach
  bio? : string
  phone? : string
  createdAt : Date
}

const MentorSchema = new Schema<IMentor>({
  name : {
    type : String,
    required : true,
    trim : true,
    maxlength : 100
  },
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim : true
  },
  expertise : {
    type : [String],
    default : []
  },
  bio : {
    type : String,
    trim : true,
    maxlength : 500
  },
  phone : {
    type : String,
    trim : true,
    maxlength : 20
  },
  createdAt : {
    type : Date,
    default : Date.now
  }
})


export default model<IMentor>('Mentor', MentorSchema)

