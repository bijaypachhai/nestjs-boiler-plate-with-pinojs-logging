import { Injectable } from "@nestjs/common";
import { PinoLogger } from "nestjs-pino";

@Injectable()
export class PinoLoggerService {
    constructor(
        private readonly logger: PinoLogger
    ) {}

    captureError(error: any | Error) {
        // this.logger.setContext(context);
        this.logger.error(error);
    }

    captureMessage(data: any) {
        // this.logger.setContext(context);
        this.logger.info(data);
    }
}