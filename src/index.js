const Elm = require('./Main');
const app = Elm.Main.fullscreen(null);

require('./style.less');

app.ports.focus.subscribe(function(message) {
  alert(message);
  app.ports.log.send('Alert called: ' + message);
});
