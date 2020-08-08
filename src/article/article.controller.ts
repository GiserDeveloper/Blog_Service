import { Controller,Get, Post, Param, Put, Delete, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { TypeService } from 'src/type/type.service';

@Controller('article')
@ApiTags('文章内容')
export class ArticleController {
    constructor(
        private readonly articleService: ArticleService,
        private readonly typeService: TypeService
    ) {}

    @Post()
    @ApiOperation({summary: '创建新文章'})
    createArticle(@Body() articleDto: ArticleDto){
        return this.articleService.create(articleDto)
    }

    @Get()
    @ApiOperation({summary: '显示所有文章'})
    getArticle(){
        this.articleService.test()
        return this.articleService.findAll()
    }

    @Get(':articleId')
    @ApiParam({
        name: 'articleId',
        description: '请传入文章Id'
    })
    @ApiOperation({summary: '根据文章ID查找文章'})
    getArticleTypeById(@Param('articleId') id){
        return this.articleService.getArticleById(id)
    }

    @Put(':articleId')
    @ApiParam({
        name: 'articleId',
        description: '请传入文章Id' 
    })
    @ApiOperation({summary: '传入文章ID修改文章'})
    updateArticleTypeById(@Param('articleId') id, @Body() articleDto: ArticleDto){
        return this.articleService.updateArticleById(id, articleDto)
    }

    @Delete(':articleId')
    @ApiParam({
        name: 'articleId',
        description: '请传入文章Id' 
    })
    @ApiOperation({summary: '传入文章ID删除文章'})
    deleteArticleTypeById(@Param('articleId') id){
        return this.articleService.deleteArticleById(id)
    }
}
