import { ArrowRight, Mail, LockKeyhole} from "lucide-react"
import InputField from "./InputField"
import OAuthButton from "./OAuthButton"
import googleLogo from "../../assets/icons/google_logo.png"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { decodeToken } from "../../utils/jwt"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/AuthContext";
import { login as loginApi } from "../api/auth";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await loginApi({
        email,
        password
    });
    
    login(response.data.token);
    const decoded = decodeToken(response.data.token);

    if (decoded.role === "ROLE_ADMIN") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-full max-w-[470px] rounded-[36px] bg-white px-10 py-12 shadow-[0_16px_60px_rgba(103,55,183,0.12)]">
      <h2 className="text-[42px] font-bold leading-tight text-[#242424]">
        Welcome Back,
        <br />
        Genius!
      </h2>

      <p className="mt-2 text-[15px] text-[#777]">
        Kwizbot missed your brilliant ideas!
      </p>

      <form onSubmit={handleLogin} className="mt-10 space-y-6">
        <InputField
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="genius@kwizzy.com"
          icon={Mail}
        />

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-[#555]">
              Password
            </label>

            <button
              type="button"
              className="text-xs font-medium text-[#8f39b7] hover:underline"
            >
              Forgot?
            </button>
          </div>

          <InputField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            icon={LockKeyhole}
          />
        </div>

        <button
          type="submit"
          className="flex h-16 w-full items-center justify-center gap-2 rounded-full bg-[#FFC53D] text-xl font-semibold text-[#8f39b7] transition-colors hover:bg-[#f5bc2d]"
        >
          Enter the Lab
          <ArrowRight size={22} />
        </button>
      </form>

      <div className="my-8 flex items-center">
        <div className="h-px flex-1 bg-[#ececec]" />

        <span className="mx-5 text-xs font-semibold tracking-wider text-[#999]">
          OR JOIN THE FUN WITH
        </span>

        <div className="h-px flex-1 bg-[#ececec]" />
      </div>

      <OAuthButton
        icon={googleLogo}
        provider="Google"
        // onClick={handleGoogleLogin}
      />

      <p className="mt-8 text-center text-sm text-[#777]">
        New to the playground?{" "}

        <Link
          to="/signup"
          className="font-semibold text-[#8f39b7] hover:underline"
        >
          Sign Up Free
        </Link>
      </p>
    </div>
  )
}