<div align="center">
<h1>API for PixelFaramitaLuminousPolymerization</h1>
<div align="right"><h4>Powered by LLRemoteCall</h1></div>
</div>

> - JavaScript
>```js
>let PFLP = ll.require("PixelFaramitaLuminousPolymerization");
>```
> - C++
>```C++
>#include <RemoteCallAPI.h>
>```
> - C#
>```C#
>using RemoteCallAPI = LLNET.RemoteCall.RemoteCallAPI;
>```
> - Visual Basic .Net
>```vb
>Imports RemoteCallAPI = LLNET.RemoteCall.RemoteCallAPI;
>```
> - F#
>```F#
>#r "LiteLoader.Net"
>open type LLNET.RemoteCall.RemoteCallAPI
>```

<details>
<summary><b>General<b></summary>

>## General::SetConfig
>### 设置全局配置文件（要求JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| jsonStr | string |
>返回值类型：bool;
> - JavaScript
>```js
>/** 设置全局配置文件（要求JSON字符串） 返回值类型：bool */
>const General_SetConfig = ll.import("PFLP", "General::SetConfig");
>let result = General_SetConfig(jsonStr);
>```
> - C++
>```C++
>// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
>auto General_SetConfig = RemoteCall::importAs<bool(std::string const& jsonStr)>("PFLP", "General::SetConfig");
>auto result = General_SetConfig(jsonStr);
>```
> - C#
>```C#
>// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
>var General_SetConfig = RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig");
>var result = General_SetConfig(jsonStr);
>```
> - Visual Basic .Net
>```vb
>' 设置全局配置文件（要求JSON字符串） 返回值类型：bool
>Dim General_SetConfig = RemoteCallAPI.ImportAs(Of Boolean,String)("PFLP", "General::SetConfig");
>Dim result = General_SetConfig(jsonStr);
>```
> - F#
>```F#
>// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
>let General_SetConfig = RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig")
>jsonStr
>	|>General_SetConfig
>	|>ignore
>```
>---
>## General::GetConfig
>### 获取全局配置文件（JSON字符串）
>无参数;
>返回值类型：string;
> - JavaScript
>```js
>/** 获取全局配置文件（JSON字符串） 返回值类型：string */
>const General_GetConfig = ll.import("PFLP", "General::GetConfig");
>let result = General_GetConfig();
>```
> - C++
>```C++
>// 获取全局配置文件（JSON字符串） 返回值类型：string
>auto General_GetConfig = RemoteCall::importAs<std::string()>("PFLP", "General::GetConfig");
>auto result = General_GetConfig();
>```
> - C#
>```C#
>// 获取全局配置文件（JSON字符串） 返回值类型：string
>var General_GetConfig = RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig");
>var result = General_GetConfig();
>```
> - Visual Basic .Net
>```vb
>' 获取全局配置文件（JSON字符串） 返回值类型：string
>Dim General_GetConfig = RemoteCallAPI.ImportAs(Of String)("PFLP", "General::GetConfig");
>Dim result = General_GetConfig();
>```
> - F#
>```F#
>// 获取全局配置文件（JSON字符串） 返回值类型：string
>let General_GetConfig = RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig")
>General_GetConfig()
>	|>ignore
>```
>---
>## General::Reload
>### 重新加载所有功能的配置文件
>无参数;
>无返回值;
> - JavaScript
>```js
>/** 重新加载所有功能的配置文件 */
>const General_Reload = ll.import("PFLP", "General::Reload");
>General_Reload();
>```
> - C++
>```C++
>// 重新加载所有功能的配置文件
>auto General_Reload = RemoteCall::importAs<void()>("PFLP", "General::Reload");
>General_Reload();
>```
> - C#
>```C#
>// 重新加载所有功能的配置文件
>var General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload");
>General_Reload();
>```
> - Visual Basic .Net
>```vb
>' 重新加载所有功能的配置文件
>Dim General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload");
>General_Reload();
>```
> - F#
>```F#
>// 重新加载所有功能的配置文件
>let General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload")
>General_Reload()
>```
</details>
<details>
<summary><b>Command<b></summary>

>## Command::SetCommandDisabled
>### 设置命令禁用(可设置提示)
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| cmd | string |
>| feedback | string |
>无返回值;
> - JavaScript
>```js
>/** 设置命令禁用(可设置提示) */
>const Command_SetCommandDisabled = ll.import("PFLP", "Command::SetCommandDisabled");
>Command_SetCommandDisabled(playerXuid,cmd,feedback);
>```
> - C++
>```C++
>// 设置命令禁用(可设置提示)
>auto Command_SetCommandDisabled = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& cmd,std::string const& feedback)>("PFLP", "Command::SetCommandDisabled");
>Command_SetCommandDisabled(playerXuid,cmd,feedback);
>```
> - C#
>```C#
>// 设置命令禁用(可设置提示)
>var Command_SetCommandDisabled = RemoteCallAPI.Import_As<string,string,string>("PFLP", "Command::SetCommandDisabled");
>Command_SetCommandDisabled(playerXuid,cmd,feedback);
>```
> - Visual Basic .Net
>```vb
>' 设置命令禁用(可设置提示)
>Dim Command_SetCommandDisabled = RemoteCallAPI.Import_As(Of String,String,String)("PFLP", "Command::SetCommandDisabled");
>Command_SetCommandDisabled(playerXuid,cmd,feedback);
>```
> - F#
>```F#
>// 设置命令禁用(可设置提示)
>let Command_SetCommandDisabled = RemoteCallAPI.Import_As<string,string,string>("PFLP", "Command::SetCommandDisabled")
>(playerXuid,cmd,feedback)
>	|>Command_SetCommandDisabled
>```
>---
>## Command::SetCommandEnabled
>### 设置命令启用
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| cmd | string |
>无返回值;
> - JavaScript
>```js
>/** 设置命令启用 */
>const Command_SetCommandEnabled = ll.import("PFLP", "Command::SetCommandEnabled");
>Command_SetCommandEnabled(playerXuid,cmd);
>```
> - C++
>```C++
>// 设置命令启用
>auto Command_SetCommandEnabled = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& cmd)>("PFLP", "Command::SetCommandEnabled");
>Command_SetCommandEnabled(playerXuid,cmd);
>```
> - C#
>```C#
>// 设置命令启用
>var Command_SetCommandEnabled = RemoteCallAPI.Import_As<string,string>("PFLP", "Command::SetCommandEnabled");
>Command_SetCommandEnabled(playerXuid,cmd);
>```
> - Visual Basic .Net
>```vb
>' 设置命令启用
>Dim Command_SetCommandEnabled = RemoteCallAPI.Import_As(Of String,String)("PFLP", "Command::SetCommandEnabled");
>Command_SetCommandEnabled(playerXuid,cmd);
>```
> - F#
>```F#
>// 设置命令启用
>let Command_SetCommandEnabled = RemoteCallAPI.Import_As<string,string>("PFLP", "Command::SetCommandEnabled")
>(playerXuid,cmd)
>	|>Command_SetCommandEnabled
>```
</details>
<details>
<summary><b>Language<b></summary>

