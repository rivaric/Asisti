import { SVGProps } from 'react'

export function Paperclip(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M17.8667 9.2083L10.2084 16.8666C9.27017 17.8048 7.99769 18.3319 6.67087 18.3319C5.34405 18.3319 4.07157 17.8048 3.13337 16.8666C2.19517 15.9284 1.66809 14.656 1.66809 13.3291C1.66809 12.0023 2.19517 10.7298 3.13337 9.79163L10.275 2.64997C10.9005 2.02339 11.7493 1.67095 12.6346 1.67017C13.5199 1.66939 14.3693 2.02033 14.9959 2.6458C15.6224 3.27127 15.9749 4.12003 15.9757 5.00535C15.9765 5.89068 15.6255 6.74006 15 7.36663L7.8417 14.5083C7.52897 14.821 7.10481 14.9967 6.66254 14.9967C6.22026 14.9967 5.79611 14.821 5.48337 14.5083C5.17064 14.1956 4.99494 13.7714 4.99494 13.3291C4.99494 12.8869 5.17064 12.4627 5.48337 12.15L12.5584 5.0833"
        stroke="#484848"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
