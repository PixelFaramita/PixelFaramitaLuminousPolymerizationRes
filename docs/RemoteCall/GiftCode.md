---
title: GiftCode
---

[[toc]]


---
## GiftCode::GetAllPackName
### 获取所有礼包的礼包名（返回json字符串数组）
<table><tr><th>无参数;</th></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取所有礼包的礼包名（返回json字符串数组） 返回值类型：string */
const GiftCode_GetAllPackName = ll.import("PFLP", "GiftCode::GetAllPackName");
let result = GiftCode_GetAllPackName();
```
 - C++
```cpp
// 获取所有礼包的礼包名（返回json字符串数组） 返回值类型：string
auto GiftCode_GetAllPackName = RemoteCall::importAs<std::string()>("PFLP", "GiftCode::GetAllPackName");
auto result = GiftCode_GetAllPackName();
```
 - C#
```csharp
// 获取所有礼包的礼包名（返回json字符串数组） 返回值类型：string
var GiftCode_GetAllPackName = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "GiftCode::GetAllPackName");
var result = GiftCode_GetAllPackName();
```
 - Visual Basic .NET
```vb
' 获取所有礼包的礼包名（返回json字符串数组） 返回值类型：string
Dim GiftCode_GetAllPackName = RemoteCallAPI.ImportAs(Of Func(Of String))("PFLP", "GiftCode::GetAllPackName")
Dim result = GiftCode_GetAllPackName()
```
 - F#
```fsharp
// 获取所有礼包的礼包名（返回json字符串数组） 返回值类型：string
let GiftCode_GetAllPackName = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "GiftCode::GetAllPackName")
GiftCode_GetAllPackName()
	|>ignore
```

---
## GiftCode::GetAvailableCode
### 获取指定礼包的所有可用的兑换码（返回json字符串数组）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>packName</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定礼包的所有可用的兑换码（返回json字符串数组） 返回值类型：string */
const GiftCode_GetAvailableCode = ll.import("PFLP", "GiftCode::GetAvailableCode");
let result = GiftCode_GetAvailableCode(packName);
```
 - C++
```cpp
// 获取指定礼包的所有可用的兑换码（返回json字符串数组） 返回值类型：string
auto GiftCode_GetAvailableCode = RemoteCall::importAs<std::string(std::string const& packName)>("PFLP", "GiftCode::GetAvailableCode");
auto result = GiftCode_GetAvailableCode(packName);
```
 - C#
```csharp
// 获取指定礼包的所有可用的兑换码（返回json字符串数组） 返回值类型：string
var GiftCode_GetAvailableCode = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "GiftCode::GetAvailableCode");
var result = GiftCode_GetAvailableCode(packName);
```
 - Visual Basic .NET
```vb
' 获取指定礼包的所有可用的兑换码（返回json字符串数组） 返回值类型：string
Dim GiftCode_GetAvailableCode = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "GiftCode::GetAvailableCode")
Dim result = GiftCode_GetAvailableCode(packName)
```
 - F#
```fsharp
// 获取指定礼包的所有可用的兑换码（返回json字符串数组） 返回值类型：string
let GiftCode_GetAvailableCode = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "GiftCode::GetAvailableCode")
packName
	|>GiftCode_GetAvailableCode.Invoke
	|>ignore
```

---
## GiftCode::AddCode
### 给指定礼包增加兑换码
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>packName</td><td>string</td></tr>
<tr><td>code</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 给指定礼包增加兑换码 返回值类型：bool */
const GiftCode_AddCode = ll.import("PFLP", "GiftCode::AddCode");
let result = GiftCode_AddCode(packName,code);
```
 - C++
```cpp
// 给指定礼包增加兑换码 返回值类型：bool
auto GiftCode_AddCode = RemoteCall::importAs<bool(std::string const& packName,std::string const& code)>("PFLP", "GiftCode::AddCode");
auto result = GiftCode_AddCode(packName,code);
```
 - C#
```csharp
// 给指定礼包增加兑换码 返回值类型：bool
var GiftCode_AddCode = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "GiftCode::AddCode");
var result = GiftCode_AddCode(packName,code);
```
 - Visual Basic .NET
```vb
' 给指定礼包增加兑换码 返回值类型：bool
Dim GiftCode_AddCode = RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "GiftCode::AddCode")
Dim result = GiftCode_AddCode(packName,code)
```
 - F#
```fsharp
// 给指定礼包增加兑换码 返回值类型：bool
let GiftCode_AddCode = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "GiftCode::AddCode")
(packName,code)
	|>GiftCode_AddCode.Invoke
	|>ignore
```

---
## GiftCode::RemoveCode
### 删除指定礼包的指定兑换码
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>packName</td><td>string</td></tr>
<tr><td>code</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 删除指定礼包的指定兑换码 返回值类型：bool */
const GiftCode_RemoveCode = ll.import("PFLP", "GiftCode::RemoveCode");
let result = GiftCode_RemoveCode(packName,code);
```
 - C++
```cpp
// 删除指定礼包的指定兑换码 返回值类型：bool
auto GiftCode_RemoveCode = RemoteCall::importAs<bool(std::string const& packName,std::string const& code)>("PFLP", "GiftCode::RemoveCode");
auto result = GiftCode_RemoveCode(packName,code);
```
 - C#
```csharp
// 删除指定礼包的指定兑换码 返回值类型：bool
var GiftCode_RemoveCode = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "GiftCode::RemoveCode");
var result = GiftCode_RemoveCode(packName,code);
```
 - Visual Basic .NET
```vb
' 删除指定礼包的指定兑换码 返回值类型：bool
Dim GiftCode_RemoveCode = RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "GiftCode::RemoveCode")
Dim result = GiftCode_RemoveCode(packName,code)
```
 - F#
```fsharp
// 删除指定礼包的指定兑换码 返回值类型：bool
let GiftCode_RemoveCode = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "GiftCode::RemoveCode")
(packName,code)
	|>GiftCode_RemoveCode.Invoke
	|>ignore
```

---
## GiftCode::ClearCode
### 删除指定礼包的所有可用的兑换码（返回json字符串数组）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>packName</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 删除指定礼包的所有可用的兑换码（返回json字符串数组） */
const GiftCode_ClearCode = ll.import("PFLP", "GiftCode::ClearCode");
GiftCode_ClearCode(packName);
```
 - C++
```cpp
// 删除指定礼包的所有可用的兑换码（返回json字符串数组）
auto GiftCode_ClearCode = RemoteCall::importAs<void(std::string const& packName)>("PFLP", "GiftCode::ClearCode");
GiftCode_ClearCode(packName);
```
 - C#
```csharp
// 删除指定礼包的所有可用的兑换码（返回json字符串数组）
var GiftCode_ClearCode = RemoteCallAPI.ImportAs<Action<string>>("PFLP", "GiftCode::ClearCode");
GiftCode_ClearCode(packName);
```
 - Visual Basic .NET
```vb
' 删除指定礼包的所有可用的兑换码（返回json字符串数组）
Dim GiftCode_ClearCode = RemoteCallAPI.ImportAs(Of Action(Of String))("PFLP", "GiftCode::ClearCode")
GiftCode_ClearCode(packName)
```
 - F#
```fsharp
// 删除指定礼包的所有可用的兑换码（返回json字符串数组）
let GiftCode_ClearCode = RemoteCallAPI.ImportAs<Action<string>>("PFLP", "GiftCode::ClearCode")
packName
	|>GiftCode_ClearCode.Invoke
```

