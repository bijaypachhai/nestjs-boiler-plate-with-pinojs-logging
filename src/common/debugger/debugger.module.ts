import { Global, Module } from '@nestjs/common';
import { DebuggerService } from './debugger.service';
import { PinoLoggerModule } from '../logger/logger.module';

@Global()
@Module({
    imports: [PinoLoggerModule],
    providers: [DebuggerService],
    exports: [DebuggerService]
})
export class DebuggerModule {}