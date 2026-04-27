# 截图替换指南

所有占位图位于 `docs/.vuepress/public/images/` 目录，均为 `.svg` 格式。

## 替换步骤

1. 将真实截图保存为 `.png` 或 `.jpg` 格式
2. 将文件放入 `docs/.vuepress/public/images/` 目录
3. 在对应的 `.md` 文件中，将图片路径中的 `.svg` 改为 `.png` 或 `.jpg`

**示例：**

```md
<!-- 替换前 -->

![登录页面截图](/rug-adapt-desc/images/login-page.svg)

<!-- 替换后 -->

![登录页面截图](/rug-adapt-desc/images/login-page.png)
```

## 占位图对应关系

| 文件名                  | 对应页面 | 描述             |
| ----------------------- | -------- | ---------------- |
| `login-page.svg`        | 登录页   | 登录表单界面     |
| `register-page.svg`     | 登录页   | 注册表单界面     |
| `auto-login.svg`        | 登录页   | 记住密码勾选     |
| `header-bar.svg`        | 快速开始 | 顶部信息栏       |
| `version-update.svg`    | 快速开始 | 版本更新提示     |
| `material-overview.svg` | 添加素材 | 页面总览         |
| `material-category.svg` | 添加素材 | 左侧分类导航     |
| `material-search.svg`   | 添加素材 | 搜索框           |
| `material-collect.svg`  | 添加素材 | 收藏图标         |
| `material-download.svg` | 添加素材 | 点击下载         |
| `local-overview.svg`    | 本地素材 | 页面总览         |
| `local-setting.svg`     | 本地素材 | 设置路径         |
| `local-open.svg`        | 本地素材 | 打开文件         |
| `source-overview.svg`   | 源文件   | 页面总览         |
| `source-collect.svg`    | 源文件   | 收藏操作         |
| `psd-overview.svg`      | PSD 素材 | 页面总览         |
| `psd-buy.svg`           | PSD 素材 | 购买弹窗         |
| `psd-link.svg`          | PSD 素材 | 百度网盘链接弹窗 |
| `import-vip.svg`        | 场景生成 | 非会员购买界面   |
| `import-env.svg`        | 场景生成 | 环境选择         |
| `import-style.svg`      | 场景生成 | 风格选择         |
| `import-progress.svg`   | 场景生成 | 下载进度条       |
| `more-service.svg`      | 更多服务 | 页面总览         |
| `more-poster.svg`       | 更多服务 | 海报弹窗         |
| `tools-overview.svg`    | 工具箱   | 页面总览         |
| `tools-remove-wm.svg`   | 工具箱   | 清除水印引导     |
| `tools-add-wm.svg`      | 工具箱   | 添加水印对话框   |
| `tools-resize.svg`      | 工具箱   | 尺寸规范化       |
| `tools-rotate.svg`      | 工具箱   | 画布旋转         |
| `tools-export.svg`      | 工具箱   | 批量导出图包     |
| `tools-rename.svg`      | 工具箱   | 批量重命名       |
| `tools-mockup.svg`      | 工具箱   | 一键样机替换     |
| `member-info.svg`       | 会员     | 会员信息页       |
| `member-buy.svg`        | 会员     | 开通会员         |
| `member-renew.svg`      | 会员     | 续费会员         |
| `recharge-dialog.svg`   | 充值     | 充值弹窗         |
| `recharge-qrcode.svg`   | 充值     | 扫码支付         |
| `setting-dialog.svg`    | 设置     | 系统设置         |
| `logo.svg`              | 全局     | 网站 Logo        |

## 建议截图尺寸

- 普通截图：**800 × 450 px**（16:9）
- Logo：**120 × 120 px**（正方形）
