'use strict';

const createWechatPay = config => {
  const { WechatPay } = config;
  const wechatPay = new WechatPay(config);
  return wechatPay;
};

module.exports = app => {
  app.addSingleton('wechatPay', createWechatPay);
};
