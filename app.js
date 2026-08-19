/* ============================================================
 * app.js — 阿拉伯语零基础学习系统 主逻辑
 * 纯前端 / 无构建 / 状态全存 localStorage（命名空间 arabic_learn_）
 * 依赖 data.js（LETTERS / VOCAB / GRAMMAR / DIALOGUES / LISTENING / TOPICS ...）
 * ============================================================ */
(function(){
"use strict";

/* 全局应用对象：所有模块方法挂载于此，最后暴露到 window.App */
const App = {};

/* ---------------- 存储 ---------------- */
const NS="arabic_learn_";
function store(k, v){ try{ localStorage.setItem(NS+k, JSON.stringify(v)); }catch(e){} }
function load(k, d){ try{ const r=localStorage.getItem(NS+k); return r?JSON.parse(r):(d??null); }catch(e){ return d??null; } }
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }

/* ---------------- 工具 ---------------- */
function $(s,r){ return (r||document).querySelector(s); }
function $all(s,r){ return Array.from((r||document).querySelectorAll(s)); }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function today(){ return new Date().toISOString().slice(0,10); }
function daysBetween(a,b){ return Math.round((new Date(b)-new Date(a))/86400000); }
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2200); }

/* ---------------- 语音 TTS ---------------- */
let _voices=[];
function loadVoices(){ try{ _voices=speechSynthesis.getVoices()||[]; }catch(e){} }
if('speechSynthesis' in window){ loadVoices(); speechSynthesis.onvoiceschanged=loadVoices; }
function speak(text, lang){
  if(!('speechSynthesis' in window)){ toast('当前浏览器不支持语音朗读'); return; }
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang=lang||'ar-SA'; u.rate=0.82; u.pitch=1;
    const v=_voices.find(v=>/^ar/i.test(v.lang));
    if(v) u.voice=v;
    speechSynthesis.speak(u);
  }catch(e){ toast('语音播放失败'); }
}
function speakBtn(text, lang){ return `<button class="speak" title="朗读" onclick="App.speak(${JSON.stringify(text).replace(/"/g,'&quot;')})">🔊</button>`; }

/* ---------------- 弹窗 ---------------- */
function openModal(html){ $('#modal').innerHTML='<span class="close" onclick="App.closeModal()">×</span>'+html; $('#modalBg').classList.add('show'); }
function closeModal(){ $('#modalBg').classList.remove('show'); }
$('#modalBg').addEventListener('click', e=>{ if(e.target.id==='modalBg') closeModal(); });

/* ---------------- Mermaid / Chart 降级 ---------------- */
function renderMermaid(el, code){
  el.innerHTML='<div class="mermaid">'+esc(code)+'</div>';
  const node=el.querySelector('.mermaid');
  function run(){ try{ window.mermaid.run({nodes:[node]}); }catch(e){ fallback(); } }
  function fallback(){ el.innerHTML='<pre style="white-space:pre-wrap;direction:ltr;font-size:12px;background:#f7f8fc;padding:12px;border-radius:8px">'+esc(code)+'</pre><div class="muted">（离线模式：Mermaid 未加载，已显示原始语法文本）</div>'; }
  if(window.mermaid){ run(); return; }
  let t=0; const iv=setInterval(()=>{ if(window.mermaid){clearInterval(iv);run();} else if(++t>20){clearInterval(iv);fallback();} },300);
}

/* ---------------- 设置 ---------------- */
function getSettings(){ return load('settings', {textbook:'新编阿拉伯语（第一册）', level:'A1', scene:'日常交流', name:''}); }
function setSettings(s){ store('settings', s); $('#levelBadge').textContent=s.level; }
function updateBadge(){ $('#levelBadge').textContent=getSettings().level; }

/* ---------------- 模块使用统计 ---------------- */
function track(view){ const u=load('moduleuse',{}); u[view]=(u[view]||0)+1; store('moduleuse',u); }

/* ============================================================
 * 视图路由
 * ============================================================ */
const VIEWS = {
  alphabet: renderAlphabet, points: renderPoints, plan: renderPlan,
  mindmap: renderMindmap, recite: renderRecite, speak: renderSpeak,
  listen: renderListen, dashboard: renderDashboard,
  settings: renderSettings, about: renderAbout,
  textbooks: renderTextbooks, words: renderWords, sentences: renderSentences,
  scenes: renderScenes, daily: renderDaily, selftest: renderSelftest,
  articles: renderArticles
};
const TITLES = {
  alphabet:'字母 · 键盘', points:'考点库管理', plan:'复习计划生成', mindmap:'知识点思维导图',
  recite:'背诵打卡', speak:'口语练习', listen:'听力训练', dashboard:'进度看板',
  settings:'全局设置', about:'关于 / 提示词',
  textbooks:'教材书目', words:'单词学习', sentences:'句子学习',
  scenes:'情景板块', daily:'每日一练', selftest:'综合自测', articles:'课文阅读'
};

function showView(v){
  if(!VIEWS[v]) v='alphabet';
  document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('active', a.dataset.view===v));
  $('#viewTitle').textContent = TITLES[v]||'';
  $('#content').innerHTML='';
  VIEWS[v]($('#content'));
  track(v);
  $('#sidebar').classList.remove('open'); $('#scrim').classList.remove('show');
  window.scrollTo(0,0);
}

/* ============================================================
 * 模块七：字母表 + 键盘（地基）
 * ============================================================ */
function renderAlphabet(root){
  root.innerHTML = `
  <div class="section-title">字母表 · 键盘布局</div>
  <div class="section-sub">28 字母标准表（参考表 A）+ Arabic 101 键盘映射（参考表 B），点击任意字母查看正音详解并朗读。</div>
  <div class="card">
    <h3>🔤 28 字母全览 <span class="badge hard">⚠️ 难音</span></h3>
    <div class="letter-grid" id="letterGrid"></div>
  </div>
  <div class="grid grid-2">
    <div class="card">
      <h3>⌨️ 键盘布局映射（Windows Arabic 101）</h3>
      <div id="kbWrap"></div>
      <button class="btn sm ghost" onclick="App.showVowels()">查看变音符 Shift 组合</button>
      <button class="btn sm ghost" onclick="App.showOS()">各系统开启输入法</button>
    </div>
    <div class="card">
      <h3>🎯 字母认读 / 听写 / 辨形练习</h3>
      <div class="row">
        <div><label class="fl">练习模式</label>
          <select class="select" id="quizMode">
            <option value="read">认读（看字母→答名称）</option>
            <option value="dict">听写（看名称→选字母）</option>
            <option value="shape">辨形（区分易混字母）</option>
          </select></div>
        <div style="flex:0 0 120px"><label class="fl">题量</label>
          <input class="input" id="quizN" type="number" value="10" min="3" max="28"></div>
      </div>
      <button class="btn" style="margin-top:12px" onclick="App.startLetterQuiz()">开始练习</button>
      <div id="quizBox" style="margin-top:14px"></div>
    </div>
  </div>`;
  const g=$('#letterGrid');
  LETTERS.forEach(L=>{
    const d=document.createElement('div');
    d.className='letter-card'+(L.hard?' hard':'');
    d.innerHTML=`${L.hard?'<span class="hw">⚠️</span>':''}<div class="big">${L.ar}</div><div class="nm">${esc(L.name)} · ${esc(L.tr)}</div>`;
    d.onclick=()=>App.showLetter(L.id);
    g.appendChild(d);
  });
  renderKeyboard($('#kbWrap'));
}

function renderKeyboard(wrap){
  function row(arr){ return `<div class="kbd-row">`+arr.map(([k,ar])=>`<div class="kbd" onclick="App.speak('${ar}')"><span class="ar">${ar}</span><span class="pk">${esc(k)}</span></div>`).join('')+`</div>`; }
  wrap.innerHTML = `<div class="kbd-cap">上排（Q~P [ ] \\）</div>${row(KEYBOARD.top)}
    <div class="kbd-cap">主行（A~L ; '）</div>${row(KEYBOARD.main)}
    <div class="kbd-cap">下排（Z~M , . /）</div>${row(KEYBOARD.bottom)}
    <div class="muted" style="margin-top:8px">点击任意键即可朗读对应阿拉伯字母（这是物理键位映射，非发音对应）。</div>`;
}

App.showLetter = function(id){
  const L=LETTERS.find(x=>x.id===id); if(!L) return;
  openModal(`
    <h3 style="font-family:var(--font-ar);direction:rtl;font-size:34px">${L.ar} ${speakBtn(L.ar)}</h3>
    <table>
      <tr><th>项目</th><th>内容</th></tr>
      <tr><td>序号</td><td>${L.id} / 28</td></tr>
      <tr><td>名称</td><td>${esc(L.name)} ${speakBtn(L.name)}</td></tr>
      <tr><td>拉丁转写</td><td>${esc(L.tr)}</td></tr>
      <tr><td>发音部位/方式</td><td>${esc(L.artic)}</td></tr>
      <tr><td>中文近似音</td><td>${esc(L.zh)} <span class="badge warn">仅近似，非等同</span></td></tr>
      <tr><td>分组</td><td>${L.group?('<span class="badge">'+esc(L.group)+'</span>'):'—'}</td></tr>
    </table>
    ${L.hard?`<div class="note err">⚠️ 难音：${esc(L.note||'中文无对应音，需专项训练咽/喉部肌肉。')}</div>`:`<div class="note">${esc(L.note||'常规音素，对照中文发音即可。')}</div>`}
    <div class="fl-between" style="margin-top:14px">
      <button class="btn" onclick="App.speak('${L.ar}')">🔊 朗读字母</button>
      <button class="btn ghost" onclick="App.closeModal()">关闭</button>
    </div>`);
};

App.showVowels = function(){
  openModal(`<h3>变音符 Shift 组合（因系统而异）</h3>
    <table><tr><th>组合</th><th>符号</th><th>名称</th></tr>
    ${VOWELS.map(v=>`<tr><td>${esc(v.key)}</td><td class="ar-inline">${v.ar}</td><td>${esc(v.name)}</td></tr>`).join('')}</table>
    <div class="note warn">注：变音符组合因操作系统/输入法版本而异，上表为常见 Windows Arabic 101 布局，实际以你的系统为准。</div>
    <button class="btn ghost" onclick="App.closeModal()">关闭</button>`);
};
App.showOS = function(){
  openModal(`<h3>开启阿拉伯语输入法</h3>
    <p><b>Windows：</b>设置 → 时间和语言 → 语言 → 添加语言「Arabic」→ 安装后任务栏切换「AR」；选 Arabic 101 键盘。</p>
    <p><b>macOS：</b>系统设置 → 键盘 → 输入法 → 添加「Arabic」；菜单栏切换；⌘+空格 切换。</p>
    <p><b>手机：</b>iOS/Android 在键盘设置添加阿拉伯语键盘，长按可输入变体字母。</p>
    <div class="note">开启后即可用物理键位（参考表 B）打出阿拉伯文，配合本系统字母表练习认读。</div>
    <button class="btn ghost" onclick="App.closeModal()">关闭</button>`);
};

/* 字母测验 */
App.startLetterQuiz = function(){
  const mode=$('#quizMode').value, n=Math.min(28, Math.max(3, parseInt($('#quizN').value)||10));
  let qs=[];
  if(mode==='read'){
    qs=shuffle(LETTERS).slice(0,n).map(L=>{
      const opts=shuffle(LETTERS).slice(0,3).concat(L); shuffle(opts);
      return {prompt:`<span class="ar-inline" style="font-size:34px">${L.ar}</span>`, q:'这个字母的名称是？',
        opts:opts.map(o=>o.name), ans:opts.findIndex(o=>o.id===L.id)};
    });
  } else if(mode==='dict'){
    qs=shuffle(LETTERS).slice(0,n).map(L=>{
      const opts=shuffle(LETTERS).slice(0,3).concat(L); shuffle(opts);
      return {prompt:`名称为 <b>${esc(L.name)}</b>（${esc(L.tr)}）<br>对应的字母是？`, q:'',
        opts:opts.map(o=>`<span class="ar-inline" style="font-size:26px">${o.ar}</span>`), ans:opts.findIndex(o=>o.id===L.id)};
    });
  } else {
    // shape: 从易混组抽字母
    const pool=[]; CONFUSABLE.forEach(grp=>grp.forEach(ch=>{ const L=LETTERS.find(x=>x.ar===ch); if(L) pool.push(L); }));
    qs=shuffle(pool).slice(0,n).map(L=>{
      const grp=CONFUSABLE.find(g=>g.includes(L.ar))||[L.ar];
      const opts=grp.map(ch=>{ const x=LETTERS.find(y=>y.ar===ch); return x?x.name:ch; });
      return {prompt:`<span class="ar-inline" style="font-size:34px">${L.ar}</span>`, q:'在易混组中，它的名称是？',
        opts, ans:opts.indexOf(L.name)};
    });
  }
  runQuiz(qs, $('#quizBox'));
};

function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function runQuiz(qs, box){
  let i=0, correct=0; const weak={};
  function render(){
    if(i>=qs.length){ finish(); return; }
    const q=qs[i];
    box.innerHTML=`<div class="note">第 ${i+1} / ${qs.length} 题　正确 ${correct}</div>
      <div style="margin:14px 0;font-size:15px">${q.prompt}${q.q?('<br>'+esc(q.q)):''}</div>
      <div class="grid grid-2" id="opts"></div>`;
    const o=$('#opts');
    q.opts.forEach((opt,idx)=>{
      const b=document.createElement('button'); b.className='btn ghost'; b.style.textAlign='right';
      b.innerHTML=opt; b.onclick=()=>{
        const ok=idx===q.ans; if(ok) correct++; else weak[i]=q;
        o.querySelectorAll('button').forEach((x,k)=>{ x.disabled=true;
          if(k===q.ans) x.classList.add('blue'); if(k===idx&&!ok) x.classList.add('danger'); });
        const fb=document.createElement('div'); fb.className='note '+(ok?'ok':'err');
        fb.innerHTML=ok?'✅ 正确':'❌ 正确应为：'+ (typeof q.opts[q.ans]==='string'&&q.opts[q.ans].includes('<')?q.opts[q.ans]:esc(q.opts[q.ans]));
        box.appendChild(fb);
        const nx=document.createElement('button'); nx.className='btn'; nx.style.marginTop='10px'; nx.textContent='下一题 →';
        nx.onclick=()=>{ i++; render(); }; box.appendChild(nx);
      };
      o.appendChild(b);
    });
  }
  function finish(){
    const pct=Math.round(correct/qs.length*100);
    let rate = pct>=90?'<span class="badge ok">已掌握</span>': pct>=60?'<span class="badge warn">需巩固</span>':'<span class="badge err">未掌握</span>';
    let weakList=Object.values(weak).map(q=>typeof q.opts[q.ans]==='string'?q.opts[q.ans]:'');
    box.innerHTML=`<div class="card" style="background:#fafbff"><h3>练习结果</h3>
      <div class="stat"><span class="v">${pct}%</span><span class="l">正确率（${correct}/${qs.length}）</span></div>
      <p style="margin-top:10px">掌握度评级：${rate}</p>
      ${weakList.length?('<p class="muted" style="margin-top:8px">薄弱项：'+weakList.map(esc).join('、')+' — 建议回到字母表专项复习。</p>'):'<p class="muted" style="margin-top:8px">无薄弱项，继续保持！</p>'}
      <button class="btn" style="margin-top:10px" onclick="App.startLetterQuiz()">再来一组</button></div>`;
    saveCheckin('字母', pct, correct, qs.length);
  }
  render();
}

