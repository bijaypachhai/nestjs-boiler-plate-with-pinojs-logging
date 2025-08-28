import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { CommonModule } from './common/common.module';
import { CatsModule } from './modules/cats/cats.module';


@Module({
  imports: [
    // LoggerModule.forRoot({
    //   assignResponse: false,
    //   // pinoHttp: {
    //   //   autoLogging: false,
    //   // },
    //   /*
    //   It can be used for both disabling automatic req/res logs and removing request context from following logs. 
    //   It works for all requests by default. If you only need to turn off the automatic request/response logging 
    //   for some specific (or all) routes 
    //   but keep request context for app logs use pinoHttp.autoLogging field.
    //   */
    //   exclude: [
    //     {
    //       method: RequestMethod.GET,
    //       path: '/info'
    //     }
    //   ]
    // }),
    CommonModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
