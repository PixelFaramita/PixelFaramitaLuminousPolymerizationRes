# PixelFaramitaLuminousPolymerization功能简介

### **Tpa | 请求传送**

### **Warp |  全局传送点**

### **Home ｜个人传送点** (by @voyage27)

### **TPR | 随机传送**

- 不完善，暂不推荐开启

### **Land | 领地**

### **Sidebar | 侧边栏**

### **Popup | 弹出信息**

### **PlayerList | 玩家列表（记分板）信息**

### **JoinLocation | 进服IP归属地显示**

### **DynamicMotd | 动态Motd**

### **BelowName | 玩家名下方信息显示**

### **Helper | 辅助功能** 

- ForceDownloadWithoutCovering：强制下载材质包但不覆盖
- FakeSeed：假种子
- LevelName：存档名（显示在暂停界面）
- EditRedstoneTPS：修改红石速率（支持三个维度分开修改）

### **HeightEdit | 编辑世界高度**

- 暂时只支持修改主世界高度，范围-512到512(最低点设置过低可能会导致世界生成的比较奇怪)

- 如果存档是虚空或者超平坦请千万不要开启次功能

### **FriendlyDisconnect | 修改掉线提示**

- 如玩家不在白名单、未通过XboxLive验证、版本不合规等踢出提示

### **WebsocketAPI | 远程控制API**

- 主要支持PFBridge的消息联动
- 也支持较早的基于BDXWebSocket协议的对接插件https://github.com/WangYneos/BDXWebSocket

### **Menu | 自定义菜单**

- 示例文件请在群里找群友要，我这不提供

### **GiftCode | 礼品码**(by @voyage27)

### **Death | 死亡反馈/返回**

### **ChatTranslation | 聊天实时翻译**

- 玩家语言分离设置，可翻译自己发出的消息等
- 命令/translation

### **ChatEnhancement ｜聊天增强**

- 修改聊天格式
- 不与其他监听聊天消息的插件冲突

### **WorldLimit | 世界边界**

- 可自定义多个边界

### **Notice | 进服公告**

### **AttackEcho | 攻击反馈**

- 目前只做了弹射物击中的反馈

~~**Hunter | 赏金猎人**~~还没做

~~**LLACHelper | 接管LLAC的作弊惩罚**~~想做但是没有动力

~~**MoneyAPI_Settings | 金钱UI管理**~~打算做

~~**BehaviorLog | 行为日志**~~准备做

~~**Backup | 自动备份**~~下次做

~~**ServerTransfer | 跨服传送**~~还没做

~~**Blacklist | 黑名单（封禁名单）**~~不一定做

### **TransferServerOnClose | 关服传送**

- 可设置在服务器关闭后传送玩家到其他服务器

### **KickToolbox | 踢部分toolbox玩家**

- 老功能，不保证100%有效，无法过部分改版toolbox，不能替代反作弊，推荐LLAntiCheat，https://www.minebbs.com/resources/llanticheat.3245/

### **Shop | 商店**

- 远古功能，兼容3年前的PFShop，shopdata.json放到插件配置目录会自动转换

### **FakeMotd | 伪造Motd信息**

- 支持动态最大玩家数量
- 伪造motd的在线玩家数量
- motd的存档名称
- motd的端口
  - 可以配合这个功能来修复frp内网穿透后服务器显示在局域网的bug
- 伪造motd的存档名称（不过通常没啥用

