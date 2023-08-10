
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix === 'undefined') {
        return [];
    }
    let res = [];
    matrix.forEach((e,i) => {
        res = res.concat(i % 2 === 0 ? e : e.reverse());
    });
  return res;
}
