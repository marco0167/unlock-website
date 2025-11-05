import * as React from "react"
interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

const Linkedin: React.FC<SvgComponentProps> = (props: SvgComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={31}
    fill="none"
    viewBox="0 0 30 31"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={"#fff"}
        d="M0 2.22C0 .996.986 0 2.203 0h25.594C29.014 0 30 .995 30 2.22v26.56c0 1.226-.986 2.22-2.203 2.22H2.203A2.212 2.212 0 0 1 0 28.78V2.22Zm9.269 23.73V11.952H4.766V25.95H9.27ZM7.017 10.04c1.57 0 2.548-1.074 2.548-2.417-.03-1.374-.977-2.42-2.518-2.42-1.54 0-2.547 1.046-2.547 2.42 0 1.343.977 2.418 2.488 2.418h.03Zm9.204 15.91v-7.817c0-.418.03-.836.148-1.135.326-.836 1.067-1.702 2.31-1.702 1.63 0 2.282 1.284 2.282 3.166v7.488h4.502v-8.026c0-4.3-2.221-6.3-5.184-6.3-2.388 0-3.46 1.356-4.058 2.31v.048h-.03l.03-.048v-1.982H11.72c.059 1.313 0 13.998 0 13.998h4.502Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="green" d="M0 0h30v31H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Linkedin;
