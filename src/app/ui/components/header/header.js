"use client";
import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import Container from "../container/container";
import Button_outline from "../buttons/button_outline";

const navigation = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Palestrantes",
    href: "/#palestrantes",
  },
  // {
  //   name: "Programação",
  //   href: "/programacao",
  // },
  {
    name: "Guia do evento",
    href: "/guia-evento",
  },
  {
    name: "Como chegar",
    href: "/#comoChegar",
  },
  {
    name: "Edições anteriores",
    href: "/",
    subMenu: true,
    subMenuItem: [
      {
        subItem: {
          subName: "Summit 2023",
          subHref: "/summit-2023",
        },
      },
    ],
  },
];

export default function Header() {
  const [headerStiky, setheaderStiky] = useState(false);
  const [subMenuStates, setSubMenuStates] = useState({});
  const menuMobileButton = useRef();
  const pathName = usePathname();

  const handleSubMenuOpen = (name) => {
    setSubMenuStates((prevStates) => ({ ...prevStates, [name]: true }));
  };

  const handleSubMenuClose = (name) => {
    setSubMenuStates((prevStates) => ({ ...prevStates, [name]: false }));
  };

  useEffect(() => {
    const activeStiky = () => {
      if (window.scrollY > 300) {
        setheaderStiky(true);
      } else {
        setheaderStiky(false);
      }
    };

    window.addEventListener("scroll", activeStiky);

    return () => {
      window.removeEventListener("scroll", activeStiky);
    };
  }, []);

  return (
    <>
      <div
        className={`text-lg w-full top-0 z-50  animate-duration-300 ${
          pathName === "/"
            ? `${
                headerStiky
                  ? "bg-white fixed animate-fade-down text-violet-crea-800"
                  : "bg-transparent absolute text-white"
              }`
            : "bg-white sticky animate-fade-down text-violet-crea-800"
        }`}
      >
        <Container>
          <Disclosure as="nav">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-screen-xl py-5 px-4 xl:px-0 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <Link className="w-49" href={"/"}>
                      {pathName === "/" ? (
                        <>
                          {headerStiky ? (
                            <img
                              src={"/brand/Crea_summit_2024_color.png"}
                              className="w-24"
                              alt="Crea Summit 2024 Logo"
                            />
                          ) : (
                            <img
                              src={"/brand/Crea_summit_2024_white.png"}
                              className="w-24"
                              alt="Crea Summit 2024 Logo"
                            />
                          )}
                        </>
                      ) : (
                        <img
                          src={"/brand/Crea_summit_2024_color.png"}
                          className="w-24"
                          alt="Crea Summit 2024 Logo"
                        />
                      )}
                    </Link>

                    <div className="hidden xl:block">
                      <div className="ml-5 flex gap-5 items-baseline">
                        {navigation.map((item) => (
                          <Fragment key={item.name}>
                            {item.subMenu ? (
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                                onMouseEnter={() =>
                                  handleSubMenuOpen(item.name)
                                }
                                onMouseLeave={() =>
                                  handleSubMenuClose(item.name)
                                }
                              >
                                <Menu.Button
                                  className={`h-4 flex items-center text-base px-3 ${
                                    pathName === item.href &&
                                    "font-light hover:font-semibold transition-all"
                                  }`}
                                >
                                  {item.name}
                                </Menu.Button>
                                <Transition
                                  show={subMenuStates[item.name]}
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items
                                    className={`absolute top-10 left-0 w-60 px-5 origin-top-left divide-y divide-gray-100 ${
                                      pathName === "/" && headerStiky
                                        ? "bg-white"
                                        : "bg-white/20"
                                    } backdrop-blur-md bg-white ${
                                      headerStiky && "bg-white"
                                    } shadow-lg focus:outline-none rounded-lg`}
                                  >
                                    {item.subMenuItem.map((subItem) => (
                                      <Menu.Item key={subItem.subItem.subName}>
                                        <Link
                                          href={subItem.subItem.subHref}
                                          className="block text-sm hover:font-medium py-5 transition-all"
                                        >
                                          {subItem.subItem.subName}
                                        </Link>
                                      </Menu.Item>
                                    ))}
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            ) : (
                              <Link
                                href={item.href}
                                target={item.blank ? "_blank" : undefined}
                                className={`h-4 flex items-center text-base px-3 ${
                                  item.first ? "border-none" : ""
                                } ${
                                  pathName === `${item.href}`
                                    ? "font-bold"
                                    : "font-normal hover:font-semibold transition-all"
                                }`}
                              >
                                {item.name}
                                {item.icon && (
                                  <div className="ml-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 35 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </Link>
                            )}
                          </Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-5">
                      <Button_outline
                        href={
                          "https://www.sympla.com.br/crea-summit-2024__2629588"
                        }
                        text={"Ingresso"}
                        icon={<ArrowRightIcon className="size-5" />}
                        className={`items-center rounded-full py-1 md:py-3 px-5 transition-all hidden md:flex ${
                          pathName === "/"
                            ? `${
                                headerStiky
                                  ? "bg-violet-crea-400 hover:bg-violet-crea-400 text-white"
                                  : "bg-white/20 hover:bg-white/10"
                              }`
                            : "bg-violet-crea-400 hover:bg-violet-crea-400 text-white"
                        }`}
                        target={true}
                      />

                      <div className="-mr-2 flex xl:hidden">
                        <Disclosure.Button
                          ref={menuMobileButton}
                          className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-blue-crea-500 hover:text-blue-crea-500 transition-all"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="xl:hidden">
                  <div
                    className={`space-y-7 px-2 py-8 sm:px-5 ${
                      pathName === "/" && "bg-white/20"
                    } backdrop-blur-lg bg-white ${
                      headerStiky
                        ? "bg-white"
                        : `${pathName === "/" && "shadow-lg"}`
                    } focus:outline-none rounded-lg`}
                  >
                    {navigation.map((item) => (
                      <Fragment key={item.name}>
                        {item.subMenu ? (
                          <Disclosure>
                            <Disclosure.Button
                              className={`border-blue-crea-500 h-4 flex items-center text-base px-2`}
                            >
                              {item.name}
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-5 divide-y divide-gray-200">
                              {item.subMenuItem.map((subItem) => (
                                <Link
                                  key={subItem.subItem.subName}
                                  onClick={() =>
                                    menuMobileButton.current.click()
                                  }
                                  href={subItem.subItem.subHref}
                                  className={`py-3 border-blue-crea-500 flex items-center text-base px-2 ${
                                    pathName === `${item.href}`
                                      ? "font-bold border-l-2"
                                      : "font-light"
                                  }`}
                                >
                                  {subItem.subItem.subName}
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </Disclosure>
                        ) : (
                          <Disclosure.Button
                            as="a"
                            href={item.href}
                            className={`border-blue-crea-500 h-4 flex items-center text-base px-2 ${
                              pathName === `${item.href}`
                                ? "text-blue-crea-500 font-bold border-l-2"
                                : "text-blue-crea-500 font-light"
                            }`}
                          >
                            {item.name}
                            {item.icon && (
                              <div className="ml-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 35 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                  />
                                </svg>
                              </div>
                            )}
                          </Disclosure.Button>
                        )}
                      </Fragment>
                    ))}
                    <Button_outline
                      href={
                        "https://www.sympla.com.br/crea-summit-2024__2629588"
                      }
                      text={"Ingresso"}
                      icon={<ArrowRightIcon className="size-5" />}
                      className={`items-center justify-between rounded-full py-1 md:py-3 px-5 transition-all mt-5 w-full flex md:hidden ${
                        pathName === "/"
                          ? `${
                              headerStiky
                                ? "bg-violet-crea-400 hover:bg-violet-crea-400 text-white"
                                : "bg-white/20 hover:bg-white/10"
                            }`
                          : "bg-violet-crea-400 hover:bg-violet-crea-400 text-white"
                      }`}
                      target={true}
                    />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </Container>
      </div>
    </>
  );
}
