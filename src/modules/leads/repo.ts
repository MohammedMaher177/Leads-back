
import { AppError } from "../../helper/AppError/AppError";
import {
    global_error,
    global_success,
} from "../../helper/ErrorHandler/ErrorHandler";
import Lead, { ILeads } from "./model";

async function get(id: string) {
    const record = await Lead.findById(id);
    return record
        ? global_success(record, 200)
        : global_error("Lead not found", 404);
}

async function findByName(name: string) {
    const record = await Lead.findByName(name);
    return record
        // ? global_success(record, 200)
        // : global_error("Lead not found", 404);
}

async function get_all() {
    const record = await Lead.find()
    return record
        ? { record, success: true, statusCode: 200 }
        : {
            success: false,
            message: "record not found",
            errors: {},
            statusCode: 404,
        };
}

async function create(data: ILeads) {
    const record = await Lead.create(data);
    return record
        ? global_success(record, 201)
        : global_error("Failed to create new record", 400);
}

async function update(id: string, data: ILeads) {
    const lead = await Lead.findById(id);
    if (!lead) {
        throw new AppError("Lead not found", 404);
    }
    for (const key of Object.keys(data)) {
        if (key in lead!) {
            (lead as any)[key]! = data[key as keyof ILeads];
        }
    }
    await lead?.save();
    return global_success(lead, 200);
}

async function __delete(id: string) {
    const lead = await Lead.findByIdAndDelete(id);

    return lead
        ? global_success(lead, 200)
        : global_error("Lead not found", 400);
}

async function existName(name: string) {
    const record = await Lead.findByName(name);
    return record ? global_error("Name already exist", 403) : true;
}

const leadRepo = {
    create,
    get,
    get_all,
    update,
    __delete,
    existName,
    findByName
};

export default leadRepo;
