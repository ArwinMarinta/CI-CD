import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import logo from "../../assets/Belajar_white 2.svg";

import { useDispatch } from "react-redux";
import { login } from "../../redux/Actions/AuthActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(login(email, password, setIsLoading, navigate));
  };

  return (
    <>
      <div className="flex min-h-screen bg-DARKBLUE04 ">
        <div className="hidden lg:flex justify-center items-center bg-DARKBLUE05 w-[30%] min-h-[100dvh]">
          <div className="flex flex-row font-bold text-5xl">
            <p className="text-BLUE05">ILearn</p>
            <p className="text-YELLOW05">Teach</p>
          </div>
        </div>
        <div className="w-[100%] lg:w-[70%] flex justify-center items-center mx-[23px] lg:px-[200px] 2xl:px-[300px] relative ">
          <form className="w-full" onSubmit={handleLogin}>
            <h1 className="text-[24px] font-bold text-DARKBLUE05 font-Montserrat mb-12 text-center">
              Masuk
            </h1>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="font-Poppins text-[15px] mb-[4px]">
                  ID Admin
                </label>
                <input
                  type="email"
                  className="border w-full py-3 px-4 rounded-2xl"
                  placeholder="ID Admin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="font-Poppins text-[15px] mb-[4px]">
                    Password
                  </label>
                </div>
                <div className="relative ">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border w-full py-3 px-4 rounded-2xl pr-[3.5rem] "
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 "
                  >
                    {showPassword ? (
                      <FiEyeOff className="border-none" />
                    ) : (
                      <FiEye className="border-none" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full font-Poppins bg-DARKBLUE05 text-white py-[10px] rounded-2xl mt-5 hover:bg-DARKBLUE03"
            >
              {isLoading ? "Loading..." : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
