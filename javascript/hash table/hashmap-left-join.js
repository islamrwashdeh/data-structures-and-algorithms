'use strict';


function leftJoin(h1, h2) {
  let result = [];
  console.log(h1.buckets);
  h1.buckets.forEach(elem => {
    Object.keys(elem.head.value).forEach((key) => {
      result.push([key, h1.get(key), h2.get(key)]);
    });
  });
  return result;
}

module.exports = leftJoin;
