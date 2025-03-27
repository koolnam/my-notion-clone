import React from "react";

const Dropdown = ({ items }) => {
  return (
    <div className="relative">
      <div
        className={`absolute left-0 -top-1 z-[1000] mt-1 w-64 p-[6px_4px] bg-[var(--color-navigation-dropdown)] shadow-md rounded-[var(--border-radius-300)] opacity-0 pointer-events-none group-hover:pointer-events-auto transform scale-95 transition-transform duration-150 ease-in-out ${
          items?.length > 0
            ? "group-hover:opacity-100 group-hover:scale-100"
            : ""
        } bg-white`}
      >
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-2 rounded-md hover:bg-gray-100"
          >
            <div className="flex items-start gap-2">
              {item.img && (
                <div className="flex-shrink-0 border border-gray-200 rounded-sm bg-white p-1 mb-[1px]">
                  {item.img}
                </div>
              )}
              <div>
                <div className="font-medium">{item.SubMainTitle}</div>
                {item.SubParagraph && (
                  <div className="text-sm text-gray-500">
                    {item.SubParagraph}
                  </div>
                )}
              </div>
            </div>

            {item.subItems && (
              <div className="ml-6 mt-2">
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="text-sm text-gray-700 hover:text-gray-900"
                  >
                    {subItem.SubMainTitle}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
