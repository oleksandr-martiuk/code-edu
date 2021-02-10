const obj = {
   a: {
      b: 77,
      c: () => console.log('Hello')
   }
}

// obj.a.b();     // TypeError: obj.a.b is not a function
// obj.a.b?.();   // TypeError: obj.a.b is not a function
// obj.a?.b?.();  // TypeError: obj.a?.b is not a function

// obj.v.b();     // TypeError: Cannot read property 'b' of undefined
obj.v?.b();
