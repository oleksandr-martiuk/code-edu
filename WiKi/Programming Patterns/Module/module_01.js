// IIFE (Immediately-Invoked Functional Expression) - немедленно вызываемое функциональное выражение


const myModule = (function() {
  const privateVariable = 'Hi friend!';

  function privateMethod() {
    console.log(privateVariable)
  }

  return {
    publicMethod: function() {
      privateMethod()
    }
  }
})();

myModule.publicMethod();
