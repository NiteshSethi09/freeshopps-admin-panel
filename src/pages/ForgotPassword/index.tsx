import { useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import FreeShoppsLogo from "@/assets/freeShoppsLogo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleFormAction = async (e: React.FormEvent) => {
    e.preventDefault();
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
                  Forget Password
                </h2>
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
              <div className="flex flex-col space-y-1.5 mt-8">
                <div className="flex justify-between">
                  <Label
                    htmlFor="new_password"
                    className="text-[#202224]/80 text-lg font-semibold"
                  >
                    New Password
                  </Label>
                </div>
                <Input
                  id="new_password"
                  type="password"
                  placeholder="Enter Password"
                  className="border border-[#D8D8D8] rounded-xl h-12 bg-[#F1F4F9] text-[#A6A6A6] placeholder:text-[#A6A6A6]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5 mt-8">
                <div className="flex justify-between">
                  <Label
                    htmlFor="confirm_password"
                    className="text-[#202224]/80 text-lg font-semibold"
                  >
                    Confirm Password
                  </Label>
                </div>
                <Input
                  id="confirm_password"
                  type="password"
                  placeholder="Enter Password"
                  className="border border-[#D8D8D8] rounded-xl h-12 bg-[#F1F4F9] text-[#A6A6A6] placeholder:text-[#A6A6A6]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="my-14 px-6">
                <Button className="bg-[#199FB1]! w-full h-12 text-lg cursor-pointer">
                  Change
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ForgotPassword;
