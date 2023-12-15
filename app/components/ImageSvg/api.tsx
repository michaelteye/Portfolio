import * as React from "react";

function Api(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={50}
      viewBox="0 -960 960 960"
      fill="CurrentColor"
      width={50}
      {...props}
    >
      <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-217-58-58 143-143 143 143-58 58-85-85-85 85ZM285-337 142-480l143-143 58 58-85 85 85 85-58 58Zm390 0-58-58 85-85-85-85 58-58 143 143-143 143ZM480-142 337-285l58-58 85 85 85-85 58 58-143 143Z" />
    </svg>
  );
}

export default Api;