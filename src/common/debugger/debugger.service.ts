import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENUM_APP_ENVIRONMENT } from '../constants/app.constants';
import { PinoLoggerService } from '../logger/logger.service';

@Injectable()
export class DebuggerService {
  env: ENUM_APP_ENVIRONMENT;
  constructor(
    private readonly configService: ConfigService,
    private readonly loggerService: PinoLoggerService,
  ) {
    this.env = this.configService.get<ENUM_APP_ENVIRONMENT>(
      'app.env',
      ENUM_APP_ENVIRONMENT.DEVELOPMENT, //Default value of none is given
    );
  }

  log(...data: any[]) {
    if (this.env !== ENUM_APP_ENVIRONMENT.PRODUCTION) {
      console.log(...data);
    }
  }

  info(data: any) {
    this.loggerService.captureMessage(data);
  }

  warn(data: any) {
    this.loggerService.captureMessage(data);
  }

  error(error: any | Error) {
    this.loggerService.captureError(error);
  }
}
