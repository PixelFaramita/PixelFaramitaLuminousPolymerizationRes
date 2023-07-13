---
title: 汇总 VB SDK
icon: laptop-code
order: 1002
---


---
<details><summary>VB imports / 直接导入</summary>

``` vb
Imports RemoteCallAPI = LiteLoader.RemoteCall.RemoteCallAPI;

' 设置全局配置文件（要求JSON字符串） 返回值类型：bool
Dim General_SetConfig = RemoteCallAPI.ImportAs(Of Func(Of String,Boolean))("PFLP", "General::SetConfig")
' 获取全局配置文件（JSON字符串） 返回值类型：string
Dim General_GetConfig = RemoteCallAPI.ImportAs(Of Func(Of String))("PFLP", "General::GetConfig")
' 重新加载所有功能的配置文件
Dim General_Reload = RemoteCallAPI.ImportAs(Of Action)("PFLP", "General::Reload")
' 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
Dim Location_GetAllCacheData = RemoteCallAPI.ImportAs(Of Func(Of String))("PFLP", "Location::GetAllCacheData")
'  设置IP归属地缓存
Dim Location_SetIpLocation = RemoteCallAPI.ImportAs(Of Action(Of String,String,String,String,String,String,String))("PFLP", "Location::SetIpLocation")
' 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
Dim Tpa_GetTemp = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Tpa::GetTemp")
' 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
Dim Statistics_GetPlayerStatistics = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Statistics::GetPlayerStatistics")
' 设定指定玩家的统计数据（JSON字符串）
Dim Statistics_SetPlayerStatistics = RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "Statistics::SetPlayerStatistics")
' 获取变量 返回值类型：string
Dim Format_GetVariableString = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String))("PFLP", "Format::GetVariableString")
' 获取变量，但是强制返回int类型 返回值类型：int
Dim Format_GetVariableInt = RemoteCallAPI.ImportAs(Of Func(Of String,String,Integer))("PFLP", "Format::GetVariableInt")
' 获取变量，但是强制返回float类型 返回值类型：float
Dim Format_GetVariableFloat = RemoteCallAPI.ImportAs(Of Func(Of String,String,Single))("PFLP", "Format::GetVariableFloat")
' 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
Dim Format_FormatRawString = RemoteCallAPI.ImportAs(Of Func(Of String,String,String))("PFLP", "Format::FormatRawString")
' 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
Dim Format_DefineFormat = RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "Format::DefineFormat")
' 移除格式化定义（返回true为存在并移除） 返回值类型：bool
Dim Format_RemoveFormat = RemoteCallAPI.ImportAs(Of Func(Of String,Boolean))("PFLP", "Format::RemoveFormat")
' 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
Dim Format_GetFormatWithPlayer = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String))("PFLP", "Format::GetFormatWithPlayer")
' 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
Dim Format_GetFormatWithPlayerLang = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String,String))("PFLP", "Format::GetFormatWithPlayerLang")
' 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
Dim Format_GetFormat = RemoteCallAPI.ImportAs(Of Func(Of String,String,String))("PFLP", "Format::GetFormat")
' 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
Dim Command_RenameCommand = RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "Command::RenameCommand")
' 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
Dim Command_ExecuteInternalCommand = RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "Command::ExecuteInternalCommand")
' 设置命令禁用(可设置提示)(支持任意命令)
Dim Command_SetCommandDisabled = RemoteCallAPI.ImportAs(Of Action(Of String,String,String))("PFLP", "Command::SetCommandDisabled")
' 设置命令启用
Dim Command_SetCommandEnabled = RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "Command::SetCommandEnabled")
' 翻译 返回值类型：string
Dim Language_Translate = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String))("PFLP", "Language::Translate")
' 设置玩家昵称
Dim ChatEx_SetNickName = RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "ChatEx::SetNickName")
' 设置玩家聊天时的名字
Dim ChatEx_SetFakeName = RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "ChatEx::SetFakeName")
' 设置玩家聊天消息后缀
Dim ChatEx_SetEnd = RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "ChatEx::SetEnd")
' 设置玩家聊天消息前缀
Dim ChatEx_SetStart = RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "ChatEx::SetStart")
' 获取玩家昵称 返回值类型：string
Dim ChatEx_GetNickName = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "ChatEx::GetNickName")
' 获取玩家聊天时的名字 返回值类型：string
Dim ChatEx_GetFakeName = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "ChatEx::GetFakeName")
' 获取玩家聊天消息后缀 返回值类型：string
Dim ChatEx_GetEnd = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "ChatEx::GetEnd")
' 获取玩家聊天消息前缀 返回值类型：string
Dim ChatEx_GetStart = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "ChatEx::GetStart")
' 给指定方块描框
Dim ParticlesGraphics_DrawBlock = RemoteCallAPI.ImportAs(Of Action(Of String,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single))("PFLP", "ParticlesGraphics::DrawBlock")
' 给指定区域描框
Dim ParticlesGraphics_DrawBorder = RemoteCallAPI.ImportAs(Of Action(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single))("PFLP", "ParticlesGraphics::DrawBorder")
' 检查指定立方体区域(float)是否有领地 返回值类型：bool
Dim Lands_CheckCubeHasLand = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,Boolean))("PFLP", "Lands::CheckCubeHasLand")
' 检查指定立方体区域(int)是否有领地 返回值类型：bool
Dim Lands_CheckCubeHasLandInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,Boolean))("PFLP", "Lands::CheckCubeHasLandInt")
' 检查指定坐标(float)是否有领地 返回值类型：bool
Dim Lands_CheckPosHasLand = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,Boolean))("PFLP", "Lands::CheckPosHasLand")
' 检查指定坐标(int)是否有领地 返回值类型：bool
Dim Lands_CheckPosHasLandInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Boolean))("PFLP", "Lands::CheckPosHasLandInt")
' 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByCube = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,String))("PFLP", "Lands::GetLandByCube")
' 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByCubeInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String))("PFLP", "Lands::GetLandByCubeInt")
' 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByPos = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String))("PFLP", "Lands::GetLandByPos")
' 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandByPosInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String))("PFLP", "Lands::GetLandByPosInt")
' 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByCube = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,String))("PFLP", "Lands::GetLandInfoByCube")
' 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByCubeInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String))("PFLP", "Lands::GetLandInfoByCubeInt")
' 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByPos = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String))("PFLP", "Lands::GetLandInfoByPos")
' 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
Dim Lands_GetLandInfoByPosInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String))("PFLP", "Lands::GetLandInfoByPosInt")
' 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
Dim Lands_SetLandInfoByPos = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String,Boolean))("PFLP", "Lands::SetLandInfoByPos")
' 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
Dim Lands_SetLandInfoByPosInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::SetLandInfoByPosInt")
' 新建领地 返回值类型：bool
Dim Lands_CreateLand2D = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CreateLand2D")
' 新建领地 返回值类型：bool
Dim Lands_CreateLand3D = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CreateLand3D")
' 删除指定坐标(float)的领地 返回值类型：bool
Dim Lands_DeleteLandByPos = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,Boolean))("PFLP", "Lands::DeleteLandByPos")
' 删除指定坐标(int)的领地 返回值类型：bool
Dim Lands_DeleteLandByPosInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Boolean))("PFLP", "Lands::DeleteLandByPosInt")
' 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
Dim Lands_GetLandPermissionByPos = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String,String))("PFLP", "Lands::GetLandPermissionByPos")
' 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
Dim Lands_GetLandPermissionByPosInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,String))("PFLP", "Lands::GetLandPermissionByPosInt")
' 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
Dim Lands_CheckLandPermissionByPos = RemoteCallAPI.ImportAs(Of Func(Of String,Single,Single,Single,Integer,String,Boolean))("PFLP", "Lands::CheckLandPermissionByPos")
' 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
Dim Lands_CheckLandPermissionByPosInt = RemoteCallAPI.ImportAs(Of Func(Of String,Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckLandPermissionByPosInt")
' 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
Dim Lands_CheckPlayerIsLandOwnerByPos = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String,Boolean))("PFLP", "Lands::CheckPlayerIsLandOwnerByPos")
' 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
Dim Lands_CheckPlayerIsLandOwnerByPosInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt")
' 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
Dim Lands_CheckIsLandSharedToPlayerByPos = RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String,Boolean))("PFLP", "Lands::CheckIsLandSharedToPlayerByPos")
' 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
Dim Lands_CheckIsLandSharedToPlayerByPosInt = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt")
' (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
Dim Lands_CheckPlayerHasCreateChestPermission = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckPlayerHasCreateChestPermission")
' (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
Dim Lands_CheckPlayerHasOpenChestPermission = RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckPlayerHasOpenChestPermission")
' 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
Dim Lands_GetPlayerAllPermissionGroupId = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Lands::GetPlayerAllPermissionGroupId")
' 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
Dim Lands_GetPlayerPermissionGroup = RemoteCallAPI.ImportAs(Of Func(Of String,String,String))("PFLP", "Lands::GetPlayerPermissionGroup")
' 删玩家权限组(指定ID) 返回值类型：bool
Dim Lands_DeletePlayerPermissionGroup = RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "Lands::DeletePlayerPermissionGroup")
' 修改家权限组内容(指定ID) 返回值类型：bool
Dim Lands_EditPlayerPermissionGroup = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,Boolean))("PFLP", "Lands::EditPlayerPermissionGroup")
' 添加权限组 返回值类型：bool
Dim Lands_AddPlayerPermissionGroup = RemoteCallAPI.ImportAs(Of Func(Of String,String,String,Boolean))("PFLP", "Lands::AddPlayerPermissionGroup")
' 取玩家拥有的领地 返回值类型：string
Dim Lands_GetLandsOwnedByPlayer = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Lands::GetLandsOwnedByPlayer")
' 取共享给玩家的领地 返回值类型：string
Dim Lands_GetLandsSharedToPlayer = RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Lands::GetLandsSharedToPlayer")
' 创建浮空字(给玩家发包) 返回值类型：int
Dim FloatText_Add = RemoteCallAPI.ImportAs(Of Func(Of String,Single,Single,Single,String,Integer))("PFLP", "FloatText::Add")
' 移除浮空字(给玩家发包)
Dim FloatText_Remove = RemoteCallAPI.ImportAs(Of Action(Of String,Integer))("PFLP", "FloatText::Remove")
' 获取玩家(指定玩家名)金钱 返回值类型：long
Dim Money_Get = RemoteCallAPI.ImportAs(Of Func(Of String,Long))("PFLP", "Money::Get")
' 给玩家(指定玩家名)加钱
Dim Money_Add = RemoteCallAPI.ImportAs(Of Action(Of String,Long,String))("PFLP", "Money::Add")
' 给玩家(指定玩家名)减钱
Dim Money_Remove = RemoteCallAPI.ImportAs(Of Action(Of String,Long,String))("PFLP", "Money::Remove")

```
</details>
<details><summary>VB Module / 模块类定义（推荐）</summary>

