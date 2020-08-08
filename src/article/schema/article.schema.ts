import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Article extends mongoose.Document {

    //文章类型编号
    @Prop()
    type_id : number;

    //文章标题
    @Prop()
    title: string;

    //文章主题内容
    @Prop()
    article_content: string;

    //文章简介
    @Prop()
    introduce: string;

    //文章发布时间
    @Prop(Date)
    addTime: Date;

    //浏览次数
    @Prop()
    view_count: number;

}

export const ArticleSchema = new mongoose.Schema({
    type_id: Number,
    title: String,
    article_content: String,
    introduce: String,
    addTime: Date,
    view_count: Number,
},    {
    timestamps: true
})