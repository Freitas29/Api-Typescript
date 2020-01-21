import  { Schema, Document, model } from 'mongoose'

interface MessageInterface extends Document{

}

const MessageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
        type: String,
        required: true,
    }
} ,{
    timestamps: true
})


export default model<MessageInterface>('Message', MessageSchema)