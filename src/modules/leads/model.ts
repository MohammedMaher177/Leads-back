import { Schema, Document, model, Model } from 'mongoose';

export interface ILeads extends Document {
    name: string;
    status: 'newLeads' | 'contacted';
    date: Date;
    query: string
    leadSrc: string;
    propertyType: string
}

interface ILeadStatics extends Model<ILeads> {
    findByName(name: string): Promise<ILeads | null>;
}

const LeadsSchema = new Schema<ILeads>({
    name: { type: String, required: true, trim: true },
    query: {type: String, trim: true},
    leadSrc: {type: String, trim: true},
    propertyType: {type: String, trim: true},
    status: {
        type: String,
        enum: ['newLeads', 'contacted'],
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

LeadsSchema.statics.findByName = function (
    name: string
): Promise<ILeads | null> {
    return this.findOne({
        name: { $regex: new RegExp("^" + name + "$", "i") },
    });
};

const Leads = model<ILeads, ILeadStatics>('Leads', LeadsSchema);

export default Leads;
