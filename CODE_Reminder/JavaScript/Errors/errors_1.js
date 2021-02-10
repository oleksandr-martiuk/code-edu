try {
   throw Error('yo');
} catch {
   console.log('ERROR: catch can be used without a bindings');
}
