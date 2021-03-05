import Joi from 'joi';
import knex from '../database';
import { AppError } from '../errors/AppError';

interface UserData {
    name: string;
    email: string;
}

export default {
    async find(query?: any) {
        const { name, email } = query;
        const users = knex('users');

        if (name)
            users.where('name', 'like', `%${name}%`);
        if (email)
            users.where('email', 'like', `%${email}%`);

        return await users;
    },

    async findOne(id: string) {
        const user = await knex('users')
            .where({ id }).first();

        if (!user) throw new AppError('User not found', 404);

        return user;
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
        }).or('name', 'email');

        const { error } = schema.validate(data);
        if (error) throw new AppError(error.message, 400);

        const user = knex('users').where({ id });
        if ((await user).length === 0) throw new AppError('User not found', 404);

        await user.update(data);
    },

    async delete(id: string) {
        await knex('users').where({ id })
            .del();
    }
};