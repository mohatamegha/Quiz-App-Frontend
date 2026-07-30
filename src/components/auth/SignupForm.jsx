import { User, Mail, LockKeyhole } from "lucide-react"
import { Link } from "react-router-dom"
import InputField from "./InputField"
import OAuthButton from "./OAuthButton"
import googleLogo from "../../assets/icons/google_logo.png"
import { signup } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react"

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({
      username,
      email,
      password,
    });
    navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  
  return (
    <div className="w-full max-w-[470px] rounded-[36px] bg-white px-10 py-10 shadow-[0_16px_60px_rgba(103,55,183,0.12)]">
      <h2 className="text-[28px] font-bold text-[#242424]">
        Create Account
      </h2>

      <p className="mt-1 text-sm text-[#777]">
        The playground is waiting for you.
      </p>

      <form className="mt-3 space-y-3" onSubmit={handleSubmit}>
        <InputField
          value={username}
          onChange={ (e) => setUsername(e.target.value)}
          label="Username"
          placeholder="Alex Kwizbot"
          icon={User}
        />

        <InputField
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          label="Email Address"
          type="email"
          placeholder="hello@kwizzy.com"
          icon={Mail}
        />

        <InputField
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={LockKeyhole}
        />

        <button
          type="submit"
          className="h-14 w-full rounded-full bg-[#FFC53D] text-sm font-semibold text-[#4a3b00] transition-colors hover:bg-[#f5bc2d]"
        >
          Join the Playground
        </button>
      </form>

      <div className="my-3 flex items-center">
        <div className="h-px flex-1 bg-[#ececec]" />

        <span className="mx-4 text-xs font-medium uppercase text-[#999]">
          Or continue with
        </span>

        <div className="h-px flex-1 bg-[#ececec]" />
      </div>

      <OAuthButton
        icon={googleLogo}
        text="Sign up with Google"
      />

      <p className="mt-4 text-center text-sm text-[#666]">
        Already have an account?{" "}

        <Link
          to="/"
          className="font-semibold text-[#8f39b7] hover:underline"
        >
          Log In
        </Link>
      </p>

      <div className="mt-4 flex justify-center">
        <div className="rounded-full border border-[#eee] px-5 py-2 text-[11px] font-medium uppercase tracking-wider text-[#b6a5bf]">
          🛡 Secure & Student Friendly
        </div>
      </div>
    </div>
  )
}