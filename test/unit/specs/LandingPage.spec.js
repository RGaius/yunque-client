import Vue from 'vue'
import Login from '@/components/page/Login'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)


describe('Login.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Login)
    }).$mount()

    // expect(vm.$el.querySelector('.layout').textContent).to.contain('Welcome to your new project!')
  })
})
