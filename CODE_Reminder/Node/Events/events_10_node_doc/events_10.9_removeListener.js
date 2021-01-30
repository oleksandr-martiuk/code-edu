const { EventEmitter } = require('events').EventEmitter;
const ee = new EventEmitter();

const hello = {
   once: () => console.log(`[HELLO.ONCE] ........`),
   friends: (names) => {
      const s = (names.length) > 1 ? 's' : '';
      console.log(`[HELLO] Hello dear friend${s} ${names.join(', ')}!`);
   },
   present: name => {
      const msg = (name === 'Jack') ? `Yo man I have special present for you :)` : `What do you want? yo!`;
      console.log(`[HELLO] ${msg}`);
   },
   split: () => console.log('------------------------------------------------------')
}
const yo = () => console.log('[Yo] yo-yo-yo');

//---------------------------------------------------------------------------------------------------------

ee.once('hello', hello.once);
ee.on('hello', hello.friends);
ee.on('hello', hello.present);
ee.on('hello', hello.split);
ee.on('yo', yo);

//---------------------------------------------------------------------------------------------------------

ee.emit('hello', ['Bob', 'Sam', 'Peter']);
ee.emit('hello', ['Jack']);
ee.emit('split');
ee.emit('yo', ['Jack']);
ee.emit('yo', ['Danny']);
ee.emit('split');

ee.removeListener('hello', hello.friends);

ee.emit('hello', () => console.log('Listener is removed'));
