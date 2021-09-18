import '../styles/app.css'
import Layout from './ui/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import {Route, Switch} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'
function App() {
  return (
    <AuthProvider>
      <Layout>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/quiz' component={Quiz} />
      <Route exact path='/result' component={Result} />
      </Switch>
    </Layout>
    </AuthProvider>
  );
}

export default App;
