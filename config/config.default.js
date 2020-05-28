'use strict';

const WechatPay = require('@axolo/node-wechat-pay');

/**
 * **egg-wechat-pay default config**
 *
 * @see https://github.com/axolo/node-wechat-pay
 * @property {Object} WechatPay - @axolo/node-wechat-pay
 * @property {String} appId - appId of Wechat Application
 * @property {String} appSecret - appSecret of Wechat Application
 * @member Config#wechatPay
 */
exports.wechatPay = {
  default: {
    WechatPay,
  },
  // client: {
  //   appid: 'APP_ID',
  //   appSecret: 'APP_SECRET',
  // },
};
