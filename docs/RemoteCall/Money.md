---
title: Money
---

[[toc]]


---
## Money::Get
### 获取玩家(指定玩家Xuid)金钱
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：long;</td></tr></table>

 - JavaScript
```js
/** 获取玩家(指定玩家Xuid)金钱 返回值类型：long */
const Money_Get = ll.import("PFLP", "Money::Get");
let result = Money_Get(playerXuid);
```
 - C++
```cpp
// 获取玩家(指定玩家Xuid)金钱 返回值类型：long
auto Money_Get = RemoteCall::importAs<long long(std::string const& playerXuid)>("PFLP", "Money::Get");
auto result = Money_Get(playerXuid);
```
 - C#
```csharp
// 获取玩家(指定玩家Xuid)金钱 返回值类型：long
var Money_Get = RemoteCallAPI.ImportAs<Func<string,long>>("PFLP", "Money::Get");
var result = Money_Get(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取玩家(指定玩家Xuid)金钱 返回值类型：long
Dim Money_Get = RemoteCallAPI.ImportAs(Of Func(Of String,Long))("PFLP", "Money::Get")
Dim result = Money_Get(playerXuid)
```
 - F#
```fsharp
// 获取玩家(指定玩家Xuid)金钱 返回值类型：long
let Money_Get = RemoteCallAPI.ImportAs<Func<string,int64>>("PFLP", "Money::Get")
playerXuid
	|>Money_Get.Invoke
	|>ignore
```

---
## Money::Add
### 给玩家(指定玩家Xuid)加钱
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>count</td><td>long</td></tr>
<tr><td>info</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 给玩家(指定玩家Xuid)加钱 */
const Money_Add = ll.import("PFLP", "Money::Add");
Money_Add(playerXuid,count,info);
```
 - C++
```cpp
// 给玩家(指定玩家Xuid)加钱
auto Money_Add = RemoteCall::importAs<void(std::string const& playerXuid,long long const& count,std::string const& info)>("PFLP", "Money::Add");
Money_Add(playerXuid,count,info);
```
 - C#
```csharp
// 给玩家(指定玩家Xuid)加钱
var Money_Add = RemoteCallAPI.ImportAs<Action<string,long,string>>("PFLP", "Money::Add");
Money_Add(playerXuid,count,info);
```
 - Visual Basic .NET
```vb
' 给玩家(指定玩家Xuid)加钱
Dim Money_Add = RemoteCallAPI.ImportAs(Of Action(Of String,Long,String))("PFLP", "Money::Add")
Money_Add(playerXuid,count,info)
```
 - F#
```fsharp
// 给玩家(指定玩家Xuid)加钱
let Money_Add = RemoteCallAPI.ImportAs<Action<string,int64,string>>("PFLP", "Money::Add")
(playerXuid,count,info)
	|>Money_Add.Invoke
```

---
## Money::Remove
### 给玩家(指定玩家Xuid)减钱
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>count</td><td>long</td></tr>
<tr><td>info</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 给玩家(指定玩家Xuid)减钱 */
const Money_Remove = ll.import("PFLP", "Money::Remove");
Money_Remove(playerXuid,count,info);
```
 - C++
```cpp
// 给玩家(指定玩家Xuid)减钱
auto Money_Remove = RemoteCall::importAs<void(std::string const& playerXuid,long long const& count,std::string const& info)>("PFLP", "Money::Remove");
Money_Remove(playerXuid,count,info);
```
 - C#
```csharp
// 给玩家(指定玩家Xuid)减钱
var Money_Remove = RemoteCallAPI.ImportAs<Action<string,long,string>>("PFLP", "Money::Remove");
Money_Remove(playerXuid,count,info);
```
 - Visual Basic .NET
```vb
' 给玩家(指定玩家Xuid)减钱
Dim Money_Remove = RemoteCallAPI.ImportAs(Of Action(Of String,Long,String))("PFLP", "Money::Remove")
Money_Remove(playerXuid,count,info)
```
 - F#
```fsharp
// 给玩家(指定玩家Xuid)减钱
let Money_Remove = RemoteCallAPI.ImportAs<Action<string,int64,string>>("PFLP", "Money::Remove")
(playerXuid,count,info)
	|>Money_Remove.Invoke
```

