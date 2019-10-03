function Set() {
  this.set = [];
}

Set.prototype.add = function(ele) {
  if (this.set.indexOf(ele) === -1) {
    this.set.push(ele);
  }
  return this;
};

Set.prototype.get = function(i) {
  if (i === undefined) {
    return this.set;
  }
  return this.set[i];
}

var setOne = new Set();
setOne.add(1).add(2).add(1);
for (let i = 0; i < setOne.get().length; i++) {
  console.log(setOne.get()[i]);
}
