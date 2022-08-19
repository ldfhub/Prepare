
/**
 * @description: 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param {*} arr
 * @param {*} size
 * @return {*}
 */

const arr = [1,2,3,4,5,6,7];
// const cloneArr = [...arr]
// const cloneArr = JSON.parse(JSON.stringify(arr))
// cloneArr[7][0] = 10
// console.log(cloneArr)
// console.log(arr)
// export default 1

export default function _chunk(arr, size) {
    if (typeof size !== 'number' || Object.prototype.toString.call(arr) != '[object Array]') {
        throw Error('参数类型错误！');
    }
    const cloneArr = JSON.parse(JSON.stringify(arr));
    const finalRes = [];
    let length = cloneArr.length;
    let num;
    if (length % size === 0) {
        num = length / size;
    } else {
        num = parseInt(length / size) + 1;
    }
    if (cloneArr.length <= size) {
        return cloneArr;
    }
    for(let i = 0; i < num; i++) {
        const stack = cloneArr.splice(0, size);
        finalRes.push(stack);
    }
    return finalRes;
}
const res  = _chunk(arr, 3);
const res1  = _chunk(arr, 4);
console.log(res);
console.log(res1)
