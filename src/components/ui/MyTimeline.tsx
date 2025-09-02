import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline.tsx"

const items = [
    {
        id: 1,
        date: "2017",
        title: "CEP",
        description:
            "Certificat d'Étude Primaire, qui a posé les fondations de mon parcours scolaire et marqué mes premiers pas académiques.",
    },
    {
        id: 2,
        date: "2021",
        title: "BEPC",
        description:
            "Obtention du Brevet d'Étude du Premier Cycle, marquant la fin du secondaire premier cycle et ouvrant la voie vers une orientation scientifique.",
    },
    {
        id: 3,
        date: "2024",
        title: "DT/IMI",
        description:
            "Diplôme de Technicien en Installation et Maintenance Informatique, qui atteste de mes compétences pratiques en montage, dépannage et administration de systèmes informatiques.",
    },
    {
        id: 4,
        date: "2024",
        title: "Licence 1",
        description:
            "Première année de Licence en Système Informatique et Logiciel, durant laquelle j’ai acquis les bases solides en programmation, architecture des ordinateurs et mathématiques appliquées.",
    },
    {
        id: 5,
        date: "2025",
        title: "Licence 2",
        description:
            "Actuellement en deuxième année de Licence en Système Informatique et Logiciel, je renforce mes compétences en développement, algorithmique et gestion de projets logiciels.",
    },
];

export function MyTimeline() {
    return <div className="flex items-center justify-center">
        <Timeline defaultValue={4}>
            {items.map((item) => (
                <TimelineItem
                    key={item.id}
                    step={item.id}
                    className="group-data-[orientation=vertical]/timeline:sm:ms-32"
                >
                    <TimelineHeader>
                        <TimelineSeparator />
                        <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
                            {item.date}
                        </TimelineDate>
                        <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
                        <TimelineIndicator />
                    </TimelineHeader>
                    <TimelineContent>{item.description}</TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    </div>
}
