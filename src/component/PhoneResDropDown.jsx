export const MobileDropDown = ({ items }) => {
  return (
    <div className="px-4">
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-100"
        >
          {item.img && (
            <div className="flex-shrink-0 border border-gray-200 rounded-sm bg-white p-1 mb-[1px]">
              {item.img}
            </div>
          )}
          <div>
            <div className="font-medium">{item.SubMainTitle}</div>
            {item.SubParagraph && (
              <div className="text-sm text-gray-500">{item.SubParagraph}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileDropDown;
