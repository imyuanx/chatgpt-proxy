一键式部署 ChatGPT 私有代理，由 Next.js 驱动

简体中文 | [English](./README.md)

## 简介

此项目基于 Next.js，使用 Rewriter 完成代理功能，核心代码只有 [2 行](https://github.com/imyuanx/chatgpt-proxy/blob/main/next.config.js#L7-L8)，结合 Zeabur 或 Vercel 可以很简单的托管你的私有代理服务

### [示例](https://chatgpt-proxy-preview.zeabur.app)

开始之前，最好先查看[如何使用](#如何使用)章节判断此项目是否适用于你

## 在 Zeabur 上部署

推荐使用 Zeabur，具体操作如下

1. Fork 这个仓库为你自己的仓库

<img width="600" src="public/frok.png" alt="fork" />

2. 在 [Zeabur](https://zeabur.com) 部署你的仓库

3. 在 [Zeabur](https://zeabur.com) 控制台新增一个服务

<img width="600" src="public/zeabur-console.png" alt="步骤 1" />

4. 选择从源码部署

<img width="600" src="public/zeabur-console-1.png" alt="步骤 2" />

5. 选择你 fork 的仓库

<img width="600" src="public/zeabur-console-2.png" alt="步骤 3" />

6. 选择 main 分支，开始部署

<img width="600" src="public/zeabur-console-3.png" alt="步骤 4" />

7. 部署成功后，在 setting 选项卡下生成域名

<img width="600" src="public/zeabur-console-4.png" alt="步骤 5" />

8. 最后得到你的服务

<img width="600" src="public/zeabur-console-5.png" alt="步骤 6" />

## 在 Vercel 上部署

> ❗️⚠️❗️**警告：根据 Vercel 使用条款，此项目或许违反了 [Never Fair Use - Proxies and VPNs](https://vercel.com/docs/concepts/limits/fair-use-policy#never-fair-use) 条目，强烈不推荐使用 Vercel 托管此项目！**
>
> ❗️⚠️❗️**警告：如果因为部署此项目到 Vercel 导致您的账号被处罚，请自行承担后果**

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

## 如何使用

无论你使用 Zeabur 还是 Vercel，部署完成后你都会得到以下这个代理服务

<img width="600" src="public/proxy.png" alt="Proxy service" />

其中红框中的地址会完全转发到`https://api.openai.com`，并且此地址在国内可访问

你可以在支持自定义 `API` 的应用中使用你的代理服务，实现在国内调用 `openai` 接口的目的

例如[openai-translator](https://github.com/yetone/openai-translator)：

<img width="600" src="public/openai-translator.png" alt="Alt text" />

[回到顶部](#简介)
