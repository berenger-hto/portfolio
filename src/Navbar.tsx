import {Button} from "@/components/ui/button.tsx";
import {type HTMLAttributes, useState} from "react";
import {clsx} from "clsx";
import {TextLoop} from "@/components/motion-primitives/text-loop.tsx";
import {scrollToContact} from "@/functions/scrollToContact.ts";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Navbar({className, ...props}: Props) {
    const [direction, setDirection] = useState(-1)

    return <div
        className={clsx("backdrop-blur bg-card/70 dark:bg-card/70 z-[100] w-[95%] md:w-3xl lg:w-5xl h-12 fixed left-1/2 top-12 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between py-9 px-5 shadow-[0px_0px_31px_-9px_rgba(0,_0,_0,_0.1)] rounded-xl", className)} {...props}>
        <div className="flex gap-2 justify-center items-center">
            <TextLoop
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 19,
                    mass: 1.2,
                }}
                interval={3}
                onIndexChange={(index) => {
                    setDirection(index === 0 ? -1 : 1)
                }}
                variants={{
                    initial: {
                        y: -direction * 20,
                        rotateX: -direction * 90,
                        opacity: 0,
                        filter: 'blur(4px)',
                    },
                    animate: {
                        y: 0,
                        rotateX: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                    },
                    exit: {
                        y: -direction * 20,
                        rotateX: -direction * 90,
                        opacity: 0,
                        filter: 'blur(3px)',
                    },
                }}>
                {["Bérenger", "Bérenger Hto"].map(name => (
                    <p className="text-xl font-semibold !font-[Playwrite_IN] max-[400px]:text-[15px]">
                        {name}
                    </p>
                ))}
            </TextLoop>
        </div>
        <div>
            <Button className="cursor-pointer md:h-11 text-sm h-10" onClick={scrollToContact}>Contactez-moi</Button>
        </div>
    </div>
}