---
title: Lands
---

[[toc]]


---
## Lands::CheckCubeHasLand
### 检查指定立方体区域(float)是否有领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x1</td><td>float</td></tr>
<tr><td>y1</td><td>float</td></tr>
<tr><td>z1</td><td>float</td></tr>
<tr><td>x2</td><td>float</td></tr>
<tr><td>y2</td><td>float</td></tr>
<tr><td>z2</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查指定立方体区域(float)是否有领地 返回值类型：bool */
const Lands_CheckCubeHasLand = ll.import("PFLP", "Lands::CheckCubeHasLand");
let result = Lands_CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C++
```cpp
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
auto Lands_CheckCubeHasLand = RemoteCall::importAs<bool(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::CheckCubeHasLand");
auto result = Lands_CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C#
```csharp
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
var Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int>("PFLP", "Lands::CheckCubeHasLand");
var result = Lands_CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - Visual Basic .NET
```vb
' 检查指定立方体区域(float)是否有领地 返回值类型：bool
Dim Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::CheckCubeHasLand")
Dim result = Lands_CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId)
```
 - F#
```fsharp
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
let Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,float,float,float,int>("PFLP", "Lands::CheckCubeHasLand")
(x1,y1,z1,x2,y2,z2,dimensionId)
	|>Lands_CheckCubeHasLand.Invoke
	|>ignore
```

---
## Lands::CheckCubeHasLandInt
### 检查指定立方体区域(int)是否有领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x1</td><td>int</td></tr>
<tr><td>y1</td><td>int</td></tr>
<tr><td>z1</td><td>int</td></tr>
<tr><td>x2</td><td>int</td></tr>
<tr><td>y2</td><td>int</td></tr>
<tr><td>z2</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查指定立方体区域(int)是否有领地 返回值类型：bool */
const Lands_CheckCubeHasLandInt = ll.import("PFLP", "Lands::CheckCubeHasLandInt");
let result = Lands_CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C++
```cpp
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
auto Lands_CheckCubeHasLandInt = RemoteCall::importAs<bool(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::CheckCubeHasLandInt");
auto result = Lands_CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C#
```csharp
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
var Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int>("PFLP", "Lands::CheckCubeHasLandInt");
var result = Lands_CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - Visual Basic .NET
```vb
' 检查指定立方体区域(int)是否有领地 返回值类型：bool
Dim Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::CheckCubeHasLandInt")
Dim result = Lands_CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId)
```
 - F#
```fsharp
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
let Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int>("PFLP", "Lands::CheckCubeHasLandInt")
(x1,y1,z1,x2,y2,z2,dimensionId)
	|>Lands_CheckCubeHasLandInt.Invoke
	|>ignore
```

---
## Lands::CheckPosHasLand
### 检查指定坐标(float)是否有领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查指定坐标(float)是否有领地 返回值类型：bool */
const Lands_CheckPosHasLand = ll.import("PFLP", "Lands::CheckPosHasLand");
let result = Lands_CheckPosHasLand(x,y,z,dimensionId);
```
 - C++
```cpp
// 检查指定坐标(float)是否有领地 返回值类型：bool
auto Lands_CheckPosHasLand = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::CheckPosHasLand");
auto result = Lands_CheckPosHasLand(x,y,z,dimensionId);
```
 - C#
```csharp
// 检查指定坐标(float)是否有领地 返回值类型：bool
var Lands_CheckPosHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::CheckPosHasLand");
var result = Lands_CheckPosHasLand(x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 检查指定坐标(float)是否有领地 返回值类型：bool
Dim Lands_CheckPosHasLand = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer)("PFLP", "Lands::CheckPosHasLand")
Dim result = Lands_CheckPosHasLand(x,y,z,dimensionId)
```
 - F#
```fsharp
// 检查指定坐标(float)是否有领地 返回值类型：bool
let Lands_CheckPosHasLand = RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::CheckPosHasLand")
(x,y,z,dimensionId)
	|>Lands_CheckPosHasLand.Invoke
	|>ignore
```

---
## Lands::CheckPosHasLandInt
### 检查指定坐标(int)是否有领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查指定坐标(int)是否有领地 返回值类型：bool */
const Lands_CheckPosHasLandInt = ll.import("PFLP", "Lands::CheckPosHasLandInt");
let result = Lands_CheckPosHasLandInt(x,y,z,dimensionId);
```
 - C++
```cpp
// 检查指定坐标(int)是否有领地 返回值类型：bool
auto Lands_CheckPosHasLandInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::CheckPosHasLandInt");
auto result = Lands_CheckPosHasLandInt(x,y,z,dimensionId);
```
 - C#
```csharp
// 检查指定坐标(int)是否有领地 返回值类型：bool
var Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::CheckPosHasLandInt");
var result = Lands_CheckPosHasLandInt(x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 检查指定坐标(int)是否有领地 返回值类型：bool
Dim Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer)("PFLP", "Lands::CheckPosHasLandInt")
Dim result = Lands_CheckPosHasLandInt(x,y,z,dimensionId)
```
 - F#
```fsharp
// 检查指定坐标(int)是否有领地 返回值类型：bool
let Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::CheckPosHasLandInt")
(x,y,z,dimensionId)
	|>Lands_CheckPosHasLandInt.Invoke
	|>ignore
```

