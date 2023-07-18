---
title:  汇总 JavaScript SDK
icon: laptop-code
order: 1000
---


---
<details><summary>JavaScript imports / 逐个导入</summary>

``` js
/** 设置全局配置文件（要求JSON字符串） 返回值类型：bool */
const General_SetConfig = ll.import("PFLP", "General::SetConfig");
/** 获取全局配置文件（JSON字符串） 返回值类型：string */
const General_GetConfig = ll.import("PFLP", "General::GetConfig");
/** 重新加载所有功能的配置文件 */
const General_Reload = ll.import("PFLP", "General::Reload");
/** 获取全部IP归属地缓存（JSON字符串） 返回值类型：string */
const Location_GetAllCacheData = ll.import("PFLP", "Location::GetAllCacheData");
/**  设置IP归属地缓存 */
const Location_SetIpLocation = ll.import("PFLP", "Location::SetIpLocation");
/** 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string */
const Tpa_GetTemp = ll.import("PFLP", "Tpa::GetTemp");
/** 延迟传送 返回值类型：int */
const Tp_StartTeleport = ll.import("PFLP", "Tp::StartTeleport");
/** 获取指定玩家的统计数据（JSON字符串） 返回值类型：string */
const Statistics_GetPlayerStatistics = ll.import("PFLP", "Statistics::GetPlayerStatistics");
/** 设定指定玩家的统计数据（JSON字符串） */
const Statistics_SetPlayerStatistics = ll.import("PFLP", "Statistics::SetPlayerStatistics");
/** 获取变量 返回值类型：string */
const Format_GetVariableString = ll.import("PFLP", "Format::GetVariableString");
/** 获取变量，但是强制返回int类型 返回值类型：int */
const Format_GetVariableInt = ll.import("PFLP", "Format::GetVariableInt");
/** 获取变量，但是强制返回float类型 返回值类型：float */
const Format_GetVariableFloat = ll.import("PFLP", "Format::GetVariableFloat");
/** 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string */
const Format_FormatRawString = ll.import("PFLP", "Format::FormatRawString");
/** 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool */
const Format_DefineFormat = ll.import("PFLP", "Format::DefineFormat");
/** 移除格式化定义（返回true为存在并移除） 返回值类型：bool */
const Format_RemoveFormat = ll.import("PFLP", "Format::RemoveFormat");
/** 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string */
const Format_GetFormatWithPlayer = ll.import("PFLP", "Format::GetFormatWithPlayer");
/** 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string */
const Format_GetFormatWithPlayerLang = ll.import("PFLP", "Format::GetFormatWithPlayerLang");
/** 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string */
const Format_GetFormat = ll.import("PFLP", "Format::GetFormat");
/** 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令) */
const Command_RenameCommand = ll.import("PFLP", "Command::RenameCommand");
/** 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool */
const Command_ExecuteInternalCommand = ll.import("PFLP", "Command::ExecuteInternalCommand");
/** 设置命令禁用(可设置提示)(支持任意命令) */
const Command_SetCommandDisabled = ll.import("PFLP", "Command::SetCommandDisabled");
/** 设置命令启用 */
const Command_SetCommandEnabled = ll.import("PFLP", "Command::SetCommandEnabled");
/** 翻译 返回值类型：string */
const Language_Translate = ll.import("PFLP", "Language::Translate");
/** 设置玩家昵称 */
const ChatEx_SetNickName = ll.import("PFLP", "ChatEx::SetNickName");
/** 设置玩家聊天时的名字 */
const ChatEx_SetFakeName = ll.import("PFLP", "ChatEx::SetFakeName");
/** 设置玩家聊天消息后缀 */
const ChatEx_SetEnd = ll.import("PFLP", "ChatEx::SetEnd");
/** 设置玩家聊天消息前缀 */
const ChatEx_SetStart = ll.import("PFLP", "ChatEx::SetStart");
/** 获取玩家昵称 返回值类型：string */
const ChatEx_GetNickName = ll.import("PFLP", "ChatEx::GetNickName");
/** 获取玩家聊天时的名字 返回值类型：string */
const ChatEx_GetFakeName = ll.import("PFLP", "ChatEx::GetFakeName");
/** 获取玩家聊天消息后缀 返回值类型：string */
const ChatEx_GetEnd = ll.import("PFLP", "ChatEx::GetEnd");
/** 获取玩家聊天消息前缀 返回值类型：string */
const ChatEx_GetStart = ll.import("PFLP", "ChatEx::GetStart");
/** 给指定方块描框 */
const ParticlesGraphics_DrawBlock = ll.import("PFLP", "ParticlesGraphics::DrawBlock");
/** 给指定区域描框 */
const ParticlesGraphics_DrawBorder = ll.import("PFLP", "ParticlesGraphics::DrawBorder");
/** 检查指定立方体区域(float)是否有领地 返回值类型：bool */
const Lands_CheckCubeHasLand = ll.import("PFLP", "Lands::CheckCubeHasLand");
/** 检查指定立方体区域(int)是否有领地 返回值类型：bool */
const Lands_CheckCubeHasLandInt = ll.import("PFLP", "Lands::CheckCubeHasLandInt");
/** 检查指定坐标(float)是否有领地 返回值类型：bool */
const Lands_CheckPosHasLand = ll.import("PFLP", "Lands::CheckPosHasLand");
/** 检查指定坐标(int)是否有领地 返回值类型：bool */
const Lands_CheckPosHasLandInt = ll.import("PFLP", "Lands::CheckPosHasLandInt");
/** 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByCube = ll.import("PFLP", "Lands::GetLandByCube");
/** 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByCubeInt = ll.import("PFLP", "Lands::GetLandByCubeInt");
/** 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByPos = ll.import("PFLP", "Lands::GetLandByPos");
/** 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandByPosInt = ll.import("PFLP", "Lands::GetLandByPosInt");
/** 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByCube = ll.import("PFLP", "Lands::GetLandInfoByCube");
/** 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByCubeInt = ll.import("PFLP", "Lands::GetLandInfoByCubeInt");
/** 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByPos = ll.import("PFLP", "Lands::GetLandInfoByPos");
/** 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string */
const Lands_GetLandInfoByPosInt = ll.import("PFLP", "Lands::GetLandInfoByPosInt");
/** 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
const Lands_SetLandInfoByPos = ll.import("PFLP", "Lands::SetLandInfoByPos");
/** 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool */
const Lands_SetLandInfoByPosInt = ll.import("PFLP", "Lands::SetLandInfoByPosInt");
/** 新建领地 返回值类型：bool */
const Lands_CreateLand2D = ll.import("PFLP", "Lands::CreateLand2D");
/** 新建领地 返回值类型：bool */
const Lands_CreateLand3D = ll.import("PFLP", "Lands::CreateLand3D");
/** 删除指定坐标(float)的领地 返回值类型：bool */
const Lands_DeleteLandByPos = ll.import("PFLP", "Lands::DeleteLandByPos");
/** 删除指定坐标(int)的领地 返回值类型：bool */
const Lands_DeleteLandByPosInt = ll.import("PFLP", "Lands::DeleteLandByPosInt");
/** 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string */
const Lands_GetLandPermissionByPos = ll.import("PFLP", "Lands::GetLandPermissionByPos");
/** 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string */
const Lands_GetLandPermissionByPosInt = ll.import("PFLP", "Lands::GetLandPermissionByPosInt");
/** 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool */
const Lands_CheckLandPermissionByPos = ll.import("PFLP", "Lands::CheckLandPermissionByPos");
/** 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool */
const Lands_CheckLandPermissionByPosInt = ll.import("PFLP", "Lands::CheckLandPermissionByPosInt");
/** 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool */
const Lands_CheckPlayerIsLandOwnerByPos = ll.import("PFLP", "Lands::CheckPlayerIsLandOwnerByPos");
/** 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool */
const Lands_CheckPlayerIsLandOwnerByPosInt = ll.import("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt");
/** 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool */
const Lands_CheckIsLandSharedToPlayerByPos = ll.import("PFLP", "Lands::CheckIsLandSharedToPlayerByPos");
/** 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool */
const Lands_CheckIsLandSharedToPlayerByPosInt = ll.import("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt");
/** (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool */
const Lands_CheckPlayerHasCreateChestPermission = ll.import("PFLP", "Lands::CheckPlayerHasCreateChestPermission");
/** (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool */
const Lands_CheckPlayerHasOpenChestPermission = ll.import("PFLP", "Lands::CheckPlayerHasOpenChestPermission");
/** 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string */
const Lands_GetPlayerAllPermissionGroupId = ll.import("PFLP", "Lands::GetPlayerAllPermissionGroupId");
/** 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string */
const Lands_GetPlayerPermissionGroup = ll.import("PFLP", "Lands::GetPlayerPermissionGroup");
/** 删玩家权限组(指定ID) 返回值类型：bool */
const Lands_DeletePlayerPermissionGroup = ll.import("PFLP", "Lands::DeletePlayerPermissionGroup");
/** 修改家权限组内容(指定ID) 返回值类型：bool */
const Lands_EditPlayerPermissionGroup = ll.import("PFLP", "Lands::EditPlayerPermissionGroup");
/** 添加权限组 返回值类型：bool */
const Lands_AddPlayerPermissionGroup = ll.import("PFLP", "Lands::AddPlayerPermissionGroup");
/** 取玩家拥有的领地 返回值类型：string */
const Lands_GetLandsOwnedByPlayer = ll.import("PFLP", "Lands::GetLandsOwnedByPlayer");
/** 取共享给玩家的领地 返回值类型：string */
const Lands_GetLandsSharedToPlayer = ll.import("PFLP", "Lands::GetLandsSharedToPlayer");
/** 创建浮空字(给玩家发包) 返回值类型：int */
const FloatText_Add = ll.import("PFLP", "FloatText::Add");
/** 移除浮空字(给玩家发包) */
const FloatText_Remove = ll.import("PFLP", "FloatText::Remove");
/** 获取玩家(指定玩家名)金钱 返回值类型：long */
const Money_Get = ll.import("PFLP", "Money::Get");
/** 给玩家(指定玩家名)加钱 */
const Money_Add = ll.import("PFLP", "Money::Add");
/** 给玩家(指定玩家名)减钱 */
const Money_Remove = ll.import("PFLP", "Money::Remove");
/** 作弊反馈（LLAntiCheat用） 返回值类型：bool */
const Internal_CheatPunish = ll.import("PFLP", "Internal::CheatPunish");

```
</details>
<details><summary>JavaScript object / JS对象 （推荐）</summary>

