---
title: Format
---

[[toc]]


---
## Format::GetVariableString
### 获取变量
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>name</td><td>string</td></tr>
<tr><td>format</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取变量 返回值类型：string */
const Format_GetVariableString = ll.import("PFLP", "Format::GetVariableString");
let result = Format_GetVariableString(playerXuid,name,format);
```
 - C++
```cpp
// 获取变量 返回值类型：string
auto Format_GetVariableString = RemoteCall::importAs<std::string(std::string const& playerXuid,std::string const& name,std::string const& format)>("PFLP", "Format::GetVariableString");
auto result = Format_GetVariableString(playerXuid,name,format);
```
 - C#
```csharp
// 获取变量 返回值类型：string
var Format_GetVariableString = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetVariableString");
var result = Format_GetVariableString(playerXuid,name,format);
```
 - Visual Basic .NET
```vb
' 获取变量 返回值类型：string
Dim Format_GetVariableString = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String))("PFLP", "Format::GetVariableString")
Dim result = Format_GetVariableString(playerXuid,name,format)
```
 - F#
```fsharp
// 获取变量 返回值类型：string
let Format_GetVariableString = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetVariableString")
(playerXuid,name,format)
	|>Format_GetVariableString.Invoke
	|>ignore
```

---
## Format::GetVariableInt
### 获取变量，但是强制返回int类型
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>name</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：int;</td></tr></table>

 - JavaScript
```js
/** 获取变量，但是强制返回int类型 返回值类型：int */
const Format_GetVariableInt = ll.import("PFLP", "Format::GetVariableInt");
let result = Format_GetVariableInt(playerXuid,name);
```
 - C++
```cpp
// 获取变量，但是强制返回int类型 返回值类型：int
auto Format_GetVariableInt = RemoteCall::importAs<int(std::string const& playerXuid,std::string const& name)>("PFLP", "Format::GetVariableInt");
auto result = Format_GetVariableInt(playerXuid,name);
```
 - C#
```csharp
// 获取变量，但是强制返回int类型 返回值类型：int
var Format_GetVariableInt = RemoteCallAPI.ImportAs<Func<string,string,int>>("PFLP", "Format::GetVariableInt");
var result = Format_GetVariableInt(playerXuid,name);
```
 - Visual Basic .NET
```vb
' 获取变量，但是强制返回int类型 返回值类型：int
Dim Format_GetVariableInt = RemoteCallAPI.ImportAs(Of Func(Of String,String,Integer))("PFLP", "Format::GetVariableInt")
Dim result = Format_GetVariableInt(playerXuid,name)
```
 - F#
```fsharp
// 获取变量，但是强制返回int类型 返回值类型：int
let Format_GetVariableInt = RemoteCallAPI.ImportAs<Func<string,string,int>>("PFLP", "Format::GetVariableInt")
(playerXuid,name)
	|>Format_GetVariableInt.Invoke
	|>ignore
```

---
## Format::FormatRawString
### 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>rawFormat</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string */
const Format_FormatRawString = ll.import("PFLP", "Format::FormatRawString");
let result = Format_FormatRawString(playerXuid,rawFormat);
```
 - C++
```cpp
// 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
auto Format_FormatRawString = RemoteCall::importAs<std::string(std::string const& playerXuid,std::string const& rawFormat)>("PFLP", "Format::FormatRawString");
auto result = Format_FormatRawString(playerXuid,rawFormat);
```
 - C#
```csharp
// 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
var Format_FormatRawString = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::FormatRawString");
var result = Format_FormatRawString(playerXuid,rawFormat);
```
 - Visual Basic .NET
```vb
' 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
Dim Format_FormatRawString = RemoteCallAPI.ImportAs(Of Func(Of String,String,String))("PFLP", "Format::FormatRawString")
Dim result = Format_FormatRawString(playerXuid,rawFormat)
```
 - F#
```fsharp
// 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
let Format_FormatRawString = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::FormatRawString")
(playerXuid,rawFormat)
	|>Format_FormatRawString.Invoke
	|>ignore
```

---
## Format::DefineFormat
### 定义格式化内容（返回true为创建成功，false为覆盖）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>id</td><td>string</td></tr>
<tr><td>rawFormat</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool */
const Format_DefineFormat = ll.import("PFLP", "Format::DefineFormat");
let result = Format_DefineFormat(id,rawFormat);
```
 - C++
```cpp
// 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
auto Format_DefineFormat = RemoteCall::importAs<bool(std::string const& id,std::string const& rawFormat)>("PFLP", "Format::DefineFormat");
auto result = Format_DefineFormat(id,rawFormat);
```
 - C#
```csharp
// 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
var Format_DefineFormat = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Format::DefineFormat");
var result = Format_DefineFormat(id,rawFormat);
```
 - Visual Basic .NET
```vb
' 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
Dim Format_DefineFormat = RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "Format::DefineFormat")
Dim result = Format_DefineFormat(id,rawFormat)
```
 - F#
```fsharp
// 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
let Format_DefineFormat = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Format::DefineFormat")
(id,rawFormat)
	|>Format_DefineFormat.Invoke
	|>ignore
```

---
## Format::RemoveFormat
### 移除格式化定义（返回true为存在并移除）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>id</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 移除格式化定义（返回true为存在并移除） 返回值类型：bool */
const Format_RemoveFormat = ll.import("PFLP", "Format::RemoveFormat");
let result = Format_RemoveFormat(id);
```
 - C++
