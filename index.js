const countEl = document.getElementById('count-el');
const messageId = document.getElementById('message-id');
const totalId = document.getElementById('total-id');

var count = 0;
var savedAmount = 0;
var msg = 'Previous entries: ';

function increment() {
  count += 1;
  countEl.innerHTML = count;
}

function save() {
  var x = savedAmount === 0 ? '' : '-';
  msg = `${msg} ${x} ${count}`;
  messageId.innerHTML = msg;
  savedAmount += count;
  countEl.innerHTML = 0;
  count = 0;
  totalId.innerHTML = `Total: ${savedAmount}`;
}
