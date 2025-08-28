import { Module } from "@nestjs/common";
import { ErrorFilter } from "./error.filter";

@Module({
    imports: [],
    providers: [ErrorFilter],
})
export class ErrorModule {}