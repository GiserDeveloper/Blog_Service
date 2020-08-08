import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleDto {

        @ApiProperty({
            description: '文章类型ID'
        })
        type_id : number;
    
        //文章标题
        @ApiProperty({
            description: '文章标题'
        })
        title: string;
    
        //文章主题内容
        @ApiProperty({
            description: '文章内容'
        })
        article_content: string;
    
        //文章简介
        @ApiProperty({
            description: '文章简介'
        })
        introduce: string;
    
        //文章发布时间
        @ApiProperty({
            description: '文章发布时间'
        })
        addTime: Date;
    
        //浏览次数
        @ApiProperty({
            description: '文章浏览次数'
        })
        view_count: number;

}