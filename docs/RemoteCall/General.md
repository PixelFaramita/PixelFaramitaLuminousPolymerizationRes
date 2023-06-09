---
title: General
---

[[toc]]


---
## General::SetConfig
### 设置全局配置文件（要求JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>jsonStr</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 设置全局配置文件（要求JSON字符串） 返回值类型：bool */
const General_SetConfig = ll.import("PFLP", "General::SetConfig");
let result = General_SetConfig(jsonStr);
```
 - C++
```cpp
// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
auto General_SetConfig = RemoteCall::importAs<bool(std::string const& jsonStr)>("PFLP", "General::SetConfig");
auto result = General_SetConfig(jsonStr);
```
 - C#
```csharp
// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
var General_SetConfig = RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig");
var result = General_SetConfig(jsonStr);
```
 - Visual Basic .NET
```vb
' 设置全局配置文件（要求JSON字符串） 返回值类型：bool
Dim General_SetConfig = RemoteCallAPI.ImportAs(Of Boolean,String)("PFLP", "General::SetConfig")
Dim result = General_SetConfig(jsonStr)
```
 - F#
```fsharp
// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
let General_SetConfig = RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig")
jsonStr
	|>General_SetConfig.Invoke
	|>ignore
```

---
## General::GetConfig
### 获取全局配置文件（JSON字符串）
<table><tr><th>无参数;</th></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取全局配置文件（JSON字符串） 返回值类型：string */
const General_GetConfig = ll.import("PFLP", "General::GetConfig");
let result = General_GetConfig();
```
 - C++
```cpp
// 获取全局配置文件（JSON字符串） 返回值类型：string
auto General_GetConfig = RemoteCall::importAs<std::string()>("PFLP", "General::GetConfig");
auto result = General_GetConfig();
```
 - C#
```csharp
// 获取全局配置文件（JSON字符串） 返回值类型：string
var General_GetConfig = RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig");
var result = General_GetConfig();
```
 - Visual Basic .NET
```vb
' 获取全局配置文件（JSON字符串） 返回值类型：string
Dim General_GetConfig = RemoteCallAPI.ImportAs(Of String)("PFLP", "General::GetConfig")
Dim result = General_GetConfig()
```
 - F#
```fsharp
// 获取全局配置文件（JSON字符串） 返回值类型：string
let General_GetConfig = RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig")
General_GetConfig()
	|>ignore
```

---
## General::Reload
### 重新加载所有功能的配置文件
<table><tr><th>无参数;</th></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 重新加载所有功能的配置文件 */
const General_Reload = ll.import("PFLP", "General::Reload");
General_Reload();
```
 - C++
```cpp
// 重新加载所有功能的配置文件
auto General_Reload = RemoteCall::importAs<void()>("PFLP", "General::Reload");
General_Reload();
```
 - C#
```csharp
// 重新加载所有功能的配置文件
var General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload");
General_Reload();
```
 - Visual Basic .NET
```vb
' 重新加载所有功能的配置文件
Dim General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload")
General_Reload()
```
 - F#
```fsharp
// 重新加载所有功能的配置文件
let General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload")
General_Reload()
```

