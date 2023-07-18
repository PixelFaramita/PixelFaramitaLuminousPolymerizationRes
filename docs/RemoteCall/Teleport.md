---
title: Teleport
---

[[toc]]


---
## Teleport::StartNew
### 延迟传送
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：int;</td></tr></table>

 - JavaScript
```js
/** 延迟传送 返回值类型：int */
const Teleport_StartNew = ll.import("PFLP", "Teleport::StartNew");
let result = Teleport_StartNew(playerXuid,x,y,z,dimensionId);
```
 - C++
```cpp
// 延迟传送 返回值类型：int
auto Teleport_StartNew = RemoteCall::importAs<int(std::string const& playerXuid,float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Teleport::StartNew");
auto result = Teleport_StartNew(playerXuid,x,y,z,dimensionId);
```
 - C#
```csharp
// 延迟传送 返回值类型：int
var Teleport_StartNew = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Teleport::StartNew");
var result = Teleport_StartNew(playerXuid,x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 延迟传送 返回值类型：int
Dim Teleport_StartNew = RemoteCallAPI.ImportAs(Of Func(Of String,Single,Single,Single,Integer,Integer))("PFLP", "Teleport::StartNew")
Dim result = Teleport_StartNew(playerXuid,x,y,z,dimensionId)
```
 - F#
```fsharp
// 延迟传送 返回值类型：int
let Teleport_StartNew = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Teleport::StartNew")
(playerXuid,x,y,z,dimensionId)
	|>Teleport_StartNew.Invoke
	|>ignore
```

