---
title: ChatEx
---

[[toc]]


---
## ChatEx::SetNickName
### 设置玩家昵称
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>nickName</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 设置玩家昵称 */
const ChatEx_SetNickName = ll.import("PFLP", "ChatEx::SetNickName");
ChatEx_SetNickName(playerXuid,nickName);
```
 - C++
```cpp
// 设置玩家昵称
auto ChatEx_SetNickName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& nickName)>("PFLP", "ChatEx::SetNickName");
ChatEx_SetNickName(playerXuid,nickName);
```
 - C#
```csharp
// 设置玩家昵称
var ChatEx_SetNickName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName");
ChatEx_SetNickName(playerXuid,nickName);
```
 - Visual Basic .NET
```vb
' 设置玩家昵称
Dim ChatEx_SetNickName = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetNickName")
ChatEx_SetNickName(playerXuid,nickName)
```
 - F#
```fsharp
// 设置玩家昵称
let ChatEx_SetNickName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName")
(playerXuid,nickName)
	|>ChatEx_SetNickName.Invoke
```

---
## ChatEx::SetFakeName
### 设置玩家聊天时的名字
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>fakeName</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 设置玩家聊天时的名字 */
const ChatEx_SetFakeName = ll.import("PFLP", "ChatEx::SetFakeName");
ChatEx_SetFakeName(playerXuid,fakeName);
```
 - C++
```cpp
// 设置玩家聊天时的名字
auto ChatEx_SetFakeName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& fakeName)>("PFLP", "ChatEx::SetFakeName");
ChatEx_SetFakeName(playerXuid,fakeName);
```
 - C#
```csharp
// 设置玩家聊天时的名字
var ChatEx_SetFakeName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName");
ChatEx_SetFakeName(playerXuid,fakeName);
```
 - Visual Basic .NET
```vb
' 设置玩家聊天时的名字
Dim ChatEx_SetFakeName = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetFakeName")
ChatEx_SetFakeName(playerXuid,fakeName)
```
 - F#
```fsharp
// 设置玩家聊天时的名字
let ChatEx_SetFakeName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName")
(playerXuid,fakeName)
	|>ChatEx_SetFakeName.Invoke
```

---
## ChatEx::SetEnd
### 设置玩家聊天消息后缀
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>endStr</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 设置玩家聊天消息后缀 */
const ChatEx_SetEnd = ll.import("PFLP", "ChatEx::SetEnd");
ChatEx_SetEnd(playerXuid,endStr);
```
 - C++
```cpp
// 设置玩家聊天消息后缀
auto ChatEx_SetEnd = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& endStr)>("PFLP", "ChatEx::SetEnd");
ChatEx_SetEnd(playerXuid,endStr);
```
 - C#
```csharp
// 设置玩家聊天消息后缀
var ChatEx_SetEnd = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd");
ChatEx_SetEnd(playerXuid,endStr);
```
 - Visual Basic .NET
```vb
' 设置玩家聊天消息后缀
Dim ChatEx_SetEnd = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetEnd")
ChatEx_SetEnd(playerXuid,endStr)
```
 - F#
```fsharp
// 设置玩家聊天消息后缀
let ChatEx_SetEnd = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd")
(playerXuid,endStr)
	|>ChatEx_SetEnd.Invoke
```

---
## ChatEx::SetStart
### 设置玩家聊天消息前缀
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>startStr</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 设置玩家聊天消息前缀 */
const ChatEx_SetStart = ll.import("PFLP", "ChatEx::SetStart");
ChatEx_SetStart(playerXuid,startStr);
```
 - C++
```cpp
// 设置玩家聊天消息前缀
auto ChatEx_SetStart = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& startStr)>("PFLP", "ChatEx::SetStart");
ChatEx_SetStart(playerXuid,startStr);
```
 - C#
```csharp
// 设置玩家聊天消息前缀
var ChatEx_SetStart = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart");
ChatEx_SetStart(playerXuid,startStr);
```
 - Visual Basic .NET
```vb
' 设置玩家聊天消息前缀
Dim ChatEx_SetStart = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetStart")
ChatEx_SetStart(playerXuid,startStr)
```
 - F#
