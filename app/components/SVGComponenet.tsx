import * as React from "react";


interface SVGprops {
  className?: string,
  width?: string,
}
const SVGComponent :React.FC<SVGprops> = (props) => {

  
  return (
    <svg
    viewBox="-293.079 -142.038 1420.49 668.735"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g
    className="plane"
      transform="matrix(0.815704, -0.003028, 0, 0.689951, 14.909003, -107.281923)"
      style={{}}
    >
      <image
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "rgb(0, 0, 0)",
          fillRule: "nonzero",
          opacity: 1,
          transformBox: "fill-box",
          transformOrigin: "52.2409% 111.529%",
        }}
        vectorEffect="non-scaling-stroke"
        x={-114.5}
        y={-98}
        width={229}
        height={196}
        transform="matrix(0.606402, 0.002643, 0, 0.77293, -293.802678, 135.00458)"
        xlinkHref="data:image/png;base64,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"
      />
      <g
        style={{}}
        vectorEffect="non-scaling-stroke"
        transform="matrix(1.097868, 0, 0, 1.288847, -267.319401, 171.12929)"
      >
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 16.06 0.64)"
          clipPath="url(#CLIPPATH_34)"
        >
          <clipPath id="CLIPPATH_34">
            <rect
              transform="matrix(1 0 0 1 -103.86 122.6)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 10.63 27.45)"
          clipPath="url(#CLIPPATH_35)"
        >
          <clipPath id="CLIPPATH_35">
            <rect
              transform="matrix(1 0 0 1 -222.89 -56.82)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 14.03 -27.9)"
          clipPath="url(#CLIPPATH_36)"
        >
          <clipPath id="CLIPPATH_36">
            <rect
              transform="matrix(1 0 0 1 66.18 270.06)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 -25.01 26.22)"
          clipPath="url(#CLIPPATH_37)"
        >
          <clipPath id="CLIPPATH_37">
            <rect
              transform="matrix(1 0 0 1 -17.71 -248.31)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 -22.84 -31.27)"
          clipPath="url(#CLIPPATH_38)"
        >
          <clipPath id="CLIPPATH_38">
            <rect
              transform="matrix(1 0 0 1 290.08 83.69)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 -51.98 1.78)"
          clipPath="url(#CLIPPATH_39)"
        >
          <clipPath id="CLIPPATH_39">
            <rect
              transform="matrix(1 0 0 1 268.32 -262.35)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 -22.2 12.07)"
          clipPath="url(#CLIPPATH_40)"
        >
          <clipPath id="CLIPPATH_40">
            <rect
              transform="matrix(1 0 0 1 45.42 -153.9)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 -21.23 -14.51)"
          clipPath="url(#CLIPPATH_41)"
        >
          <clipPath id="CLIPPATH_41">
            <rect
              transform="matrix(1 0 0 1 187.89 -0.61)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 -19.43 47.5)"
          clipPath="url(#CLIPPATH_42)"
        >
          <clipPath id="CLIPPATH_42">
            <rect
              transform="matrix(1 0 0 1 -167.16 -335.58)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
        </g>
        <g
          transform="matrix(0.09 0.09 -0.09 0.09 -8.7 -49.94)"
          clipPath="url(#CLIPPATH_43)"
        >
          <clipPath id="CLIPPATH_43">
            <rect
              transform="matrix(1 0 0 1 315.3 266.26)"
              id="clip0_1464_7948"
              x={-400}
              y={-395.4545}
              rx={0}
              ry={0}
              width={800}
              height={790.909}
            />
          </clipPath>
          <desc>{"Created with Fabric.js 5.2.4"}</desc>
          <g
            transform="matrix(4.64682, -4.612439, 4.62963, 4.629629, 3625.73687, -105.122476)"
            id="88d38c68-dacf-4e7f-80a5-bacefc8a1987"
          />
          <g
            transform="matrix(1.858727, -1.844977, 1.851852, 1.851852, 380.433081, 522.418953)"
            id="ece087b4-e7ac-42ca-a8c2-ba52e31fe4b6"
          />
        </g>
      </g>
    </g>
    <desc>{"Created with Fabric.js 5.2.4"}</desc>
    <path
    className="path"
      style={{
        fill: "rgba(216, 216, 216, 0)",
        strokeDasharray: "1, 4",
        stroke: "rgba(0, 0, 0, 0.314)",
        strokeWidth: "0.8px",
      }}
      d="M -275.431 351.685 C -209.722 351.685 -145.948 329.438 -94.496 288.568 C -41.959 246.837 1.063 223.963 40.682 169.816 C 84.467 109.975 61.709 9.627 -4.686 -23.377 C -25.408 -33.678 -21.982 -37.394 -74.738 -35.747 C -147.517 -33.474 -184.431 2.46 -200.086 73.572 C -219.626 162.329 -150.437 215.584 -90.596 226.105 C 85.716 257.103 230.454 206.41 386.596 118.853 C 472.969 70.419 562.465 27.78 654.492 -8.784 C 734.955 -40.753 825.494 -35.095 901.35 6.645 C 974.304 46.788 1150.909 78.735 1233.589 88.617"
    />
  </svg>
  )
};
export default SVGComponent;
