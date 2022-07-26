import { FC } from 'react';
import { Navbar, CardsList } from './components';


export const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <section className="section">
        <CardsList />
      </section>
    </div>
  );
};
