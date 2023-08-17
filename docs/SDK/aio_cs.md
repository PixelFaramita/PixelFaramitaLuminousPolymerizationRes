---
title: 汇总 C# SDK
icon: laptop-code
order: 1002
---


---
<details><summary>C# imports / 直接导入</summary>

``` cs
using RemoteCallAPI = LiteLoader.RemoteCall.RemoteCallAPI;

// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
var General_SetConfig = RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "General::SetConfig");
// 获取全局配置文件（JSON字符串） 返回值类型：string
var General_GetConfig = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "General::GetConfig");
// 重新加载所有功能的配置文件
var General_Reload = RemoteCallAPI.ImportAs<Action>("PFLP", "General::Reload");
// 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
var Location_GetAllCacheData = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Location::GetAllCacheData");
//  设置IP归属地缓存
var Location_SetIpLocation = RemoteCallAPI.ImportAs<Action<string,string,string,string,string,string,string>>("PFLP", "Location::SetIpLocation");
// 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送 返回值类型：int
var Teleport_StartNew = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Teleport::StartNew");
// 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string
var Teleport_GetTpaState = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetTpaState");
// 获取指定玩家的Home（JSON字符串） 返回值类型：string
var Teleport_GetHome = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetHome");
// 获取服务器的全部传送点（JSON字符串） 返回值类型：string
var Teleport_GetWarp = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Teleport::GetWarp");
// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
var Statistics_GetPlayerStatistics = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Statistics::GetPlayerStatistics");
// 设定指定玩家的统计数据（JSON字符串）
var Statistics_SetPlayerStatistics = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Statistics::SetPlayerStatistics");
// 获取变量 返回值类型：string
var Format_GetVariableString = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetVariableString");
// 获取变量，但是强制返回int类型 返回值类型：int
var Format_GetVariableInt = RemoteCallAPI.ImportAs<Func<string,string,int>>("PFLP", "Format::GetVariableInt");
// 获取变量，但是强制返回float类型 返回值类型：float
var Format_GetVariableFloat = RemoteCallAPI.ImportAs<Func<string,string,float>>("PFLP", "Format::GetVariableFloat");
// 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
var Format_FormatRawString = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::FormatRawString");
// 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
var Format_DefineFormat = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Format::DefineFormat");
// 移除格式化定义（返回true为存在并移除） 返回值类型：bool
var Format_RemoveFormat = RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "Format::RemoveFormat");
// 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
var Format_GetFormatWithPlayer = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetFormatWithPlayer");
// 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
var Format_GetFormatWithPlayerLang = RemoteCallAPI.ImportAs<Func<string,string,string,string,string>>("PFLP", "Format::GetFormatWithPlayerLang");
// 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
var Format_GetFormat = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::GetFormat");
// 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
var Command_RenameCommand = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Command::RenameCommand");
// 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
var Command_ExecuteInternalCommand = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Command::ExecuteInternalCommand");
// 设置命令禁用(可设置提示)(支持任意命令)
var Command_SetCommandDisabled = RemoteCallAPI.ImportAs<Action<string,string,string>>("PFLP", "Command::SetCommandDisabled");
// 设置命令启用
var Command_SetCommandEnabled = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Command::SetCommandEnabled");
// 翻译 返回值类型：string
var Language_Translate = RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Language::Translate");
// 设置玩家昵称
var ChatEx_SetNickName = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetNickName");
// 设置玩家聊天时的名字
var ChatEx_SetFakeName = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetFakeName");
// 设置玩家聊天消息后缀
var ChatEx_SetEnd = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetEnd");
// 设置玩家聊天消息前缀
var ChatEx_SetStart = RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetStart");
// 获取玩家昵称 返回值类型：string
var ChatEx_GetNickName = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetNickName");
// 获取玩家聊天时的名字 返回值类型：string
var ChatEx_GetFakeName = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetFakeName");
// 获取玩家聊天消息后缀 返回值类型：string
var ChatEx_GetEnd = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetEnd");
// 获取玩家聊天消息前缀 返回值类型：string
var ChatEx_GetStart = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetStart");
// 给指定方块描框
var ParticlesGraphics_DrawBlock = RemoteCallAPI.ImportAs<Action<string,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBlock");
// 给指定区域描框
var ParticlesGraphics_DrawBorder = RemoteCallAPI.ImportAs<Action<string,int,int,int,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBorder");
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
var Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,bool>>("PFLP", "Lands::CheckCubeHasLand");
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
var Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,bool>>("PFLP", "Lands::CheckCubeHasLandInt");
// 检查指定坐标(float)是否有领地 返回值类型：bool
var Lands_CheckPosHasLand = RemoteCallAPI.ImportAs<Func<float,float,float,int,bool>>("PFLP", "Lands::CheckPosHasLand");
// 检查指定坐标(int)是否有领地 返回值类型：bool
var Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,bool>>("PFLP", "Lands::CheckPosHasLandInt");
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByCube = RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,string>>("PFLP", "Lands::GetLandByCube");
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string>>("PFLP", "Lands::GetLandByCubeInt");
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string>>("PFLP", "Lands::GetLandByPos");
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string>>("PFLP", "Lands::GetLandByPosInt");
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,string>>("PFLP", "Lands::GetLandInfoByCube");
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string>>("PFLP", "Lands::GetLandInfoByCubeInt");
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string>>("PFLP", "Lands::GetLandInfoByPos");
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
var Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string>>("PFLP", "Lands::GetLandInfoByPosInt");
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
var Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::SetLandInfoByPos");
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
var Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::SetLandInfoByPosInt");
// 新建领地 返回值类型：bool
var Lands_CreateLand2D = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,string,bool>>("PFLP", "Lands::CreateLand2D");
// 新建领地 返回值类型：bool
var Lands_CreateLand3D = RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string,bool>>("PFLP", "Lands::CreateLand3D");
// 删除指定坐标(float)的领地 返回值类型：bool
var Lands_DeleteLandByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,bool>>("PFLP", "Lands::DeleteLandByPos");
// 删除指定坐标(int)的领地 返回值类型：bool
var Lands_DeleteLandByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,bool>>("PFLP", "Lands::DeleteLandByPosInt");
// 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
var Lands_GetLandPermissionByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string,string>>("PFLP", "Lands::GetLandPermissionByPos");
// 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
var Lands_GetLandPermissionByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,string>>("PFLP", "Lands::GetLandPermissionByPosInt");
// 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
var Lands_CheckLandPermissionByPos = RemoteCallAPI.ImportAs<Func<string,float,float,float,int,string,bool>>("PFLP", "Lands::CheckLandPermissionByPos");
// 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
var Lands_CheckLandPermissionByPosInt = RemoteCallAPI.ImportAs<Func<string,int,int,int,int,string,bool>>("PFLP", "Lands::CheckLandPermissionByPosInt");
// 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
var Lands_CheckPlayerIsLandOwnerByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::CheckPlayerIsLandOwnerByPos");
// 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
var Lands_CheckPlayerIsLandOwnerByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt");
// 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
var Lands_CheckIsLandSharedToPlayerByPos = RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::CheckIsLandSharedToPlayerByPos");
// 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
var Lands_CheckIsLandSharedToPlayerByPosInt = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt");
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
var Lands_CheckPlayerHasCreateChestPermission = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerHasCreateChestPermission");
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
var Lands_CheckPlayerHasOpenChestPermission = RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerHasOpenChestPermission");
// 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
var Lands_GetPlayerAllPermissionGroupId = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetPlayerAllPermissionGroupId");
// 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
var Lands_GetPlayerPermissionGroup = RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Lands::GetPlayerPermissionGroup");
// 删玩家权限组(指定ID) 返回值类型：bool
var Lands_DeletePlayerPermissionGroup = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Lands::DeletePlayerPermissionGroup");
// 修改家权限组内容(指定ID) 返回值类型：bool
var Lands_EditPlayerPermissionGroup = RemoteCallAPI.ImportAs<Func<string,string,string,bool>>("PFLP", "Lands::EditPlayerPermissionGroup");
// 添加权限组 返回值类型：bool
var Lands_AddPlayerPermissionGroup = RemoteCallAPI.ImportAs<Func<string,string,string,bool>>("PFLP", "Lands::AddPlayerPermissionGroup");
// 取玩家拥有的领地 返回值类型：string
var Lands_GetLandsOwnedByPlayer = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetLandsOwnedByPlayer");
// 取共享给玩家的领地 返回值类型：string
var Lands_GetLandsSharedToPlayer = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetLandsSharedToPlayer");
// 创建浮空字(给玩家发包) 返回值类型：int
var FloatText_Add = RemoteCallAPI.ImportAs<Func<string,float,float,float,string,int>>("PFLP", "FloatText::Add");
// 移除浮空字(给玩家发包)
var FloatText_Remove = RemoteCallAPI.ImportAs<Action<string,int>>("PFLP", "FloatText::Remove");
// 获取玩家(指定玩家名)金钱 返回值类型：long
var Money_Get = RemoteCallAPI.ImportAs<Func<string,long>>("PFLP", "Money::Get");
// 给玩家(指定玩家名)加钱
var Money_Add = RemoteCallAPI.ImportAs<Action<string,long,string>>("PFLP", "Money::Add");
// 给玩家(指定玩家名)减钱
var Money_Remove = RemoteCallAPI.ImportAs<Action<string,long,string>>("PFLP", "Money::Remove");
// 获取所有礼包的礼包名（返回json字符串数组） 返回值类型：string
var GiftCode_GetAllPackName = RemoteCallAPI.ImportAs<Func<string>>("PFLP", "GiftCode::GetAllPackName");
// 获取指定礼包的所有可用的兑换码（返回json字符串数组） 返回值类型：string
var GiftCode_GetAvailableCode = RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "GiftCode::GetAvailableCode");
// 给指定礼包增加兑换码 返回值类型：bool
var GiftCode_AddCode = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "GiftCode::AddCode");
// 删除指定礼包的指定兑换码 返回值类型：bool
var GiftCode_RemoveCode = RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "GiftCode::RemoveCode");
// 删除指定礼包的所有可用的兑换码（返回json字符串数组）
var GiftCode_ClearCode = RemoteCallAPI.ImportAs<Action<string>>("PFLP", "GiftCode::ClearCode");

```
</details>
<details><summary>C# class / C#静态类定义（推荐）</summary>

