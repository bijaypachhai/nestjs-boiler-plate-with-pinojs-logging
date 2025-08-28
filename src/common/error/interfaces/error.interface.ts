import { ValidationError } from "@nestjs/common";
import { ERROR_TYPE } from "../constants/error.enum.constant";

export interface IErrors {
    readonly message: string | Record<string, string>
    readonly property: string;
}

export interface IErrorsImport {
    row: number;
    file?: string;
    sheet?: number;
    errors: IErrors[];
}

export interface IValidationErrorImport extends Omit<IErrorsImport, 'errors'> {
    errors: ValidationError[];
}

export interface IErrorMetadata {
    [key: string]: any;
}

export interface IErrorException {
    statusCode: number;
    message: string;
    errors?: ValidationError[] | IValidationErrorImport[];
    data?: Record<string, any>;
    _error?: string;
    _errorType?: ERROR_TYPE;
    _metadata?: IErrorMetadata;
}

export interface IErrorHttpFilter extends Omit<IErrorException, '_errorType' | 'message'> {
    message: string;
}