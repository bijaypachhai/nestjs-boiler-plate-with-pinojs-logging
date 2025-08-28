import { Module, RequestMethod } from "@nestjs/common";
import { LoggerModule } from "nestjs-pino";
import { PinoLoggerService } from "./logger.service";
import createWritableStream from "./logger.transport";
import { streamDestination, streamTransport } from "./custom.transport";

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
            pinoHttp: [
                {
                    // autoLogging: false,
                    // stream: pino.destination({
                    //     sync: false,
                    //     minLength: 2048,
                    //     dest: './stream.log'
                    // })
                },
                streamDestination
                // createWritableStream()
            ],
        })
    ],
    providers: [PinoLoggerService],
    exports: [PinoLoggerService]
})
export class PinoLoggerModule {}