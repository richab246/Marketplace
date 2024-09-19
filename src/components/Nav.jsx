"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import ThemeBtn from "./ThemeBtn";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Nav = ({ isAuthenticated, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [hovered, setHovered] = useState(false);
  let sideRef = useRef();
  let drop = useRef();
  let toggle = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!sideRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!drop.current?.contains(e.target)) setHovered(false);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!toggle.current?.contains(e.target)) setToggleDropdown(false);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex-between w-full pt-3 shadow-md p-3 bg-white dark:bg-[#050816] dark:shadow-slate-900 sticky top-0 z-50">
      <div className="flex items-center">
        {}
        <button onClick={toggleSidebar} className="ml-2 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 dark:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          isAuthenticated={isAuthenticated}
          reference={sideRef}
        />
      </div>
      {/* Desktop navigation  */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5 items-center">
          <Link href="/dashboard" className="link_btn">
            Dashboard
          </Link>
          <Link href="/submit-ai" className="link_btn">
            Submit AI
          </Link>
          <Link href="/discover" className="link_btn">
            RoadMap
          </Link>
          <Link href="/discover" className="link_btn">
            FAQ
          </Link>
          <ThemeBtn />
          {isAuthenticated ? (
            <div
              onMouseEnter={() => setHovered(true)}
              onClick={() => {
                setHovered(!hovered);
              }}
              type="button"
              className="relative flex items-center gap-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2a3754] p-2 rounded-lg"
            >
              <div className="text-white px-3 py-1 text-[17px] font-semibold bg-[#FF69B4] rounded-full">
                {user.given_name.charAt(0)}
              </div>
              <div className="text-black dark:text-white">
                {user.given_name}
              </div>
              {hovered ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4 mt-1 dark:stroke-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4 mt-1 dark:stroke-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              {hovered && (
                <div ref={drop} className="dropdown">
                  <ul className="py-2">
                    <Link
                      href="/profile"
                      onClick={() => {
                        setHovered(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2a3754] w-full flex dark:text-white items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4 dark:stroke-white"
                      >
                        <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                      </svg>
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => {
                        setHovered(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2a3754] w-full flex dark:text-white items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4 dark:stroke-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Settings
                    </Link>
                    <hr className="my-2 border-gray-300 dark:border-white/[0.2]" />
                    <LogoutLink className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2a3754] w-full flex dark:text-white items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4 dark:stroke-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Logout
                    </LogoutLink>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-1 items-center">
              <RegisterLink>
                <motion.button
                  initial={{ "--x": "100%", scale: 1 }}
                  animate={{ "--x": "-100%" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      mass: 0.1,
                    },
                  }}
                  className="px-6 py-2 rounded-md relative radial-gradient flex gap-2 mr-4 shadow-lg"
                >
                  <span className="text-neutral-100 tracking-wide font-semibold text-[16px] h-full w-full block relative linear-mask">
                    Get Started
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
              </RegisterLink>
              <LoginLink className="mr-4 font-semibold text-[#151030] border border-[#151030] px-5 py-[6px] hover:bg-[#151030] hover:text-white rounded-md cursor-pointer dark:bg-transparent dark:border-[#393744] dark:text-white">
                Sign in
              </LoginLink>
            </div>
          )}
        </div>
      </div>
      {/* Mobile navigation  */}
      <div className="sm:hidden flex relative" ref={toggle}>
        {isAuthenticated ? (
          <div className="flex">
            <div
              className="text-white px-3 py-1 text-[17px] font-semibold bg-[#FF69B4] rounded-full"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              {user.given_name.charAt(0)}
            </div>{" "}
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/dashboard"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="dropdown_link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-4 dark:stroke-white"
                  >
                    <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h-2A1.5 1.5 0 0 1 2 5.5v-2ZM2 10.5A1.5 1.5 0 0 1 3.5 9h2A1.5 1.5 0 0 1 7 10.5v2A1.5 1.5 0 0 1 5.5 14h-2A1.5 1.5 0 0 1 2 12.5v-2ZM10.5 2A1.5 1.5 0 0 0 9 3.5v2A1.5 1.5 0 0 0 10.5 7h2A1.5 1.5 0 0 0 14 5.5v-2A1.5 1.5 0 0 0 12.5 2h-2ZM11.5 9a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1A.75.75 0 0 1 11.5 9Z" />
                  </svg>
                  Dashboard
                </Link>
                <Link
                  href="/submit-ai"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="dropdown_link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-4 dark:stroke-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm6.585 1.08a.75.75 0 0 1 .336 1.005l-1.75 3.5a.75.75 0 0 1-1.16.234l-1.75-1.5a.75.75 0 0 1 .977-1.139l1.02.875 1.321-2.64a.75.75 0 0 1 1.006-.336Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Submit AI
                </Link>
                <Link
                  href="/settings"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="dropdown_link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4 dark:stroke-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Settings
                </Link>
                <Link
                  href="/profile"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="dropdown_link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4 dark:stroke-white"
                  >
                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                  </svg>
                  Profile
                </Link>
                <div className="dropdown_link">
                  <ThemeBtn />
                  Theme
                </div>
                <hr className="border-gray-300 dark:border-white/[0.2]" />
                <LogoutLink className="dropdown_link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4 dark:stroke-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Logout
                </LogoutLink>
              </div>
            )}
          </div>
        ) : (
          <div className="flex">
            <div
              className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            ></div>
            {toggleDropdown && (
              <div className="dropdown">
                <div className="dropdown_link">
                  <ThemeBtn />
                  Theme
                </div>
                <hr className="border-gray-200 w-full" />
                <LoginLink
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M7.25 1.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM11.536 2.904a.75.75 0 1 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061ZM14.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM4.464 9.975a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061ZM4.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM5.525 3.964a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 1.06-1.061l1.061 1.06ZM8.779 7.438a.75.75 0 0 0-1.368.366l-.396 5.283a.75.75 0 0 0 1.212.646l.602-.474.288 1.074a.75.75 0 1 0 1.449-.388l-.288-1.075.759.11a.75.75 0 0 0 .726-1.165L8.78 7.438Z" />
                  </svg>
                  Login
                </LoginLink>
                <hr className="border-gray-200 w-full" />
                <RegisterLink
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="dropdown_link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign up
                </RegisterLink>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
