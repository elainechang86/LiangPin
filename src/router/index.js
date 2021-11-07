import Router from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import Blog from '../components/Blog'
import Post from '../components/Post'
import About from '../components/About'
import Portfolio from '../components/Portfolio'

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
        },
        {
            path: '/About',
            name: 'About',
            component: About,
        },
        {
            path: '/Portfolio',
            name: 'Portfolio',
            component: Portfolio,
        }
    ]
})