``` cs
using RemoteCallAPI = LiteLoader.RemoteCall.RemoteCallAPI;

internal static class PFLP {
	public static class General {
		private static Lazy<Func<string,bool>>  General_SetConfig_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "General::SetConfig"));
		/// <summary> 设置全局配置文件（要求JSON字符串） 返回值类型：bool </summary>
		public static bool SetConfig(string jsonStr) {
			return General_SetConfig_instance.Value(jsonStr);
		}
		private static Lazy<Func<string>>  General_GetConfig_instance = new(()=> RemoteCallAPI.ImportAs<Func<string>>("PFLP", "General::GetConfig"));
		/// <summary> 获取全局配置文件（JSON字符串） 返回值类型：string </summary>
		public static string GetConfig() {
			return General_GetConfig_instance.Value();
		}
		private static Lazy<Action>  General_Reload_instance = new(()=> RemoteCallAPI.ImportAs<Action>("PFLP", "General::Reload"));
		/// <summary> 重新加载所有功能的配置文件 </summary>
		public static void Reload() {
			General_Reload_instance.Value();
		}
	}
	public static class Location {
		private static Lazy<Func<string>>  Location_GetAllCacheData_instance = new(()=> RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Location::GetAllCacheData"));
		/// <summary> 获取全部IP归属地缓存（JSON字符串） 返回值类型：string </summary>
		public static string GetAllCacheData() {
			return Location_GetAllCacheData_instance.Value();
		}
		private static Lazy<Action<string,string,string,string,string,string,string>>  Location_SetIpLocation_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string,string,string,string,string,string>>("PFLP", "Location::SetIpLocation"));
		/// <summary>  设置IP归属地缓存 </summary>
		public static void SetIpLocation(string ip,string country,string province,string city,string area,string isp,string language) {
			Location_SetIpLocation_instance.Value(ip,country,province,city,area,isp,language);
		}
	}
	public static class Teleport {
		private static Lazy<Func<string,float,float,float,int,int>>  Teleport_StartNew_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,float,float,float,int,int>>("PFLP", "Teleport::StartNew"));
		/// <summary> 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送 返回值类型：int </summary>
		public static int StartNew(string playerXuid,float x,float y,float z,int dimensionId) {
			return Teleport_StartNew_instance.Value(playerXuid,x,y,z,dimensionId);
		}
		private static Lazy<Func<string,string>>  Teleport_GetTpaState_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetTpaState"));
		/// <summary> 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string </summary>
		public static string GetTpaState(string playerXuid) {
			return Teleport_GetTpaState_instance.Value(playerXuid);
		}
		private static Lazy<Func<string,string>>  Teleport_GetHome_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Teleport::GetHome"));
		/// <summary> 获取指定玩家的Home（JSON字符串） 返回值类型：string </summary>
		public static string GetHome(string playerXuid) {
			return Teleport_GetHome_instance.Value(playerXuid);
		}
		private static Lazy<Func<string>>  Teleport_GetWarp_instance = new(()=> RemoteCallAPI.ImportAs<Func<string>>("PFLP", "Teleport::GetWarp"));
		/// <summary> 获取服务器的全部传送点（JSON字符串） 返回值类型：string </summary>
		public static string GetWarp() {
			return Teleport_GetWarp_instance.Value();
		}
	}
	public static class Statistics {
		private static Lazy<Func<string,string>>  Statistics_GetPlayerStatistics_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Statistics::GetPlayerStatistics"));
		/// <summary> 获取指定玩家的统计数据（JSON字符串） 返回值类型：string </summary>
		public static string GetPlayerStatistics(string playerXuid) {
			return Statistics_GetPlayerStatistics_instance.Value(playerXuid);
		}
		private static Lazy<Action<string,string>>  Statistics_SetPlayerStatistics_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Statistics::SetPlayerStatistics"));
		/// <summary> 设定指定玩家的统计数据（JSON字符串） </summary>
		public static void SetPlayerStatistics(string playerXuid,string newData) {
			Statistics_SetPlayerStatistics_instance.Value(playerXuid,newData);
		}
	}
	public static class Format {
		private static Lazy<Func<string,string,string,string>>  Format_GetVariableString_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetVariableString"));
		/// <summary> 获取变量 返回值类型：string </summary>
		public static string GetVariableString(string playerXuid,string name,string format) {
			return Format_GetVariableString_instance.Value(playerXuid,name,format);
		}
		private static Lazy<Func<string,string,int>>  Format_GetVariableInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,int>>("PFLP", "Format::GetVariableInt"));
		/// <summary> 获取变量，但是强制返回int类型 返回值类型：int </summary>
		public static int GetVariableInt(string playerXuid,string name) {
			return Format_GetVariableInt_instance.Value(playerXuid,name);
		}
		private static Lazy<Func<string,string,float>>  Format_GetVariableFloat_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,float>>("PFLP", "Format::GetVariableFloat"));
		/// <summary> 获取变量，但是强制返回float类型 返回值类型：float </summary>
		public static float GetVariableFloat(string playerXuid,string name) {
			return Format_GetVariableFloat_instance.Value(playerXuid,name);
		}
		private static Lazy<Func<string,string,string>>  Format_FormatRawString_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::FormatRawString"));
		/// <summary> 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string </summary>
		public static string FormatRawString(string playerXuid,string rawFormat) {
			return Format_FormatRawString_instance.Value(playerXuid,rawFormat);
		}
		private static Lazy<Func<string,string,bool>>  Format_DefineFormat_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Format::DefineFormat"));
		/// <summary> 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool </summary>
		public static bool DefineFormat(string id,string rawFormat) {
			return Format_DefineFormat_instance.Value(id,rawFormat);
		}
		private static Lazy<Func<string,bool>>  Format_RemoveFormat_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,bool>>("PFLP", "Format::RemoveFormat"));
		/// <summary> 移除格式化定义（返回true为存在并移除） 返回值类型：bool </summary>
		public static bool RemoveFormat(string id) {
			return Format_RemoveFormat_instance.Value(id);
		}
		private static Lazy<Func<string,string,string,string>>  Format_GetFormatWithPlayer_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Format::GetFormatWithPlayer"));
		/// <summary> 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string </summary>
		public static string GetFormatWithPlayer(string id,string playerXuid,string extra) {
			return Format_GetFormatWithPlayer_instance.Value(id,playerXuid,extra);
		}
		private static Lazy<Func<string,string,string,string,string>>  Format_GetFormatWithPlayerLang_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string,string,string>>("PFLP", "Format::GetFormatWithPlayerLang"));
		/// <summary> 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string </summary>
		public static string GetFormatWithPlayerLang(string id,string playerXuid,string playerLangXuid,string extra) {
			return Format_GetFormatWithPlayerLang_instance.Value(id,playerXuid,playerLangXuid,extra);
		}
		private static Lazy<Func<string,string,string>>  Format_GetFormat_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Format::GetFormat"));
		/// <summary> 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string </summary>
		public static string GetFormat(string id,string extra) {
			return Format_GetFormat_instance.Value(id,extra);
		}
	}
	public static class Command {
		private static Lazy<Action<string,string>>  Command_RenameCommand_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Command::RenameCommand"));
		/// <summary> 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令) </summary>
		public static void RenameCommand(string cmd,string newCmd) {
			Command_RenameCommand_instance.Value(cmd,newCmd);
		}
		private static Lazy<Func<string,string,bool>>  Command_ExecuteInternalCommand_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Command::ExecuteInternalCommand"));
		/// <summary> 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool </summary>
		public static bool ExecuteInternalCommand(string playerXuid,string cmd) {
			return Command_ExecuteInternalCommand_instance.Value(playerXuid,cmd);
		}
		private static Lazy<Action<string,string,string>>  Command_SetCommandDisabled_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string,string>>("PFLP", "Command::SetCommandDisabled"));
		/// <summary> 设置命令禁用(可设置提示)(支持任意命令) </summary>
		public static void SetCommandDisabled(string playerXuid,string cmd,string feedback) {
			Command_SetCommandDisabled_instance.Value(playerXuid,cmd,feedback);
		}
		private static Lazy<Action<string,string>>  Command_SetCommandEnabled_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "Command::SetCommandEnabled"));
		/// <summary> 设置命令启用 </summary>
		public static void SetCommandEnabled(string playerXuid,string cmd) {
			Command_SetCommandEnabled_instance.Value(playerXuid,cmd);
		}
	}
	public static class Language {
		private static Lazy<Func<string,string,string,string>>  Language_Translate_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string,string>>("PFLP", "Language::Translate"));
		/// <summary> 翻译 返回值类型：string </summary>
		public static string Translate(string fromLanguage,string toLanguage,string text) {
			return Language_Translate_instance.Value(fromLanguage,toLanguage,text);
		}
	}
	public static class ChatEx {
		private static Lazy<Action<string,string>>  ChatEx_SetNickName_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetNickName"));
		/// <summary> 设置玩家昵称 </summary>
		public static void SetNickName(string playerXuid,string nickName) {
			ChatEx_SetNickName_instance.Value(playerXuid,nickName);
		}
		private static Lazy<Action<string,string>>  ChatEx_SetFakeName_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetFakeName"));
		/// <summary> 设置玩家聊天时的名字 </summary>
		public static void SetFakeName(string playerXuid,string fakeName) {
			ChatEx_SetFakeName_instance.Value(playerXuid,fakeName);
		}
		private static Lazy<Action<string,string>>  ChatEx_SetEnd_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetEnd"));
		/// <summary> 设置玩家聊天消息后缀 </summary>
		public static void SetEnd(string playerXuid,string endStr) {
			ChatEx_SetEnd_instance.Value(playerXuid,endStr);
		}
		private static Lazy<Action<string,string>>  ChatEx_SetStart_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,string>>("PFLP", "ChatEx::SetStart"));
		/// <summary> 设置玩家聊天消息前缀 </summary>
		public static void SetStart(string playerXuid,string startStr) {
			ChatEx_SetStart_instance.Value(playerXuid,startStr);
		}
		private static Lazy<Func<string,string>>  ChatEx_GetNickName_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetNickName"));
		/// <summary> 获取玩家昵称 返回值类型：string </summary>
		public static string GetNickName(string playerXuid) {
			return ChatEx_GetNickName_instance.Value(playerXuid);
		}
		private static Lazy<Func<string,string>>  ChatEx_GetFakeName_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetFakeName"));
		/// <summary> 获取玩家聊天时的名字 返回值类型：string </summary>
		public static string GetFakeName(string playerXuid) {
			return ChatEx_GetFakeName_instance.Value(playerXuid);
		}
		private static Lazy<Func<string,string>>  ChatEx_GetEnd_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetEnd"));
		/// <summary> 获取玩家聊天消息后缀 返回值类型：string </summary>
		public static string GetEnd(string playerXuid) {
			return ChatEx_GetEnd_instance.Value(playerXuid);
		}
		private static Lazy<Func<string,string>>  ChatEx_GetStart_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "ChatEx::GetStart"));
		/// <summary> 获取玩家聊天消息前缀 返回值类型：string </summary>
		public static string GetStart(string playerXuid) {
			return ChatEx_GetStart_instance.Value(playerXuid);
		}
	}
	public static class ParticlesGraphics {
		private static Lazy<Action<string,int,int,int,float,float,float,float,float,float>>  ParticlesGraphics_DrawBlock_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBlock"));
		/// <summary> 给指定方块描框 </summary>
		public static void DrawBlock(string playerXuid,int x,int y,int z,float r,float g,float b,float thickness,float time,float alpha) {
			ParticlesGraphics_DrawBlock_instance.Value(playerXuid,x,y,z,r,g,b,thickness,time,alpha);
		}
		private static Lazy<Action<string,int,int,int,int,int,int,float,float,float,float,float,float>>  ParticlesGraphics_DrawBorder_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,int,int,int,int,int,int,float,float,float,float,float,float>>("PFLP", "ParticlesGraphics::DrawBorder"));
		/// <summary> 给指定区域描框 </summary>
		public static void DrawBorder(string playerXuid,int x1,int y1,int z1,int x2,int y2,int z2,float r,float g,float b,float thickness,float time,float alpha) {
			ParticlesGraphics_DrawBorder_instance.Value(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha);
		}
	}
	public static class Lands {
		private static Lazy<Func<float,float,float,float,float,float,int,bool>>  Lands_CheckCubeHasLand_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,bool>>("PFLP", "Lands::CheckCubeHasLand"));
		/// <summary> 检查指定立方体区域(float)是否有领地 返回值类型：bool </summary>
		public static bool CheckCubeHasLand(float x1,float y1,float z1,float x2,float y2,float z2,int dimensionId) {
			return Lands_CheckCubeHasLand_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<Func<int,int,int,int,int,int,int,bool>>  Lands_CheckCubeHasLandInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,bool>>("PFLP", "Lands::CheckCubeHasLandInt"));
		/// <summary> 检查指定立方体区域(int)是否有领地 返回值类型：bool </summary>
		public static bool CheckCubeHasLandInt(int x1,int y1,int z1,int x2,int y2,int z2,int dimensionId) {
			return Lands_CheckCubeHasLandInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<Func<float,float,float,int,bool>>  Lands_CheckPosHasLand_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,int,bool>>("PFLP", "Lands::CheckPosHasLand"));
		/// <summary> 检查指定坐标(float)是否有领地 返回值类型：bool </summary>
		public static bool CheckPosHasLand(float x,float y,float z,int dimensionId) {
			return Lands_CheckPosHasLand_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<Func<int,int,int,int,bool>>  Lands_CheckPosHasLandInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,bool>>("PFLP", "Lands::CheckPosHasLandInt"));
		/// <summary> 检查指定坐标(int)是否有领地 返回值类型：bool </summary>
		public static bool CheckPosHasLandInt(int x,int y,int z,int dimensionId) {
			return Lands_CheckPosHasLandInt_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<Func<float,float,float,float,float,float,int,string>>  Lands_GetLandByCube_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,string>>("PFLP", "Lands::GetLandByCube"));
		/// <summary> 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandByCube(float x1,float y1,float z1,float x2,float y2,float z2,int dimensionId) {
			return Lands_GetLandByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<Func<int,int,int,int,int,int,int,string>>  Lands_GetLandByCubeInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string>>("PFLP", "Lands::GetLandByCubeInt"));
		/// <summary> 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandByCubeInt(int x1,int y1,int z1,int x2,int y2,int z2,int dimensionId) {
			return Lands_GetLandByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<Func<float,float,float,int,string>>  Lands_GetLandByPos_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,int,string>>("PFLP", "Lands::GetLandByPos"));
		/// <summary> 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandByPos(float x,float y,float z,int dimensionId) {
			return Lands_GetLandByPos_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<Func<int,int,int,int,string>>  Lands_GetLandByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,string>>("PFLP", "Lands::GetLandByPosInt"));
		/// <summary> 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandByPosInt(int x,int y,int z,int dimensionId) {
			return Lands_GetLandByPosInt_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<Func<float,float,float,float,float,float,int,string>>  Lands_GetLandInfoByCube_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,float,float,float,int,string>>("PFLP", "Lands::GetLandInfoByCube"));
		/// <summary> 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandInfoByCube(float x1,float y1,float z1,float x2,float y2,float z2,int dimensionId) {
			return Lands_GetLandInfoByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<Func<int,int,int,int,int,int,int,string>>  Lands_GetLandInfoByCubeInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string>>("PFLP", "Lands::GetLandInfoByCubeInt"));
		/// <summary> 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandInfoByCubeInt(int x1,int y1,int z1,int x2,int y2,int z2,int dimensionId) {
			return Lands_GetLandInfoByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId);
		}
		private static Lazy<Func<float,float,float,int,string>>  Lands_GetLandInfoByPos_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,int,string>>("PFLP", "Lands::GetLandInfoByPos"));
		/// <summary> 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandInfoByPos(float x,float y,float z,int dimensionId) {
			return Lands_GetLandInfoByPos_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<Func<int,int,int,int,string>>  Lands_GetLandInfoByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,string>>("PFLP", "Lands::GetLandInfoByPosInt"));
		/// <summary> 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		public static string GetLandInfoByPosInt(int x,int y,int z,int dimensionId) {
			return Lands_GetLandInfoByPosInt_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<Func<float,float,float,int,string,bool>>  Lands_SetLandInfoByPos_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::SetLandInfoByPos"));
		/// <summary> 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		public static bool SetLandInfoByPos(float x,float y,float z,int dimensionId,string landinfo) {
			return Lands_SetLandInfoByPos_instance.Value(x,y,z,dimensionId,landinfo);
		}
		private static Lazy<Func<int,int,int,int,string,bool>>  Lands_SetLandInfoByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::SetLandInfoByPosInt"));
		/// <summary> 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		public static bool SetLandInfoByPosInt(int x,int y,int z,int dimensionId,string landinfo) {
			return Lands_SetLandInfoByPosInt_instance.Value(x,y,z,dimensionId,landinfo);
		}
		private static Lazy<Func<int,int,int,int,int,string,bool>>  Lands_CreateLand2D_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,int,string,bool>>("PFLP", "Lands::CreateLand2D"));
		/// <summary> 新建领地 返回值类型：bool </summary>
		public static bool CreateLand2D(int x1,int z1,int x2,int z2,int dimensionId,string playerXuid) {
			return Lands_CreateLand2D_instance.Value(x1,z1,x2,z2,dimensionId,playerXuid);
		}
		private static Lazy<Func<int,int,int,int,int,int,int,string,bool>>  Lands_CreateLand3D_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,int,int,int,string,bool>>("PFLP", "Lands::CreateLand3D"));
		/// <summary> 新建领地 返回值类型：bool </summary>
		public static bool CreateLand3D(int x1,int y1,int z1,int x2,int y2,int z2,int dimensionId,string playerXuid) {
			return Lands_CreateLand3D_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid);
		}
		private static Lazy<Func<float,float,float,int,bool>>  Lands_DeleteLandByPos_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,int,bool>>("PFLP", "Lands::DeleteLandByPos"));
		/// <summary> 删除指定坐标(float)的领地 返回值类型：bool </summary>
		public static bool DeleteLandByPos(float x,float y,float z,int dimensionId) {
			return Lands_DeleteLandByPos_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<Func<int,int,int,int,bool>>  Lands_DeleteLandByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,bool>>("PFLP", "Lands::DeleteLandByPosInt"));
		/// <summary> 删除指定坐标(int)的领地 返回值类型：bool </summary>
		public static bool DeleteLandByPosInt(int x,int y,int z,int dimensionId) {
			return Lands_DeleteLandByPosInt_instance.Value(x,y,z,dimensionId);
		}
		private static Lazy<Func<float,float,float,int,string,string>>  Lands_GetLandPermissionByPos_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,int,string,string>>("PFLP", "Lands::GetLandPermissionByPos"));
		/// <summary> 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string </summary>
		public static string GetLandPermissionByPos(float x,float y,float z,int dimensionId,string playerXuid) {
			return Lands_GetLandPermissionByPos_instance.Value(x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<int,int,int,int,string,string>>  Lands_GetLandPermissionByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,string,string>>("PFLP", "Lands::GetLandPermissionByPosInt"));
		/// <summary> 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string </summary>
		public static string GetLandPermissionByPosInt(int x,int y,int z,int dimensionId,string playerXuid) {
			return Lands_GetLandPermissionByPosInt_instance.Value(x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<string,float,float,float,int,string,bool>>  Lands_CheckLandPermissionByPos_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,float,float,float,int,string,bool>>("PFLP", "Lands::CheckLandPermissionByPos"));
		/// <summary> 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool </summary>
		public static bool CheckLandPermissionByPos(string permissionId,float x,float y,float z,int dimensionId,string playerXuid) {
			return Lands_CheckLandPermissionByPos_instance.Value(permissionId,x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<string,int,int,int,int,string,bool>>  Lands_CheckLandPermissionByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,int,int,int,int,string,bool>>("PFLP", "Lands::CheckLandPermissionByPosInt"));
		/// <summary> 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool </summary>
		public static bool CheckLandPermissionByPosInt(string permissionId,int x,int y,int z,int dimensionId,string playerXuid) {
			return Lands_CheckLandPermissionByPosInt_instance.Value(permissionId,x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<float,float,float,int,string,bool>>  Lands_CheckPlayerIsLandOwnerByPos_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::CheckPlayerIsLandOwnerByPos"));
		/// <summary> 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool </summary>
		public static bool CheckPlayerIsLandOwnerByPos(float x,float y,float z,int dimensionId,string playerXuid) {
			return Lands_CheckPlayerIsLandOwnerByPos_instance.Value(x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<int,int,int,int,string,bool>>  Lands_CheckPlayerIsLandOwnerByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt"));
		/// <summary> 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool </summary>
		public static bool CheckPlayerIsLandOwnerByPosInt(int x,int y,int z,int dimensionId,string playerXuid) {
			return Lands_CheckPlayerIsLandOwnerByPosInt_instance.Value(x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<float,float,float,int,string,bool>>  Lands_CheckIsLandSharedToPlayerByPos_instance = new(()=> RemoteCallAPI.ImportAs<Func<float,float,float,int,string,bool>>("PFLP", "Lands::CheckIsLandSharedToPlayerByPos"));
		/// <summary> 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool </summary>
		public static bool CheckIsLandSharedToPlayerByPos(float x,float y,float z,int dimensionId,string playerXuid) {
			return Lands_CheckIsLandSharedToPlayerByPos_instance.Value(x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<int,int,int,int,string,bool>>  Lands_CheckIsLandSharedToPlayerByPosInt_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt"));
		/// <summary> 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool </summary>
		public static bool CheckIsLandSharedToPlayerByPosInt(int x,int y,int z,int dimensionId,string playerXuid) {
			return Lands_CheckIsLandSharedToPlayerByPosInt_instance.Value(x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<int,int,int,int,string,bool>>  Lands_CheckPlayerHasCreateChestPermission_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerHasCreateChestPermission"));
		/// <summary> (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool </summary>
		public static bool CheckPlayerHasCreateChestPermission(int x,int y,int z,int dimensionId,string playerXuid) {
			return Lands_CheckPlayerHasCreateChestPermission_instance.Value(x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<int,int,int,int,string,bool>>  Lands_CheckPlayerHasOpenChestPermission_instance = new(()=> RemoteCallAPI.ImportAs<Func<int,int,int,int,string,bool>>("PFLP", "Lands::CheckPlayerHasOpenChestPermission"));
		/// <summary> (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool </summary>
		public static bool CheckPlayerHasOpenChestPermission(int x,int y,int z,int dimensionId,string playerXuid) {
			return Lands_CheckPlayerHasOpenChestPermission_instance.Value(x,y,z,dimensionId,playerXuid);
		}
		private static Lazy<Func<string,string>>  Lands_GetPlayerAllPermissionGroupId_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetPlayerAllPermissionGroupId"));
		/// <summary> 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string </summary>
		public static string GetPlayerAllPermissionGroupId(string playerXuid) {
			return Lands_GetPlayerAllPermissionGroupId_instance.Value(playerXuid);
		}
		private static Lazy<Func<string,string,string>>  Lands_GetPlayerPermissionGroup_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string>>("PFLP", "Lands::GetPlayerPermissionGroup"));
		/// <summary> 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string </summary>
		public static string GetPlayerPermissionGroup(string playerXuid,string permissionGroupId) {
			return Lands_GetPlayerPermissionGroup_instance.Value(playerXuid,permissionGroupId);
		}
		private static Lazy<Func<string,string,bool>>  Lands_DeletePlayerPermissionGroup_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "Lands::DeletePlayerPermissionGroup"));
		/// <summary> 删玩家权限组(指定ID) 返回值类型：bool </summary>
		public static bool DeletePlayerPermissionGroup(string playerXuid,string permissionGroupId) {
			return Lands_DeletePlayerPermissionGroup_instance.Value(playerXuid,permissionGroupId);
		}
		private static Lazy<Func<string,string,string,bool>>  Lands_EditPlayerPermissionGroup_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string,bool>>("PFLP", "Lands::EditPlayerPermissionGroup"));
		/// <summary> 修改家权限组内容(指定ID) 返回值类型：bool </summary>
		public static bool EditPlayerPermissionGroup(string playerXuid,string permissionGroupId,string jsonString) {
			return Lands_EditPlayerPermissionGroup_instance.Value(playerXuid,permissionGroupId,jsonString);
		}
		private static Lazy<Func<string,string,string,bool>>  Lands_AddPlayerPermissionGroup_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,string,bool>>("PFLP", "Lands::AddPlayerPermissionGroup"));
		/// <summary> 添加权限组 返回值类型：bool </summary>
		public static bool AddPlayerPermissionGroup(string playerXuid,string permissionGroupId,string jsonString) {
			return Lands_AddPlayerPermissionGroup_instance.Value(playerXuid,permissionGroupId,jsonString);
		}
		private static Lazy<Func<string,string>>  Lands_GetLandsOwnedByPlayer_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetLandsOwnedByPlayer"));
		/// <summary> 取玩家拥有的领地 返回值类型：string </summary>
		public static string GetLandsOwnedByPlayer(string playerXuid) {
			return Lands_GetLandsOwnedByPlayer_instance.Value(playerXuid);
		}
		private static Lazy<Func<string,string>>  Lands_GetLandsSharedToPlayer_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "Lands::GetLandsSharedToPlayer"));
		/// <summary> 取共享给玩家的领地 返回值类型：string </summary>
		public static string GetLandsSharedToPlayer(string playerXuid) {
			return Lands_GetLandsSharedToPlayer_instance.Value(playerXuid);
		}
	}
	public static class FloatText {
		private static Lazy<Func<string,float,float,float,string,int>>  FloatText_Add_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,float,float,float,string,int>>("PFLP", "FloatText::Add"));
		/// <summary> 创建浮空字(给玩家发包) 返回值类型：int </summary>
		public static int Add(string playerXuid,float x,float y,float z,string text) {
			return FloatText_Add_instance.Value(playerXuid,x,y,z,text);
		}
		private static Lazy<Action<string,int>>  FloatText_Remove_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,int>>("PFLP", "FloatText::Remove"));
		/// <summary> 移除浮空字(给玩家发包) </summary>
		public static void Remove(string playerXuid,int id) {
			FloatText_Remove_instance.Value(playerXuid,id);
		}
	}
	public static class Money {
		private static Lazy<Func<string,long>>  Money_Get_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,long>>("PFLP", "Money::Get"));
		/// <summary> 获取玩家(指定玩家名)金钱 返回值类型：long </summary>
		public static long Get(string playerXuid) {
			return Money_Get_instance.Value(playerXuid);
		}
		private static Lazy<Action<string,long,string>>  Money_Add_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,long,string>>("PFLP", "Money::Add"));
		/// <summary> 给玩家(指定玩家名)加钱 </summary>
		public static void Add(string playerXuid,long count,string info) {
			Money_Add_instance.Value(playerXuid,count,info);
		}
		private static Lazy<Action<string,long,string>>  Money_Remove_instance = new(()=> RemoteCallAPI.ImportAs<Action<string,long,string>>("PFLP", "Money::Remove"));
		/// <summary> 给玩家(指定玩家名)减钱 </summary>
		public static void Remove(string playerXuid,long count,string info) {
			Money_Remove_instance.Value(playerXuid,count,info);
		}
	}
	public static class GiftCode {
		private static Lazy<Func<string>>  GiftCode_GetAllPackName_instance = new(()=> RemoteCallAPI.ImportAs<Func<string>>("PFLP", "GiftCode::GetAllPackName"));
		/// <summary> 获取所有礼包的礼包名（返回json字符串数组） 返回值类型：string </summary>
		public static string GetAllPackName() {
			return GiftCode_GetAllPackName_instance.Value();
		}
		private static Lazy<Func<string,string>>  GiftCode_GetAvailableCode_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string>>("PFLP", "GiftCode::GetAvailableCode"));
		/// <summary> 获取指定礼包的所有可用的兑换码（返回json字符串数组） 返回值类型：string </summary>
		public static string GetAvailableCode(string packName) {
			return GiftCode_GetAvailableCode_instance.Value(packName);
		}
		private static Lazy<Func<string,string,bool>>  GiftCode_AddCode_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "GiftCode::AddCode"));
		/// <summary> 给指定礼包增加兑换码 返回值类型：bool </summary>
		public static bool AddCode(string packName,string code) {
			return GiftCode_AddCode_instance.Value(packName,code);
		}
		private static Lazy<Func<string,string,bool>>  GiftCode_RemoveCode_instance = new(()=> RemoteCallAPI.ImportAs<Func<string,string,bool>>("PFLP", "GiftCode::RemoveCode"));
		/// <summary> 删除指定礼包的指定兑换码 返回值类型：bool </summary>
		public static bool RemoveCode(string packName,string code) {
			return GiftCode_RemoveCode_instance.Value(packName,code);
		}
		private static Lazy<Action<string>>  GiftCode_ClearCode_instance = new(()=> RemoteCallAPI.ImportAs<Action<string>>("PFLP", "GiftCode::ClearCode"));
		/// <summary> 删除指定礼包的所有可用的兑换码（返回json字符串数组） </summary>
		public static void ClearCode(string packName) {
			GiftCode_ClearCode_instance.Value(packName);
		}
	}
	public static class Internal {
	}
}

```
</details>

---