import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        js: `${srcFolder}/js/main.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp, svg}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/css/main.scss`,
        html: `${srcFolder}/*.pug`,
        files: `${srcFolder}files/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        scss: `${srcFolder}/css/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}