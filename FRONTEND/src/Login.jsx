import { Link } from "react-router-dom";
import { User, Lock } from "lucide-react";
import LoginButton from "./Components/Buttons/LoginButton.jsx";
import InputFull from "./Components/Inputs/InputFull.jsx";

function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-200 font-[Poppins]">
      <div className="inset-shadow-md z-10 flex h-auto w-[90%] flex-col items-center justify-center space-y-5 rounded-4xl bg-neutral-100 px-5 py-10 inset-shadow-xlar md:w-[45%] lg:h-115 lg:w-110 lg:p-0">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="GCA Logo" className="w-20" />
          <p className="font-[PoppinsBold] text-sm leading-4 lg:text-lg">
            GRACE CHRISTIAN <br /> ACADEMY OF CAVITE INC.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-y-10">
          <h1 className="font-[PoppinsBold] text-xl">Welcome</h1>
          <div className="flex w-[95%] flex-col items-center gap-y-2 lg:gap-y-3">
            <h1 className="text-2xs opacity-60 lg:text-xs">
              Login using your Grace Christian Academy Account
            </h1>

            <div className="relative w-full lg:w-[90%]">
              <User className="absolute top-1/2 left-3 hidden -translate-y-1/2 text-gray-400 lg:block" />
              <InputFull
                InputType={"text"}
                InputId={"TeacherUsername"}
                InputPlaceholder={"Username"}
              />
            </div>

            <div className="relative w-full lg:w-[90%]">
              <Lock className="absolute top-1/2 left-3 hidden -translate-y-1/2 text-gray-400 lg:block" />
              <InputFull
                InputType={"password"}
                InputId={"TeacherPassword"}
                InputPlaceholder={"Password"}
              />
            </div>

            <Link to="Dashboard" className="w-full lg:w-[90%]">
              <LoginButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
