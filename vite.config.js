import { defineConfig } from 'vite'

export default defineConfig({
    build:{
        target:'modules',
        outDir:'dist',
        minify:false,
        rollupOptions:{
            input:['src/index.js'],
            output:[
                {
                    format:'es',
                    entryFileNames:'[name].js',
                    preserveModules:true,
                    dir:'es',
                    preserveModulesRoot:'src'
                },
                {
                    format:'cjs',
                    entryFileNames:'[name].js',
                    preserveModules:true,
                    dir:'lib',
                    preserveModulesRoot:'src'
                }
            ]
        },
        lib:{
            entry:'./index.js',
            formats:['es','cjs']
        }
    }
})