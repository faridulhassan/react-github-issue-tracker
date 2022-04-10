import React, { SVGProps } from "react";

export const CircleDotIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  const color = props.color || "#E6E7E9";
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={9} cy={9} r={8.5} stroke={color} />
      <circle cx={9} cy={9} r={2} fill={color} />
    </svg>
  );
};

export const CircleCheckIcon = (
  props: SVGProps<SVGSVGElement>
): JSX.Element => {
  const color = props.color || "#9A41EA";
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={9} cy={9} r={8.5} stroke={color} />
      <path
        d="M13.768 5.233a.791.791 0 0 0-1.122 0L7.598 10.3 5.354 8.048a.791.791 0 0 0-1.122 0 .798.798 0 0 0 0 1.126l2.805 2.815a.79.79 0 0 0 1.122 0l5.609-5.63a.798.798 0 0 0 0-1.126Z"
        fill={color}
      />
    </svg>
  );
};

export const ChatIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  const color = props.color || "#E6E7E9";
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.666 1.667H3.333c-.917 0-1.667.75-1.667 1.666v15L5 15h11.666c.917 0 1.667-.75 1.667-1.667v-10c0-.916-.75-1.666-1.666-1.666Zm0 11.666H5L3.333 15V3.333h13.334v10Z"
        fill={color}
      />
    </svg>
  );
};

export const CheckboxIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  const color = props.color || "#E6E7E9";
  return (
    <svg
      width={18}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.582.42a1.424 1.424 0 0 0-2.02 0L6.477 9.54 2.438 5.487a1.424 1.424 0 0 0-2.02 0 1.437 1.437 0 0 0 0 2.026l5.048 5.067a1.42 1.42 0 0 0 2.02 0L17.582 2.446a1.437 1.437 0 0 0 0-2.026Z"
        fill={color}
      />
    </svg>
  );
};
