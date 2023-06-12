import { useState } from "react";
import classes from "../css/LoginRegister.module.css";
import Card from "../UI/Card";
import Title from "../UI/Title";
import img from "../assets/img-ph.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (error) {
            console.log("getDownloadURL err");
            console.log(error);
            setErr(true);
          }
        });
      });
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="appear">
      <Title></Title>
      <Card className="bg-white">
        <div className={classes.formWrapper}>
          <h1>Đăng Ký</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Tên người dùng" />
            <input type="email" placeholder="Email của bạn" />
            <input type="password" placeholder="Mật khẩu" />
            <label htmlFor="file" className={classes.file}>
              <p>
                <span>
                  <img src={img} alt="" />
                </span>{" "}
                Upload Avatar của bạn
              </p>
            </label>
            <input type="file" id="file" />
            <button className={classes.submitbtn}>Đăng ký</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p className={classes.p}>
            Bạn đã có tài khoản?{" "}
            <span>
              <Link to="/login">Đăng nhập ngay</Link>
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Register;
