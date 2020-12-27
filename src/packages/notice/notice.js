import Vue from 'vue'
import Notice from './notice.vue'

const noticeComponent = Vue.extend(Notice)
const noticeInstance = new noticeComponent().$mount()

document.body.appendChild(noticeInstance.$el)

export default function (notice) {
    noticeInstance.add(notice)
}
