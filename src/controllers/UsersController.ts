import { Request, Response } from 'express';
import Joi from 'joi';
import knex from '../database';


function validateUser(userData: object, method: string) {
    const schema = Joi.when(Joi.ref('$method'), {
        is: 'create',
        then: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required()
        }),
        otherwise: Joi.object({
            name: Joi.string(),
            email: Joi.string().email()
        })
    });
    return schema.validate(userData, { context: { 'method': method } });
}

export default {

    async index(req: Request, res: Response) {
        const result = await knex('users');
        return res.json(result);
    },

    async create(req: Request, res: Response) {
        const { name, email } = req.body;


        const { error } = validateUser({ name, email }, 'create');
        if (error) return res.status(400).send(error.message);

        try {
            await knex('users').insert({ name, email });
            res.status(201).send();
        } catch (error) {
            res.send(error.message);
        }
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email } = req.body;


        const { error } = validateUser({ name, email }, 'patch');
        if (error) return res.status(400).send(error.message);

        try {
            await knex('users').where({ id }).update({ name, email });
            res.send();
        } catch (error) {
            res.send(error.message);
        }
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await knex('users').where({ id }).del();
            return res.send();
        } catch (error) {
            res.send(error.message);
        }
    }
};