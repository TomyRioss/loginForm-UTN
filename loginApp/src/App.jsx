import LoginName from './components/loginName/LoginName';
import LoginPassword from './components/loginPassword/LoginPassword';
import LoginConfirm from './components/LoginConfirm/LoginConfirm';
import LoginSurname from './components/loginSurname/LoginSurname';
import LoginEmail from './components/loginEmail/LoginEmail';
import LoginTelephone from './components/loginTelephone/LoginTelephone';
import './app.css';

function App() {
  return (
    <div className="loginForm">
      <form className="form">
        <LoginName />
        <LoginSurname />
        <LoginPassword />
        <LoginConfirm />
        <LoginEmail />
        <LoginTelephone />
      </form>
    </div>
  );
}

export default App;
