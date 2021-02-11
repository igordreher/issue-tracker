import { Request, Response } from 'express';
import issue from '../models/issuesModel';

export default {

    async index(req: Request, res: Response) {
        try {
            const result = await issue.find();
            return res.json(result);
        } catch (error) {
            return res.json(error.message);
        }
    },

    async create(req: Request, res: Response) {
        const { title, details, submitter_id } = req.body;

        try {
            await issue.create({ title, details, submitter_id });
            return res.status(201).json();
        } catch (error) {
            return res.json(error.message);
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { title, details, assigned_id } = req.body;

        try {
            await issue.update({ title, details, assigned_id }, id);
            return res.json();
        } catch (error) {
            return res.json(error.message);
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await issue.delete(id);
            return res.json();
        } catch (error) {
            return res.json(error.message);
        }
    }
};