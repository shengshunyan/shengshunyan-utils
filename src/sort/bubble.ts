/**
 * @desc 冒泡排序
 * @author shengshunyan
 * @date 2021-05-02
 */

/**
 * 冒泡排序
 * @param {Array} arr 需要排序的数组
 * @returns {Array} 排序完成的新数组
 */
export default function bubbleSort(arr: Array<number>): Array<number> {
    const list: Array<number> = [...arr]

    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
            }
        }
    }

    return list
}