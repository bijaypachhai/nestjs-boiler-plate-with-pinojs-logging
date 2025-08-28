import { Module, RequestMethod } from "@nestjs/common";
import { LoggerModule } from "nestjs-pino";
import { PinoLoggerService } from "./logger.service";
import createWritableStream from "./logger.transport";

@Module({
    imports: [
        LoggerModule.forRoot({
            assignResponse: false,
            // exclude: [
            //     {
            //         method: RequestMethod.POST,
            //         path: '/'
            //     }
            // ],
            pinoHttp: createWritableStream(),
        })
    ],
    providers: [PinoLoggerService],
    exports: [PinoLoggerService]
})
export class PinoLoggerModule {}