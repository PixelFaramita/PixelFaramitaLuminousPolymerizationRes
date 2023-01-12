import { ref/*, computed */ } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const defaultVal = {
    "ConsoleLanguage": "zh_CN",
    "ParticlesGraphics_WithParticlesResourcePack": true,
    "Global_AsyncTeleportWaitTime": 2500,
    "FormAPI_CountPerPage": 5,
    "MoneyAPI_Settings": {
      "DisplayName": "金钱",
      "UseScoreboard": false,
      "ScoreboardName": undefined
    },
    "WorldLimit": {
      "ModuleEnabled": true,
      "Overworld": [
        {
          "X1": -1000,
          "Z1": -1000,
          "X2": 1000,
          "Z2": 1000
        }
      ],
      "Nether": [],
      "The End": [],
      "TeleportToSpawnpointIfError": true,
      "EnableVisualize": true
    },
    "WebsocketAPI": {
      "ModuleEnabled": true,
      "Location": "ws://0.0.0.0:29132/mcws",
      "Token": "commandpassword",
      "EnableDebugOutput": false,
      "QuietConsole": false
    },
    "Warp": {
      "ModuleEnabled": true
    },
    "Tpr": {
      "ModuleEnabled": true,
      "Range": 1300
    },
    "Tpa": {
      "ModuleEnabled": true,
      "Timeout": 45.0,
      "Cooldown": 5.0,
      "AllowTpaToSelf": true,
      "PlayerSettingEnable": true,
      "TeleportImmuneTime": 5,
      "DefaultReceiveByToast": true,
      "DefaultReceiveByForm": true,
      "DefaultReceiveByMsg": true
    },
    "Shop": {
      "ModuleEnabled": true,
      "SaveFormattedJson": true,
      "OPCmdDumpItems": true
    },
    "ServerTransfer": {
      "ModuleEnabled": true
    },
    "Notice": {
      "ModuleEnabled": true
    },
    "Menu": {
      "ModuleEnabled": true,
      "SaveFormattedJson": true
    },
    "Land": {
      "ModuleEnabled": true,
      "EnableTeleport": true,
      "Enabled2D": true,
      "Price2D": 100.0,
      "RecyclePrice2D": 95.0,
      "MaxSize2D": -1,
      "MinSize2D": 4,
      "Enabled3D": true,
      "Price3D": 2.0,
      "RecyclePrice3D": 1.9,
      "MaxSize3D": -1,
      "MinSize3D": 8,
      "MaximumOwnLands": -1,
      "LandTipCount": 4,
      "LandTipTime": 3000,
      "CountPerPage": 10,
      "ChooseItemCountPerPage": 3,
      "PreventDestroyEx": true
    },
    "BelowName": {
      "ModuleEnabled": true,
      "RefreshInterval": 1000,
      "Pages": [
        [
          "%health%§r§c❤§r%hunger%§e%level%§g%experience:.00%§aL",
          "%os% §e| %devicename%"
        ],
        [
          "§a↑%received%§7|§g↓%sent%",
          "§7ping:§a %ping%§ems"
        ]
      ]
    },
    "DynamicMotd": {
      "ModuleEnabled": true,
      "RefreshInterval": 2500,
      "Pages": [
        "服务器",
        "%playercount% 在线"
      ]
    },
    "JoinLocation": {
      "ModuleEnabled": true,
      "SendMessage": true,
      "SendToast": true
    },
    "PlayerList": {
      "ModuleEnabled": true,
      "RefreshInterval": 1200,
      "Pages": [
        {
          "Title": "@%name%标题",
          "Lines": [
            "@%name%测试",
            "请自行修改"
          ]
        },
        {
          "Title": "第二页",
          "Lines": [
            "@%name%测试",
            "请自行修改"
          ]
        }
      ]
    },
    "Popup": {
      "ModuleEnabled": true,
      "RefreshInterval": 1500,
      "Pages": [
        "%land:当前领地：%%land:[%%land:type%%land:]%%land:displayname%",
        "%land:领地留言：%%land:message%",
        "%land:共享玩家：%%land:sharedplayers%"
      ]
    },
    "Sidebar": {
      "ModuleEnabled": true,
      "RefreshInterval": 1200,
      "Pages": [
        {
          "Title": "@%name%标题",
          "Lines": [
            "@%name%测试",
            "请自行修改"
          ]
        },
        {
          "Title": "第二页",
          "Lines": [
            "@%name%测试",
            "请自行修改"
          ]
        }
      ]
    },
    "Hunter": {
      "ModuleEnabled": true
    },
    "Home": {
      "ModuleEnabled": true,
      "MaxHomeCount": 5
    },
    "GiftCode": {
      "ModuleEnabled": true
    },
    "FriendlyDisconnect": {
      "ModuleEnabled": true,
      "ShowDisconnectInConsole": true,
      "NotAuthenticated": "§c未能通过Microsoft服务的身份验证\n§a       请检查你的网络环境",
      "NotInWhitelist": "§c        你不在服务器的白名单内！\n§e(服务器开启了白名单,请向管理员申请白名单)",
      "OldClient": "§c你的客户端版本太低，无法加入服务器",
      "OldServer": "§c你的客户端版本过新，无法加入服务器",
      "AlreadyLoginIn": "§c当前账号已在其他设备登录\n§eID:§b{0} §eIP:§b{1}\n§e系统:§b{2}\n§e型号:§b{3}",
      "DetailedInfo": "\n  §r§b服务端支持游戏版本：§l§6{0}.{1}.{2}§g.{3}\n      §r§e服务端协议版本： §l§a{4}\n      §r§e客户端协议版本： §c§l{5}",
      "ExtraAllowIncomingProtocolVersions": []
    },
    "HeightEdit": {
      "ModuleEnabled": true,
      "Max": 512,
      "Min": -64
    },
    "Helper": {
      "ModuleEnabled": true,
      "ForceDownloadWithoutCovering": true,
      "EnableFakeSeed": true,
      "FakeSeed": 114514,
      "EnableLevelName": true,
      "LevelName": "Bedrock Level",
      "EditRedstoneTPS": true,
      "OverworldRedstoneTPS": 250,
      "NetherRedstoneTPS": 250,
      "TheEndRedstoneTPS": 250
    },
    "KickToolbox": {
      "ModuleEnabled": true,
      "KickMessage": "§c安全检查未通过"
    },
    "UIExtensions": {
      "ModuleEnabled": true,
      "SimpleFormWidth": 250,
      "SimpleFormHeight": 250
    },
    "Death": {
      "ModuleEnabled": true,
      "DeathHistoryCount": 5,
      "OnDeathEchoInfo": true,
      DeathCmdTeleport: true,
      DeathCmdTeleportInvulnerable: 6000,
    },
    "ChatTranslation": {
      "ModuleEnabled": true
    },
    "ChatEnhancement": {
      "ModuleEnabled": true,
      "Format": "§g[§r§7%date:HH：mm：ss% §d%world%§r§g]§b%os%§e|%ping%ms§e|§r§a<§r%nickname%§r%fakename%§r§a>§r%start%%msg%§r%end%"
    },
    "CloseHandler_Settings": {
      "TransferServerOnClose": false,
      "Address": "127.0.0.1",
      "Port": 19132
    },
    "AttackEcho": {
      "ModuleEnabled": true
    }
  }
  const config = ref(defaultVal)
  return { config }
})
