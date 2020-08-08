import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TypeDto {
    @IsNumber()
    @ApiProperty({
        description: '文章类型ID'
    })
    readonly id: number;
    @IsString()
    @ApiProperty({
        description: '文章类型名称'
    })
    readonly typeName: string;
    @IsNumber()
    @ApiProperty({
        description: '类型排序编号'
    })
    readonly orderNum: number;
}