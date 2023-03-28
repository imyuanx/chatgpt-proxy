![Banner](./public/chatgpt-proxy-banner.png)

一键式部署 ChatGPT 私有代理，由 Next.js 驱动，支持 SSE！

简体中文 | [English](./README.md)

## 简介

此项目基于 Next.js，使用 Rewriter 完成代理功能，核心代码只有 [2 行](https://github.com/imyuanx/chatgpt-proxy/blob/main/next.config.js#L7-L8)，结合 Zeabur 或 Vercel 可以很简单的托管你的私有代理服务

开始之前，最好先查看[如何使用](#如何使用)章节判断此项目是否适用于你

ps: SSE 部分的代码来自 [chatgptProxyAPI](https://github.com/x-dr/chatgptProxyAPI)

## 快速跳转

- [在你的服务器上部署](#在你的服务器上部署)
- ~~[在 Zeabur 上部署](#在-zeabur-上部署)~~
- ~~[在 Vercel 上部署](#在-vercel-上部署)~~
- [如何使用](#如何使用)

## 在你的服务器上部署

> 你必须有一个服务器并且确保你的服务器可以访问 ChatGPT
>
> 你需要一些关于 [Docker](https://www.docker.com/) 相关的知识

1. Fork 这个仓库为你自己的仓库

<img width="600" src="public/frok.png" alt="fork" />

2. 切换到你 Fork 的项目目录下并运行 `docker build -t chatgpt-proxy .`

3. 然后运行 `docker run --name chatgpt-proxy -d -p 8000:3000 chatgpt-proxy`

4. 在浏览器中打开 `http://127.0.0.1:8000`

## 在 Zeabur 上部署

> ❗️⚠️❗️**警告：根据 Zeabur 使用条款，此项目或许违反了 `Never Fair Use - Proxies and VPNs` 条目，强烈不推荐使用 Zeabur 托管此项目！**
>
> ❗️⚠️❗️**警告：如果因为部署此项目到 Zeabur 导致您的账号被处罚，请自行承担后果**

<details>

<summary>部署步骤</summary>

> ❗️⚠️❗️**在完全阅读警告信息，了解可能存在的风险和后果的前提下，您可以继续完成部署**

具体操作如下

1. Fork 这个仓库为你自己的仓库

<img width="600" src="public/frok.png" alt="fork" />

2. 在 [Zeabur](https://zeabur.com) 控制台新增一个服务

<img width="600" src="public/zeabur.png" alt="步骤 1" />

3. 点击添加服务然后选择从源码部署

<img width="600" src="public/zeabur-1.png" alt="步骤 2" />

<img width="600" src="public/zeabur-1-1.png" alt="步骤 2-1"/>

4. 选择你 fork 的仓库

<img width="600" src="public/zeabur-2.png" alt="步骤 3" />

5. 选择 main 分支，开始部署

<img width="600" src="public/zeabur-3.png" alt="步骤 4" />

6. 部署成功后，点击生成域名

<img width="600" src="public/zeabur-4.png" alt="步骤 5" />

7. 最后得到你的服务

<img width="600" src="public/zeabur-5.png" alt="步骤 6" />

</details>

## 在 Vercel 上部署

> ❗️⚠️❗️**警告：根据 Vercel 使用条款，此项目或许违反了 [Never Fair Use - Proxies and VPNs](https://vercel.com/docs/concepts/limits/fair-use-policy#never-fair-use) 条目，强烈不推荐使用 Vercel 托管此项目！**
>
> ❗️⚠️❗️**警告：如果因为部署此项目到 Vercel 导致您的账号被处罚，请自行承担后果**

<details>

<summary>部署步骤</summary>

> ❗️⚠️❗️**在完全阅读警告信息，了解可能存在的风险和后果的前提下，您可以继续完成部署**

如果使用 Vercel 部署服务，必须[自定义域名](https://vercel.com/docs/concepts/get-started/assign-domain)，因为自定义域名不受 GFW 影响，具体操作如下

<a href="https://vercel.com/import/project?template=https://github.com/imyuanx/chatgpt-proxy" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="部署到 Vercel"></a>

1. 点击上方一键部署按钮

<img width="600" src="public/vercel.png" alt="One-click deploy" />

2. 部署后会自动为你 fork 此仓库，在输入框中输入自定义的仓库名称

<img width="600" src="public/vercel-deploy.png" alt="Deploy" />

3. 部署成功后，得到你的服务

<img width="600" src="public/vercel-success.png" alt="Alt text" />

4. 你必须为你的服务添加一个自定义域名，否则你将不能在国内访问你的服务

<img width="600" src="public/vercel-domain.png" alt="Domain" />

</details>

## 如何使用

无论你使用 Zeabur 还是 Vercel，部署完成后你都会得到以下这个代理服务

<img width="600" src="public/proxy.png" alt="Proxy service" />

得到的两个地址都会完全转发到 `https://api.openai.com` 并且都可在国内可访问，其中 `.../proxy-sse` 支持 SSE

你可以在支持自定义 `API` 的应用中使用你的代理服务，实现在国内调用 `openai` 接口的目的

例如[openai-translator](https://github.com/yetone/openai-translator)：

<img width="600" src="public/openai-translator.png" alt="Alt text" />

[回到顶部](#简介)
