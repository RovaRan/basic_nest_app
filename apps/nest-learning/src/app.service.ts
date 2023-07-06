import { Injectable } from '@nestjs/common';

const DATA = {
  name: 'Ranaivo',
  age: 12,
  position: 'Angular | React | Typescript Developer'
}
@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify(DATA);
  }
}
