# MagicJS - 通过JS与PFLP优雅地交互
###### (因为编写的时候开了Copilot，所以废话可能比较多)
### 简介
MagicJS实现了LLJS插件(或Mojang Scripting)与PFLP的互交互，使得插件扩展更加优雅，你可以使用MagicJS快速获取PFLP的数据、快速实现基于PFLP的功能，直接监听PFLP插件内部的事件等等...
### 依赖
- `LiteLoader.Js.dll`这是跟随LL加载器一同发布的基于QuickJS的脚本加载器，通常情况下你已经安装
- `PixelFaramitaLuminousPolymerization.LL.dll`这是PFLP插件的核心，安装后即可使用该方案扩展插件

### 快速上手
在plugins目录创建一个js插件，例如`test.js`，用[VisualStudioCode](https://code.visualstudio.com/)打开，添加以下内容：
```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" /> 
```
这告诉编辑器PFLP的类型定义，此后编辑器会自动提示补全，你可以在`PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts`中查看PFLP的所有类型定义，查看PFLP的所有方法，这些方法都是可以直接调用的，例如：
```js
mc.listen("onJump", pl => {
    const { x, y, z, dimid } = pl.blockPos
    //调用PF的API
    var result = $pf.Api.Lands.GetLandByPosInt(x, y, z, dimid);
    if (result !== null) {//存在领地，输出信息
        $pf.log(`当前${result.PlayerName}的领地:${result.Displayname}`)
    }
})
```
其中$pf是PFLP的全局变量，此后你在编写对接插件时将会不断使用它，示例中`$pf.Api.Lands.`下有许多操作领地的API，你可以使用它来完成大部分领地功能的自定义，比如创建自定义权限组，修改领地属性等等...
类似的功能还有很多，例如：
```js
$pf.Api.Command.SetCommandDisabled(xuid,"land","领地命令已禁用")
```
此方法可以修改某个玩家的某个命令（PFLP内的命令）可用性
```js
let config=$pf.Api.General.GetConfig()
config.ChatEnhancement.ModuleEnabled=true
$pf.Api.General.SetConfig(config)
```
此方法可以获取PFLP的配置文件，包括但不限于开关PFLP的模块，修改PFLP的配置等等...

...

还有很多功能，请参阅编辑器的提示和自动补全文件`PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts`

---
### 事件监听
MagicJS实现了对PFLP的事件监听，你可以使用`$pf.listen`方法监听PFLP的事件，例如：
```js
mc.listen("onServerStarted", () => {
    //添加监听
    $pf.listen($pf.EventKey.onLandCreated, infoObj => {
         $pf.log(`领地${land.Displayname}被创建`)
    })
}); 
```

### 当前存在的问题
必须在`onServerStarted`或其他事件触发后才可以使用`$pf`变量，因为插件的加载顺序是不确定的，如果在`onServerStarted`之前使用`$pf`变量，很可能PFLP还没加载导致$pf变量不存在，此时你可以使用`mc.listen("onServerStarted",()=>{})`来监听服务器启动事件，当服务器启动后，你可以在回调函数中使用`$pf`变量
- 也许以后可以让LL实现插件加载顺序来解决这个问题

### Mojang Scripting
不仅仅是基于LL的js脚本，PFLP的插件目录还有个scripts文件夹，相信你已经猜出来这是用来干什么的了...
你可能听说过在行为包中利用官方的脚本接口编写插件，现在MagicJS可以让更加轻松地编写官方脚本插件，
不过开始前，你需要安装`@minecraft/server`等npm包以实现编辑器的自动补全，通常`PixelFaramitaLuminousPolymerization\scripts`已经准备好了`package.json`，你只需在该目录执行`npm i`命令即可自动安装补全库。
然后你可以在`PixelFaramitaLuminousPolymerization\scripts`文件夹中创建一个`test.js`文件，然后写入以下代码：
```js
import * as mc from "@minecraft/server";//导入官方包
/**
 * 实体对象转玩家对象
 * @param {mc.Entity} entity 
 * @returns {mc.Player|undefined} 
 */
function EntityToPlayer(entity) {
    if (entity.typeId === "minecraft:player") {
        for (const iterator of mc.world.getPlayers({ name: entity.nameTag })) {//通过mc.world.getPlayers方法找到与实体对应的玩家对象并返回
            return iterator
        }
    }
}
mc.world.events.projectileHit.subscribe(e => {//订阅弹射物击中事件
    if (e.entityHit !== undefined) {//如果击中了实体
        EntityToPlayer(e.source)?.playSound("random.orb")//播放声音
    }
})
```
这个简单示例实现了箭矢击中目标后反馈给玩家ding~的音效，可以看出addon中深藏不漏的ScriptingAPI还是很强大的。
然后请往下看
```js
import { Utils, log, Api } from "@pf"//导入PFLP的方法
import * as mc from "@minecraft/server";
mc.world.events.projectileHit.subscribe(e => {//订阅弹射物击中事件
    if (e.blockHit !== undefined) {
        if (e.source.typeId === "minecraft:player") {
            try {
                const playerXuid = Utils.UniqueIdToXuid(e.source.id)//这个方法可以把UniqueId转换成玩家的xuid
                const { x, y, z } = e.blockHit.block.location 
                Api.ParticlesGraphics.DrawBlock(playerXuid, x, y, z, 0.5, 0.9, 0.5, 0.03, 1, 0.5)//通过PFLP的API绘制方块描边
            } catch (error) { }
        }
    }
})
```
这个示例调用了PFLP的`DrawBlock`方法，在箭矢击中方块后给方块绘制了描边。就像官方的脚本，可以优雅地使用`import`来导入`@pf`模块，然后可以直接调用PFLP的方法，类似上文的`$pf`变量