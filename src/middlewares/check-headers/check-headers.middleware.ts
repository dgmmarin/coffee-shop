import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';

const logger = new Logger("CheckHeadersMiddleware");
@Injectable()
export class CheckHeadersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    logger.warn(`Checking the data`);
    next();
  }
}
