import { Link, useNavigate } from "react-router-dom";
import classes from "../css/LoginRegister.module.css";
import Card from "../UI/Card";
import Title from "../UI/Title";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="appear">
      <Title></Title>
      <Card className="bg-white">
        <div className={classes.formWrapper}>
          <h1>Đăng Nhập</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email của bạn" />
            <input type="password" placeholder="Mật khẩu" />
            <button className={classes.submitbtn} type="submit">
              Đăng Nhập
            </button>
            {err && <span>Something went wrong</span>}
          </form>
          <p className={classes.p}>
            Bạn chưa có tài khoản?{" "}
            <span>
              <Link to="/register">Đăng Ký</Link>
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
