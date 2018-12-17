import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Project from './Project';
import Contact from './Contact';
import NotFoundPage from './NotFoundPage';
import routes from './routes';

export default {
  home: {
    path: routes.home,
    component: Home,
    exact: true,
  },

  about: {
    path: routes.about,
    component: About,
    exact: true,
  },

  portfolio: {
    path: routes.portfolio,
    component: Portfolio,
    exact: true,
  },

  project: {
    path: routes.project,
    component: Project,
  },

  contact: {
    path: routes.contact,
    component: Contact,
    exact: true,
  },

  // ============================== keep this at bottom =================================
  notFoundPage: {
    component: NotFoundPage,
  }
};
