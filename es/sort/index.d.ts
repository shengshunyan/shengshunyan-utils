/**
 * @desc sort模块入口
 * @author shengshunyan
 * @date 2021-05-02
 */
import bubbleSort from './bubble';
import selectionSort from './selection';
declare const _default: {
    bubbleSort: typeof bubbleSort;
    selectionSort: typeof selectionSort;
};
export default _default;
