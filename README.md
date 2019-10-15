# vue-ts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue中使用ts需要用到的库
- vue-property-decorator
- vue-class-component
    - mixins
- vuex-class

### scss全局处理
- assets/styles中的variables.scss、mixin.scss已经通过webpack可以在任一vue文件中使用

### 代码规范
- 代码缩进4space：针对html、css/scss、js/ts
- 文件夹命名：小驼峰 
- 变量命名：小驼峰
- 常量命名：const MAX_COUNT = 10;
- 函数命名：
    - 小驼峰
    - 前缀应为动词：can、has、is、get、set、load
- 类命名：
    - 大驼峰
    - 书写顺序
        - private在前，public在后
        - 属性在前，方法在后
        
- CSS书写规范：[BEM方式]（https://www.w3cplus.com/css/css-architecture-1.html）
    - .block { /* styles */ }
    - .block__element { /* styles */ } 
    - .block--modifier { /* styles */ }
    - 不应该链式命名BEM元素，例如：form__row__input,解决方法
        - 可以把子子元素链接到有意义的块
        - 创建新的块来保存元素
- 注释
    - 单行注释 //
    - 多行注释
        - /*
        - *
        - */
- .vue书写规范见示例文件：src/views/TemplateDemo.vue