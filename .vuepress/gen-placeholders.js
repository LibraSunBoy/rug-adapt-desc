/**
 * 运行此脚本生成所有占位图：node docs/.vuepress/gen-placeholders.js
 */
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public/images');

const images = [
  // 登录
  { name: 'login-page.png', label: '登录页面' },
  { name: 'register-page.png', label: '注册页面' },
  { name: 'auto-login.png', label: '记住密码勾选' },
  // 样机列表
  { name: 'material-list-overview.png', label: '样机列表 - 总览' },
  { name: 'material-list-category.png', label: '样机列表 - 分类导航' },
  { name: 'material-list-search.png', label: '样机列表 - 搜索' },
  { name: 'material-list-use.png', label: '样机列表 - 购买使用' },
  // 本地样机
  { name: 'local-material-two-overview.png', label: '本地样机 - 总览' },
  { name: 'local-material-two-setting.png', label: '本地样机 - 设置路径' },
  { name: 'local-material-two-browse.png', label: '本地样机 - 浏览分类' },
  { name: 'local-material-two-use.png', label: '本地样机 - 使用样机' },
  // 工具箱
  { name: 'tools-overview.png', label: '工具箱 - 总览' },
  { name: 'tools-remove-wm.png', label: '清除水印引导' },
  { name: 'tools-add-wm.png', label: '添加水印对话框' },
  { name: 'tools-resize.png', label: '尺寸规范化对话框' },
  { name: 'tools-rotate.png', label: '画布旋转对话框' },
  { name: 'tools-export.png', label: '批量导出图包' },
  { name: 'tools-rename.png', label: '批量重命名' },
  { name: 'tools-mockup.png', label: '一键样机替换' },
  // 会员
  { name: 'member-info.png', label: '会员信息页' },
  { name: 'member-buy.png', label: '开通会员' },
  { name: 'member-renew.png', label: '续费会员' },
  // 充值
  { name: 'recharge-dialog.png', label: '充值弹窗' },
  { name: 'recharge-qrcode.png', label: '扫码支付' },
  // 设置
  { name: 'setting-dialog.png', label: '系统设置' },
  // 顶部栏
  { name: 'header-bar.png', label: '顶部信息栏' },
  { name: 'version-update.png', label: '版本更新提示' },
  // logo
  { name: 'logo.png', label: 'RugAdapt Logo' }
];

function makeSvg(label, w = 800, h = 450) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#1a1a2e"/>
  <rect x="2" y="2" width="${w - 4}" height="${h - 4}" fill="none" stroke="#f1951c" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="${w / 2}" y="${h / 2 - 25}" font-family="Arial,sans-serif" font-size="26" fill="#f1951c" text-anchor="middle">📸 ${label}</text>
  <text x="${w / 2}" y="${h / 2 + 15}" font-family="Arial,sans-serif" font-size="15" fill="#888" text-anchor="middle">请替换为实际截图</text>
  <text x="${w / 2}" y="${h / 2 + 45}" font-family="Arial,sans-serif" font-size="13" fill="#555" text-anchor="middle">${w} × ${h} px</text>
</svg>`;
}

images.forEach(({ name, label }) => {
  const isLogo = name === 'logo.png';
  const svg = makeSvg(label, isLogo ? 120 : 800, isLogo ? 120 : 450);
  // VuePress 不能直接用 SVG 作为 img src 的 PNG，这里直接存 SVG 并以 .svg 后缀保存
  const svgName = name.replace('.png', '.svg');
  fs.writeFileSync(path.join(outDir, svgName), svg, 'utf8');
  console.log('✓', svgName);
});

console.log('\n所有占位图已生成到 docs/.vuepress/public/images/');
console.log('替换时将对应 .svg 文件替换为真实截图（.png/.jpg），并更新 md 文件中的引用路径即可。');