``` vb
Imports RemoteCallAPI = LiteLoader.RemoteCall.RemoteCallAPI;

Friend Module PFLP
	Public NotInheritable Class General
		Private Shared General_SetConfig_instance As Lazy(Of Func(Of String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,Boolean))("PFLP", "General::SetConfig"))
		''' <summary> 设置全局配置文件（要求JSON字符串） 返回值类型：bool </summary>
		Public Shared Function SetConfig(jsonStr As String) As bool 
			Return General_SetConfig_instance.Value(jsonStr)
		End Function
		Private Shared General_GetConfig_instance As Lazy(Of Func(Of String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String))("PFLP", "General::GetConfig"))
		''' <summary> 获取全局配置文件（JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetConfig() As string 
			Return General_GetConfig_instance.Value()
		End Function
		Private Shared General_Reload_instance As Lazy(Of Action)(Function() RemoteCallAPI.ImportAs(Of Action)("PFLP", "General::Reload"))
		''' <summary> 重新加载所有功能的配置文件 </summary>
		Public Shared Sub Reload()  
			General_Reload_instance.Value()
		End Sub
	End Class
	Public NotInheritable Class Location
		Private Shared Location_GetAllCacheData_instance As Lazy(Of Func(Of String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String))("PFLP", "Location::GetAllCacheData"))
		''' <summary> 获取全部IP归属地缓存（JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetAllCacheData() As string 
			Return Location_GetAllCacheData_instance.Value()
		End Function
		Private Shared Location_SetIpLocation_instance As Lazy(Of Action(Of String,String,String,String,String,String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String,String,String,String,String,String))("PFLP", "Location::SetIpLocation"))
		''' <summary>  设置IP归属地缓存 </summary>
		Public Shared Sub SetIpLocation(ip As String,country As String,province As String,city As String,area As String,isp As String,language As String)  
			Location_SetIpLocation_instance.Value(ip,country,province,city,area,isp,language)
		End Sub
	End Class
	Public NotInheritable Class Tpa
		Private Shared Tpa_GetTemp_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Tpa::GetTemp"))
		''' <summary> 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetTemp(playerXuid As String) As string 
			Return Tpa_GetTemp_instance.Value(playerXuid)
		End Function
	End Class
	Public NotInheritable Class Statistics
		Private Shared Statistics_GetPlayerStatistics_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Statistics::GetPlayerStatistics"))
		''' <summary> 获取指定玩家的统计数据（JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetPlayerStatistics(playerXuid As String) As string 
			Return Statistics_GetPlayerStatistics_instance.Value(playerXuid)
		End Function
		Private Shared Statistics_SetPlayerStatistics_instance As Lazy(Of Action(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "Statistics::SetPlayerStatistics"))
		''' <summary> 设定指定玩家的统计数据（JSON字符串） </summary>
		Public Shared Sub SetPlayerStatistics(playerXuid As String,newData As String)  
			Statistics_SetPlayerStatistics_instance.Value(playerXuid,newData)
		End Sub
	End Class
	Public NotInheritable Class Format
		Private Shared Format_GetVariableString_instance As Lazy(Of Func(Of String,String,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String))("PFLP", "Format::GetVariableString"))
		''' <summary> 获取变量 返回值类型：string </summary>
		Public Shared Function GetVariableString(playerXuid As String,name As String,format As String) As string 
			Return Format_GetVariableString_instance.Value(playerXuid,name,format)
		End Function
		Private Shared Format_GetVariableInt_instance As Lazy(Of Func(Of String,String,Integer))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,Integer))("PFLP", "Format::GetVariableInt"))
		''' <summary> 获取变量，但是强制返回int类型 返回值类型：int </summary>
		Public Shared Function GetVariableInt(playerXuid As String,name As String) As int 
			Return Format_GetVariableInt_instance.Value(playerXuid,name)
		End Function
		Private Shared Format_GetVariableFloat_instance As Lazy(Of Func(Of String,String,Single))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,Single))("PFLP", "Format::GetVariableFloat"))
		''' <summary> 获取变量，但是强制返回float类型 返回值类型：float </summary>
		Public Shared Function GetVariableFloat(playerXuid As String,name As String) As float 
			Return Format_GetVariableFloat_instance.Value(playerXuid,name)
		End Function
		Private Shared Format_FormatRawString_instance As Lazy(Of Func(Of String,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String))("PFLP", "Format::FormatRawString"))
		''' <summary> 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string </summary>
		Public Shared Function FormatRawString(playerXuid As String,rawFormat As String) As string 
			Return Format_FormatRawString_instance.Value(playerXuid,rawFormat)
		End Function
		Private Shared Format_DefineFormat_instance As Lazy(Of Func(Of String,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "Format::DefineFormat"))
		''' <summary> 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool </summary>
		Public Shared Function DefineFormat(id As String,rawFormat As String) As bool 
			Return Format_DefineFormat_instance.Value(id,rawFormat)
		End Function
		Private Shared Format_RemoveFormat_instance As Lazy(Of Func(Of String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,Boolean))("PFLP", "Format::RemoveFormat"))
		''' <summary> 移除格式化定义（返回true为存在并移除） 返回值类型：bool </summary>
		Public Shared Function RemoveFormat(id As String) As bool 
			Return Format_RemoveFormat_instance.Value(id)
		End Function
		Private Shared Format_GetFormatWithPlayer_instance As Lazy(Of Func(Of String,String,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String))("PFLP", "Format::GetFormatWithPlayer"))
		''' <summary> 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string </summary>
		Public Shared Function GetFormatWithPlayer(id As String,playerXuid As String,extra As String) As string 
			Return Format_GetFormatWithPlayer_instance.Value(id,playerXuid,extra)
		End Function
		Private Shared Format_GetFormatWithPlayerLang_instance As Lazy(Of Func(Of String,String,String,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String,String))("PFLP", "Format::GetFormatWithPlayerLang"))
		''' <summary> 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string </summary>
		Public Shared Function GetFormatWithPlayerLang(id As String,playerXuid As String,playerLangXuid As String,extra As String) As string 
			Return Format_GetFormatWithPlayerLang_instance.Value(id,playerXuid,playerLangXuid,extra)
		End Function
		Private Shared Format_GetFormat_instance As Lazy(Of Func(Of String,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String))("PFLP", "Format::GetFormat"))
		''' <summary> 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string </summary>
		Public Shared Function GetFormat(id As String,extra As String) As string 
			Return Format_GetFormat_instance.Value(id,extra)
		End Function
	End Class
	Public NotInheritable Class Command
		Private Shared Command_RenameCommand_instance As Lazy(Of Action(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "Command::RenameCommand"))
		''' <summary> 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令) </summary>
		Public Shared Sub RenameCommand(cmd As String,newCmd As String)  
			Command_RenameCommand_instance.Value(cmd,newCmd)
		End Sub
		Private Shared Command_ExecuteInternalCommand_instance As Lazy(Of Func(Of String,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "Command::ExecuteInternalCommand"))
		''' <summary> 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool </summary>
		Public Shared Function ExecuteInternalCommand(playerXuid As String,cmd As String) As bool 
			Return Command_ExecuteInternalCommand_instance.Value(playerXuid,cmd)
		End Function
		Private Shared Command_SetCommandDisabled_instance As Lazy(Of Action(Of String,String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String,String))("PFLP", "Command::SetCommandDisabled"))
		''' <summary> 设置命令禁用(可设置提示)(支持任意命令) </summary>
		Public Shared Sub SetCommandDisabled(playerXuid As String,cmd As String,feedback As String)  
			Command_SetCommandDisabled_instance.Value(playerXuid,cmd,feedback)
		End Sub
		Private Shared Command_SetCommandEnabled_instance As Lazy(Of Action(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "Command::SetCommandEnabled"))
		''' <summary> 设置命令启用 </summary>
		Public Shared Sub SetCommandEnabled(playerXuid As String,cmd As String)  
			Command_SetCommandEnabled_instance.Value(playerXuid,cmd)
		End Sub
	End Class
	Public NotInheritable Class Language
		Private Shared Language_Translate_instance As Lazy(Of Func(Of String,String,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String,String))("PFLP", "Language::Translate"))
		''' <summary> 翻译 返回值类型：string </summary>
		Public Shared Function Translate(fromLanguage As String,toLanguage As String,text As String) As string 
			Return Language_Translate_instance.Value(fromLanguage,toLanguage,text)
		End Function
	End Class
	Public NotInheritable Class ChatEx
		Private Shared ChatEx_SetNickName_instance As Lazy(Of Action(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "ChatEx::SetNickName"))
		''' <summary> 设置玩家昵称 </summary>
		Public Shared Sub SetNickName(playerXuid As String,nickName As String)  
			ChatEx_SetNickName_instance.Value(playerXuid,nickName)
		End Sub
		Private Shared ChatEx_SetFakeName_instance As Lazy(Of Action(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "ChatEx::SetFakeName"))
		''' <summary> 设置玩家聊天时的名字 </summary>
		Public Shared Sub SetFakeName(playerXuid As String,fakeName As String)  
			ChatEx_SetFakeName_instance.Value(playerXuid,fakeName)
		End Sub
		Private Shared ChatEx_SetEnd_instance As Lazy(Of Action(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "ChatEx::SetEnd"))
		''' <summary> 设置玩家聊天消息后缀 </summary>
		Public Shared Sub SetEnd(playerXuid As String,endStr As String)  
			ChatEx_SetEnd_instance.Value(playerXuid,endStr)
		End Sub
		Private Shared ChatEx_SetStart_instance As Lazy(Of Action(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,String))("PFLP", "ChatEx::SetStart"))
		''' <summary> 设置玩家聊天消息前缀 </summary>
		Public Shared Sub SetStart(playerXuid As String,startStr As String)  
			ChatEx_SetStart_instance.Value(playerXuid,startStr)
		End Sub
		Private Shared ChatEx_GetNickName_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "ChatEx::GetNickName"))
		''' <summary> 获取玩家昵称 返回值类型：string </summary>
		Public Shared Function GetNickName(playerXuid As String) As string 
			Return ChatEx_GetNickName_instance.Value(playerXuid)
		End Function
		Private Shared ChatEx_GetFakeName_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "ChatEx::GetFakeName"))
		''' <summary> 获取玩家聊天时的名字 返回值类型：string </summary>
		Public Shared Function GetFakeName(playerXuid As String) As string 
			Return ChatEx_GetFakeName_instance.Value(playerXuid)
		End Function
		Private Shared ChatEx_GetEnd_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "ChatEx::GetEnd"))
		''' <summary> 获取玩家聊天消息后缀 返回值类型：string </summary>
		Public Shared Function GetEnd(playerXuid As String) As string 
			Return ChatEx_GetEnd_instance.Value(playerXuid)
		End Function
		Private Shared ChatEx_GetStart_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "ChatEx::GetStart"))
		''' <summary> 获取玩家聊天消息前缀 返回值类型：string </summary>
		Public Shared Function GetStart(playerXuid As String) As string 
			Return ChatEx_GetStart_instance.Value(playerXuid)
		End Function
	End Class
	Public NotInheritable Class ParticlesGraphics
		Private Shared ParticlesGraphics_DrawBlock_instance As Lazy(Of Action(Of String,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single))("PFLP", "ParticlesGraphics::DrawBlock"))
		''' <summary> 给指定方块描框 </summary>
		Public Shared Sub DrawBlock(playerXuid As String,x As Integer,y As Integer,z As Integer,r As Single,g As Single,b As Single,thickness As Single,time As Single,alpha As Single)  
			ParticlesGraphics_DrawBlock_instance.Value(playerXuid,x,y,z,r,g,b,thickness,time,alpha)
		End Sub
		Private Shared ParticlesGraphics_DrawBorder_instance As Lazy(Of Action(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single))("PFLP", "ParticlesGraphics::DrawBorder"))
		''' <summary> 给指定区域描框 </summary>
		Public Shared Sub DrawBorder(playerXuid As String,x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,r As Single,g As Single,b As Single,thickness As Single,time As Single,alpha As Single)  
			ParticlesGraphics_DrawBorder_instance.Value(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha)
		End Sub
	End Class
	Public NotInheritable Class Lands
		Private Shared Lands_CheckCubeHasLand_instance As Lazy(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,Boolean))("PFLP", "Lands::CheckCubeHasLand"))
		''' <summary> 检查指定立方体区域(float)是否有领地 返回值类型：bool </summary>
		Public Shared Function CheckCubeHasLand(x1 As Single,y1 As Single,z1 As Single,x2 As Single,y2 As Single,z2 As Single,dimensionId As Integer) As bool 
			Return Lands_CheckCubeHasLand_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_CheckCubeHasLandInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,Boolean))("PFLP", "Lands::CheckCubeHasLandInt"))
		''' <summary> 检查指定立方体区域(int)是否有领地 返回值类型：bool </summary>
		Public Shared Function CheckCubeHasLandInt(x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,dimensionId As Integer) As bool 
			Return Lands_CheckCubeHasLandInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_CheckPosHasLand_instance As Lazy(Of Func(Of Single,Single,Single,Integer,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,Boolean))("PFLP", "Lands::CheckPosHasLand"))
		''' <summary> 检查指定坐标(float)是否有领地 返回值类型：bool </summary>
		Public Shared Function CheckPosHasLand(x As Single,y As Single,z As Single,dimensionId As Integer) As bool 
			Return Lands_CheckPosHasLand_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_CheckPosHasLandInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Boolean))("PFLP", "Lands::CheckPosHasLandInt"))
		''' <summary> 检查指定坐标(int)是否有领地 返回值类型：bool </summary>
		Public Shared Function CheckPosHasLandInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer) As bool 
			Return Lands_CheckPosHasLandInt_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandByCube_instance As Lazy(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,String))("PFLP", "Lands::GetLandByCube"))
		''' <summary> 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandByCube(x1 As Single,y1 As Single,z1 As Single,x2 As Single,y2 As Single,z2 As Single,dimensionId As Integer) As string 
			Return Lands_GetLandByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_GetLandByCubeInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String))("PFLP", "Lands::GetLandByCubeInt"))
		''' <summary> 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandByCubeInt(x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,dimensionId As Integer) As string 
			Return Lands_GetLandByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_GetLandByPos_instance As Lazy(Of Func(Of Single,Single,Single,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String))("PFLP", "Lands::GetLandByPos"))
		''' <summary> 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandByPos(x As Single,y As Single,z As Single,dimensionId As Integer) As string 
			Return Lands_GetLandByPos_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandByPosInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String))("PFLP", "Lands::GetLandByPosInt"))
		''' <summary> 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer) As string 
			Return Lands_GetLandByPosInt_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandInfoByCube_instance As Lazy(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Single,Single,Single,Integer,String))("PFLP", "Lands::GetLandInfoByCube"))
		''' <summary> 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandInfoByCube(x1 As Single,y1 As Single,z1 As Single,x2 As Single,y2 As Single,z2 As Single,dimensionId As Integer) As string 
			Return Lands_GetLandInfoByCube_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_GetLandInfoByCubeInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String))("PFLP", "Lands::GetLandInfoByCubeInt"))
		''' <summary> 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandInfoByCubeInt(x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,dimensionId As Integer) As string 
			Return Lands_GetLandInfoByCubeInt_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId)
		End Function
		Private Shared Lands_GetLandInfoByPos_instance As Lazy(Of Func(Of Single,Single,Single,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String))("PFLP", "Lands::GetLandInfoByPos"))
		''' <summary> 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandInfoByPos(x As Single,y As Single,z As Single,dimensionId As Integer) As string 
			Return Lands_GetLandInfoByPos_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandInfoByPosInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String))("PFLP", "Lands::GetLandInfoByPosInt"))
		''' <summary> 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string </summary>
		Public Shared Function GetLandInfoByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer) As string 
			Return Lands_GetLandInfoByPosInt_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_SetLandInfoByPos_instance As Lazy(Of Func(Of Single,Single,Single,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String,Boolean))("PFLP", "Lands::SetLandInfoByPos"))
		''' <summary> 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		Public Shared Function SetLandInfoByPos(x As Single,y As Single,z As Single,dimensionId As Integer,landinfo As String) As bool 
			Return Lands_SetLandInfoByPos_instance.Value(x,y,z,dimensionId,landinfo)
		End Function
		Private Shared Lands_SetLandInfoByPosInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::SetLandInfoByPosInt"))
		''' <summary> 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool </summary>
		Public Shared Function SetLandInfoByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer,landinfo As String) As bool 
			Return Lands_SetLandInfoByPosInt_instance.Value(x,y,z,dimensionId,landinfo)
		End Function
		Private Shared Lands_CreateLand2D_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CreateLand2D"))
		''' <summary> 新建领地 返回值类型：bool </summary>
		Public Shared Function CreateLand2D(x1 As Integer,z1 As Integer,x2 As Integer,z2 As Integer,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CreateLand2D_instance.Value(x1,z1,x2,z2,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CreateLand3D_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CreateLand3D"))
		''' <summary> 新建领地 返回值类型：bool </summary>
		Public Shared Function CreateLand3D(x1 As Integer,y1 As Integer,z1 As Integer,x2 As Integer,y2 As Integer,z2 As Integer,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CreateLand3D_instance.Value(x1,y1,z1,x2,y2,z2,dimensionId,playerXuid)
		End Function
		Private Shared Lands_DeleteLandByPos_instance As Lazy(Of Func(Of Single,Single,Single,Integer,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,Boolean))("PFLP", "Lands::DeleteLandByPos"))
		''' <summary> 删除指定坐标(float)的领地 返回值类型：bool </summary>
		Public Shared Function DeleteLandByPos(x As Single,y As Single,z As Single,dimensionId As Integer) As bool 
			Return Lands_DeleteLandByPos_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_DeleteLandByPosInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,Boolean))("PFLP", "Lands::DeleteLandByPosInt"))
		''' <summary> 删除指定坐标(int)的领地 返回值类型：bool </summary>
		Public Shared Function DeleteLandByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer) As bool 
			Return Lands_DeleteLandByPosInt_instance.Value(x,y,z,dimensionId)
		End Function
		Private Shared Lands_GetLandPermissionByPos_instance As Lazy(Of Func(Of Single,Single,Single,Integer,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String,String))("PFLP", "Lands::GetLandPermissionByPos"))
		''' <summary> 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string </summary>
		Public Shared Function GetLandPermissionByPos(x As Single,y As Single,z As Single,dimensionId As Integer,playerXuid As String) As string 
			Return Lands_GetLandPermissionByPos_instance.Value(x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_GetLandPermissionByPosInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,String))("PFLP", "Lands::GetLandPermissionByPosInt"))
		''' <summary> 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string </summary>
		Public Shared Function GetLandPermissionByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer,playerXuid As String) As string 
			Return Lands_GetLandPermissionByPosInt_instance.Value(x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CheckLandPermissionByPos_instance As Lazy(Of Func(Of String,Single,Single,Single,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,Single,Single,Single,Integer,String,Boolean))("PFLP", "Lands::CheckLandPermissionByPos"))
		''' <summary> 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool </summary>
		Public Shared Function CheckLandPermissionByPos(permissionId As String,x As Single,y As Single,z As Single,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CheckLandPermissionByPos_instance.Value(permissionId,x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CheckLandPermissionByPosInt_instance As Lazy(Of Func(Of String,Integer,Integer,Integer,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckLandPermissionByPosInt"))
		''' <summary> 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool </summary>
		Public Shared Function CheckLandPermissionByPosInt(permissionId As String,x As Integer,y As Integer,z As Integer,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CheckLandPermissionByPosInt_instance.Value(permissionId,x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CheckPlayerIsLandOwnerByPos_instance As Lazy(Of Func(Of Single,Single,Single,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String,Boolean))("PFLP", "Lands::CheckPlayerIsLandOwnerByPos"))
		''' <summary> 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool </summary>
		Public Shared Function CheckPlayerIsLandOwnerByPos(x As Single,y As Single,z As Single,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CheckPlayerIsLandOwnerByPos_instance.Value(x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CheckPlayerIsLandOwnerByPosInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt"))
		''' <summary> 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool </summary>
		Public Shared Function CheckPlayerIsLandOwnerByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CheckPlayerIsLandOwnerByPosInt_instance.Value(x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CheckIsLandSharedToPlayerByPos_instance As Lazy(Of Func(Of Single,Single,Single,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Single,Single,Single,Integer,String,Boolean))("PFLP", "Lands::CheckIsLandSharedToPlayerByPos"))
		''' <summary> 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool </summary>
		Public Shared Function CheckIsLandSharedToPlayerByPos(x As Single,y As Single,z As Single,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CheckIsLandSharedToPlayerByPos_instance.Value(x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CheckIsLandSharedToPlayerByPosInt_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt"))
		''' <summary> 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool </summary>
		Public Shared Function CheckIsLandSharedToPlayerByPosInt(x As Integer,y As Integer,z As Integer,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CheckIsLandSharedToPlayerByPosInt_instance.Value(x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CheckPlayerHasCreateChestPermission_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckPlayerHasCreateChestPermission"))
		''' <summary> (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool </summary>
		Public Shared Function CheckPlayerHasCreateChestPermission(x As Integer,y As Integer,z As Integer,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CheckPlayerHasCreateChestPermission_instance.Value(x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_CheckPlayerHasOpenChestPermission_instance As Lazy(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of Integer,Integer,Integer,Integer,String,Boolean))("PFLP", "Lands::CheckPlayerHasOpenChestPermission"))
		''' <summary> (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool </summary>
		Public Shared Function CheckPlayerHasOpenChestPermission(x As Integer,y As Integer,z As Integer,dimensionId As Integer,playerXuid As String) As bool 
			Return Lands_CheckPlayerHasOpenChestPermission_instance.Value(x,y,z,dimensionId,playerXuid)
		End Function
		Private Shared Lands_GetPlayerAllPermissionGroupId_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Lands::GetPlayerAllPermissionGroupId"))
		''' <summary> 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string </summary>
		Public Shared Function GetPlayerAllPermissionGroupId(playerXuid As String) As string 
			Return Lands_GetPlayerAllPermissionGroupId_instance.Value(playerXuid)
		End Function
		Private Shared Lands_GetPlayerPermissionGroup_instance As Lazy(Of Func(Of String,String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String))("PFLP", "Lands::GetPlayerPermissionGroup"))
		''' <summary> 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string </summary>
		Public Shared Function GetPlayerPermissionGroup(playerXuid As String,permissionGroupId As String) As string 
			Return Lands_GetPlayerPermissionGroup_instance.Value(playerXuid,permissionGroupId)
		End Function
		Private Shared Lands_DeletePlayerPermissionGroup_instance As Lazy(Of Func(Of String,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,Boolean))("PFLP", "Lands::DeletePlayerPermissionGroup"))
		''' <summary> 删玩家权限组(指定ID) 返回值类型：bool </summary>
		Public Shared Function DeletePlayerPermissionGroup(playerXuid As String,permissionGroupId As String) As bool 
			Return Lands_DeletePlayerPermissionGroup_instance.Value(playerXuid,permissionGroupId)
		End Function
		Private Shared Lands_EditPlayerPermissionGroup_instance As Lazy(Of Func(Of String,String,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String,Boolean))("PFLP", "Lands::EditPlayerPermissionGroup"))
		''' <summary> 修改家权限组内容(指定ID) 返回值类型：bool </summary>
		Public Shared Function EditPlayerPermissionGroup(playerXuid As String,permissionGroupId As String,jsonString As String) As bool 
			Return Lands_EditPlayerPermissionGroup_instance.Value(playerXuid,permissionGroupId,jsonString)
		End Function
		Private Shared Lands_AddPlayerPermissionGroup_instance As Lazy(Of Func(Of String,String,String,Boolean))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String,String,Boolean))("PFLP", "Lands::AddPlayerPermissionGroup"))
		''' <summary> 添加权限组 返回值类型：bool </summary>
		Public Shared Function AddPlayerPermissionGroup(playerXuid As String,permissionGroupId As String,jsonString As String) As bool 
			Return Lands_AddPlayerPermissionGroup_instance.Value(playerXuid,permissionGroupId,jsonString)
		End Function
		Private Shared Lands_GetLandsOwnedByPlayer_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Lands::GetLandsOwnedByPlayer"))
		''' <summary> 取玩家拥有的领地 返回值类型：string </summary>
		Public Shared Function GetLandsOwnedByPlayer(playerXuid As String) As string 
			Return Lands_GetLandsOwnedByPlayer_instance.Value(playerXuid)
		End Function
		Private Shared Lands_GetLandsSharedToPlayer_instance As Lazy(Of Func(Of String,String))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,String))("PFLP", "Lands::GetLandsSharedToPlayer"))
		''' <summary> 取共享给玩家的领地 返回值类型：string </summary>
		Public Shared Function GetLandsSharedToPlayer(playerXuid As String) As string 
			Return Lands_GetLandsSharedToPlayer_instance.Value(playerXuid)
		End Function
	End Class
	Public NotInheritable Class FloatText
		Private Shared FloatText_Add_instance As Lazy(Of Func(Of String,Single,Single,Single,String,Integer))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,Single,Single,Single,String,Integer))("PFLP", "FloatText::Add"))
		''' <summary> 创建浮空字(给玩家发包) 返回值类型：int </summary>
		Public Shared Function Add(playerXuid As String,x As Single,y As Single,z As Single,text As String) As int 
			Return FloatText_Add_instance.Value(playerXuid,x,y,z,text)
		End Function
		Private Shared FloatText_Remove_instance As Lazy(Of Action(Of String,Integer))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,Integer))("PFLP", "FloatText::Remove"))
		''' <summary> 移除浮空字(给玩家发包) </summary>
		Public Shared Sub Remove(playerXuid As String,id As Integer)  
			FloatText_Remove_instance.Value(playerXuid,id)
		End Sub
	End Class
	Public NotInheritable Class Money
		Private Shared Money_Get_instance As Lazy(Of Func(Of String,Long))(Function() RemoteCallAPI.ImportAs(Of Func(Of String,Long))("PFLP", "Money::Get"))
		''' <summary> 获取玩家(指定玩家名)金钱 返回值类型：long </summary>
		Public Shared Function Get(playerXuid As String) As long 
			Return Money_Get_instance.Value(playerXuid)
		End Function
		Private Shared Money_Add_instance As Lazy(Of Action(Of String,Long,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,Long,String))("PFLP", "Money::Add"))
		''' <summary> 给玩家(指定玩家名)加钱 </summary>
		Public Shared Sub Add(playerXuid As String,count As Long,info As String)  
			Money_Add_instance.Value(playerXuid,count,info)
		End Sub
		Private Shared Money_Remove_instance As Lazy(Of Action(Of String,Long,String))(Function() RemoteCallAPI.ImportAs(Of Action(Of String,Long,String))("PFLP", "Money::Remove"))
		''' <summary> 给玩家(指定玩家名)减钱 </summary>
		Public Shared Sub Remove(playerXuid As String,count As Long,info As String)  
			Money_Remove_instance.Value(playerXuid,count,info)
		End Sub
	End Class
	Public NotInheritable Class Internal
	End Class
End Module

```
</details>

---