import { Controller, Get, Post, Param, Put, Delete, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TypeSchema, Type } from './schema/type.schema';
import { TypeService } from './type.service';
import { TypeDto } from './dto/type.dto';

@Controller('type')
@ApiTags('文章类型')
export class TypeController {
    constructor(private readonly typeService: TypeService) {}

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    @ApiOperation({summary: '创建文章新类型'})
    createArticleType(@Body() typeDto: TypeDto){
        return this.typeService.create(typeDto)
    }

    @Get()
    @ApiOperation({summary: '显示文章类型'})
    getArticleType(){
        return this.typeService.findAll()
    }

    @Get(':articleTypeId')
    @ApiParam({
        name: 'articleTypeId',
        description: '请传入文章类型Id'
    })
    @ApiOperation({summary: '根据文章类型ID查找类型'})
    getArticleTypeById(@Param('articleTypeId') id){
        return this.typeService.getTypeById(id)
    }

    @Put(':articleTypeId')
    @ApiParam({
        name: 'articleTypeId',
        description: '请传入文章类型Id' 
    })
    @ApiOperation({summary: '传入文章类型ID修改类型'})
    updateArticleTypeById(@Param('articleTypeId') id, @Body() type: TypeDto){
        return this.typeService.updateTypeById(id, type)
    }

    @Delete(':articleTypeId')
    @ApiParam({
        name: 'articleTypeId',
        description: '请传入文章类型Id' 
    })
    @ApiOperation({summary: '传入文章类型ID删除类型'})
    deleteArticleTypeById(@Param('articleTypeId') id){
        return this.typeService.deleteTypeById(id)
    }

}
