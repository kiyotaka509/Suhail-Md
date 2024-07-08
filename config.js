ilconst fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_07_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICA0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY3LFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1I5eWJBMzZqUGpEY1p1Qjk1am8zRzFIQ2VCYVFYdGFSY2ZYb1o0SWloQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXhoamh3UFRRWnljTDFwUVotQjNGZ1wiLFxuICBcInBob25lSWRcIjogXCI1YjI0Y2NhNi00ZDEwLTQ3MWItYjdiMC1lMDYxMWY4Zjk1MDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMjMwLFxuICAgICAgMTc0LFxuICAgICAgNzMsXG4gICAgICA1NyxcbiAgICAgIDE2MSxcbiAgICAgIDI0OSxcbiAgICAgIDI0LFxuICAgICAgMyxcbiAgICAgIDExMixcbiAgICAgIDIxNSxcbiAgICAgIDEwNSxcbiAgICAgIDYzLFxuICAgICAgMTkzLFxuICAgICAgMjM2LFxuICAgICAgMjMwLFxuICAgICAgNzQsXG4gICAgICAyMDQsXG4gICAgICAxMixcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDIsXG4gICAgICAxODIsXG4gICAgICAxNTEsXG4gICAgICAxNjgsXG4gICAgICAxMjAsXG4gICAgICAxOTYsXG4gICAgICA4MyxcbiAgICAgIDEwOCxcbiAgICAgIDg3LFxuICAgICAgMTIzLFxuICAgICAgOCxcbiAgICAgIDE2OCxcbiAgICAgIDY2LFxuICAgICAgOTgsXG4gICAgICAxNTUsXG4gICAgICAxMTMsXG4gICAgICAxMTUsXG4gICAgICAxMTksXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjRYV05BN1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTMxNTQ1Mzk0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMjQyNjc2ODk4MjE1MDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xTb25vVUVFSUd3cmJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS1UwNW84TUQ3ajFiK25IRDViQWlyNGN5KzUrWHZXb2pkVTZZbXpuZTZuST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJWGk5bU5za3Ura0ppb0FYVXYxVVEyWG9IYTZmNTNYeGRPQ2xPNE43bC91RzBTTTkwak93UlVDcDFhemNhOUk4NFVIaGpNUXNpR05XR09KdWtDQkJBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvaHNWeVd3cEQyVU9xYU5iVWlsKzlqZ0ZadHhGK213VmlEeDRWYVFrTUhFUTVOTm9pQkxWd0JndHdwaGp5cjc5bDUvWlV1TS9ZSjYzUUxRczZmaVVndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzMTU0NTM5NDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDA4MDY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR091XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHT3UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwN2lRZVNIaUFwVlNpc2t5S1g1Uk5yd3NuaDdYZGR6Ry9UMEpVZjlFUFNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwODQ3MjQyNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQwODA3MzAyOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "kiyotaka",
  ownername:process.env.OWNER_NAME|| "Kiyotaka",


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
