---
title: Command
---

[[toc]]


---
## Command::RenameCommand
### 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>cmd</td><td>string</td></tr>
<tr><td>newCmd</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令) */
const Command_RenameCommand = ll.import("PFLP", "Command::RenameCommand");
Command_RenameCommand(cmd,newCmd);
```
 - C++
```cpp
// 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
auto Command_RenameCommand = RemoteCall::importAs<void(std::string const& cmd,std::string const& newCmd)>("PFLP", "Command::RenameCommand");
Command_RenameCommand(cmd,newCmd);
```
 - C#
```csharp
// 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
var Command_RenameCommand = RemoteCallAPI.Import_As<string,string>("PFLP", "Command::RenameCommand");
Command_RenameCommand(cmd,newCmd);
```
 - Visual Basic .NET
```vb
' 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
Dim Command_RenameCommand = RemoteCallAPI.Import_As(Of String,String)("PFLP", "Command::RenameCommand")
Command_RenameCommand(cmd,newCmd)
```
 - F#
```fsharp
// 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
let Command_RenameCommand = RemoteCallAPI.Import_As<string,string>("PFLP", "Command::RenameCommand")
(cmd,newCmd)
	|>Command_RenameCommand.Invoke
```

---
## Command::ExecuteInternalCommand
### 执行pflp内部命令(无视重命名,执行的是原始命令)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>cmd</td><td>string</td></tr>
<tr><td colspan="2">返回值类型：bool;</td></tr></table>

 - JavaScript
```js
/** 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool */
const Command_ExecuteInternalCommand = ll.import("PFLP", "Command::ExecuteInternalCommand");
let result = Command_ExecuteInternalCommand(playerXuid,cmd);
```
 - C++
```cpp
// 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
auto Command_ExecuteInternalCommand = RemoteCall::importAs<bool(std::string const& playerXuid,std::string const& cmd)>("PFLP", "Command::ExecuteInternalCommand");
auto result = Command_ExecuteInternalCommand(playerXuid,cmd);
```
 - C#
```csharp
// 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
var Command_ExecuteInternalCommand = RemoteCallAPI.ImportAs<bool,string,string>("PFLP", "Command::ExecuteInternalCommand");
var result = Command_ExecuteInternalCommand(playerXuid,cmd);
```
 - Visual Basic .NET
```vb
' 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
Dim Command_ExecuteInternalCommand = RemoteCallAPI.ImportAs(Of Boolean,String,String)("PFLP", "Command::ExecuteInternalCommand")
Dim result = Command_ExecuteInternalCommand(playerXuid,cmd)
```
 - F#
```fsharp
// 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
let Command_ExecuteInternalCommand = RemoteCallAPI.ImportAs<bool,string,string>("PFLP", "Command::ExecuteInternalCommand")
(playerXuid,cmd)
	|>Command_ExecuteInternalCommand.Invoke
	|>ignore
```

---
## Command::SetCommandDisabled
### 设置命令禁用(可设置提示)(支持任意命令)
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>cmd</td><td>string</td></tr>
<tr><td>feedback</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 设置命令禁用(可设置提示)(支持任意命令) */
const Command_SetCommandDisabled = ll.import("PFLP", "Command::SetCommandDisabled");
Command_SetCommandDisabled(playerXuid,cmd,feedback);
```
 - C++
```cpp
// 设置命令禁用(可设置提示)(支持任意命令)
auto Command_SetCommandDisabled = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& cmd,std::string const& feedback)>("PFLP", "Command::SetCommandDisabled");
Command_SetCommandDisabled(playerXuid,cmd,feedback);
```
 - C#
```csharp
// 设置命令禁用(可设置提示)(支持任意命令)
var Command_SetCommandDisabled = RemoteCallAPI.Import_As<string,string,string>("PFLP", "Command::SetCommandDisabled");
Command_SetCommandDisabled(playerXuid,cmd,feedback);
```
 - Visual Basic .NET
```vb
' 设置命令禁用(可设置提示)(支持任意命令)
Dim Command_SetCommandDisabled = RemoteCallAPI.Import_As(Of String,String,String)("PFLP", "Command::SetCommandDisabled")
Command_SetCommandDisabled(playerXuid,cmd,feedback)
```
 - F#
```fsharp
// 设置命令禁用(可设置提示)(支持任意命令)
let Command_SetCommandDisabled = RemoteCallAPI.Import_As<string,string,string>("PFLP", "Command::SetCommandDisabled")
(playerXuid,cmd,feedback)
	|>Command_SetCommandDisabled.Invoke
```

---
## Command::SetCommandEnabled
### 设置命令启用
<table><tr><th>形参</th><th>类型</th></tr>
<tr><td>playerXuid</td><td>string</td></tr>
<tr><td>cmd</td><td>string</td></tr>
<tr><td colspan="2">无返回值;</td></tr></table>

 - JavaScript
```js
/** 设置命令启用 */
const Command_SetCommandEnabled = ll.import("PFLP", "Command::SetCommandEnabled");
Command_SetCommandEnabled(playerXuid,cmd);
```
 - C++
```cpp
// 设置命令启用
auto Command_SetCommandEnabled = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& cmd)>("PFLP", "Command::SetCommandEnabled");
Command_SetCommandEnabled(playerXuid,cmd);
```
 - C#
```csharp
// 设置命令启用
var Command_SetCommandEnabled = RemoteCallAPI.Import_As<string,string>("PFLP", "Command::SetCommandEnabled");
Command_SetCommandEnabled(playerXuid,cmd);
```
 - Visual Basic .NET
```vb
' 设置命令启用
Dim Command_SetCommandEnabled = RemoteCallAPI.Import_As(Of String,String)("PFLP", "Command::SetCommandEnabled")
Command_SetCommandEnabled(playerXuid,cmd)
```
 - F#
```fsharp
// 设置命令启用
let Command_SetCommandEnabled = RemoteCallAPI.Import_As<string,string>("PFLP", "Command::SetCommandEnabled")
(playerXuid,cmd)
	|>Command_SetCommandEnabled.Invoke
```

