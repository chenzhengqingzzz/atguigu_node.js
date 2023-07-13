/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-13 14:50:21
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-13 15:00:45
 * @FilePath: /atguigu-nodejs/NodeJS注意/注意.js
 * @Description: 使用Node的注意事项
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */

// Node里面无法使用DOM和BOM的api
// 只能使用Node提供的api

// BOM
// console.log(window);
// console.log(history);
// console.log(navigator);
// console.log(location);

// DOM
// console.log(document);

// AJAX
// let xhr = new XMLHttpRequest()

console.log('abc');
setTimeout(() => {
    console.log('def');
}, 1000);

// global是node中的顶级对象 相当于浏览器的window
 console.log(global);
//  globalThis也能指向顶级对象
console.log(globalThis);