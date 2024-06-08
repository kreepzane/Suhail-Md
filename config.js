const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27842930255";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_14_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MixcbiAgICAgICAgMTAyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0bExjSGp0dWE0QWgxemJITXgxY2ZKVG04VGFQTDhWQnJHYytqZEh3OHhFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaTmV0SS04Y1FrS1A1a1B3YS1xWGZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjMDY0ODIxLWYxN2YtNDI0ZC04MmU4LWI2YTE5ZDdkNjNjN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICA4NixcbiAgICAgIDE1LFxuICAgICAgMjUxLFxuICAgICAgMTY3LFxuICAgICAgMjM5LFxuICAgICAgNDIsXG4gICAgICAyMDksXG4gICAgICAxODcsXG4gICAgICA2NCxcbiAgICAgIDE1NSxcbiAgICAgIDIzMSxcbiAgICAgIDIzMSxcbiAgICAgIDc0LFxuICAgICAgMjA5LFxuICAgICAgMzgsXG4gICAgICA1OSxcbiAgICAgIDEwLFxuICAgICAgNTMsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAyMTEsXG4gICAgICAxMjksXG4gICAgICAxOTQsXG4gICAgICAyMjgsXG4gICAgICAyMjUsXG4gICAgICAxNzYsXG4gICAgICAxMSxcbiAgICAgIDE1NixcbiAgICAgIDIyMSxcbiAgICAgIDk0LFxuICAgICAgMzAsXG4gICAgICA5NixcbiAgICAgIDMxLFxuICAgICAgMjE3LFxuICAgICAgMjM1LFxuICAgICAgMjI3LFxuICAgICAgMTIxLFxuICAgICAgNjgsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlJZVkc0WlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3ODQyOTMwMjU1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiaHVoXCIsXG4gICAgXCJsaWRcIjogXCI1MjMzMDM2ODEwMjYyOToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJN2RnWm9CRVBlR2tyTUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJYWThKeHMwaGVXVjU1L1FIM2YyY3RxVnN3N05mM2EzTTRxZEtmbnhkMGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOFhMMDY5RXJxL2U0SXg2T1NJWFJycGRsL1Z4aVdQOU9yTWN5TDNvL1NPTlRUT1d6ZEhwNmpZd1p6d254UjM5Z014QnNEMHNTS2tyOHArbHNRN1M4QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkpDT1I5Nm5rb3lpM3FPN1pYWnQ0N2xpNEJUbEowYUZvRXRqQzFvbmwwVHkvTnpSWG9IWmF5dHRiT0lURTlUZjVHNXFST09IbVhhQlVGdHFqYTk3RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc4NDI5MzAyNTU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODYzMjkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEhKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQSEouanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "cartifoundthis",
  packname: process.env.PACK_NAME || "seyuhhh",
  botname : process.env.BOT_NAME  || "Carti2.0",
  ownername:process.env.OWNER_NAME|| "kreep4pres*🍄",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
