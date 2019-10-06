//  111))))

const binarySort = (elem, arr) => {
    let start = 0,
        end = arr.length - 1,
        middle;
    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] == elem) return middle;
        else if (arr[middle] < elem) start = middle + 1;
        else end = middle - 1;
    }
    return -1;
}
let res = binarySort(16, [1, 5, 6, 8, 11, 13, 16, 18, 22])
console.log(res)