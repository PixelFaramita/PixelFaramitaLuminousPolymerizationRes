---
title: Internal
---

[[toc]]


---
## Internal::CheatPunish
### 作弊反馈（LLAntiCheat用）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>PunishLevel</td><td>int</td></tr>
<tr><td>PunishReason</td><td>int</td></tr>
<tr><td>playerXuid</td><td>Player</td></tr>
<tr><td>CheatCount</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 作弊反馈（LLAntiCheat用） 返回值类型：bool */
const Internal_CheatPunish = ll.import("PFLP", "Internal::CheatPunish");
let result = Internal_CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount);
```
 - C++
```cpp
// 作弊反馈（LLAntiCheat用） 返回值类型：bool
auto Internal_CheatPunish = RemoteCall::importAs<bool(int const& PunishLevel,int const& PunishReason,Player& const& playerXuid,int const& CheatCount)>("PFLP", "Internal::CheatPunish");
auto result = Internal_CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount);
```
 - C#
```csharp
// 作弊反馈（LLAntiCheat用） 返回值类型：bool
var Internal_CheatPunish = RemoteCallAPI.ImportAs<bool,int,int,Player,int>("PFLP", "Internal::CheatPunish");
var result = Internal_CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount);
```
 - Visual Basic .NET
```vb
' 作弊反馈（LLAntiCheat用） 返回值类型：bool
Dim Internal_CheatPunish = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,IntPtr,Integer)("PFLP", "Internal::CheatPunish")
Dim result = Internal_CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount)
```
 - F#
```fsharp
// 作弊反馈（LLAntiCheat用） 返回值类型：bool
let Internal_CheatPunish = RemoteCallAPI.ImportAs<bool,int,int,nativeint,int>("PFLP", "Internal::CheatPunish")
(PunishLevel,PunishReason,playerXuid,CheatCount)
	|>Internal_CheatPunish.Invoke
	|>ignore
```

