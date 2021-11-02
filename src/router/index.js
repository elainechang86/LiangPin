import Router from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import Blog from '../components/Blog'
import Post from '../components/Post'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Blog',
            name: 'Blog',
            component: Blog,
        },
        {
            path: '/Post',
            name: 'Post',
            component: Post,
        }
    ]
})