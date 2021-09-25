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
function App() {
  return (
    <AuthProvider>
      <Layout>
      <Switch>
      <Route exact path='/' component={Home} />
      <PublicRoute exact path='/signup' component={SignUp} />
      <PublicRoute exact path='/login' component={Login} />
      <PrivateRoute exact path='/quiz' component={Quiz} />
      <PrivateRoute exact path='/result' component={Result} />
      <Route path='/*'>
        <Redirect to='/' />
      </Route>
      </Switch>
    </Layout>
    </AuthProvider>
  );
}

export default App;
