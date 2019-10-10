/**
 *  polyfill 适合配置业务代码，不适合用在类库上
 *  start 类库使用
 *  ["@babel/plugin-transform-runtime", {
 *         "absoluteRuntime": false,
 *         "corejs": 3,
 *         "helpers": true,
 *         "regenerator": true,
 *         "useESModules": false
 *    }
 *  ]
 *  end 可生成闭包形式代码
 */

// import "@babel/polyfill";
/*import png from './1.png'
import './style.css'
import './my.scss'
import './font/iconfont.css'

import {helper} from './common'

var root = document.getElementById('root')
console.log('111')
var img = new Image()
img.src = png

root.append(img)

var div = document.createElement('div')
div.innerHTML = '<i class="js iconfangdajing"></i>'
root.append(div)

helper()*/
/*var root = document.getElementById('root')

var div = document.createElement('div')
div.innerHTML = 1
div.onclick = function () {
    div.innerHTML = +div.innerHTML + 1
}
root.append(div)*/
/*
import './my.scss'
var root = document.getElementById('root')

var btn = document.createElement('button')
btn.innerText = '新建'
btn.onclick = function () {
    var p = document.createElement('p')
    p.innerHTML = '124234'
    root.append(p)
}

root.append(btn)
*/

const arr = [
    new Promise(() => {}),
    new Promise(() => {})
]

arr.map(e => {
    console.log(e, 1)
})
