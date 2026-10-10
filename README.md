# Lantern Local 网站

面向外国游客的中国旅行中介网站，三种语言：英文 `/en`、韩文 `/ko`、中文 `/zh`。
技术栈：Next.js 16（App Router）+ Tailwind CSS 4，字体本地托管（不依赖 Google Fonts，在中国境内也能正常加载）。

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000 ，会按浏览器语言自动跳到 `/en`、`/ko` 或 `/zh`。

## 目录说明

| 位置 | 内容 |
| --- | --- |
| `src/dictionaries/en.json` `ko.json` `zh.json` | 所有界面文字（三种语言，结构相同）。韩文、中文为初译，需母语者校对 |
| `src/content/cities.ts` | 城市数据：杭州、西安有完整页面；上海、北京、成都只出现在目的地列表 |
| `src/config/site.ts` | WhatsApp 号码、Kakao 链接、邮箱、许可证号、定金比例等 —— 标了 `TODO` 的都要替换 |
| `src/app/[lang]/` | 各个页面：首页、request、how-it-works、about、destinations、faq、tips、privacy、terms |
| `src/app/api/inquiry/route.ts` | 询价表单的接收接口 |
| `src/components/` | 页眉页脚、波纹饰带、瓷砖框、表单等组件 |
| `public/images/` | 放照片（见下） |

## 常见修改

**加照片**：把图片放进 `public/images/cities/`，在 `cities.ts` 对应城市里写 `image: "/images/cities/hangzhou.jpg"`；
行程灵感卡片同理（每个 idea 的 `image` 字段）。没有图片时会显示带文字说明的占位框。

**加一个城市页**：在 `cities.ts` 里给该城市加上 `page: { ... }`（照着 `xian` 写），页面会自动生成在 `/en/destinations/<slug>`。

**改文字**：三种语言分别改 `src/dictionaries/` 里对应的 JSON，键名保持一致。

## 询价表单发邮件

1. 在 https://resend.com 注册并创建 API Key，验证你的域名
2. 复制 `.env.example` 为 `.env.local`，填入 `RESEND_API_KEY`、`INQUIRY_TO_EMAIL`、`INQUIRY_FROM_EMAIL`
3. 部署到 Vercel 时，在项目设置的 Environment Variables 里填同样的三个值

没配置之前，表单提交会显示成功，但内容只打印在服务器日志里，**不会送达任何人**。

## 上线前清单

- [ ] `src/config/site.ts` 中所有 TODO
- [ ] 团队、向导姓名与照片（`about/page.tsx`、`cities.ts`）
- [ ] 隐私政策、预订条款正文（`privacy`、`terms` 页面）
- [ ] 韩文、中文校对
- [ ] 配置 Resend 并实际发一次测试询价
- [ ] 部署到 Vercel，绑定 lanternlocaltours.com
