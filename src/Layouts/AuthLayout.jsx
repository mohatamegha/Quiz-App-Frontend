import MascotPane from "../components/auth/MascotPane";

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F8F2FF] via-white to-[#FFF6F8] p-6">
            <div className="mx-auto flex min-h-[92vh] max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-[0_20px_60px_rgba(139,61,255,0.08)]">
                <MascotPane />
                <div className="flex w-full items-center justify-center lg:w-[45%]">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;