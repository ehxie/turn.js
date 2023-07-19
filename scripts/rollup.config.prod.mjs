import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'components/flip/index.vue',  // 指定组件入口文件
    output: {
        file: 'output/flip-vue-es.js',  // 指定组件输出文件
        format: 'es',
        name: 'flip',
        globals: {
            vue: 'Vue'
        }
    },
    plugins: [
        nodeResolve({
            browser: true,
            preferBuiltins: false
        }),
        commonjs(),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production'),  // 替换`process.env.NODE_ENV`变量
            'process': JSON.stringify({
                env: {
                    NODE_ENV: 'production'  // 提供一个假的`process`全局变量
                }
            }),
        }),
        vue({
            css: true,
            compileTemplate: true
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        terser()
    ],
    external: ['vue']
};