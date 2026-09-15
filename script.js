// Membership: https://ivyleague.com/sports/2017/8/13/HISTORY_0813173057.aspx
// UC campuses: https://www.universityofcalifornia.edu/about-uc/campuses-locations
const universities = [
 ['brown','Brown University','Providence, Rhode Island','brown.edu'],
 ['columbia','Columbia University','New York, New York','columbia.edu'],
 ['cornell','Cornell University','Ithaca, New York','cornell.edu'],
 ['dartmouth','Dartmouth College','Hanover, New Hampshire','dartmouth.edu'],
 ['harvard','Harvard University','Cambridge, Massachusetts','harvard.edu'],
 ['penn','University of Pennsylvania','Philadelphia, Pennsylvania','upenn.edu'],
 ['princeton','Princeton University','Princeton, New Jersey','princeton.edu'],
 ['yale','Yale University','New Haven, Connecticut','yale.edu'],
 ['berkeley','UC Berkeley','Berkeley, California','berkeley.edu'],
 ['davis','UC Davis','Davis, California','ucdavis.edu'],
 ['irvine','UC Irvine','Irvine, California','uci.edu'],
 ['ucla','UCLA','Los Angeles, California','ucla.edu'],
 ['merced','UC Merced','Merced, California','ucmerced.edu'],
 ['riverside','UC Riverside','Riverside, California','ucr.edu'],
 ['sandiego','UC San Diego','La Jolla, California','ucsd.edu'],
 ['sanfrancisco','UC San Francisco','San Francisco, California','ucsf.edu'],
 ['santabarbara','UC Santa Barbara','Santa Barbara, California','ucsb.edu'],
 ['santacruz','UC Santa Cruz','Santa Cruz, California','ucsc.edu']
].map(([id,name,location,domain],index) => ({id,name,location,url:`https://www.${domain}`,group:index < 8 ? 'Ivy League' : 'University of California',graduate:id === 'sanfrancisco'}));
const get = id => document.getElementById(id);
const campusPhotos = {
 brown: ['https://www.brown.edu/sites/default/files/styles/wide_lrg/public/2019-03/20181031_Brown4_C83T5506.jpg?h=1d4b4ebd&itok=KHXyCIlw','https://www.brown.edu/about/visit','Brown University campus'],
 columbia: ['https://www.law.columbia.edu/sites/default/files/styles/2400x1000/public/2020-01/CU-Campus_2976.jpg?h=a2921b4c&itok=HkEpp89G','https://www.law.columbia.edu/admissions/graduate-admissions/llm','Students on the steps of Low Library at Columbia University'],
 cornell: ['https://www.cornell.edu/visit/assets/images/video-poster.jpg','https://www.cornell.edu/visit/','View of Cornell’s Ithaca campus'],
 dartmouth: ['https://home.dartmouth.edu/sites/home/files/styles/max_width_720px/public/2026-09/Visit-20251023-sunshine-foliage-SS-47.jpg.webp?itok=VqSbtT6z','https://home.dartmouth.edu/visit','Dartmouth’s Baker Tower framed by autumn leaves'],
 harvard: ['https://www.harvard.edu/wp-content/uploads/2024/05/110921_features_RL_1507-scaledb.jpg?w=500&h=500&crop=1','https://www.harvard.edu/visit/','Campus view from Harvard’s visitor guide'],
 penn: ['https://www.upenn.edu/sites/default/files/styles/default/public/2020-11/27242967477_8010b0b628_k.jpg?itok=fb7sIRoW','https://www.upenn.edu/visitors','Commencement procession through Penn’s tree-lined campus'],
 princeton: ['https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2023/09/20230815_Visitor-Center_AD_013_crp2.jpg?itok=pXTHERtG','https://www.princeton.edu/meet-princeton/visit-us','Princeton University Visitor Center'],
 yale: ['https://www.yale.edu/sites/default/files/images/Yale-IG.jpg','https://www.yale.edu/about-yale/visiting','Students walking to class at Yale University']
};
const ucPhotos = [
 ['berkeley','berkeley.jpg?h=0419be36&itok=eMGak01K','UC Berkeley campus lawn and tower'],
 ['davis','davis.jpg?h=0419be36&itok=0Qb8J93W','Modern buildings and walkway at UC Davis'],
 ['irvine','irvine.jpg?h=0419be36&itok=UnZp_r3p','Students outside a campus building at UC Irvine'],
 ['ucla','ucla.jpeg?h=0419be36&itok=P1q16uHG','Students crossing the plaza at UCLA'],
 ['merced','merced.jpg?h=0419be36&itok=cG4CREeb','Sculpture and campus lawn at UC Merced'],
 ['riverside','riverside.jpeg?h=0419be36&itok=ZLsxF_4g','Outdoor dining area at UC Riverside'],
 ['sandiego','sandiego.jpg?h=0419be36&itok=GKKwKLHa','Modern campus architecture at UC San Diego'],
 ['sanfrancisco','sanfrancisco.jpg?h=d44e57cc&itok=qO0HNwtJ','Aerial view of UC San Francisco'],
 ['santabarbara','santabarbara.jpeg?h=0419be36&itok=MsKwwdxh','Students and tower at UC Santa Barbara'],
 ['santacruz','santacruz.jpeg?h=0419be36&itok=HwqUY6uF','Wood and glass campus building at UC Santa Cruz']
];
for (const [id,file,alt] of ucPhotos) campusPhotos[id] = [`https://www.universityofcalifornia.edu/sites/default/files/styles/grid_item/public/2026-06/${file}`,'https://www.universityofcalifornia.edu/about-uc/campuses-locations',alt];
let displayedPhoto = null;
function showCampusPhoto(university) {
 if (displayedPhoto === university.id) return;
 displayedPhoto = university.id;
 const [url,source,alt] = campusPhotos[university.id];
 const image = document.createElement('img');
 image.id = 'campus-photo'; image.alt = alt; image.draggable = false;
 image.decoding = 'async'; image.referrerPolicy = 'no-referrer';
 image.hidden = true;
 get('photo-message').textContent = 'Loading campus photo…';
 get('photo-message').hidden = false;
 image.addEventListener('load', () => {
  if (displayedPhoto !== university.id) return;
  image.hidden = false; get('photo-message').hidden = true;
 });
 image.addEventListener('error', () => {
  if (displayedPhoto !== university.id) return;
  image.hidden = true;
  get('photo-message').textContent = 'Photo unavailable. Explore the campus using the official website below.';
 });
 get('photo-slot').replaceChildren(image);
 get('photo-credit').href = source;
 get('photo-credit').textContent = `Photo source: ${university.group === 'Ivy League' ? university.name : 'University of California'} ↗`;
 image.src = url;
}

