---
title: Statistics
---

[[toc]]


---
## Statistics::GetPlayerStatistics
### 获取指定玩家的统计数据（JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定玩家的统计数据（JSON字符串） 返回值类型：string */
const Statistics_GetPlayerStatistics = ll.import("PFLP", "Statistics::GetPlayerStatistics");
let result = Statistics_GetPlayerStatistics(playerXuid);
```
 - C++
```cpp
// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
auto Statistics_GetPlayerStatistics = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Statistics::GetPlayerStatistics");
auto result = Statistics_GetPlayerStatistics(playerXuid);
```
 - C#
```csharp
// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
var Statistics_GetPlayerStatistics = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Statistics::GetPlayerStatistics");
var result = Statistics_GetPlayerStatistics(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
Dim Statistics_GetPlayerStatistics = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Statistics::GetPlayerStatistics")
Dim result = Statistics_GetPlayerStatistics(playerXuid)
```
 - F#
```fsharp
// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
let Statistics_GetPlayerStatistics = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Statistics::GetPlayerStatistics")
playerXuid
	|>Statistics_GetPlayerStatistics.Invoke
	|>ignore
```