/* ============================================================
 * 模块一：考点库管理
 * ============================================================ */
function renderPoints(root){
  const pts=load('points',[]);
  root.innerHTML=`
  <div class="section-title">考点库管理</div>
  <div class="section-sub">对应提示词 1.1 提取录入 / 1.2 自动打标 / 1.3 检索去重。所有条目存于本地，可检索、去重、标记已学（供复习计划调用）。</div>
  <div class="card">
    <h3>➕ 新增考点（1.1 提取 · 1.2 自动打标）</h3>
    <div class="row">
      <div><label class="fl">考点描述 *</label><input class="input" id="pDesc" placeholder="如：太阳字母使前面 ال 的 ل 同化"></div>
      <div style="flex:0 0 140px"><label class="fl">类型</label><select class="select" id="pType">
        <option>字母</option><option>语音</option><option>词汇</option><option>语法</option><option>句型</option><option>文化</option></select></div>
      <div style="flex:0 0 110px"><label class="fl">难度</label><select class="select" id="pLevel"><option>A1</option><option>A2</option></select></div>
      <div style="flex:0 0 130px"><label class="fl">所属章节</label><input class="input" id="pChap" placeholder="如：第3课"></div>
    </div>
    <label class="fl">典型例句（阿文 / 转写 / 中文，用 | 分隔）</label>
    <input class="input" id="pEx" placeholder="الكتاب كبير | al-kitābu kabīr | 书很大">
    <label class="fl">常见易错点</label>
    <input class="input" id="pMis" placeholder="如：形容词需与名词性数一致">
    <div class="fl-between" style="margin-top:12px">
      <button class="btn" onclick="App.addPoint()">保存考点</button>
      <span class="muted">保存时自动按「技能/层级/难度」三维打标（1.2）。</span>
    </div>
  </div>
  <div class="card">
    <h3>🔎 检索与去重（1.3）　<span class="badge">${pts.length} 条</span></h3>
    <div class="row">
      <div><input class="input" id="pSearch" placeholder="按描述/类型/章节关键词检索" oninput="App.filterPoints()"></div>
      <div style="flex:0 0 130px"><select class="select" id="pFilter" onchange="App.filterPoints()">
        <option value="">全部类型</option><option>字母</option><option>语音</option><option>词汇</option><option>语法</option><option>句型</option><option>文化</option></select></div>
    </div>
    <div class="table-wrap" style="margin-top:12px"><table id="pTable"></table></div>
  </div>`;
  App.filterPoints();
}
App.filterPoints=function(){
  const kw=$('#pSearch').value.trim().toLowerCase(), ft=$('#pFilter').value;
  let pts=load('points',[]);
  if(kw) pts=pts.filter(p=>(p.desc+p.type+p.chapter+p.example.ar).toLowerCase().includes(kw));
  if(ft) pts=pts.filter(p=>p.type===ft);
  const tb=$('#pTable'); if(!tb) return;
  if(!pts.length){ tb.innerHTML='<tbody><tr><td class="muted">暂无考点，请在上方添加。</td></tr></tbody>'; return; }
  tb.innerHTML=`<thead><tr><th>描述</th><th>类型</th><th>难度</th><th>章节</th><th>例句(阿/转写/中)</th><th>易错点</th><th>标签</th><th>操作</th></tr></thead><tbody>`+
    pts.map(p=>`<tr>
      <td>${esc(p.desc)}</td>
      <td><span class="badge">${esc(p.type)}</span></td>
      <td>${p.level}</td><td>${esc(p.chapter||'待定')}</td>
      <td><span class="ar-inline">${esc(p.example.ar)}</span><br><span class="muted">${esc(p.example.tr)}<br>${esc(p.example.zh)}</span></td>
      <td class="muted">${esc(p.mistake||'—')}</td>
      <td>${p.tags.map(t=>`<span class="badge teal">${esc(t)}</span>`).join('')}</td>
      <td>
        ${p.learned?'<span class="badge ok">已学✓</span>':`<button class="btn sm ghost" onclick="App.markLearned('${p.id}')">标记已学</button>`}
        <button class="btn sm danger" onclick="App.delPoint('${p.id}')">删</button>
      </td></tr>`).join('')+`</tbody>`;
};
function autoTag(p){
  const skillMap={字母:['读','写'],语音:['听','说'],词汇:['读','写'],语法:['读','写'],句型:['说','写'],文化:['读']};
  const layerMap={字母:'字母',语音:'语音',词汇:'词汇',语法:'语法',句型:'句型',文化:'文化'};
  const tags=[...(skillMap[p.type]||[]).map(s=>'技能:'+s), '层级:'+(layerMap[p.type]||'其他'), '难度:'+p.level];
  return tags;
}
App.addPoint=function(){
  const desc=$('#pDesc').value.trim(); if(!desc){ toast('请填写考点描述'); return; }
  const ex=$('#pEx').value.split('|').map(s=>s.trim());
  const p={ id:uid(), desc, type:$('#pType').value, level:$('#pLevel').value, chapter:$('#pChap').value.trim(),
    example:{ar:ex[0]||'', tr:ex[1]||'', zh:ex[2]||''}, mistake:$('#pMis').value.trim(), tags:[], learned:false };
  p.tags=autoTag(p);
  // 1.3 去重自检
  const all=load('points',[]);
  const dup=all.find(x=>x.desc.replace(/\s/g,'')===desc.replace(/\s/g,''));
  if(dup){ if(!confirm('检测到相似考点：「'+dup.desc+'」。仍要入库吗？取消可合并。')) return; }
  all.push(p); store('points',all);
  toast('已保存并自动打标');
  $('#pDesc').value='';$('#pEx').value='';$('#pMis').value='';$('#pChap').value='';
  App.filterPoints();
};
App.markLearned=function(id){ const a=load('points',[]); const p=a.find(x=>x.id===id); if(p){ p.learned=true; p.learnedDate=today(); store('points',a); toast('已标记已学，纳入复习计划'); App.filterPoints(); } };
App.delPoint=function(id){ let a=load('points',[]); a=a.filter(x=>x.id!==id); store('points',a); App.filterPoints(); };

/* ============================================================
 * 模块二：复习计划生成
 * ============================================================ */
function renderPlan(root){
  root.innerHTML=`
  <div class="section-title">复习计划生成</div>
  <div class="section-sub">2.1 个性化计划 · 2.2 每日复习（艾宾浩斯）· 2.3 动态调整。计划基于你标记的「已学考点」自动排程。</div>
  <div class="grid grid-2">
    <div class="card">
      <h3>🗓️ 2.1 个性化学习计划</h3>
      <div class="row">
        <div><label class="fl">学习目标</label><input class="input" id="gGoal" value="3 个月达到 A1"></div>
        <div style="flex:0 0 110px"><label class="fl">周期(月)</label><input class="input" id="gMonths" type="number" value="3"></div>
      </div>
      <div class="row">
        <div style="flex:0 0 130px"><label class="fl">每日时长(分)</label><input class="input" id="gMin" type="number" value="30"></div>
        <div style="flex:0 0 150px"><label class="fl">当前基础</label><select class="select" id="gBase">
          <option>零基础</option><option>已学字母</option><option>已学基础语法</option></select></div>
        <div style="flex:0 0 130px"><label class="fl">目标场景</label><select class="select" id="gScene">
          <option>日常交流</option><option>考试</option><option>宗教经典阅读</option></select></div>
      </div>
      <button class="btn" style="margin-top:12px" onclick="App.genPlan()">生成计划</button>
      <div id="planOut" style="margin-top:12px"></div>
    </div>
    <div class="card">
      <h3>🔁 2.2 今日复习清单（艾宾浩斯）</h3>
      <div id="dailyOut"></div>
      <button class="btn ghost sm" style="margin-top:10px" onclick="App.genDaily()">刷新今日清单</button>
    </div>
  </div>
  <div class="card">
    <h3>⚙️ 2.3 学习计划动态调整</h3>
    <div class="row">
      <div style="flex:0 0 120px"><label class="fl">计划周数</label><input class="input" id="dPlan" type="number" value="12"></div>
      <div style="flex:0 0 120px"><label class="fl">已完成周</label><input class="input" id="dDone" type="number" value="4"></div>
      <div style="flex:0 0 120px"><label class="fl">最近测试分</label><input class="input" id="dScore" type="number" value="65"></div>
    </div>
    <button class="btn" style="margin-top:12px" onclick="App.adjustPlan()">诊断并调整</button>
    <div id="adjOut" style="margin-top:12px"></div>
  </div>`;
  App.genDaily();
};
App.genPlan=function(){
  const goal=$('#gGoal').value, months=+$('#gMonths').value, min=+$('#gMin').value, base=$('#gBase').value, scene=$('#gScene').value;
  const stages=[
    {s:'字母与语音', c:'28 字母认读/书写、连写四态、喉音专项', v:'能盲读字母名+听写'},
    {s:'基础词汇', c:'核心名词/代词/疑问词（约 '+Math.round(min*2)+' 词/周）', v:'能中英阿三向回忆'},
    {s:'核心语法', c:'名词句、性数格、冠词、介词', v:'能造 5 个正确名词句'},
    {s:'简单句型', c:'动词过去/现在式、否定、问答', v:'能作 1 分钟自我介绍'},
    {s:'综合运用', c:'情景对话+听力输入+书写短文', v:'能完成点餐/问路对话'}
  ];
  let extra = scene==='宗教经典阅读' ? '<div class="note warn">目标场景为宗教经典阅读：词汇权重已向高频古兰经词汇倾斜，建议每周额外 +20 分钟诵读。</div>' : '';
  let note = base==='零基础' ? '从阶段一开始' : base==='已学字母' ? '跳过阶段一，从阶段二开始' : '可从阶段三起步，前置复习 1 周';
  const tbl=`<table><thead><tr><th>阶段</th><th>周期</th><th>内容</th><th>验收标准</th></tr></thead><tbody>`+
    stages.map((st,i)=>`<tr><td>${i+1}. ${esc(st.s)}</td><td>第${i*Math.floor(months*4/5)+1}–${Math.floor((i+1)*months*4/5)}周</td><td>${esc(st.c)}</td><td>${esc(st.v)}</td></tr>`).join('')+
    `</tbody></table>`;
  const nodes=`<div class="note">📌 复习节点（艾宾浩斯）：学习后第 1 / 3 / 7 / 15 / 30 天安排复习。</div>
    <div class="note">${esc(note)}</div>${extra}
    <div class="muted">每日学习量已按 ${min} 分钟匹配，避免超载；所有内容可量化（具体词数/语法点）。</div>`;
  $('#planOut').innerHTML=tbl+nodes;
  toast('计划已生成');
};
App.genDaily=function(){
  const pts=load('points',[]).filter(p=>p.learned);
  const box=$('#dailyOut');
  if(!pts.length){ box.innerHTML='<div class="note warn">暂无「已学考点」。请先在「考点库」标记已学，系统将按艾宾浩斯曲线生成今日复习。</div>'; return; }
  const due=pts.map(p=>{ const d=p.learnedDate||today(); const age=daysBetween(d,today());
    const idx=EB_INTERVALS.findIndex(x=>x>=age); const next=EB_INTERVALS[Math.min(idx,EB_INTERVALS.length-1)];
    return {p, age, dueIn: next-age, next}; }).filter(x=>x.dueIn<=0);
  if(!due.length){ box.innerHTML='<div class="note ok">🎉 今日无到期考点，继续保持！可手动复习或学习新考点。</div>'; return; }
  const tbl=`<table><thead><tr><th>考点</th><th>已学天数</th><th>优先级</th><th>预计耗时</th></tr></thead><tbody>`+
    due.sort((a,b)=>a.age-b.age).map(x=>`<tr><td>${esc(x.p.desc)}</td><td>${x.age}天</td>
      <td><span class="badge ${x.age>=15?'err':x.age>=7?'warn':'teal'}">${x.age>=15?'高':x.age>=7?'中':'低'}</span></td><td>~3分</td></tr>`).join('')+
    `</tbody></table><div class="muted">共 ${due.length} 项到期，预计 ${due.length*3} 分钟。模糊/遗忘项请升级为重点（在背诵打卡中强化）。</div>`;
  box.innerHTML=tbl;
};
App.adjustPlan=function(){
  const plan=+$('#dPlan').value, done=+$('#dDone').value, score=+$('#dScore').value;
  const lag=done-plan; // 若 done<plan 则滞后
  let diag, tbl, action;
  if(done>=plan){ diag=`<div class="note ok">进度超前（已完成 ${done} 周 ≥ 计划 ${plan} 周）。</div>`;
    tbl=`<table><thead><tr><th>原安排</th><th>新安排</th><th>理由</th></tr></thead><tbody>
      <tr><td>按计划收尾</td><td>提前引入下一阶段 / 增加拓展阅读</td><td>进度超前，可利用余量加量</td></tr></tbody></table>`;
    action='下一步：进入拓展模块（听力/口语），或提前备考模拟。';
  } else {
    const behind=plan-done;
    diag=`<div class="note err">偏差诊断：落后约 ${behind} 周。最近测试 ${score} 分${score<70?'，薄弱项明显':''}。</div>`;
    let reason = score<70?'成因：难度偏高/练习量不足': '成因：可用时长不足或方法待优化';
    tbl=`<table><thead><tr><th>原安排</th><th>新安排</th><th>调整理由</th></tr></thead><tbody>
      <tr><td>按原速推进全部内容</td><td>压缩非核心（文化拓展），延长语法/语音周期 +${behind}周</td><td>${reason}</td></tr>
      <tr><td>每周均速</td><td>落后周每天 +10 分钟补差</td><td>追赶进度且不超载荷</td></tr></tbody></table>`;
    action='下一步：优先补「字母语音」与「核心语法」等不可跳过项，每周日复盘。';
  }
  $('#adjOut').innerHTML=diag+tbl+`<div class="note">${esc(action)}</div>`;
};

