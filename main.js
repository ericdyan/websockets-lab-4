// Create connectiom to WebSocket
let connection = new WebSocket('ws://localhost:8080');

connection.onopen = () => {
  console.log('connected from the front end');
};

connection.onerror = () => {
  console.log('failed to connect from the front end');
};

connection.onmessage = (event) => {
  console.log('received message', event.data);
  document.querySelector('div').innerHTML = event.data;
  const range = window.getSelection();
  range.selectAllChildren(div);
  range.collapseToEnd();
};

document.querySelector('div').addEventListener('keyup', (event) => {
  event.preventDefault();

  let message = document.querySelector('div').innerHTML;
  connection.send(message);
  console.log(message);
});
