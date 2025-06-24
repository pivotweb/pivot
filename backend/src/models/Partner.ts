import { Schema, model, Document } from "mongoose"
export interface IPartner extends Document {
  orgName : string
  contactName : string
  email : string
  supportType : string[]
  phone? : string
  createdAt : Date
}

const PartnerSchema = new Schema<IPartner>({
  orgName : {
    type : String,
    required : true,
    trim : true,
    maxlength : 150
  },
  contactName : {
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
  supportType : {
    type : [String],
    default : []
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


export default model<IPartner>('Partner', PartnerSchema)

