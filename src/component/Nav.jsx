import React, { useEffect, useState } from "react";
import { Svg } from "../assets/Svg";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { navBarListItems } from "@/ArrayProvider";
import Dropdown from "./Dropdown";
import { MobileDropDown } from "./PhoneResDropDown";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemsId, setSelectedItemsId] = useState([
    navBarListItems[0].id,
  ]);

  const toggle = (id) => {
    setSelectedItemsId((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };


  // hide body overflow when mobile menu is open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="bg-white top-0 sticky z-50 ">
      <div className="flex items-center justify-between p-4 h-[56px]">
        {/* Notion Logo */}
        <div className="flex items-center space-x-2">
          <span>
            <Svg />
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between w-full ml-8">
          <nav>
            <ul className="flex items-center space-x-6">
              {navBarListItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group text-gray-700 hover:text-black-500 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {item.title}
                    <button className="flex items-center gap-2 cursor-pointer">
                      {item.subItems && (
                        <ChevronDown
                          className="transition-transform group-hover:rotate-180"
                          size={16}
                        />
                      )}
                    </button>
                  </div>

                  <div className="">
                    <Dropdown items={item.subItems} />
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <ul>
              <li>
                <button className="text-gray-700hover:text-black-800 hover:bg-[rgba(0,0,0,0.05)] rounded px-2 py-1 transition">
                  Request Demo
                </button>
              </li>
            </ul>
            <div
              style={{
                width: "1px",
                background: "var(--color-border)",
                height: "20px",
                margin: "0 10px",
              }}
            ></div>
            <ul className="flex items-center space-x-4">
              <li>
                <button className="text-gray-700 hover:text-black-800 hover:bg-[rgba(0,0,0,0.05)] rounded px-2 py-1 transition">
                  Login
                </button>
              </li>
              <li>
                <button className="px-4 py-1 text-white bg-black rounded-lg hover:bg-gray-800">
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="w-6 h-6 cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden space-y-2 text-left relative overflow-auto h-[calc(100vh-56px)] flex flex-col justify-between">
          <div>{navBarListItems.map((item, index) => (
            <div key={index}>
              <div className="block">
                <button
                  className="w-full text-left"
                  onClick={() => toggle(item.id)}
                >
                  <div className="px-4 flex justify-between items-center font-semibold py-2 hover:bg-gray-200 border-b border-[rgba(0,0,0,0.1)] h-16">
                    {item.title}

                    {item.subItems && (
                      <ChevronRight
                        className={`transition-transform ${
                          selectedItemsId === item.id ? "rotate-90" : ""
                        }`}
                        size={20}
                      />
                    )}
                  </div>
                </button>
              </div>

              {selectedItemsId.includes(item.id) && (
                <MobileDropDown items={item.subItems} />
              )}
            </div>
          ))}
          <button className="text-gray-700 font-bold py-2 text-left px-4">
            Request Demo
          </button>
          </div>
          <div className="flex flex-col pt-4 space-y-2 sticky bottom-0 border-t border-[rgba(0,0,0,0.1)] bg-white">
            <div className="pt-0 pr-4 pb-4 pl-4 grid gap-4">
              <button className="px-4 py-2 min-h-9 text-white bg-black rounded-md hover:bg-[#31302e]">
                Get Notion free
              </button>
              <button className="text-gray-700 min-h-9 border-[1px] border-solid border-[#00000026] hover:bg-[#f6f5f4]">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// title style all overflow-y: auto;
// padding: 0 16px;
// height: calc(100% - var(--sticky-footer-height

// style={{
//   width: "1px",
//   background: "var(--color-border)",
//   height: "20px",
//   margin: "0 10px", }}
