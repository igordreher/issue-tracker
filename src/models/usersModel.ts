import knex from '../database';
import Joi from 'joi';

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
        if (error) throw error;

        await knex('users').insert(data);
    },

    async update(data: UserData, id: string) {
        const schema = Joi.object({
            name: Joi.string().max(50),
            email: Joi.string().email()
        });

        const { error } = schema.validate(data);
        if (error) throw error;

        await knex('users').where({ id })
            .update(data);
    },

    async delete(id: string) {
        await knex('users').where({ id })
            .del();
    }
};