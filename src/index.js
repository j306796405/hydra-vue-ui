import Button from './packages/button'
import Input from './packages/input'
import Form from './packages/form'
import FormItem from './packages/form-item'
import notice from './packages/notice/notice'

const components = {
    hButton: Button,
    hInput: Input,
    hForm: Form,
    hFormItem: FormItem
}

const install = function (Vue, options) {

    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })

    Vue.prototype.$notice = notice
}

export default install
