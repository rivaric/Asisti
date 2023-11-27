import { SVGProps } from 'react'

export function Primary(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8.66667 1.33368L2 9.33368H8L7.33333 14.667L14 6.66701H8L8.66667 1.33368Z"
        stroke="#608674"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
