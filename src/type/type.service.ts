import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TypeDto } from './dto/type.dto';
import { Type } from './schema/type.schema';

@Injectable()
export class TypeService {
    constructor(@InjectModel('Type') private typeModel: Model<Type>) {}

    async create(createTypeDto: TypeDto): Promise<Type> {
        const createdType = new this.typeModel(createTypeDto);
        return await createdType.save();
    }

    async findAll(): Promise<Type[]> {
        return await this.typeModel.find().exec()
    }

    async getTypeById(id){
        return await this.typeModel.find({id:id})
    }

    async updateTypeById(id, data: TypeDto){
        return await this.typeModel.updateOne({id:id}, data, {new:true});
    }

    async deleteTypeById(id){
        return await this.typeModel.deleteOne({id: id})
    }

    async test(){
        return await new this.typeModel();
    }
}
