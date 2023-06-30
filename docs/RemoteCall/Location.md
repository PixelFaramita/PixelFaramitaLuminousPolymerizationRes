---
title: Location
---

[[toc]]


---
## Location::GetAllCacheData
### 获取全部IP归属地缓存（JSON字符串）
<table><tr><th>无参数;</th></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 获取全部IP归属地缓存（JSON字符串） 返回值类型：string */
const Location_GetAllCacheData = ll.import("PFLP", "Location::GetAllCacheData");
let result = Location_GetAllCacheData();
```
 - C++
```cpp
// 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
auto Location_GetAllCacheData = RemoteCall::importAs<std::string()>("PFLP", "Location::GetAllCacheData");
auto result = Location_GetAllCacheData();
```
 - C#
```csharp
// 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
var Location_GetAllCacheData = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Location::GetAllCacheData");
var result = Location_GetAllCacheData();
```
 - Visual Basic .NET
```vb
' 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
Dim Location_GetAllCacheData = RemoteCallAPI.ImportAs(Of Func(Of String))("PFLP", "Location::GetAllCacheData")
Dim result = Location_GetAllCacheData()
```
 - F#
```fsharp
// 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
let Location_GetAllCacheData = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Location::GetAllCacheData")
Location_GetAllCacheData()
	|>ignore
```

---
## Location::SetIpLocation
###  设置IP归属地缓存
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>ip</td><td>string</td></tr>
<tr><td>country</td><td>string</td></tr>
<tr><td>province</td><td>string</td></tr>
<tr><td>city</td><td>string</td></tr>
<tr><td>area</td><td>string</td></tr>
<tr><td>isp</td><td>string</td></tr>
<tr><td>language</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/**  设置IP归属地缓存 */
const Location_SetIpLocation = ll.import("PFLP", "Location::SetIpLocation");
Location_SetIpLocation(ip,country,province,city,area,isp,language);
```
 - C++
```cpp
//  设置IP归属地缓存
auto Location_SetIpLocation = RemoteCall::importAs<void(std::string const& ip,std::string const& country,std::string const& province,std::string const& city,std::string const& area,std::string const& isp,std::string const& language)>("PFLP", "Location::SetIpLocation");
Location_SetIpLocation(ip,country,province,city,area,isp,language);
```
 - C#
```csharp
//  设置IP归属地缓存
var Location_SetIpLocation = RemoteCallAPI.ImportAs<Action<string,string,string,string,string,string,string>>("PFLP", "Location::SetIpLocation");
Location_SetIpLocation(ip,country,province,city,area,isp,language);
```
 - Visual Basic .NET
```vb
'  设置IP归属地缓存
Dim Location_SetIpLocation = RemoteCallAPI.ImportAs(Of Action(Of String,String,String,String,String,String,String))("PFLP", "Location::SetIpLocation")
Location_SetIpLocation(ip,country,province,city,area,isp,language)
```
 - F#
```fsharp
//  设置IP归属地缓存
let Location_SetIpLocation = RemoteCallAPI.ImportAs<Action<string,string,string,string,string,string,string>>("PFLP", "Location::SetIpLocation")
(ip,country,province,city,area,isp,language)
	|>Location_SetIpLocation.Invoke
```

