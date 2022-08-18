import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Calculator } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(
          <Calculator />
        )} />
        <Route path="*" element={(
          <NotFound />
        )} />
      </Routes>
      {/* <div className="App">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div> */}
    </Router>
  );
}

export default App;
