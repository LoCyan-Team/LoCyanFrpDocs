# 常见问题解决方案

## 面板

### 500 Internal Server Error

服务器错误，或请求发送的数据内容有误

### 418 I'm a teapot

我是茶壶，请不要让我冲咖啡

## 隧道启动

### 403 Forbidden

没有权限连接至此服务器，通常为没有[实人](/app/account#一级认证)，或隧道配置不正确

### 404 Not Found

如果是使用 [Nya LoCyanFrp!](https://nyalcf.1l1.icu/) 启动的隧道，那么请在隧道列表删除自定义配置文件后重试

### no such host

更新客户端版本即可

### i/o timed out

服务器崩了, [联系管理员](/app/contact.html)等待修复

### cannot connect to local service *.*.*.*:*****, target machine actively refused it

检查本地服务是否还在运行, 本地设备能否直接连接到 \*.\*.\*.\*:\*\*\*\*\*

### dial tcp: lookup lcf-frps-api.locyanfrp.cn: no such host

请将 Frpc 更新到最新版本

### EOF

这种情况一般是你的杀毒软件网络安全防护功能导致的，常见火绒用户遇到这个问题，关闭网络安全防护功能解决
