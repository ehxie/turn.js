import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

module.exports = [
    {
        input: 'src/main.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'es'
            }
        ],
        plugins: [
            nodeResolve({
                browser: true,
                preferBuiltins: false
            }),
            commonjs(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),  // 替换`process.env.NODE_ENV`变量
                'process': JSON.stringify({
                    env: {
                        NODE_ENV: 'production'  // 提供一个假的`process`全局变量
                    }
                }),
                preventAssignment: true,
            }),
            vue({
                // Dynamically inject css as a <style> tag
                css: true,
                // Explicitly convert template to render function
                compileTemplate: true
            }),
            terser(),
            serve({
                open: true,
                contentBase: ['public', 'dist'],
                port: 8080
            })
        ]
    }
]
