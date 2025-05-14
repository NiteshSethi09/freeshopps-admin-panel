import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TiDocument } from "react-icons/ti";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuNewspaper } from "react-icons/lu";
import { TbBriefcase } from "react-icons/tb";
import { LuFileQuestion } from "react-icons/lu";

import type { IconType } from "react-icons/lib";

interface INavlink {
  title: string;
  url: string;
  icon: IconType;
  children: {
    title: string;
    url: string;
  }[];
}

const Sidebar = () => {
  const items: INavlink[] = [
    {
      title: "Article",
      url: "/dashboard/article",
      icon: LuNewspaper,
      children: [],
    },
    {
      title: "Blog",
      url: "",
      icon: TiDocument,
      children: [
        {
          title: "Blog Category",
          url: "/dashboard/blog-category",
        },
        {
          title: "Blog Page",
          url: "/dashboard/blog-page",
        },
        {
          title: "Blog",
          url: "/dashboard/blog",
        },
      ],
    },
    {
      title: "Career",
      url: "",
      icon: TbBriefcase,
      children: [
        {
          title: "career",
          url: "/dashboard/career",
        },
        {
          title: "career openings",
          url: "/dashboard/career-openings",
        },
        {
          title: "career openings category",
          url: "/dashboard/career-openings-category",
        },
      ],
    },
    {
      title: "FAQ's",
      url: "/dashboard/faqs",
      icon: LuFileQuestion,
      children: [],
    },
  ];

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-[calc(20rem-4px)] h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full pl-20 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <div className="mb-3">
          <img src={"/freeShoppsLogo.png"} alt="" className="w-20 ml-6 mt-5" />
        </div>
        <ul className="space-y-4 font-medium">
          {items.map((item) => {
            if (item.children?.length > 0) {
              return <CustomDropdownNavLink key={item.title} data={item} />;
            } else {
              return (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-white bg-[#199FB1] block rounded-xl"
                      : "block";
                  }}
                >
                  <div className="px-7 py-3 flex bg-inherit rounded-xl">
                    <item.icon size={22} className="mr-5" />
                    <span className="font-semibold text-lg">{item.title}</span>
                  </div>
                </NavLink>
              );
            }
          })}
        </ul>
      </div>
    </aside>
  );
};

function CustomDropdownNavLink({ data }: { data: INavlink }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`flex items-center w-full px-7 py-3 rounded-xl ${
          data.children.some((link) => link.url === location.pathname)
            ? "text-white bg-[#199FB1] rounded-xl"
            : "bg-inherit"
        }`}
      >
        <data.icon size={22} className="mr-5" />
        <span className="flex-1/12 text-start font-semibold text-lg">
          {data?.title}
        </span>
        {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {dropdownOpen && (
        <div className="absolute z-10 top-full mt-2 bg-white text-black rounded-xl shadow-md w-full overflow-hidden">
          {data.children.map((link) => (
            <NavLink
              key={link.title}
              to={link.url}
              className="block px-4 py-2 hover:bg-gray-100 text-[#979797] font-medium text-lg"
              onClick={() => setDropdownOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
