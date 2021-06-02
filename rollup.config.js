/**
 * @desc rollup 配置文件
 * @author shengshunyan
 * @date 2021-05-02
 */

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import typescript from 'rollup-plugin-typescript2';

const isPro = process.env.NODE_ENV === 'production'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'lib/index.js',
            format: 'cjs',
        },
        {
            file: 'es/index.js',
            format: 'esm',
        },
        {
            file: 'umd/index.js',
            format: 'umd',
            // script标签的形式引入时，全局变量的模块名
            name: 'utils',
        },
    ],
    plugins: [
        resolve(),  // 这样 Rollup 能找到 `ms`
        commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
        eslint({
            throwOnError: true,
            throwOnWarning: true,
            include: ['src/**'],
            exclude: 'node_modules/**',
        }),
        typescript(),
        babel({
            runtimeHelpers: true,       // 使plugin-transform-runtime生效
            exclude: 'node_modules/**', // 防止打包node_modules下的文件
        }),
        isPro && terser()
    ]
};