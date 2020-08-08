import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeSchema } from './schema/type.schema';
import { TypeService } from './type.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Type', schema: TypeSchema}])],
  controllers: [TypeController],
  providers: [TypeService],
  exports: [TypeService]
})
export class TypeModule {}
