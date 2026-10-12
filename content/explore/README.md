# 探索中国 · 文章怎么写

每篇文章一个文件夹，文件夹名就是网址，例如 `yunnan/` → `/explore/yunnan`。
文件夹里每种语言一个文件：`zh.md` `en.md` `ko.md` `id.md` `ja.md`。
缺少某种语言时，该语言的列表里不显示这篇；直接打开网址会显示英文版并提示。

## 文件开头（必填信息）

```
---
title: "云南：群山、茶与众多民族"
place: "云南"            # 简短地名，用在"云南的地方"这类小标题里
summary: "一两句话的简介，显示在卡片和标题下面"
author: penny            # penny / holiday / cassie
date: 2026-11-01
cover: /images/explore/yunnan.jpg   # 封面图，可不填
video: "dQw4w9WgXcQ"     # YouTube 视频编号；写 "" 显示"视频即将上线"；整行删掉则不放视频
parent: china            # 上一级文章（省份写 china，城市写所属省份）
journeys: [yunnan-terraces-tea-horse-road]   # 文末推荐的旅行路线
order: 2                 # 同一层级里的排序，小的在前
draft: true              # 草稿：只在测试版显示，正式版看不到；写完改成 false
---
```

YouTube 视频编号：视频网址 `https://www.youtube.com/watch?v=XXXX` 里 `v=` 后面那串。

## 正文写法（Markdown）

- `## 小标题`、`### 更小的标题`
- `**加粗**`
- `> 一句引言`，会显示成大号金句
- 图片：`![图片说明](/images/explore/yunnan-terraces.jpg)`，说明文字会显示在图片下方；图片放在 `public/images/explore/`
- 分隔线：单独一行 `---`，显示为青花波浪纹

特别格式：

```
::youtube{id="视频编号"}

::short{url="https://www.tiktok.com/@xxx/video/123" label="60 秒看元阳梯田日出"}

:::tip
**小贴士：** 这里的内容会显示在浅蓝色提示框里。
:::
```

## 流程

1. 用 Word 写好中文（或英文）稿，图片单独放一个文件夹。
2. 交给 Claude 转成 Markdown、翻译其他语言、放进对应文件夹，提交到 `dev` 分支。
3. 在测试网址上检查；没问题后把 `draft: true` 改成 `false`，合并到 `main` 发布。
