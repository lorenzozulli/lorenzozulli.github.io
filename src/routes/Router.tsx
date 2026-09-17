import { createHashHistory, createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router';
import App from "../App";
import { AboutPage } from '@/pages/AboutPage/AboutPage';
import { ArticlesPage } from '@/pages/ArticlesPage/ArticlesPage';
import { NotFoundPage } from '@/shared/components/organisms/NotFoundPage/NotFoundPage';

const hashHistory = createHashHistory()

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFoundPage,
  beforeLoad: () => {
    if(window.location.pathname === '/') throw redirect({ to: aboutPageRoute.to })
  }
});

const aboutPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'about',
  component: AboutPage,
})

const articlesPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'blog',
  component: ArticlesPage,
})

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    aboutPageRoute,
    articlesPageRoute,
  ]),
  basepath: '/lorenzozulli.github.io',
  history: hashHistory
});
