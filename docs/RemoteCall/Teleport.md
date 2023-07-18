---
title: Teleport
---

[[toc]]


---
## Teleport::StartNew
### 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：int;</td></tr></table>

 - JavaScript
```js
/** 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送 返回值类型：int */
const Teleport_StartNew = ll.import("PFLP", "Teleport::StartNew");
let result = Teleport_StartNew(playerXuid,x,y,z,dimensionId);
```
 - C++
```cpp
// 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送 返回值类型：int
auto Teleport_StartNew = RemoteCall::importAs<int(std::string const& playerXuid,float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Teleport::StartNew");
auto result = Teleport_StartNew(playerXuid,x,y,z,dimensionId);
```
 - C#
```csharp
// 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送 返回值类型：int
var Teleport_StartNew = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Teleport::StartNew");
var result = Teleport_StartNew(playerXuid,x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送 返回值类型：int
Dim Teleport_StartNew = RemoteCallAPI.ImportAs(Of Func(Of String,Single,Single,Single,Integer,Integer))("PFLP", "Teleport::StartNew")
Dim result = Teleport_StartNew(playerXuid,x,y,z,dimensionId)
```
 - F#
```fsharp
// 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送 返回值类型：int
let Teleport_StartNew = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Teleport::StartNew")
(playerXuid,x,y,z,dimensionId)
	|>Teleport_StartNew.Invoke
	|>ignore
```

---
## Teleport::GetTpaState
### 获取指定玩家的Tpa状态（JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string */
const Teleport_GetTpaState = ll.import("PFLP", "Teleport::GetTpaState");
let result = Teleport_GetTpaState(playerXuid);
```
 - C++
```cpp
// 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string
auto Teleport_GetTpaState = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Teleport::GetTpaState");
auto result = Teleport_GetTpaState(playerXuid);
```
 - C#
```csharp
// 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string
var Teleport_GetTpaState = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetTpaState");
var result = Teleport_GetTpaState(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string
Dim Teleport_GetTpaState = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Teleport::GetTpaState")
Dim result = Teleport_GetTpaState(playerXuid)
```
 - F#
```fsharp
// 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string
let Teleport_GetTpaState = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetTpaState")
playerXuid
	|>Teleport_GetTpaState.Invoke
	|>ignore
```

---
## Teleport::GetHome
### 获取指定玩家的Home（JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定玩家的Home（JSON字符串） 返回值类型：string */
const Teleport_GetHome = ll.import("PFLP", "Teleport::GetHome");
let result = Teleport_GetHome(playerXuid);
```
 - C++
```cpp
// 获取指定玩家的Home（JSON字符串） 返回值类型：string
auto Teleport_GetHome = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Teleport::GetHome");
auto result = Teleport_GetHome(playerXuid);
```
 - C#
```csharp
// 获取指定玩家的Home（JSON字符串） 返回值类型：string
var Teleport_GetHome = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetHome");
var result = Teleport_GetHome(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取指定玩家的Home（JSON字符串） 返回值类型：string
Dim Teleport_GetHome = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Teleport::GetHome")
Dim result = Teleport_GetHome(playerXuid)
```
 - F#
```fsharp
// 获取指定玩家的Home（JSON字符串） 返回值类型：string
let Teleport_GetHome = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetHome")
playerXuid
	|>Teleport_GetHome.Invoke
	|>ignore
```

---
## Teleport::GetWarp
### 获取服务器的全部传送点（JSON字符串）
<table><tr><th>无参数;</th></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取服务器的全部传送点（JSON字符串） 返回值类型：string */
const Teleport_GetWarp = ll.import("PFLP", "Teleport::GetWarp");
let result = Teleport_GetWarp();
```
 - C++
```cpp
// 获取服务器的全部传送点（JSON字符串） 返回值类型：string
auto Teleport_GetWarp = RemoteCall::importAs<std::string()>("PFLP", "Teleport::GetWarp");
auto result = Teleport_GetWarp();
```
 - C#
```csharp
// 获取服务器的全部传送点（JSON字符串） 返回值类型：string
var Teleport_GetWarp = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Teleport::GetWarp");
var result = Teleport_GetWarp();
```
 - Visual Basic .NET
```vb
' 获取服务器的全部传送点（JSON字符串） 返回值类型：string
Dim Teleport_GetWarp = RemoteCallAPI.ImportAs(Of Func(Of String))("PFLP", "Teleport::GetWarp")
Dim result = Teleport_GetWarp()
```
 - F#
```fsharp
// 获取服务器的全部传送点（JSON字符串） 返回值类型：string
let Teleport_GetWarp = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Teleport::GetWarp")
Teleport_GetWarp()
	|>ignore
```

