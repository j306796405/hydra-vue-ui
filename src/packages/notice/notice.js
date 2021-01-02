import Vue from 'vue'
import Notice from './notice.vue'

// 需要封装在方法中，如果立即执行打包的时候会报document、window undefined
Notice.newInstance = () => {
    const noticeComponent = Vue.extend(Notice)
    const noticeInstance = new noticeComponent().$mount()

    document.body.appendChild(noticeInstance.$el)

    return {
        add(_notice) {
            noticeInstance.add(_notice)
        },
    }
}

let noticeInstance

export default function (notice) {
    noticeInstance = noticeInstance || Notice.newInstance()
    noticeInstance.add(notice)
}
