function elderAge(m,n,l,t) {

  console.log('m=', m);
  console.log('n=', n);
  console.log('l=', l);
  console.log('t=', t);
  console.log('-----------------------------------------');

  const num = m * n;
  console.log(`num=${num}`);
  const zero = (num/10) | 0 + 1;
  console.log(`zero=${zero}`);

  let sum = (m-1) * (m/2) * n;
  console.log(`sum=${sum}`);
  sum -= (m*n - zero) * l; // lost of seconds
  console.log(`sum (l=${l}) =${sum}`);
  if (sum >= t) sum -= t;  // lost big amount of time
    console.log(`sum (t=${t}) =${sum}`);

  return sum;
}

const result = elderAge(8, 5, 1, 100);

console.log('=========================================');
console.log(result);
