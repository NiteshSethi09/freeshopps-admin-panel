import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Spinner from "@/components/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("freeshopps_user_accessToken");

    if (!accessToken) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <div className="flex flex-col bg-[url(/wave.svg)] bg-no-repeat bg-size-[100%_auto] ml-[20rem]">
        <Navbar />
        <div className="pt-3 pl-7 pr-40 h-full">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
