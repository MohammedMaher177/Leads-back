import { Request, Response } from "express";
import repo from "../modules/leads/repo";
import { global_error } from "../helper/ErrorHandler/ErrorHandler";



async function list(req: Request, res: Response) {
    const record = await repo.get_all()
    res.status(record.statusCode).json(record)
}


async function get(req: Request, res: Response) {
    const record = await repo.get(req.params.id)
    res.status(record.statusCode).json(record)
}

async function create(req: Request, res: Response) {
    await repo.existName(req.body.name)
    const record = await repo.create(req.body)
    res.status(record.statusCode).json(record)
}


async function update(req: Request, res: Response) {
    const { id } = req.params
    if (req.body.name) {
        const existName  = await repo.findByName(req.body.name);
        if (existName && id != existName?._id!.toString()!) {
            return global_error("Name already exist", 403);
        }
    }
    const record = await repo.update(id, req.body)
    res.status(record.statusCode).json(record)
}

async function remove(req: Request, res: Response) {
    const record = await repo.__delete(req.params.id)
    res.status(record.statusCode).json(record)
}

const leadsController = {
    list, get, update, create, remove
}

export default leadsController