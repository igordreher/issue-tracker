import { Request, Response } from 'express';
import user from '../models/usersModel';


export default {

    async index(req: Request, res: Response) {
        try {
            const result = await user.find();
            return res.json(result);
        } catch (error) {
            res.json(error.message);
        }
    },

    async create(req: Request, res: Response) {
        const { name, email } = req.body;

        try {
            await user.create({ name, email });
            return res.status(201).json();
        } catch (error) {
            return res.json(error.message);
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email } = req.body;

        try {
            await user.update({ name, email }, id);
            res.json();
        } catch (error) {
            res.json(error.message);
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await user.delete(id);
            return res.json();
        } catch (error) {
            res.json(error.message);
        }
    }
};