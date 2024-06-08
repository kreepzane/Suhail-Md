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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_30_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY2LFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDkyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWDVFbU5sTHNpeDlHS1RQbSsxZFYvZmJnR3UvRW96QTlZL3FTWm0yTGdtOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWHZ0MDhrbGJRNktyMFZEazZ2ZFdoUVwiLFxuICBcInBob25lSWRcIjogXCJlNzkyYzY4ZC1mY2FkLTQwMTQtYTM1OS05N2FjMjhmNjRmMWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMjIwLFxuICAgICAgMTgwLFxuICAgICAgMTcyLFxuICAgICAgMSxcbiAgICAgIDIyOCxcbiAgICAgIDkzLFxuICAgICAgMjQ5LFxuICAgICAgMTQ0LFxuICAgICAgMTMsXG4gICAgICAyNTEsXG4gICAgICAyMjAsXG4gICAgICA2NCxcbiAgICAgIDEwMSxcbiAgICAgIDExMixcbiAgICAgIDYzLFxuICAgICAgMTY1LFxuICAgICAgMjA2LFxuICAgICAgMTcxLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTU2LFxuICAgICAgNTYsXG4gICAgICAyNyxcbiAgICAgIDEwNSxcbiAgICAgIDIxOSxcbiAgICAgIDEwOCxcbiAgICAgIDk2LFxuICAgICAgNzMsXG4gICAgICA0NyxcbiAgICAgIDUyLFxuICAgICAgODIsXG4gICAgICAwLFxuICAgICAgMTEzLFxuICAgICAgMTMyLFxuICAgICAgMTE1LFxuICAgICAgMTg4LFxuICAgICAgODAsXG4gICAgICAxNTYsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlMzMjYzSERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3ODQyOTMwMjU1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJodWhcIixcbiAgICBcImxpZFwiOiBcIjUyMzMwMzY4MTAyNjI5OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdkZ1pvQkVPcWRrYk1HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCWFk4SnhzMGhlV1Y1NS9RSDNmMmN0cVZzdzdOZjNhM000cWRLZm54ZDBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ2a2lhb2VTeTdoR3BkK1dnR2NKL0ErOUtSTUlVZ1VmTzRXZFVvdkhtMWlveWE4c2tIaFEwRWZTdmZBeFJNWEhQU2pZR2dJSzFuUmZhU2hDRE9hY0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFXMitxS0Z3YkdiQitHb25sdWdUbThjQ1hIa1luYi9pZW9lMGlGYlU5OE1nMVgvdjZaNmpZd3pENjE0K213cU5GbEQzczMxOHB0Z3VyQjVIRWhVUGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3ODQyOTMwMjU1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODQ5ODM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEhKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQSEouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqWDBRMXB4VDFsVDh2VEkzY1hiTnBMcGIwemtxdjlNbEdIczJaK0Nha2tFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMjk4OTcxMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwMjgzNzcxOTlcIn0iCn0="  // PUT your SESSION_ID 


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
