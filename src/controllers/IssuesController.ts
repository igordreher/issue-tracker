import { create } from 'domain';
import { Request, Response } from 'express';
import Joi, { number, string } from 'joi';
import knex from '../database';

export default {

    async index(req: Request, res: Response) {
        const result = await knex('issues');
        return res.json(result);
    },

    async create(req: Request, res: Response) {
        const { title, details, submitter_id } = req.body;

        const schema = Joi.object({
            title: Joi.string().required().max(50),
            details: Joi.string().required(),
            submitter_id: Joi.number().required()
        });

        const { error } = schema.validate({ title, details, submitter_id });
        if (error) return res.status(400).send(error.message);

        try {
            await knex('issues').insert({
                title, details, submitter_id
            });
            return res.status(201).send();
        } catch (error) {
            return res.send(error.message);
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { title, details, assigned_id } = req.body;

        const schema = Joi.object({
            title: Joi.string().max(50),
            details: Joi.string(),
            assigned_id: Joi.number().allow(null)
        });

        const { error } = schema.validate({
            title, details, assigned_id
        });
        if (error) return res.status(400).send(error.message);

        try {
            await knex('issues').where({ id })
                .update({ title, details, assigned_id });

            return res.send();
        } catch (error) {
            return res.send(error.message);
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await knex('issues').where({ id }).del();
            return res.send();
        } catch (error) {
            return res.send(error.message);
        }
    }
};