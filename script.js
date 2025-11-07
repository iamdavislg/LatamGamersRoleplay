{
const SERVER_IP = '144.217.19.104:7777';
const nick = document.getElementById('userName').value || 'Jugador';
localStorage.setItem('lg_user', nick);
modal.classList.remove('open');
alert('Sesión iniciada como: ' + nick + ' (simulado)');
}


async function loadUpdates() {
try {
const res = await fetch('updates.json');
const updates = await res.json();
const container = document.getElementById('updatesList');
container.innerHTML = '';
updates.forEach(u => {
const el = document.createElement('div');
el.className = 'item';
el.innerHTML = `<div><strong>${u.title}</strong><div class='small'>${u.date}</div><div class='small'>${u.summary}</div></div>`;
container.appendChild(el);
});
} catch (e) {
document.getElementById('updatesList').innerHTML = '<div class="small">No se pudo cargar updates.json</div>';
}
}


async function loadTops() {
try {
const res = await fetch('tops.json');
const tops = await res.json();
const cont = document.getElementById('topsList');
cont.innerHTML = '';
tops.forEach((p, idx) => {
const el = document.createElement('div');
el.className = 'item';
el.innerHTML = `<div>#${idx + 1} <strong>${p.nick}</strong></div><div class='small'>${p.score}</div>`;
cont.appendChild(el);
});
} catch (e) {
document.getElementById('topsList').innerHTML = '<div class="small">No se pudo cargar tops.json</div>';
}
}


async function checkStatus() {
const dot = document.getElementById('statusDot');
const text = document.getElementById('statusText');
const players = document.getElementById('players');
const ping = document.getElementById('ping');
try {
const res = await fetch('status.json');
const s = await res.json();
if (s.online) {
dot.classList.replace('status-offline', 'status-online');
text.textContent = 'Online';
players.textContent = s.players || '0';
ping.textContent = s.ping || '--';
} else {
dot.classList.replace('status-online', 'status-offline');
text.textContent = 'Offline';
players.textContent = '0';
ping.textContent = '--';
}
} catch (err) {
dot.classList.replace('status-online', 'status-offline');
text.textContent = 'Desconocido';
players.textContent = '--';
ping.textContent = '--';
}
}


document.getElementById('checkStatus').addEventListener('click', checkStatus);


loadUpdates();
loadTops();
checkStatus();