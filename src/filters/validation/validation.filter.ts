import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Request, Response } from 'express';

@Catch(ValidationError)
export class ValidationFilter<T> implements ValidationError {
  target?: object;
  property: string;
  value?: any;
  constraints?: { [type: string]: string };
  children?: ValidationError[];
  contexts?: { [type: string]: any };
  toString(
    shouldDecorate?: boolean,
    hasParent?: boolean,
    parentPath?: string,
    showConstraintMessages?: boolean,
  ): string {
    throw new Error('Method not implemented.');
  }
  catch(exception: ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = 421;
    return response.status(status).json({
      message: {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception?.children?.toString() ?? '',
      },
    });
  }
}
