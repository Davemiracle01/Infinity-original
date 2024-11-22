//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sudaisabubakar221@gmail.com";
global.location = "lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Sudaisz/INFINITY_AND_BEYOND-MD.git";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaoi15YAojYuT1dU8q2H";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaoi15YAojYuT1dU8q2H";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://tinyurl.com/ry4d6j4d";
global.devs = "23490197600221";
global.sudo = process.env.SUDO || "2349019760022";
global.owner = process.env.OWNER_NUMBER || "2349019760022";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://tinyurl.com/2t55s8kx";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://malvin-session-fzow.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxjWnhqWFRsbU55SUFqcFhFd08vVng4LytPa01OTm1xc29OYXpLb0gzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWFTbXQ5TmwrVHJkVkl0ckdaRlE5V1lYdDNoRUpOdkRUY2lFMVpUc25VST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQzhPNjJITk91angvT2tsNTJrdXB0TERoOU1vTWtJeDdNWDRUR1pKeEVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFbjFwQk1FQVkvK1J5ZnJtWEFKWnBBTEFDNkFTZ1NyRkVyaVUySWVBZkUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KYTNuYm5PWjRnV1FIa3NMSzM5MnRPaUkxUVp2enV2dUZhQS9VRWdXMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImowNHpMVzRxUlM5MUwyV29vcnZZUzVsdlZwZGJDem15a0VKeEZQc0FtMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVaU3FEdnBYQTdKZWN4ckVFVnF2T1NSYUd2VnVzTHJjRzF1TjNuYnhHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEtJOGhyVkxFWGt3MVExdHEzNTNWTDJ3Z0VBVGtXT1A5bnNGZVdpbFdqTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt0OE1lbHdERXZlVSsvK3BTUXIwc1lDZVpjMldmZTNvdVNJbklOSjAza0x1YnlmUXlyQ1JNRVprVTNIZTJHaDNjUGVHc3FtMHhFdEx5QnJ1NVNFdUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTgsImFkdlNlY3JldEtleSI6IkZaZ3ZBaHpmRFFFbmpmN3BxRTc4SUpLa2RRTnVOZlJxcDg2NDVPSGxmRFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InEwb1VxbWoxVFpxcnE0Q3AtTEZXR1EiLCJwaG9uZUlkIjoiZWRhNjk5NTktMDcxMC00ZDdlLTg4NGMtY2M1YmM0OTRjNDVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc3WGdBb3NPRkRIUk01NlVOV0QxTFpPWHlsYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKWXYzeStKNUIwVkgrSlFEUDlGdWNYMUowKzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjRNSkJNSkwiLCJtZSI6eyJpZCI6IjI1NDExNDEyNzE1NzozOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEQreCtFSEVQU0hnYm9HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUURUaUlKM1NaSHRzaVR0bFl6NTF4K1pGT3VEK29EcUc5Y0QvRlU3dDVnQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVEh3Y0NhSVd1K2dFc0loblBpeS8zRnBITU91Y1FVdGVkZGJLcEw3cGRlYnB1azFidEw2eDU4NTBOaHhoQ09kYThPV3h3LzR3MHljQndaK1RCMFhmQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjVZMUR0dTVmdytPWHdlSkIzNlV3Z0Q5MDQrQnFYY1FucEQraUdCSlV5TU9iRHY0SjJxVGNiSHVxVFpSK2lHZkhudnVRazdhVzdyaVAzNCtncVRTVURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTE0MTI3MTU3OjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVBMDRpQ2QwbVI3YklrN1pXTStkY2ZtUlRyZy9xQTZodlhBL3hWTzdlWUEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIyNjQ5NjB9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝙏𝙤 𝙄𝙣𝙛𝙞𝙣𝙞𝙩𝙮 𝙖𝙣𝙙 𝙗𝙚𝙮𝙤𝙣𝙙 ",
  author: process.env.PACK_AUTHER || "𝕚𝕟𝕗𝕚𝕞𝕚𝕥𝕪",
  packname: process.env.PACK_NAME || "𝕚𝕟𝕗𝕚𝕟𝕚𝕥𝕪 𝕞𝕕",
  botname: process.env.BOT_NAME || "𝕚𝕟𝕗𝕚𝕟𝕚𝕥𝕪",
  ownername: process.env.OWNER_NAME || "𝕓𝕖𝕪𝕠𝕟𝕕",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝕚𝕟𝕗𝕚𝕟𝕚𝕥𝕪").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
