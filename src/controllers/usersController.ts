import { NextFunction, Request, Response } from 'express';
import user from '../models/usersModel';


export default {

    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await user.find();
            return res.json(result);
        } catch (error) {
            next(error);
        }
    },

    async create(req: Request, res: Response, next: NextFunction) {
        const { name, email } = req.body;

        try {
            await user.create({ name, email });
            return res.status(201).json();
        } catch (error) {
            next(error);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const { name, email } = req.body;

        try {
            await user.update({ name, email }, id);
            res.json();
        } catch (error) {
            next(error);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            await user.delete(id);
            return res.json();
        } catch (error) {
            next(error);
        }
    }
};