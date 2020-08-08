import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Type extends Document {

    //文章类型编号
    @Prop()
    id: number;

    //文章类型名称
    @Prop()
    typeName: string;

    //类型排序编号
    @Prop()
    orderNum: number;
    
}

export const TypeSchema = SchemaFactory.createForClass(Type);