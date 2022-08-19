/**
 * @description: 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @param {*} arr
 * @return {*} Array
 */
const arr = [1,2,3,'',false,0, [7, 0, false, [0,3,1]]]
export default function _compact(arr) {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        throw Error('参数类型错误！');
    }
    let stack = [];
    for(let i = 0; i < arr.length; i++) {
        if (Object.prototype.toString.call(arr[i]) == '[object Array]') {
            stack[stack.length] = _compact(arr[i]);
            continue;
        }
        if(Boolean(arr[i])) {
            stack.push(arr[i])
        }
    }
    console.log(stack)
    return stack;
}
const res = _compact(arr);
console.log(res)