'use strict';

const mock = require('egg-mock');

describe('test/wechat-pay.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/wechat-pay-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, wechatPay')
      .expect(200);
  });
});
