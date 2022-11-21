import React from 'react';
import { getAuthorizeInfo } from '@/services/apiserver/auth';

const WeixinLogin: React.FC = () => {
  const loadScript = new Promise(function (resolve, reject) {
    const s = document.createElement('script');
    s.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js';
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });

  Promise.all([getAuthorizeInfo(), loadScript]).then((values) => {
    const [{ data }] = values;
    new window.WxLogin({
      self_redirect: false,
      id: 'wx_login_container',
      appid: data.appid, //微信开放平台网站应用appid
      scope: data.scope,
      redirect_uri: encodeURI(location.origin + '/fe/user/login'), //设置扫码成功后回调页面
      state: data.state,
      style: 'black',
    });

    //设置iframe标签可以进行跨域跳转
    const iframes = document.getElementById('wx_login_container').getElementsByTagName('iframe');
    if (iframes.length) {
      iframes[0].setAttribute('sandbox', 'allow-scripts allow-top-navigation allow-same-origin');
    }
  });

  return <div id="wx_login_container" />;
};

export default WeixinLogin;
