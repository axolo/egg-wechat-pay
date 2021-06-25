# egg-wechat-pay

node-wechat-pay Egg.js plugin.

## Install

```bash
npm i @axolo/egg-wechat-pay --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.wechatPay = {
  enable: true,
  package: '@axolo/egg-wechat-pay',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.wechatPay = {
  clients: {
    mp: {
      appType: 'mp',
      appId: 'wechat_pay_appid',
      mchId: 'wechat_pay_mchid',
      mchCertSn: 'wechat_pay_mch_cert_serial_no',
      mchCertKey: 'wehcat_pay_mch_cert_private_key.pem',
      mchCert: 'wehcat_pay_mch_cert.pem',
      apiV3Key: 'wechat_pay_api_v3_secret',
      notifyUrl: 'https://api.huawo-trip.com/wechat-pay/notify/mp',
      currency: 'CNY',
      paySignType: 'RSA',
    },
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
'use strict';

const Controller = require('egg').Controller;

class WechatpayCertController extends Controller {
  async index() {
    const { app, ctx } = this;
    const wechatPay = app.wechatPay.get('mp');
    const { data: result } = await wechatPay.http.get('/v3/certificates');
    ctx.body = result;
  }
}

module.exports = WechatpayCertController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-wechat-pay/issues).

## License

[MIT](LICENSE)
