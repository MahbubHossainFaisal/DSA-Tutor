
import Illustration from "../ui/Illustration";
import LoginForm from "../Form/LoginForm";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}