import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    //console.log({value, metadata}); ---> Muestra el valor ingresado y su metadata

    if(!isValidObjectId(value)){
      throw new BadRequestException(`'${value}' No es un MongoID válido`);
    }
    return value;
  }
}
