import { AppError } from 'errors/AppError';
import Joi from 'joi';
import knex from '../database';

interface UserData {
    name: string;
    email: string;
}

export default {
    async find() {
        return await knex('users');
    },

    async create(data: UserData) {
        const schema = Joi.object({
            name: Joi.string().max(50).required(),
            email: Joi.string().email().required()
        });

        const { error } = schema.validate(data);
        if (error) throw new AppError(error.message, 400);

        const existingEmail = await knex('users').where({ email: data.email }).first();
        if (existingEmail) throw new AppError('User with given email already exists', 400);

        await knex('users').insert(data);
    },

    async update(data: UserData, id: string) {
        const schema = Joi.object({
            name: Joi.string().max(50),
            email: Joi.string().email()
        });

        const { error } = schema.validate(data);
        if (error) throw new AppError(error.message, 400);

        await knex('users').where({ id })
            .update(data);
    },

    async delete(id: string) {
        await knex('users').where({ id })
            .del();
    }
};