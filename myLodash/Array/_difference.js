
/**
 * @description: 
 * @param {*} array []
 * @param {*} [values] []
 * @return {*} []
 */
export default function _difference(array, values) {
    if (values) {
        if (!Array.isArray(array) && !Array.isArray(values)) {
            throw Error('参数类型错误！')
        }
    }
    let stack = [...array];
    if (!values || values.length === 0) {
        // return stack;
    } else {
        stack.forEach((item, index) => {
            if (values.includes(item)) {
                stack.splice(index, 1);
            }
        })
    }
    return stack;
    // console.log(stack, '00')
}

const arr = [1,2,3,4]
const values = [2,5]
const res = _difference(arr, values);
const res1 = _difference(arr, []);
console.log(res);
console.log(res1);