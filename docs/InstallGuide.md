## PixelFaramitaLuminousPolymerization安装教程
---
#### 你可能还需要[面板服安装文档][def]
---
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
- ### 下载和安装最新的LiteLoader.NET和PFLP插件
    #### 请前往 [最新构建](https://gxh.lanzoum.com/b03v3gxbi)  密码：114514
推荐直接下载`LLNET_with_PFLP_Beta.zip`，解压到指定目录（详见压缩包注释）
>或者也可手动下载[`LiteLoader.NET`](https://github.com/LiteLDev/LiteLoader.NET)，并手动下载`PFLP_Beta_2022_xx_xx__xx_xx_xx.dll`置于插件目录（`plugins`）
---
- ### 安装微软`.NET 7.0`运行时
地址：https://dotnet.microsoft.com/zh-cn/download/dotnet/7.0
点击`下载.NET运行时`，并安装在需要开服的主机上
 - 找到`.NET 运行时 7.0.x`，你会看到如下内容
    >#### 下载 .NET 7.0 Runtime (v7.0.x) 版
    ><table>
    ><tr><th>平台</th><th>安装程序</th><th>二进制文件</th></tr>
    ><tr><td>Linux</td><td>包管理器说明</td><td>Arm32 | Arm32 Alpine | Arm64 | Arm64 Alpine | x64 | x64 Alpine</td></tr>
    ><tr><td>macOS</td><td>Arm64 | x64</td><td>Arm64 | x64</td></tr>
    ><tr><td>Windows</td><td>Arm64 | <a href="64">x64</a> | x86 | winget 指令</td><td>Arm64 | x64 | x86</td></tr>
    ><tr><td>全部</td><td>dotnet-install scripts</td><td></td></tr>
    ></table>
  - 不论是基于Wine还是Windows的面板，你需要的都是`Windows`行`二进制文件`列的`x64`文件
  - 下载到的是个zip文件
  - 到BDS安装目录的`plugins\lib`文件夹下，创建一个叫`managed`的文件夹，进去再创建一个叫`dotnet`文件夹，将zip所有文件解压到此文件夹，也就是说`plugins\lib\managed\dotnet`文件夹下应该有`dotnet.exe`和`shared`文件夹

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
- ### 更新BDS和LL以及LLNET
    - 备份`worlds`、`plugins`等数据
    - 上述操作重做一遍
    - ...
        lazy.jpeg


[def]: InstallGuideForPanel.md