/* ============================================================
 * 模块三：知识点思维导图
 * ============================================================ */
function renderMindmap(root){
  root.innerHTML=`
  <div class="section-title">知识点思维导图</div>
  <div class="section-sub">3.1 主题思维导图 · 3.2 章节知识图谱 · 3.3 语法体系全景。基于内置知识库，使用 Mermaid 渲染（离线降级为文本）。</div>
  <div class="card">
    <h3>🧠 3.1 主题思维导图</h3>
    <div class="row">
      <div><select class="select" id="mmTopic">
        ${Object.keys(GRAMMAR).filter(k=>k!=='panorama').map(k=>`<option value="${k}">${GRAMMAR[k].title}</option>`).join('')}
      </select></div>
      <div style="flex:0 0 120px"><button class="btn" onclick="App.renderMM()">生成导图</button></div>
    </div>
    <div id="mmOut" style="margin-top:12px"></div>
  </div>
  <div class="grid grid-2">
    <div class="card">
      <h3>🕸️ 3.2 章节知识图谱（含关联）</h3>
      <div id="graphOut"></div>
    </div>
    <div class="card">
      <h3>🗺️ 3.3 语法体系全景（A1→A2）</h3>
      <div id="panoOut"></div>
    </div>
  </div>`;
  App.renderMM(); App.renderGraph(); App.renderPano();
}
function cleanLabel(s){ return String(s).replace(/[\[\]\(\)]/g,' ').replace(/\n/g,' ').trim(); }
function treeToMindmap(rootNode){
  const out=['mindmap','  root(('+cleanLabel(rootNode.label)+'))'];
  (function walk(node,ind){ (node.children||[]).forEach(c=>{ out.push(' '.repeat(ind+2)+cleanLabel(c.label));
    if(c.children) walk(c, ind+2); }); })(rootNode,2);
  return out.join('\n');
}
App.renderMM=function(){ const k=$('#mmTopic').value; renderMermaid($('#mmOut'), treeToMindmap(GRAMMAR[k].tree)); };
App.renderGraph=function(){
  const code=`graph LR
  A[人称代词] --> B[名词句]
  C[名词性数格] --> B
  C -.对比.-> D[动词句]
  B --> E[冠词 ال]
  E --> F[介词 في/من/إلى]
  G[动词变位] --> D
  style A fill:#e2a252,color:#1a1206
  style B fill:#16213e,color:#fff`;
  renderMermaid($('#graphOut'), code);
  $('#graphOut').insertAdjacentHTML('beforeend','<div class="note">重点关系：① 人称代词是名词句主语的前提；② 名词句(无动词)与动词句(有动词)为对比关系；③ 冠词/介词依附名词格位。</div>');
};
App.renderPano=function(){
  renderMermaid($('#panoOut'), treeToMindmap(GRAMMAR.panorama.tree));
  $('#panoOut').insertAdjacentHTML('beforeend','<div class="note"><b>学习顺序建议：</b><br>'+GRAMMAR.panorama.order.map(o=>'• '+esc(o)).join('<br>')+'</div>');
};

/* ============================================================
 * 模块四：背诵打卡
 * ============================================================ */
function renderRecite(root){
  root.innerHTML=`
  <div class="section-title">背诵打卡</div>
  <div class="section-sub">4.1 背诵任务生成（7±2 记忆块）· 4.2 打卡自测核验 · 4.3 遗忘预警与重背调度。</div>
  <div class="grid grid-2">
    <div class="card">
      <h3>📝 4.1 背诵任务生成</h3>
      <div class="row">
        <div><label class="fl">内容来源</label><select class="select" id="rSrc">
          <option value="vocab">内置 A1 词汇库</option><option value="custom">自定义文本</option></select></div>
        <div style="flex:0 0 120px"><label class="fl">目标</label><select class="select" id="rGoal">
          <option value="today">今日</option><option value="week">本周</option></select></div>
      </div>
      <div id="rCustomWrap" class="hidden"><label class="fl">自定义（每行一词/句，附「中文」）</label>
        <textarea class="textarea" id="rCustom" placeholder="قهوة|咖啡&#10;كتاب|书"></textarea></div>
      <label class="fl">分类筛选（词汇库）</label>
      <select class="select" id="rCat"><option value="">全部分类</option>${[...new Set(VOCAB.map(v=>v.cat))].map(c=>`<option>${c}</option>`).join('')}</select>
      <button class="btn" style="margin-top:12px" onclick="App.genRecite()">生成背诵块</button>
      <div id="reciteOut" style="margin-top:12px"></div>
    </div>
    <div class="card">
      <h3>✅ 4.2 打卡自测核验</h3>
      <div id="checkinOut"></div>
      <button class="btn ghost sm" style="margin-top:10px" onclick="App.startCheckin()">开始打卡自测</button>
    </div>
  </div>
  <div class="card">
    <h3>⏰ 4.3 遗忘预警与重背调度</h3>
    <div id="warnOut"></div>
    <button class="btn ghost sm" style="margin-top:10px" onclick="App.genWarn()">刷新预警</button>
  </div>`;
  $('#rSrc').onchange=()=>$('#rCustomWrap').classList.toggle('hidden', $('#rSrc').value!=='custom');
  App.genWarn();
};
App.genRecite=function(){
  let items=[];
  if($('#rSrc').value==='vocab'){ const cat=$('#rCat').value; items=VOCAB.filter(v=>!cat||v.cat===cat).map(v=>({ar:v.ar,tr:v.tr,zh:v.zh})); }
  else { items=$('#rCustom').value.split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{ const [ar,zh]=l.split('|'); return {ar:ar.trim(), zh:zh?zh.trim():''}; }); }
  if(!items.length){ toast('没有可生成的内容'); return; }
  // 7±2 分块
  const blockSize=7; const blocks=[];
  for(let i=0;i<items.length;i+=blockSize) blocks.push(items.slice(i,i+blockSize));
  const html=blocks.map((b,bi)=>`<div class="card" style="background:#fafbff;margin-bottom:10px">
    <b>记忆块 ${bi+1}（${b.length} 项）</b>
    <table><thead><tr><th>阿文</th><th>转写</th><th>中文</th><th>自测问题</th></tr></thead><tbody>
    ${b.map(it=>`<tr><td class="ar-inline">${esc(it.ar)} ${speakBtn(it.ar)}</td><td>${esc(it.tr)}</td><td>${esc(it.zh)}</td>
      <td class="muted">看中默阿 / 看阿说中</td></tr>`).join('')}</tbody></table></div>`).join('');
  $('#reciteOut').innerHTML=`<div class="note">共 ${items.length} 项，分为 ${blocks.length} 个记忆块（每块 ≤7，符合 7±2 认知负荷）。建议循环 3 遍：听读→遮卡自测→补弱。</div>`+html;
  // 保存为背诵条目（供预警）
  const rec=load('recite',[]); const stamp=today();
  items.forEach(it=>{ if(!rec.find(r=>r.ar===it.ar)) rec.push({ar:it.ar,tr:it.tr,zh:it.zh,last:stamp,acc:null}); });
  store('recite',rec); toast('已生成并存入背诵库');
};
App.startCheckin=function(){
  let rec=load('recite',[]);
  if(!rec.length){ // 回退到词汇库
    rec=VOCAB.slice(0,10).map(v=>({ar:v.ar,tr:v.tr,zh:v.zh,last:null,acc:null}));
  }
  rec=shuffle(rec).slice(0,Math.min(10,rec.length));
  let i=0, c=0; const box=$('#checkinOut');
  function card(){
    if(i>=rec.length){ fin(); return; }
    const it=rec[i];
    box.innerHTML=`<div class="note">第 ${i+1}/${rec.length} 项</div>
      <div class="ar-inline" style="font-size:30px">${esc(it.ar)} ${speakBtn(it.ar)}</div>
      <div class="muted">${esc(it.tr)} ＝ ${esc(it.zh)}</div>
      <p style="margin-top:10px">你能否正确回忆/默写？</p>
      <div class="row">
        <button class="btn blue" onclick="App._ci(1)">完全正确</button>
        <button class="btn ghost" onclick="App._ci(0.5)">部分正确</button>
        <button class="btn danger" onclick="App._ci(0)">错误</button>
      </div>`;
  }
  App._ci=function(v){ if(v===1)c++; else if(v===0.5)c+=0.5; const it=rec[i]; it.last=today(); it.acc=Math.round((v)*100);
    const r=load('recite',[]); const ex=r.find(x=>x.ar===it.ar); if(ex){ex.last=it.last;ex.acc=it.acc;} store('recite',r);
    i++; card(); };
  function fin(){ const pct=Math.round(c/rec.length*100); let rate=pct>=90?'<span class="badge ok">已掌握</span>':pct>=60?'<span class="badge warn">需巩固</span>':'<span class="badge err">未掌握</span>';
    box.innerHTML=`<div class="card" style="background:#fafbff"><h3>打卡结果</h3>
      <div class="stat"><span class="v">${pct}%</span><span class="l">正确率（${c}/${rec.length}）</span></div>
      <p style="margin-top:8px">掌握度：${rate}</p>
      <p class="muted" style="margin-top:6px">打卡已记录（${today()}），薄弱项明日将进入重背预警。</p>
      <button class="btn" style="margin-top:8px" onclick="App.startCheckin()">再测一组</button></div>`;
    saveCheckin('背诵', pct, c, rec.length); }
  card();
};
App.genWarn=function(){
  const rec=load('recite',[]); const box=$('#warnOut');
  if(!rec.length){ box.innerHTML='<div class="note warn">背诵库为空。请先在 4.1 生成背诵任务并打卡。</div>'; return; }
  const rows=rec.map(it=>{ const last=it.last||today(); const age=daysBetween(last,today());
    const R=Math.max(0, Math.round(100 - age*(100/30))); const adj=it.acc!=null?Math.round(it.acc/100*R):R;
    return {it, age, R:adj}; }).sort((a,b)=>a.R-b.R);
  const danger=rows.filter(r=>r.R<40);
  box.innerHTML=`<table><thead><tr><th>内容</th><th>上次背</th><th>间隔</th><th>保持率(估算)</th><th>建议重背日</th></tr></thead><tbody>`+
    rows.map(r=>`<tr><td class="ar-inline">${esc(r.it.ar)}</td><td>${esc(r.it.last||'—')}</td><td>${r.age}天</td>
      <td><span class="badge ${r.R<40?'err':r.R<70?'warn':'ok'}">${r.R}%</span></td>
      <td class="muted">${esc(addDays(r.it.last||today(), Math.max(1, Math.round((100-r.R)/5))))}</td></tr>`).join('')+
    `</tbody></table>`+
    (danger.length?`<div class="note err">⚠️ 中断预警：${danger.length} 项保持率低于 40%，建议今日优先重背。</div>`:'<div class="note ok">暂无高危遗忘项。</div>')+
    `<div class="muted">保持率为基于标准遗忘曲线的估算值，仅供排程参考。</div>`;
};
function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); return x.toISOString().slice(0,10); }

/* ============================================================
 * 模块五：口语练习
 * ============================================================ */