---
## Lands::GetLandByCube
### 获取立方体区域(float)领地信息（返回JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x1</td><td>float</td></tr>
<tr><td>y1</td><td>float</td></tr>
<tr><td>z1</td><td>float</td></tr>
<tr><td>x2</td><td>float</td></tr>
<tr><td>y2</td><td>float</td></tr>
<tr><td>z2</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByCube = ll.import("PFLP", "Lands::GetLandByCube");
let result = Lands_GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C++
```cpp
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByCube = RemoteCall::importAs<std::string(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandByCube");
auto result = Lands_GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C#
```csharp
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandByCube");
var result = Lands_GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - Visual Basic .NET
```vb
' 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByCube = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::GetLandByCube")
Dim result = Lands_GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId)
```
 - F#
```fsharp
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandByCube")
(x1,y1,z1,x2,y2,z2,dimensionId)
	|>Lands_GetLandByCube.Invoke
	|>ignore
```

---
## Lands::GetLandByCubeInt
### 获取立方体区域(int)领地信息（返回JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x1</td><td>int</td></tr>
<tr><td>y1</td><td>int</td></tr>
<tr><td>z1</td><td>int</td></tr>
<tr><td>x2</td><td>int</td></tr>
<tr><td>y2</td><td>int</td></tr>
<tr><td>z2</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByCubeInt = ll.import("PFLP", "Lands::GetLandByCubeInt");
let result = Lands_GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C++
```cpp
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByCubeInt = RemoteCall::importAs<std::string(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandByCubeInt");
auto result = Lands_GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C#
```csharp
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandByCubeInt");
var result = Lands_GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - Visual Basic .NET
```vb
' 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandByCubeInt")
Dim result = Lands_GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId)
```
 - F#
```fsharp
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandByCubeInt")
(x1,y1,z1,x2,y2,z2,dimensionId)
	|>Lands_GetLandByCubeInt.Invoke
	|>ignore
```

---
## Lands::GetLandByPos
### 获取指定坐标(float)领地信息（返回JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByPos = ll.import("PFLP", "Lands::GetLandByPos");
let result = Lands_GetLandByPos(x,y,z,dimensionId);
```
 - C++
```cpp
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::GetLandByPos");
auto result = Lands_GetLandByPos(x,y,z,dimensionId);
```
 - C#
```csharp
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandByPos");
var result = Lands_GetLandByPos(x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByPos = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer)("PFLP", "Lands::GetLandByPos")
Dim result = Lands_GetLandByPos(x,y,z,dimensionId)
```
 - F#
```fsharp
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandByPos")
(x,y,z,dimensionId)
	|>Lands_GetLandByPos.Invoke
	|>ignore
```

---
## Lands::GetLandByPosInt
### 获取指定坐标(int)领地信息（返回JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByPosInt = ll.import("PFLP", "Lands::GetLandByPosInt");
let result = Lands_GetLandByPosInt(x,y,z,dimensionId);
```
 - C++
```cpp
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::GetLandByPosInt");
auto result = Lands_GetLandByPosInt(x,y,z,dimensionId);
```
 - C#
```csharp
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandByPosInt");
var result = Lands_GetLandByPosInt(x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByPosInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandByPosInt")
Dim result = Lands_GetLandByPosInt(x,y,z,dimensionId)
```
 - F#
```fsharp
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandByPosInt")
(x,y,z,dimensionId)
	|>Lands_GetLandByPosInt.Invoke
	|>ignore
```

---
## Lands::GetLandInfoByCube
### 获取立方体区域(float)领地数据源详细信息（返回JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x1</td><td>float</td></tr>
<tr><td>y1</td><td>float</td></tr>
<tr><td>z1</td><td>float</td></tr>
<tr><td>x2</td><td>float</td></tr>
<tr><td>y2</td><td>float</td></tr>
<tr><td>z2</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByCube = ll.import("PFLP", "Lands::GetLandInfoByCube");
let result = Lands_GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C++
```cpp
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByCube = RemoteCall::importAs<std::string(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByCube");
auto result = Lands_GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C#
```csharp
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandInfoByCube");
var result = Lands_GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - Visual Basic .NET
```vb
' 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Single,Single,Single,Integer)("PFLP", "Lands::GetLandInfoByCube")
Dim result = Lands_GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId)
```
 - F#
```fsharp
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs<string,float,float,float,float,float,float,int>("PFLP", "Lands::GetLandInfoByCube")
(x1,y1,z1,x2,y2,z2,dimensionId)
	|>Lands_GetLandInfoByCube.Invoke
	|>ignore
```

---
## Lands::GetLandInfoByCubeInt
### 获取立方体区域(int)领地数据源详细信息（返回JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x1</td><td>int</td></tr>
<tr><td>y1</td><td>int</td></tr>
<tr><td>z1</td><td>int</td></tr>
<tr><td>x2</td><td>int</td></tr>
<tr><td>y2</td><td>int</td></tr>
<tr><td>z2</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByCubeInt = ll.import("PFLP", "Lands::GetLandInfoByCubeInt");
let result = Lands_GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C++
```cpp
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByCubeInt = RemoteCall::importAs<std::string(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByCubeInt");
auto result = Lands_GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - C#
```csharp
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandInfoByCubeInt");
var result = Lands_GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId);
```
 - Visual Basic .NET
```vb
' 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandInfoByCubeInt")
Dim result = Lands_GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId)
```
 - F#
```fsharp
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs<string,int,int,int,int,int,int,int>("PFLP", "Lands::GetLandInfoByCubeInt")
(x1,y1,z1,x2,y2,z2,dimensionId)
	|>Lands_GetLandInfoByCubeInt.Invoke
	|>ignore
```

---
## Lands::GetLandInfoByPos
### 获取指定坐标(float)领地数据源详细信息（返回JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByPos = ll.import("PFLP", "Lands::GetLandInfoByPos");
let result = Lands_GetLandInfoByPos(x,y,z,dimensionId);
```
 - C++
