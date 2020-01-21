import { Request, Response } from 'express'
import Message from '../schemas/Message'

class MessageController{
    public async create(req: Request, res: Response): Promise<Response>{
        const message = await Message.create(req.body)

        return res.json(message)
    }
}

export default new MessageController()