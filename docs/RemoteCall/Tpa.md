---
title: Tpa
---

[[toc]]


---
## Tpa::GetTemp
### 获取指定玩家的Tpa缓存（JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string */
const Tpa_GetTemp = ll.import("PFLP", "Tpa::GetTemp");
let result = Tpa_GetTemp(playerXuid);
```
 - C++
```cpp
// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
auto Tpa_GetTemp = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Tpa::GetTemp");
auto result = Tpa_GetTemp(playerXuid);
```
 - C#
```csharp
// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
var Tpa_GetTemp = RemoteCallAPI.ImportAs<string,string>("PFLP", "Tpa::GetTemp");
var result = Tpa_GetTemp(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
Dim Tpa_GetTemp = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "Tpa::GetTemp")
Dim result = Tpa_GetTemp(playerXuid)
```
 - F#
```fsharp
// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
let Tpa_GetTemp = RemoteCallAPI.ImportAs<string,string>("PFLP", "Tpa::GetTemp")
playerXuid
	|>Tpa_GetTemp.Invoke
	|>ignore
```

