## PixelFaramitaLuminousPolymerization安装教程
#### 部分步骤若已经完成请跳过
---
- ### 下载BDS
地址：https://www.minecraft.net/en-us/download/server/bedrock
下载`MINECRAFT DEDICATED SERVER SOFTWARE FOR WINDOWS`并解压

---
- ### 下载和安装LiteLoaderBDS
地址：https://github.com/LiteLDev/LiteLoaderBDS/releases
找到最新的Release点击`Assets`展开，下载压缩包，解压覆盖到BDS目录
然后运行`LLPeEditor.exe`，之后便会生成`bedrock_server_mod.exe`，此为插件端启动程序

---
- ### 下载和安装最新的LiteLoaderNet和PFLP插件
    #### 请前往 [最新构建](https://gxh.lanzoum.com/b03v3gxbi)  密码：114514
推荐直接下载`LLNet_with_PFLP_Beta.zip`，解压到指定目录（详见压缩包注释）
>或者也可手动下载[`LiteLoaderNet`](https://github.com/LiteLDev/LiteLoader.NET)，并手动下载`PFLP_Beta_2022_xx_xx__xx_xx_xx.dll`置于插件目录（`plugins`）
---
- ### 安装微软`dotnet 7.0`运行库
地址：https://dotnet.microsoft.com/zh-cn/download
点击`下载.Net运行时`，并安装在需要开服的主机上

---
- ### 启动服务器
运行`bedrock_server_mod.exe`

---
- ### 修改配置文件以及开启需要的模块
    - 配置文件位于：`plugins\PixelFaramitaLuminousPolymerization\config.json`
    - 请使用专业的编辑工具编辑（而不是祭祀本）

    - 打开文件把看起来中意的模块开起来

        像这样
    >``` json
    >"xxx": {
    >    "ModuleEnabled": true,
    >    "xxx": "xxx"
    >}
    >```

    - 控制台输入`pflp reload`重载插件，或重启服务端以应用更改

---
- ### 更新插件本体(记得及时关注最新构建，以体验最新bug)
    - 删除旧的插件`PFLP_xxx.dll`
    - 备份数据文件和配置文件（如果不放心）：`plugins\PixelFaramitaLuminousPolymerization\`
    #### 请前往 [最新构建](https://gxh.lanzoum.com/b03v3gxbi)  密码：114514
    - 下载上传日期最近的`PFLP_Beta_2022_xx_xx__xx_xx_xx.dll`置于插件目录（`plugins`）
- ### 更新BDS和LL以及LLNet
    - 备份`worlds``plugins`等数据
    - 上述操作重做一遍
    - ...
        lazy.jpeg