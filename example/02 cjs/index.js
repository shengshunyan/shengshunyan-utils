const utils = require('../../lib/index')

const arr = [1, 3, 2, 2, 2]
const bubbleSortArr = utils.sort.bubbleSort(arr)
const selectionSortArr = utils.sort.selectionSort(arr)

console.log('bubbleSortArr: ', bubbleSortArr)
console.log('selectionSortArr: ', selectionSortArr)