function renderSpeak(root){
  root.innerHTML=`
  <div class="section-title">口语练习</div>
  <div class="section-sub">5.1 发音跟读纠错 · 5.2 情景对话（点餐/问路/购物/机场）· 5.3 即兴表达评分。</div>
  <div class="card">
    <h3>🔊 5.1 发音跟读与纠错</h3>
    <label class="fl">输入一句/一段阿拉伯语（或用预设）</label>
    <textarea class="textarea" id="spIn">الكتابُ كبيرٌ</textarea>
    <div class="row" style="margin-top:8px">
      <button class="btn" onclick="App.analyzePron()">拆解发音</button>
      <button class="btn ghost" onclick="App.spPreset()">载入预设例句</button>
    </div>
    <div id="spOut" style="margin-top:12px"></div>
  </div>
  <div class="grid grid-2">
    <div class="card">
      <h3>💬 5.2 情景对话练习</h3>
      <select class="select" id="spScene">${DIALOGUES.map(d=>`<option value="${d.key}">${d.title}</option>`).join('')}</select>
      <button class="btn" style="margin-top:10px" onclick="App.startDialogue()">进入对话</button>
      <div id="dlgOut" style="margin-top:12px"></div>
    </div>
    <div class="card">
      <h3>🎤 5.3 即兴表达与话题陈述</h3>
      <select class="select" id="spTopic">${TOPICS.map((t,i)=>`<option value="${i}">${t.title}</option>`).join('')}</select>
      <button class="btn" style="margin-top:10px" onclick="App.startTopic()">出题</button>
      <div id="topicOut" style="margin-top:12px"></div>
    </div>
  </div>`;
}
App.spPreset=function(){ $('#spIn').value='الطالبُ يقرأُ الكتابَ'; };
App.analyzePron=function(){
  const txt=$('#spIn').value.trim(); if(!txt){ toast('请输入阿拉伯语'); return; }
  const words=txt.split(/\s+/).filter(Boolean);
  const hardSet=new Set(LETTERS.filter(l=>l.hard).map(l=>l.ar));
  const rows=words.map(w=>{
    const hard=w.split('').filter(ch=>hardSet.has(ch));
    return {w, hard};
  });
  const minimalPairs=[['ث / ذ','齿间清/浊：think / this'],['ح / خ','咽音 / 软腭：喉咙哈气 vs 德 ch'],['ص / س','重读 s vs 轻 s'],['ط / ت','重读 t vs 轻 t'],['ع / غ','咽浊 vs 软腭浊'],['ق / ك','小舌 k vs 软腭 k']];
  $('#spOut').innerHTML=`
    <button class="btn blue sm" onclick="App.speak(${JSON.stringify(txt).replace(/"/g,'&quot;')})">🔊 整句朗读</button>
    <table style="margin-top:10px"><thead><tr><th>词</th><th>朗读</th><th>难音标注</th></tr></thead><tbody>
    ${rows.map(r=>`<tr><td class="ar-inline" style="font-size:22px">${esc(r.w)}</td>
      <td><button class="speak sm" onclick="App.speak(${JSON.stringify(r.w).replace(/"/g,'&quot;')})">🔊</button></td>
      <td>${r.hard.length?('<span class="badge err">'+r.hard.join(' ')+' ⚠️</span> 中文无对应音，需专项训练'):'<span class="badge ok">常规音</span>'}</td></tr>`).join('')}</tbody></table>
    <div class="note warn">⚠️ 难音（ع ح خ غ ق ص ض ط ظ ذ ث ر）中文无完全对应音，上方近似音仅作定位，非等同。</div>
    <h3 style="margin-top:12px">最小对立对练习</h3>
    <table><thead><tr><th>对立对</th><th>区别</th></tr></thead><tbody>${minimalPairs.map(p=>`<tr><td class="ar-inline">${esc(p[0])}</td><td class="muted">${esc(p[1])}</td></tr>`).join('')}</tbody></table>`;
};
App.startDialogue=function(){
  const d=DIALOGUES.find(x=>x.key===$('#spScene').value); if(!d) return;
  const box=$('#dlgOut');
  let html=`<div class="note">场景：${esc(d.title)}　AI 演 ${esc(d.aiRole)}，你演 ${esc(d.userRole)}。</div>
    <div style="margin:8px 0"><b>种子词库：</b>${d.seeds.map(s=>`<span class="pill">${esc(s.ar)} ${speakBtn(s.ar)} <span class="muted">${esc(s.tr)}·${esc(s.zh)}</span></span>`).join('')}</div>
    <div style="margin:8px 0"><b>高频句型：</b>${d.sentences.map(s=>`<div class="ar-inline" style="display:block;font-size:18px">${esc(s.ar)} ${speakBtn(s.ar)}</div><span class="muted">${esc(s.tr)} · ${esc(s.zh)}</span>`).join('<br>')}</div>
    <div class="chat" id="chat"></div>
    <div id="dlgNav"></div>`;
  box.innerHTML=html;
  const chat=$('#chat'); let i=0;
  function pushAI(t){ const b=document.createElement('div'); b.className='bubble ai'; b.innerHTML=`<span class="ar">${esc(t.ar)}</span><span class="tr">${esc(t.tr)} · ${esc(t.zh)}</span> <button class="speak sm" onclick="App.speak(${JSON.stringify(t.ar).replace(/"/g,'&quot;')})">🔊</button>`; chat.appendChild(b); chat.scrollTop=chat.scrollHeight; }
  function step(){
    if(i>=d.flow.length){ // 结束
      $('#dlgNav').innerHTML=`<div class="note ok"><b>本场景高频句型总结：</b><br>${esc(d.summary)}</div>
        <div class="note"><b>你的改进点：</b><br>${esc(d.improve)}</div>
        <button class="btn" onclick="App.startDialogue()">重练</button>`;
      return; }
    const f=d.flow[i];
    pushAI(f.ai);
    const nav=$('#dlgNav'); nav.innerHTML=`<div class="note">你的任务：${esc(f.prompt)}</div>
      <button class="btn blue sm" onclick="App._reveal()">看参考答案并继续 →</button>`;
    App._reveal=function(){
      const u=document.createElement('div'); u.className='bubble me';
      u.innerHTML=`<span class="ar">${esc(f.user.ar)}</span><span class="tr">${esc(f.user.tr)} · ${esc(f.user.zh)}</span> <button class="speak sm" onclick="App.speak(${JSON.stringify(f.user.ar).replace(/"/g,'&quot;')})">🔊</button>`;
      chat.appendChild(u); chat.scrollTop=chat.scrollHeight;
      i++; step();
    };
  }
  step();
};
App.startTopic=function(){
  const t=TOPICS[+$('#spTopic').value]; if(!t) return;
  const box=$('#topicOut');
  box.innerHTML=`<div class="note"><b>话题：</b>${esc(t.title)}</div>
    <p><b>引导问题：</b></p><ul style="margin-left:18px">${t.guide.map(g=>`<li>${esc(g)}</li>`).join('')}</ul>
    <p><b>关键词汇：</b>${t.vocab.map(v=>`<span class="badge teal">${esc(v)}</span>`).join('')}</p>
    <p><b>万能句型：</b></p>${t.frames.map(f=>`<div class="ar-inline" style="display:block;font-size:18px">${esc(f)}</div>`).join('')}
    <div class="note">陈述后，按四维自评（0–5 分）：</div>
    <div id="scoreBox"></div>`;
  const dims=[['流利度','表达是否连贯顺畅'],['准确度','语法/词形是否正确'],['词汇','用词是否够用贴切'],['发音','难音/连读是否清晰']];
  const sb=$('#scoreBox'); sb.innerHTML=dims.map((d,i)=>`<div class="row" style="align-items:center;margin:6px 0">
      <div style="flex:0 0 90px"><b>${d[0]}</b><br><span class="muted" style="font-size:11px">${esc(d[1])}</span></div>
      <div>${[0,1,2,3,4,5].map(v=>`<button class="pill" data-d="${i}" data-v="${v}" onclick="App._rate(${i},${v})">${v}</button>`).join('')}</div></div>`).join('')+
    `<button class="btn" style="margin-top:10px" onclick="App._topicDone()">提交评分</button>`;
  App._scores=[0,0,0,0];
  App._rate=function(d,v){ App._scores[d]=v; $all(`[data-d="${d}"]`).forEach(b=>b.style.background=b.dataset.v==v?'var(--gold)':'#fff'); };
  App._topicDone=function(){
    const [a,b,c,d4]=App._scores; const total=a+b+c+d4;
    const advice=['减少停顿、多练整句输出','检查名词句/动词句结构，避免直译','优先掌握本话题核心 5 词','跟读 5.1 难音最小对立对'];
    box.insertAdjacentHTML('beforeend',`<div class="card" style="background:#fafbff;margin-top:10px">
      <h3>评分结果</h3>
      <div class="stat"><span class="v">${total}/20</span><span class="l">四维总分</span></div>
      <table style="margin-top:8px"><thead><tr><th>维度</th><th>分</th><th>最优先改进</th></tr></thead><tbody>
      ${dims.map((dm,i)=>`<tr><td>${dm[0]}</td><td>${App._scores[i]}</td><td class="muted">${esc(advice[i])}</td></tr>`).join('')}</tbody></table>
      <p class="muted" style="margin-top:6px">评分须结合你的实际陈述；建议把最低分维度作为下次重点。</p></div>`);
    saveCheckin('口语', Math.round(total/20*100), total, 20);
  };
};

/* ============================================================
 * 模块六：听力训练
 * ============================================================ */
function renderListen(root){
  root.innerHTML=`
  <div class="section-title">听力训练</div>
  <div class="section-sub">6.1 分级听力材料 · 6.2 精听听写 · 6.3 泛听磨耳排期。</div>
  <div class="card">
    <h3>🎧 6.1 分级听力材料</h3>
    <div class="row">
      <div><select class="select" id="lsMat">${LISTENING.map((m,i)=>`<option value="${i}">${m.title}（${m.level}/${m.speed}）</option>`).join('')}</select></div>
      <div style="flex:0 0 120px"><button class="btn" onclick="App.showListen()">加载材料</button></div>
    </div>
    <div id="lsOut" style="margin-top:12px"></div>
  </div>
  <div class="grid grid-2">
    <div class="card">
      <h3>✍️ 6.2 精听听写</h3>
      <div class="row">
        <div><select class="select" id="dtMat">${LISTENING.map((m,i)=>`<option value="${i}">${m.title}</option>`).join('')}</select></div>
        <div style="flex:0 0 120px"><button class="btn" onclick="App.startDictation()">开始听写</button></div>
      </div>
      <div id="dtOut" style="margin-top:12px"></div>
    </div>
    <div class="card">
      <h3>🌊 6.3 泛听磨耳（7 天排期）</h3>
      <div id="extOut"></div>
    </div>
  </div>`;
  App.showListen(); App.showExtensive();
}
App.showListen=function(){
  const m=LISTENING[+$('#lsMat').value]; const box=$('#lsOut');
  const qHtml=m.questions.map((q,qi)=>`<div style="margin:8px 0"><b>Q${qi+1}. ${esc(q.q)}</b><br>
    ${q.options.map((o,oi)=>`<label style="display:block;margin:3px 0"><input type="radio" name="ls${qi}" value="${oi}"> ${esc(o)}</label>`).join('')}</div>`).join('');
  box.innerHTML=`<div class="note">类型：${esc(m.type)}　等级：${m.level}　语速：${m.speed}（约 ${m.speed==='慢速'?'80-100':'130-150'} 词/分）</div>
    <div id="lsText"></div>
    <button class="btn blue sm" onclick="App._playAll()">🔊 朗读全文</button>
    <p style="margin-top:10px"><b>关键词汇：</b>${m.vocab.map(v=>`<span class="badge teal">${esc(v.ar)} ${esc(v.tr)}·${esc(v.zh)}</span>`).join('')}</p>
    <div style="margin-top:10px">${qHtml}</div>
    <button class="btn" onclick="App._gradeListen()">提交答案</button>
    <div id="lsAns" style="margin-top:10px"></div>`;
  $('#lsText').innerHTML=m.text.map((s,i)=>`<div class="ar-inline" style="display:block;font-size:19px">${esc(s.ar)} <button class="speak sm" onclick="App.speak(${JSON.stringify(s.ar).replace(/"/g,'&quot;')})">🔊</button></div><span class="muted">${esc(s.tr)} · ${esc(s.zh)}</span><br>`).join('');
  App._playAll=function(){ m.text.forEach((s,i)=>setTimeout(()=>speak(s.ar), i*1600)); };
  App._gradeListen=function(){
    let correct=0; m.questions.forEach((q,qi)=>{ const sel=$(`input[name="ls${qi}"]:checked`); if(sel&&+sel.value===q.a) correct++; });
    const pct=Math.round(correct/m.questions.length*100);
    $('#lsAns').innerHTML=`<div class="note ${pct>=60?'ok':'err'}">正确率 ${pct}%（${correct}/${m.questions.length}）</div>
      <details style="margin-top:6px"><summary class="muted">查看答案与转写</summary>
      ${m.questions.map((q,qi)=>`<div style="margin:6px 0">Q${qi+1} <b>${esc(q.q)}</b> → 答案：${esc(q.options[q.a])}</div>`).join('')}
      <hr><b>原文转写：</b><br>${m.text.map(s=>`<div class="muted">${esc(s.ar)} ｜ ${esc(s.tr)} ｜ ${esc(s.zh)}</div>`).join('')}</details>`;
    saveCheckin('听力', pct, correct, m.questions.length);
  };
};
App.startDictation=function(){
  const m=LISTENING[+$('#dtMat').value]; const box=$('#dtOut');
  const sents=m.text; let i=0, totalDiff=0;
  function step(){
    if(i>=sents.length){ box.innerHTML=`<div class="note ok">听写完成！共 ${sents.length} 句。整体对照见上。建议：先说意群再整句复述。</div><button class="btn" onclick="App.startDictation()">重做</button>`; return; }
    const s=sents[i];
    box.innerHTML=`<div class="note">第 ${i+1}/${sents.length} 句</div>
      <button class="btn blue sm" onclick="App.speak(${JSON.stringify(s.ar).replace(/"/g,'&quot;')})">🔊 听一遍</button>
      <button class="btn ghost sm" onclick="App.speak(${JSON.stringify(s.ar).replace(/"/g,'&quot;')})">🔊 再听</button>
      <p class="muted" style="margin-top:6px">提示：${esc(s.zh)}</p>
      <textarea class="textarea" id="dtIn" placeholder="在此输入你听到的阿拉伯文…"></textarea>
      <button class="btn" style="margin-top:8px" onclick="App._dtCheck()">对照</button>
      <div id="dtCmp"></div>`;
    App._dtCheck=function(){
      const inp=$('#dtIn').value.trim(); const diff=levenshtein(inp, s.ar);
      totalDiff+=diff;
      $('#dtCmp').innerHTML=`<div class="card" style="background:#fafbff;margin-top:8px">
        <p><b>你的输入：</b><span class="ar-inline">${esc(inp||'（空）')}</span></p>
        <p><b>原文：</b><span class="ar-inline">${esc(s.ar)}</span> <span class="muted">${esc(s.tr)} · ${esc(s.zh)}</span></p>
        <p class="muted">编辑距离（越小越准）：${diff}。归因：辨音错误请重听难音；词汇不熟请回背诵模块。</p>
        <button class="btn" onclick="App._dtNext()">下一句 →</button></div>`;
    };
    App._dtNext=function(){ i++; step(); };
  }
  step();
};
App.showExtensive=function(){
  const lvl=getSettings().level;
  const mat=[['新闻慢速','听懂大意即可','辨音'],['儿歌/童谣','感受节奏韵律','语流'],['对话播客','抓关键词','语感'],['经典诵读','跟读模仿','发音']];
  const rows=mat.map((m,i)=>`<tr><td>${esc(m[0])}</td><td>${esc(m[1])}</td><td><span class="badge teal">${esc(m[2])}</span></td><td>第${(i%7)+1}天轮换</td></tr>`).join('');
  $('#extOut').innerHTML=`<div class="note">泛听定位：不追求逐句听懂，重在语感浸泡。难度略高于精听等级属正常（听不懂≠失败）。</div>
    <table><thead><tr><th>素材</th><th>泛听目标</th><th>训练点</th><th>排期</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="note warn">泛听「不需要做」：① 逐句听写 ② 查每个生词 ③ 因听不懂而焦虑。建议每日通勤/家务时背景播放 ${lvl==='A1'?'10-15':'20-30'} 分钟。</div>
    <div class="muted">素材请使用公开无版权资源（如公开诵读音频），本系统不虚构具体下载链接。</div>`;
};
function levenshtein(a,b){ const m=a.length,n=b.length; const d=Array.from({length:m+1},(_,i)=>[i,...Array(n).fill(0)]); for(let j=0;j<=n;j++)d[0][j]=j;
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++){ const c=a[i-1]===b[j-1]?0:1; d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+c); } return d[m][n]; }

/* ============================================================
 * 进度看板
 * ============================================================ */
