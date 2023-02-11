## 面板服务如何运行此插件？
#### 如果你是面板服，你可能发现没法安装全局的.NET导致加载LiteLoader.NET报错，故此文档详细说明了面板服的运行方法
#### 此过程没有任何技术难度，但是任何一步的操作不正确都可能让插件无法运行
首先你需要确保已经下载和安装了LiteLoader.NET

---
- ### 先阅读并理解[安装文档](docs/InstallGuide.md)
---
- ### 放置`.NET 7.0`运行时二进制文件
地址：https://dotnet.microsoft.com/zh-cn/download/dotnet/7.0
- - 找到`.NET 运行时 7.0.x`，你会看到如下内容
    >#### 下载 .NET 7.0 Runtime (v7.0.x) 版
    ><table>
    ><tr><th>平台</th><th>安装程序</th><th>二进制文件</th></tr>
    ><tr><td>Linux</td><td>包管理器说明</td><td>Arm32 | Arm32 Alpine | Arm64 | Arm64 Alpine | x64 | x64 Alpine</td></tr>
    ><tr><td>macOS</td><td>Arm64 | x64</td><td>Arm64 | x64</td></tr>
    ><tr><td>Windows</td><td>Arm64 | x64 | x86 | winget 指令</td><td>Arm64 | <a href="https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-7.0.2-windows-x64-binaries">x64</a> | x86</td></tr>
    ><tr><td>全部</td><td>dotnet-install scripts</td><td></td></tr>
    ></table>
  - 不论是基于Wine还是Windows的面板，你需要的都是`Windows`行`二进制文件`列的`x64`文件
  - 下载到的是个zip文件
  - 到BDS安装目录的`plugins\lib`文件夹下，创建一个叫`managed`的文件夹，进去再创建一个叫`dotnet`文件夹，将zip所有文件解压到此文件夹，也就是说`plugins\lib\managed\dotnet`文件夹下应该有`dotnet.exe`和`shared`文件夹
- ### 安装LLNETPreLoader
    - 下载`LLNETPreLoader-x.x.x.zip`并解压到BDS安装目录的`plugins`文件夹下
    - (临时下载地址：  https://gxh.lanzoum.com/iRzAF0n9couj)
- ### 运行