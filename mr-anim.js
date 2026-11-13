(function(){
  try{
  var STAR='<svg viewBox="0 0 24 24"><path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18l-6.5 4 1.7-7.4-5.7-5 7.5-.7z" fill="#ffc21a" stroke="#e8960c" stroke-width="1.2" stroke-linejoin="round"/></svg>';
  var el=function(cls,css,html){var d=document.createElement('div');d.className='mr '+cls;if(css)d.style.cssText=css;if(html)d.innerHTML=html;return d;};
  var homeUrl=function(){try{return typeof HOMEIMG!=='undefined'?HOMEIMG:'';}catch(e){return '';}};
  var avDone=false;
  var avatarRule=function(){if(avDone)return;var u=homeUrl();if(!u)return;avDone=true;var s=document.createElement('style');s.textContent='.mr-av{background-image:url('+u+')}';document.head.appendChild(s);};

  /* ---------- Île : décor animé (portrait) ---------- */
  var CFG={
    P:{cl:[[-6,15,'--x:5cqw;--d:11s'],[90,61.5,'--x:3cqw;--d:15s;width:16cqw;height:7cqw'],[-14,53,'--x:3cqw;--d:13s;width:20cqw;height:8cqw'],[-4,85.5,'--x:9cqw;--d:17s;width:34cqw;height:13cqw'],[72,84,'--x:8cqw;--d:14s;width:32cqw;height:12cqw']],
       wf:[[8,40.6,11,10.6],[88.5,42.4,7,7.4]],mist:[[3,49.5,16,4.5],[87,48.3,12,3.4]],
       ln:[[42.1,35.6],[55,43.6],[43.4,58.6],[58,14.6],[73.6,65.2],[28.4,46.3]],
       bf:[[4,72],[66,54],[40,25]],rico:[12,57,33,28.5],bub:[30,52.5]},
    L:{cl:[[1,8,'--d:12s'],[91,3,'--d:15s'],[-5,25,'--d:13s'],[93,23,'--d:16s'],[84,86,'--d:14s;width:17cqw;height:7cqw'],[73,93,'--d:17s']],
       wf:[[12.5,35,6.5,11.5],[86.5,51.5,9.5,24],[66,80,11,20]],mist:[[10.5,44.5,9,4],[87,73,10,5]],
       ln:[[42.9,39.9],[45.7,58.7],[71.4,31.9],[67.7,14.3],[33.4,58.1],[80.7,58.7]],
       bf:[[38,84],[57,76],[17,50]],rico:[3,45,19,41],bub:[15,40]},
    W:{cl:[[28,7,'--d:13s'],[60,13,'--d:16s'],[4,22,'--d:12s'],[44,84,'--d:15s'],[78,89,'--d:17s'],[14,90,'--d:14s']],
       wf:[[12.7,70.5,7.5,19.5],[88.3,60,8.8,26]],mist:[[13,86.5,9,5.5],[87.5,82.5,10.5,6.5]],
       ln:[[12.1,50],[20.9,50],[39.9,48.3],[61.7,49.3],[78.7,49.7],[44.5,36.7]],
       bf:[[24,60],[51,62],[72,61]],rico:[3.3,37,9.4,30],bub:[2.5,27]}
  };
  var kindOf=function(map){return map.classList.contains('hmapL')?'L':map.classList.contains('hmapW')?'W':'P';};
  var decorate=function(map){
    map.dataset.mr='1';
    var k=kindOf(map),c=CFG[k],sfx=k==='P'?'':' mr-'+k;
    var f=document.createDocumentFragment(),add=function(cl,s,h){f.appendChild(el(cl+sfx,s,h));};
    c.cl.forEach(function(p){add('mr-cl','left:'+p[0]+'%;top:'+p[1]+'%;'+p[2]);});
    c.wf.forEach(function(p){add('mr-wf','left:'+p[0]+'%;top:'+p[1]+'%;width:'+p[2]+'%;height:'+p[3]+'%');});
    c.mist.forEach(function(p){add('mr-mist','left:'+p[0]+'%;top:'+p[1]+'%;width:'+p[2]+'%;height:'+p[3]+'%');});
    var dl=[0,.6,1.1,.3,1.5,.9];
    c.ln.forEach(function(p,i){add('mr-ln','left:'+p[0]+'%;top:'+p[1]+'%;--dl:'+dl[i%6]+'s');});
    add('mr-orb','');add('mr-orb','--dl:-5.5s');
    var bc=['#ff7ac0','#ffd23c','#6fb7ff'],bd=[9,11,10],bl=[0,-3,-6];
    c.bf.forEach(function(p,i){add('mr-bf','left:'+p[0]+'%;top:'+p[1]+'%;--c:'+bc[i]+';--d:'+bd[i]+'s;--dl:'+bl[i]+'s','<i></i><i></i>');});
    map.insertBefore(f,map.firstChild);
    var r=document.createElement('button');r.className='mr-rico';r.setAttribute('aria-label','Rico');
    r.style.cssText='left:'+c.rico[0]+'%;top:'+c.rico[1]+'%;width:'+c.rico[2]+'%;height:'+c.rico[3]+'%';map.appendChild(r);
  };
  var twinkle=function(){var is=document.querySelectorAll('.hstars i:not([data-mr]),.hstarsL i:not([data-mr])');for(var k=0;k<is.length;k++){is[k].dataset.mr='1';if(is[k].querySelector('path[fill="#ffc21a"]'))is[k].classList.add('mr-f');}};
  var sparkles=function(box,cx,cy,size,n){
    for(var i=0;i<n;i++){(function(i){var s=document.createElement('div');s.className='mr-sp';s.innerHTML=STAR;
      s.style.cssText='position:absolute;left:'+cx+'%;top:'+cy+'%;width:'+size+'px;height:'+size+'px;margin:'+(-size/2)+'px 0 0 '+(-size/2)+'px';box.appendChild(s);
      var a=Math.PI*2*i/n+Math.random()*.5,r=size*(3.2+Math.random()*2.4);
      s.animate([{transform:'translate(0,0) scale(.2)',opacity:1},{transform:'translate('+Math.cos(a)*r+'px,'+(Math.sin(a)*r-size*.7)+'px) scale(1.2) rotate('+(180+Math.random()*180)+'deg)',opacity:1,offset:.6},{transform:'translate('+Math.cos(a)*r*1.15+'px,'+(Math.sin(a)*r*1.15+size)+'px) scale(0) rotate(400deg)',opacity:0}],{duration:800,easing:'ease-out'}).onfinish=function(){s.remove();};})(i);}
  };
  var busy=false;
  document.addEventListener('click',function(ev){
    try{
      var t=ev.target&&ev.target.closest?ev.target:null;if(!t)return;
      var rico=t.closest('.mr-rico');
      if(rico){var mp=rico.parentNode,nm='';try{var hn=document.getElementById('hname');nm=hn&&hn.firstChild?String(hn.firstChild.textContent||'').trim():'';}catch(e){}
        crop(mp,rico);var kk=kindOf(mp),u=el('mr-bub'+(kk==='P'?'':' mr-'+kk),'left:'+CFG[kk].bub[0]+'%;top:'+CFG[kk].bub[1]+'%',''),old=mp.querySelector('.mr-bub');if(old)old.remove();u.textContent='On y va'+(nm?', '+nm:'')+' !';mp.appendChild(u);u.addEventListener('animationend',function(){u.remove();});return;}
      var b=t.closest('.hs');if(!b)return;
      var box=b.parentNode;if(!box||!box.matches||!box.matches('.hmap,.hmapW,.hmapL'))return;
      if(b.dataset.mrGo){delete b.dataset.mrGo;return;}
      ev.preventDefault();ev.stopImmediatePropagation();
      if(busy)return;busy=true;
      var l=parseFloat(b.style.left),tp=parseFloat(b.style.top),w=parseFloat(b.style.width),h=parseFloat(b.style.height),rc=b.getBoundingClientRect();
      crop(box,b);
      sparkles(box,l+w/2,tp+h/2,Math.max(14,Math.min(34,rc.width*.16)),9);
      setTimeout(function(){
        var de=document.documentElement,ov=de.style.overflow;de.style.overflow='hidden';
        var keep=box.style.transformOrigin;
        var base=box.classList.contains('hmapW')?'translate(-50%,-50%) ':'';
        box.style.transformOrigin=(l+w/2)+'% '+(tp+h/2)+'%';
        try{box.animate([{transform:base+'scale(1)',opacity:1},{transform:base+'scale(3.8)',opacity:1,offset:.7},{transform:base+'scale(5)',opacity:0}],{duration:600,easing:'cubic-bezier(.5,0,.8,.5)'});}catch(e){}
        setTimeout(function(){
          b.dataset.mrGo='1';b.click();delete b.dataset.mrGo;
          de.style.overflow=ov;box.style.transformOrigin=keep;busy=false;
          var app=document.getElementById('app');
          if(app&&!document.body.contains(box)){try{app.animate([{opacity:0,transform:'scale(1.08)'},{opacity:1,transform:'none'}],{duration:320,easing:'ease-out'});}catch(e){}}
        },540);
      },600);
    }catch(e){busy=false;}
  },true);
  var crop=function(box,b){
    var l=parseFloat(b.style.left),t=parseFloat(b.style.top),w=parseFloat(b.style.width),h=parseFloat(b.style.height);
    if(!(w>0&&h>0))return;
    var z=document.createElement('div');z.className='mr-zo';
    z.style.cssText='position:absolute;left:'+l+'%;top:'+t+'%;width:'+w+'%;height:'+h+'%;background-image:'+getComputedStyle(box).backgroundImage+';background-size:'+(10000/w)+'% '+(10000/h)+'%;background-position:'+(l/(100-w)*100)+'% '+(t/(100-h)*100)+'%';
    box.appendChild(z);z.addEventListener('animationend',function(){z.remove();});
  };

  /* ---------- Confettis (bonne réponse) ---------- */
  var cv=null,cx=null,parts=[],raf=0,lastXY=null,lastConf=0;
  document.addEventListener('pointerdown',function(e){lastXY=[e.clientX,e.clientY];},true);
  var COL=['#e0393f','#2459e6','#0e9a63','#f5b400','#8a4fd8','#ff7ac0'];
  var fit=function(){if(!cv)return;var d=Math.min(2,window.devicePixelRatio||1);cv.width=innerWidth*d;cv.height=innerHeight*d;cx.setTransform(d,0,0,d,0,0);};
  var confetti=function(x,y,n){
    if(!cv){cv=document.createElement('canvas');cv.id='mr-fx';document.body.appendChild(cv);cx=cv.getContext('2d');fit();addEventListener('resize',fit);}
    for(var i=0;i<n;i++){var a=-Math.PI/2+(Math.random()-.5)*Math.PI*1.1,v=7+Math.random()*9;
      parts.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,w:7+Math.random()*7,h:4+Math.random()*5,r:Math.random()*6,vr:(Math.random()-.5)*.5,c:COL[i%COL.length],life:1,round:Math.random()<.25});}
    if(!raf)raf=requestAnimationFrame(tick);
  };
  var tick=function(){cx.clearRect(0,0,innerWidth,innerHeight);
    parts=parts.filter(function(p){return p.life>0&&p.y<innerHeight+30;});
    for(var k=0;k<parts.length;k++){var p=parts[k];p.vy+=.32;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.life-=.0085;
      cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.globalAlpha=Math.min(1,p.life*3);cx.fillStyle=p.c;
      if(p.round){cx.beginPath();cx.arc(0,0,p.h,0,7);cx.fill();}else{var hh=p.h*Math.cos(p.r*2)||1;cx.fillRect(-p.w/2,-hh/2,p.w,hh);}
      cx.restore();}
    raf=parts.length?requestAnimationFrame(tick):0;if(!raf)cx.clearRect(0,0,innerWidth,innerHeight);};
  var onGood=function(node){var now=Date.now();if(now-lastConf<900)return;lastConf=now;
    var x,y;if(lastXY&&now){x=lastXY[0];y=lastXY[1];}else{var r=node.getBoundingClientRect();x=r.left+r.width/2;y=r.top;}
    confetti(x,y,100);};

  /* ---------- Mauvaise réponse : bulle d'un enfant ---------- */
  var onBad=function(node){if(node.classList.contains('mr-kid'))return;try{var sx=M[cur.m].steps[cur.i];if(sx&&sx.acc&&window.mrAccErr)mrAccErr(sx.acc);if(sx&&sx.nt){window.mrBil=window.mrBil||{};mrBil[sx.nt]=(mrBil[sx.nt]||0)+1;if(window.mrRemErr)mrRemErr(sx.nt)}}catch(e){}avatarRule();
    var av=document.createElement('span');av.className='mr-av';var bb=document.createElement('span');bb.className='mr-bb';
    while(node.firstChild)bb.appendChild(node.firstChild);node.classList.add('mr-kid');node.appendChild(av);node.appendChild(bb);};


  /* ---------- Jeux : animations ---------- */
  var GSEL=[['.mem .mc','ok','mr-pair'],['.mem .mc','up','mr-flip'],['.ms .ml','g','mr-found'],['.words span','done','mr-word'],['.loto .lc','hit','mr-stamp'],['.keysrow span','on','mr-pair']],gprev={},gsig='',gwin=null;
  var countdown=function(){var o=document.createElement('div');o.className='mr-cd';document.body.appendChild(o);var n=['3','2','1','Partez !'],i=0;
    var tick=function(){if(i>=n.length){o.remove();return}o.innerHTML='<b>'+n[i]+'</b>';i++;setTimeout(tick,i<n.length?650:550)};tick()};
  var gameAnim=function(){var app=document.getElementById('app');if(!app)return;
    var sg=['.mem','.ms','.loto','.keysrow'].filter(function(q){return app.querySelector(q)}).join();
    var fresh=sg!==gsig;if(fresh){if(sg&&/\.mem|\.ms|\.loto/.test(sg)&&!/\.mem|\.ms|\.loto/.test(gsig))countdown();gsig=sg;gprev={}}
    GSEL.forEach(function(d,k){var els=app.querySelectorAll(d[0]),cur=[];for(var i=0;i<els.length;i++){if(els[i].classList.contains(d[1])){cur.push(i);if(!fresh&&gprev[k]&&gprev[k].indexOf(i)<0){els[i].classList.remove(d[2]);void els[i].offsetWidth;els[i].classList.add(d[2])}}}gprev[k]=cur});
    var w=app.querySelector('#again')||app.querySelector('.card.done');
    if(w&&w!==gwin){gwin=w;var box=w.closest('.card')||w.parentNode;try{confetti(innerWidth*.25,innerHeight*.7,70);confetti(innerWidth*.75,innerHeight*.7,70);setTimeout(function(){confetti(innerWidth/2,innerHeight*.5,90)},500)}catch(e){}
      if(box&&!box.querySelector('.mr-win')){avatarRule();var r=document.createElement('div');r.className='mr-win';r.innerHTML='<span class="mr-av"></span><span class="mr-bb">Bravo ! Tu as réussi !</span>';box.insertBefore(r,box.firstChild)}}
    if(!w)gwin=null;
  };
  var scan=function(root){
    if(!root||root.nodeType!==1)return;
    var q=function(sel,fn){if(root.matches&&root.matches(sel))fn(root);var l=root.querySelectorAll?root.querySelectorAll(sel):[];for(var k=0;k<l.length;k++)fn(l[k]);};
    q('.fb.mr-ok:not([data-mrs]),.lc .fb.good:not([data-mrs])',function(n){n.dataset.mrs='1';onGood(n);});
    q('.fb.mr-ko:not(.mr-kid)',onBad);
  };
  var tickDom=function(muts){
    try{
      var ms=document.querySelectorAll('.hmap:not([data-mr]),.hmapL:not([data-mr]),.hmapW:not([data-mr])');for(var z=0;z<ms.length;z++)decorate(ms[z]);twinkle();gameAnim();var rb=document.getElementById('rst');if(rb&&!document.querySelector('.mr-ver')&&document.querySelector('.hmap')){var vv=document.createElement('p');vv.className='mr-ver';vv.textContent='Version 52';rb.parentNode.insertBefore(vv,rb.nextSibling);}
      for(var i=0;i<muts.length;i++){var a=muts[i].addedNodes;for(var k=0;k<a.length;k++)scan(a[k]);}
    }catch(e){}
  };
  var start=function(){try{new MutationObserver(tickDom).observe(document.body,{childList:true,subtree:true});tickDom([]);}catch(e){}};
  if(document.body)start();else document.addEventListener('DOMContentLoaded',start);
  if(document.readyState!=='complete')addEventListener('load',function(){tickDom([]);});
  }catch(e){}
})();
