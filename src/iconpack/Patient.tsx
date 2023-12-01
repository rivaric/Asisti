import { SVGProps } from 'react'

export function Patient(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      {...props}
    >
      <path
        d="M8.93575 8.66667C10.7767 8.66667 12.2691 7.17428 12.2691 5.33333C12.2691 3.49238 10.7767 2 8.93575 2C7.0948 2 5.60242 3.49238 5.60242 5.33333C5.60242 7.17428 7.0948 8.66667 8.93575 8.66667Z"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2691 14.0001C14.2691 12.5856 13.7072 11.229 12.707 10.2288C11.7068 9.22865 10.3502 8.66675 8.93575 8.66675C7.52126 8.66675 6.16471 9.22865 5.16451 10.2288C4.16432 11.229 3.60242 12.5856 3.60242 14.0001"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
