const { Map} = require('immutable');

const getImmutableObject = (object) => {
  return Map(object);
};

const jsObject = Map({
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
});

const immutableObject = getImmutableObject(jsObject);
console.log(immutableObject);