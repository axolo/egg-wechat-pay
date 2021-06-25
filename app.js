'use strict';

const WxPay = require('@axolo/node-wechat-pay');

const createWechatPay = config => {
  const { WechatPay = WxPay } = config;
  const wechatPay = new WechatPay(config);
  return wechatPay;
};

module.exports = app => {
  app.addSingleton('wechatPay', createWechatPay);
};
