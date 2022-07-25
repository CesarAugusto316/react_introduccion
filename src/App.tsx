import {
  FC, Suspense, lazy,
} from 'react';
import {
  Navbar, Spinner,
} from './components';


const CardsList = lazy(() => import('./components/cardsList/CardsList'));

export const App: FC = () => {
  return (
    <div className="app">
      <Navbar />

      <section className="section">
        <Suspense fallback={<Spinner />}>
          <CardsList />
        </Suspense>
      </section>
    </div>
  );
};
