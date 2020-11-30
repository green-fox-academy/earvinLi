const handler = {
  get: function(target, prop) {
    if (prop === 'nextId') {
      if (prop in target) {
        return target[prop] += 1;
      }

      return target[prop] = 1;
    }
  },
};

const proxyObj = new Proxy({
  thisId: 17,
}, handler);
console.log(proxyObj.nextId);
console.log(proxyObj.nextId);
