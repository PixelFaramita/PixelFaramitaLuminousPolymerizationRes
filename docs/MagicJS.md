# MagicJS - 通过JS与PFLP优雅地交互
### 简介
MagicJS实现了LLJS插件(或Mojang Scripting)与PFLP的互交互，使得插件扩展更加优雅，你可以使用MagicJS快速获取PFLP的数据、快速实现基于PFLP的功能，直接监听PFLP插件内部的事件等等...
### 依赖
- `LiteLoader.Js.dll`这是跟随LL加载器一同发布的基于QuickJS的脚本加载器，通常情况下你已经安装
- `PixelFaramitaLuminousPolymerization.LL.dll`这是PFLP插件的核心，安装后即可使用该方案扩展插件

### 快速上手
在plugins目录创建一个js插件，例如`test.js`，用[VisualStudioCode](https://code.visualstudio.com/)打开，输入以下代码：
```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" /> 
```
这是告诉编辑器PFLP的类型定义，此后编辑器会自动提示补全，你可以在`PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts`中查看PFLP的所有类型定义，查看PFLP的所有方法，这些方法都是可以直接调用的，例如：
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

