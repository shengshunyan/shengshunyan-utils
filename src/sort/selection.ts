/**
 * @desc 选择排序
 * @author shengshunyan
 * @date 2021-05-02
 */

/**
 * 选择排序
 * @param {Array} arr 需要排序的数组
 * @returns {Array} 排序完成的新数组
 */
export default function selectionSort(arr: Array<number>): Array<number> {
    const list: Array<number> = [...arr]
    let minIndex = 0

    for (let i = 0; i < list.length; i++) {
        minIndex = i
        for (let j = i; j < list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j
            }
        }
        [list[i], list[minIndex]] = [list[minIndex], list[i]]
    }

    return list
}