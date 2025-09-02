import {InfiniteSlider} from "@/components/motion-primitives/infinite-slider.tsx";

export function TextSlider() {
    return <div className="mt-25 h-20 flex ">
        <InfiniteSlider speed={70} gap={24}>
            {[...Array(20)].map((_, i) => (
                <p key={i} className="text-4xl !font-[Playwrite_IN] font-bold max-[530px]:text-3xl">Bérenger Hto</p>
            ))}
        </InfiniteSlider>
    </div>
}

