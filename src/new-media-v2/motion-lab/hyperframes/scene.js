/* HyperFrames owns the clock. Every state is reconstructed from absolute seconds. */
(() => {
  if (!window.MotionLabInput || typeof window.MotionLabInput !== 'object') {
    throw new Error('Missing required complete code-generation input: window.MotionLabInput. Run the strict input preparation step.');
  }
  if (!Array.isArray(window.MotionLabInput.film?.shots) || window.MotionLabInput.film.shots.length !== 16) {
    throw new Error('Missing required complete storyboard: MotionLabInput.film.shots must retain all 16 shots.');
  }
  const $ = id => document.getElementById(id);
  const G = window.MotionGeometry;
  const T = window.MotionLabInput.sample.timeline;
  const captions = T.captions.map(c=>[c.unit,c.start,c.end]);
  const clamp = v => Math.max(0,Math.min(1,v));
  const progress = (t,a,b) => clamp((t-a)/(b-a));
  const smooth = v => v*v*(3-2*v);
  const ease = (t,a,b) => smooth(progress(t,a,b));
  const out = (t,a,b) => 1-Math.pow(1-progress(t,a,b),4);
  const lerp = (a,b,p) => a+(b-a)*p;
  const pointAt = (name,p) => {
    const pts=G[name].points,i=clamp(p)*(pts.length-1),a=Math.floor(i),b=Math.min(a+1,pts.length-1);
    return [lerp(pts[a][0],pts[b][0],i-a),lerp(pts[a][1],pts[b][1],i-a)];
  };
  const pointOn = (pts,p) => {
    const i=clamp(p)*(pts.length-1),a=Math.floor(i),b=Math.min(a+1,pts.length-1);
    return [lerp(pts[a][0],pts[b][0],i-a),lerp(pts[a][1],pts[b][1],i-a)];
  };
  const line = pts => pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(2)+' '+p[1].toFixed(2)).join(' ');
  const partial = (name,p) => {
    const pts=G[name].points, n=clamp(p)*(pts.length-1), end=Math.floor(n);
    return line([...pts.slice(0,end+1),pointAt(name,p)]);
  };
  const setOpacity = (id,v) => {$(id).style.opacity=clamp(v).toFixed(4);};
  const setPoint = (id,point) => {$(id).setAttribute('cx',point[0]);$(id).setAttribute('cy',point[1]);};
  const ringPoints = (cx,cy,r,rotation) => Array.from({length:145},(_,i)=> {
    const a=i/144*Math.PI*2-Math.PI/2+rotation;
    return [cx+Math.cos(a)*r,cy+Math.sin(a)*r];
  });
  const pauseCircle=ringPoints(640,430,105,0), replayCircle=ringPoints(1280,430,93,.4);
  const images = [];
  const urls = Array.from({length:120},(_,i)=>`assets/images/morph/frame-${String(i).padStart(3,'0')}.png`);
  let lastFrame=-1;

  window.__motionLabState = t => {
    const inputs=T.inputs.map(v=>({...v,progress:progress(t,v.launch,v.arrival),arrived:t>=v.arrival,recorded:t>=v.recordAt}));
    return {time:t,inputs,recordActive:t>=T.recordActivation,recordCount:inputs.filter(v=>v.recorded).length,
      outputProgress:ease(t,T.outputStart,T.outputSettled),morphFrame:Math.min(119,Math.max(0,Math.floor(progress(t,6.1,8.1)*120)))};
  };
  function renderAt(t) {
    t=Math.max(0,Math.min(19.999999,t));
    const state=window.__motionLabState(t);
    document.documentElement.dataset.time=t.toFixed(6);
    // Black -> dark moving dots -> black. No scene-wide fade or object reset.
    const pattern=ease(t,5.5,6.6)*(1-ease(t,14,15.25));
    setOpacity('pattern-ground',pattern);
    $('dots').style.transform=`translate(${Math.sin(t*.12)*8}px,${Math.cos(t*.08)*7}px)`;
    // An established image leaves on a spatial curve with an accelerating exit.
    const peel=progress(t,3.15,4.4),accel=Math.pow(peel,2.15);
    const px=-80*peel-340*accel,py=-45*peel-1100*accel;
    $('plate-travel').style.transform=`perspective(1100px) translate(${px}px,${py}px) rotateY(${-24*peel}deg) rotateZ(${-3*peel-16*accel}deg) scale(${1-.07*peel})`;
    setOpacity('plate-travel',1-ease(t,4.2,4.45));
    setOpacity('plate-edge',0);setOpacity('plate-hero',1);
    // Contact has a brief physical compression; no looping heartbeat.
    const contact=Math.exp(-Math.pow((t-.65)/.145,2));
    const settle=t>.65?Math.exp(-(t-.65)*8)*Math.sin((t-.65)*22)*.018:0;
    const center=ease(t,6.1,8.1);
    let heart=[lerp(1100,960,center),lerp(493,430,center)];
    let size=1+contact*.04+settle;
    if(t>=T.inputs[2].launch){heart=pointAt('middle',ease(t,T.inputs[2].launch,T.inputs[2].arrival));size*=1-ease(t,17.12,17.4)*.72;}
    $('reaction').style.transform=`translate(${heart[0]-110}px,${heart[1]-110}px) scale(${size})`;
    setOpacity('reaction',1-ease(t,17.3,17.45));
    const index=state.morphFrame;
    if(index!==lastFrame){$('morph-image').src=urls[index];lastFrame=index;}
    $('heart-glow').style.left=(heart[0]-180)+'px';$('heart-glow').style.top=(heart[1]-180)+'px';
    setOpacity('heart-glow',contact*.75+Math.sin(center*Math.PI)*.17);
    $('retained-orbit').style.strokeDasharray='1';
    $('retained-orbit').style.strokeDashoffset=String(1-ease(t,6.1,8.1));
    setOpacity('retained-orbit',ease(t,6.1,6.8)*(1-ease(t,11.5,13.8))*.38);
    // Curved traces are inherited; source icons emerge before their information travels.
    const pauseReveal=ease(t,10.85,11.65),replayReveal=ease(t,11.95,12.65),likeReveal=ease(t,12.95,13.55);
    const unfold=ease(t,14,15.6);
    const blendPoints=(a,b)=>a.map((p,i)=>[lerp(p[0],b[i][0],unfold),lerp(p[1],b[i][1],unfold)]);
    const top=blendPoints(pauseCircle,G.top.points),bottom=blendPoints(replayCircle,G.bottom.points);
    $('pause-arc').setAttribute('d',line(top));$('replay-arc').setAttribute('d',line(bottom));
    setOpacity('pause-arc',pauseReveal*(.66+.22*unfold));setOpacity('replay-arc',replayReveal*(.58+.22*unfold));
    setOpacity('pause-bars',pauseReveal*(1-unfold));setOpacity('replay-arrow',replayReveal*(1-unfold));
    $('top-shadow').setAttribute('d',line(top.map(p=>[p[0]+2,p[1]+7])));
    $('bottom-shadow').setAttribute('d',line(bottom.map(p=>[p[0]+2,p[1]+7])));
    setOpacity('flow-depth',unfold*.64);
    $('top-sheen').setAttribute('d',line(top.map(p=>[p[0],p[1]-2.3])));
    $('bottom-sheen').setAttribute('d',line(bottom.map(p=>[p[0],p[1]-2.3])));
    setOpacity('flow-highlights',unfold*.35);
    setOpacity('ambient-signals',ease(t,14.8,15.8));
    for(let i=0;i<24;i++) {
      const pts=i%2===0?top:bottom;
      setPoint('population-'+String(i).padStart(2,'0'),pointOn(pts,.06+Math.floor(i/2)*.069));
      setOpacity('population-'+String(i).padStart(2,'0'),[.32,.52,.78,.4][i%4]);
    }
    setOpacity('population-branches',ease(t,15.2,16.1)*.32);
    $('existing-in-top').setAttribute('d',`M245 260 C365 260 390 355 ${top[29][0]} ${top[29][1]}`);
    $('existing-in-bottom').setAttribute('d',`M280 650 C410 650 445 580 ${bottom[38][0]} ${bottom[38][1]}`);
    setOpacity('existing-out-top',ease(t,18.15,19.05));
    setOpacity('existing-out-bottom',ease(t,18.15,19.05));
    setOpacity('pause-label',pauseReveal*(1-ease(t,14.55,15.05)));
    setOpacity('replay-label',replayReveal*(1-ease(t,14.55,15.05)));
    setOpacity('like-label',likeReveal*(1-ease(t,14.55,15.05)));
    // Each packet launches, travels and arrives exactly once; never globally loops.
    for(const [id,name,a,b] of [['pause-pulse','top',T.inputs[0].launch,T.inputs[0].arrival],['replay-pulse','bottom',T.inputs[1].launch,T.inputs[1].arrival]]) {
      setPoint(id,pointOn(name==='top'?top:bottom,ease(t,a,b)));
      setOpacity(id,ease(t,a,a+.1)*(1-ease(t,b,b+.12)));
    }
    const gate=ease(t,14.1,14.9);
    setOpacity('record-gate-back',gate*(state.recordActive?1:.46));setOpacity('gate-foreground',gate);
    $('record-gate-back').dataset.active=String(state.recordActive);$('record-gate-back').dataset.count=String(state.recordCount);
    setOpacity('record-label',ease(t,16.1,16.35));
    const arrivals=T.inputs.map(v=>v.arrival);
    const flash=arrivals.reduce((v,a)=>v+(t>=a?Math.exp(-(t-a)*7)*.35:0),0);
    $('record-glow').style.left='1270px';$('record-glow').style.top='250px';setOpacity('record-glow',flash);
    $('out-top').setAttribute('d',partial('outgoingTop',ease(t,17.5,18.8)));
    $('out-bottom').setAttribute('d',partial('outgoingBottom',ease(t,17.68,19.1)));
    setOpacity('recommendation',t>=T.outputStart?1:0);
    setOpacity('out-top-node',ease(t,18.65,18.9));setOpacity('out-bottom-node',ease(t,18.95,19.13));
    $('recommendation').dataset.progress=state.outputProgress.toFixed(6);
    // A small composed pullback finishes before the final read; captions never move with it.
    const pull=ease(t,15.5,18.6),questionPush=ease(t,8.3,9.3)*(1-ease(t,10.7,11.6));
    $('art').style.transform=`translate(${-30*pull}px,${-5*pull}px) scale(${1-.055*pull+.08*questionPush})`;
    for(const [unit,a,b] of captions){
      const opacity=t>=a&&t<b?out(t,a,a+.18)*(unit===17?1:1-ease(t,b-.09,b)):0;
      setOpacity('caption-'+unit,opacity);
    }
    // The persistent preload image has an immutable URL. Decoding the visible
    // image here races a later seek's src change and rejects the previous seek.
    return images[index].decode();
  }
  window.__motionLabRenderAt=renderAt;
  window.addEventListener('hf-seek',e=>{const ready=renderAt(e.detail.time);if(ready&&e.detail.waitUntil)e.detail.waitUntil(ready);});
  const preload=urls.map(url=>new Promise((resolve,reject)=>{const img=new Image();images.push(img);img.onload=()=>img.decode().then(resolve,reject);img.onerror=()=>reject(new Error('Missing morph frame '+url));img.src=url;}));
  Promise.all([document.fonts.ready,...preload]).then(()=>{
    renderAt(0);
    const clock={time:0};
    const tl=gsap.timeline({paused:true});
    tl.to(clock,{time:20,duration:20,ease:'none',onUpdate:()=>renderAt(clock.time)},0);
    window.__timelines=window.__timelines||{};window.__timelines.main=tl;tl.seek(0);
  });
})();