function renderDashboard(root){
  const pts=load('points',[]), learned=pts.filter(p=>p.learned).length;
  const rec=load('recite',[]), ci=load('checkins',[]);
  const avg=ci.length?Math.round(ci.reduce((s,x)=>s+x.accuracy,0)/ci.length):0;
  const lw=getLearnedWords().size, ls=getLearnedSentences().size;
  const streak=computeStreak();
  const sts=getSelfTests(); const stAvg=sts.length?Math.round(sts.reduce((s,x)=>s+x.overall,0)/sts.length):0;
  root.innerHTML=`
  <div class="section-title">进度看板</div>
  <div class="section-sub">本地学习数据总览。所有数据存于本机浏览器，不上传服务器。</div>
  <div class="grid grid-3">
    <div class="card stat"><span class="v">${WORDS.length}</span><span class="l">单词总量</span></div>
    <div class="card stat"><span class="v">${lw}</span><span class="l">已掌握单词</span></div>
    <div class="card stat"><span class="v">${SENTENCES.length}</span><span class="l">句子总量</span></div>
    <div class="card stat"><span class="v">${ls}</span><span class="l">已掌握句子</span></div>
    <div class="card stat"><span class="v">${streak} 天</span><span class="l">连续学习（每日一练）</span></div>
    <div class="card stat"><span class="v">${stAvg}%</span><span class="l">自测平均分</span></div>
  </div>
  <div class="grid grid-2">
    <div class="card"><h3>📈 打卡正确率趋势</h3><div id="trendChart" style="height:240px"><canvas id="cvTrend"></canvas></div></div>
    <div class="card"><h3>📊 模块使用频次</h3><div id="useChart" style="height:240px"><canvas id="cvUse"></canvas></div></div>
  </div>
  <div class="card"><h3>📋 最近打卡记录</h3>
    ${ci.length?`<div class="table-wrap"><table><thead><tr><th>日期</th><th>类型</th><th>正确率</th><th>正确/总</th></tr></thead><tbody>`+
      ci.slice(-12).reverse().map(c=>`<tr><td>${esc(c.date)}</td><td>${esc(c.type)}</td><td><span class="badge ${c.accuracy>=90?'ok':c.accuracy>=60?'warn':'err'}">${c.accuracy}%</span></td><td>${c.correct}/${c.total}</td></tr>`).join('')+
      `</tbody></table></div>`:'<div class="note">暂无打卡记录，去背诵/口语/听力模块完成一次自测即可出现。</div>'}
  </div>
  <div class="card"><h3>🎯 综合自测历史</h3>
    ${sts.length?`<div class="table-wrap"><table><thead><tr><th>日期</th><th>听</th><th>说</th><th>读</th><th>写</th><th>总分</th></tr></thead><tbody>`+
      sts.slice(-10).reverse().map(s=>`<tr><td>${esc(s.date)}</td>
        <td><span class="badge ${s.listen<60?'err':s.listen<85?'warn':'ok'}">${s.listen}%</span></td>
        <td><span class="badge ${s.speak<60?'err':s.speak<85?'warn':'ok'}">${s.speak}%</span></td>
        <td><span class="badge ${s.read<60?'err':s.read<85?'warn':'ok'}">${s.read}%</span></td>
        <td><span class="badge ${s.write<60?'err':s.write<85?'warn':'ok'}">${s.write}%</span></td>
        <td><b>${s.overall}%</b></td></tr>`).join('')+`</tbody></table></div>`
      :'<div class="note">暂无自测记录，去「综合自测」完成一次听/说/读/写四维测试即可出现。</div>'}
  </div>`;
  drawCharts();
}
function drawCharts(){
  if(!window.Chart){ $('#trendChart').insertAdjacentHTML('beforeend','<div class="muted">图表库未加载（离线），趋势数据见下方记录表。</div>'); $('#useChart').insertAdjacentHTML('beforeend','<div class="muted">图表库未加载（离线）。</div>'); return; }
  const ci=load('checkins',[]);
  const byDate={}; ci.forEach(c=>{ byDate[c.date]=c.accuracy; });
  const labels=Object.keys(byDate).sort(); const data=labels.map(d=>byDate[d]);
  new Chart($('#cvTrend'),{type:'line',data:{labels,datasets:[{label:'正确率%',data,borderColor:'#e2a252',backgroundColor:'rgba(226,162,82,.15)',fill:true,tension:.3}]},
    options:{responsive:true,maintainAspectRatio:false,scales:{y:{min:0,max:100}},plugins:{legend:{display:false}}}});
  const use=load('moduleuse',{}); const keys=Object.keys(use);
  new Chart($('#cvUse'),{type:'bar',data:{labels:keys,datasets:[{label:'使用次数',data:keys.map(k=>use[k]),backgroundColor:'#2a5298'}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}}}});
}
function saveCheckin(type, accuracy, correct, total){
  const ci=load('checkins',[]); ci.push({date:today(),type,accuracy,correct,total}); store('checkins',ci);
}

/* ============================================================
 * 全局设置 / 关于
 * ============================================================ */
function renderSettings(root){
  const s=getSettings();
  root.innerHTML=`
  <div class="section-title">全局设置</div>
  <div class="section-sub">系统级设定，首次配置后各模块自动沿用（对应提示词「全局默认约束」）。</div>
  <div class="card">
    <div class="row">
      <div><label class="fl">学习者昵称</label><input class="input" id="sName" value="${esc(s.name)}" placeholder="佳佳"></div>
      <div style="flex:0 0 160px"><label class="fl">教材基准</label><select class="select" id="sBook">
        <option>新编阿拉伯语（第一册）</option><option>Madinah Arabic Book 1</option><option>自定义</option></select></div>
    </div>
    <div class="row">
      <div style="flex:0 0 120px"><label class="fl">当前等级</label><select class="select" id="sLevel"><option>A1</option><option>A2</option></select></div>
      <div style="flex:0 0 160px"><label class="fl">目标场景</label><select class="select" id="sScene">
        <option>日常交流</option><option>考试</option><option>宗教经典阅读</option></select></div>
    </div>
    <button class="btn" style="margin-top:14px" onclick="App.saveSettings()">保存设置</button>
    <div class="note" style="margin-top:12px">全局约束：成人零基础 / 母中文 / 讲解用中文 / 阿文例句必附「阿+转写+中」三段式 / CEFR A1→A2 不跳级。</div>
  </div>`;
  $('#sBook').value=s.textbook; $('#sLevel').value=s.level; $('#sScene').value=s.scene;
}
App.saveSettings=function(){
  const s={name:$('#sName').value.trim(), textbook:$('#sBook').value, level:$('#sLevel').value, scene:$('#sScene').value};
  setSettings(s); toast('设置已保存');
};
function renderAbout(root){
  root.innerHTML=`
  <div class="section-title">关于 / 提示词总览</div>
  <div class="section-sub">本应用依据「阿拉伯语学习系统 · 完整细分提示词清单」构建，将 8 大模块、30+ 提示词固化为可交互功能。</div>
  <div class="card">
    <h3>系统架构（模块一览）</h3>
    <table><thead><tr><th>模块</th><th>对应提示词</th><th>本应用实现</th></tr></thead><tbody>
      <tr><td>七·字母/键盘</td><td>7.1–7.3</td><td>28字母表·键盘映射·认读/听写/辨形测验</td></tr>
      <tr><td>一·考点库</td><td>1.1–1.3</td><td>提取录入·自动打标·检索去重·标记已学</td></tr>
      <tr><td>二·复习计划</td><td>2.1–2.3</td><td>个性化计划·艾宾浩斯每日复习·动态调整</td></tr>
      <tr><td>三·思维导图</td><td>3.1–3.3</td><td>主题导图·章节图谱·A1→A2 语法全景</td></tr>
      <tr><td>四·背诵打卡</td><td>4.1–4.3</td><td>7±2 记忆块·自测核验·遗忘预警</td></tr>
      <tr><td>五·口语练习</td><td>5.1–5.3</td><td>发音拆解·情景对话·即兴评分</td></tr>
      <tr><td>六·听力训练</td><td>6.1–6.3</td><td>分级材料·精听听写·泛听排期</td></tr>
      <tr><td>课文阅读</td><td>扩展</td><td>80 篇课文：听力材料 + 全文翻译 + 配套习题（答案解析）</td></tr>
      <tr><td>教材书目</td><td>《新编阿拉伯语》1–6 + 教师用书</td><td>国少华 主编，系统罗列全部书目，作为词库/句库基准</td></tr>
      <tr><td>单词学习</td><td>一册 12 情景词库</td><td>筛选/检索/朗读/掌握标记/抽测</td></tr>
      <tr><td>句子学习</td><td>一册 12 情景句库</td><td>三段式例句/句型标签/跟读/掌握</td></tr>
      <tr><td>情景板块</td><td>12 个情景</td><td>按情景聚合单词+句子+专项测验</td></tr>
      <tr><td>每日一练</td><td>每日推送</td><td>每日 8–10 生词 + 3 句子，连续学习统计</td></tr>
      <tr><td>综合自测</td><td>听/说/读/写</td><td>四维自动打分 + 针对性优化建议</td></tr>
      <tr><td>八·子场景</td><td>5.2a–d 等</td><td>已并入口语/复习/背诵/听力模块</td></tr>
    </tbody></table>
  </div>
  <div class="card">
    <h3>使用说明</h3>
    <ul style="margin-left:18px;line-height:1.9">
      <li>纯前端单页，无需安装、无需联网（Mermaid/图表离线自动降级）。</li>
      <li>所有学习数据存于本机浏览器 localStorage，<b>换设备/清缓存会丢失</b>，重要进度请自行记录。</li>
      <li>阿拉伯文朗读依赖浏览器语音合成（Chrome/Edge 体验最佳），首次点击 🔊 触发。</li>
      <li>原始提示词清单见项目文件 <code>阿拉伯语学习系统_提示词清单.md</code>，本应用即其"可执行版"。</li>
    </ul>
    <button class="btn ghost" onclick="App.exportData()">导出我的学习数据(JSON)</button>
  </div>`;
}
App.exportData=function(){
  const data={settings:load('settings',{}),points:load('points',[]),recite:load('recite',[]),checkins:load('checkins',[]),
    moduleuse:load('moduleuse',{}),learned_words:load('learned_words',[]),learned_sentences:load('learned_sentences',[]),
    daily_sets:load('daily_sets',[]),selftests:load('selftests',[])};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='arabic-data.json'; a.click();
  toast('已导出');
};
App.resetAll=function(){
  if(!confirm('确定清空全部本地学习数据？此操作不可恢复。')) return;
  ['settings','points','recite','checkins','moduleuse','learned_words','learned_sentences','daily_sets','selftests'].forEach(k=>localStorage.removeItem(NS+k));
  setSettings({textbook:'新编阿拉伯语（第一册）',level:'A1',scene:'日常交流',name:''});
  toast('已重置'); showView('dashboard');
};

/* ============================================================
 * 新模块存储辅助
 * ============================================================ */
function getLearnedWords(){ return new Set(load('learned_words', [])); }
function getLearnedSentences(){ return new Set(load('learned_sentences', [])); }
function addLearnedWord(id){ const s=getLearnedWords(); s.add(id); store('learned_words', [...s]); }
function addLearnedSentence(id){ const s=getLearnedSentences(); s.add(id); store('learned_sentences', [...s]); }
function getDailySets(){ return load('daily_sets', []); }
function getSelfTests(){ return load('selftests', []); }
function sceneOf(key){ return SCENES.find(s=>s.key===key)||{name:key,ar:'',lesson:'',desc:''}; }
function wordsByScene(key){ return WORDS.filter(w=>w.scene===key); }
function sentencesByScene(key){ return SENTENCES.filter(s=>s.scene===key); }

/* ============================================================
 * 教材书目
 * ============================================================ */
function renderTextbooks(root){
  const cur=getSettings().textbook;
  root.innerHTML=`
  <div class="section-title">教材书目</div>
  <div class="section-sub">基于《新编阿拉伯语》系列（国少华 主编，共 6 册精读 + 教师用书）系统罗列全部学习书目，作为本系统词库/句库/情景板块的内容基准（以第一册为核心，第一~六册为进阶）。</div>
  <div class="card">
    <h3>📚 全部书目（${TEXTBOOKS.length} 册）</h3>
    <div class="table-wrap"><table><thead><tr><th>书名</th><th>编者 / 作者</th><th>出版社</th><th>册次</th><th>课数</th><th>内容定位</th></tr></thead><tbody>
    ${TEXTBOOKS.map(t=>`<tr>
      <td><b>${esc(t.title)}</b>${cur===t.title?' <span class="badge gold">当前基准</span>':''}</td>
      <td class="muted">${esc(t.author)}</td>
      <td class="muted">${esc(t.press)}</td>
      <td><span class="badge">${esc(t.vol)}</span></td>
      <td class="muted">${t.lessons==null?'—':esc(t.lessons)}</td>
      <td class="muted">${esc(t.note)}</td></tr>`).join('')}</tbody></table></div>
    <div class="note warn">说明：编者、课数等信息依据公开资料整理，具体以实体书版权页为准；本系统为辅助学习工具，建议配合正版教材使用。</div>
  </div>
  <div class="grid grid-3">
    <div class="card stat"><span class="v">${TEXTBOOKS.filter(t=>t.vol.endsWith('/ 6')).length}</span><span class="l">精读主教材（1–6 册）</span></div>
    <div class="card stat"><span class="v">${TEXTBOOKS.length-6}</span><span class="l">配套（教师用书）</span></div>
    <div class="card stat"><span class="v">${SCENES.length}</span><span class="l">情景板块（按册分组）</span></div>
  </div>
  <div class="card">
    <h3>📊 各册学习内容分布</h3>
    <div class="table-wrap"><table><thead><tr><th>册次</th><th>单词数</th><th>句子数</th><th>课文数</th><th>占比</th></tr></thead><tbody>
    ${[1,2,3,4,5,6].map(v=>{
      const nw=WORDS.filter(w=>(w.vol||'1')===String(v)).length;
      const ns=SENTENCES.filter(s=>(s.vol||'1')===String(v)).length;
      const na=ARTICLES.filter(a=>String(a.vol)===String(v)).length;
      const pct=Math.round(nw/WORDS.length*100);
      return `<tr><td><b>第 ${v} 册</b></td><td>${nw}</td><td>${ns}</td><td>${na}</td>
        <td><div style="background:linear-gradient(90deg,var(--gold) ${pct}%,var(--border) ${pct}%);height:10px;border-radius:5px;min-width:120px"></div><span class="muted">${pct}%</span></td></tr>`;
    }).join('')}
    </tbody></table></div>
    <div class="note">册次权重：词汇已向第五、六册倾斜（新增词根族词库以第 5、6 册为主），同时保持第一~四册的基础覆盖。</div>
  </div>`;
}

/* ============================================================
 * 单词学习
 * ============================================================ */