```fsharp
// 设置玩家聊天消息前缀
let ChatEx_SetStart = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart")
(playerXuid,startStr)
	|>ChatEx_SetStart.Invoke
```

---
## ChatEx::GetNickName
### 获取玩家昵称
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取玩家昵称 返回值类型：string */
const ChatEx_GetNickName = ll.import("PFLP", "ChatEx::GetNickName");
let result = ChatEx_GetNickName(playerXuid);
```
 - C++
```cpp
// 获取玩家昵称 返回值类型：string
auto ChatEx_GetNickName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetNickName");
auto result = ChatEx_GetNickName(playerXuid);
```
 - C#
```csharp
// 获取玩家昵称 返回值类型：string
var ChatEx_GetNickName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName");
var result = ChatEx_GetNickName(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取玩家昵称 返回值类型：string
Dim ChatEx_GetNickName = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetNickName")
Dim result = ChatEx_GetNickName(playerXuid)
```
 - F#
```fsharp
// 获取玩家昵称 返回值类型：string
let ChatEx_GetNickName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName")
playerXuid
	|>ChatEx_GetNickName.Invoke
	|>ignore
```

---
## ChatEx::GetFakeName
### 获取玩家聊天时的名字
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取玩家聊天时的名字 返回值类型：string */
const ChatEx_GetFakeName = ll.import("PFLP", "ChatEx::GetFakeName");
let result = ChatEx_GetFakeName(playerXuid);
```
 - C++
```cpp
// 获取玩家聊天时的名字 返回值类型：string
auto ChatEx_GetFakeName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetFakeName");
auto result = ChatEx_GetFakeName(playerXuid);
```
 - C#
```csharp
// 获取玩家聊天时的名字 返回值类型：string
var ChatEx_GetFakeName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName");
var result = ChatEx_GetFakeName(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取玩家聊天时的名字 返回值类型：string
Dim ChatEx_GetFakeName = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetFakeName")
Dim result = ChatEx_GetFakeName(playerXuid)
```
 - F#
```fsharp
// 获取玩家聊天时的名字 返回值类型：string
let ChatEx_GetFakeName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName")
playerXuid
	|>ChatEx_GetFakeName.Invoke
	|>ignore
```

---
## ChatEx::GetEnd
### 获取玩家聊天消息后缀
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取玩家聊天消息后缀 返回值类型：string */
const ChatEx_GetEnd = ll.import("PFLP", "ChatEx::GetEnd");
let result = ChatEx_GetEnd(playerXuid);
```
 - C++
```cpp
// 获取玩家聊天消息后缀 返回值类型：string
auto ChatEx_GetEnd = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetEnd");
auto result = ChatEx_GetEnd(playerXuid);
```
 - C#
```csharp
// 获取玩家聊天消息后缀 返回值类型：string
var ChatEx_GetEnd = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd");
var result = ChatEx_GetEnd(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取玩家聊天消息后缀 返回值类型：string
Dim ChatEx_GetEnd = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetEnd")
Dim result = ChatEx_GetEnd(playerXuid)
```
 - F#
```fsharp
// 获取玩家聊天消息后缀 返回值类型：string
let ChatEx_GetEnd = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd")
playerXuid
	|>ChatEx_GetEnd.Invoke
	|>ignore
```

---
## ChatEx::GetStart
### 获取玩家聊天消息前缀
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取玩家聊天消息前缀 返回值类型：string */
const ChatEx_GetStart = ll.import("PFLP", "ChatEx::GetStart");
let result = ChatEx_GetStart(playerXuid);
```
 - C++
```cpp
// 获取玩家聊天消息前缀 返回值类型：string
auto ChatEx_GetStart = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetStart");
auto result = ChatEx_GetStart(playerXuid);
```
 - C#
```csharp
// 获取玩家聊天消息前缀 返回值类型：string
var ChatEx_GetStart = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart");
var result = ChatEx_GetStart(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取玩家聊天消息前缀 返回值类型：string
Dim ChatEx_GetStart = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetStart")
Dim result = ChatEx_GetStart(playerXuid)
```
 - F#
```fsharp
// 获取玩家聊天消息前缀 返回值类型：string
let ChatEx_GetStart = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart")
playerXuid
	|>ChatEx_GetStart.Invoke
	|>ignore
```

