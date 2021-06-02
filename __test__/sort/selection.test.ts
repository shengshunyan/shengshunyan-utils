/**
 * @desc selection单元测试
 * @author shengshunyan
 * @date 2021-05-02
 */

import selectionSort from '../../src/sort/selection'

test('选择排序：正确排序数组 [1, 3, 2, 2, 2]', () => {
    expect(selectionSort([1, 3, 2, 2, 2]).toString()).toEqual([1, 2, 2, 2, 3].toString());
});