function wordCardHTML(w, learned){
  const mas = learned.has(w.id);
  return `<div class="wcard ${mas?'mastered':''}" onclick="App.showWord('${w.id}')">
    <div class="w-ar">${esc(w.ar)} ${speakBtn(w.ar)}</div>
    <div class="w-tr">${esc(w.tr)}</div>
    <div class="w-zh">${esc(w.zh)}</div>
    <div class="w-foot"><span class="badge">${esc(w.pos)}</span>${w.vol?'<span class="badge gold">第'+esc(w.vol)+'册</span>':''}${mas?'<span class="badge ok">已掌握</span>':'<span class="badge">'+esc(w.lvl)+'</span>'}</div>
  </div>`;
}
function renderWords(root){
  const learned=getLearnedWords();
  root.innerHTML=`
  <div class="section-title">单词学习</div>
  <div class="section-sub">基于《新编阿拉伯语》第一~六册 ${SCENES.length} 个情景板块整理的核心词库（含教材册次标注），覆盖 ${WORDS.length} 词。支持按情景 / 等级筛选、检索、朗读与「掌握」标记（掌握后纳入每日一练与进度统计）。</div>
  <div class="card">
    <div class="row">
      <div><label class="fl">情景板块</label><select class="select" id="wScene" onchange="App.refreshWords()">
        <option value="">全部分情景</option>${SCENES.map(s=>`<option value="${s.key}">${esc(s.name)}</option>`).join('')}</select></div>
      <div style="flex:0 0 120px"><label class="fl">等级</label><select class="select" id="wLvl" onchange="App.refreshWords()">
        <option value="">全部</option><option>A1</option><option>A2</option><option>B1</option></select></div>
      <div><label class="fl">检索</label><input class="input" id="wSearch" placeholder="阿文 / 转写 / 中文" oninput="App.refreshWords()"></div>
    </div>
    <div class="fl-between" style="margin-top:12px">
      <span class="muted" id="wCount"></span>
      <div>
        <button class="btn ghost sm" onclick="App.wordQuiz()">🎴 抽测模式</button>
        <button class="btn ghost sm" onclick="App.markAllSceneWords()">标记当前筛选全部已学</button>
      </div>
    </div>
    <div class="wgrid" id="wGrid" style="margin-top:12px"></div>
  </div>`;
  App.refreshWords();
}
App.refreshWords=function(){
  const sc=$('#wScene').value, lv=$('#wLvl').value, kw=$('#wSearch').value.trim().toLowerCase();
  let arr=WORDS.slice();
  if(sc) arr=arr.filter(w=>w.scene===sc);
  if(lv) arr=arr.filter(w=>w.lvl===lv);
  if(kw) arr=arr.filter(w=>(w.ar+w.tr+w.zh).toLowerCase().includes(kw));
  const learned=getLearnedWords();
  $('#wCount').textContent=`共 ${arr.length} 词 · 已掌握 ${arr.filter(w=>learned.has(w.id)).length} 词`;
  $('#wGrid').innerHTML=arr.length?arr.map(w=>wordCardHTML(w,learned)).join(''):'<div class="muted">无匹配单词。</div>';
};
App.showWord=function(id){
  const w=WORDS.find(x=>x.id===id); if(!w) return;
  const related=SENTENCES.filter(s=>s.ar.includes(w.ar)).slice(0,4);
  const learned=getLearnedWords(); const mas=learned.has(id);
  openModal(`<h3 style="font-family:var(--font-ar);direction:rtl;font-size:30px">${esc(w.ar)} ${speakBtn(w.ar)}</h3>
    <table><tr><th>项目</th><th>内容</th></tr>
    <tr><td>转写</td><td>${esc(w.tr)}</td></tr>
    <tr><td>中文</td><td>${esc(w.zh)}</td></tr>
    <tr><td>词性</td><td><span class="badge">${esc(w.pos)}</span></td></tr>
    <tr><td>等级</td><td>${esc(w.lvl)}</td></tr>
    <tr><td>教材来源</td><td>${w.vol?('第 '+esc(w.vol)+' 册'):'第一册'}</td></tr>
    <tr><td>所属情景</td><td>${esc(sceneOf(w.scene).name)}（${esc(sceneOf(w.scene).lesson)}）</td></tr></table>
    ${w.ex&&w.ex.length?`<div class="note"><b>📎 词族例句：</b><br>${w.ex.map(e=>`<div class="ar-inline" style="display:block;font-size:17px">${esc(e[0])} ${speakBtn(e[0])}</div><span class="muted">${esc(e[1])}</span><br>`).join('')}</div>`:''}
    ${related.length?`<div class="note"><b>相关例句：</b><br>${related.map(s=>`<div class="ar-inline" style="display:block;font-size:17px">${esc(s.ar)} ${speakBtn(s.ar)}</div><span class="muted">${esc(s.tr)} · ${esc(s.zh)}</span><br>`).join('')}</div>`:'<div class="note">暂无关联例句。</div>'}
    <div class="fl-between" style="margin-top:14px">
      <button class="btn" onclick="App.speak('${w.ar}')">🔊 朗读</button>
      ${mas?'<button class="btn ghost" onclick="App.unmarkWord(\''+id+'\')">取消掌握</button>':'<button class="btn blue" onclick="App.markWord(\''+id+'\')">标记已掌握</button>'}
      <button class="btn ghost" onclick="App.closeModal()">关闭</button>
    </div>`);
};
App.markWord=function(id){ addLearnedWord(id); toast('已标记掌握'); App.closeModal(); App.refreshWords(); };
App.unmarkWord=function(id){ const s=getLearnedWords(); s.delete(id); store('learned_words',[...s]); toast('已取消'); App.closeModal(); App.refreshWords(); };
App.markAllSceneWords=function(){
  const sc=$('#wScene').value, lv=$('#wLvl').value, kw=$('#wSearch').value.trim().toLowerCase();
  let arr=WORDS.slice();
  if(sc) arr=arr.filter(w=>w.scene===sc);
  if(lv) arr=arr.filter(w=>w.lvl===lv);
  if(kw) arr=arr.filter(w=>(w.ar+w.tr+w.zh).toLowerCase().includes(kw));
  const s=getLearnedWords(); arr.forEach(w=>s.add(w.id)); store('learned_words',[...s]);
  toast(`已标记 ${arr.length} 词为掌握`); App.refreshWords();
};
App.wordQuiz=function(){
  const unlearned=WORDS.filter(w=>!getLearnedWords().has(w.id));
  const pool=shuffle(unlearned.length?unlearned:WORDS).slice(0, Math.min(10, (unlearned.length||WORDS.length)));
  openModal('<h3>🎴 单词抽测（看阿文 → 选中文）</h3><div id="wqBox"></div>');
  let i=0, c=0, wrong=[];
  function step(){
    if(i>=pool.length){ const pct=Math.round(c/pool.length*100);
      $('#wqBox').innerHTML=`<div class="card" style="background:#fafbff"><h3>抽测结果</h3><div class="stat"><span class="v">${pct}%</span><span class="l">正确率（${c}/${pool.length}）</span></div>
        ${wrong.length?`<p class="muted" style="margin-top:8px">需复习：${wrong.map(esc).join('、')}</p>`:'<p class="muted" style="margin-top:8px">全部正确，继续保持！</p>'}
        <button class="btn" style="margin-top:10px" onclick="App.wordQuiz()">再来一组</button></div>`;
      saveCheckin('单词', pct, c, pool.length); return; }
    const w=pool[i];
    const opts=shuffle([w.zh, ...shuffle(WORDS.filter(x=>x.id!==w.id)).slice(0,3).map(x=>x.zh)]);
    $('#wqBox').innerHTML=`<div class="note">第 ${i+1}/${pool.length} 题</div>
      <div class="ar-inline" style="font-size:34px">${esc(w.ar)} ${speakBtn(w.ar)}</div>
      <div class="grid grid-2" id="wqOpt" style="margin-top:12px"></div>`;
    const o=$('#wqOpt');
    opts.forEach(op=>{ const b=document.createElement('button'); b.className='btn ghost'; b.textContent=op;
      b.onclick=()=>{ const ok=op===w.zh; if(ok)c++; else wrong.push(w.ar+'('+w.zh+')');
        o.querySelectorAll('button').forEach(x=>{x.disabled=true; if(x.textContent===w.zh)x.classList.add('blue');});
        const nx=document.createElement('button'); nx.className='btn'; nx.style.marginTop='10px'; nx.textContent='下一题 →';
        nx.onclick=()=>{i++;step();}; o.parentElement.appendChild(nx); };
      o.appendChild(b); });
  }
  step();
};

/* ============================================================
 * 句子学习
 * ============================================================ */
function sentenceRowHTML(s, learned){
  const mas=learned.has(s.id);
  return `<div class="scard ${mas?'mastered':''}">
    <div class="s-ar">${esc(s.ar)} ${speakBtn(s.ar)}</div>
    <div class="s-tr">${esc(s.tr)}</div>
    <div class="s-zh">${esc(s.zh)}</div>
    ${s.ctx?`<div class="s-ctx">📌 ${esc(s.ctx)}</div>`:''}
    <div class="s-foot"><span class="badge teal">${esc(s.tag)}</span><span class="badge">${esc(s.lvl)}</span>${s.vol?'<span class="badge gold">第'+esc(s.vol)+'册</span>':''}
      ${mas?'<span class="badge ok">已掌握</span>':'<button class="btn sm ghost" onclick="App.markSentence(\''+s.id+'\')">标记掌握</button>'}</div>
  </div>`;
}
function renderSentences(root){
  const learned=getLearnedSentences();
  root.innerHTML=`
  <div class="section-title">句子学习</div>
  <div class="section-sub">按情景板块整理的核心句式（共 ${SENTENCES.length} 句），每句附「阿 + 转写 + 中」标准三段式与句型标签。可朗读、跟读、标记掌握，并一键加入每日一练。</div>
  <div class="card">
    <div class="row">
      <div><label class="fl">情景板块</label><select class="select" id="sScene" onchange="App.refreshSentences()">
        <option value="">全部分情景</option>${SCENES.map(s=>`<option value="${s.key}">${esc(s.name)}</option>`).join('')}</select></div>
      <div style="flex:0 0 120px"><label class="fl">等级</label><select class="select" id="sLvl" onchange="App.refreshSentences()">
        <option value="">全部</option><option>A1</option><option>A2</option><option>B1</option></select></div>
    </div>
    <div class="fl-between" style="margin-top:12px"><span class="muted" id="sCount"></span>
      <button class="btn ghost sm" onclick="App.markAllSceneSentences()">标记当前筛选全部已学</button></div>
    <div id="sList" style="margin-top:12px"></div>
  </div>`;
  App.refreshSentences();
}
App.refreshSentences=function(){
  const sc=$('#sScene').value, lv=$('#sLvl').value;
  let arr=SENTENCES.slice();
  if(sc) arr=arr.filter(s=>s.scene===sc);
  if(lv) arr=arr.filter(s=>s.lvl===lv);
  const learned=getLearnedSentences();
  $('#sCount').textContent=`共 ${arr.length} 句 · 已掌握 ${arr.filter(s=>learned.has(s.id)).length} 句`;
  $('#sList').innerHTML=arr.length?arr.map(s=>sentenceRowHTML(s,learned)).join(''):'<div class="muted">无匹配句子。</div>';
};
App.markSentence=function(id){ addLearnedSentence(id); toast('已标记掌握'); App.refreshSentences(); };
App.markAllSceneSentences=function(){
  const sc=$('#sScene').value, lv=$('#sLvl').value;
  let arr=SENTENCES.slice();
  if(sc) arr=arr.filter(s=>s.scene===sc);
  if(lv) arr=arr.filter(s=>s.lvl===lv);
  const s=getLearnedSentences(); arr.forEach(x=>s.add(x.id)); store('learned_sentences',[...s]);
  toast(`已标记 ${arr.length} 句为掌握`); App.refreshSentences();
};

/* ============================================================
 * 情景板块（12 个）
 * ============================================================ */
