import React, { useState } from "react";
import GlobalButton from "../Atom/GlobalButton";
import { API } from "../../config/api";
import { useMutation } from "react-query";
import swal from "sweetalert";

const Register = ({
  showModalRegister,
  setShowModalRegister,
  setShowModal,
}) => {
  // store data with use state
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/register", form);

      // Handling response here
      console.log("ini response", response);
    } catch (error) {
      // const alert = swal("Good job!", "You clicked the button!", "error");

      // setMessage(alert);
      console.log(error);
    }
  });
  return (
    <>
      {showModalRegister ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[400px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Register</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalRegister(false)}
                  >
                    <span className="text-slate-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={(e) => handleSubmit.mutate(e)}>
                    <input
                      type="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    />
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    />
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    />
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      id="gender"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="femaale">Female</option>
                    </select>
                    <input
                      type="number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    />
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      id="role"
                      className="shadow-md p-3 rounded-md w-full border mb-5 "
                    >
                      <option value="" className="">
                        Role
                      </option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                    <GlobalButton
                      title="Register"
                      styled="w-full py-[9px] mb-5"
                      type="submit"
                    />
                    <p className="text-center">
                      Already have an account ?{" "}
                      <span
                        onClick={() => {
                          setShowModalRegister(false);
                          setShowModal(true);
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

export default Register;
