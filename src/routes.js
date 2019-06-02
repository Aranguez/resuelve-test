//components
import MoviesContainer from './components/MoviesContainer';
import Description from './components/Description';

const routes = [
  {
    path: '/',
    component: MoviesContainer,
  },
  {
    path: '/movies/:id',
    component: Description,
  },
];

export default routes;