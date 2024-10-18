# 使用 Systemd 运行和管理 Frpc

我们假设你的 Frpc 和配置文件在 `/opt/lcf/` 中，配置文件名为 `frpc.ini`

## 给与 Frpc 运行权限

```sh
chmod +x /opt/lcf/frpc
```

## 写入系统服务

将以下内容写入以下目录任意 `.service` 后缀文件中，比如 `lcf-frpc.service`

- /etc/systemd/system/
- /usr/lib/systemd/system/

```ini
[Unit]
Description=LoCyanFrp Client

[Service]
WorkingDirectory=/opt/lcf/
Exec=/opt/lcf/frpc
# 如果你的配置文件名不为 frpc.ini，请手动使用 -c 指定：
#Exec="/opt/lcf/frpc -c config.ini"

[Install]
WantedBy=network.target
```

## 启动并设置自动启动

```sh
systemctl enable lcf-frpc.service --now

# 查看运行状态
systemctl status lcf-frpc.service
# 查看更详细的日志
#jouralctl -aeu lcf-frpc.service
```

更多管理命令，请参阅: [Linux 中国: systemctl 命令完全指南](https://linux.cn/article-5926-1.html)
