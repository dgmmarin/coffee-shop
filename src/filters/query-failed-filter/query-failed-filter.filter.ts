import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedFilterFilter<QueryFailedError> implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    // const ctx = host.switchToHttp();
    // const response = ctx.getResponse<Response>();
    // const request = ctx.getRequest<Request>();
    // const status = exception.getStatus();
    // const stack = exception.stack;
    // return response.status(status).json({
    //   message: {
    //     statusCode: status,
    //     timestamp: new Date().toISOString(),
    //     path: request.url,
    //     message: exception.message,
    //   },
    // });
  }
}
