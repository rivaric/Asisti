import { SVGProps } from 'react'

export function History(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        d="M1.75 7C1.75 8.03835 2.05791 9.05339 2.63478 9.91674C3.21166 10.7801 4.0316 11.453 4.99091 11.8504C5.95022 12.2477 7.00582 12.3517 8.02422 12.1491C9.04262 11.9466 9.97809 11.4465 10.7123 10.7123C11.4465 9.97809 11.9466 9.04262 12.1491 8.02422C12.3517 7.00582 12.2477 5.95022 11.8504 4.99091C11.453 4.0316 10.7801 3.21166 9.91674 2.63478C9.05339 2.05791 8.03835 1.75 7 1.75C5.53231 1.75552 4.12357 2.32821 3.06833 3.34833L1.75 4.66667"
        stroke="black"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 1.75V4.66667H4.66667"
        stroke="black"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 4.08331V6.99998L9.33333 8.16665"
        stroke="black"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
