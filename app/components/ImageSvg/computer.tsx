import * as React from "react";

function Computer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={50}
      viewBox="0 -960 960 960"
      fill="CurrentColor"
      {...props}
      width={50}
    >
      <path d="M132-212v-42h80v-434q0-24.75 17.625-42.375T272-748h516v28H272q-14 0-23 9t-9 23v434h213v42H132Zm471 0q-12.75 0-21.375-8.625T573-242v-348q0-12.75 8.625-21.375T603-620h196q12.75 0 21.375 8.625T829-590v348q0 12.75-8.625 21.375T799-212H603Zm-2-42h200v-338H601v338Zm0 0h200-200Z" />
    </svg>
  );
}

export default Computer;
