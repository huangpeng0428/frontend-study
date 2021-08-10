**VueTypes**
- 可以定义传入的props的默认值统一做一些检验，使用示例
```js
// 典型组件传值
export default {
  props: {
    id: {
      type: Number,
      default: 10,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      validator(value) {
        return Number.isInteger(value)
      },
      default: 0,
    },
    nationality: String,
  },
  methods: {
    // ...
  },
}

//使用VueTypes
import VueTypes from 'vue-types'

export default {
  props: {
    id: VueTypes.number.def(10),
    name: VueTypes.string.isRequired,
    age: VueTypes.integer,
    nationality: VueTypes.string,
  },
  methods: {
    // ...
  },
}
```