const storageKey = 'university-choices-v2';
let decisions = {};
let history = [];
let filter = 'all';
let busy = false;
let drag = null;
let storageAvailable = true;
try {
 const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
 for (const u of universities) if (['good','bad'].includes(saved[u.id])) decisions[u.id] = saved[u.id];
} catch { storageAvailable = false; }
function save() {
 try { localStorage.setItem(storageKey,JSON.stringify(decisions)); storageAvailable = true; }
 catch { storageAvailable = false; }
 get('save-status').textContent = storageAvailable ? 'Your lists are saved in this browser.' : 'Browser storage is unavailable. Download your lists to keep them.';
}
function remaining() { return universities.filter(u => !decisions[u.id] && (filter === 'all' || u.group === filter)); }
function announce(message) { get('announcement').textContent = message; }
function change(id,type) {
 history.push({id,previous:decisions[id]});
 if (type) decisions[id] = type; else delete decisions[id];
 save(); render();
}
function render() {
 const queue = remaining();
 const u = queue[0];
 const reviewed = Object.keys(decisions).length;
 get('progress-text').textContent = `${reviewed} of ${universities.length} sorted · ${queue.length} left in this view`;
 get('progress-bar').style.width = `${reviewed / universities.length * 100}%`;
 get('card').hidden = !u;
 get('complete').hidden = !!u;
 get('bad-button').disabled = !u || busy;
 get('good-button').disabled = !u || busy;
 get('undo').disabled = !history.length || busy;
 if (u) {
  get('university-name').textContent = u.name;
  get('location').textContent = u.location;
  get('school-group').textContent = u.group;
  get('description').textContent = u.graduate ? 'A graduate and professional health sciences campus. UCSF does not offer undergraduate degrees.' : `${u.name} is ${u.group === 'Ivy League' ? 'a private Ivy League institution' : 'a public University of California campus'} in ${u.location}. Explore its official website for programs and admissions.`;
  get('campus').style.background = u.group === 'Ivy League' ? '#dce6cf' : '#d5e2e7';
  showCampusPhoto(u);
  get('school-link').href = u.url;
  get('tags').replaceChildren(...[u.group === 'Ivy League' ? 'Private' : 'Public',u.graduate ? 'Graduate & professional only' : 'Undergraduate & graduate'].map(t => { const el = document.createElement('span'); el.textContent=t; return el; }));
 } else {
  get('summary').textContent = `${Object.values(decisions).filter(t => t === 'good').length} in your good list · ${Object.values(decisions).filter(t => t === 'bad').length} in your bad list. ${reviewed < universities.length ? 'Switch the filter to explore the remaining schools.' : 'You have explored all 18 schools.'}`;
 }
 for (const type of ['bad','good']) {
  const list = universities.filter(u => decisions[u.id] === type);
  get(`${type}-count`).textContent = list.length;
  get(`${type}-empty`).hidden = !!list.length;
  get(`${type}-list`).replaceChildren(...list.map(u => {
   const li = document.createElement('li');
   const link = document.createElement('a'); link.href=u.url; link.target='_blank'; link.rel='noopener noreferrer'; link.textContent=u.name;
   const small=document.createElement('small'); small.textContent=u.location;
   const actions=document.createElement('div'); actions.className='list-actions';
   for (const [label,value] of [[`Move to ${type === 'good' ? 'bad' : 'good'}`,type === 'good' ? 'bad' : 'good'],['Remove',null]]) {
    const button=document.createElement('button'); button.textContent=label; button.disabled=busy;
    button.setAttribute('aria-label',`${label}: ${u.name}`);
    button.addEventListener('click',() => { change(u.id,value); announce(`${u.name} ${value ? `moved to your ${value} list` : 'returned to the deck'}.`); }); actions.append(button);
   }
   li.append(link,small,actions); return li;
  }));
 }
}
async function choose(type) {
 const u=remaining()[0]; if (!u || busy) return;
 busy=true; render();
 const card=get('card');
 card.style.transition=matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : 'transform .22s ease, opacity .22s ease';
 card.style.transform=`translateX(${type === 'good' ? 1 : -1}00%) rotate(${type === 'good' ? 12 : -12}deg)`;
 card.style.opacity='0';
 await new Promise(resolve => setTimeout(resolve,230));
 busy=false; change(u.id,type); resetDrag();
 announce(`${u.name} added to your ${type} list.`);
 if (!remaining().length) get('undo').focus();
}
function resetDrag() {
 drag=null; const card=get('card'); card.classList.remove('dragging');
 card.style.transition=''; card.style.transform=''; card.style.opacity='';
 get('swipe-label').textContent='';
}
get('card').addEventListener('pointerdown',event => {
 if (busy || !remaining().length || event.button !== 0 || event.target.closest('a,button') || !event.isPrimary) return;
 drag={id:event.pointerId,x:event.clientX,y:event.clientY,dx:0,dy:0};
 get('card').setPointerCapture(event.pointerId); get('card').classList.add('dragging');
});
get('card').addEventListener('pointermove',event => {
 if (!drag || drag.id !== event.pointerId) return;
 drag.dx=event.clientX-drag.x; drag.dy=event.clientY-drag.y;
 get('card').style.transform=`translateX(${drag.dx}px) rotate(${drag.dx/25}deg)`;
 get('swipe-label').textContent=Math.abs(drag.dx) > 25 ? (drag.dx > 0 ? 'GOOD LIST →' : '← BAD LIST') : '';
});
get('card').addEventListener('pointerup',event => {
 if (!drag || drag.id !== event.pointerId) return;
 const {dx,dy}=drag;
 resetDrag();
 if (Math.abs(dx) >= Math.min(90,get('card').offsetWidth*.22) && Math.abs(dx)>Math.abs(dy)) choose(dx > 0 ? 'good' : 'bad');
});
get('card').addEventListener('pointercancel',resetDrag);
get('card').addEventListener('lostpointercapture',() => { if (drag) resetDrag(); });
get('bad-button').addEventListener('click',() => choose('bad'));
get('good-button').addEventListener('click',() => choose('good'));
get('undo').addEventListener('click',() => {
 if (busy || !history.length) return;
 const last=history.pop(); if (last.previous) decisions[last.id]=last.previous; else delete decisions[last.id];
 save(); render(); announce('Last change undone.');
});
get('reset').addEventListener('click',() => {
 if (busy || !confirm('Clear both saved lists and start again?')) return;
 decisions={}; history=[]; save(); render(); announce('Lists cleared.');
});
get('filter').addEventListener('change',event => { resetDrag(); filter=event.target.value; render(); });
get('download').addEventListener('click',() => {
 const data={good:universities.filter(u => decisions[u.id]==='good'),bad:universities.filter(u => decisions[u.id]==='bad')};
 const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
 const link=document.createElement('a'); link.href=url; link.download='university-choices.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url),1000);
});
 document.addEventListener('keydown',event => {
 if (busy || drag || event.repeat || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable || ['INPUT','TEXTAREA','SELECT'].includes(event.target.tagName)) return;
 if (['ArrowLeft','ArrowRight'].includes(event.key)) { event.preventDefault(); choose(event.key === 'ArrowLeft' ? 'bad' : 'good'); }
});
render(); save();

