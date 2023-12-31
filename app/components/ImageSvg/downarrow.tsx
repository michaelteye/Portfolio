import * as React from "react";
function DownarrowSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={100}
      viewBox="0 -960 960 960"
      width={94}
      fill="currentColor"
      {...props}
    >
      <path d="M480-295.385q-11.615 0-19.654-8.038-8.038-8.038-8.038-19.654 0-11.615 8.038-19.654 8.039-8.038 19.654-8.038t19.654 8.038q8.038 8.039 8.038 19.654 0 11.616-8.038 19.654-8.039 8.038-19.654 8.038Zm-20-150.769V-800h40v353.846h-40ZM224.615-160Q197-160 178.5-178.5 160-197 160-224.615v-96.923h40v96.923q0 9.23 7.692 16.923Q215.385-200 224.615-200h510.77q9.23 0 16.923-7.692Q760-215.385 760-224.615v-96.923h40v96.923Q800-197 781.5-178.5 763-160 735.385-160h-510.77Z" />
    </svg>
  );
}

export default DownarrowSvg;
