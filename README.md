# 小兔鲜

本项目是根据黑马开源 Vue3 项目小兔鲜学习而来，此处不做过多项目细节描述，感兴趣可前往我的博客 [小兔鲜]() 查看。这里主要记录项目打包的步骤。

## 本地打包测试
1. 构建应用（打包）

  ```
  npm run build
  # or
  yarn build
  ```

  默认情况下，构建会输出到 dist 文件夹中。

2. 本地测试应用

  当你构建完成应用后，你可以通过运行 `npm run preview` 命令，在本地测试该应用，利用好控制台，找BUG修BUG。

  每次修改代码后要先build构建打包再preview本地测试才能显示出修改代码后最新的效果。

  vite preview 命令会在本地启动一个静态 Web 服务器，将 dist 文件夹运行在 http://localhost:5000。这样在本地环境下查看该构建产物是否正常可用就方便了。

  这一点非常重要，可以在本地测试应用，当本地测试没问题后再推到仓库开启 Gitee Pages服务即可，不需要频繁推到仓库更新Gitee Pages测试了。

## 配置Gitee Pages

在 `vite.config.js` 中设置正确的 base。

> 注意：
> 
> - 如果你要部署在 `https://<USERNAME>.gitee.io/` 上，你可以省略 base 使其默认为 `'/'` 即：`base:'/'` 。
> - 如果你要部署在 `https://<USERNAME>.gitee.io/<REPO>/` 上，例如你的仓库地址为 `https://gitee.com/<USERNAME>/<REPO>`，那么请设置 `base` 为 `'/<REPO>/'` 即：`base:'/<REPO>/'`。

例如：我的仓库地址为：`https://gitee.com/duyidao/rabit` ，我生成的 Gitee Pages 为： `http://duyidao.gitee.io/rabit` 则我需要如下配置：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base:'/rabit/'
})
```

> 注意：
> base里前后各有一个/，省略一个都不行！

## 部署
打包好后提交到仓库内，Gitee Pages 托管即可。