import React, { useContext, useState } from "react";
import GlobalButton from "../Atom/GlobalButton";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { Alert } from "react-bootstrap";

const Login = ({
  showModal,
  setShowModal,
  setShowModalRegister,
  setIsLogin,
}) => {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(LoginContext);
  const [message, setMessage] = useState(null);

  // state for store data
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  // handle for change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  // handle submitfor insert dataa with axios

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const data = await API.post("/login", form);
      const alert = <Alert variant="success">Login berhasil!</Alert>;
      setMessage(alert);
      setShowModal(false);

      let payload = data.data.data;
      console.log("ini data", data);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload,
      });

      navigate("/");

      console.log("isi payload", payload);
      console.log("isi data login", data);
    } catch (error) {
      console.log(error);
      const alert = <Alert variant="danger">Email / password salah!</Alert>;

      setMessage(alert);
    }
  });
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[400px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Login</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-slate-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {message && message}
                  <form>
                    <input
                      type="Email"
                      value={email}
                      name="email"
                      onChange={handleChange}
                      placeholder="Email"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    />
                    <input
                      type="password"
                      value={password}
                      name="password"
                      onChange={handleChange}
                      placeholder="Password"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    />
                    <GlobalButton
                      type="button"
                      title="Login"
                      styled="w-full py-[9px] mb-5"
                      onClick={(e) => handleSubmit.mutate(e)}
                    />
                    <p className="text-center">
                      Don't have an account ?{" "}
                      <span
                        onClick={() => {
                          setShowModalRegister(true);
                          setShowModal(false);
                        }}
                        className="text-blue-500 cursor-pointer"
                      >
                        Click Here
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Login;
