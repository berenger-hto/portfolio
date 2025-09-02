import type {HTMLAttributes} from "react";
import {clsx} from "clsx";

interface Props extends HTMLAttributes<HTMLHeadingElement>{
    children: string
}

export function SectionTitle({children, className, ...props}: Props) {
    return <h1 className={clsx("scroll-m-20 text-center text-4xl tracking-wider font-extrabold text-balance !font-[Bebas_Neue] mb-20", className)} {...props}>
        {children}
    </h1>
}