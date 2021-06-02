/**
 * @desc bubble单元测试
 * @author shengshunyan
 * @date 2021-05-02
 */

import bubbleSort from '../../src/sort/bubble'

test('冒泡排序：正确排序数组 [1, 3, 2, 2, 2]', () => {
    expect(bubbleSort([1, 3, 2, 2, 2]).toString()).toEqual([1, 2, 2, 2, 3].toString());
});