function _0x19c9(){const _0x4d81bd=['633064BTsmxt','simple-git','2025688FqMPFd','*UPDATE\x20SUCCESS*','UPDATED\x20YOUR\x20DEPLOYMENT','reset','env','push','\x0a\x0aCommand:\x20updatenow','*`BOT\x20UPDATED`*\x0a*RESTART\x20YOUR\x20BOT\x20FOR\x20UPDATE\x20TO\x20TAKE\x20EFFECT*','Shows\x20repo\x27s\x20refreshed\x20commits.','9062640BGKdrn','addRemote','`Successfully\x20updated.\x20Now\x20You\x20Have\x20Latest\x20Version\x20Installed!`','HEROKU_APP_NAME','Heroku\x20remote\x20adding\x20error','get','git_url','jid','hard','112rqAhwm','replace','setting','reply','heroku','https://api:','Build\x20started...','botname','bot','4461308TjPLWE','start','checkupdate','ERROR!','error','\x20IS\x20ON\x20IT\x27S\x20LATEST\x20VERSION','sync','[\x20start\x20]','heroku-client','\x20\x0a*UPDATE\x20RUNNING*\x0a\x09','335214caVqXu','total','10758198motmrT','https://','3mfQitp','Bot\x20updated.\x20Restarting.','\x0a\x0aCommand:\x20update','HEROKU_API_KEY','log','Toxic1239','*ʀɪᴀs\x20ɪs\x20ᴄᴜʀʀᴇɴᴛʟʏ\x20ᴜᴘ\x20ᴛᴏ\x20ᴅᴀᴛᴇ*\x0a😏😏','Update\x20Detected,\x20trying\x20to\x20update\x20your\x20bot!','1139067mDNxkc','main..origin/main','VERSION','../lib/scraper'];_0x19c9=function(){return _0x4d81bd;};return _0x19c9();}const _0x54a36e=_0x710b;(function(_0x4b4cf1,_0x3808fa){const _0x42873f=_0x710b,_0x29d9d1=_0x4b4cf1();while(!![]){try{const _0x148310=parseInt(_0x42873f(0xfa))/0x1+parseInt(_0x42873f(0xd3))/0x2+-parseInt(_0x42873f(0xfe))/0x3*(parseInt(_0x42873f(0xf0))/0x4)+-parseInt(_0x42873f(0xde))/0x5+parseInt(_0x42873f(0xfc))/0x6+-parseInt(_0x42873f(0xd5))/0x7+parseInt(_0x42873f(0xe7))/0x8*(parseInt(_0x42873f(0xcf))/0x9);if(_0x148310===_0x3808fa)break;else _0x29d9d1['push'](_0x29d9d1['shift']());}catch(_0x39a11e){_0x29d9d1['push'](_0x29d9d1['shift']());}}}(_0x19c9,0xf3ffe));const DB=require(_0x54a36e(0xd2)),{Config,smd}=require('../lib'),simpleGit=require(_0x54a36e(0xd4)),git=simpleGit();function _0x710b(_0x52d66e,_0x3e868e){const _0x19c909=_0x19c9();return _0x710b=function(_0x710bb4,_0x533731){_0x710bb4=_0x710bb4-0xcf;let _0x539659=_0x19c909[_0x710bb4];return _0x539659;},_0x710b(_0x52d66e,_0x3e868e);}try{const Heroku=require(_0x54a36e(0xf8));async function updateHerokuApp(){const _0x3ca081=_0x54a36e;try{const _0x1f0325=new Heroku({'token':process[_0x3ca081(0xd9)][_0x3ca081(0x101)]});await git['fetch']();const _0x17e6bc=await git['log']([_0x3ca081(0xd0)]);if(_0x17e6bc[_0x3ca081(0xfb)]===0x0)return Config[_0x3ca081(0xee)]+_0x3ca081(0xf5);else{console[_0x3ca081(0x102)](_0x3ca081(0x105));const _0x176f7e=await _0x1f0325[_0x3ca081(0xe3)]('/apps/'+process[_0x3ca081(0xd9)]['HEROKU_APP_NAME']),_0x495211=_0x176f7e[_0x3ca081(0xe4)][_0x3ca081(0xe8)](_0x3ca081(0xfd),_0x3ca081(0xec)+process[_0x3ca081(0xd9)]['HEROKU_API_KEY']+'@');try{await git[_0x3ca081(0xdf)](_0x3ca081(0xeb),_0x495211);}catch(_0x4f162f){print(_0x3ca081(0xe2),_0x4f162f);}return await git[_0x3ca081(0xda)](_0x3ca081(0xeb),'main'),_0x3ca081(0xff);}}catch(_0x1b9842){return print(_0x1b9842),'Can\x27t\x20Update,\x20Request\x20Denied!';}}smd({'pattern':_0x54a36e(0xf2),'desc':_0x54a36e(0xdd),'category':_0x54a36e(0xe9),'fromMe':!![],'react':'⚙️','filename':__filename,'use':process[_0x54a36e(0xd9)]['HEROKU_API_KEY']?_0x54a36e(0xf7):''},async(_0x266cfa,_0x4870ef)=>{const _0x1e1a0e=_0x54a36e;try{let _0x49ddee=await DB['syncgit']();if(_0x49ddee['total']===0x0)return await _0x266cfa[_0x1e1a0e(0xea)](_0x1e1a0e(0x104));let _0x279013=await DB['sync']();await _0x266cfa[_0x1e1a0e(0xef)]['sendMessage'](_0x266cfa['chat'],{'text':_0x279013['replace'](/SuhailTechIMd/,_0x1e1a0e(0x103))},{'quoted':_0x266cfa});if(_0x4870ef==_0x1e1a0e(0xf1)&&process[_0x1e1a0e(0xd9)][_0x1e1a0e(0xe1)]&&process[_0x1e1a0e(0xd9)]['HEROKU_API_KEY']){_0x266cfa['reply'](_0x1e1a0e(0xed));const _0xd22339=await updateHerokuApp();return await _0x266cfa[_0x1e1a0e(0xea)](_0xd22339);}}catch(_0x5a29a5){_0x266cfa[_0x1e1a0e(0xf4)](_0x5a29a5+_0x1e1a0e(0x100),_0x5a29a5,_0x1e1a0e(0xf3));}}),smd({'pattern':'update','desc':process[_0x54a36e(0xd9)][_0x54a36e(0x101)]?_0x54a36e(0xd6):_0x54a36e(0xd7),'fromMe':!![],'category':_0x54a36e(0xe9),'filename':__filename},async _0x31f136=>{const _0x1102b4=_0x54a36e;try{let _0x251b58=await DB['syncgit']();if(_0x251b58[_0x1102b4(0xfb)]===0x0)return await _0x31f136[_0x1102b4(0xea)]('*'+Config[_0x1102b4(0xd1)]+'\x20IS\x20Updating*');let _0x5ac725=await DB[_0x1102b4(0xf6)](),_0x550a65=_0x1102b4(0xf9)+_0x5ac725+'*';await _0x31f136['bot']['sendMessage'](_0x31f136[_0x1102b4(0xe5)],{'text':_0x550a65}),await require(_0x1102b4(0xd4))()[_0x1102b4(0xd8)](_0x1102b4(0xe6),['HEAD']),await require(_0x1102b4(0xd4))()['pull'](),await _0x31f136['reply'](process[_0x1102b4(0xd9)]['HEROKU_APP_NAME']&&process[_0x1102b4(0xd9)]['HEROKU_API_KEY']?_0x1102b4(0xdc):_0x1102b4(0xe0));}catch(_0x1e1d02){_0x31f136['error'](_0x1e1d02+_0x1102b4(0xdb),_0x1e1d02,'ERROR!');}}),process['env'][_0x54a36e(0x101)]&&(print('HEROKU\x20:\x20checking\x20for\x20auto\x20update!'),updateHerokuApp());}catch(_0x2acf85){}