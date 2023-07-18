---
title: Tp
---

[[toc]]


---
## Tp::StartTeleport
### 延迟传送
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimension</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：int;</td></tr></table>

 - JavaScript
```js
/** 延迟传送 返回值类型：int */
const Tp_StartTeleport = ll.import("PFLP", "Tp::StartTeleport");
let result = Tp_StartTeleport(playerXuid,x,y,z,dimension);
```
 - C++
```cpp
// 延迟传送 返回值类型：int
auto Tp_StartTeleport = RemoteCall::importAs<int(std::string const& playerXuid,float const& x,float const& y,float const& z,int const& dimension)>("PFLP", "Tp::StartTeleport");
auto result = Tp_StartTeleport(playerXuid,x,y,z,dimension);
```
 - C#
```csharp
// 延迟传送 返回值类型：int
var Tp_StartTeleport = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Tp::StartTeleport");
var result = Tp_StartTeleport(playerXuid,x,y,z,dimension);
```
 - Visual Basic .NET
```vb
' 延迟传送 返回值类型：int
Dim Tp_StartTeleport = RemoteCallAPI.ImportAs(Of Func(Of String,Single,Single,Single,Integer,Integer))("PFLP", "Tp::StartTeleport")
Dim result = Tp_StartTeleport(playerXuid,x,y,z,dimension)
```
 - F#
```fsharp
// 延迟传送 返回值类型：int
let Tp_StartTeleport = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Tp::StartTeleport")
(playerXuid,x,y,z,dimension)
	|>Tp_StartTeleport.Invoke
	|>ignore
```

