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

