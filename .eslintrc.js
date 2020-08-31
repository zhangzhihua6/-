module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项是用来配置标准的js风格
  extends: [
    'plugin:vue/essential', // vue语法校验
    'eslint:recommended' // js语法校验
    // 'eslint-config-prettier',
    // 'eslint-config-prettier/vue'
    // 这个插件集成了 'eslint:recommended' 'eslint-config-prettier' 'eslint-config-prettier/vue'
    // 并且继承了prettier格式化代码
    // '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint' // 解析器，这里我们使用babel-eslint
  },
  // 预定义的全局变量，设置为true，以保证在代码检测时不会把这些预定义的全局变量是别成未定义而报错
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  // 插件，此插件用于识别文件中的js代码
  plugins: ['vue'],
  // globals: {
  //   module: false,
  //   process: false,
  //   $: false
  // },
  rules: {
    // 规则值
    // "off"或者0 关闭规则
    // "warn" 或者1 警告
    // "error" 或者2 错误
    ////////////////
    // 可能的错误  //
    ////////////////
    'max-params': [2, 6], // 函数形参不能超过6个
    semi: [2, 'always'], // 强制是否使用分号。
    // 禁用 console
    'no-console': 0,
    // 禁止在条件中使用常量表达式
    // if (false) {
    //     doSomethingUnfinished();
    // }
    'no-constant-condition': 2,
    // 禁用 debugger
    'no-debugger': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    'new-cap': [2, { newIsCap: true, capIsNew: false }], // 要求构造函数首字母大写
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止空语句块
    'no-empty': [2, { allowEmptyCatch: true }],
    // 禁止在正则表达式中使用空字符集 (/^abc[]/)
    'no-empty-character-class': 2,
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 2,
    //   禁止把全局对象 (Math 和 JSON) 作为函数调用  错误：var math = Math();
    'no-obj-calls': 2,
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    /*
      function foo() {
        return true;
        console.log("done");
      }//错误
    */
    'no-unreachable': 2,
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    'new-parens': 2,
    'spaced-comment': 2, // 注释符和注释内容用空格隔开
    //////////////
    // 最佳实践 //
    //////////////
    // 定义对象的set存取器属性时，强制定义get
    'accessor-pairs': 2,
    // 限制圈复杂度，也就是类似if else能连续接多少个
    complexity: [2, 11],
    // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
    'default-case': 2,
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 2,
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 2,
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 2,
    // 禁止 if 语句中有 return 之后有 else
    'no-else-return': 1,
    // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
    'no-empty-function': 0,
    // 禁止使用空解构模式no-empty-pattern
    'no-empty-pattern': 2,
    // 禁止扩展原生类型
    'no-extend-native': 1,
    // 禁用魔术数字(3.14什么的用常量代替)
    'no-magic-numbers': [
      0,
      { ignoreArrayIndexes: true, ignore: [-1, 0, 1, 2] }
    ],
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
    'no-multi-str': 2,
    // 禁止对原生对象赋值
    'no-native-reassign': 2,
    // 禁止在非赋值或条件语句中使用 new 操作符
    'no-new': 2,
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 2,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 2,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 2,
    // 不允许对 function 的参数进行重新赋值
    'no-param-reassign': 0,
    // 禁止使用 var 多次声明同一变量
    'no-redeclare': 2,
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 2,
    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 2,
    // 禁止将自己赋值给自己
    'no-self-assign': 2,
    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 2,
    // 禁用 void 操作符
    'no-void': 0,
    // 禁止数组中出现连续逗号
    'no-sparse-arrays': 2,
    // 禁用 with 语句
    'no-with': 2,
    'no-return-await': 2,
    // 要求或禁止 “Yoda” 条件
    yoda: [2, 'never'],
    'no-new-object': 2, // 不允许使用new Object声明一个对象
    'object-shorthand': 2, // 对象语法简写
    'arrow-parens': 0, // 允许函数单个参数时去掉括号
    'no-multi-assign': 2, // 变量禁止链式赋值
    'brace-style': 2, // else 放在if代码块闭合括号的同一行
    'space-before-blocks': 2, // 大括号前放一个空格
    'keyword-spacing': 2, // 控制语句前放一个空格
    'space-infix-ops': 2, // 使用空格把运算符隔开
    'eol-last': 2, // 末尾插入一个空行
    'comma-style': 1, // 行开头处不要使用逗号
    //////////////
    //  变量声明 //
    //////////////
    // 禁止删除变量
    'no-delete-var': 2,
    // 禁止覆盖受限制的标识符
    'no-shadow-restricted-names': 2,
    // 不允许在变量定义之前使用它们
    'no-use-before-define': 2,
    'no-array-constructor': 2, // 不允许使用new Array创建数组
    'prefer-rest-params': 2,
    //////////////
    // ES6.相关 //
    //////////////
    // 要求箭头函数体使用大括号
    'arrow-body-style': 2,
    // 箭头函数的前后空格
    'arrow-spacing': [2, { before: true, after: true }],
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [2, { before: true, after: true }],
    // 禁止修改类声明的变量
    'no-class-assign': 2,
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 2,
    // 禁止 Symbol  的构造函数
    'no-new-symbol': 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    // 要求使用 let 或 const 而不是 var
    'no-var': 2,
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 2
  }
};
