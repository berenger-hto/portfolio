import {SectionTitle} from "@/components/ui/SectionTitle.tsx";
import {Container} from "@/components/ui/Container.tsx";
import {MyTimeline} from "@/components/ui/MyTimeline.tsx";

export function Section4() {
    return <Container className="mt-20">
        <SectionTitle>Mon parcours</SectionTitle>
        <MyTimeline />
    </Container>
}