>## Language::Translate
>### 翻译
>|  形参   | 类型  |
>|  ----  | ----  |
>| fromLanguage | string |
>| toLanguage | string |
>| text | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 翻译 返回值类型：string */
>const Language_Translate = ll.import("PFLP", "Language::Translate");
>let result = Language_Translate(fromLanguage,toLanguage,text);
>```
> - C++
>```C++
>// 翻译 返回值类型：string
>auto Language_Translate = RemoteCall::importAs<std::string(std::string const& fromLanguage,std::string const& toLanguage,std::string const& text)>("PFLP", "Language::Translate");
>auto result = Language_Translate(fromLanguage,toLanguage,text);
>```
> - C#
>```C#
>// 翻译 返回值类型：string
>var Language_Translate = RemoteCallAPI.ImportAs<string,string,string,string>("PFLP", "Language::Translate");
>var result = Language_Translate(fromLanguage,toLanguage,text);
>```
> - Visual Basic .Net
>```vb
>' 翻译 返回值类型：string
>Dim Language_Translate = RemoteCallAPI.ImportAs(Of String,String,String,String)("PFLP", "Language::Translate");
>Dim result = Language_Translate(fromLanguage,toLanguage,text);
>```
> - F#
>```F#
>// 翻译 返回值类型：string
>let Language_Translate = RemoteCallAPI.ImportAs<string,string,string,string>("PFLP", "Language::Translate")
>(fromLanguage,toLanguage,text)
>	|>Language_Translate
>	|>ignore
>```
</details>
<details>
<summary><b>ChatEx<b></summary>

>## ChatEx::SetNickName
>### 设置玩家昵称
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| nickName | string |
>无返回值;
> - JavaScript
>```js
>/** 设置玩家昵称 */
>const ChatEx_SetNickName = ll.import("PFLP", "ChatEx::SetNickName");
>ChatEx_SetNickName(playerXuid,nickName);
>```
> - C++
>```C++
>// 设置玩家昵称
>auto ChatEx_SetNickName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& nickName)>("PFLP", "ChatEx::SetNickName");
>ChatEx_SetNickName(playerXuid,nickName);
>```
> - C#
>```C#
>// 设置玩家昵称
>var ChatEx_SetNickName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName");
>ChatEx_SetNickName(playerXuid,nickName);
>```
> - Visual Basic .Net
>```vb
>' 设置玩家昵称
>Dim ChatEx_SetNickName = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetNickName");
>ChatEx_SetNickName(playerXuid,nickName);
>```
> - F#
>```F#
>// 设置玩家昵称
>let ChatEx_SetNickName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName")
>(playerXuid,nickName)
>	|>ChatEx_SetNickName
>```
>---
>## ChatEx::SetFakeName
>### 设置玩家聊天时的名字
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| fakeName | string |
>无返回值;
> - JavaScript
>```js
>/** 设置玩家聊天时的名字 */
>const ChatEx_SetFakeName = ll.import("PFLP", "ChatEx::SetFakeName");
>ChatEx_SetFakeName(playerXuid,fakeName);
>```
> - C++
>```C++
>// 设置玩家聊天时的名字
>auto ChatEx_SetFakeName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& fakeName)>("PFLP", "ChatEx::SetFakeName");
>ChatEx_SetFakeName(playerXuid,fakeName);
>```
> - C#
>```C#
>// 设置玩家聊天时的名字
>var ChatEx_SetFakeName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName");
>ChatEx_SetFakeName(playerXuid,fakeName);
>```
> - Visual Basic .Net
>```vb
>' 设置玩家聊天时的名字
>Dim ChatEx_SetFakeName = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetFakeName");
>ChatEx_SetFakeName(playerXuid,fakeName);
>```
> - F#
>```F#
>// 设置玩家聊天时的名字
>let ChatEx_SetFakeName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName")
>(playerXuid,fakeName)
>	|>ChatEx_SetFakeName
>```
>---
>## ChatEx::SetEnd
>### 设置玩家聊天消息后缀
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| endStr | string |
>无返回值;
> - JavaScript
>```js
>/** 设置玩家聊天消息后缀 */
>const ChatEx_SetEnd = ll.import("PFLP", "ChatEx::SetEnd");
>ChatEx_SetEnd(playerXuid,endStr);
>```
> - C++
>```C++
>// 设置玩家聊天消息后缀
>auto ChatEx_SetEnd = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& endStr)>("PFLP", "ChatEx::SetEnd");
>ChatEx_SetEnd(playerXuid,endStr);
>```
> - C#
>```C#
>// 设置玩家聊天消息后缀
>var ChatEx_SetEnd = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd");
>ChatEx_SetEnd(playerXuid,endStr);
>```
> - Visual Basic .Net
>```vb
>' 设置玩家聊天消息后缀
>Dim ChatEx_SetEnd = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetEnd");
>ChatEx_SetEnd(playerXuid,endStr);
>```
> - F#
>```F#
>// 设置玩家聊天消息后缀
>let ChatEx_SetEnd = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd")
>(playerXuid,endStr)
>	|>ChatEx_SetEnd
>```
>---
>## ChatEx::SetStart
>### 设置玩家聊天消息前缀
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| startStr | string |
>无返回值;
> - JavaScript
>```js
>/** 设置玩家聊天消息前缀 */
>const ChatEx_SetStart = ll.import("PFLP", "ChatEx::SetStart");
>ChatEx_SetStart(playerXuid,startStr);
>```
> - C++
>```C++
>// 设置玩家聊天消息前缀
>auto ChatEx_SetStart = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& startStr)>("PFLP", "ChatEx::SetStart");
>ChatEx_SetStart(playerXuid,startStr);
>```
> - C#
>```C#
>// 设置玩家聊天消息前缀
>var ChatEx_SetStart = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart");
>ChatEx_SetStart(playerXuid,startStr);
>```
> - Visual Basic .Net
>```vb
>' 设置玩家聊天消息前缀
>Dim ChatEx_SetStart = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetStart");
>ChatEx_SetStart(playerXuid,startStr);
>```
> - F#
>```F#
>// 设置玩家聊天消息前缀
>let ChatEx_SetStart = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart")
>(playerXuid,startStr)
>	|>ChatEx_SetStart
>```
>---
>## ChatEx::GetNickName
>### 获取玩家昵称
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取玩家昵称 返回值类型：string */
>const ChatEx_GetNickName = ll.import("PFLP", "ChatEx::GetNickName");
>let result = ChatEx_GetNickName(playerXuid);
>```
> - C++
>```C++
>// 获取玩家昵称 返回值类型：string
>auto ChatEx_GetNickName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetNickName");
>auto result = ChatEx_GetNickName(playerXuid);
>```
> - C#
>```C#
>// 获取玩家昵称 返回值类型：string
>var ChatEx_GetNickName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName");
>var result = ChatEx_GetNickName(playerXuid);
>```
> - Visual Basic .Net
>```vb
>' 获取玩家昵称 返回值类型：string
>Dim ChatEx_GetNickName = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetNickName");
>Dim result = ChatEx_GetNickName(playerXuid);
>```
> - F#
>```F#
>// 获取玩家昵称 返回值类型：string
>let ChatEx_GetNickName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName")
>playerXuid
>	|>ChatEx_GetNickName
>	|>ignore
>```
>---
>## ChatEx::GetFakeName
>### 获取玩家聊天时的名字
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取玩家聊天时的名字 返回值类型：string */
>const ChatEx_GetFakeName = ll.import("PFLP", "ChatEx::GetFakeName");
>let result = ChatEx_GetFakeName(playerXuid);
>```
> - C++
>```C++
>// 获取玩家聊天时的名字 返回值类型：string
>auto ChatEx_GetFakeName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetFakeName");
>auto result = ChatEx_GetFakeName(playerXuid);
>```
> - C#
>```C#
>// 获取玩家聊天时的名字 返回值类型：string
>var ChatEx_GetFakeName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName");
>var result = ChatEx_GetFakeName(playerXuid);
>```
> - Visual Basic .Net
>```vb
>' 获取玩家聊天时的名字 返回值类型：string
>Dim ChatEx_GetFakeName = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetFakeName");
>Dim result = ChatEx_GetFakeName(playerXuid);
>```
> - F#
>```F#
>// 获取玩家聊天时的名字 返回值类型：string
>let ChatEx_GetFakeName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName")
>playerXuid
>	|>ChatEx_GetFakeName
>	|>ignore
>```
>---
>## ChatEx::GetEnd
>### 获取玩家聊天消息后缀
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取玩家聊天消息后缀 返回值类型：string */
>const ChatEx_GetEnd = ll.import("PFLP", "ChatEx::GetEnd");
>let result = ChatEx_GetEnd(playerXuid);
>```
> - C++
>```C++
>// 获取玩家聊天消息后缀 返回值类型：string
>auto ChatEx_GetEnd = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetEnd");
>auto result = ChatEx_GetEnd(playerXuid);
>```
> - C#
>```C#
>// 获取玩家聊天消息后缀 返回值类型：string
>var ChatEx_GetEnd = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd");
>var result = ChatEx_GetEnd(playerXuid);
>```
> - Visual Basic .Net
>```vb
>' 获取玩家聊天消息后缀 返回值类型：string
>Dim ChatEx_GetEnd = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetEnd");
>Dim result = ChatEx_GetEnd(playerXuid);
>```
> - F#
>```F#
>// 获取玩家聊天消息后缀 返回值类型：string
>let ChatEx_GetEnd = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd")
>playerXuid
>	|>ChatEx_GetEnd
>	|>ignore
>```
>---
>## ChatEx::GetStart
>### 获取玩家聊天消息前缀
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取玩家聊天消息前缀 返回值类型：string */
>const ChatEx_GetStart = ll.import("PFLP", "ChatEx::GetStart");
>let result = ChatEx_GetStart(playerXuid);
>```
> - C++
>```C++
>// 获取玩家聊天消息前缀 返回值类型：string
>auto ChatEx_GetStart = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetStart");
>auto result = ChatEx_GetStart(playerXuid);
>```
> - C#
>```C#
>// 获取玩家聊天消息前缀 返回值类型：string
>var ChatEx_GetStart = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart");
>var result = ChatEx_GetStart(playerXuid);
>```
> - Visual Basic .Net
>```vb
>' 获取玩家聊天消息前缀 返回值类型：string
>Dim ChatEx_GetStart = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetStart");
>Dim result = ChatEx_GetStart(playerXuid);
>```
> - F#
>```F#
>// 获取玩家聊天消息前缀 返回值类型：string
>let ChatEx_GetStart = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart")
>playerXuid
>	|>ChatEx_GetStart
>	|>ignore
>```
</details>
<details>
<summary><b>Lands<b></summary>

>## Lands::CheckCubeHasLand
>### 检查指定立方体区域(float)是否有领地
>|  形参   | 类型  |
>|  ----  | ----  |
>| x1 | float |
>| y1 | float |
>| z1 | float |
>| x2 | float |
>| y2 | float |
>| z2 | float |
>| dimensionId | int |
>返回值类型：bool;
> - JavaScript
>```js
>/** 检查指定立方体区域(float)是否有领地 返回值类型：bool */
>const Lands_CheckCubeHasLand = ll.import("PFLP", "Lands::CheckCubeHasLand");
>let result = Lands_CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C++
>```C++
>// 检查指定立方体区域(float)是否有领地 返回值类型：bool
>auto Lands_CheckCubeHasLand = RemoteCall::importAs<bool(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::CheckCubeHasLand");
>auto result = Lands_CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C#
>```C#
>// 检查指定立方体区域(float)是否有领地 返回值类型：bool
>var Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int>("PFLP", "Lands::CheckCubeHasLand");
>var result = Lands_CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 检查指定立方体区域(float)是否有领地 返回值类型：bool
>Dim Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::CheckCubeHasLand");
>Dim result = Lands_CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - F#
>```F#
>// 检查指定立方体区域(float)是否有领地 返回值类型：bool
>let Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int>("PFLP", "Lands::CheckCubeHasLand")
>(x1,y1,z1,x2,y2,z2,dimensionId)
>	|>Lands_CheckCubeHasLand
>	|>ignore
>```
>---
>## Lands::CheckCubeHasLandInt
>### 检查指定立方体区域(int)是否有领地
>|  形参   | 类型  |
>|  ----  | ----  |
>| x1 | int |
>| y1 | int |
>| z1 | int |
>| x2 | int |
>| y2 | int |
>| z2 | int |
>| dimensionId | int |
>返回值类型：bool;
> - JavaScript
>```js
>/** 检查指定立方体区域(int)是否有领地 返回值类型：bool */
>const Lands_CheckCubeHasLandInt = ll.import("PFLP", "Lands::CheckCubeHasLandInt");
>let result = Lands_CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C++
>```C++
>// 检查指定立方体区域(int)是否有领地 返回值类型：bool
>auto Lands_CheckCubeHasLandInt = RemoteCall::importAs<bool(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::CheckCubeHasLandInt");
>auto result = Lands_CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C#
>```C#
>// 检查指定立方体区域(int)是否有领地 返回值类型：bool
>var Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int>("PFLP", "Lands::CheckCubeHasLandInt");
>var result = Lands_CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 检查指定立方体区域(int)是否有领地 返回值类型：bool
>Dim Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::CheckCubeHasLandInt");
>Dim result = Lands_CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - F#
>```F#
>// 检查指定立方体区域(int)是否有领地 返回值类型：bool
>let Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int>("PFLP", "Lands::CheckCubeHasLandInt")
>(x1,y1,z1,x2,y2,z2,dimensionId)
>	|>Lands_CheckCubeHasLandInt
>	|>ignore
>```
>---
>## Lands::CheckPosHasLand
>### 检查指定坐标(float)是否有领地
>|  形参   | 类型  |
>|  ----  | ----  |
>| x | float |
>| y | float |
>| z | float |
>| dimensionId | int |
>返回值类型：bool;
> - JavaScript
>```js
>/** 检查指定坐标(float)是否有领地 返回值类型：bool */
>const Lands_CheckPosHasLand = ll.import("PFLP", "Lands::CheckPosHasLand");
>let result = Lands_CheckPosHasLand(x,y,z,dimensionId);
>```
> - C++
>```C++
>// 检查指定坐标(float)是否有领地 返回值类型：bool
>auto Lands_CheckPosHasLand = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::CheckPosHasLand");
>auto result = Lands_CheckPosHasLand(x,y,z,dimensionId);
>```
> - C#
>```C#
>// 检查指定坐标(float)是否有领地 返回值类型：bool
>var Lands_CheckPosHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::CheckPosHasLand");
>var result = Lands_CheckPosHasLand(x,y,z,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 检查指定坐标(float)是否有领地 返回值类型：bool
>Dim Lands_CheckPosHasLand = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer)("PFLP", "Lands::CheckPosHasLand");
>Dim result = Lands_CheckPosHasLand(x,y,z,dimensionId);
>```
> - F#
>```F#
>// 检查指定坐标(float)是否有领地 返回值类型：bool
>let Lands_CheckPosHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::CheckPosHasLand")
>(x,y,z,dimensionId)
>	|>Lands_CheckPosHasLand
>	|>ignore
>```
>---
>## Lands::CheckPosHasLandInt
>### 检查指定坐标(int)是否有领地
>|  形参   | 类型  |
>|  ----  | ----  |
>| x | int |
>| y | int |
>| z | int |
>| dimensionId | int |
>返回值类型：bool;
> - JavaScript
>```js
>/** 检查指定坐标(int)是否有领地 返回值类型：bool */
>const Lands_CheckPosHasLandInt = ll.import("PFLP", "Lands::CheckPosHasLandInt");
>let result = Lands_CheckPosHasLandInt(x,y,z,dimensionId);
>```
> - C++
>```C++
>// 检查指定坐标(int)是否有领地 返回值类型：bool
>auto Lands_CheckPosHasLandInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::CheckPosHasLandInt");
>auto result = Lands_CheckPosHasLandInt(x,y,z,dimensionId);
>```
> - C#
>```C#
>// 检查指定坐标(int)是否有领地 返回值类型：bool
>var Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::CheckPosHasLandInt");
>var result = Lands_CheckPosHasLandInt(x,y,z,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 检查指定坐标(int)是否有领地 返回值类型：bool
>Dim Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer)("PFLP", "Lands::CheckPosHasLandInt");
>Dim result = Lands_CheckPosHasLandInt(x,y,z,dimensionId);
>```
> - F#
>```F#
>// 检查指定坐标(int)是否有领地 返回值类型：bool
>let Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::CheckPosHasLandInt")
>(x,y,z,dimensionId)
>	|>Lands_CheckPosHasLandInt
>	|>ignore
>```
>---
>## Lands::GetLandByCube
>### 获取立方体区域(float)领地信息（返回JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x1 | float |
>| y1 | float |
>| z1 | float |
>| x2 | float |
>| y2 | float |
>| z2 | float |
>| dimensionId | int |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string */
>const Lands_GetLandByCube = ll.import("PFLP", "Lands::GetLandByCube");
>let result = Lands_GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C++
>```C++
>// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
>auto Lands_GetLandByCube = RemoteCall::importAs<std::string(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandByCube");
>auto result = Lands_GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C#
>```C#
>// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
>var Lands_GetLandByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandByCube");
>var result = Lands_GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
>Dim Lands_GetLandByCube = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::GetLandByCube");
>Dim result = Lands_GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - F#
>```F#
>// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
>let Lands_GetLandByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandByCube")
>(x1,y1,z1,x2,y2,z2,dimensionId)
>	|>Lands_GetLandByCube
>	|>ignore
>```
>---
>## Lands::GetLandByCubeInt
>### 获取立方体区域(int)领地信息（返回JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x1 | int |
>| y1 | int |
>| z1 | int |
>| x2 | int |
>| y2 | int |
>| z2 | int |
>| dimensionId | int |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string */
>const Lands_GetLandByCubeInt = ll.import("PFLP", "Lands::GetLandByCubeInt");
>let result = Lands_GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C++
>```C++
>// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
>auto Lands_GetLandByCubeInt = RemoteCall::importAs<std::string(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandByCubeInt");
>auto result = Lands_GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C#
>```C#
>// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
>var Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandByCubeInt");
>var result = Lands_GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
>Dim Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandByCubeInt");
>Dim result = Lands_GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - F#
>```F#
>// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
>let Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandByCubeInt")
>(x1,y1,z1,x2,y2,z2,dimensionId)
>	|>Lands_GetLandByCubeInt
>	|>ignore
>```
>---
>## Lands::GetLandByPos
>### 获取指定坐标(float)领地信息（返回JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x | float |
>| y | float |
>| z | float |
>| dimensionId | int |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string */
>const Lands_GetLandByPos = ll.import("PFLP", "Lands::GetLandByPos");
>let result = Lands_GetLandByPos(x,y,z,dimensionId);
>```
> - C++
>```C++
>// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
>auto Lands_GetLandByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::GetLandByPos");
>auto result = Lands_GetLandByPos(x,y,z,dimensionId);
>```
> - C#
>```C#
>// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
>var Lands_GetLandByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandByPos");
>var result = Lands_GetLandByPos(x,y,z,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
>Dim Lands_GetLandByPos = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer)("PFLP", "Lands::GetLandByPos");
>Dim result = Lands_GetLandByPos(x,y,z,dimensionId);
>```
> - F#
>```F#
>// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
>let Lands_GetLandByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandByPos")
>(x,y,z,dimensionId)
>	|>Lands_GetLandByPos
>	|>ignore
>```
>---
>## Lands::GetLandByPosInt
>### 获取指定坐标(int)领地信息（返回JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x | int |
>| y | int |
>| z | int |
>| dimensionId | int |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string */
>const Lands_GetLandByPosInt = ll.import("PFLP", "Lands::GetLandByPosInt");
>let result = Lands_GetLandByPosInt(x,y,z,dimensionId);
>```
> - C++
>```C++
>// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
>auto Lands_GetLandByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::GetLandByPosInt");
>auto result = Lands_GetLandByPosInt(x,y,z,dimensionId);
>```
> - C#
>```C#
>// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
>var Lands_GetLandByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandByPosInt");
>var result = Lands_GetLandByPosInt(x,y,z,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
>Dim Lands_GetLandByPosInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandByPosInt");
>Dim result = Lands_GetLandByPosInt(x,y,z,dimensionId);
>```
> - F#
>```F#
>// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
>let Lands_GetLandByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandByPosInt")
>(x,y,z,dimensionId)
>	|>Lands_GetLandByPosInt
>	|>ignore
>```
>---
>## Lands::GetLandInfoByCube
>### 获取立方体区域(float)领地数据源详细信息（返回JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x1 | float |
>| y1 | float |
>| z1 | float |
>| x2 | float |
>| y2 | float |
>| z2 | float |
>| dimensionId | int |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
>const Lands_GetLandInfoByCube = ll.import("PFLP", "Lands::GetLandInfoByCube");
>let result = Lands_GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C++
>```C++
>// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>auto Lands_GetLandInfoByCube = RemoteCall::importAs<std::string(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByCube");
>auto result = Lands_GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C#
>```C#
>// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>var Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandInfoByCube");
>var result = Lands_GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>Dim Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::GetLandInfoByCube");
>Dim result = Lands_GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - F#
>```F#
>// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>let Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandInfoByCube")
>(x1,y1,z1,x2,y2,z2,dimensionId)
>	|>Lands_GetLandInfoByCube
>	|>ignore
>```
>---
>## Lands::GetLandInfoByCubeInt
>### 获取立方体区域(int)领地数据源详细信息（返回JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x1 | int |
>| y1 | int |
>| z1 | int |
>| x2 | int |
>| y2 | int |
>| z2 | int |
>| dimensionId | int |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
>const Lands_GetLandInfoByCubeInt = ll.import("PFLP", "Lands::GetLandInfoByCubeInt");
>let result = Lands_GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C++
>```C++
>// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>auto Lands_GetLandInfoByCubeInt = RemoteCall::importAs<std::string(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByCubeInt");
>auto result = Lands_GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - C#
>```C#
>// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>var Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandInfoByCubeInt");
>var result = Lands_GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>Dim Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandInfoByCubeInt");
>Dim result = Lands_GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
>```
> - F#
>```F#
>// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>let Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandInfoByCubeInt")
>(x1,y1,z1,x2,y2,z2,dimensionId)
>	|>Lands_GetLandInfoByCubeInt
>	|>ignore
>```
>---
>## Lands::GetLandInfoByPos
>### 获取指定坐标(float)领地数据源详细信息（返回JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x | float |
>| y | float |
>| z | float |
>| dimensionId | int |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
>const Lands_GetLandInfoByPos = ll.import("PFLP", "Lands::GetLandInfoByPos");
>let result = Lands_GetLandInfoByPos(x,y,z,dimensionId);
>```
> - C++
>```C++
>// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>auto Lands_GetLandInfoByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByPos");
>auto result = Lands_GetLandInfoByPos(x,y,z,dimensionId);
>```
> - C#
>```C#
>// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>var Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandInfoByPos");
>var result = Lands_GetLandInfoByPos(x,y,z,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>Dim Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer)("PFLP", "Lands::GetLandInfoByPos");
>Dim result = Lands_GetLandInfoByPos(x,y,z,dimensionId);
>```
> - F#
>```F#
>// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>let Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandInfoByPos")
>(x,y,z,dimensionId)
>	|>Lands_GetLandInfoByPos
>	|>ignore
>```
>---
>## Lands::GetLandInfoByPosInt
>### 获取指定坐标(int)领地数据源详细信息（返回JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x | int |
>| y | int |
>| z | int |
>| dimensionId | int |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
>const Lands_GetLandInfoByPosInt = ll.import("PFLP", "Lands::GetLandInfoByPosInt");
>let result = Lands_GetLandInfoByPosInt(x,y,z,dimensionId);
>```
> - C++
>```C++
>// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>auto Lands_GetLandInfoByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByPosInt");
>auto result = Lands_GetLandInfoByPosInt(x,y,z,dimensionId);
>```
> - C#
>```C#
>// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>var Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandInfoByPosInt");
>var result = Lands_GetLandInfoByPosInt(x,y,z,dimensionId);
>```
> - Visual Basic .Net
>```vb
>' 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>Dim Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandInfoByPosInt");
>Dim result = Lands_GetLandInfoByPosInt(x,y,z,dimensionId);
>```
> - F#
>```F#
>// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
>let Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandInfoByPosInt")
>(x,y,z,dimensionId)
>	|>Lands_GetLandInfoByPosInt
>	|>ignore
>```
>---
>## Lands::SetLandInfoByCube
>### 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x1 | float |
>| y1 | float |
>| z1 | float |
>| x2 | float |
>| y2 | float |
>| z2 | float |
>| dimensionId | int |
>| landinfo | string |
>返回值类型：bool;
> - JavaScript
>```js
>/** 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
>const Lands_SetLandInfoByCube = ll.import("PFLP", "Lands::SetLandInfoByCube");
>let result = Lands_SetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
>```
> - C++
>```C++
>// 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>auto Lands_SetLandInfoByCube = RemoteCall::importAs<bool(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByCube");
>auto result = Lands_SetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
>```
> - C#
>```C#
>// 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>var Lands_SetLandInfoByCube = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByCube");
>var result = Lands_SetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
>```
> - Visual Basic .Net
>```vb
>' 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>Dim Lands_SetLandInfoByCube = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Single,Single,Single,Integer,String)("PFLP", "Lands::SetLandInfoByCube");
>Dim result = Lands_SetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
>```
> - F#
>```F#
>// 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>let Lands_SetLandInfoByCube = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByCube")
>(x1,y1,z1,x2,y2,z2,dimensionId,landinfo)
>	|>Lands_SetLandInfoByCube
>	|>ignore
>```
>---
>## Lands::SetLandInfoByCubeInt
>### 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x1 | int |
>| y1 | int |
>| z1 | int |
>| x2 | int |
>| y2 | int |
>| z2 | int |
>| dimensionId | int |
>| landinfo | string |
>返回值类型：bool;
> - JavaScript
>```js
>/** 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
>const Lands_SetLandInfoByCubeInt = ll.import("PFLP", "Lands::SetLandInfoByCubeInt");
>let result = Lands_SetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
>```
> - C++
>```C++
>// 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>auto Lands_SetLandInfoByCubeInt = RemoteCall::importAs<bool(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByCubeInt");
>auto result = Lands_SetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
>```
> - C#
>```C#
>// 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>var Lands_SetLandInfoByCubeInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByCubeInt");
>var result = Lands_SetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
>```
> - Visual Basic .Net
>```vb
>' 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>Dim Lands_SetLandInfoByCubeInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::SetLandInfoByCubeInt");
>Dim result = Lands_SetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
>```
> - F#
>```F#
>// 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>let Lands_SetLandInfoByCubeInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByCubeInt")
>(x1,y1,z1,x2,y2,z2,dimensionId,landinfo)
>	|>Lands_SetLandInfoByCubeInt
>	|>ignore
>```
>---
>## Lands::SetLandInfoByPos
>### 设置指定坐标(float)领地数据源详细信息（传入JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x | float |
>| y | float |
>| z | float |
>| dimensionId | int |
>| landinfo | string |
>返回值类型：bool;
> - JavaScript
>```js
>/** 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
>const Lands_SetLandInfoByPos = ll.import("PFLP", "Lands::SetLandInfoByPos");
>let result = Lands_SetLandInfoByPos(x,y,z,dimensionId,landinfo);
>```
> - C++
>```C++
>// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>auto Lands_SetLandInfoByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByPos");
>auto result = Lands_SetLandInfoByPos(x,y,z,dimensionId,landinfo);
>```
> - C#
>```C#
>// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>var Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByPos");
>var result = Lands_SetLandInfoByPos(x,y,z,dimensionId,landinfo);
>```
> - Visual Basic .Net
>```vb
>' 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>Dim Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer,String)("PFLP", "Lands::SetLandInfoByPos");
>Dim result = Lands_SetLandInfoByPos(x,y,z,dimensionId,landinfo);
>```
> - F#
>```F#
>// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>let Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByPos")
>(x,y,z,dimensionId,landinfo)
>	|>Lands_SetLandInfoByPos
>	|>ignore
>```
>---
>## Lands::SetLandInfoByPosInt
>### 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| x | int |
>| y | int |
>| z | int |
>| dimensionId | int |
>| landinfo | string |
>返回值类型：bool;
> - JavaScript
>```js
>/** 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
>const Lands_SetLandInfoByPosInt = ll.import("PFLP", "Lands::SetLandInfoByPosInt");
>let result = Lands_SetLandInfoByPosInt(x,y,z,dimensionId,landinfo);
>```
> - C++
>```C++
>// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>auto Lands_SetLandInfoByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByPosInt");
>auto result = Lands_SetLandInfoByPosInt(x,y,z,dimensionId,landinfo);
>```
> - C#
>```C#
>// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>var Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByPosInt");
>var result = Lands_SetLandInfoByPosInt(x,y,z,dimensionId,landinfo);
>```
> - Visual Basic .Net
>```vb
>' 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>Dim Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::SetLandInfoByPosInt");
>Dim result = Lands_SetLandInfoByPosInt(x,y,z,dimensionId,landinfo);
>```
> - F#
>```F#
>// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
>let Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByPosInt")
>(x,y,z,dimensionId,landinfo)
>	|>Lands_SetLandInfoByPosInt
>	|>ignore
>```
</details>
<details>
<summary><b>Money<b></summary>

>## Money::Get
>### 获取玩家(指定玩家名)金钱
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：long;
> - JavaScript
>```js
>/** 获取玩家(指定玩家名)金钱 返回值类型：long */
>const Money_Get = ll.import("PFLP", "Money::Get");
>let result = Money_Get(playerXuid);
>```
> - C++
>```C++
>// 获取玩家(指定玩家名)金钱 返回值类型：long
>auto Money_Get = RemoteCall::importAs<long long(std::string const& playerXuid)>("PFLP", "Money::Get");
>auto result = Money_Get(playerXuid);
>```
> - C#
>```C#
>// 获取玩家(指定玩家名)金钱 返回值类型：long
>var Money_Get = RemoteCallAPI.ImportAs<long,string>("PFLP", "Money::Get");
>var result = Money_Get(playerXuid);
>```
> - Visual Basic .Net
>```vb
>' 获取玩家(指定玩家名)金钱 返回值类型：long
>Dim Money_Get = RemoteCallAPI.ImportAs(Of Long,String)("PFLP", "Money::Get");
>Dim result = Money_Get(playerXuid);
>```
> - F#
>```F#
>// 获取玩家(指定玩家名)金钱 返回值类型：long
>let Money_Get = RemoteCallAPI.ImportAs<long,string>("PFLP", "Money::Get")
>playerXuid
>	|>Money_Get
>	|>ignore
>```
>---
>## Money::Add
>### 给玩家(指定玩家名)加钱
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| val | long |
>| info | string |
>无返回值;
> - JavaScript
>```js
>/** 给玩家(指定玩家名)加钱 */
>const Money_Add = ll.import("PFLP", "Money::Add");
>Money_Add(playerXuid,val,info);
>```
> - C++
>```C++
>// 给玩家(指定玩家名)加钱
>auto Money_Add = RemoteCall::importAs<void(std::string const& playerXuid,long long const& val,std::string const& info)>("PFLP", "Money::Add");
>Money_Add(playerXuid,val,info);
>```
> - C#
>```C#
>// 给玩家(指定玩家名)加钱
>var Money_Add = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Add");
>Money_Add(playerXuid,val,info);
>```
> - Visual Basic .Net
>```vb
>' 给玩家(指定玩家名)加钱
>Dim Money_Add = RemoteCallAPI.Import_As(Of String,Long,String)("PFLP", "Money::Add");
>Money_Add(playerXuid,val,info);
>```
> - F#
>```F#
>// 给玩家(指定玩家名)加钱
>let Money_Add = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Add")
>(playerXuid,val,info)
>	|>Money_Add
>```
>---
>## Money::Remove
>### 给玩家(指定玩家名)减钱
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| val | long |
>| info | string |
>无返回值;
> - JavaScript
>```js
>/** 给玩家(指定玩家名)减钱 */
>const Money_Remove = ll.import("PFLP", "Money::Remove");
>Money_Remove(playerXuid,val,info);
>```
> - C++
>```C++
>// 给玩家(指定玩家名)减钱
>auto Money_Remove = RemoteCall::importAs<void(std::string const& playerXuid,long long const& val,std::string const& info)>("PFLP", "Money::Remove");
>Money_Remove(playerXuid,val,info);
>```
> - C#
>```C#
>// 给玩家(指定玩家名)减钱
>var Money_Remove = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Remove");
>Money_Remove(playerXuid,val,info);
>```
> - Visual Basic .Net
>```vb
>' 给玩家(指定玩家名)减钱
>Dim Money_Remove = RemoteCallAPI.Import_As(Of String,Long,String)("PFLP", "Money::Remove");
>Money_Remove(playerXuid,val,info);
>```
> - F#
>```F#
>// 给玩家(指定玩家名)减钱
>let Money_Remove = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Remove")
>(playerXuid,val,info)
>	|>Money_Remove
>```
</details>
<details><summary><b>All Api in JavaScript<b></summary>

---
<details><summary>JavaScript imports</summary>

``` JavaScript
/** 设置全局配置文件（要求JSON字符串） 返回值类型：bool */
const General_SetConfig = ll.import("PFLP", "General::SetConfig");
/** 获取全局配置文件（JSON字符串） 返回值类型：string */
const General_GetConfig = ll.import("PFLP", "General::GetConfig");
/** 重新加载所有功能的配置文件 */
const General_Reload = ll.import("PFLP", "General::Reload");
/** 设置命令禁用(可设置提示) */
const Command_SetCommandDisabled = ll.import("PFLP", "Command::SetCommandDisabled");
/** 设置命令启用 */
const Command_SetCommandEnabled = ll.import("PFLP", "Command::SetCommandEnabled");
/** 翻译 返回值类型：string */
const Language_Translate = ll.import("PFLP", "Language::Translate");
/** 设置玩家昵称 */
const ChatEx_SetNickName = ll.import("PFLP", "ChatEx::SetNickName");
/** 设置玩家聊天时的名字 */
const ChatEx_SetFakeName = ll.import("PFLP", "ChatEx::SetFakeName");
/** 设置玩家聊天消息后缀 */
const ChatEx_SetEnd = ll.import("PFLP", "ChatEx::SetEnd");
/** 设置玩家聊天消息前缀 */
const ChatEx_SetStart = ll.import("PFLP", "ChatEx::SetStart");
/** 获取玩家昵称 返回值类型：string */
const ChatEx_GetNickName = ll.import("PFLP", "ChatEx::GetNickName");
/** 获取玩家聊天时的名字 返回值类型：string */
const ChatEx_GetFakeName = ll.import("PFLP", "ChatEx::GetFakeName");
/** 获取玩家聊天消息后缀 返回值类型：string */
const ChatEx_GetEnd = ll.import("PFLP", "ChatEx::GetEnd");
/** 获取玩家聊天消息前缀 返回值类型：string */
const ChatEx_GetStart = ll.import("PFLP", "ChatEx::GetStart");
/** 检查指定立方体区域(float)是否有领地 返回值类型：bool */
const Lands_CheckCubeHasLand = ll.import("PFLP", "Lands::CheckCubeHasLand");
/** 检查指定立方体区域(int)是否有领地 返回值类型：bool */
const Lands_CheckCubeHasLandInt = ll.import("PFLP", "Lands::CheckCubeHasLandInt");
/** 检查指定坐标(float)是否有领地 返回值类型：bool */
const Lands_CheckPosHasLand = ll.import("PFLP", "Lands::CheckPosHasLand");
/** 检查指定坐标(int)是否有领地 返回值类型：bool */
const Lands_CheckPosHasLandInt = ll.import("PFLP", "Lands::CheckPosHasLandInt");
/** 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByCube = ll.import("PFLP", "Lands::GetLandByCube");
/** 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByCubeInt = ll.import("PFLP", "Lands::GetLandByCubeInt");
/** 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByPos = ll.import("PFLP", "Lands::GetLandByPos");
/** 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByPosInt = ll.import("PFLP", "Lands::GetLandByPosInt");
/** 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByCube = ll.import("PFLP", "Lands::GetLandInfoByCube");
/** 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByCubeInt = ll.import("PFLP", "Lands::GetLandInfoByCubeInt");
/** 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByPos = ll.import("PFLP", "Lands::GetLandInfoByPos");
/** 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByPosInt = ll.import("PFLP", "Lands::GetLandInfoByPosInt");
/** 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
const Lands_SetLandInfoByCube = ll.import("PFLP", "Lands::SetLandInfoByCube");
/** 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
const Lands_SetLandInfoByCubeInt = ll.import("PFLP", "Lands::SetLandInfoByCubeInt");
/** 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
const Lands_SetLandInfoByPos = ll.import("PFLP", "Lands::SetLandInfoByPos");
/** 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
const Lands_SetLandInfoByPosInt = ll.import("PFLP", "Lands::SetLandInfoByPosInt");
/** 获取玩家(指定玩家名)金钱 返回值类型：long */
const Money_Get = ll.import("PFLP", "Money::Get");
/** 给玩家(指定玩家名)加钱 */
const Money_Add = ll.import("PFLP", "Money::Add");
/** 给玩家(指定玩家名)减钱 */
const Money_Remove = ll.import("PFLP", "Money::Remove");

```
</details>

---
<details><summary>JavaScript object</summary>

``` JavaScript
const PFLP = {
	General : {
		/** 设置全局配置文件（要求JSON字符串） 返回值类型：bool */
		SetConfig : ll.import("PFLP", "General_SetConfig"),
		/** 获取全局配置文件（JSON字符串） 返回值类型：string */
		GetConfig : ll.import("PFLP", "General_GetConfig"),
		/** 重新加载所有功能的配置文件 */
		Reload : ll.import("PFLP", "General_Reload"),
	},
	Command : {
		/** 设置命令禁用(可设置提示) */
		SetCommandDisabled : ll.import("PFLP", "Command_SetCommandDisabled"),
		/** 设置命令启用 */
		SetCommandEnabled : ll.import("PFLP", "Command_SetCommandEnabled"),
	},
	Language : {
		/** 翻译 返回值类型：string */
		Translate : ll.import("PFLP", "Language_Translate"),
	},
	ChatEx : {
		/** 设置玩家昵称 */
		SetNickName : ll.import("PFLP", "ChatEx_SetNickName"),
		/** 设置玩家聊天时的名字 */
		SetFakeName : ll.import("PFLP", "ChatEx_SetFakeName"),
		/** 设置玩家聊天消息后缀 */
		SetEnd : ll.import("PFLP", "ChatEx_SetEnd"),
		/** 设置玩家聊天消息前缀 */
		SetStart : ll.import("PFLP", "ChatEx_SetStart"),
		/** 获取玩家昵称 返回值类型：string */
		GetNickName : ll.import("PFLP", "ChatEx_GetNickName"),
		/** 获取玩家聊天时的名字 返回值类型：string */
		GetFakeName : ll.import("PFLP", "ChatEx_GetFakeName"),
		/** 获取玩家聊天消息后缀 返回值类型：string */
		GetEnd : ll.import("PFLP", "ChatEx_GetEnd"),
		/** 获取玩家聊天消息前缀 返回值类型：string */
		GetStart : ll.import("PFLP", "ChatEx_GetStart"),
	},
	Lands : {
		/** 检查指定立方体区域(float)是否有领地 返回值类型：bool */
		CheckCubeHasLand : ll.import("PFLP", "Lands_CheckCubeHasLand"),
		/** 检查指定立方体区域(int)是否有领地 返回值类型：bool */
		CheckCubeHasLandInt : ll.import("PFLP", "Lands_CheckCubeHasLandInt"),
		/** 检查指定坐标(float)是否有领地 返回值类型：bool */
		CheckPosHasLand : ll.import("PFLP", "Lands_CheckPosHasLand"),
		/** 检查指定坐标(int)是否有领地 返回值类型：bool */
		CheckPosHasLandInt : ll.import("PFLP", "Lands_CheckPosHasLandInt"),
		/** 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string */
		GetLandByCube : ll.import("PFLP", "Lands_GetLandByCube"),
		/** 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string */
		GetLandByCubeInt : ll.import("PFLP", "Lands_GetLandByCubeInt"),
		/** 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string */
		GetLandByPos : ll.import("PFLP", "Lands_GetLandByPos"),
		/** 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string */
		GetLandByPosInt : ll.import("PFLP", "Lands_GetLandByPosInt"),
		/** 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
		GetLandInfoByCube : ll.import("PFLP", "Lands_GetLandInfoByCube"),
		/** 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
		GetLandInfoByCubeInt : ll.import("PFLP", "Lands_GetLandInfoByCubeInt"),
		/** 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
		GetLandInfoByPos : ll.import("PFLP", "Lands_GetLandInfoByPos"),
		/** 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
		GetLandInfoByPosInt : ll.import("PFLP", "Lands_GetLandInfoByPosInt"),
		/** 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
		SetLandInfoByCube : ll.import("PFLP", "Lands_SetLandInfoByCube"),
		/** 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
		SetLandInfoByCubeInt : ll.import("PFLP", "Lands_SetLandInfoByCubeInt"),
		/** 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
		SetLandInfoByPos : ll.import("PFLP", "Lands_SetLandInfoByPos"),
		/** 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
		SetLandInfoByPosInt : ll.import("PFLP", "Lands_SetLandInfoByPosInt"),
	},
	Money : {
		/** 获取玩家(指定玩家名)金钱 返回值类型：long */
		Get : ll.import("PFLP", "Money_Get"),
		/** 给玩家(指定玩家名)加钱 */
		Add : ll.import("PFLP", "Money_Add"),
		/** 给玩家(指定玩家名)减钱 */
		Remove : ll.import("PFLP", "Money_Remove"),
	},
};

```
</details>

---
</details>

<details>
<summary><b>All Api in C++<b></summary>

``` C++
// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
auto General_SetConfig = RemoteCall::importAs<bool(std::string const& jsonStr)>("PFLP", "General::SetConfig");
// 获取全局配置文件（JSON字符串） 返回值类型：string
auto General_GetConfig = RemoteCall::importAs<std::string()>("PFLP", "General::GetConfig");
// 重新加载所有功能的配置文件
auto General_Reload = RemoteCall::importAs<void()>("PFLP", "General::Reload");
// 设置命令禁用(可设置提示)
auto Command_SetCommandDisabled = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& cmd,std::string const& feedback)>("PFLP", "Command::SetCommandDisabled");
// 设置命令启用
auto Command_SetCommandEnabled = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& cmd)>("PFLP", "Command::SetCommandEnabled");
// 翻译 返回值类型：string
auto Language_Translate = RemoteCall::importAs<std::string(std::string const& fromLanguage,std::string const& toLanguage,std::string const& text)>("PFLP", "Language::Translate");
// 设置玩家昵称
auto ChatEx_SetNickName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& nickName)>("PFLP", "ChatEx::SetNickName");
// 设置玩家聊天时的名字
auto ChatEx_SetFakeName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& fakeName)>("PFLP", "ChatEx::SetFakeName");
// 设置玩家聊天消息后缀
auto ChatEx_SetEnd = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& endStr)>("PFLP", "ChatEx::SetEnd");
// 设置玩家聊天消息前缀
auto ChatEx_SetStart = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& startStr)>("PFLP", "ChatEx::SetStart");
// 获取玩家昵称 返回值类型：string
auto ChatEx_GetNickName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetNickName");
// 获取玩家聊天时的名字 返回值类型：string
auto ChatEx_GetFakeName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetFakeName");
// 获取玩家聊天消息后缀 返回值类型：string
auto ChatEx_GetEnd = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetEnd");
// 获取玩家聊天消息前缀 返回值类型：string
auto ChatEx_GetStart = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetStart");
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
auto Lands_CheckCubeHasLand = RemoteCall::importAs<bool(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::CheckCubeHasLand");
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
auto Lands_CheckCubeHasLandInt = RemoteCall::importAs<bool(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::CheckCubeHasLandInt");
// 检查指定坐标(float)是否有领地 返回值类型：bool
auto Lands_CheckPosHasLand = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::CheckPosHasLand");
// 检查指定坐标(int)是否有领地 返回值类型：bool
auto Lands_CheckPosHasLandInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::CheckPosHasLandInt");
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByCube = RemoteCall::importAs<std::string(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandByCube");
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByCubeInt = RemoteCall::importAs<std::string(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandByCubeInt");
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::GetLandByPos");
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::GetLandByPosInt");
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByCube = RemoteCall::importAs<std::string(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByCube");
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByCubeInt = RemoteCall::importAs<std::string(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByCubeInt");
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByPos");
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByPosInt");
// 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
auto Lands_SetLandInfoByCube = RemoteCall::importAs<bool(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByCube");
// 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
auto Lands_SetLandInfoByCubeInt = RemoteCall::importAs<bool(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByCubeInt");
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
auto Lands_SetLandInfoByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByPos");
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
auto Lands_SetLandInfoByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByPosInt");
// 获取玩家(指定玩家名)金钱 返回值类型：long
auto Money_Get = RemoteCall::importAs<long long(std::string const& playerXuid)>("PFLP", "Money::Get");
// 给玩家(指定玩家名)加钱
auto Money_Add = RemoteCall::importAs<void(std::string const& playerXuid,long long const& val,std::string const& info)>("PFLP", "Money::Add");
// 给玩家(指定玩家名)减钱
auto Money_Remove = RemoteCall::importAs<void(std::string const& playerXuid,long long const& val,std::string const& info)>("PFLP", "Money::Remove");

```
</details>


<details><summary><b>All Api in C#<b></summary>

---
<details><summary>C# imports</summary>

``` C#
// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
var General_SetConfig = RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig");
// 获取全局配置文件（JSON字符串） 返回值类型：string
var General_GetConfig = RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig");
// 重新加载所有功能的配置文件
var General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload");
// 设置命令禁用(可设置提示)
var Command_SetCommandDisabled = RemoteCallAPI.Import_As<string,string,string>("PFLP", "Command::SetCommandDisabled");
// 设置命令启用
var Command_SetCommandEnabled = RemoteCallAPI.Import_As<string,string>("PFLP", "Command::SetCommandEnabled");
// 翻译 返回值类型：string
var Language_Translate = RemoteCallAPI.ImportAs<string,string,string,string>("PFLP", "Language::Translate");
// 设置玩家昵称
var ChatEx_SetNickName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName");
// 设置玩家聊天时的名字
var ChatEx_SetFakeName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName");
// 设置玩家聊天消息后缀
var ChatEx_SetEnd = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd");
// 设置玩家聊天消息前缀
var ChatEx_SetStart = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart");
// 获取玩家昵称 返回值类型：string
var ChatEx_GetNickName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName");
// 获取玩家聊天时的名字 返回值类型：string
var ChatEx_GetFakeName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName");
// 获取玩家聊天消息后缀 返回值类型：string
var ChatEx_GetEnd = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd");
// 获取玩家聊天消息前缀 返回值类型：string
var ChatEx_GetStart = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart");
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
var Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int>("PFLP", "Lands::CheckCubeHasLand");
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
var Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int>("PFLP", "Lands::CheckCubeHasLandInt");
// 检查指定坐标(float)是否有领地 返回值类型：bool
var Lands_CheckPosHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::CheckPosHasLand");
// 检查指定坐标(int)是否有领地 返回值类型：bool
var Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::CheckPosHasLandInt");
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandByCube");
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandByCubeInt");
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandByPos");
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandByPosInt");
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandInfoByCube");
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandInfoByCubeInt");
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandInfoByPos");
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandInfoByPosInt");
// 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
var Lands_SetLandInfoByCube = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByCube");
// 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
var Lands_SetLandInfoByCubeInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByCubeInt");
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
var Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByPos");
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
var Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByPosInt");
// 获取玩家(指定玩家名)金钱 返回值类型：long
var Money_Get = RemoteCallAPI.ImportAs<long,string>("PFLP", "Money::Get");
// 给玩家(指定玩家名)加钱
var Money_Add = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Add");
// 给玩家(指定玩家名)减钱
var Money_Remove = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Remove");

```
</details>

---
<details><summary>C# class</summary>

``` C# 
internal static class PFLP {
	public static class General {
		private static Lazy<RemoteCallHandler_1<bool,string>>  General_SetConfig_instance = new(()=> RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig"));
		/// <summary> 设置全局配置文件（要求JSON字符串） 返回值类型：bool </summary>
		public static bool SetConfig(string jsonStr) {
			return General_SetConfig_instance.Value(jsonStr);
		}
		private static Lazy<RemoteCallHandler_0<string>>  General_GetConfig_instance = new(()=> RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig"));
		/// <summary> 获取全局配置文件（JSON字符串） 返回值类型：string </summary>
		public static string GetConfig() {
			return General_GetConfig_instance.Value();
		}
		private static Lazy<RemoteCallHandler_void_0>  General_Reload_instance = new(()=> RemoteCallAPI.Import_As("PFLP", "General::Reload"));
		/// <summary> 重新加载所有功能的配置文件 </summary>
		public static void Reload() {
			General_Reload_instance.Value();
		}
	}
	public static class Command {
		private static Lazy<RemoteCallHandler_void_3<string,string,string>>  Command_SetCommandDisabled_instance = new(()=> RemoteCallAPI.Import_As<string,string,string>("PFLP", "Command::SetCommandDisabled"));
		/// <summary> 设置命令禁用(可设置提示) </summary>
		public static void SetCommandDisabled(string playerXuid,string cmd,string feedback) {
			Command_SetCommandDisabled_instance.Value(playerXuid,cmd,feedback);
		}
		private static Lazy<RemoteCallHandler_void_2<string,string>>  Command_SetCommandEnabled_instance = new(()=> RemoteCallAPI.Import_As<string,string>("PFLP", "Command::SetCommandEnabled"));
		/// <summary> 设置命令启用 </summary>
		public static void SetCommandEnabled(string playerXuid,string cmd) {
			Command_SetCommandEnabled_instance.Value(playerXuid,cmd);
		}
	}
	public static class Language {
		private static Lazy<RemoteCallHandler_3<string,string,string,string>>  Language_Translate_instance = new(()=> RemoteCallAPI.ImportAs<string,string,string,string>("PFLP", "Language::Translate"));
		/// <summary> 翻译 返回值类型：string </summary>
		public static string Translate(string fromLanguage,string toLanguage,string text) {
			return Language_Translate_instance.Value(fromLanguage,toLanguage,text);
		}
	}
	public static class ChatEx {
		private static Lazy<RemoteCallHandler_void_2<string,string>>  ChatEx_SetNickName_instance = new(()=> RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName"));
		/// <summary> 设置玩家昵称 </summary>
		public static void SetNickName(string playerXuid,string nickName) {
			ChatEx_SetNickName_instance.Value(playerXuid,nickName);
		}
		private static Lazy<RemoteCallHandler_void_2<string,string>>  ChatEx_SetFakeName_instance = new(()=> RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName"));
		/// <summary> 设置玩家聊天时的名字 </summary>
		public static void SetFakeName(string playerXuid,string fakeName) {
			ChatEx_SetFakeName_instance.Value(playerXuid,fakeName);
		}
		private static Lazy<RemoteCallHandler_void_2<string,string>>  ChatEx_SetEnd_instance = new(()=> RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd"));
		/// <summary> 设置玩家聊天消息后缀 </summary>
		public static void SetEnd(string playerXuid,string endStr) {
			ChatEx_SetEnd_instance.Value(playerXuid,endStr);
		}
		private static Lazy<RemoteCallHandler_void_2<string,string>>  ChatEx_SetStart_instance = new(()=> RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart"));
		/// <summary> 设置玩家聊天消息前缀 </summary>
		public static void SetStart(string playerXuid,string startStr) {
			ChatEx_SetStart_instance.Value(playerXuid,startStr);
		}
		private static Lazy<RemoteCallHandler_1<string,string>>  ChatEx_GetNickName_instance = new(()=> RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName"));
		/// <summary> 获取玩家昵称 返回值类型：string </summary>
		public static string GetNickName(string playerXuid) {
			return ChatEx_GetNickName_instance.Value(playerXuid);
		}
		private static Lazy<RemoteCallHandler_1<string,string>>  ChatEx_GetFakeName_instance = new(()=> RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName"));
		/// <summary> 获取玩家聊天时的名字 返回值类型：string </summary>
		public static string GetFakeName(string playerXuid) {
			return ChatEx_GetFakeName_instance.Value(playerXuid);
		}
		private static Lazy<RemoteCallHandler_1<string,string>>  ChatEx_GetEnd_instance = new(()=> RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd"));
		/// <summary> 获取玩家聊天消息后缀 返回值类型：string </summary>
		public static string GetEnd(string playerXuid) {
			return ChatEx_GetEnd_instance.Value(playerXuid);
		}
		private static Lazy<RemoteCallHandler_1<string,string>>  ChatEx_GetStart_instance = new(()=> RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart"));
		/// <summary> 获取玩家聊天消息前缀 返回值类型：string </summary>
		public static string GetStart(string playerXuid) {
			return ChatEx_GetStart_instance.Value(playerXuid);
		}
	}
	public static class Lands {
		private static Lazy<RemoteCallHandler_7<bool,float,float,float,float,float,float,int>>  Lands_CheckCubeHasLand_instance = new(()=> RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int>("PFLP", "Lands::CheckCubeHasLand"));
		/// <summary> 检查指定立方体区域(float)是否有领地 返回值类型：bool </summary>
		public static bool CheckCubeHasLand(float x1,float y1,float z1,float x2,float y2,float z2,int dimensionId) {
			return Lands_CheckCubeHasLand_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<RemoteCallHandler_7<bool,int,int,int,int,int,int,int>>  Lands_CheckCubeHasLandInt_instance = new(()=> RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int>("PFLP", "Lands::CheckCubeHasLandInt"));
		/// <summary> 检查指定立方体区域(int)是否有领地 返回值类型：bool </summary>
		public static bool CheckCubeHasLandInt(int x1,int y1,int z1,int x2,int y2,int z2,int dimensionId) {
			return Lands_CheckCubeHasLandInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<RemoteCallHandler_4<bool,float,float,float,int>>  Lands_CheckPosHasLand_instance = new(()=> RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::CheckPosHasLand"));
		/// <summary> 检查指定坐标(float)是否有领地 返回值类型：bool </summary>
		public static bool CheckPosHasLand(float x,float y,float z,int dimensionId) {
			return Lands_CheckPosHasLand_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<RemoteCallHandler_4<bool,int,int,int,int>>  Lands_CheckPosHasLandInt_instance = new(()=> RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::CheckPosHasLandInt"));
		/// <summary> 检查指定坐标(int)是否有领地 返回值类型：bool </summary>
		public static bool CheckPosHasLandInt(int x,int y,int z,int dimensionId) {
			return Lands_CheckPosHasLandInt_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<RemoteCallHandler_7<string,float,float,float,float,float,float,int>>  Lands_GetLandByCube_instance = new(()=> RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandByCube"));
		/// <summary> 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandByCube(float x1,float y1,float z1,float x2,float y2,float z2,int dimensionId) {
			return Lands_GetLandByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<RemoteCallHandler_7<string,int,int,int,int,int,int,int>>  Lands_GetLandByCubeInt_instance = new(()=> RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandByCubeInt"));
		/// <summary> 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandByCubeInt(int x1,int y1,int z1,int x2,int y2,int z2,int dimensionId) {
			return Lands_GetLandByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<RemoteCallHandler_4<string,float,float,float,int>>  Lands_GetLandByPos_instance = new(()=> RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandByPos"));
		/// <summary> 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandByPos(float x,float y,float z,int dimensionId) {
			return Lands_GetLandByPos_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<RemoteCallHandler_4<string,int,int,int,int>>  Lands_GetLandByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandByPosInt"));
		/// <summary> 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandByPosInt(int x,int y,int z,int dimensionId) {
			return Lands_GetLandByPosInt_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<RemoteCallHandler_7<string,float,float,float,float,float,float,int>>  Lands_GetLandInfoByCube_instance = new(()=> RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandInfoByCube"));
		/// <summary> 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandInfoByCube(float x1,float y1,float z1,float x2,float y2,float z2,int dimensionId) {
			return Lands_GetLandInfoByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<RemoteCallHandler_7<string,int,int,int,int,int,int,int>>  Lands_GetLandInfoByCubeInt_instance = new(()=> RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandInfoByCubeInt"));
		/// <summary> 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandInfoByCubeInt(int x1,int y1,int z1,int x2,int y2,int z2,int dimensionId) {
			return Lands_GetLandInfoByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<RemoteCallHandler_4<string,float,float,float,int>>  Lands_GetLandInfoByPos_instance = new(()=> RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandInfoByPos"));
		/// <summary> 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandInfoByPos(float x,float y,float z,int dimensionId) {
			return Lands_GetLandInfoByPos_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<RemoteCallHandler_4<string,int,int,int,int>>  Lands_GetLandInfoByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandInfoByPosInt"));
		/// <summary> 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandInfoByPosInt(int x,int y,int z,int dimensionId) {
			return Lands_GetLandInfoByPosInt_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<RemoteCallHandler_8<bool,float,float,float,float,float,float,int,string>>  Lands_SetLandInfoByCube_instance = new(()=> RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByCube"));
		/// <summary> 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		public static bool SetLandInfoByCube(float x1,float y1,float z1,float x2,float y2,float z2,int dimensionId,string landinfo) {
			return Lands_SetLandInfoByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
		}
		private static Lazy<RemoteCallHandler_8<bool,int,int,int,int,int,int,int,string>>  Lands_SetLandInfoByCubeInt_instance = new(()=> RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByCubeInt"));
		/// <summary> 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		public static bool SetLandInfoByCubeInt(int x1,int y1,int z1,int x2,int y2,int z2,int dimensionId,string landinfo) {
			return Lands_SetLandInfoByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId,landinfo);
		}
		private static Lazy<RemoteCallHandler_5<bool,float,float,float,int,string>>  Lands_SetLandInfoByPos_instance = new(()=> RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByPos"));
		/// <summary> 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		public static bool SetLandInfoByPos(float x,float y,float z,int dimensionId,string landinfo) {
			return Lands_SetLandInfoByPos_instance.Value(x,y,z,dimensionId,landinfo);
		}
		private static Lazy<RemoteCallHandler_5<bool,int,int,int,int,string>>  Lands_SetLandInfoByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByPosInt"));
		/// <summary> 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		public static bool SetLandInfoByPosInt(int x,int y,int z,int dimensionId,string landinfo) {
			return Lands_SetLandInfoByPosInt_instance.Value(x,y,z,dimensionId,landinfo);
		}
	}
	public static class Money {
		private static Lazy<RemoteCallHandler_1<long,string>>  Money_Get_instance = new(()=> RemoteCallAPI.ImportAs<long,string>("PFLP", "Money::Get"));
		/// <summary> 获取玩家(指定玩家名)金钱 返回值类型：long </summary>
		public static long Get(string playerXuid) {
			return Money_Get_instance.Value(playerXuid);
		}
		private static Lazy<RemoteCallHandler_void_3<string,long,string>>  Money_Add_instance = new(()=> RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Add"));
		/// <summary> 给玩家(指定玩家名)加钱 </summary>
		public static void Add(string playerXuid,long val,string info) {
			Money_Add_instance.Value(playerXuid,val,info);
		}
		private static Lazy<RemoteCallHandler_void_3<string,long,string>>  Money_Remove_instance = new(()=> RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Remove"));
		/// <summary> 给玩家(指定玩家名)减钱 </summary>
		public static void Remove(string playerXuid,long val,string info) {
			Money_Remove_instance.Value(playerXuid,val,info);
		}
	}
}
 
```
</details>

---
</details>


<details><summary><b>All Api in VB<b></summary>

---
<details><summary>VB imports</summary>

``` VB
' 设置全局配置文件（要求JSON字符串） 返回值类型：bool
Dim General_SetConfig = RemoteCallAPI.ImportAs(Of Boolean,String)("PFLP", "General::SetConfig");
' 获取全局配置文件（JSON字符串） 返回值类型：string
Dim General_GetConfig = RemoteCallAPI.ImportAs(Of String)("PFLP", "General::GetConfig");
' 重新加载所有功能的配置文件
Dim General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload");
' 设置命令禁用(可设置提示)
Dim Command_SetCommandDisabled = RemoteCallAPI.Import_As(Of String,String,String)("PFLP", "Command::SetCommandDisabled");
' 设置命令启用
Dim Command_SetCommandEnabled = RemoteCallAPI.Import_As(Of String,String)("PFLP", "Command::SetCommandEnabled");
' 翻译 返回值类型：string
Dim Language_Translate = RemoteCallAPI.ImportAs(Of String,String,String,String)("PFLP", "Language::Translate");
' 设置玩家昵称
Dim ChatEx_SetNickName = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetNickName");
' 设置玩家聊天时的名字
Dim ChatEx_SetFakeName = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetFakeName");
' 设置玩家聊天消息后缀
Dim ChatEx_SetEnd = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetEnd");
' 设置玩家聊天消息前缀
Dim ChatEx_SetStart = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetStart");
' 获取玩家昵称 返回值类型：string
Dim ChatEx_GetNickName = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetNickName");
' 获取玩家聊天时的名字 返回值类型：string
Dim ChatEx_GetFakeName = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetFakeName");
' 获取玩家聊天消息后缀 返回值类型：string
Dim ChatEx_GetEnd = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetEnd");
' 获取玩家聊天消息前缀 返回值类型：string
Dim ChatEx_GetStart = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetStart");
' 检查指定立方体区域(float)是否有领地 返回值类型：bool
Dim Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::CheckCubeHasLand");
' 检查指定立方体区域(int)是否有领地 返回值类型：bool
Dim Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::CheckCubeHasLandInt");
' 检查指定坐标(float)是否有领地 返回值类型：bool
Dim Lands_CheckPosHasLand = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer)("PFLP", "Lands::CheckPosHasLand");
' 检查指定坐标(int)是否有领地 返回值类型：bool
Dim Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer)("PFLP", "Lands::CheckPosHasLandInt");
' 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByCube = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::GetLandByCube");
' 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandByCubeInt");
' 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByPos = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer)("PFLP", "Lands::GetLandByPos");
' 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByPosInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandByPosInt");
' 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::GetLandInfoByCube");
' 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandInfoByCubeInt");
' 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer)("PFLP", "Lands::GetLandInfoByPos");
' 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandInfoByPosInt");
' 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
Dim Lands_SetLandInfoByCube = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Single,Single,Single,Integer,String)("PFLP", "Lands::SetLandInfoByCube");
' 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
Dim Lands_SetLandInfoByCubeInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::SetLandInfoByCubeInt");
' 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
Dim Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer,String)("PFLP", "Lands::SetLandInfoByPos");
' 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
Dim Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::SetLandInfoByPosInt");
' 获取玩家(指定玩家名)金钱 返回值类型：long
Dim Money_Get = RemoteCallAPI.ImportAs(Of Long,String)("PFLP", "Money::Get");
' 给玩家(指定玩家名)加钱
Dim Money_Add = RemoteCallAPI.Import_As(Of String,Long,String)("PFLP", "Money::Add");
' 给玩家(指定玩家名)减钱
Dim Money_Remove = RemoteCallAPI.Import_As(Of String,Long,String)("PFLP", "Money::Remove");

```
</details>

---
<details><summary>VB class</summary>

``` VB 
Friend Module PFLP
	Public NotInheritable Class General
		Private Shared General_SetConfig_instance As Lazy(Of RemoteCallHandler_1(Of Boolean,String))(Function() RemoteCallAPI.ImportAs(Of Boolean,String)("PFLP", "General::SetConfig"))
		''' <summary> 设置全局配置文件（要求JSON字符串） 返回值类型：bool </summary>
		Public Shared Function SetConfig(jsonStr As String) As bool 
			Return General_SetConfig_instance.Value(jsonStr)
		End Function
		Private Shared General_GetConfig_instance As Lazy(Of RemoteCallHandler_0(Of String))(Function() RemoteCallAPI.ImportAs(Of String)("PFLP", "General::GetConfig"))
		''' <summary> 获取全局配置文件（JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetConfig() As string 
			Return General_GetConfig_instance.Value()
		End Function
		Private Shared General_Reload_instance As Lazy(Of RemoteCallHandler_void_0)(Function() RemoteCallAPI.Import_As("PFLP", "General::Reload"))
		''' <summary> 重新加载所有功能的配置文件 </summary>
		Public Shared Sub Reload()  
			General_Reload_instance.Value()
		End Sub
	End Class
	Public NotInheritable Class Command
		Private Shared Command_SetCommandDisabled_instance As Lazy(Of RemoteCallHandler_void_3(Of String,String,String))(Function() RemoteCallAPI.Import_As(Of String,String,String)("PFLP", "Command::SetCommandDisabled"))
		''' <summary> 设置命令禁用(可设置提示) </summary>
		Public Shared Sub SetCommandDisabled(playerXuid As String,cmd As String,feedback As String)  
			Command_SetCommandDisabled_instance.Value(playerXuid,cmd,feedback)
		End Sub
		Private Shared Command_SetCommandEnabled_instance As Lazy(Of RemoteCallHandler_void_2(Of String,String))(Function() RemoteCallAPI.Import_As(Of String,String)("PFLP", "Command::SetCommandEnabled"))
		''' <summary> 设置命令启用 </summary>
		Public Shared Sub SetCommandEnabled(playerXuid As String,cmd As String)  
			Command_SetCommandEnabled_instance.Value(playerXuid,cmd)
		End Sub
	End Class
	Public NotInheritable Class Language
		Private Shared Language_Translate_instance As Lazy(Of RemoteCallHandler_3(Of String,String,String,String))(Function() RemoteCallAPI.ImportAs(Of String,String,String,String)("PFLP", "Language::Translate"))
		''' <summary> 翻译 返回值类型：string </summary>
		Public Shared Function Translate(fromLanguage As String,toLanguage As String,text As String) As string 
			Return Language_Translate_instance.Value(fromLanguage,toLanguage,text)
		End Function
	End Class
	Public NotInheritable Class ChatEx
		Private Shared ChatEx_SetNickName_instance As Lazy(Of RemoteCallHandler_void_2(Of String,String))(Function() RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetNickName"))
		''' <summary> 设置玩家昵称 </summary>
		Public Shared Sub SetNickName(playerXuid As String,nickName As String)  
			ChatEx_SetNickName_instance.Value(playerXuid,nickName)
		End Sub
		Private Shared ChatEx_SetFakeName_instance As Lazy(Of RemoteCallHandler_void_2(Of String,String))(Function() RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetFakeName"))
		''' <summary> 设置玩家聊天时的名字 </summary>
		Public Shared Sub SetFakeName(playerXuid As String,fakeName As String)  
			ChatEx_SetFakeName_instance.Value(playerXuid,fakeName)
		End Sub
		Private Shared ChatEx_SetEnd_instance As Lazy(Of RemoteCallHandler_void_2(Of String,String))(Function() RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetEnd"))
		''' <summary> 设置玩家聊天消息后缀 </summary>
		Public Shared Sub SetEnd(playerXuid As String,endStr As String)  
			ChatEx_SetEnd_instance.Value(playerXuid,endStr)
		End Sub
		Private Shared ChatEx_SetStart_instance As Lazy(Of RemoteCallHandler_void_2(Of String,String))(Function() RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetStart"))
		''' <summary> 设置玩家聊天消息前缀 </summary>
		Public Shared Sub SetStart(playerXuid As String,startStr As String)  
			ChatEx_SetStart_instance.Value(playerXuid,startStr)
		End Sub
		Private Shared ChatEx_GetNickName_instance As Lazy(Of RemoteCallHandler_1(Of String,String))(Function() RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetNickName"))
		''' <summary> 获取玩家昵称 返回值类型：string </summary>
		Public Shared Function GetNickName(playerXuid As String) As string 
			Return ChatEx_GetNickName_instance.Value(playerXuid)
		End Function
		Private Shared ChatEx_GetFakeName_instance As Lazy(Of RemoteCallHandler_1(Of String,String))(Function() RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetFakeName"))
		''' <summary> 获取玩家聊天时的名字 返回值类型：string </summary>
		Public Shared Function GetFakeName(playerXuid As String) As string 
			Return ChatEx_GetFakeName_instance.Value(playerXuid)
		End Function
		Private Shared ChatEx_GetEnd_instance As Lazy(Of RemoteCallHandler_1(Of String,String))(Function() RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetEnd"))
		''' <summary> 获取玩家聊天消息后缀 返回值类型：string </summary>
		Public Shared Function GetEnd(playerXuid As String) As string 
			Return ChatEx_GetEnd_instance.Value(playerXuid)
		End Function
		Private Shared ChatEx_GetStart_instance As Lazy(Of RemoteCallHandler_1(Of String,String))(Function() RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetStart"))
		''' <summary> 获取玩家聊天消息前缀 返回值类型：string </summary>
		Public Shared Function GetStart(playerXuid As String) As string 
			Return ChatEx_GetStart_instance.Value(playerXuid)
		End Function
	End Class
	Public NotInheritable Class Lands
		Private Shared Lands_CheckCubeHasLand_instance As Lazy(Of RemoteCallHandler_7(Of Boolean,Single,Single,Single,Single,Single,Single,Integer))(Function() RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::CheckCubeHasLand"))
		''' <summary> 检查指定立方体区域(float)是否有领地 返回值类型：bool </summary>
		Public Shared Function CheckCubeHasLand(x1 As Single,y1 As Single,z1 As Single,x2 As Single,y2 As Single,z2 As Single,dimensionId As Integer) As bool 
			Return Lands_CheckCubeHasLand_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_CheckCubeHasLandInt_instance As Lazy(Of RemoteCallHandler_7(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer))(Function() RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::CheckCubeHasLandInt"))
		''' <summary> 检查指定立方体区域(int)是否有领地 返回值类型：bool </summary>
		Public Shared Function CheckCubeHasLandInt(x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,dimensionId As Integer) As bool 
			Return Lands_CheckCubeHasLandInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_CheckPosHasLand_instance As Lazy(Of RemoteCallHandler_4(Of Boolean,Single,Single,Single,Integer))(Function() RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer)("PFLP", "Lands::CheckPosHasLand"))
		''' <summary> 检查指定坐标(float)是否有领地 返回值类型：bool </summary>
		Public Shared Function CheckPosHasLand(x As Single,y As Single,z As Single,dimensionId As Integer) As bool 
			Return Lands_CheckPosHasLand_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_CheckPosHasLandInt_instance As Lazy(Of RemoteCallHandler_4(Of Boolean,Integer,Integer,Integer,Integer))(Function() RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer)("PFLP", "Lands::CheckPosHasLandInt"))
		''' <summary> 检查指定坐标(int)是否有领地 返回值类型：bool </summary>
		Public Shared Function CheckPosHasLandInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer) As bool 
			Return Lands_CheckPosHasLandInt_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandByCube_instance As Lazy(Of RemoteCallHandler_7(Of String,Single,Single,Single,Single,Single,Single,Integer))(Function() RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::GetLandByCube"))
		''' <summary> 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandByCube(x1 As Single,y1 As Single,z1 As Single,x2 As Single,y2 As Single,z2 As Single,dimensionId As Integer) As string 
			Return Lands_GetLandByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_GetLandByCubeInt_instance As Lazy(Of RemoteCallHandler_7(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer))(Function() RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandByCubeInt"))
		''' <summary> 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandByCubeInt(x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,dimensionId As Integer) As string 
			Return Lands_GetLandByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_GetLandByPos_instance As Lazy(Of RemoteCallHandler_4(Of String,Single,Single,Single,Integer))(Function() RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer)("PFLP", "Lands::GetLandByPos"))
		''' <summary> 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandByPos(x As Single,y As Single,z As Single,dimensionId As Integer) As string 
			Return Lands_GetLandByPos_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandByPosInt_instance As Lazy(Of RemoteCallHandler_4(Of String,Integer,Integer,Integer,Integer))(Function() RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandByPosInt"))
		''' <summary> 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer) As string 
			Return Lands_GetLandByPosInt_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandInfoByCube_instance As Lazy(Of RemoteCallHandler_7(Of String,Single,Single,Single,Single,Single,Single,Integer))(Function() RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::GetLandInfoByCube"))
		''' <summary> 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandInfoByCube(x1 As Single,y1 As Single,z1 As Single,x2 As Single,y2 As Single,z2 As Single,dimensionId As Integer) As string 
			Return Lands_GetLandInfoByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_GetLandInfoByCubeInt_instance As Lazy(Of RemoteCallHandler_7(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer))(Function() RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandInfoByCubeInt"))
		''' <summary> 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandInfoByCubeInt(x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,dimensionId As Integer) As string 
			Return Lands_GetLandInfoByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_GetLandInfoByPos_instance As Lazy(Of RemoteCallHandler_4(Of String,Single,Single,Single,Integer))(Function() RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer)("PFLP", "Lands::GetLandInfoByPos"))
		''' <summary> 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandInfoByPos(x As Single,y As Single,z As Single,dimensionId As Integer) As string 
			Return Lands_GetLandInfoByPos_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandInfoByPosInt_instance As Lazy(Of RemoteCallHandler_4(Of String,Integer,Integer,Integer,Integer))(Function() RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandInfoByPosInt"))
		''' <summary> 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandInfoByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer) As string 
			Return Lands_GetLandInfoByPosInt_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_SetLandInfoByCube_instance As Lazy(Of RemoteCallHandler_8(Of Boolean,Single,Single,Single,Single,Single,Single,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Single,Single,Single,Integer,String)("PFLP", "Lands::SetLandInfoByCube"))
		''' <summary> 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		Public Shared Function SetLandInfoByCube(x1 As Single,y1 As Single,z1 As Single,x2 As Single,y2 As Single,z2 As Single,dimensionId As Integer,landinfo As String) As bool 
			Return Lands_SetLandInfoByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId,landinfo)
		End Function
		Private Shared Lands_SetLandInfoByCubeInt_instance As Lazy(Of RemoteCallHandler_8(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::SetLandInfoByCubeInt"))
		''' <summary> 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		Public Shared Function SetLandInfoByCubeInt(x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,dimensionId As Integer,landinfo As String) As bool 
			Return Lands_SetLandInfoByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId,landinfo)
		End Function
		Private Shared Lands_SetLandInfoByPos_instance As Lazy(Of RemoteCallHandler_5(Of Boolean,Single,Single,Single,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer,String)("PFLP", "Lands::SetLandInfoByPos"))
		''' <summary> 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		Public Shared Function SetLandInfoByPos(x As Single,y As Single,z As Single,dimensionId As Integer,landinfo As String) As bool 
			Return Lands_SetLandInfoByPos_instance.Value(x,y,z,dimensionId,landinfo)
		End Function
		Private Shared Lands_SetLandInfoByPosInt_instance As Lazy(Of RemoteCallHandler_5(Of Boolean,Integer,Integer,Integer,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::SetLandInfoByPosInt"))
		''' <summary> 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		Public Shared Function SetLandInfoByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer,landinfo As String) As bool 
			Return Lands_SetLandInfoByPosInt_instance.Value(x,y,z,dimensionId,landinfo)
		End Function
	End Class
	Public NotInheritable Class Money
		Private Shared Money_Get_instance As Lazy(Of RemoteCallHandler_1(Of Long,String))(Function() RemoteCallAPI.ImportAs(Of Long,String)("PFLP", "Money::Get"))
		''' <summary> 获取玩家(指定玩家名)金钱 返回值类型：long </summary>
		Public Shared Function Get(playerXuid As String) As long 
			Return Money_Get_instance.Value(playerXuid)
		End Function
		Private Shared Money_Add_instance As Lazy(Of RemoteCallHandler_void_3(Of String,Long,String))(Function() RemoteCallAPI.Import_As(Of String,Long,String)("PFLP", "Money::Add"))
		''' <summary> 给玩家(指定玩家名)加钱 </summary>
		Public Shared Sub Add(playerXuid As String,val As Long,info As String)  
			Money_Add_instance.Value(playerXuid,val,info)
		End Sub
		Private Shared Money_Remove_instance As Lazy(Of RemoteCallHandler_void_3(Of String,Long,String))(Function() RemoteCallAPI.Import_As(Of String,Long,String)("PFLP", "Money::Remove"))
		''' <summary> 给玩家(指定玩家名)减钱 </summary>
		Public Shared Sub Remove(playerXuid As String,val As Long,info As String)  
			Money_Remove_instance.Value(playerXuid,val,info)
		End Sub
	End Class
End Module
 
```
</details>

---
</details>


<details><summary><b>All Api in F#<b></summary>

---
<details><summary>F# imports</summary>

``` F#
// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
let General_SetConfig = RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig")
// 获取全局配置文件（JSON字符串） 返回值类型：string
let General_GetConfig = RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig")
// 重新加载所有功能的配置文件
let General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload")
// 设置命令禁用(可设置提示)
let Command_SetCommandDisabled = RemoteCallAPI.Import_As<string,string,string>("PFLP", "Command::SetCommandDisabled")
// 设置命令启用
let Command_SetCommandEnabled = RemoteCallAPI.Import_As<string,string>("PFLP", "Command::SetCommandEnabled")
// 翻译 返回值类型：string
let Language_Translate = RemoteCallAPI.ImportAs<string,string,string,string>("PFLP", "Language::Translate")
// 设置玩家昵称
let ChatEx_SetNickName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName")
// 设置玩家聊天时的名字
let ChatEx_SetFakeName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName")
// 设置玩家聊天消息后缀
let ChatEx_SetEnd = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd")
// 设置玩家聊天消息前缀
let ChatEx_SetStart = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart")
// 获取玩家昵称 返回值类型：string
let ChatEx_GetNickName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName")
// 获取玩家聊天时的名字 返回值类型：string
let ChatEx_GetFakeName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName")
// 获取玩家聊天消息后缀 返回值类型：string
let ChatEx_GetEnd = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd")
// 获取玩家聊天消息前缀 返回值类型：string
let ChatEx_GetStart = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart")
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
let Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int>("PFLP", "Lands::CheckCubeHasLand")
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
let Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int>("PFLP", "Lands::CheckCubeHasLandInt")
// 检查指定坐标(float)是否有领地 返回值类型：bool
let Lands_CheckPosHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::CheckPosHasLand")
// 检查指定坐标(int)是否有领地 返回值类型：bool
let Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::CheckPosHasLandInt")
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandByCube")
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandByCubeInt")
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandByPos")
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandByPosInt")
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandInfoByCube")
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandInfoByCubeInt")
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandInfoByPos")
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandInfoByPosInt")
// 设置指定立方体区域(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
let Lands_SetLandInfoByCube = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByCube")
// 设置指定立方体区域(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
let Lands_SetLandInfoByCubeInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByCubeInt")
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
let Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByPos")
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
let Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByPosInt")
// 获取玩家(指定玩家名)金钱 返回值类型：long
let Money_Get = RemoteCallAPI.ImportAs<long,string>("PFLP", "Money::Get")
// 给玩家(指定玩家名)加钱
let Money_Add = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Add")
// 给玩家(指定玩家名)减钱
let Money_Remove = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Remove")

```
</details>

---
<details><summary>F# class</summary>

``` F#
BetterCodeFS.ToString()
```
</details>

---
</details>

