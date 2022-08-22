import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <ThemeSwitcher />
      <Router>
        <Routes>
          <Route path="/" element={(
            <Home />
          )} />
          <Route path="*" element={(
            <NotFound />
          )} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
