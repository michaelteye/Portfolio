import * as React from "react";
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="CurrentColor"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      width={100}
      height={100}
      {...props}
    >
      <path d="M12 2L14.5 9H22L16.5 13L19 20L12 16L5 20L7.5 13L12 9H9.5L12 2Z" />
    </svg>
  );
}
export default Star;
