import { IoIosArrowDropdown } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import {
  FaCalendarAlt,
  FaExclamation,
  FaKey,
  FaUser,
  FaUserCog,
} from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { LogOut, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import NotificationBell from "@/assets/notificationBell.svg";
import { useEffect, useState } from "react";
import type { userProfile } from "@/types/userProfile";

const Navbar = () => {
  const [userData, setUserData] = useState<userProfile | null>(null);

  const getUserProfileData = () => {
    const userData = localStorage.getItem("freeshopps_user_data");
    try {
      const user = userData ? JSON.parse(userData) : null;
      setUserData(user);
    } catch (err) {
      console.error("Failed to parse localStorage item:", err);
    }
  };
  useEffect(() => {
    getUserProfileData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("freeshopps_user_data");
    localStorage.removeItem("freeshopps_user_accessToken");

    window.location.href = "/";
  };

  const notificationBellItems = [
    {
      iconGradient: "bg-[linear-gradient(180deg,_#4E96FF_0%,_#80C9FC_100%)]",
      icon: <IoSettingsSharp size={13} fill="white" />,
      label: "Settings",
      subLabel: "Update Dashboard",
    },
    {
      iconGradient: "bg-[linear-gradient(180deg,_#F97FD9_0%,_#FFC1E6_100%)]",
      icon: <FaCalendarAlt size={13} fill="white" />,
      label: "Event Update",
      subLabel: "An event date update again",
    },
    {
      iconGradient: "bg-[linear-gradient(180deg,_#9E8FFF_0%,_#EBCBFF_100%)]",
      icon: <FaUser size={13} fill="white" />,
      label: "Profile",
      subLabel: "Update your profile",
    },
    {
      iconGradient: "bg-[linear-gradient(180deg,_#FF8F8F_0%,_#FFC1C1_100%)]",
      icon: <FaExclamation size={13} fill="white" />,
      label: "Application Error",
      subLabel: "Check Your runnung application",
    },
  ];

  const userMenu = [
    {
      icon: <FaUserCog color="#4E96FF" />,
      label: "Manage Account",
    },
    {
      icon: <FaKey color="#F97FD9" />,
      label: "Change Password",
    },
    {
      icon: <LuRefreshCw color="#9E8FFF" strokeWidth={3} />,
      label: "Activity Log",
    },
    {
      icon: <LogOut color="#FF8F8F" strokeWidth={3} />,
      label: "Log Out",
      onClick: handleLogout,
    },
  ];
  return (
    <nav className="h-28 z-10 sticky top-0 shadow-[0px_4px_4px_0px_#00000040] flex justify-between items-center px-40 bg-white">
      <div className="relative">
        <Search size={15} className="absolute h-full top-0 left-4 opacity-50" />
        <Input
          className="text-sm font-normal w-96 rounded-xl bg-[#F5F6FA] text-[#202224]/50 pl-11"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-x-16">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src={NotificationBell} alt="" className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuLabel className="text-[#404040]">
              Notification
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="border-[#979797]" />
            <DropdownMenuGroup>
              {notificationBellItems.map((item) => (
                <DropdownMenuItem key={item.label}>
                  <div
                    className={`h-9 w-9 rounded-full flex justify-center items-center ${item.iconGradient}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <Label className="text-[#202224] font-semibold text-sm">
                      {item.label}
                    </Label>
                    <p className="text-[#B5B5B5] text-xs font-semibold">
                      {item.subLabel}
                    </p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="border-[#979797]" />
            <DropdownMenuLabel className="text-[#A8A8A8] text-center cursor-pointer">
              See all notification
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center">
          <Avatar className="mr-5">
            <AvatarImage src={userData?.image ?? ""} />
            <AvatarFallback className="text-xs">
              {userData?.firstName.at(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="">
            <Label className="font-extrabold text-base text-[#404040]">{`${userData?.firstName} ${userData?.lastName}`}</Label>
            <div className="flex justify-between">
              <span className="text-[#565656] font-semibold text-sm">
                {userData?.userType}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IoIosArrowDropdown size={18} className="cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-0">
                  <DropdownMenuGroup>
                    {userMenu.map((menu) => (
                      <DropdownMenuItem
                        key={menu.label}
                        className="not-last:border-b rounded-none px-5 py-3 cursor-pointer"
                        onClick={menu.onClick}
                      >
                        {menu.icon}
                        <Label className="text-[#404040] font-semibold text-sm cursor-pointer">
                          {menu.label}
                        </Label>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
