import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeModule } from './type/type.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/react-blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }),TypeModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