```cpp
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByPos");
auto result = Lands_GetLandInfoByPos(x,y,z,dimensionId);
```
 - C#
```csharp
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandInfoByPos");
var result = Lands_GetLandInfoByPos(x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer)("PFLP", "Lands::GetLandInfoByPos")
Dim result = Lands_GetLandInfoByPos(x,y,z,dimensionId)
```
 - F#
```fsharp
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs<string,float,float,float,int>("PFLP", "Lands::GetLandInfoByPos")
(x,y,z,dimensionId)
	|>Lands_GetLandInfoByPos.Invoke
	|>ignore
```

---
## Lands::GetLandInfoByPosInt
### 获取指定坐标(int)领地数据源详细信息（返回JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByPosInt = ll.import("PFLP", "Lands::GetLandInfoByPosInt");
let result = Lands_GetLandInfoByPosInt(x,y,z,dimensionId);
```
 - C++
```cpp
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByPosInt");
auto result = Lands_GetLandInfoByPosInt(x,y,z,dimensionId);
```
 - C#
```csharp
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandInfoByPosInt");
var result = Lands_GetLandInfoByPosInt(x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer)("PFLP", "Lands::GetLandInfoByPosInt")
Dim result = Lands_GetLandInfoByPosInt(x,y,z,dimensionId)
```
 - F#
```fsharp
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int>("PFLP", "Lands::GetLandInfoByPosInt")
(x,y,z,dimensionId)
	|>Lands_GetLandInfoByPosInt.Invoke
	|>ignore
```

---
## Lands::SetLandInfoByPos
### 设置指定坐标(float)领地数据源详细信息（传入JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>landinfo</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
const Lands_SetLandInfoByPos = ll.import("PFLP", "Lands::SetLandInfoByPos");
let result = Lands_SetLandInfoByPos(x,y,z,dimensionId,landinfo);
```
 - C++
```cpp
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
auto Lands_SetLandInfoByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByPos");
auto result = Lands_SetLandInfoByPos(x,y,z,dimensionId,landinfo);
```
 - C#
```csharp
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
var Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByPos");
var result = Lands_SetLandInfoByPos(x,y,z,dimensionId,landinfo);
```
 - Visual Basic .NET
```vb
' 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
Dim Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer,String)("PFLP", "Lands::SetLandInfoByPos")
Dim result = Lands_SetLandInfoByPos(x,y,z,dimensionId,landinfo)
```
 - F#
```fsharp
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
let Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::SetLandInfoByPos")
(x,y,z,dimensionId,landinfo)
	|>Lands_SetLandInfoByPos.Invoke
	|>ignore
```

---
## Lands::SetLandInfoByPosInt
### 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>landinfo</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
const Lands_SetLandInfoByPosInt = ll.import("PFLP", "Lands::SetLandInfoByPosInt");
let result = Lands_SetLandInfoByPosInt(x,y,z,dimensionId,landinfo);
```
 - C++
```cpp
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
auto Lands_SetLandInfoByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByPosInt");
auto result = Lands_SetLandInfoByPosInt(x,y,z,dimensionId,landinfo);
```
 - C#
```csharp
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
var Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByPosInt");
var result = Lands_SetLandInfoByPosInt(x,y,z,dimensionId,landinfo);
```
 - Visual Basic .NET
```vb
' 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
Dim Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::SetLandInfoByPosInt")
Dim result = Lands_SetLandInfoByPosInt(x,y,z,dimensionId,landinfo)
```
 - F#
```fsharp
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
let Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::SetLandInfoByPosInt")
(x,y,z,dimensionId,landinfo)
	|>Lands_SetLandInfoByPosInt.Invoke
	|>ignore
```

---
## Lands::CreateLand2D
### 新建领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x1</td><td>int</td></tr>
<tr><td>z1</td><td>int</td></tr>
<tr><td>x2</td><td>int</td></tr>
<tr><td>z2</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 新建领地 返回值类型：bool */
const Lands_CreateLand2D = ll.import("PFLP", "Lands::CreateLand2D");
let result = Lands_CreateLand2D(x1,z1,x2,z2,dimensionId,playerXuid);
```
 - C++
```cpp
// 新建领地 返回值类型：bool
auto Lands_CreateLand2D = RemoteCall::importAs<bool(int const& x1,int const& z1,int const& x2,int const& z2,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CreateLand2D");
auto result = Lands_CreateLand2D(x1,z1,x2,z2,dimensionId,playerXuid);
```
 - C#
```csharp
// 新建领地 返回值类型：bool
var Lands_CreateLand2D = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,string>("PFLP", "Lands::CreateLand2D");
var result = Lands_CreateLand2D(x1,z1,x2,z2,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 新建领地 返回值类型：bool
Dim Lands_CreateLand2D = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::CreateLand2D")
Dim result = Lands_CreateLand2D(x1,z1,x2,z2,dimensionId,playerXuid)
```
 - F#
```fsharp
// 新建领地 返回值类型：bool
let Lands_CreateLand2D = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,string>("PFLP", "Lands::CreateLand2D")
(x1,z1,x2,z2,dimensionId,playerXuid)
	|>Lands_CreateLand2D.Invoke
	|>ignore
```

