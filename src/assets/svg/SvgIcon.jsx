const SvgIcon = ({ className = "" }) => (
  <svg
    className={`w-[36px] h-[36px] flex-shrink-0 p-1 ${className}`} // Merge className prop
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
<path
      fill="currentColor"
      stroke="currentColor"
      d="M13.91 8.861a.75.75 0 1 1-1.48-.24.75.75 0 0 1 1.48.24ZM7.321 7.793a.75.75 0 1 1-1.48-.24.75.75 0 0 1 1.48.24Z"
    ></path>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M17.233 5.656a3.493 3.493 0 0 0-6.012-.031L4.99 16.027l5.412.877M9.47 3.935a3.494 3.494 0 0 0-4.969-.317"
    ></path>
  </svg>
);

export default SvgIcon;
