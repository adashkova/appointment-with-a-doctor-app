import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import DoctorPage from '../../pages/DoctorPage';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/doctors/:name" component={DoctorPage} />
    </Switch>
  </Router>
);

export default App;
