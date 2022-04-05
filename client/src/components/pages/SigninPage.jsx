import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../redux/features/application";

const SigninPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signingIn = useSelector((state) => state.application.signingIn);
  const error = useSelector((state) => state.application.error);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(auth(login, password));
  };
  return (
    <div>
      <div>
        {error}
        <input
          type="text"
          placeholder="type login"
          value={login}
          onChange={handleChangeLogin}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="type password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button onClick={handleSubmit} disabled={signingIn}>
        вход
      </button>
    </div>
  );
};

export default SigninPage;
