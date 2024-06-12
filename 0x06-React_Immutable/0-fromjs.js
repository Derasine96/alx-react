const { fromJS } = require('immutable');

const getImmutableObject = (object) => {
  return fromJS(object);
};

const jsObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableObject = getImmutableObject(jsObject);
console.log(immutableObject);
