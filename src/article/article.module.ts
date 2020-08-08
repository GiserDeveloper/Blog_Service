import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from './article.service';
import { ArticleSchema } from './schema/article.schema';
import { TypeModule } from 'src/type/type.module';
import { TypeSchema } from 'src/type/schema/type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Article', schema: ArticleSchema}]), 
    MongooseModule.forFeature([{name: 'Type', schema: TypeSchema}]),
    TypeModule
  ],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
