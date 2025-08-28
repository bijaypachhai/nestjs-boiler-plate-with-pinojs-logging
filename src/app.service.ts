import { Injectable, NotFoundException } from '@nestjs/common';
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(
    private readonly logger: PinoLogger,
    // private readonly
  ){
    this.logger.setContext(AppService.name);
  }
  getHello(): string {
    this.logger.error("First Info Log from PinoLogger.");
    return 'Hello World!';
  }

  getInfo(): string {
    throw new NotFoundException('Not found error');
    this.logger.error("Error log from Info Service");
    return 'This is your info.'
  }

  getError(): void {
    throw new NotFoundException('Not found error')
  }
}