```cpp
// 移除格式化定义（返回true为存在并移除） 返回值类型：bool
auto Format_RemoveFormat = RemoteCall::importAs<bool(std::string const& id)>("PFLP", "Format::RemoveFormat");
auto result = Format_RemoveFormat(id);
```
 - C#
```csharp
// 移除格式化定义（返回true为存在并移除） 返回值类型：bool
var Format_RemoveFormat = RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "Format::RemoveFormat");
var result = Format_RemoveFormat(id);
```
 - Visual Basic .NET
```vb
' 移除格式化定义（返回true为存在并移除） 返回值类型：bool
Dim Format_RemoveFormat = RemoteCallAPI.ImportAs(Of Func(Of String,Boolean))("PFLP", "Format::RemoveFormat")
Dim result = Format_RemoveFormat(id)
```
 - F#
```fsharp
// 移除格式化定义（返回true为存在并移除） 返回值类型：bool
let Format_RemoveFormat = RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "Format::RemoveFormat")
id
	|>Format_RemoveFormat.Invoke
	|>ignore
```

---
## Format::GetFormatWithPlayer
### 通过已定义的ID获取格式化内容（性能更优）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>id</td><td>string</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>extra</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string */
const Format_GetFormatWithPlayer = ll.import("PFLP", "Format::GetFormatWithPlayer");
let result = Format_GetFormatWithPlayer(id,playerXuid,extra);
```
 - C++
```cpp
// 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
auto Format_GetFormatWithPlayer = RemoteCall::importAs<std::string(std::string const& id,std::string const& playerXuid,std::string const& extra)>("PFLP", "Format::GetFormatWithPlayer");
auto result = Format_GetFormatWithPlayer(id,playerXuid,extra);
```
 - C#
```csharp
// 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
var Format_GetFormatWithPlayer = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetFormatWithPlayer");
var result = Format_GetFormatWithPlayer(id,playerXuid,extra);
```
 - Visual Basic .NET
```vb
' 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
Dim Format_GetFormatWithPlayer = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String))("PFLP", "Format::GetFormatWithPlayer")
Dim result = Format_GetFormatWithPlayer(id,playerXuid,extra)
```
 - F#
```fsharp
// 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
let Format_GetFormatWithPlayer = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetFormatWithPlayer")
(id,playerXuid,extra)
	|>Format_GetFormatWithPlayer.Invoke
	|>ignore
```

---
## Format::GetFormatWithPlayerLang
### 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>id</td><td>string</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>playerLangXuid</td><td>string</td></tr>
<tr><td>extra</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string */
const Format_GetFormatWithPlayerLang = ll.import("PFLP", "Format::GetFormatWithPlayerLang");
let result = Format_GetFormatWithPlayerLang(id,playerXuid,playerLangXuid,extra);
```
 - C++
```cpp
// 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
auto Format_GetFormatWithPlayerLang = RemoteCall::importAs<std::string(std::string const& id,std::string const& playerXuid,std::string const& playerLangXuid,std::string const& extra)>("PFLP", "Format::GetFormatWithPlayerLang");
auto result = Format_GetFormatWithPlayerLang(id,playerXuid,playerLangXuid,extra);
```
 - C#
```csharp
// 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
var Format_GetFormatWithPlayerLang = RemoteCallAPI.ImportAs<Func<string,string,string,string,string>>("PFLP", "Format::GetFormatWithPlayerLang");
var result = Format_GetFormatWithPlayerLang(id,playerXuid,playerLangXuid,extra);
```
 - Visual Basic .NET
```vb
' 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
Dim Format_GetFormatWithPlayerLang = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String,String))("PFLP", "Format::GetFormatWithPlayerLang")
Dim result = Format_GetFormatWithPlayerLang(id,playerXuid,playerLangXuid,extra)
```
 - F#
```fsharp
// 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
let Format_GetFormatWithPlayerLang = RemoteCallAPI.ImportAs<Func<string,string,string,string,string>>("PFLP", "Format::GetFormatWithPlayerLang")
(id,playerXuid,playerLangXuid,extra)
	|>Format_GetFormatWithPlayerLang.Invoke
	|>ignore
```

---
## Format::GetFormat
### 通过已定义的ID获取格式化内容（不包含玩家上下文）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>id</td><td>string</td></tr>
<tr><td>extra</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string */
const Format_GetFormat = ll.import("PFLP", "Format::GetFormat");
let result = Format_GetFormat(id,extra);
```
 - C++
```cpp
// 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
auto Format_GetFormat = RemoteCall::importAs<std::string(std::string const& id,std::string const& extra)>("PFLP", "Format::GetFormat");
auto result = Format_GetFormat(id,extra);
```
 - C#
```csharp
// 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
var Format_GetFormat = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::GetFormat");
var result = Format_GetFormat(id,extra);
```
 - Visual Basic .NET
```vb
' 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
Dim Format_GetFormat = RemoteCallAPI.ImportAs(Of Func(Of String,String,String))("PFLP", "Format::GetFormat")
Dim result = Format_GetFormat(id,extra)
```
 - F#
```fsharp
// 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
let Format_GetFormat = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::GetFormat")
(id,extra)
	|>Format_GetFormat.Invoke
	|>ignore
```

