import '../styles/app.css'
import Layout from './ui/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import {Route, Switch,Redirect} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import Homepage from './pages/Homepage';

function App() {
  return (
    <AuthProvider>
      <Layout>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <PublicRoute exact path='/signup' component={SignUp} />
      <PublicRoute exact path='/login' component={Login} />
      <PrivateRoute exact path='/dsa/:id' component={Home} />
      <PrivateRoute exact path='/quiz/:id' component={Quiz} />
      <PrivateRoute exact path='/result/:id' component={Result} />
      <Route path='/*'>
        <Redirect to='/' />
      </Route>
      </Switch>
    </Layout>
    </AuthProvider>
  );
}

export default App;