function renderScenes(root){
  root.innerHTML=`
  <div class="section-title">情景板块</div>
  <div class="section-sub">将《新编阿拉伯语》第一~六册主要内容划分为 ${SCENES.length} 个情景板块，并<b>按教材册次分组</b>（第一册 → 第六册）展示，便于按册浏览每册对应的情景与场景练习。</div>
  <div id="sceneGroups"></div>
  <div id="sceneDetail"></div>`;
  const vols=[1,2,3,4,5,6];
  const groups=vols.map(v=>({v, items:SCENES.filter(s=>s.vol===String(v))})).filter(g=>g.items.length);
  $('#sceneGroups').innerHTML=groups.map(g=>`
    <div class="card" style="margin-bottom:14px">
      <h3>📕 第 ${g.v} 册 <span class="badge gold">${g.items.length} 情景</span></h3>
      <div class="scenes-grid">${g.items.map(s=>{
        const nw=wordsByScene(s.key).length, ns=sentencesByScene(s.key).length;
        return `<div class="scene-card" onclick="App.openScene('${s.key}')">
          <div class="scene-ar">${esc(s.ar)}</div>
          <div class="scene-name">${esc(s.name)}</div>
          <div class="scene-lesson">${esc(s.lesson)}</div>
          <div class="scene-desc">${esc(s.desc)}</div>
          <div class="scene-meta"><span class="badge">${nw} 词</span><span class="badge teal">${ns} 句</span></div>
        </div>`;
      }).join('')}</div>
    </div>`).join('');
}
App.openScene=function(key){
  const sc=sceneOf(key); const learnedW=getLearnedWords(), learnedS=getLearnedSentences();
  const ws=wordsByScene(key), ss=sentencesByScene(key);
  const box=$('#sceneDetail');
  box.innerHTML=`<div class="card" style="margin-top:16px">
    <h3>🗂️ ${esc(sc.name)} <span class="badge gold">${esc(sc.ar)}</span> <span class="muted">${esc(sc.lesson)}</span></h3>
    <div class="note">${esc(sc.desc)}</div>
    <div class="fl-between" style="margin:12px 0">
      <div>
        <button class="btn sm" onclick="App.sceneTest('${key}')">🎯 本情景听读测验</button>
        <button class="btn sm ghost" onclick="App.markSceneAll('${key}')">标记本情景全部已学</button>
      </div>
      <span class="muted">单词 ${ws.length} · 句子 ${ss.length}</span>
    </div>
    <h3 style="margin-top:6px">🔠 单词</h3>
    <div class="wgrid">${ws.map(w=>wordCardHTML(w,learnedW)).join('')}</div>
    <h3 style="margin-top:14px">💬 句子</h3>
    <div class="slist">${ss.map(s=>sentenceRowHTML(s,learnedS)).join('')}</div>
  </div>`;
  box.scrollIntoView({behavior:'smooth',block:'start'});
};
App.markSceneAll=function(key){
  const s=getLearnedWords(); wordsByScene(key).forEach(w=>s.add(w.id)); store('learned_words',[...s]);
  const ss=getLearnedSentences(); sentencesByScene(key).forEach(x=>ss.add(x.id)); store('learned_sentences',[...ss]);
  toast('已标记本情景全部已学'); App.openScene(key);
};
App.sceneTest=function(key){
  const ws=wordsByScene(key), ss=sentencesByScene(key);
  if(!ws.length){ toast('该情景暂无题目'); return; }
  const listen=shuffle(ws).slice(0,Math.min(5,ws.length)).map(w=>{
    const opts=shuffle([w.zh,...shuffle(ws.filter(x=>x.id!==w.id)).slice(0,3).map(x=>x.zh)]);
    return {ar:w.ar, zh:w.zh, opts, ans:opts.indexOf(w.zh)};
  });
  const read=shuffle(ss.concat(ws.map(w=>({ar:w.ar,zh:w.zh,tag:w.pos})))).slice(0,Math.min(5,ss.length+ws.length)).map(it=>{
    const pool=(ss.concat(ws)).map(x=>x.zh);
    const opts=shuffle([it.zh,...shuffle(pool.filter(z=>z!==it.zh)).slice(0,3)]);
    return {ar:it.ar, zh:it.zh, opts, ans:opts.indexOf(it.zh)};
  });
  openModal(`<h3>🎯 情景测验 · ${esc(sceneOf(key).name)}</h3>
    <div id="stBox"></div>
    <button class="btn ghost" onclick="App.closeModal()">关闭</button>`);
  let i=0, c=0; const all=listen.concat(read);
  function step(){
    if(i>=all.length){ const pct=Math.round(c/all.length*100);
      $('#stBox').innerHTML=`<div class="card" style="background:#fafbff"><h3>测验结果</h3>
        <div class="stat"><span class="v">${pct}%</span><span class="l">正确率（${c}/${all.length}）</span></div>
        <button class="btn" style="margin-top:10px" onclick="App.sceneTest('${key}')">重测</button></div>`;
      saveCheckin('情景', pct, c, all.length); return; }
    const q=all[i]; const isListen=i<listen.length;
    $('#stBox').innerHTML=`<div class="note">${isListen?'🎧 听音选义':'📖 看文选义'}　第 ${i+1}/${all.length} 题</div>
      <div class="ar-inline" style="font-size:30px">${esc(q.ar)} ${isListen?`<button class="speak" onclick="App.speak(${JSON.stringify(q.ar).replace(/"/g,'&quot;')})">🔊</button>`:speakBtn(q.ar)}</div>
      <div class="grid grid-2" id="stOpt" style="margin-top:10px"></div>`;
    const o=$('#stOpt');
    q.opts.forEach(op=>{ const b=document.createElement('button'); b.className='btn ghost'; b.textContent=op;
      b.onclick=()=>{ const ok=op===q.zh; if(ok)c++;
        o.querySelectorAll('button').forEach(x=>{x.disabled=true; if(x.textContent===q.zh)x.classList.add('blue');});
        const nx=document.createElement('button'); nx.className='btn'; nx.style.marginTop='10px'; nx.textContent='下一题 →';
        nx.onclick=()=>{i++;step();}; o.parentElement.appendChild(nx); };
      o.appendChild(b); });
  }
  step();
};

/* ============================================================
 * 每日一练（8–10 生词 + 3 句子）
 * ============================================================ */
function computeStreak(){
  const dates=getDailySets().map(d=>d.date).sort();
  if(!dates.length) return 0;
  const set=new Set(dates); let streak=0; let d=new Date();
  // 若今天还没打卡，从昨天起算连续
  let cursor=today();
  if(!set.has(cursor)){ const y=new Date(); y.setDate(y.getDate()-1); cursor=y.toISOString().slice(0,10); }
  while(set.has(cursor)){ streak++; const x=new Date(cursor); x.setDate(x.getDate()-1); cursor=x.toISOString().slice(0,10); }
  return streak;
}
/* 教材册次辅助：未标注的按第一册计；每日一练按日序号在 1–6 册间轮转 */
function volOf(o){ return o.vol||'1'; }
function dayIndex(){ return Math.floor(Date.now()/86400000); }
function pickDaily(){
  const lw=getLearnedWords(), ls=getLearnedSentences();
  const wVols=[...new Set(WORDS.map(volOf))].sort((a,b)=>+a-+b);
  const sVols=[...new Set(SENTENCES.map(volOf))].sort((a,b)=>+a-+b);
  const wFocus=wVols[dayIndex()%wVols.length];
  const sFocus=sVols[dayIndex()%sVols.length];
  let wp=WORDS.filter(w=>!lw.has(w.id) && volOf(w)===wFocus);
  if(wp.length<8) wp=WORDS.filter(w=>!lw.has(w.id));
  if(wp.length<8) wp=WORDS.slice();
  const words=shuffle(wp).slice(0, Math.min(10, wp.length));
  let sp=SENTENCES.filter(s=>!ls.has(s.id) && volOf(s)===sFocus);
  if(sp.length<3) sp=SENTENCES.filter(s=>!ls.has(s.id));
  if(sp.length<3) sp=SENTENCES.slice();
  const sentences=shuffle(sp).slice(0,3);
  return {words, sentences, wFocus, sFocus};
}
function renderDaily(root){
  let sets=getDailySets();
  let todaySet=sets.find(s=>s.date===today());
  if(!todaySet){ // 生成今日（按教材册次轮转）
    const p=pickDaily();
    todaySet={date:today(), words:p.words.map(w=>w.id), sentences:p.sentences.map(s=>s.id), focusVol:p.wFocus, done:false};
    sets.push(todaySet); store('daily_sets', sets);
  }
  const learnedW=getLearnedWords(), learnedS=getLearnedSentences();
  const wList=todaySet.words.map(id=>WORDS.find(w=>w.id===id)).filter(Boolean);
  const sList=todaySet.sentences.map(id=>SENTENCES.find(s=>s.id===id)).filter(Boolean);
  const streak=computeStreak();
  root.innerHTML=`
  <div class="section-title">每日一练</div>
  <div class="section-sub">每天系统自动推送 8–10 个生词与 3 个句子，并按教材册次轮转（今日聚焦第 ${todaySet.focusVol||'1'} 册）。完成后标记掌握并计入连续学习天数。</div>
  <div class="grid grid-4">
    <div class="card stat"><span class="v">${todaySet.date}</span><span class="l">今日日期</span></div>
    <div class="card stat"><span class="v">第 ${todaySet.focusVol||'1'} 册</span><span class="l">今日焦点册</span></div>
    <div class="card stat"><span class="v">${streak} 天</span><span class="l">连续学习</span></div>
    <div class="card stat"><span class="v">${todaySet.done?'✓':'·'}</span><span class="l">${todaySet.done?'今日已完成':'待完成'}</span></div>
  </div>
  <div class="card">
    <h3>🔠 今日生词（${wList.length}）</h3>
    <div class="wgrid">${wList.map(w=>wordCardHTML(w,learnedW)).join('')}</div>
  </div>
  <div class="card">
    <h3>💬 今日句子（${sList.length}）</h3>
    <div class="slist">${sList.map(s=>sentenceRowHTML(s,learnedS)).join('')}</div>
  </div>
  <div class="card">
    ${todaySet.done
      ? `<div class="note ok">🎉 今日一练已完成！明天将自动推送新的生词与句子。</div>
         <button class="btn ghost" onclick="App.regenerateDaily()">重新生成今日内容</button>`
      : `<div class="note">建议先朗读、记忆，再点「完成今日学习」。</div>
         <button class="btn" onclick="App.completeDaily()">✅ 完成今日学习（标记掌握并计入连续天数）</button>`}
  </div>`;
}
App.completeDaily=function(){
  const sets=getDailySets(); const ts=sets.find(s=>s.date===today()); if(!ts) return;
  const lw=getLearnedWords(); ts.words.forEach(id=>lw.add(id)); store('learned_words',[...lw]);
  const ls=getLearnedSentences(); ts.sentences.forEach(id=>ls.add(id)); store('learned_sentences',[...ls]);
  ts.done=true; store('daily_sets',sets);
  toast('今日一练完成，已计入连续学习'); renderDaily($('#content'));
};
App.regenerateDaily=function(){
  let sets=getDailySets().filter(s=>s.date!==today());
  const p=pickDaily();
  sets.push({date:today(), words:p.words.map(w=>w.id), sentences:p.sentences.map(s=>s.id), focusVol:p.wFocus, done:false});
  store('daily_sets',sets); toast('已重新生成今日内容'); renderDaily($('#content'));
};

/* ============================================================
 * 课文阅读（80 篇：听力材料 + 全文翻译 + 配套习题）
 * ============================================================ */
function renderArticles(root){
  const vols=[1,2,3,4,5,6];
  const groups=vols.map(v=>({v, items:ARTICLES.filter(a=>+a.vol===v)})).filter(g=>g.items.length);
  root.innerHTML=`
  <div class="section-title">课文阅读</div>
  <div class="section-sub">内置 ${ARTICLES.length} 篇课文（覆盖第一~六册），每篇含「听力材料 / 全文翻译 / 配套习题（附答案解析）」。先听后读，再完成练习。</div>
  ${groups.map(g=>`
    <div class="card" style="margin-bottom:14px">
      <h3>📕 第 ${g.v} 册 <span class="badge gold">${g.items.length} 篇</span></h3>
      <div class="grid grid-2">
      ${g.items.map(a=>`
        <div class="art-card" onclick="App.openArticle('${a.id}')">
          <div class="art-title">${esc(a.title)}</div>
          <div class="art-meta"><span class="badge">${esc(a.lvl)}</span><span class="badge teal">${esc(sceneOf(a.scene).name)}</span><span class="muted">第${esc(a.vol)}册</span></div>
        </div>`).join('')}
      </div>
    </div>`).join('')}`;
}
App.openArticle=function(id){
  const a=ARTICLES.find(x=>x.id===id); if(!a) return;
  openModal(`
    <h3>📖 ${esc(a.title)} <span class="badge gold">第${esc(a.vol)}册</span> <span class="badge">${esc(a.lvl)}</span></h3>
    <div class="note" style="margin-top:8px"><b>🎧 听力材料：</b>先听一遍，再对照阅读。</div>
    <div class="card" style="margin-top:8px">
      ${a.ar.map((line,i)=>`<div style="margin:6px 0"><span class="ar-inline" style="font-size:22px">${esc(line)}</span> ${speakBtn(line)}<br><span class="muted art-tr">${a.zh[i]?esc(a.zh[i]):''}</span></div>`).join('')}
    </div>
    <div class="fl-between" style="margin:10px 0">
      <span class="muted">隐藏/显示译文：</span>
      <button class="btn ghost sm" onclick="App._toggleTr()">显示 / 隐藏译文</button>
      <button class="btn ghost sm" onclick="App.speak('${esc(a.ar.join(' '))}')">🔊 整篇朗读</button>
    </div>
    <h3 style="margin-top:10px">✍️ 配套习题</h3>
    <div id="artQuiz"></div>
    <div class="fl-between" style="margin-top:12px">
      <span class="muted" id="artScore"></span>
      <button class="btn ghost" onclick="App.closeModal()">关闭</button>
    </div>`);
  // 渲染习题
  const qz=$('#artQuiz');
  let correct=0, answered=0;
  a.q.forEach((item,qi)=>{
    const box=document.createElement('div');
    box.className='card'; box.style.marginTop='8px';
    box.innerHTML=`<b>${qi+1}. ${esc(item.q)}</b><div class="grid grid-3" id="aq${qi}" style="margin-top:6px"></div><div class="muted" id="aexp${qi}" style="margin-top:6px"></div>`;
    const o=box.querySelector('#aq'+qi);
    item.opts.forEach((op,oi)=>{
      const b=document.createElement('button'); b.className='btn ghost'; b.textContent=op;
      b.onclick=()=>{
        if(b.disabled) return;
        o.querySelectorAll('button').forEach(x=>x.disabled=true);
        const right=oi===item.ans;
        if(right) correct++;
        answered++;
        b.classList.add(right?'blue':'danger');
        $('#aexp'+qi).innerHTML=`<span class="${right?'ok':'danger'}">${right?'✓ 回答正确':'✗ 正确答案：'+esc(item.opts[item.ans])}</span><br><span class="muted">解析：${esc(item.exp)}</span>`;
        $('#artScore').textContent=answered===a.q.length?`得分：${correct}/${a.q.length}`:'';
      };
      o.appendChild(b);
    });
    qz.appendChild(box);
  });
};
App._toggleTr=function(){
  const els=document.querySelectorAll('.art-tr');
  const hidden=els.length&&els[0].style.display==='none';
  els.forEach(el=>{ el.style.display = hidden ? '' : 'none'; });
};

/* ============================================================
 * 综合自测（听 / 说 / 读 / 写 四维）
 * ============================================================ */
function buildWritePad(mount, target, onResult){
  mount.innerHTML=`
    <div class="write-display" id="wd"></div>
    <div class="kbd-wrap" id="wk"></div>
    <div class="fl-between" style="margin-top:8px">
      <div>
        <button class="btn ghost sm" onclick="App._wdBack()">⌫ 删除</button>
        <button class="btn ghost sm" onclick="App._wdClear()">清空</button>
      </div>
      <button class="btn blue sm" onclick="App._wdCompare()">对比 ✓</button>
    </div>`;
  App._wdVal=''; App._wdTarget=target; App._wdCb=onResult;
  function renderKeys(){
    const wrap=$('#wk');
    function row(arr){ return `<div class="kbd-row">`+arr.map(([k,ar])=>`<div class="kbd" onclick="App._wdType('${ar}')"><span class="ar">${ar}</span><span class="pk">${esc(k)}</span></div>`).join('')+'</div>'; }
    wrap.innerHTML=row(KEYBOARD.top)+row(KEYBOARD.main)+row(KEYBOARD.bottom);
  }
  renderKeys();
  App._wdType=function(ch){ App._wdVal+=ch; $('#wd').textContent=App._wdVal; };
  App._wdBack=function(){ App._wdVal=App._wdVal.slice(0,-1); $('#wd').textContent=App._wdVal; };
  App._wdClear=function(){ App._wdVal=''; $('#wd').textContent=''; };
  App._wdCompare=function(){
    const diff=levenshtein(App._wdVal, App._wdTarget);
    const score=diff===0?1:(diff<=2?0.5:0);
    const fb=document.createElement('div');
    fb.className='note '+(score===1?'ok':score===0.5?'warn':'err');
    fb.innerHTML=`你的输入：<span class="ar-inline">${esc(App._wdVal||'（空）')}</span><br>正确：<span class="ar-inline">${esc(App._wdTarget)}</span><br>编辑距离 ${diff} → ${score===1?'✅ 完全正确':score===0.5?'⚠️ 接近（少量偏差）':'❌ 有偏差，请对照复习'}。`;
    mount.appendChild(fb);
    App._wdCb(score, diff);
    // 锁定键盘
    $('#wk').querySelectorAll('.kbd').forEach(k=>k.style.pointerEvents='none');
    $('#wk').style.opacity=.5;
  };
}
function renderSelftest(root){
  root.innerHTML=`
  <div class="section-title">综合自测</div>
  <div class="section-sub">从「听、说、读、写」四个维度进行综合测试，完成后自动打分并给出针对性学习优化建议。每维度默认 5 题。</div>
  <div class="card">
    <h3>⚙️ 测试配置</h3>
    <div class="row">
      <div><label class="fl">测试范围</label><select class="select" id="tScope">
        <option value="all">全部内容</option>
        <option value="scene">按情景板块</option>
        <option value="level">按等级</option></select></div>
      <div id="tScopeSub" style="flex:0 0 200px"><label class="fl">（选择范围后生效）</label><select class="select" id="tScopeVal" disabled><option>—</option></select></div>
      <div style="flex:0 0 120px"><label class="fl">每维度题数</label><input class="input" id="tN" type="number" value="5" min="3" max="12"></div>
    </div>
    <button class="btn" style="margin-top:14px" onclick="App.startSelftest()">▶ 开始综合自测</button>
    <div id="tBox" style="margin-top:14px"></div>
  </div>`;
  $('#tScope').onchange=()=>{
    const v=$('#tScope').value, sub=$('#tScopeVal');
    if(v==='scene'){ sub.disabled=false; sub.innerHTML=SCENES.map(s=>`<option value="${s.key}">${esc(s.name)}</option>`).join(''); }
    else if(v==='level'){ sub.disabled=false; sub.innerHTML='<option value="A1">A1</option><option value="A2">A2</option>'; }
    else { sub.disabled=true; sub.innerHTML='<option>—</option>'; }
  };
}
App.startSelftest=function(){
  const scopeType=$('#tScope').value; const n=Math.max(3,Math.min(12,parseInt($('#tN').value)||5));
  let scope={type:'all'};
  if(scopeType==='scene') scope={type:'scene', key:$('#tScopeVal').value};
  if(scopeType==='level') scope={type:'level', lvl:$('#tScopeVal').value};
  function pw(){ let w=WORDS.slice(); if(scope.type==='scene')w=w.filter(x=>x.scene===scope.key); if(scope.type==='level')w=w.filter(x=>x.lvl===scope.lvl); return w; }
  function ps(){ let s=SENTENCES.slice(); if(scope.type==='scene')s=s.filter(x=>x.scene===scope.key); if(scope.type==='level')s=s.filter(x=>x.lvl===scope.lvl); return s; }
  const words=pw(), sentences=ps();
  if(!words.length && !sentences.length){ toast('该范围暂无内容'); return; }
  const order=['listen','read','speak','write'];
  const q={
    listen: shuffle(words).slice(0,Math.min(n,words.length)).map(w=>{
      const opts=shuffle([w.zh,...shuffle(words.filter(x=>x.id!==w.id)).slice(0,3).map(x=>x.zh)]);
      return {ar:w.ar, zh:w.zh, opts, ans:opts.indexOf(w.zh)}; }),
    read: shuffle(sentences.concat(words)).slice(0,Math.min(n,sentences.length+words.length)).map(it=>{
      const pool=(sentences.concat(words)).map(x=>x.zh);
      const opts=shuffle([it.zh,...shuffle(pool.filter(z=>z!==it.zh)).slice(0,3)]);
      return {ar:it.ar, zh:it.zh, opts, ans:opts.indexOf(it.zh)}; }),
    speak: shuffle(sentences.length?sentences:words).slice(0,Math.min(n,sentences.length||words.length)).map(s=>({ar:s.ar, tr:s.tr, zh:s.zh})),
    write: shuffle(words).slice(0,Math.min(n,words.length)).map(w=>({ar:w.ar, zh:w.zh}))
  };
  App._test={q, order, idx:0, res:{listen:{},read:{},speak:{},write:{}}, counts:{listen:q.listen.length,read:q.read.length,speak:q.speak.length,write:q.write.length}};
  runDim('listen');
};
function runDim(dim){
  const t=App._test; const list=t.q[dim]; const box=$('#tBox');
  const meta=TEST_DIMS.find(d=>d.key===dim);
  if(!list.length){ // 跳过空维度
    t.idx++; if(t.idx<t.order.length) return runDim(t.order[t.idx]); return finishTest();
  }
  box.innerHTML=`<div class="note"><b>${meta.icon} 维度 ${t.idx+1}/4：${meta.name}</b> — ${esc(meta.desc)}（${list.length} 题）</div>
    <div id="dimList"></div>
    <div class="fl-between" style="margin-top:12px">
      <span class="muted" id="dimProg"></span>
      <button class="btn" id="dimSubmit" onclick="App._submitDim('${dim}')">提交本维度 →</button>
    </div>`;
  const dl=$('#dimList');
  list.forEach((item,qi)=>{
    const card=document.createElement('div'); card.className='qcard';
    if(dim==='listen'||dim==='read'){
      card.innerHTML=`<div class="qhead">Q${qi+1} ${dim==='listen'?'🎧 听音选义':'📖 看文选义'} ${dim==='listen'?`<button class="speak" onclick="App.speak(${JSON.stringify(item.ar).replace(/"/g,'&quot;')})">🔊 播放</button>`:`<span class="ar-inline" style="font-size:20px">${esc(item.ar)}</span> ${speakBtn(item.ar)}`}</div>
        <div class="qopts" id="o_${dim}_${qi}"></div>`;
      const o=card.querySelector('.qopts');
      item.opts.forEach(op=>{ const b=document.createElement('button'); b.className='btn ghost'; b.textContent=op;
        b.onclick=()=>{ o.querySelectorAll('button').forEach(x=>x.disabled=true);
          if(op===item.zh){ b.classList.add('blue'); t.res[dim][qi]=1; } else { b.classList.add('danger');
            o.querySelectorAll('button').forEach(x=>{ if(x.textContent===item.zh)x.classList.add('blue'); }); }
          updateDimProg(dim); };
        o.appendChild(b); });
    } else if(dim==='speak'){
      card.innerHTML=`<div class="qhead">Q${qi+1} 🗣️ 跟读自评</div>
        <div class="ar-inline" style="font-size:20px">${esc(item.ar)} ${speakBtn(item.ar)}</div>
        <div class="muted">${esc(item.tr)} · ${esc(item.zh)}</div>
        <div style="margin-top:8px"><button class="btn ghost sm" onclick="App._pronHint(${JSON.stringify(item.ar).replace(/"/g,'&quot;')})">发音提示</button></div>
        <div class="qopts" style="margin-top:8px">
          <button class="btn ghost" data-v="0" onclick="App._rateSpeak(${qi},0)">不会 / 卡顿</button>
          <button class="btn ghost" data-v="1" onclick="App._rateSpeak(${qi},1)">一般</button>
          <button class="btn ghost" data-v="2" onclick="App._rateSpeak(${qi},2)">流利</button>
        </div>`;
    } else if(dim==='write'){
      card.innerHTML=`<div class="qhead">Q${qi+1} ✍️ 写出阿文</div>
        <div class="muted">中文：${esc(item.zh)}</div>
        <div class="writepad" id="wp_${qi}"></div>`;
      dl.appendChild(card);
      buildWritePad(card.querySelector('#wp_'+qi), item.ar, (score)=>{ t.res.write[qi]=score; updateDimProg('write'); });
      return;
    }
    dl.appendChild(card);
  });
  updateDimProg(dim);
}
function updateDimProg(dim){
  const t=App._test; let done=0, total=t.counts[dim]||0;
  if(dim==='listen'||dim==='read'){ for(let i=0;i<total;i++) if(t.res[dim][i]!==undefined) done++; }
  else if(dim==='speak'){ for(let i=0;i<total;i++) if(t.res[dim][i]!==undefined) done++; }
  else if(dim==='write'){ for(let i=0;i<total;i++) if(t.res[dim][i]!==undefined) done++; }
  const el=$('#dimProg'); if(el) el.textContent=`已作答 ${done}/${total}`;
}
App._rateSpeak=function(qi,v){ const t=App._test; t.res.speak[qi]=v/2;
  const card=document.querySelectorAll('#dimList .qcard')[qi];
  if(card){ card.querySelectorAll('.qopts button').forEach(b=>{ b.disabled=true; if(+b.dataset.v===v) b.classList.add('blue'); }); }
  updateDimProg('speak'); };
App._pronHint=function(txt){
  const words=txt.split(/\s+/).filter(Boolean);
  const hardSet=new Set(LETTERS.filter(l=>l.hard).map(l=>l.ar));
  const hard=words.map(w=>w.split('').filter(ch=>hardSet.has(ch)));
  openModal(`<h3>🔊 发音提示</h3>
    <p class="ar-inline" style="font-size:20px">${esc(txt)} ${speakBtn(txt)}</p>
    ${hard.flat().length?`<div class="note err">⚠️ 含难音：${hard.flat().join(' ')}（ع ح خ غ ق ص ض ط ظ ذ ث ر 中文无完全对应音，需专项训练咽/喉部肌肉）</div>`:'<div class="note ok">本句无特殊难音，正常跟读即可。</div>'}
    <p class="muted">建议：先整句朗读示范，再放慢逐词模仿；难音处反复跟读。</p>
    <button class="btn ghost" onclick="App.closeModal()">关闭</button>`);
};
App._submitDim=function(dim){
  const t=App._test; t.idx++;
  if(t.idx<t.order.length){ runDim(t.order[t.idx]); }
  else finishTest();
};
function finishTest(){
  const t=App._test; const box=$('#tBox');
  const dims=['listen','read','speak','write'];
  const pct={};
  dims.forEach(d=>{ const c=t.counts[d]||0; let s=0; for(let i=0;i<c;i++) s+=(t.res[d][i]||0);
    pct[d]= c? Math.round(s/c*100):0; });
  const overall=Math.round((pct.listen+pct.read+pct.speak+pct.write)/4);
  // 最弱维度
  let weakest=dims[0]; dims.forEach(d=>{ if(pct[d]<pct[weakest]) weakest=d; });
  const advice={
    listen:['每天用「听力训练」做 5 分钟精听','先听单词再听整句，抓关键词','通勤时背景播放泛听素材磨耳朵','对照转写逐句复盘错词'],
    read:['加强「单词学习 / 句子学习」认读','注意连写四态与冠词 ال 的读法','遇到长句先拆主谓宾再读','每日一练坚持看阿文默中文'],
    speak:['用「口语练习 5.1」做发音拆解','专攻难音最小对立对（ع/غ、ص/س、ط/ت）','放慢语速，先读短句再读长句','录音回听，对比示范音纠偏'],
    write:['用「字母·键盘」模块练阿拉伯文书写','注意词尾元音与阴性词尾 ـة / 复数 ـات','先抄写再默写，逐步脱离键盘','把写错词加入背诵打卡强化']
  };
  const dimNames={listen:'听',read:'读',speak:'说',write:'写'};
  const rec=load('selftests',[]); rec.push({date:today(),listen:pct.listen,read:pct.read,speak:pct.speak,write:pct.write,overall}); store('selftests',rec);
  box.innerHTML=`<div class="note ok"><b>🎯 综合自测完成</b></div>
    <div class="grid grid-4" style="margin:12px 0">
      ${dims.map(d=>`<div class="card stat"><span class="v" style="color:${pct[d]<60?'var(--err)':pct[d]<85?'var(--gold)':'var(--ok)'}">${pct[d]}%</span><span class="l">${dimNames[d]}（${TEST_DIMS.find(x=>x.key===d).icon}）</span></div>`).join('')}
    </div>
    <div class="card" style="background:#fafbff"><h3>总分 ${overall}%</h3>
      <div class="progress" style="margin:8px 0"><span style="width:${overall}%"></span></div>
      <p>最需加强的维度：<span class="badge err">${dimNames[weakest]}（${pct[weakest]}%）</span></p>
      <h3 style="margin-top:10px">📌 针对性学习优化建议</h3>
      <table><thead><tr><th>维度</th><th>得分</th><th>优先行动</th></tr></thead><tbody>
      ${dims.map(d=>`<tr><td>${dimNames[d]}</td><td><span class="badge ${pct[d]<60?'err':pct[d]<85?'warn':'ok'}">${pct[d]}%</span></td>
        <td class="muted">${advice[d].map((a,i)=>(i===0?'<b>'+a+'</b>':a)).join('；')}</td></tr>`).join('')}</tbody></table>
      <p class="muted" style="margin-top:8px">提示：已标出最需加强的维度；建议下次优先完成该维度对应的模块训练后再测。</p>
      <button class="btn" style="margin-top:10px" onclick="App.startSelftest()">再测一次</button>
    </div>`;
  saveCheckin('自测', overall, Math.round(overall/100*(t.counts.listen+t.counts.read+t.counts.speak+t.counts.write)), (t.counts.listen+t.counts.read+t.counts.speak+t.counts.write));
}

/* ============================================================
 * 启动
 * ============================================================ */
window.App = App;
function init(){
  if(window.mermaid){ try{ window.mermaid.initialize({startOnLoad:false, theme:'base',
    themeVariables:{primaryColor:'#16213e',lineColor:'#2a5298',tertiaryColor:'#f4f6fb'}}); }catch(e){} }
  updateBadge();
  document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>showView(a.dataset.view)));
  $('#menuBtn').addEventListener('click',()=>{ $('#sidebar').classList.toggle('open'); $('#scrim').classList.toggle('show'); });
  $('#scrim').addEventListener('click',()=>{ $('#sidebar').classList.remove('open'); $('#scrim').classList.remove('show'); });
  showView('alphabet');
}
App.speak=speak; App.closeModal=closeModal; App.pickDaily=pickDaily;
document.addEventListener('DOMContentLoaded', init);
})();
