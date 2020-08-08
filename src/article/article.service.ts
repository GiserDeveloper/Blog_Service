import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ArticleDto } from './dto/article.dto';
import { Article } from './schema/article.schema';
import { Type } from 'src/type/schema/type.schema';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel('Article') private articleModel: Model<Article>,
        @InjectModel('Type') private typeModel: Model<Type>
    ) {}

    async create(articleDto: ArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(articleDto);
        return await createdArticle.save();
    }

    async findAll(): Promise<Article[]> {
        return await this.articleModel.find().exec()
    }

    async getArticleById(id){
        return await this.articleModel.findById({_id:id})
    }

    async updateArticleById(id, data: ArticleDto){
        return await this.articleModel.findByIdAndUpdate({_id:id}, data, {new:true});
    }

    async deleteArticleById(id){
        return await this.articleModel.deleteOne({_id: id})
    }

    async test(){
        this.typeModel.aggregate([
            {
                $lookup:{
                    from: "articles",
                    localField: "id",
                    foreignField: "type_id",
                    as: "docs"
                }
            }
        ],function(err, docs){
            console.log(JSON.stringify(docs))
        })
    }
}
