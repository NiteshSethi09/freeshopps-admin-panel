import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Spinner from "@/components/Spinner";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="w-full flex flex-col bg-[url(/src/assets/wave.svg)] bg-no-repeat bg-size-[100%_auto] ml-[20rem]">
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
