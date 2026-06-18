import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import { User, Lock } from "lucide-react";
import LoginButton from "./Admin/Components/Buttons/LoginButton.jsx";
import InputFull from "./Admin/Components/Inputs/InputFull.jsx";

function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-200 font-[Poppins]">
      <div className="inset-shadow-md z-10 flex h-115 w-110 flex-col items-center justify-center space-y-5 rounded-4xl bg-neutral-100 inset-shadow-xlar">
        <div className="flex items-center">
          <img src={Logo} alt="GCA Logo" className="w-20" />
          <p className="font-[PoppinsBold] text-lg leading-4">
            GRACE CHRISTIAN <br /> ACADEMY OF CAVITE INC.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-y-10">
          <h1 className="font-[PoppinsBold] text-xl">Welcome</h1>
          <div className="flex w-[95%] flex-col items-center gap-y-3">
            <h1 className="text-xs opacity-60">
              Login using your Grace Christian Academy Account
            </h1>

            <div className="relative w-[90%]">
              <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <InputFull
                InputType={"text"}
                InputId={"TeacherUsername"}
                InputPlaceholder={"Username"}
              />
            </div>

            <div className="relative w-[90%]">
              <Lock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <InputFull
                InputType={"password"}
                InputId={"TeacherPassword"}
                InputPlaceholder={"Password"}
              />
            </div>

            <Link to="Dashboard" className="w-[90%]">
              <LoginButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
