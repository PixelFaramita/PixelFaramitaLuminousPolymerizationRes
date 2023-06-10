---
title: FloatText
---

[[toc]]


---
## FloatText::Add
### 创建浮空字(给玩家发包)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>text</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：int;</td></tr></table>

 - JavaScript
```js
/** 创建浮空字(给玩家发包) 返回值类型：int */
const FloatText_Add = ll.import("PFLP", "FloatText::Add");
let result = FloatText_Add(playerXuid,x,y,z,text);
```
 - C++
```cpp
// 创建浮空字(给玩家发包) 返回值类型：int
auto FloatText_Add = RemoteCall::importAs<int(std::string const& playerXuid,float const& x,float const& y,float const& z,std::string const& text)>("PFLP", "FloatText::Add");
auto result = FloatText_Add(playerXuid,x,y,z,text);
```
 - C#
```csharp
// 创建浮空字(给玩家发包) 返回值类型：int
var FloatText_Add = RemoteCallAPI.ImportAs<Func<string,float,float,float,string,int>>("PFLP", "FloatText::Add");
var result = FloatText_Add(playerXuid,x,y,z,text);
```
 - Visual Basic .NET
```vb
' 创建浮空字(给玩家发包) 返回值类型：int
Dim FloatText_Add = RemoteCallAPI.ImportAs(Of Func(Of String,Single,Single,Single,String,Integer))("PFLP", "FloatText::Add")
Dim result = FloatText_Add(playerXuid,x,y,z,text)
```
 - F#
```fsharp
// 创建浮空字(给玩家发包) 返回值类型：int
let FloatText_Add = RemoteCallAPI.ImportAs<Func<string,float,float,float,string,int>>("PFLP", "FloatText::Add")
(playerXuid,x,y,z,text)
	|>FloatText_Add.Invoke
	|>ignore
```

---
## FloatText::Remove
### 移除浮空字(给玩家发包)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>id</td><td>int</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 移除浮空字(给玩家发包) */
const FloatText_Remove = ll.import("PFLP", "FloatText::Remove");
FloatText_Remove(playerXuid,id);
```
 - C++
```cpp
// 移除浮空字(给玩家发包)
auto FloatText_Remove = RemoteCall::importAs<void(std::string const& playerXuid,int const& id)>("PFLP", "FloatText::Remove");
FloatText_Remove(playerXuid,id);
```
 - C#
```csharp
// 移除浮空字(给玩家发包)
var FloatText_Remove = RemoteCallAPI.ImportAs<Action<string,int>>("PFLP", "FloatText::Remove");
FloatText_Remove(playerXuid,id);
```
 - Visual Basic .NET
```vb
' 移除浮空字(给玩家发包)
Dim FloatText_Remove = RemoteCallAPI.ImportAs(Of Action(Of String,Integer))("PFLP", "FloatText::Remove")
FloatText_Remove(playerXuid,id)
```
 - F#
```fsharp
// 移除浮空字(给玩家发包)
let FloatText_Remove = RemoteCallAPI.ImportAs<Action<string,int>>("PFLP", "FloatText::Remove")
(playerXuid,id)
	|>FloatText_Remove.Invoke
```

