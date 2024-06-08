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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_12_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDczLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyLFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMCxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZOcy9CdVBzbnprdDloZ2pxWkJtUWhRQnBac2g2N3hyMXJyZHRmYzZxbVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRsQlNVdDVNUi15Znhia3R2UkNKN0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjJmNTRjM2MtNzEzNS00ZGY1LThhYzQtNmZiZjg2MjRmYjg3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAxMDEsXG4gICAgICA1OCxcbiAgICAgIDI1LFxuICAgICAgMTM3LFxuICAgICAgMTE1LFxuICAgICAgNzYsXG4gICAgICAxMixcbiAgICAgIDUyLFxuICAgICAgMTA3LFxuICAgICAgMTY0LFxuICAgICAgMjUxLFxuICAgICAgNTIsXG4gICAgICA3NSxcbiAgICAgIDE1MyxcbiAgICAgIDM1LFxuICAgICAgMTQ4LFxuICAgICAgMjEzLFxuICAgICAgMTE1LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMjUxLFxuICAgICAgMTk2LFxuICAgICAgMTc0LFxuICAgICAgMTUyLFxuICAgICAgMjksXG4gICAgICAxODMsXG4gICAgICA5MSxcbiAgICAgIDkxLFxuICAgICAgMTk2LFxuICAgICAgMjIzLFxuICAgICAgMTAwLFxuICAgICAgNTksXG4gICAgICAxODcsXG4gICAgICAxLFxuICAgICAgMTU1LFxuICAgICAgMTA2LFxuICAgICAgMjI3LFxuICAgICAgOTEsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQSlRXQkNBU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc4NDI5MzAyNTU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktyZWVwNHByZXNcIixcbiAgICBcImxpZFwiOiBcIjUyMzMwMzY4MTAyNjI5OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdkZ1pvQkVLenZqYk1HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCWFk4SnhzMGhlV1Y1NS9RSDNmMmN0cVZzdzdOZjNhM000cWRLZm54ZDBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImh1N094eXBBWUQrOUd5cGJrZTBadG1XQ1NYREdmdW9BTndMUHhEVTMvdVIzTHVQWHNpWWlvSk9DMjRkWXkzMXRUYTRsMks2R3ZWb1ovVCtPM1hkRUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVkYWJjTFNFbEdSTFVhV2lEY0pYeHdEbjliUWVISUg2elZHZzV1dy9ZU3E3RWFGeDFvZ0RRL3BabFcxRjRpL0h6aEpWNFBvV2pVbnhyaVZydE12UGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3ODQyOTMwMjU1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3Nzk0NzM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEhKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQSEouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqWDBRMXB4VDFsVDh2VEkzY1hiTnBMcGIwemtxdjlNbEdIczJaK0Nha2tFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMjk4OTcxMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwMjgzNzcxOTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
