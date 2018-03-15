import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/editor',
        name: 'editor',
        component: Editor
    }]
})