``` js
const PFLP = {
	General : {
		/** 设置全局配置文件（要求JSON字符串） 返回值类型：bool
		 * @param {string} jsonStr
		 * @returns {boolean}
		 */
		SetConfig(jsonStr) { return (this.General_SetConfig??=ll.import("PFLP", "General::SetConfig"))(jsonStr)},
		/** 获取全局配置文件（JSON字符串） 返回值类型：string
		 * @returns {string}
		 */
		GetConfig() { return (this.General_GetConfig??=ll.import("PFLP", "General::GetConfig"))()},
		/** 重新加载所有功能的配置文件
		 */
		Reload() { (this.General_Reload??=ll.import("PFLP", "General::Reload"))()},
	},
	Location : {
		/** 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
		 * @returns {string}
		 */
		GetAllCacheData() { return (this.Location_GetAllCacheData??=ll.import("PFLP", "Location::GetAllCacheData"))()},
		/**  设置IP归属地缓存
		 * @param {string} ip
		 * @param {string} country
		 * @param {string} province
		 * @param {string} city
		 * @param {string} area
		 * @param {string} isp
		 * @param {string} language
		 */
		SetIpLocation(ip,country,province,city,area,isp,language) { (this.Location_SetIpLocation??=ll.import("PFLP", "Location::SetIpLocation"))(ip,country,province,city,area,isp,language)},
	},
	Tpa : {
		/** 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetTemp(playerXuid) { return (this.Tpa_GetTemp??=ll.import("PFLP", "Tpa::GetTemp"))(playerXuid)},
	},
	Tp : {
		/** 延迟传送 返回值类型：int
		 * @param {string} playerXuid
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimension
		 * @returns {number}
		 */
		StartTeleport(playerXuid,x,y,z,dimension) { return (this.Tp_StartTeleport??=ll.import("PFLP", "Tp::StartTeleport"))(playerXuid,x,y,z,dimension)},
	},
	Statistics : {
		/** 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetPlayerStatistics(playerXuid) { return (this.Statistics_GetPlayerStatistics??=ll.import("PFLP", "Statistics::GetPlayerStatistics"))(playerXuid)},
		/** 设定指定玩家的统计数据（JSON字符串）
		 * @param {string} playerXuid
		 * @param {string} newData
		 */
		SetPlayerStatistics(playerXuid,newData) { (this.Statistics_SetPlayerStatistics??=ll.import("PFLP", "Statistics::SetPlayerStatistics"))(playerXuid,newData)},
	},
	Format : {
		/** 获取变量 返回值类型：string
		 * @param {string} playerXuid
		 * @param {string} name
		 * @param {string} format
		 * @returns {string}
		 */
		GetVariableString(playerXuid,name,format) { return (this.Format_GetVariableString??=ll.import("PFLP", "Format::GetVariableString"))(playerXuid,name,format)},
		/** 获取变量，但是强制返回int类型 返回值类型：int
		 * @param {string} playerXuid
		 * @param {string} name
		 * @returns {number}
		 */
		GetVariableInt(playerXuid,name) { return (this.Format_GetVariableInt??=ll.import("PFLP", "Format::GetVariableInt"))(playerXuid,name)},
		/** 获取变量，但是强制返回float类型 返回值类型：float
		 * @param {string} playerXuid
		 * @param {string} name
		 * @returns {number}
		 */
		GetVariableFloat(playerXuid,name) { return (this.Format_GetVariableFloat??=ll.import("PFLP", "Format::GetVariableFloat"))(playerXuid,name)},
		/** 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
		 * @param {string} playerXuid
		 * @param {string} rawFormat
		 * @returns {string}
		 */
		FormatRawString(playerXuid,rawFormat) { return (this.Format_FormatRawString??=ll.import("PFLP", "Format::FormatRawString"))(playerXuid,rawFormat)},
		/** 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
		 * @param {string} id
		 * @param {string} rawFormat
		 * @returns {boolean}
		 */
		DefineFormat(id,rawFormat) { return (this.Format_DefineFormat??=ll.import("PFLP", "Format::DefineFormat"))(id,rawFormat)},
		/** 移除格式化定义（返回true为存在并移除） 返回值类型：bool
		 * @param {string} id
		 * @returns {boolean}
		 */
		RemoveFormat(id) { return (this.Format_RemoveFormat??=ll.import("PFLP", "Format::RemoveFormat"))(id)},
		/** 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
		 * @param {string} id
		 * @param {string} playerXuid
		 * @param {string} extra
		 * @returns {string}
		 */
		GetFormatWithPlayer(id,playerXuid,extra) { return (this.Format_GetFormatWithPlayer??=ll.import("PFLP", "Format::GetFormatWithPlayer"))(id,playerXuid,extra)},
		/** 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
		 * @param {string} id
		 * @param {string} playerXuid
		 * @param {string} playerLangXuid
		 * @param {string} extra
		 * @returns {string}
		 */
		GetFormatWithPlayerLang(id,playerXuid,playerLangXuid,extra) { return (this.Format_GetFormatWithPlayerLang??=ll.import("PFLP", "Format::GetFormatWithPlayerLang"))(id,playerXuid,playerLangXuid,extra)},
		/** 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
		 * @param {string} id
		 * @param {string} extra
		 * @returns {string}
		 */
		GetFormat(id,extra) { return (this.Format_GetFormat??=ll.import("PFLP", "Format::GetFormat"))(id,extra)},
	},
	Command : {
		/** 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
		 * @param {string} cmd
		 * @param {string} newCmd
		 */
		RenameCommand(cmd,newCmd) { (this.Command_RenameCommand??=ll.import("PFLP", "Command::RenameCommand"))(cmd,newCmd)},
		/** 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
		 * @param {string} playerXuid
		 * @param {string} cmd
		 * @returns {boolean}
		 */
		ExecuteInternalCommand(playerXuid,cmd) { return (this.Command_ExecuteInternalCommand??=ll.import("PFLP", "Command::ExecuteInternalCommand"))(playerXuid,cmd)},
		/** 设置命令禁用(可设置提示)(支持任意命令)
		 * @param {string} playerXuid
		 * @param {string} cmd
		 * @param {string} feedback
		 */
		SetCommandDisabled(playerXuid,cmd,feedback) { (this.Command_SetCommandDisabled??=ll.import("PFLP", "Command::SetCommandDisabled"))(playerXuid,cmd,feedback)},
		/** 设置命令启用
		 * @param {string} playerXuid
		 * @param {string} cmd
		 */
		SetCommandEnabled(playerXuid,cmd) { (this.Command_SetCommandEnabled??=ll.import("PFLP", "Command::SetCommandEnabled"))(playerXuid,cmd)},
	},
	Language : {
		/** 翻译 返回值类型：string
		 * @param {string} fromLanguage
		 * @param {string} toLanguage
		 * @param {string} text
		 * @returns {string}
		 */
		Translate(fromLanguage,toLanguage,text) { return (this.Language_Translate??=ll.import("PFLP", "Language::Translate"))(fromLanguage,toLanguage,text)},
	},
	ChatEx : {
		/** 设置玩家昵称
		 * @param {string} playerXuid
		 * @param {string} nickName
		 */
		SetNickName(playerXuid,nickName) { (this.ChatEx_SetNickName??=ll.import("PFLP", "ChatEx::SetNickName"))(playerXuid,nickName)},
		/** 设置玩家聊天时的名字
		 * @param {string} playerXuid
		 * @param {string} fakeName
		 */
		SetFakeName(playerXuid,fakeName) { (this.ChatEx_SetFakeName??=ll.import("PFLP", "ChatEx::SetFakeName"))(playerXuid,fakeName)},
		/** 设置玩家聊天消息后缀
		 * @param {string} playerXuid
		 * @param {string} endStr
		 */
		SetEnd(playerXuid,endStr) { (this.ChatEx_SetEnd??=ll.import("PFLP", "ChatEx::SetEnd"))(playerXuid,endStr)},
		/** 设置玩家聊天消息前缀
		 * @param {string} playerXuid
		 * @param {string} startStr
		 */
		SetStart(playerXuid,startStr) { (this.ChatEx_SetStart??=ll.import("PFLP", "ChatEx::SetStart"))(playerXuid,startStr)},
		/** 获取玩家昵称 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetNickName(playerXuid) { return (this.ChatEx_GetNickName??=ll.import("PFLP", "ChatEx::GetNickName"))(playerXuid)},
		/** 获取玩家聊天时的名字 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetFakeName(playerXuid) { return (this.ChatEx_GetFakeName??=ll.import("PFLP", "ChatEx::GetFakeName"))(playerXuid)},
		/** 获取玩家聊天消息后缀 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetEnd(playerXuid) { return (this.ChatEx_GetEnd??=ll.import("PFLP", "ChatEx::GetEnd"))(playerXuid)},
		/** 获取玩家聊天消息前缀 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetStart(playerXuid) { return (this.ChatEx_GetStart??=ll.import("PFLP", "ChatEx::GetStart"))(playerXuid)},
	},
	ParticlesGraphics : {
		/** 给指定方块描框
		 * @param {string} playerXuid
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} r
		 * @param {number} g
		 * @param {number} b
		 * @param {number} thickness
		 * @param {number} time
		 * @param {number} alpha
		 */
		DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha) { (this.ParticlesGraphics_DrawBlock??=ll.import("PFLP", "ParticlesGraphics::DrawBlock"))(playerXuid,x,y,z,r,g,b,thickness,time,alpha)},
		/** 给指定区域描框
		 * @param {string} playerXuid
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} z2
		 * @param {number} r
		 * @param {number} g
		 * @param {number} b
		 * @param {number} thickness
		 * @param {number} time
		 * @param {number} alpha
		 */
		DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha) { (this.ParticlesGraphics_DrawBorder??=ll.import("PFLP", "ParticlesGraphics::DrawBorder"))(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha)},
	},
	Lands : {
		/** 检查指定立方体区域(float)是否有领地 返回值类型：bool
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} z2
		 * @param {number} dimensionId
		 * @returns {boolean}
		 */
		CheckCubeHasLand(x1,y1,z1,x2,y2,z2,dimensionId) { return (this.Lands_CheckCubeHasLand??=ll.import("PFLP", "Lands::CheckCubeHasLand"))(x1,y1,z1,x2,y2,z2,dimensionId)},
		/** 检查指定立方体区域(int)是否有领地 返回值类型：bool
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} z2
		 * @param {number} dimensionId
		 * @returns {boolean}
		 */
		CheckCubeHasLandInt(x1,y1,z1,x2,y2,z2,dimensionId) { return (this.Lands_CheckCubeHasLandInt??=ll.import("PFLP", "Lands::CheckCubeHasLandInt"))(x1,y1,z1,x2,y2,z2,dimensionId)},
		/** 检查指定坐标(float)是否有领地 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @returns {boolean}
		 */
		CheckPosHasLand(x,y,z,dimensionId) { return (this.Lands_CheckPosHasLand??=ll.import("PFLP", "Lands::CheckPosHasLand"))(x,y,z,dimensionId)},
		/** 检查指定坐标(int)是否有领地 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @returns {boolean}
		 */
		CheckPosHasLandInt(x,y,z,dimensionId) { return (this.Lands_CheckPosHasLandInt??=ll.import("PFLP", "Lands::CheckPosHasLandInt"))(x,y,z,dimensionId)},
		/** 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} z2
		 * @param {number} dimensionId
		 * @returns {string}
		 */
		GetLandByCube(x1,y1,z1,x2,y2,z2,dimensionId) { return (this.Lands_GetLandByCube??=ll.import("PFLP", "Lands::GetLandByCube"))(x1,y1,z1,x2,y2,z2,dimensionId)},
		/** 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} z2
		 * @param {number} dimensionId
		 * @returns {string}
		 */
		GetLandByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId) { return (this.Lands_GetLandByCubeInt??=ll.import("PFLP", "Lands::GetLandByCubeInt"))(x1,y1,z1,x2,y2,z2,dimensionId)},
		/** 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @returns {string}
		 */
		GetLandByPos(x,y,z,dimensionId) { return (this.Lands_GetLandByPos??=ll.import("PFLP", "Lands::GetLandByPos"))(x,y,z,dimensionId)},
		/** 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @returns {string}
		 */
		GetLandByPosInt(x,y,z,dimensionId) { return (this.Lands_GetLandByPosInt??=ll.import("PFLP", "Lands::GetLandByPosInt"))(x,y,z,dimensionId)},
		/** 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} z2
		 * @param {number} dimensionId
		 * @returns {string}
		 */
		GetLandInfoByCube(x1,y1,z1,x2,y2,z2,dimensionId) { return (this.Lands_GetLandInfoByCube??=ll.import("PFLP", "Lands::GetLandInfoByCube"))(x1,y1,z1,x2,y2,z2,dimensionId)},
		/** 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} z2
		 * @param {number} dimensionId
		 * @returns {string}
		 */
		GetLandInfoByCubeInt(x1,y1,z1,x2,y2,z2,dimensionId) { return (this.Lands_GetLandInfoByCubeInt??=ll.import("PFLP", "Lands::GetLandInfoByCubeInt"))(x1,y1,z1,x2,y2,z2,dimensionId)},
		/** 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @returns {string}
		 */
		GetLandInfoByPos(x,y,z,dimensionId) { return (this.Lands_GetLandInfoByPos??=ll.import("PFLP", "Lands::GetLandInfoByPos"))(x,y,z,dimensionId)},
		/** 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @returns {string}
		 */
		GetLandInfoByPosInt(x,y,z,dimensionId) { return (this.Lands_GetLandInfoByPosInt??=ll.import("PFLP", "Lands::GetLandInfoByPosInt"))(x,y,z,dimensionId)},
		/** 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} landinfo
		 * @returns {boolean}
		 */
		SetLandInfoByPos(x,y,z,dimensionId,landinfo) { return (this.Lands_SetLandInfoByPos??=ll.import("PFLP", "Lands::SetLandInfoByPos"))(x,y,z,dimensionId,landinfo)},
		/** 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} landinfo
		 * @returns {boolean}
		 */
		SetLandInfoByPosInt(x,y,z,dimensionId,landinfo) { return (this.Lands_SetLandInfoByPosInt??=ll.import("PFLP", "Lands::SetLandInfoByPosInt"))(x,y,z,dimensionId,landinfo)},
		/** 新建领地 返回值类型：bool
		 * @param {number} x1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} z2
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CreateLand2D(x1,z1,x2,z2,dimensionId,playerXuid) { return (this.Lands_CreateLand2D??=ll.import("PFLP", "Lands::CreateLand2D"))(x1,z1,x2,z2,dimensionId,playerXuid)},
		/** 新建领地 返回值类型：bool
		 * @param {number} x1
		 * @param {number} y1
		 * @param {number} z1
		 * @param {number} x2
		 * @param {number} y2
		 * @param {number} z2
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CreateLand3D(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid) { return (this.Lands_CreateLand3D??=ll.import("PFLP", "Lands::CreateLand3D"))(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid)},
		/** 删除指定坐标(float)的领地 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @returns {boolean}
		 */
		DeleteLandByPos(x,y,z,dimensionId) { return (this.Lands_DeleteLandByPos??=ll.import("PFLP", "Lands::DeleteLandByPos"))(x,y,z,dimensionId)},
		/** 删除指定坐标(int)的领地 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @returns {boolean}
		 */
		DeleteLandByPosInt(x,y,z,dimensionId) { return (this.Lands_DeleteLandByPosInt??=ll.import("PFLP", "Lands::DeleteLandByPosInt"))(x,y,z,dimensionId)},
		/** 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetLandPermissionByPos(x,y,z,dimensionId,playerXuid) { return (this.Lands_GetLandPermissionByPos??=ll.import("PFLP", "Lands::GetLandPermissionByPos"))(x,y,z,dimensionId,playerXuid)},
		/** 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetLandPermissionByPosInt(x,y,z,dimensionId,playerXuid) { return (this.Lands_GetLandPermissionByPosInt??=ll.import("PFLP", "Lands::GetLandPermissionByPosInt"))(x,y,z,dimensionId,playerXuid)},
		/** 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
		 * @param {string} permissionId
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CheckLandPermissionByPos(permissionId,x,y,z,dimensionId,playerXuid) { return (this.Lands_CheckLandPermissionByPos??=ll.import("PFLP", "Lands::CheckLandPermissionByPos"))(permissionId,x,y,z,dimensionId,playerXuid)},
		/** 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
		 * @param {string} permissionId
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CheckLandPermissionByPosInt(permissionId,x,y,z,dimensionId,playerXuid) { return (this.Lands_CheckLandPermissionByPosInt??=ll.import("PFLP", "Lands::CheckLandPermissionByPosInt"))(permissionId,x,y,z,dimensionId,playerXuid)},
		/** 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CheckPlayerIsLandOwnerByPos(x,y,z,dimensionId,playerXuid) { return (this.Lands_CheckPlayerIsLandOwnerByPos??=ll.import("PFLP", "Lands::CheckPlayerIsLandOwnerByPos"))(x,y,z,dimensionId,playerXuid)},
		/** 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CheckPlayerIsLandOwnerByPosInt(x,y,z,dimensionId,playerXuid) { return (this.Lands_CheckPlayerIsLandOwnerByPosInt??=ll.import("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt"))(x,y,z,dimensionId,playerXuid)},
		/** 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CheckIsLandSharedToPlayerByPos(x,y,z,dimensionId,playerXuid) { return (this.Lands_CheckIsLandSharedToPlayerByPos??=ll.import("PFLP", "Lands::CheckIsLandSharedToPlayerByPos"))(x,y,z,dimensionId,playerXuid)},
		/** 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CheckIsLandSharedToPlayerByPosInt(x,y,z,dimensionId,playerXuid) { return (this.Lands_CheckIsLandSharedToPlayerByPosInt??=ll.import("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt"))(x,y,z,dimensionId,playerXuid)},
		/** (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CheckPlayerHasCreateChestPermission(x,y,z,dimensionId,playerXuid) { return (this.Lands_CheckPlayerHasCreateChestPermission??=ll.import("PFLP", "Lands::CheckPlayerHasCreateChestPermission"))(x,y,z,dimensionId,playerXuid)},
		/** (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {number} dimensionId
		 * @param {string} playerXuid
		 * @returns {boolean}
		 */
		CheckPlayerHasOpenChestPermission(x,y,z,dimensionId,playerXuid) { return (this.Lands_CheckPlayerHasOpenChestPermission??=ll.import("PFLP", "Lands::CheckPlayerHasOpenChestPermission"))(x,y,z,dimensionId,playerXuid)},
		/** 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetPlayerAllPermissionGroupId(playerXuid) { return (this.Lands_GetPlayerAllPermissionGroupId??=ll.import("PFLP", "Lands::GetPlayerAllPermissionGroupId"))(playerXuid)},
		/** 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
		 * @param {string} playerXuid
		 * @param {string} permissionGroupId
		 * @returns {string}
		 */
		GetPlayerPermissionGroup(playerXuid,permissionGroupId) { return (this.Lands_GetPlayerPermissionGroup??=ll.import("PFLP", "Lands::GetPlayerPermissionGroup"))(playerXuid,permissionGroupId)},
		/** 删玩家权限组(指定ID) 返回值类型：bool
		 * @param {string} playerXuid
		 * @param {string} permissionGroupId
		 * @returns {boolean}
		 */
		DeletePlayerPermissionGroup(playerXuid,permissionGroupId) { return (this.Lands_DeletePlayerPermissionGroup??=ll.import("PFLP", "Lands::DeletePlayerPermissionGroup"))(playerXuid,permissionGroupId)},
		/** 修改家权限组内容(指定ID) 返回值类型：bool
		 * @param {string} playerXuid
		 * @param {string} permissionGroupId
		 * @param {string} jsonString
		 * @returns {boolean}
		 */
		EditPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString) { return (this.Lands_EditPlayerPermissionGroup??=ll.import("PFLP", "Lands::EditPlayerPermissionGroup"))(playerXuid,permissionGroupId,jsonString)},
		/** 添加权限组 返回值类型：bool
		 * @param {string} playerXuid
		 * @param {string} permissionGroupId
		 * @param {string} jsonString
		 * @returns {boolean}
		 */
		AddPlayerPermissionGroup(playerXuid,permissionGroupId,jsonString) { return (this.Lands_AddPlayerPermissionGroup??=ll.import("PFLP", "Lands::AddPlayerPermissionGroup"))(playerXuid,permissionGroupId,jsonString)},
		/** 取玩家拥有的领地 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetLandsOwnedByPlayer(playerXuid) { return (this.Lands_GetLandsOwnedByPlayer??=ll.import("PFLP", "Lands::GetLandsOwnedByPlayer"))(playerXuid)},
		/** 取共享给玩家的领地 返回值类型：string
		 * @param {string} playerXuid
		 * @returns {string}
		 */
		GetLandsSharedToPlayer(playerXuid) { return (this.Lands_GetLandsSharedToPlayer??=ll.import("PFLP", "Lands::GetLandsSharedToPlayer"))(playerXuid)},
	},
	FloatText : {
		/** 创建浮空字(给玩家发包) 返回值类型：int
		 * @param {string} playerXuid
		 * @param {number} x
		 * @param {number} y
		 * @param {number} z
		 * @param {string} text
		 * @returns {number}
		 */
		Add(playerXuid,x,y,z,text) { return (this.FloatText_Add??=ll.import("PFLP", "FloatText::Add"))(playerXuid,x,y,z,text)},
		/** 移除浮空字(给玩家发包)
		 * @param {string} playerXuid
		 * @param {number} id
		 */
		Remove(playerXuid,id) { (this.FloatText_Remove??=ll.import("PFLP", "FloatText::Remove"))(playerXuid,id)},
	},
	Money : {
		/** 获取玩家(指定玩家名)金钱 返回值类型：long
		 * @param {string} playerXuid
		 * @returns {number}
		 */
		Get(playerXuid) { return (this.Money_Get??=ll.import("PFLP", "Money::Get"))(playerXuid)},
		/** 给玩家(指定玩家名)加钱
		 * @param {string} playerXuid
		 * @param {number} count
		 * @param {string} info
		 */
		Add(playerXuid,count,info) { (this.Money_Add??=ll.import("PFLP", "Money::Add"))(playerXuid,count,info)},
		/** 给玩家(指定玩家名)减钱
		 * @param {string} playerXuid
		 * @param {number} count
		 * @param {string} info
		 */
		Remove(playerXuid,count,info) { (this.Money_Remove??=ll.import("PFLP", "Money::Remove"))(playerXuid,count,info)},
	},
	Internal : {
		/** 作弊反馈（LLAntiCheat用） 返回值类型：bool
		 * @param {number} PunishLevel
		 * @param {number} PunishReason
		 * @param {any} playerXuid
		 * @param {number} CheatCount
		 * @returns {boolean}
		 */
		CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount) { return (this.Internal_CheatPunish??=ll.import("PFLP", "Internal::CheatPunish"))(PunishLevel,PunishReason,playerXuid,CheatCount)},
	},
};

```
</details>

---