---
## Lands::CreateLand3D
### 新建领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x1</td><td>int</td></tr>
<tr><td>y1</td><td>int</td></tr>
<tr><td>z1</td><td>int</td></tr>
<tr><td>x2</td><td>int</td></tr>
<tr><td>y2</td><td>int</td></tr>
<tr><td>z2</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 新建领地 返回值类型：bool */
const Lands_CreateLand3D = ll.import("PFLP", "Lands::CreateLand3D");
let result = Lands_CreateLand3D(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid);
```
 - C++
```cpp
// 新建领地 返回值类型：bool
auto Lands_CreateLand3D = RemoteCall::importAs<bool(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CreateLand3D");
auto result = Lands_CreateLand3D(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid);
```
 - C#
```csharp
// 新建领地 返回值类型：bool
var Lands_CreateLand3D = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int,string>("PFLP", "Lands::CreateLand3D");
var result = Lands_CreateLand3D(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 新建领地 返回值类型：bool
Dim Lands_CreateLand3D = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::CreateLand3D")
Dim result = Lands_CreateLand3D(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid)
```
 - F#
```fsharp
// 新建领地 返回值类型：bool
let Lands_CreateLand3D = RemoteCallAPI.ImportAs<bool,int,int,int,int,int,int,int,string>("PFLP", "Lands::CreateLand3D")
(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid)
	|>Lands_CreateLand3D.Invoke
	|>ignore
```

---
## Lands::DeleteLandByPos
### 删除指定坐标(float)的领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 删除指定坐标(float)的领地 返回值类型：bool */
const Lands_DeleteLandByPos = ll.import("PFLP", "Lands::DeleteLandByPos");
let result = Lands_DeleteLandByPos(x,y,z,dimensionId);
```
 - C++
```cpp
// 删除指定坐标(float)的领地 返回值类型：bool
auto Lands_DeleteLandByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::DeleteLandByPos");
auto result = Lands_DeleteLandByPos(x,y,z,dimensionId);
```
 - C#
```csharp
// 删除指定坐标(float)的领地 返回值类型：bool
var Lands_DeleteLandByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::DeleteLandByPos");
var result = Lands_DeleteLandByPos(x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 删除指定坐标(float)的领地 返回值类型：bool
Dim Lands_DeleteLandByPos = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer)("PFLP", "Lands::DeleteLandByPos")
Dim result = Lands_DeleteLandByPos(x,y,z,dimensionId)
```
 - F#
```fsharp
// 删除指定坐标(float)的领地 返回值类型：bool
let Lands_DeleteLandByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int>("PFLP", "Lands::DeleteLandByPos")
(x,y,z,dimensionId)
	|>Lands_DeleteLandByPos.Invoke
	|>ignore
```

---
## Lands::DeleteLandByPosInt
### 删除指定坐标(int)的领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 删除指定坐标(int)的领地 返回值类型：bool */
const Lands_DeleteLandByPosInt = ll.import("PFLP", "Lands::DeleteLandByPosInt");
let result = Lands_DeleteLandByPosInt(x,y,z,dimensionId);
```
 - C++
```cpp
// 删除指定坐标(int)的领地 返回值类型：bool
auto Lands_DeleteLandByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::DeleteLandByPosInt");
auto result = Lands_DeleteLandByPosInt(x,y,z,dimensionId);
```
 - C#
```csharp
// 删除指定坐标(int)的领地 返回值类型：bool
var Lands_DeleteLandByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::DeleteLandByPosInt");
var result = Lands_DeleteLandByPosInt(x,y,z,dimensionId);
```
 - Visual Basic .NET
```vb
' 删除指定坐标(int)的领地 返回值类型：bool
Dim Lands_DeleteLandByPosInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer)("PFLP", "Lands::DeleteLandByPosInt")
Dim result = Lands_DeleteLandByPosInt(x,y,z,dimensionId)
```
 - F#
```fsharp
// 删除指定坐标(int)的领地 返回值类型：bool
let Lands_DeleteLandByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int>("PFLP", "Lands::DeleteLandByPosInt")
(x,y,z,dimensionId)
	|>Lands_DeleteLandByPosInt.Invoke
	|>ignore
```

---
## Lands::GetLandPermissionByPos
### 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string */
const Lands_GetLandPermissionByPos = ll.import("PFLP", "Lands::GetLandPermissionByPos");
let result = Lands_GetLandPermissionByPos(x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
auto Lands_GetLandPermissionByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::GetLandPermissionByPos");
auto result = Lands_GetLandPermissionByPos(x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
var Lands_GetLandPermissionByPos = RemoteCallAPI.ImportAs<string,float,float,float,int,string>("PFLP", "Lands::GetLandPermissionByPos");
var result = Lands_GetLandPermissionByPos(x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
Dim Lands_GetLandPermissionByPos = RemoteCallAPI.ImportAs(Of String,Single,Single,Single,Integer,String)("PFLP", "Lands::GetLandPermissionByPos")
Dim result = Lands_GetLandPermissionByPos(x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
let Lands_GetLandPermissionByPos = RemoteCallAPI.ImportAs<string,float,float,float,int,string>("PFLP", "Lands::GetLandPermissionByPos")
(x,y,z,dimensionId,playerXuid)
	|>Lands_GetLandPermissionByPos.Invoke
	|>ignore
```

---
## Lands::GetLandPermissionByPosInt
### 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string */
const Lands_GetLandPermissionByPosInt = ll.import("PFLP", "Lands::GetLandPermissionByPosInt");
let result = Lands_GetLandPermissionByPosInt(x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
auto Lands_GetLandPermissionByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::GetLandPermissionByPosInt");
auto result = Lands_GetLandPermissionByPosInt(x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
var Lands_GetLandPermissionByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int,string>("PFLP", "Lands::GetLandPermissionByPosInt");
var result = Lands_GetLandPermissionByPosInt(x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
Dim Lands_GetLandPermissionByPosInt = RemoteCallAPI.ImportAs(Of String,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::GetLandPermissionByPosInt")
Dim result = Lands_GetLandPermissionByPosInt(x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
let Lands_GetLandPermissionByPosInt = RemoteCallAPI.ImportAs<string,int,int,int,int,string>("PFLP", "Lands::GetLandPermissionByPosInt")
(x,y,z,dimensionId,playerXuid)
	|>Lands_GetLandPermissionByPosInt.Invoke
	|>ignore
```

---
## Lands::CheckLandPermissionByPos
### 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>permissionId</td><td>string</td></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool */
const Lands_CheckLandPermissionByPos = ll.import("PFLP", "Lands::CheckLandPermissionByPos");
let result = Lands_CheckLandPermissionByPos(permissionId,x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
auto Lands_CheckLandPermissionByPos = RemoteCall::importAs<bool(std::string const& permissionId,float const& x,float const& y,float const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckLandPermissionByPos");
auto result = Lands_CheckLandPermissionByPos(permissionId,x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
var Lands_CheckLandPermissionByPos = RemoteCallAPI.ImportAs<bool,string,float,float,float,int,string>("PFLP", "Lands::CheckLandPermissionByPos");
var result = Lands_CheckLandPermissionByPos(permissionId,x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
Dim Lands_CheckLandPermissionByPos = RemoteCallAPI.ImportAs(Of Boolean,String,Single,Single,Single,Integer,String)("PFLP", "Lands::CheckLandPermissionByPos")
Dim result = Lands_CheckLandPermissionByPos(permissionId,x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
let Lands_CheckLandPermissionByPos = RemoteCallAPI.ImportAs<bool,string,float,float,float,int,string>("PFLP", "Lands::CheckLandPermissionByPos")
(permissionId,x,y,z,dimensionId,playerXuid)
	|>Lands_CheckLandPermissionByPos.Invoke
	|>ignore
```

---
## Lands::CheckLandPermissionByPosInt
### 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>permissionId</td><td>string</td></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool */
const Lands_CheckLandPermissionByPosInt = ll.import("PFLP", "Lands::CheckLandPermissionByPosInt");
let result = Lands_CheckLandPermissionByPosInt(permissionId,x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
auto Lands_CheckLandPermissionByPosInt = RemoteCall::importAs<bool(std::string const& permissionId,int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckLandPermissionByPosInt");
auto result = Lands_CheckLandPermissionByPosInt(permissionId,x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
var Lands_CheckLandPermissionByPosInt = RemoteCallAPI.ImportAs<bool,string,int,int,int,int,string>("PFLP", "Lands::CheckLandPermissionByPosInt");
var result = Lands_CheckLandPermissionByPosInt(permissionId,x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
Dim Lands_CheckLandPermissionByPosInt = RemoteCallAPI.ImportAs(Of Boolean,String,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::CheckLandPermissionByPosInt")
Dim result = Lands_CheckLandPermissionByPosInt(permissionId,x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
let Lands_CheckLandPermissionByPosInt = RemoteCallAPI.ImportAs<bool,string,int,int,int,int,string>("PFLP", "Lands::CheckLandPermissionByPosInt")
(permissionId,x,y,z,dimensionId,playerXuid)
	|>Lands_CheckLandPermissionByPosInt.Invoke
	|>ignore
```

---
## Lands::CheckPlayerIsLandOwnerByPos
### 检查玩家是否是指定坐标(float)领地的主人
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool */
const Lands_CheckPlayerIsLandOwnerByPos = ll.import("PFLP", "Lands::CheckPlayerIsLandOwnerByPos");
let result = Lands_CheckPlayerIsLandOwnerByPos(x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
auto Lands_CheckPlayerIsLandOwnerByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckPlayerIsLandOwnerByPos");
auto result = Lands_CheckPlayerIsLandOwnerByPos(x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
var Lands_CheckPlayerIsLandOwnerByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::CheckPlayerIsLandOwnerByPos");
var result = Lands_CheckPlayerIsLandOwnerByPos(x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
Dim Lands_CheckPlayerIsLandOwnerByPos = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer,String)("PFLP", "Lands::CheckPlayerIsLandOwnerByPos")
Dim result = Lands_CheckPlayerIsLandOwnerByPos(x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
let Lands_CheckPlayerIsLandOwnerByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::CheckPlayerIsLandOwnerByPos")
(x,y,z,dimensionId,playerXuid)
	|>Lands_CheckPlayerIsLandOwnerByPos.Invoke
	|>ignore
```

---
## Lands::CheckPlayerIsLandOwnerByPosInt
### 检查玩家是否是指定坐标(int)领地的主人
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool */
const Lands_CheckPlayerIsLandOwnerByPosInt = ll.import("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt");
let result = Lands_CheckPlayerIsLandOwnerByPosInt(x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
auto Lands_CheckPlayerIsLandOwnerByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt");
auto result = Lands_CheckPlayerIsLandOwnerByPosInt(x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
var Lands_CheckPlayerIsLandOwnerByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt");
var result = Lands_CheckPlayerIsLandOwnerByPosInt(x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
Dim Lands_CheckPlayerIsLandOwnerByPosInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt")
Dim result = Lands_CheckPlayerIsLandOwnerByPosInt(x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
let Lands_CheckPlayerIsLandOwnerByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt")
(x,y,z,dimensionId,playerXuid)
	|>Lands_CheckPlayerIsLandOwnerByPosInt.Invoke
	|>ignore
```

---
## Lands::CheckIsLandSharedToPlayerByPos
### 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>float</td></tr>
<tr><td>y</td><td>float</td></tr>
<tr><td>z</td><td>float</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool */
const Lands_CheckIsLandSharedToPlayerByPos = ll.import("PFLP", "Lands::CheckIsLandSharedToPlayerByPos");
let result = Lands_CheckIsLandSharedToPlayerByPos(x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
auto Lands_CheckIsLandSharedToPlayerByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckIsLandSharedToPlayerByPos");
auto result = Lands_CheckIsLandSharedToPlayerByPos(x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
var Lands_CheckIsLandSharedToPlayerByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::CheckIsLandSharedToPlayerByPos");
var result = Lands_CheckIsLandSharedToPlayerByPos(x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
Dim Lands_CheckIsLandSharedToPlayerByPos = RemoteCallAPI.ImportAs(Of Boolean,Single,Single,Single,Integer,String)("PFLP", "Lands::CheckIsLandSharedToPlayerByPos")
Dim result = Lands_CheckIsLandSharedToPlayerByPos(x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
let Lands_CheckIsLandSharedToPlayerByPos = RemoteCallAPI.ImportAs<bool,float,float,float,int,string>("PFLP", "Lands::CheckIsLandSharedToPlayerByPos")
(x,y,z,dimensionId,playerXuid)
	|>Lands_CheckIsLandSharedToPlayerByPos.Invoke
	|>ignore
```

---
## Lands::CheckIsLandSharedToPlayerByPosInt
### 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool */
const Lands_CheckIsLandSharedToPlayerByPosInt = ll.import("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt");
let result = Lands_CheckIsLandSharedToPlayerByPosInt(x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
auto Lands_CheckIsLandSharedToPlayerByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt");
auto result = Lands_CheckIsLandSharedToPlayerByPosInt(x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
var Lands_CheckIsLandSharedToPlayerByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt");
var result = Lands_CheckIsLandSharedToPlayerByPosInt(x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
Dim Lands_CheckIsLandSharedToPlayerByPosInt = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt")
Dim result = Lands_CheckIsLandSharedToPlayerByPosInt(x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
let Lands_CheckIsLandSharedToPlayerByPosInt = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt")
(x,y,z,dimensionId,playerXuid)
	|>Lands_CheckIsLandSharedToPlayerByPosInt.Invoke
	|>ignore
```

---
## Lands::CheckPlayerHasCreateChestPermission
### (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool */
const Lands_CheckPlayerHasCreateChestPermission = ll.import("PFLP", "Lands::CheckPlayerHasCreateChestPermission");
let result = Lands_CheckPlayerHasCreateChestPermission(x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
auto Lands_CheckPlayerHasCreateChestPermission = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckPlayerHasCreateChestPermission");
auto result = Lands_CheckPlayerHasCreateChestPermission(x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
var Lands_CheckPlayerHasCreateChestPermission = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::CheckPlayerHasCreateChestPermission");
var result = Lands_CheckPlayerHasCreateChestPermission(x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
Dim Lands_CheckPlayerHasCreateChestPermission = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::CheckPlayerHasCreateChestPermission")
Dim result = Lands_CheckPlayerHasCreateChestPermission(x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
let Lands_CheckPlayerHasCreateChestPermission = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::CheckPlayerHasCreateChestPermission")
(x,y,z,dimensionId,playerXuid)
	|>Lands_CheckPlayerHasCreateChestPermission.Invoke
	|>ignore
```

---
## Lands::CheckPlayerHasOpenChestPermission
### (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>x</td><td>int</td></tr>
<tr><td>y</td><td>int</td></tr>
<tr><td>z</td><td>int</td></tr>
<tr><td>dimensionId</td><td>int</td></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool */
const Lands_CheckPlayerHasOpenChestPermission = ll.import("PFLP", "Lands::CheckPlayerHasOpenChestPermission");
let result = Lands_CheckPlayerHasOpenChestPermission(x,y,z,dimensionId,playerXuid);
```
 - C++
```cpp
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
auto Lands_CheckPlayerHasOpenChestPermission = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckPlayerHasOpenChestPermission");
auto result = Lands_CheckPlayerHasOpenChestPermission(x,y,z,dimensionId,playerXuid);
```
 - C#
```csharp
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
var Lands_CheckPlayerHasOpenChestPermission = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::CheckPlayerHasOpenChestPermission");
var result = Lands_CheckPlayerHasOpenChestPermission(x,y,z,dimensionId,playerXuid);
```
 - Visual Basic .NET
```vb
' (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
Dim Lands_CheckPlayerHasOpenChestPermission = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,Integer,Integer,String)("PFLP", "Lands::CheckPlayerHasOpenChestPermission")
Dim result = Lands_CheckPlayerHasOpenChestPermission(x,y,z,dimensionId,playerXuid)
```
 - F#
```fsharp
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
let Lands_CheckPlayerHasOpenChestPermission = RemoteCallAPI.ImportAs<bool,int,int,int,int,string>("PFLP", "Lands::CheckPlayerHasOpenChestPermission")
(x,y,z,dimensionId,playerXuid)
	|>Lands_CheckPlayerHasOpenChestPermission.Invoke
	|>ignore
```

---
## Lands::GetPlayerAllPermissionGroupId
### 取玩家所有权限组ID（返回["id1","id2"...]字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string */
const Lands_GetPlayerAllPermissionGroupId = ll.import("PFLP", "Lands::GetPlayerAllPermissionGroupId");
let result = Lands_GetPlayerAllPermissionGroupId(playerXuid);
```
 - C++
```cpp
// 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
auto Lands_GetPlayerAllPermissionGroupId = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Lands::GetPlayerAllPermissionGroupId");
auto result = Lands_GetPlayerAllPermissionGroupId(playerXuid);
```
 - C#
```csharp
// 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
var Lands_GetPlayerAllPermissionGroupId = RemoteCallAPI.ImportAs<string,string>("PFLP", "Lands::GetPlayerAllPermissionGroupId");
var result = Lands_GetPlayerAllPermissionGroupId(playerXuid);
```
 - Visual Basic .NET
```vb
' 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
Dim Lands_GetPlayerAllPermissionGroupId = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "Lands::GetPlayerAllPermissionGroupId")
Dim result = Lands_GetPlayerAllPermissionGroupId(playerXuid)
```
 - F#
```fsharp
// 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
let Lands_GetPlayerAllPermissionGroupId = RemoteCallAPI.ImportAs<string,string>("PFLP", "Lands::GetPlayerAllPermissionGroupId")
playerXuid
	|>Lands_GetPlayerAllPermissionGroupId.Invoke
	|>ignore
```

---
## Lands::GetPlayerPermissionGroup
### 取玩家权限组内容(指定ID)（返回JSON对象字符串）
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>permissionGroupId</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string */
const Lands_GetPlayerPermissionGroup = ll.import("PFLP", "Lands::GetPlayerPermissionGroup");
let result = Lands_GetPlayerPermissionGroup(playerXuid,permissionGroupId);
```
 - C++
```cpp
// 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
auto Lands_GetPlayerPermissionGroup = RemoteCall::importAs<std::string(std::string const& playerXuid,std::string const& permissionGroupId)>("PFLP", "Lands::GetPlayerPermissionGroup");
auto result = Lands_GetPlayerPermissionGroup(playerXuid,permissionGroupId);
```
 - C#
```csharp
// 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
var Lands_GetPlayerPermissionGroup = RemoteCallAPI.ImportAs<string,string,string>("PFLP", "Lands::GetPlayerPermissionGroup");
var result = Lands_GetPlayerPermissionGroup(playerXuid,permissionGroupId);
```
 - Visual Basic .NET
```vb
' 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
Dim Lands_GetPlayerPermissionGroup = RemoteCallAPI.ImportAs(Of String,String,String)("PFLP", "Lands::GetPlayerPermissionGroup")
Dim result = Lands_GetPlayerPermissionGroup(playerXuid,permissionGroupId)
```
 - F#
```fsharp
// 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
let Lands_GetPlayerPermissionGroup = RemoteCallAPI.ImportAs<string,string,string>("PFLP", "Lands::GetPlayerPermissionGroup")
(playerXuid,permissionGroupId)
	|>Lands_GetPlayerPermissionGroup.Invoke
	|>ignore
```

---
## Lands::DeletePlayerPermissionGroup
### 删玩家权限组(指定ID)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>permissionGroupId</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 删玩家权限组(指定ID) 返回值类型：bool */
const Lands_DeletePlayerPermissionGroup = ll.import("PFLP", "Lands::DeletePlayerPermissionGroup");
let result = Lands_DeletePlayerPermissionGroup(playerXuid,permissionGroupId);
```
 - C++
```cpp
// 删玩家权限组(指定ID) 返回值类型：bool
auto Lands_DeletePlayerPermissionGroup = RemoteCall::importAs<bool(std::string const& playerXuid,std::string const& permissionGroupId)>("PFLP", "Lands::DeletePlayerPermissionGroup");
auto result = Lands_DeletePlayerPermissionGroup(playerXuid,permissionGroupId);
```
 - C#
```csharp
// 删玩家权限组(指定ID) 返回值类型：bool
var Lands_DeletePlayerPermissionGroup = RemoteCallAPI.ImportAs<bool,string,string>("PFLP", "Lands::DeletePlayerPermissionGroup");
var result = Lands_DeletePlayerPermissionGroup(playerXuid,permissionGroupId);
```
 - Visual Basic .NET
```vb
' 删玩家权限组(指定ID) 返回值类型：bool
Dim Lands_DeletePlayerPermissionGroup = RemoteCallAPI.ImportAs(Of Boolean,String,String)("PFLP", "Lands::DeletePlayerPermissionGroup")
Dim result = Lands_DeletePlayerPermissionGroup(playerXuid,permissionGroupId)
```
 - F#
```fsharp
// 删玩家权限组(指定ID) 返回值类型：bool
let Lands_DeletePlayerPermissionGroup = RemoteCallAPI.ImportAs<bool,string,string>("PFLP", "Lands::DeletePlayerPermissionGroup")
(playerXuid,permissionGroupId)
	|>Lands_DeletePlayerPermissionGroup.Invoke
	|>ignore
```

---
## Lands::EditPlayerPermissionGroup
### 修改家权限组内容(指定ID)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>permissionGroupId</td><td>string</td></tr>
<tr><td>jsonString</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 修改家权限组内容(指定ID) 返回值类型：bool */
const Lands_EditPlayerPermissionGroup = ll.import("PFLP", "Lands::EditPlayerPermissionGroup");
let result = Lands_EditPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString);
```
 - C++
```cpp
// 修改家权限组内容(指定ID) 返回值类型：bool
auto Lands_EditPlayerPermissionGroup = RemoteCall::importAs<bool(std::string const& playerXuid,std::string const& permissionGroupId,std::string const& jsonString)>("PFLP", "Lands::EditPlayerPermissionGroup");
auto result = Lands_EditPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString);
```
 - C#
```csharp
// 修改家权限组内容(指定ID) 返回值类型：bool
var Lands_EditPlayerPermissionGroup = RemoteCallAPI.ImportAs<bool,string,string,string>("PFLP", "Lands::EditPlayerPermissionGroup");
var result = Lands_EditPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString);
```
 - Visual Basic .NET
```vb
' 修改家权限组内容(指定ID) 返回值类型：bool
Dim Lands_EditPlayerPermissionGroup = RemoteCallAPI.ImportAs(Of Boolean,String,String,String)("PFLP", "Lands::EditPlayerPermissionGroup")
Dim result = Lands_EditPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString)
```
 - F#
```fsharp
// 修改家权限组内容(指定ID) 返回值类型：bool
let Lands_EditPlayerPermissionGroup = RemoteCallAPI.ImportAs<bool,string,string,string>("PFLP", "Lands::EditPlayerPermissionGroup")
(playerXuid,permissionGroupId,jsonString)
	|>Lands_EditPlayerPermissionGroup.Invoke
	|>ignore
```

---
## Lands::AddPlayerPermissionGroup
### 添加权限组
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>permissionGroupId</td><td>string</td></tr>
<tr><td>jsonString</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 添加权限组 返回值类型：bool */
const Lands_AddPlayerPermissionGroup = ll.import("PFLP", "Lands::AddPlayerPermissionGroup");
let result = Lands_AddPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString);
```
 - C++
```cpp
// 添加权限组 返回值类型：bool
auto Lands_AddPlayerPermissionGroup = RemoteCall::importAs<bool(std::string const& playerXuid,std::string const& permissionGroupId,std::string const& jsonString)>("PFLP", "Lands::AddPlayerPermissionGroup");
auto result = Lands_AddPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString);
```
 - C#
```csharp
// 添加权限组 返回值类型：bool
var Lands_AddPlayerPermissionGroup = RemoteCallAPI.ImportAs<bool,string,string,string>("PFLP", "Lands::AddPlayerPermissionGroup");
var result = Lands_AddPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString);
```
 - Visual Basic .NET
```vb
' 添加权限组 返回值类型：bool
Dim Lands_AddPlayerPermissionGroup = RemoteCallAPI.ImportAs(Of Boolean,String,String,String)("PFLP", "Lands::AddPlayerPermissionGroup")
Dim result = Lands_AddPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString)
```
 - F#
```fsharp
// 添加权限组 返回值类型：bool
let Lands_AddPlayerPermissionGroup = RemoteCallAPI.ImportAs<bool,string,string,string>("PFLP", "Lands::AddPlayerPermissionGroup")
(playerXuid,permissionGroupId,jsonString)
	|>Lands_AddPlayerPermissionGroup.Invoke
	|>ignore
```

---
## Lands::GetLandsOwnedByPlayer
### 取玩家拥有的领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 取玩家拥有的领地 返回值类型：string */
const Lands_GetLandsOwnedByPlayer = ll.import("PFLP", "Lands::GetLandsOwnedByPlayer");
let result = Lands_GetLandsOwnedByPlayer(playerXuid);
```
 - C++
```cpp
// 取玩家拥有的领地 返回值类型：string
auto Lands_GetLandsOwnedByPlayer = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Lands::GetLandsOwnedByPlayer");
auto result = Lands_GetLandsOwnedByPlayer(playerXuid);
```
 - C#
```csharp
// 取玩家拥有的领地 返回值类型：string
var Lands_GetLandsOwnedByPlayer = RemoteCallAPI.ImportAs<string,string>("PFLP", "Lands::GetLandsOwnedByPlayer");
var result = Lands_GetLandsOwnedByPlayer(playerXuid);
```
 - Visual Basic .NET
```vb
' 取玩家拥有的领地 返回值类型：string
Dim Lands_GetLandsOwnedByPlayer = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "Lands::GetLandsOwnedByPlayer")
Dim result = Lands_GetLandsOwnedByPlayer(playerXuid)
```
 - F#
```fsharp
// 取玩家拥有的领地 返回值类型：string
let Lands_GetLandsOwnedByPlayer = RemoteCallAPI.ImportAs<string,string>("PFLP", "Lands::GetLandsOwnedByPlayer")
playerXuid
	|>Lands_GetLandsOwnedByPlayer.Invoke
	|>ignore
```

---
## Lands::GetLandsSharedToPlayer
### 取共享给玩家的领地
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 取共享给玩家的领地 返回值类型：string */
const Lands_GetLandsSharedToPlayer = ll.import("PFLP", "Lands::GetLandsSharedToPlayer");
let result = Lands_GetLandsSharedToPlayer(playerXuid);
```
 - C++
```cpp
// 取共享给玩家的领地 返回值类型：string
auto Lands_GetLandsSharedToPlayer = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Lands::GetLandsSharedToPlayer");
auto result = Lands_GetLandsSharedToPlayer(playerXuid);
```
 - C#
```csharp
// 取共享给玩家的领地 返回值类型：string
var Lands_GetLandsSharedToPlayer = RemoteCallAPI.ImportAs<string,string>("PFLP", "Lands::GetLandsSharedToPlayer");
var result = Lands_GetLandsSharedToPlayer(playerXuid);
```
 - Visual Basic .NET
```vb
' 取共享给玩家的领地 返回值类型：string
Dim Lands_GetLandsSharedToPlayer = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "Lands::GetLandsSharedToPlayer")
Dim result = Lands_GetLandsSharedToPlayer(playerXuid)
```
 - F#
```fsharp
// 取共享给玩家的领地 返回值类型：string
let Lands_GetLandsSharedToPlayer = RemoteCallAPI.ImportAs<string,string>("PFLP", "Lands::GetLandsSharedToPlayer")
playerXuid
	|>Lands_GetLandsSharedToPlayer.Invoke
	|>ignore
```

