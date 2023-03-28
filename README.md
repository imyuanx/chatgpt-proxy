![Banner](./public/chatgpt-proxy-banner.png)

One-click deployment of the ChatGPT private proxy, power by Next.js, support SSE!

English | [简体中文](./README-CN.md)

## Introduction

This project is based on Next.js, use Rewriter to complete proxy function, only [2 lines](https://github.com/imyuanx/chatgpt-proxy/blob/main/next.config.js#L7-L8) of core code, combining Zeabur or Vercel can easily host your private proxy service

Before you start, you'd better check the [How to use](#how-to-use) section to determine whether this project is applicable to you

ps: The SSE part of the code from [chatgptProxyAPI](https://github.com/x-dr/chatgptProxyAPI)

## Quick jump

- [Deploy on your server](#deploy-on-your-server)
- ~~[Deploy on Zeabur](#deploy-on-zeabur)~~
- ~~[Deploy on Vercel](#deploy-on-vercel)~~
- [How to use](#how-to-use)

## Deploy on your server

> You must have a server and make sure your server can access ChatGPT
>
> You need some knowledge about [Docker](https://www.docker.com/)

1. Fork this repository for your own repository

<img width="600" src="public/frok.png" alt="fork" />

2. Switch to the your forked project directory and run `docker build -t chatgpt-proxy .`

3. then run `docker run --name chatgpt-proxy -d -p 8000:3000 chatgpt-proxy`

4. open `http://127.0.0.1:8000` on your browser

## Deploy on Zeabur

> ❗️⚠️❗️**Warning: This project may violate the `Never Fair Use - Proxies and VPNs` entries under the Zeabur Terms of Use. Zeabur hosting this project is strongly not recommended!**
>
> ❗️⚠️❗️**Warning: If your account is punished due to the deployment of this project to Zeabur, please bear the consequences**

<details>
<summary>Steps for deployment</summary>

> ❗️⚠️❗️**Assuming that you have completely read the warning information and understand the possible risks and consequences, you can still continue to complete the deployment**

Specific operations are as follows

1. Fork this repository for your own repository

<img width="600" src="public/frok.png" alt="fork" />

2. Add a new service on [Zeabur](https://zeabur.com) console

<img width="600" src="public/zeabur.png" alt="step 1"/>

3. Add service and deploy from source code

<img width="600" src="public/zeabur-1.png" alt="step 2"/>

<img width="600" src="public/zeabur-1-1.png" alt="step 2-1"/>

4. Select your forked repo

<img width="600" src="public/zeabur-2.png" alt="step 3"/>

5. Select main and deploy

<img width="600" src="public/zeabur-3.png" alt="step 4"/>

6. After the deployment is successful, Generate the domain name.

<img width="600" src="public/zeabur-4.png" alt="step 5"/>

7. Finally get your service

<img width="600" src="public/zeabur-5.png" alt="step 6"/>
</details>

## Deploy on Vercel

> ❗️⚠️❗️**Warning: This project may violate the [Never Fair Use - Proxies and VPNs](https://vercel.com/docs/concepts/limits/fair-use-policy#never-fair-use) entries under the Vercel Terms of Use. Vercel hosting this project is strongly not recommended!**
>
> ❗️⚠️❗️**Warning: If your account is punished due to the deployment of this project to Vercel, please bear the consequences**

<details>

<summary>Steps for deployment</summary>

> ❗️⚠️❗️**Assuming that you have completely read the warning information and understand the possible risks and consequences, you can still continue to complete the deployment**

If you use Vercel deploy services, you must [custom domain name](https://vercel.com/docs/concepts/get-started/assign-domain), beacuse the [custom domain name](https://vercel.com/docs/concepts/get-started/assign-domain) is not affected by the GFW, Specific operations are as follows

<a href="https://vercel.com/import/project?template=https://github.com/imyuanx/chatgpt-proxy" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Deploy to Vercel"></a>

1. Click the deploy button at the top

<img width="600" src="public/vercel.png" alt="One-click deploy"/>

2. After deployment, the repository will be forked automatically for you, entering a custom repository name in the input field

<img width="600" src="public/vercel-deploy.png" alt="Deploy"/>

3. After successful deployment, get your service

<img width="600" src="public/vercel-success.png" alt="Alt text"/>

4. You must add a custom domain name for your service, otherwise you will not be able to access your service in the country

<img width="600" src="public/vercel-domain.png" alt="Domain"/>
</details>

## How to use

Whether you use Zeabur or Vercel, you will get the following proxy service after deployment

<img width="600" src="public/proxy.png" alt="Proxy service"/>

The resulting two addresses will be fully forwarded to `https://api.openai.com` and both will be domestically accessible, where `.../proxy-sse` supports SSE

You can use the proxy service in applications that support custom apis to invoke the "openai" interface domestically

Fro example, [openai-translator](https://github.com/yetone/openai-translator):

<img width="600" src="public/openai-translator.png" alt="Alt text"/>

[Back to top](#introduction)
