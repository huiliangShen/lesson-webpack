### Tree Shaking
> 引入什么，打包什么

只支持es-module引入
```javascript
 import { add } from './xxx'
// not 
 const add = require('xxx')
```

在development中使用tree shaking 不会把文件中没有使用过的代码去除
只有在production中才会生效
