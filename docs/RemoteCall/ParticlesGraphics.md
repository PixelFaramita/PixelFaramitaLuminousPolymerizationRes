---
title: ParticlesGraphics
---

[[toc]]


---
## ParticlesGraphics::DrawBlock
### 给指定方块描框
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>r</td><td>float</td></tr>
<tr><td>g</td><td>float</td></tr>
<tr><td>b</td><td>float</td></tr>
<tr><td>thickness</td><td>float</td></tr>
<tr><td>time</td><td>float</td></tr>
<tr><td>alpha</td><td>float</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 给指定方块描框 */
const ParticlesGraphics_DrawBlock = ll.import("PFLP", "ParticlesGraphics::DrawBlock");
ParticlesGraphics_DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha);
```
 - C++
```cpp
// 给指定方块描框
auto ParticlesGraphics_DrawBlock = RemoteCall::importAs<void(std::string const& playerXuid,int const& x,int const& y,int const& z,float const& r,float const& g,float const& b,float const& thickness,float const& time,float const& alpha)>("PFLP", "ParticlesGraphics::DrawBlock");
ParticlesGraphics_DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha);
```
 - C#
```csharp
// 给指定方块描框
var ParticlesGraphics_DrawBlock = RemoteCallAPI.ImportAs<Action<string,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBlock");
ParticlesGraphics_DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha);
```
 - Visual Basic .NET
```vb
' 给指定方块描框
Dim ParticlesGraphics_DrawBlock = RemoteCallAPI.ImportAs(Of Action(Of String,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single))("PFLP", "ParticlesGraphics::DrawBlock")
ParticlesGraphics_DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha)
```
 - F#
```fsharp
// 给指定方块描框
let ParticlesGraphics_DrawBlock = RemoteCallAPI.ImportAs<Action<string,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBlock")
(playerXuid,x,y,z,r,g,b,thickness,time,alpha)
	|>ParticlesGraphics_DrawBlock.Invoke
```

---
## ParticlesGraphics::DrawBorder
### 给指定区域描框
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>x1</td><td>int</td></tr>
<tr><td>y1</td><td>int</td></tr>
<tr><td>z1</td><td>int</td></tr>
<tr><td>x2</td><td>int</td></tr>
<tr><td>y2</td><td>int</td></tr>
<tr><td>z2</td><td>int</td></tr>
<tr><td>r</td><td>float</td></tr>
<tr><td>g</td><td>float</td></tr>
<tr><td>b</td><td>float</td></tr>
<tr><td>thickness</td><td>float</td></tr>
<tr><td>time</td><td>float</td></tr>
<tr><td>alpha</td><td>float</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 给指定区域描框 */
const ParticlesGraphics_DrawBorder = ll.import("PFLP", "ParticlesGraphics::DrawBorder");
ParticlesGraphics_DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha);
```
 - C++
```cpp
// 给指定区域描框
auto ParticlesGraphics_DrawBorder = RemoteCall::importAs<void(std::string const& playerXuid,int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,float const& r,float const& g,float const& b,float const& thickness,float const& time,float const& alpha)>("PFLP", "ParticlesGraphics::DrawBorder");
ParticlesGraphics_DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha);
```
 - C#
```csharp
// 给指定区域描框
var ParticlesGraphics_DrawBorder = RemoteCallAPI.ImportAs<Action<string,int,int,int,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBorder");
ParticlesGraphics_DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha);
```
 - Visual Basic .NET
```vb
' 给指定区域描框
Dim ParticlesGraphics_DrawBorder = RemoteCallAPI.ImportAs(Of Action(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single))("PFLP", "ParticlesGraphics::DrawBorder")
ParticlesGraphics_DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha)
```
 - F#
```fsharp
// 给指定区域描框
let ParticlesGraphics_DrawBorder = RemoteCallAPI.ImportAs<Action<string,int,int,int,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBorder")
(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha)
	|>ParticlesGraphics_DrawBorder.Invoke
```

