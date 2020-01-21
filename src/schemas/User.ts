import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document{
    email?: string,
    firstName?: string,
    lastName?: string,
    status?: boolean,
    fullName(): string,
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  status: Boolean,
  messages: [{
      type: Schema.Types.ObjectId,
      ref: 'Message'
  }]
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<UserInterface>('User', UserSchema)
