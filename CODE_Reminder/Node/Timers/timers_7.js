console.log('[sync] Start');

setTimeout((name) => {
   console.log(`[Async] Hello dear friend ${name}!`);
}, 0, 'Joe');

console.log('[sync] Finish');

let i = 0;
while(i < 1000000000) {
   i++;
   if (i % 100000000 === 0) console.log(`[sync] ${i}`);
}
