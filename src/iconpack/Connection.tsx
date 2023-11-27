import { SVGProps } from "react";

export function Connection(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_14_230)">
        <path
          d="M9.33203 6.00016C9.33203 6.35378 9.19156 6.69292 8.94151 6.94297C8.69146 7.19302 8.35232 7.3335 7.9987 7.3335H3.9987L1.33203 10.0002V2.66683C1.33203 1.9335 1.93203 1.3335 2.66536 1.3335H7.9987C8.35232 1.3335 8.69146 1.47397 8.94151 1.72402C9.19156 1.97407 9.33203 2.31321 9.33203 2.66683V6.00016Z"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9974 6.00012H13.3307C13.6844 6.00012 14.0235 6.1406 14.2735 6.39065C14.5236 6.6407 14.6641 6.97983 14.6641 7.33346V14.6668L11.9974 12.0001H7.9974C7.64377 12.0001 7.30464 11.8596 7.05459 11.6096C6.80454 11.3595 6.66406 11.0204 6.66406 10.6668V10.0001"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_230">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
