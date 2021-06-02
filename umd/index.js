(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
}(this, (function (exports) { 'use strict';

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
    function bubbleSort(arr) {
        const list = [...arr];
        for (let i = 0; i < list.length - 1; i++) {
            for (let j = 0; j < list.length - i - 1; j++) {
                if (list[j] > list[j + 1]) {
                    [list[j], list[j + 1]] = [list[j + 1], list[j]];
                }
            }
        }
        return list;
    }

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
    function selectionSort(arr) {
        const list = [...arr];
        let minIndex = 0;
        for (let i = 0; i < list.length; i++) {
            minIndex = i;
            for (let j = i; j < list.length; j++) {
                if (list[j] < list[minIndex]) {
                    minIndex = j;
                }
            }
            [list[i], list[minIndex]] = [list[minIndex], list[i]];
        }
        return list;
    }

    /**
     * @desc sort模块入口
     * @author shengshunyan
     * @date 2021-05-02
     */
    var index = {
        bubbleSort,
        selectionSort,
    };

    exports.sort = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
