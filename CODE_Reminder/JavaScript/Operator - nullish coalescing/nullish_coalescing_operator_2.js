// TODO: nullish coalescing operator should be used if we expect values as empty string ('') or zero (0)

console.log(0 ?? 42);   // 0
console.log(0 || 42);   // 42

console.log('' ?? 42);  // ...empty space...
console.log('' || 42);  // 42

//------------------------------------------

console.log(null || 42);  // 42
console.log(null ?? 42);  // 42

console.log(undefined || 42);  // 42
console.log(undefined ?? 42);  // 42
