import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { axiosInstance } from "@/lib/axiosInstance";

import FreeShoppsLogo from "@/assets/freeShoppsLogo.png";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleFormAction = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axiosInstance.post("/api/v1/admin/login", {
        email,
        password,
      });
      const accessToken = result.data.accessToken;

      localStorage.setItem(
        "freeshopps_user_data",
        JSON.stringify(result.data.data)
      );

      localStorage.setItem("freeshopps_user_accessToken", accessToken);

      if (accessToken) {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      }
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("freeshopps_user_accessToken");

    if (accessToken) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[url(src/assets/backgroundImg.jpg)] bg-size-[100%_100%] bg-no-repeat">
        <Card className="w-[630px]">
          <CardHeader className="px-8">
            <div className="flex items-center gap-6">
              <img src={FreeShoppsLogo} alt="" className="w-32" />
              <div className="">
                <h2 className="text-3xl font-bold text-[#202224]">
                  Login to Account
                </h2>
                <CardDescription className="text-[#656565]/80 font-semibold text-lg">
                  Please enter your email and password to continue
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-14">
            <form onSubmit={handleFormAction}>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-[#202224]/80 text-lg font-semibold"
                >
                  Email Address:
                </Label>
                <Input
                  id="email"
                  placeholder="esteban_schiller@gmail.com"
                  className="border border-[#D8D8D8] rounded-xl h-12 bg-[#F1F4F9] text-[#A6A6A6] placeholder:text-[#A6A6A6]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5 mt-10">
                <div className="flex justify-between">
                  <Label
                    htmlFor="password"
                    className="text-[#202224]/80 text-lg font-semibold"
                  >
                    Password
                  </Label>
                  <Label
                    htmlFor="forgot_password"
                    className="text-[#202224]/60 text-lg font-semibold cursor-pointer"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  className="border border-[#D8D8D8] rounded-xl h-12 bg-[#F1F4F9] text-[#A6A6A6] placeholder:text-[#A6A6A6]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember_password" />
                  <Label
                    htmlFor="remember_password"
                    className="text-[#202224]/60 text-base font-semibold"
                  >
                    Remember Password
                  </Label>
                </div>
              </div>
              <div className="my-14 px-6">
                <Button className="bg-[#199FB1]! w-full h-12 text-lg cursor-pointer">
                  Sign in
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
