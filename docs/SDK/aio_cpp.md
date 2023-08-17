---
title: 汇总 C++ SDK
icon: laptop-code
order: 1001
---

``` cpp
// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
auto General_SetConfig = RemoteCall::importAs<bool(std::string const& jsonStr)>("PFLP", "General::SetConfig");
// 获取全局配置文件（JSON字符串） 返回值类型：string
auto General_GetConfig = RemoteCall::importAs<std::string()>("PFLP", "General::GetConfig");
// 重新加载所有功能的配置文件
auto General_Reload = RemoteCall::importAs<void()>("PFLP", "General::Reload");
// 获取全部IP归属地缓存（JSON字符串） 返回值类型：string
auto Location_GetAllCacheData = RemoteCall::importAs<std::string()>("PFLP", "Location::GetAllCacheData");
//  设置IP归属地缓存
auto Location_SetIpLocation = RemoteCall::importAs<void(std::string const& ip,std::string const& country,std::string const& province,std::string const& city,std::string const& area,std::string const& isp,std::string const& language)>("PFLP", "Location::SetIpLocation");
// 开始可取消的延迟传送，可使用`$pf.listen($pf.EventKey.teleportCanceled,...)`监听取消传送 返回值类型：int
auto Teleport_StartNew = RemoteCall::importAs<int(std::string const& playerXuid,float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Teleport::StartNew");
// 获取指定玩家的Tpa状态（JSON字符串） 返回值类型：string
auto Teleport_GetTpaState = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Teleport::GetTpaState");
// 获取指定玩家的Home（JSON字符串） 返回值类型：string
auto Teleport_GetHome = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Teleport::GetHome");
// 获取服务器的全部传送点（JSON字符串） 返回值类型：string
auto Teleport_GetWarp = RemoteCall::importAs<std::string()>("PFLP", "Teleport::GetWarp");
// 获取指定玩家的统计数据（JSON字符串） 返回值类型：string
auto Statistics_GetPlayerStatistics = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Statistics::GetPlayerStatistics");
// 设定指定玩家的统计数据（JSON字符串）
auto Statistics_SetPlayerStatistics = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& newData)>("PFLP", "Statistics::SetPlayerStatistics");
// 获取变量 返回值类型：string
auto Format_GetVariableString = RemoteCall::importAs<std::string(std::string const& playerXuid,std::string const& name,std::string const& format)>("PFLP", "Format::GetVariableString");
// 获取变量，但是强制返回int类型 返回值类型：int
auto Format_GetVariableInt = RemoteCall::importAs<int(std::string const& playerXuid,std::string const& name)>("PFLP", "Format::GetVariableInt");
// 获取变量，但是强制返回float类型 返回值类型：float
auto Format_GetVariableFloat = RemoteCall::importAs<float(std::string const& playerXuid,std::string const& name)>("PFLP", "Format::GetVariableFloat");
// 格式化字符串(反复调用会导致反复解析，推荐使用DefineFormat和GetFormat) 返回值类型：string
auto Format_FormatRawString = RemoteCall::importAs<std::string(std::string const& playerXuid,std::string const& rawFormat)>("PFLP", "Format::FormatRawString");
// 定义格式化内容（返回true为创建成功，false为覆盖） 返回值类型：bool
auto Format_DefineFormat = RemoteCall::importAs<bool(std::string const& id,std::string const& rawFormat)>("PFLP", "Format::DefineFormat");
// 移除格式化定义（返回true为存在并移除） 返回值类型：bool
auto Format_RemoveFormat = RemoteCall::importAs<bool(std::string const& id)>("PFLP", "Format::RemoveFormat");
// 通过已定义的ID获取格式化内容（性能更优） 返回值类型：string
auto Format_GetFormatWithPlayer = RemoteCall::importAs<std::string(std::string const& id,std::string const& playerXuid,std::string const& extra)>("PFLP", "Format::GetFormatWithPlayer");
// 通过已定义的ID获取格式化内容（其中playerXuid为玩家上下文，playerLangXuid用于格式化的语言获取） 返回值类型：string
auto Format_GetFormatWithPlayerLang = RemoteCall::importAs<std::string(std::string const& id,std::string const& playerXuid,std::string const& playerLangXuid,std::string const& extra)>("PFLP", "Format::GetFormatWithPlayerLang");
// 通过已定义的ID获取格式化内容（不包含玩家上下文） 返回值类型：string
auto Format_GetFormat = RemoteCall::importAs<std::string(std::string const& id,std::string const& extra)>("PFLP", "Format::GetFormat");
// 重命名命令(仅pflp插件的命令，暂不支持其他插件的命令)(newCmd为空字符串则表示隐藏该cmd命令)
auto Command_RenameCommand = RemoteCall::importAs<void(std::string const& cmd,std::string const& newCmd)>("PFLP", "Command::RenameCommand");
// 执行pflp内部命令(无视重命名,执行的是原始命令) 返回值类型：bool
auto Command_ExecuteInternalCommand = RemoteCall::importAs<bool(std::string const& playerXuid,std::string const& cmd)>("PFLP", "Command::ExecuteInternalCommand");
// 设置命令禁用(可设置提示)(支持任意命令)
auto Command_SetCommandDisabled = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& cmd,std::string const& feedback)>("PFLP", "Command::SetCommandDisabled");
// 设置命令启用
auto Command_SetCommandEnabled = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& cmd)>("PFLP", "Command::SetCommandEnabled");
// 翻译 返回值类型：string
auto Language_Translate = RemoteCall::importAs<std::string(std::string const& fromLanguage,std::string const& toLanguage,std::string const& text)>("PFLP", "Language::Translate");
// 设置玩家昵称
auto ChatEx_SetNickName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& nickName)>("PFLP", "ChatEx::SetNickName");
// 设置玩家聊天时的名字
auto ChatEx_SetFakeName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& fakeName)>("PFLP", "ChatEx::SetFakeName");
// 设置玩家聊天消息后缀
auto ChatEx_SetEnd = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& endStr)>("PFLP", "ChatEx::SetEnd");
// 设置玩家聊天消息前缀
auto ChatEx_SetStart = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& startStr)>("PFLP", "ChatEx::SetStart");
// 获取玩家昵称 返回值类型：string
auto ChatEx_GetNickName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetNickName");
// 获取玩家聊天时的名字 返回值类型：string
auto ChatEx_GetFakeName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetFakeName");
// 获取玩家聊天消息后缀 返回值类型：string
auto ChatEx_GetEnd = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetEnd");
// 获取玩家聊天消息前缀 返回值类型：string
auto ChatEx_GetStart = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetStart");
// 给指定方块描框
auto ParticlesGraphics_DrawBlock = RemoteCall::importAs<void(std::string const& playerXuid,int const& x,int const& y,int const& z,float const& r,float const& g,float const& b,float const& thickness,float const& time,float const& alpha)>("PFLP", "ParticlesGraphics::DrawBlock");
// 给指定区域描框
auto ParticlesGraphics_DrawBorder = RemoteCall::importAs<void(std::string const& playerXuid,int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,float const& r,float const& g,float const& b,float const& thickness,float const& time,float const& alpha)>("PFLP", "ParticlesGraphics::DrawBorder");
// 检查指定立方体区域(float)是否有领地 返回值类型：bool
auto Lands_CheckCubeHasLand = RemoteCall::importAs<bool(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::CheckCubeHasLand");
// 检查指定立方体区域(int)是否有领地 返回值类型：bool
auto Lands_CheckCubeHasLandInt = RemoteCall::importAs<bool(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::CheckCubeHasLandInt");
// 检查指定坐标(float)是否有领地 返回值类型：bool
auto Lands_CheckPosHasLand = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::CheckPosHasLand");
// 检查指定坐标(int)是否有领地 返回值类型：bool
auto Lands_CheckPosHasLandInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::CheckPosHasLandInt");
// 获取立方体区域(float)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByCube = RemoteCall::importAs<std::string(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandByCube");
// 获取立方体区域(int)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByCubeInt = RemoteCall::importAs<std::string(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandByCubeInt");
// 获取指定坐标(float)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::GetLandByPos");
// 获取指定坐标(int)领地信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::GetLandByPosInt");
// 获取立方体区域(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByCube = RemoteCall::importAs<std::string(float const& x1,float const& y1,float const& z1,float const& x2,float const& y2,float const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByCube");
// 获取立方体区域(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByCubeInt = RemoteCall::importAs<std::string(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByCubeInt");
// 获取指定坐标(float)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByPos");
// 获取指定坐标(int)领地数据源详细信息（返回JSON字符串） 返回值类型：string
auto Lands_GetLandInfoByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::GetLandInfoByPosInt");
// 设置指定坐标(float)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
auto Lands_SetLandInfoByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByPos");
// 设置或修改指定坐标(int)领地数据源详细信息（传入JSON字符串） 返回值类型：bool
auto Lands_SetLandInfoByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& landinfo)>("PFLP", "Lands::SetLandInfoByPosInt");
// 新建领地 返回值类型：bool
auto Lands_CreateLand2D = RemoteCall::importAs<bool(int const& x1,int const& z1,int const& x2,int const& z2,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CreateLand2D");
// 新建领地 返回值类型：bool
auto Lands_CreateLand3D = RemoteCall::importAs<bool(int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CreateLand3D");
// 删除指定坐标(float)的领地 返回值类型：bool
auto Lands_DeleteLandByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId)>("PFLP", "Lands::DeleteLandByPos");
// 删除指定坐标(int)的领地 返回值类型：bool
auto Lands_DeleteLandByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId)>("PFLP", "Lands::DeleteLandByPosInt");
// 获取指定坐标(float)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
auto Lands_GetLandPermissionByPos = RemoteCall::importAs<std::string(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::GetLandPermissionByPos");
// 获取指定坐标(int)领地权限（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：string
auto Lands_GetLandPermissionByPosInt = RemoteCall::importAs<std::string(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::GetLandPermissionByPosInt");
// 检查指定坐标(float)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
auto Lands_CheckLandPermissionByPos = RemoteCall::importAs<bool(std::string const& permissionId,float const& x,float const& y,float const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckLandPermissionByPos");
// 检查指定坐标(int)领地是否有指定权限（permissionId参考GetLandPermissionByPos返回的key）（返回JSON字符串字典{key:boolean}）（可指定玩家否则playerXuid填写空字符串） 返回值类型：bool
auto Lands_CheckLandPermissionByPosInt = RemoteCall::importAs<bool(std::string const& permissionId,int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckLandPermissionByPosInt");
// 检查玩家是否是指定坐标(float)领地的主人 返回值类型：bool
auto Lands_CheckPlayerIsLandOwnerByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckPlayerIsLandOwnerByPos");
// 检查玩家是否是指定坐标(int)领地的主人 返回值类型：bool
auto Lands_CheckPlayerIsLandOwnerByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckPlayerIsLandOwnerByPosInt");
// 检查指定坐标(float)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
auto Lands_CheckIsLandSharedToPlayerByPos = RemoteCall::importAs<bool(float const& x,float const& y,float const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckIsLandSharedToPlayerByPos");
// 检查指定坐标(int)领地是否共享给指定玩家（检查具体权限请使用CheckLandPermissionByPos） 返回值类型：bool
auto Lands_CheckIsLandSharedToPlayerByPosInt = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckIsLandSharedToPlayerByPosInt");
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有开箱（方块交互）、放置、破坏的权限(主要用于锁箱插件) 返回值类型：bool
auto Lands_CheckPlayerHasCreateChestPermission = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckPlayerHasCreateChestPermission");
// (请使用GetLandPermissionByPos)  检查玩家在指定坐标(int)领地是否有使用箱子的权限(主要用于锁箱插件) 返回值类型：bool
auto Lands_CheckPlayerHasOpenChestPermission = RemoteCall::importAs<bool(int const& x,int const& y,int const& z,int const& dimensionId,std::string const& playerXuid)>("PFLP", "Lands::CheckPlayerHasOpenChestPermission");
// 取玩家所有权限组ID（返回["id1","id2"...]字符串） 返回值类型：string
auto Lands_GetPlayerAllPermissionGroupId = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Lands::GetPlayerAllPermissionGroupId");
// 取玩家权限组内容(指定ID)（返回JSON对象字符串） 返回值类型：string
auto Lands_GetPlayerPermissionGroup = RemoteCall::importAs<std::string(std::string const& playerXuid,std::string const& permissionGroupId)>("PFLP", "Lands::GetPlayerPermissionGroup");
// 删玩家权限组(指定ID) 返回值类型：bool
auto Lands_DeletePlayerPermissionGroup = RemoteCall::importAs<bool(std::string const& playerXuid,std::string const& permissionGroupId)>("PFLP", "Lands::DeletePlayerPermissionGroup");
// 修改家权限组内容(指定ID) 返回值类型：bool
auto Lands_EditPlayerPermissionGroup = RemoteCall::importAs<bool(std::string const& playerXuid,std::string const& permissionGroupId,std::string const& jsonString)>("PFLP", "Lands::EditPlayerPermissionGroup");
// 添加权限组 返回值类型：bool
auto Lands_AddPlayerPermissionGroup = RemoteCall::importAs<bool(std::string const& playerXuid,std::string const& permissionGroupId,std::string const& jsonString)>("PFLP", "Lands::AddPlayerPermissionGroup");
// 取玩家拥有的领地 返回值类型：string
auto Lands_GetLandsOwnedByPlayer = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Lands::GetLandsOwnedByPlayer");
// 取共享给玩家的领地 返回值类型：string
auto Lands_GetLandsSharedToPlayer = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Lands::GetLandsSharedToPlayer");
// 创建浮空字(给玩家发包) 返回值类型：int
auto FloatText_Add = RemoteCall::importAs<int(std::string const& playerXuid,float const& x,float const& y,float const& z,std::string const& text)>("PFLP", "FloatText::Add");
// 移除浮空字(给玩家发包)
auto FloatText_Remove = RemoteCall::importAs<void(std::string const& playerXuid,int const& id)>("PFLP", "FloatText::Remove");
// 获取玩家(指定玩家名)金钱 返回值类型：long
auto Money_Get = RemoteCall::importAs<long long(std::string const& playerXuid)>("PFLP", "Money::Get");
// 给玩家(指定玩家名)加钱
auto Money_Add = RemoteCall::importAs<void(std::string const& playerXuid,long long const& count,std::string const& info)>("PFLP", "Money::Add");
// 给玩家(指定玩家名)减钱
auto Money_Remove = RemoteCall::importAs<void(std::string const& playerXuid,long long const& count,std::string const& info)>("PFLP", "Money::Remove");
// 获取所有礼包的礼包名（返回json字符串数组） 返回值类型：string
auto GiftCode_GetAllPackName = RemoteCall::importAs<std::string()>("PFLP", "GiftCode::GetAllPackName");
// 获取指定礼包的所有可用的兑换码（返回json字符串数组） 返回值类型：string
auto GiftCode_GetAvailableCode = RemoteCall::importAs<std::string(std::string const& packName)>("PFLP", "GiftCode::GetAvailableCode");
// 给指定礼包增加兑换码 返回值类型：bool
auto GiftCode_AddCode = RemoteCall::importAs<bool(std::string const& packName,std::string const& code)>("PFLP", "GiftCode::AddCode");
// 删除指定礼包的指定兑换码 返回值类型：bool
auto GiftCode_RemoveCode = RemoteCall::importAs<bool(std::string const& packName,std::string const& code)>("PFLP", "GiftCode::RemoveCode");
// 删除指定礼包的所有可用的兑换码（返回json字符串数组）
auto GiftCode_ClearCode = RemoteCall::importAs<void(std::string const& packName)>("PFLP", "GiftCode::ClearCode");

```