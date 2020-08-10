const r = (function() {
    const registry = {};

    function register(name, entry) {
      if (!name) throw new Error('You must provide a valid name for the entry.');
      if (registry[name]) throw new Error(`${name} already registered!`);
      if (!entry) throw new Error(`You must provide something to register as ${name}`);
      registry[name] = entry;
    }

    function get(name) {
      if (!registry.hasOwnProperty(name)) throw new Error(`No such entry ${name}`);
      return registry[name];
    }

    function list() {
      return Object.keys(registry);
    }

    return { register, list, get };
})();

try{
  r.register('first', 'Bill Sallow');
  r.register('second', 'Tom Jameson');
  r.register('fourth', 'Eliza Bin');

  const cacheList = r.list();

  console.log(cacheList);
  console.log(r.get('second'));
  console.log(r.get('first'));
  console.log(r.get('third'));
  console.log(r.get('fourth'));
} catch(e) {
  console.log('ERROR: ', e.message);
}
