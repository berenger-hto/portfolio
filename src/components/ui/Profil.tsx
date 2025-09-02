import img from "@/assets/men.jpeg";
import {Tilt} from "@/components/motion-primitives/tilt.tsx";

export function Profil() {
    return <>
        <Tilt rotationFactor={8} isReverse>
            <div className="w-[300px] h-[450px]">
                <img src={img} alt="image" className="size-full rounded-lg object-contain"/>
            </div>
        </Tilt>
    </>
}