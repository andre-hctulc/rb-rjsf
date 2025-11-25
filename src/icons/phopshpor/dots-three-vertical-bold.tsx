import type { FC, SVGProps } from "react";

export const PiDotsThreeVerticalBold: FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            fill="currentColor"
            viewBox="0 0 256 256"
            {...props}
        >
            <path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path>
        </svg>
    );
};
