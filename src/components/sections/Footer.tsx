import {clsx} from "clsx";
import {type AnchorHTMLAttributes} from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    me?: boolean
}

export function Footer() {
    return <div className="mt-20 w-full bg-card p-5">
        <div className="flex items-center justify-center">
            <div className="text-[15px] max-[428px]:text-[12px] text-center">
                <p>Design par <Link href="https://dribbble.com/worksbynija">Nija</Link></p>
                <p>Intégration et développement avec ❤️ par <Link me>Bérenger</Link></p>
            </div>
        </div>
    </div>
}

const Link = ({className, me = false, ...props}: LinkProps) => {
    return <a className={clsx("text-neutral-500 border-dotted border-black hover:border-b", className)} target={!me ? "_blank" : ""} href={me ? window.origin : props.href} {...props} />
}