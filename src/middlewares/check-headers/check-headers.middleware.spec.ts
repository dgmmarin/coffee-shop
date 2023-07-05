import { CheckHeadersMiddleware } from './check-headers.middleware';

describe('CheckHeadersMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckHeadersMiddleware()).toBeDefined();
  });
});
