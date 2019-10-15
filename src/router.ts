import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

import About from './views/About.vue';
import TemplateDemo from './views/TemplateDemo.vue';
import Message from './views/Message.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/template',
      name: 'template',
      component: TemplateDemo,
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
    },
  ],
});
