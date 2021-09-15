import '../styles/app.css'
import Layout from './ui/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Quiz from './pages/Quiz';
function App() {
  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}

export default App;
