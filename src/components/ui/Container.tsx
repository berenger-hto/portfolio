import type {HTMLAttributes} from "react";
import {clsx} from "clsx";

export function Container({className, ...props}: HTMLAttributes<HTMLDivElement>) {
    return <div className={clsx("w-6xl m-auto px-3 py-0 max-[1155px]:w-5xl max-[1046px]:container", className)} {...props}>
        {props.children}
    </div>
}