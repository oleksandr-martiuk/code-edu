const cache = new Set();
const networkFetch = url => `${url} - Ответ с сервера`;

const proxyFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxyFetch('angular.io'))
console.log(proxyFetch('react.io'))
console.log(proxyFetch('angular.io'))
