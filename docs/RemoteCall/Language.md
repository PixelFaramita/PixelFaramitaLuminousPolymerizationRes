---
title: Language
---

[[toc]]


---
## Language::Translate
### 翻译
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>fromLanguage</td><td>string</td></tr>
<tr><td>toLanguage</td><td>string</td></tr>
<tr><td>text</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：string;</td></tr></table>

 - JavaScript
```js
/** 翻译 返回值类型：string */
const Language_Translate = ll.import("PFLP", "Language::Translate");
let result = Language_Translate(fromLanguage,toLanguage,text);
```
 - C++
```cpp
// 翻译 返回值类型：string
auto Language_Translate = RemoteCall::importAs<std::string(std::string const& fromLanguage,std::string const& toLanguage,std::string const& text)>("PFLP", "Language::Translate");
auto result = Language_Translate(fromLanguage,toLanguage,text);
```
 - C#
```csharp
// 翻译 返回值类型：string
var Language_Translate = RemoteCallAPI.ImportAs<string,string,string,string>("PFLP", "Language::Translate");
var result = Language_Translate(fromLanguage,toLanguage,text);
```
 - Visual Basic .NET
```vb
' 翻译 返回值类型：string
Dim Language_Translate = RemoteCallAPI.ImportAs(Of String,String,String,String)("PFLP", "Language::Translate")
Dim result = Language_Translate(fromLanguage,toLanguage,text)
```
 - F#
```fsharp
// 翻译 返回值类型：string
let Language_Translate = RemoteCallAPI.ImportAs<string,string,string,string>("PFLP", "Language::Translate")
(fromLanguage,toLanguage,text)
	|>Language_Translate.Invoke
	|>ignore
```

