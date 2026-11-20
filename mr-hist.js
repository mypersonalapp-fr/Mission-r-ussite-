/* Histoire illustrée « La clé du coucher de soleil » : page hist.html affichée plein écran */
(function(){
window.histOpen=function(){
 var p=window.MRNIV&&MRNIV.prof&&MRNIV.prof(),n=(p&&p.name)||(typeof save!=='undefined'&&save.name)||'Lina';
 var f=document.createElement('iframe');f.id='histf';f.src='hist.html?n='+encodeURIComponent(n);f.style.cssText='position:fixed;inset:0;width:100%;height:100%;border:0;z-index:99999;background:#dfe5fb';
 document.body.appendChild(f);
 function bye(e){if(!e.data||!e.data.hist)return;
  if(e.data.hist==='finished'){save['hist-cle']=1;if(typeof persist==='function')persist();return}
  if(e.data.hist==='quit'||e.data.hist==='done'){window.removeEventListener('message',bye);var x=document.getElementById('histf');if(x)x.remove();if(typeof lecture==='function')lecture()}}
 window.addEventListener('message',bye)};
})();
