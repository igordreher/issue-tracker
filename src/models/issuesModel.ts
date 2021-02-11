import knex from '../database';
import Joi from 'joi';

interface IssueData {
    title: string;
    details: string;
    submitter_id?: number;
    assigned_id?: number | null;
}

export default {

    async find() {
        return await knex('issues');
    },

    async create(data: IssueData) {
        const schema = Joi.object({
            title: Joi.string().max(50).required(),
            details: Joi.string().required(),
            submitter_id: Joi.number().required()
        });

        const { error } = schema.validate(data);
        if (error) throw error;

        await knex('issues').insert(data);
    },

    async update(data: IssueData, id: string) {
        const schema = Joi.object({
            title: Joi.string().max(50),
            details: Joi.string(),
            assigned_id: Joi.number().allow(null)
        });

        const { error } = schema.validate(data);
        if (error) throw error;

        await knex('issues').where({ id })
            .update(data);
    },

    async delete(id: string) {
        await knex('issues').where({ id })
            .del();
    }
};