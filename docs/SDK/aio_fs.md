---
title: 汇总 F# SDK
icon: laptop-code
order: 1002
---


---
<details><summary>F# imports / 直接导入</summary>

``` fsharp
#r "LiteLoader.NET"
open LiteLoader.RemoteCall

// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
let General_SetConfig = RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "General::SetConfig")
// 获取全局配置文件（JSON字符串） 返回值类型：string
let General_GetConfig = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "General::GetConfig")
// 重新加载所有功能的配置文件
let General_Reload = RemoteCallAPI.ImportAs<Action>("PFLP", "General::Reload")
// 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
let Location_GetAllCacheData = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Location::GetAllCacheData")
//  设置IP归属地缓存
let Location_SetIpLocation = RemoteCallAPI.ImportAs<Action<string,string,string,string,string,string,string>>("PFLP", "Location::SetIpLocation")
// 延迟传送 返回值类型：int
let Teleport_StartNew = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Teleport::StartNew")
// 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string
let Teleport_GetTpaState = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetTpaState")
// 获取指定玩家的Home（JSON字符串） 返回值类型：string
let Teleport_GetHome = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetHome")
// 获取服务器的全部传送点（JSON字符串） 返回值类型：string
let Teleport_GetWarp = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Teleport::GetWarp")
// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
let Statistics_GetPlayerStatistics = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Statistics::GetPlayerStatistics")
// 设定指定玩家的统计数据（JSON字符串）
let Statistics_SetPlayerStatistics = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Statistics::SetPlayerStatistics")
// 获取变量 返回值类型：string
let Format_GetVariableString = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetVariableString")
// 获取变量，但是强制返回int类型 返回值类型：int
let Format_GetVariableInt = RemoteCallAPI.ImportAs<Func<string,string,int>>("PFLP", "Format::GetVariableInt")
// 获取变量，但是强制返回float类型 返回值类型：float
let Format_GetVariableFloat = RemoteCallAPI.ImportAs<Func<string,string,float>>("PFLP", "Format::GetVariableFloat")
// 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
let Format_FormatRawString = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::FormatRawString")
// 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
let Format_DefineFormat = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Format::DefineFormat")
// 移除格式化定义（返回true为存在并移除） 返回值类型：bool
let Format_RemoveFormat = RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "Format::RemoveFormat")
// 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
let Format_GetFormatWithPlayer = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetFormatWithPlayer")
// 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
let Format_GetFormatWithPlayerLang = RemoteCallAPI.ImportAs<Func<string,string,string,string,string>>("PFLP", "Format::GetFormatWithPlayerLang")
// 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
let Format_GetFormat = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::GetFormat")
// 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
let Command_RenameCommand = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Command::RenameCommand")
// 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
let Command_ExecuteInternalCommand = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Command::ExecuteInternalCommand")
// 设置命令禁用(可设置提示)(支持任意命令)
let Command_SetCommandDisabled = RemoteCallAPI.ImportAs<Action<string,string,string>>("PFLP", "Command::SetCommandDisabled")
// 设置命令启用
let Command_SetCommandEnabled = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Command::SetCommandEnabled")
// 翻译 返回值类型：string
let Language_Translate = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Language::Translate")
// 设置玩家昵称
let ChatEx_SetNickName = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetNickName")
// 设置玩家聊天时的名字
let ChatEx_SetFakeName = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetFakeName")
// 设置玩家聊天消息后缀
let ChatEx_SetEnd = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetEnd")
// 设置玩家聊天消息前缀
let ChatEx_SetStart = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetStart")
// 获取玩家昵称 返回值类型：string
let ChatEx_GetNickName = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetNickName")
// 获取玩家聊天时的名字 返回值类型：string
let ChatEx_GetFakeName = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetFakeName")
// 获取玩家聊天消息后缀 返回值类型：string
let ChatEx_GetEnd = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetEnd")
// 获取玩家聊天消息前缀 返回值类型：string
let ChatEx_GetStart = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetStart")
// 给指定方块描框
let ParticlesGraphics_DrawBlock = RemoteCallAPI.ImportAs<Action<string,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBlock")
// 给指定区域描框
let ParticlesGraphics_DrawBorder = RemoteCallAPI.ImportAs<Action<string,int,int,int,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBorder")
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
let Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,bool>>("PFLP", "Lands::CheckCubeHasLand")
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
let Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,bool>>("PFLP", "Lands::CheckCubeHasLandInt")
// 检查指定坐标(float)是否有领地 返回值类型：bool
let Lands_CheckPosHasLand = RemoteCallAPI.ImportAs<Func<float,float,float,int,bool>>("PFLP", "Lands::CheckPosHasLand")
// 检查指定坐标(int)是否有领地 返回值类型：bool
let Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,bool>>("PFLP", "Lands::CheckPosHasLandInt")
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByCube = RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,string>>("PFLP", "Lands::GetLandByCube")
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string>>("PFLP", "Lands::GetLandByCubeInt")
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string>>("PFLP", "Lands::GetLandByPos")
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string>>("PFLP", "Lands::GetLandByPosInt")
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,string>>("PFLP", "Lands::GetLandInfoByCube")
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string>>("PFLP", "Lands::GetLandInfoByCubeInt")
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string>>("PFLP", "Lands::GetLandInfoByPos")
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
let Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string>>("PFLP", "Lands::GetLandInfoByPosInt")
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
let Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::SetLandInfoByPos")
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
let Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::SetLandInfoByPosInt")
// 新建领地 返回值类型：bool
let Lands_CreateLand2D = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,string,bool>>("PFLP", "Lands::CreateLand2D")
// 新建领地 返回值类型：bool
let Lands_CreateLand3D = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string,bool>>("PFLP", "Lands::CreateLand3D")
// 删除指定坐标(float)的领地 返回值类型：bool
let Lands_DeleteLandByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,bool>>("PFLP", "Lands::DeleteLandByPos")
// 删除指定坐标(int)的领地 返回值类型：bool
let Lands_DeleteLandByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,bool>>("PFLP", "Lands::DeleteLandByPosInt")
// 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
let Lands_GetLandPermissionByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string,string>>("PFLP", "Lands::GetLandPermissionByPos")
// 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
let Lands_GetLandPermissionByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,string>>("PFLP", "Lands::GetLandPermissionByPosInt")
// 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
let Lands_CheckLandPermissionByPos = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,string,bool>>("PFLP", "Lands::CheckLandPermissionByPos")
// 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
let Lands_CheckLandPermissionByPosInt = RemoteCallAPI.ImportAs<Func<string,int,int,int,int,string,bool>>("PFLP", "Lands::CheckLandPermissionByPosInt")
// 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
let Lands_CheckPlayerIsLandOwnerByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::CheckPlayerIsLandOwnerByPos")
// 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
let Lands_CheckPlayerIsLandOwnerByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt")
// 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
let Lands_CheckIsLandSharedToPlayerByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::CheckIsLandSharedToPlayerByPos")
// 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
let Lands_CheckIsLandSharedToPlayerByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt")
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
let Lands_CheckPlayerHasCreateChestPermission = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerHasCreateChestPermission")
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
let Lands_CheckPlayerHasOpenChestPermission = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerHasOpenChestPermission")
// 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
let Lands_GetPlayerAllPermissionGroupId = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetPlayerAllPermissionGroupId")
// 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
let Lands_GetPlayerPermissionGroup = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Lands::GetPlayerPermissionGroup")
// 删玩家权限组(指定ID) 返回值类型：bool
let Lands_DeletePlayerPermissionGroup = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Lands::DeletePlayerPermissionGroup")
// 修改家权限组内容(指定ID) 返回值类型：bool
let Lands_EditPlayerPermissionGroup = RemoteCallAPI.ImportAs<Func<string,string,string,bool>>("PFLP", "Lands::EditPlayerPermissionGroup")
// 添加权限组 返回值类型：bool
let Lands_AddPlayerPermissionGroup = RemoteCallAPI.ImportAs<Func<string,string,string,bool>>("PFLP", "Lands::AddPlayerPermissionGroup")
// 取玩家拥有的领地 返回值类型：string
let Lands_GetLandsOwnedByPlayer = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetLandsOwnedByPlayer")
// 取共享给玩家的领地 返回值类型：string
let Lands_GetLandsSharedToPlayer = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetLandsSharedToPlayer")
// 创建浮空字(给玩家发包) 返回值类型：int
let FloatText_Add = RemoteCallAPI.ImportAs<Func<string,float,float,float,string,int>>("PFLP", "FloatText::Add")
// 移除浮空字(给玩家发包)
let FloatText_Remove = RemoteCallAPI.ImportAs<Action<string,int>>("PFLP", "FloatText::Remove")
// 获取玩家(指定玩家名)金钱 返回值类型：long
let Money_Get = RemoteCallAPI.ImportAs<Func<string,int64>>("PFLP", "Money::Get")
// 给玩家(指定玩家名)加钱
let Money_Add = RemoteCallAPI.ImportAs<Action<string,int64,string>>("PFLP", "Money::Add")
// 给玩家(指定玩家名)减钱
let Money_Remove = RemoteCallAPI.ImportAs<Action<string,int64,string>>("PFLP", "Money::Remove")

```
</details>
<details><summary>F# module / F# 模块类（推荐）</summary>

