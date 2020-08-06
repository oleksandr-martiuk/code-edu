const sortByValue = (o) => {
  const sortable = [];
  for (const k in o)
    if (o[k])
      sortable.push([k, o[k]]);

  return sortable.sort((a, b) => a[1] - b[1]).map(item => item[0]);
}

const theOrderOf = (r) => {
  r = r.replace(/\s+/g,"");

  const rArr = [];
  r.match(/.{1,11}/g).forEach(item => rArr.push(item.split('')));

  const o = {};

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      const ch = rArr[j][i];
      if (Number.isInteger(+ch)) {
        if (o[ch]) o[ch] += 1;
        else o[ch] = 1;
      }
    }
  }

  return sortByValue(o).join('');
}
