// const _ = require('lodash');

// function _concat() {
//     var array = [1, [2], [4]];
//     const stack = [...array];
//     console.log(stack)
//     var other = _.concat(array, null, [3], [[4], [5,3, '', [8]]]);
//     console.log(other);
// }
// _concat();
/**
 * @description: 创建一个新数组，将array与任何数组 或 值连接在一起。
 * @return {*} Array
 */
const array = [1];
export default function _concat(array, ...arr) {
    if (Object.prototype.toString.call(array) != '[object Array]') {
        throw Error('传入参数不合法！');
    }
    let stack = [...array];
    if (arr) {
        arr.forEach((item, index) => {
            if (Object.prototype.toString.call(item) === '[object Array]') {
                stack = stack.concat(item);
            } else {
                stack.push(item);
            }
        })
    }
    return stack;
}
const res = _concat(array, null, 1,2,[3],[4,[5], [6, {}, '']], [8,7])
console.log(res);