``` fsharp
#r "LiteLoader.NET"
open LiteLoader.RemoteCall

module public PFLP =
  module public General =
    let private General_SetConfig_instance = lazy RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "General::SetConfig")
    /// <summary> 设置全局配置文件（要求JSON字符串） 返回值类型：bool </summary>
    let public SetConfig(jsonStr:string):bool =
      General_SetConfig_instance.Value.Invoke(jsonStr)
    let private General_GetConfig_instance = lazy RemoteCallAPI.ImportAs<Func<string>>("PFLP", "General::GetConfig")
    /// <summary> 获取全局配置文件（JSON字符串） 返回值类型：string </summary>
    let public GetConfig():string =
      General_GetConfig_instance.Value.Invoke()
    let private General_Reload_instance = lazy RemoteCallAPI.ImportAs<Action>("PFLP", "General::Reload")
    /// <summary> 重新加载所有功能的配置文件 </summary>
    let public Reload():unit =
      General_Reload_instance.Value.Invoke()
  module public Location =
    let private Location_GetAllCacheData_instance = lazy RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Location::GetAllCacheData")
    /// <summary> 获取全部IP归属地缓存（JSON字符串） 返回值类型：string </summary>
    let public GetAllCacheData():string =
      Location_GetAllCacheData_instance.Value.Invoke()
    let private Location_SetIpLocation_instance = lazy RemoteCallAPI.ImportAs<Action<string,string,string,string,string,string,string>>("PFLP", "Location::SetIpLocation")
    /// <summary>  设置IP归属地缓存 </summary>
    let public SetIpLocation(ip:string)(country:string)(province:string)(city:string)(area:string)(isp:string)(language:string):unit =
      Location_SetIpLocation_instance.Value.Invoke(ip,country,province,city,area,isp,language)
  module public Teleport =
    let private Teleport_StartNew_instance = lazy RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Teleport::StartNew")
    /// <summary> 延迟传送 返回值类型：int </summary>
    let public StartNew(playerXuid:string)(x:float)(y:float)(z:float)(dimensionId:int):int =
      Teleport_StartNew_instance.Value.Invoke(playerXuid,x,y,z,dimensionId)
    let private Teleport_GetTpaState_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetTpaState")
    /// <summary> 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string </summary>
    let public GetTpaState(playerXuid:string):string =
      Teleport_GetTpaState_instance.Value.Invoke(playerXuid)
    let private Teleport_GetHome_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetHome")
    /// <summary> 获取指定玩家的Home（JSON字符串） 返回值类型：string </summary>
    let public GetHome(playerXuid:string):string =
      Teleport_GetHome_instance.Value.Invoke(playerXuid)
    let private Teleport_GetWarp_instance = lazy RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Teleport::GetWarp")
    /// <summary> 获取服务器的全部传送点（JSON字符串） 返回值类型：string </summary>
    let public GetWarp():string =
      Teleport_GetWarp_instance.Value.Invoke()
  module public Statistics =
    let private Statistics_GetPlayerStatistics_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Statistics::GetPlayerStatistics")
    /// <summary> 获取指定玩家的统计数据（JSON字符串） 返回值类型：string </summary>
    let public GetPlayerStatistics(playerXuid:string):string =
      Statistics_GetPlayerStatistics_instance.Value.Invoke(playerXuid)
    let private Statistics_SetPlayerStatistics_instance = lazy RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Statistics::SetPlayerStatistics")
    /// <summary> 设定指定玩家的统计数据（JSON字符串） </summary>
    let public SetPlayerStatistics(playerXuid:string)(newData:string):unit =
      Statistics_SetPlayerStatistics_instance.Value.Invoke(playerXuid,newData)
  module public Format =
    let private Format_GetVariableString_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetVariableString")
    /// <summary> 获取变量 返回值类型：string </summary>
    let public GetVariableString(playerXuid:string)(name:string)(format:string):string =
      Format_GetVariableString_instance.Value.Invoke(playerXuid,name,format)
    let private Format_GetVariableInt_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,int>>("PFLP", "Format::GetVariableInt")
    /// <summary> 获取变量，但是强制返回int类型 返回值类型：int </summary>
    let public GetVariableInt(playerXuid:string)(name:string):int =
      Format_GetVariableInt_instance.Value.Invoke(playerXuid,name)
    let private Format_GetVariableFloat_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,float>>("PFLP", "Format::GetVariableFloat")
    /// <summary> 获取变量，但是强制返回float类型 返回值类型：float </summary>
    let public GetVariableFloat(playerXuid:string)(name:string):float =
      Format_GetVariableFloat_instance.Value.Invoke(playerXuid,name)
    let private Format_FormatRawString_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::FormatRawString")
    /// <summary> 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string </summary>
    let public FormatRawString(playerXuid:string)(rawFormat:string):string =
      Format_FormatRawString_instance.Value.Invoke(playerXuid,rawFormat)
    let private Format_DefineFormat_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Format::DefineFormat")
    /// <summary> 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool </summary>
    let public DefineFormat(id:string)(rawFormat:string):bool =
      Format_DefineFormat_instance.Value.Invoke(id,rawFormat)
    let private Format_RemoveFormat_instance = lazy RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "Format::RemoveFormat")
    /// <summary> 移除格式化定义（返回true为存在并移除） 返回值类型：bool </summary>
    let public RemoveFormat(id:string):bool =
      Format_RemoveFormat_instance.Value.Invoke(id)
    let private Format_GetFormatWithPlayer_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetFormatWithPlayer")
    /// <summary> 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string </summary>
    let public GetFormatWithPlayer(id:string)(playerXuid:string)(extra:string):string =
      Format_GetFormatWithPlayer_instance.Value.Invoke(id,playerXuid,extra)
    let private Format_GetFormatWithPlayerLang_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string,string,string>>("PFLP", "Format::GetFormatWithPlayerLang")
    /// <summary> 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string </summary>
    let public GetFormatWithPlayerLang(id:string)(playerXuid:string)(playerLangXuid:string)(extra:string):string =
      Format_GetFormatWithPlayerLang_instance.Value.Invoke(id,playerXuid,playerLangXuid,extra)
    let private Format_GetFormat_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::GetFormat")
    /// <summary> 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string </summary>
    let public GetFormat(id:string)(extra:string):string =
      Format_GetFormat_instance.Value.Invoke(id,extra)
  module public Command =
    let private Command_RenameCommand_instance = lazy RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Command::RenameCommand")
    /// <summary> 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令) </summary>
    let public RenameCommand(cmd:string)(newCmd:string):unit =
      Command_RenameCommand_instance.Value.Invoke(cmd,newCmd)
    let private Command_ExecuteInternalCommand_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Command::ExecuteInternalCommand")
    /// <summary> 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool </summary>
    let public ExecuteInternalCommand(playerXuid:string)(cmd:string):bool =
      Command_ExecuteInternalCommand_instance.Value.Invoke(playerXuid,cmd)
    let private Command_SetCommandDisabled_instance = lazy RemoteCallAPI.ImportAs<Action<string,string,string>>("PFLP", "Command::SetCommandDisabled")
    /// <summary> 设置命令禁用(可设置提示)(支持任意命令) </summary>
    let public SetCommandDisabled(playerXuid:string)(cmd:string)(feedback:string):unit =
      Command_SetCommandDisabled_instance.Value.Invoke(playerXuid,cmd,feedback)
    let private Command_SetCommandEnabled_instance = lazy RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Command::SetCommandEnabled")
    /// <summary> 设置命令启用 </summary>
    let public SetCommandEnabled(playerXuid:string)(cmd:string):unit =
      Command_SetCommandEnabled_instance.Value.Invoke(playerXuid,cmd)
  module public Language =
    let private Language_Translate_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Language::Translate")
    /// <summary> 翻译 返回值类型：string </summary>
    let public Translate(fromLanguage:string)(toLanguage:string)(text:string):string =
      Language_Translate_instance.Value.Invoke(fromLanguage,toLanguage,text)
  module public ChatEx =
    let private ChatEx_SetNickName_instance = lazy RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetNickName")
    /// <summary> 设置玩家昵称 </summary>
    let public SetNickName(playerXuid:string)(nickName:string):unit =
      ChatEx_SetNickName_instance.Value.Invoke(playerXuid,nickName)
    let private ChatEx_SetFakeName_instance = lazy RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetFakeName")
    /// <summary> 设置玩家聊天时的名字 </summary>
    let public SetFakeName(playerXuid:string)(fakeName:string):unit =
      ChatEx_SetFakeName_instance.Value.Invoke(playerXuid,fakeName)
    let private ChatEx_SetEnd_instance = lazy RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetEnd")
    /// <summary> 设置玩家聊天消息后缀 </summary>
    let public SetEnd(playerXuid:string)(endStr:string):unit =
      ChatEx_SetEnd_instance.Value.Invoke(playerXuid,endStr)
    let private ChatEx_SetStart_instance = lazy RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetStart")
    /// <summary> 设置玩家聊天消息前缀 </summary>
    let public SetStart(playerXuid:string)(startStr:string):unit =
      ChatEx_SetStart_instance.Value.Invoke(playerXuid,startStr)
    let private ChatEx_GetNickName_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetNickName")
    /// <summary> 获取玩家昵称 返回值类型：string </summary>
    let public GetNickName(playerXuid:string):string =
      ChatEx_GetNickName_instance.Value.Invoke(playerXuid)
    let private ChatEx_GetFakeName_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetFakeName")
    /// <summary> 获取玩家聊天时的名字 返回值类型：string </summary>
    let public GetFakeName(playerXuid:string):string =
      ChatEx_GetFakeName_instance.Value.Invoke(playerXuid)
    let private ChatEx_GetEnd_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetEnd")
    /// <summary> 获取玩家聊天消息后缀 返回值类型：string </summary>
    let public GetEnd(playerXuid:string):string =
      ChatEx_GetEnd_instance.Value.Invoke(playerXuid)
    let private ChatEx_GetStart_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetStart")
    /// <summary> 获取玩家聊天消息前缀 返回值类型：string </summary>
    let public GetStart(playerXuid:string):string =
      ChatEx_GetStart_instance.Value.Invoke(playerXuid)
  module public ParticlesGraphics =
    let private ParticlesGraphics_DrawBlock_instance = lazy RemoteCallAPI.ImportAs<Action<string,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBlock")
    /// <summary> 给指定方块描框 </summary>
    let public DrawBlock(playerXuid:string)(x:int)(y:int)(z:int)(r:float)(g:float)(b:float)(thickness:float)(time:float)(alpha:float):unit =
      ParticlesGraphics_DrawBlock_instance.Value.Invoke(playerXuid,x,y,z,r,g,b,thickness,time,alpha)
    let private ParticlesGraphics_DrawBorder_instance = lazy RemoteCallAPI.ImportAs<Action<string,int,int,int,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBorder")
    /// <summary> 给指定区域描框 </summary>
    let public DrawBorder(playerXuid:string)(x1:int)(y1:int)(z1:int)(x2:int)(y2:int)(z2:int)(r:float)(g:float)(b:float)(thickness:float)(time:float)(alpha:float):unit =
      ParticlesGraphics_DrawBorder_instance.Value.Invoke(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha)
  module public Lands =
    let private Lands_CheckCubeHasLand_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,bool>>("PFLP", "Lands::CheckCubeHasLand")
    /// <summary> 检查指定立方体区域(float)是否有领地 返回值类型：bool </summary>
    let public CheckCubeHasLand(x1:float)(y1:float)(z1:float)(x2:float)(y2:float)(z2:float)(dimensionId:int):bool =
      Lands_CheckCubeHasLand_instance.Value.Invoke(x1,y1,z1,x2,y2,z2,dimensionId)
    let private Lands_CheckCubeHasLandInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,bool>>("PFLP", "Lands::CheckCubeHasLandInt")
    /// <summary> 检查指定立方体区域(int)是否有领地 返回值类型：bool </summary>
    let public CheckCubeHasLandInt(x1:int)(y1:int)(z1:int)(x2:int)(y2:int)(z2:int)(dimensionId:int):bool =
      Lands_CheckCubeHasLandInt_instance.Value.Invoke(x1,y1,z1,x2,y2,z2,dimensionId)
    let private Lands_CheckPosHasLand_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,int,bool>>("PFLP", "Lands::CheckPosHasLand")
    /// <summary> 检查指定坐标(float)是否有领地 返回值类型：bool </summary>
    let public CheckPosHasLand(x:float)(y:float)(z:float)(dimensionId:int):bool =
      Lands_CheckPosHasLand_instance.Value.Invoke(x,y,z,dimensionId)
    let private Lands_CheckPosHasLandInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,bool>>("PFLP", "Lands::CheckPosHasLandInt")
    /// <summary> 检查指定坐标(int)是否有领地 返回值类型：bool </summary>
    let public CheckPosHasLandInt(x:int)(y:int)(z:int)(dimensionId:int):bool =
      Lands_CheckPosHasLandInt_instance.Value.Invoke(x,y,z,dimensionId)
    let private Lands_GetLandByCube_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,string>>("PFLP", "Lands::GetLandByCube")
    /// <summary> 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
    let public GetLandByCube(x1:float)(y1:float)(z1:float)(x2:float)(y2:float)(z2:float)(dimensionId:int):string =
      Lands_GetLandByCube_instance.Value.Invoke(x1,y1,z1,x2,y2,z2,dimensionId)
    let private Lands_GetLandByCubeInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string>>("PFLP", "Lands::GetLandByCubeInt")
    /// <summary> 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
    let public GetLandByCubeInt(x1:int)(y1:int)(z1:int)(x2:int)(y2:int)(z2:int)(dimensionId:int):string =
      Lands_GetLandByCubeInt_instance.Value.Invoke(x1,y1,z1,x2,y2,z2,dimensionId)
    let private Lands_GetLandByPos_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,int,string>>("PFLP", "Lands::GetLandByPos")
    /// <summary> 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
    let public GetLandByPos(x:float)(y:float)(z:float)(dimensionId:int):string =
      Lands_GetLandByPos_instance.Value.Invoke(x,y,z,dimensionId)
    let private Lands_GetLandByPosInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,string>>("PFLP", "Lands::GetLandByPosInt")
    /// <summary> 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
    let public GetLandByPosInt(x:int)(y:int)(z:int)(dimensionId:int):string =
      Lands_GetLandByPosInt_instance.Value.Invoke(x,y,z,dimensionId)
    let private Lands_GetLandInfoByCube_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,string>>("PFLP", "Lands::GetLandInfoByCube")
    /// <summary> 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
    let public GetLandInfoByCube(x1:float)(y1:float)(z1:float)(x2:float)(y2:float)(z2:float)(dimensionId:int):string =
      Lands_GetLandInfoByCube_instance.Value.Invoke(x1,y1,z1,x2,y2,z2,dimensionId)
    let private Lands_GetLandInfoByCubeInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string>>("PFLP", "Lands::GetLandInfoByCubeInt")
    /// <summary> 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
    let public GetLandInfoByCubeInt(x1:int)(y1:int)(z1:int)(x2:int)(y2:int)(z2:int)(dimensionId:int):string =
      Lands_GetLandInfoByCubeInt_instance.Value.Invoke(x1,y1,z1,x2,y2,z2,dimensionId)
    let private Lands_GetLandInfoByPos_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,int,string>>("PFLP", "Lands::GetLandInfoByPos")
    /// <summary> 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
    let public GetLandInfoByPos(x:float)(y:float)(z:float)(dimensionId:int):string =
      Lands_GetLandInfoByPos_instance.Value.Invoke(x,y,z,dimensionId)
    let private Lands_GetLandInfoByPosInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,string>>("PFLP", "Lands::GetLandInfoByPosInt")
    /// <summary> 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
    let public GetLandInfoByPosInt(x:int)(y:int)(z:int)(dimensionId:int):string =
      Lands_GetLandInfoByPosInt_instance.Value.Invoke(x,y,z,dimensionId)
    let private Lands_SetLandInfoByPos_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::SetLandInfoByPos")
    /// <summary> 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
    let public SetLandInfoByPos(x:float)(y:float)(z:float)(dimensionId:int)(landinfo:string):bool =
      Lands_SetLandInfoByPos_instance.Value.Invoke(x,y,z,dimensionId,landinfo)
    let private Lands_SetLandInfoByPosInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::SetLandInfoByPosInt")
    /// <summary> 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
    let public SetLandInfoByPosInt(x:int)(y:int)(z:int)(dimensionId:int)(landinfo:string):bool =
      Lands_SetLandInfoByPosInt_instance.Value.Invoke(x,y,z,dimensionId,landinfo)
    let private Lands_CreateLand2D_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,int,string,bool>>("PFLP", "Lands::CreateLand2D")
    /// <summary> 新建领地 返回值类型：bool </summary>
    let public CreateLand2D(x1:int)(z1:int)(x2:int)(z2:int)(dimensionId:int)(playerXuid:string):bool =
      Lands_CreateLand2D_instance.Value.Invoke(x1,z1,x2,z2,dimensionId,playerXuid)
    let private Lands_CreateLand3D_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string,bool>>("PFLP", "Lands::CreateLand3D")
    /// <summary> 新建领地 返回值类型：bool </summary>
    let public CreateLand3D(x1:int)(y1:int)(z1:int)(x2:int)(y2:int)(z2:int)(dimensionId:int)(playerXuid:string):bool =
      Lands_CreateLand3D_instance.Value.Invoke(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid)
    let private Lands_DeleteLandByPos_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,int,bool>>("PFLP", "Lands::DeleteLandByPos")
    /// <summary> 删除指定坐标(float)的领地 返回值类型：bool </summary>
    let public DeleteLandByPos(x:float)(y:float)(z:float)(dimensionId:int):bool =
      Lands_DeleteLandByPos_instance.Value.Invoke(x,y,z,dimensionId)
    let private Lands_DeleteLandByPosInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,bool>>("PFLP", "Lands::DeleteLandByPosInt")
    /// <summary> 删除指定坐标(int)的领地 返回值类型：bool </summary>
    let public DeleteLandByPosInt(x:int)(y:int)(z:int)(dimensionId:int):bool =
      Lands_DeleteLandByPosInt_instance.Value.Invoke(x,y,z,dimensionId)
    let private Lands_GetLandPermissionByPos_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,int,string,string>>("PFLP", "Lands::GetLandPermissionByPos")
    /// <summary> 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string </summary>
    let public GetLandPermissionByPos(x:float)(y:float)(z:float)(dimensionId:int)(playerXuid:string):string =
      Lands_GetLandPermissionByPos_instance.Value.Invoke(x,y,z,dimensionId,playerXuid)
    let private Lands_GetLandPermissionByPosInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,string,string>>("PFLP", "Lands::GetLandPermissionByPosInt")
    /// <summary> 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string </summary>
    let public GetLandPermissionByPosInt(x:int)(y:int)(z:int)(dimensionId:int)(playerXuid:string):string =
      Lands_GetLandPermissionByPosInt_instance.Value.Invoke(x,y,z,dimensionId,playerXuid)
    let private Lands_CheckLandPermissionByPos_instance = lazy RemoteCallAPI.ImportAs<Func<string,float,float,float,int,string,bool>>("PFLP", "Lands::CheckLandPermissionByPos")
    /// <summary> 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool </summary>
    let public CheckLandPermissionByPos(permissionId:string)(x:float)(y:float)(z:float)(dimensionId:int)(playerXuid:string):bool =
      Lands_CheckLandPermissionByPos_instance.Value.Invoke(permissionId,x,y,z,dimensionId,playerXuid)
    let private Lands_CheckLandPermissionByPosInt_instance = lazy RemoteCallAPI.ImportAs<Func<string,int,int,int,int,string,bool>>("PFLP", "Lands::CheckLandPermissionByPosInt")
    /// <summary> 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool </summary>
    let public CheckLandPermissionByPosInt(permissionId:string)(x:int)(y:int)(z:int)(dimensionId:int)(playerXuid:string):bool =
      Lands_CheckLandPermissionByPosInt_instance.Value.Invoke(permissionId,x,y,z,dimensionId,playerXuid)
    let private Lands_CheckPlayerIsLandOwnerByPos_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::CheckPlayerIsLandOwnerByPos")
    /// <summary> 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool </summary>
    let public CheckPlayerIsLandOwnerByPos(x:float)(y:float)(z:float)(dimensionId:int)(playerXuid:string):bool =
      Lands_CheckPlayerIsLandOwnerByPos_instance.Value.Invoke(x,y,z,dimensionId,playerXuid)
    let private Lands_CheckPlayerIsLandOwnerByPosInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt")
    /// <summary> 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool </summary>
    let public CheckPlayerIsLandOwnerByPosInt(x:int)(y:int)(z:int)(dimensionId:int)(playerXuid:string):bool =
      Lands_CheckPlayerIsLandOwnerByPosInt_instance.Value.Invoke(x,y,z,dimensionId,playerXuid)
    let private Lands_CheckIsLandSharedToPlayerByPos_instance = lazy RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::CheckIsLandSharedToPlayerByPos")
    /// <summary> 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool </summary>
    let public CheckIsLandSharedToPlayerByPos(x:float)(y:float)(z:float)(dimensionId:int)(playerXuid:string):bool =
      Lands_CheckIsLandSharedToPlayerByPos_instance.Value.Invoke(x,y,z,dimensionId,playerXuid)
    let private Lands_CheckIsLandSharedToPlayerByPosInt_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt")
    /// <summary> 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool </summary>
    let public CheckIsLandSharedToPlayerByPosInt(x:int)(y:int)(z:int)(dimensionId:int)(playerXuid:string):bool =
      Lands_CheckIsLandSharedToPlayerByPosInt_instance.Value.Invoke(x,y,z,dimensionId,playerXuid)
    let private Lands_CheckPlayerHasCreateChestPermission_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerHasCreateChestPermission")
    /// <summary> (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool </summary>
    let public CheckPlayerHasCreateChestPermission(x:int)(y:int)(z:int)(dimensionId:int)(playerXuid:string):bool =
      Lands_CheckPlayerHasCreateChestPermission_instance.Value.Invoke(x,y,z,dimensionId,playerXuid)
    let private Lands_CheckPlayerHasOpenChestPermission_instance = lazy RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerHasOpenChestPermission")
    /// <summary> (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool </summary>
    let public CheckPlayerHasOpenChestPermission(x:int)(y:int)(z:int)(dimensionId:int)(playerXuid:string):bool =
      Lands_CheckPlayerHasOpenChestPermission_instance.Value.Invoke(x,y,z,dimensionId,playerXuid)
    let private Lands_GetPlayerAllPermissionGroupId_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetPlayerAllPermissionGroupId")
    /// <summary> 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string </summary>
    let public GetPlayerAllPermissionGroupId(playerXuid:string):string =
      Lands_GetPlayerAllPermissionGroupId_instance.Value.Invoke(playerXuid)
    let private Lands_GetPlayerPermissionGroup_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Lands::GetPlayerPermissionGroup")
    /// <summary> 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string </summary>
    let public GetPlayerPermissionGroup(playerXuid:string)(permissionGroupId:string):string =
      Lands_GetPlayerPermissionGroup_instance.Value.Invoke(playerXuid,permissionGroupId)
    let private Lands_DeletePlayerPermissionGroup_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Lands::DeletePlayerPermissionGroup")
    /// <summary> 删玩家权限组(指定ID) 返回值类型：bool </summary>
    let public DeletePlayerPermissionGroup(playerXuid:string)(permissionGroupId:string):bool =
      Lands_DeletePlayerPermissionGroup_instance.Value.Invoke(playerXuid,permissionGroupId)
    let private Lands_EditPlayerPermissionGroup_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string,bool>>("PFLP", "Lands::EditPlayerPermissionGroup")
    /// <summary> 修改家权限组内容(指定ID) 返回值类型：bool </summary>
    let public EditPlayerPermissionGroup(playerXuid:string)(permissionGroupId:string)(jsonString:string):bool =
      Lands_EditPlayerPermissionGroup_instance.Value.Invoke(playerXuid,permissionGroupId,jsonString)
    let private Lands_AddPlayerPermissionGroup_instance = lazy RemoteCallAPI.ImportAs<Func<string,string,string,bool>>("PFLP", "Lands::AddPlayerPermissionGroup")
    /// <summary> 添加权限组 返回值类型：bool </summary>
    let public AddPlayerPermissionGroup(playerXuid:string)(permissionGroupId:string)(jsonString:string):bool =
      Lands_AddPlayerPermissionGroup_instance.Value.Invoke(playerXuid,permissionGroupId,jsonString)
    let private Lands_GetLandsOwnedByPlayer_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetLandsOwnedByPlayer")
    /// <summary> 取玩家拥有的领地 返回值类型：string </summary>
    let public GetLandsOwnedByPlayer(playerXuid:string):string =
      Lands_GetLandsOwnedByPlayer_instance.Value.Invoke(playerXuid)
    let private Lands_GetLandsSharedToPlayer_instance = lazy RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetLandsSharedToPlayer")
    /// <summary> 取共享给玩家的领地 返回值类型：string </summary>
    let public GetLandsSharedToPlayer(playerXuid:string):string =
      Lands_GetLandsSharedToPlayer_instance.Value.Invoke(playerXuid)
  module public FloatText =
    let private FloatText_Add_instance = lazy RemoteCallAPI.ImportAs<Func<string,float,float,float,string,int>>("PFLP", "FloatText::Add")
    /// <summary> 创建浮空字(给玩家发包) 返回值类型：int </summary>
    let public Add(playerXuid:string)(x:float)(y:float)(z:float)(text:string):int =
      FloatText_Add_instance.Value.Invoke(playerXuid,x,y,z,text)
    let private FloatText_Remove_instance = lazy RemoteCallAPI.ImportAs<Action<string,int>>("PFLP", "FloatText::Remove")
    /// <summary> 移除浮空字(给玩家发包) </summary>
    let public Remove(playerXuid:string)(id:int):unit =
      FloatText_Remove_instance.Value.Invoke(playerXuid,id)
  module public Money =
    let private Money_Get_instance = lazy RemoteCallAPI.ImportAs<Func<string,int64>>("PFLP", "Money::Get")
    /// <summary> 获取玩家(指定玩家名)金钱 返回值类型：long </summary>
    let public Get(playerXuid:string):int64 =
      Money_Get_instance.Value.Invoke(playerXuid)
    let private Money_Add_instance = lazy RemoteCallAPI.ImportAs<Action<string,int64,string>>("PFLP", "Money::Add")
    /// <summary> 给玩家(指定玩家名)加钱 </summary>
    let public Add(playerXuid:string)(count:int64)(info:string):unit =
      Money_Add_instance.Value.Invoke(playerXuid,count,info)
    let private Money_Remove_instance = lazy RemoteCallAPI.ImportAs<Action<string,int64,string>>("PFLP", "Money::Remove")
    /// <summary> 给玩家(指定玩家名)减钱 </summary>
    let public Remove(playerXuid:string)(count:int64)(info:string):unit =
      Money_Remove_instance.Value.Invoke(playerXuid,count,info)
  module public Internal =

```
</details>

---