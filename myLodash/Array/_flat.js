/**
 * @description: 拍平一个数组
 * @param {*} array
 * @return {*} new Array
 */

const array = [1,2,3,[4, [5]]];
export default function _flat(array) {
    if (Object.prototype.toString.call(array) !== '[object Array]') {
        throw Error('参数不合法！')
    }
    // let stack = [];
    // for(let i = 0; i < array.length; i++) {
    //     if (Object.prototype.toString.call(array[i]) === '[object Array]') {
    //         stack = stack.concat(_flat(array[i]));
    //     } else {
    //         stack.push(array[i]);
    //     }
    // }
    // return stack;

    // reduce实现
    return array.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? _flat(next) : next);
    }, [])
}
const res = _flat(array);
console.log(res);