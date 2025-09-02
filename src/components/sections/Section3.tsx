import {Container} from "@/components/ui/Container.tsx";
import {motion} from "motion/react";
import {BorderTrail} from "@/components/motion-primitives/border-trail.tsx";
import {Card, CardDescription, CardFooter, CardHeader} from "../ui/card";
import {SectionTitle} from "@/components/ui/SectionTitle.tsx";

type Items = {
    id: string
    title: string
    description: string
}

interface InfoProps {
    data: Items
}

export function Section3() {
    const items: Items[] = [
        {
            id: "01",
            title: "Site vitrine",
            description: "Un site vitrine professionnel et moderne, conçu sur mesure pour mettre en valeur votre entreprise, vos produits ou vos services. Idéal pour renforcer votre crédibilité en ligne et attirer de nouveaux clients."
        },
        {
            id: "02",
            title: "Application web",
            description: "Développement d’applications web performantes, évolutives et adaptées à vos besoins spécifiques. J’utilise les meilleures technologies pour offrir une expérience fluide, sécurisée et accessible depuis n’importe quel appareil."
        },
        {
            id: "03",
            title: "Application mobile",
            description: "Création d’applications mobiles intuitives et ergonomiques, disponibles sur Android et iOS. L’objectif : offrir à vos utilisateurs une expérience optimale et renforcer la présence digitale de votre projet."
        },
        {
            id: "04",
            title: "Base de données",
            description: "Conception, intégration et optimisation de bases de données robustes pour garantir la sécurité, la rapidité et la fiabilité de vos données. Une architecture pensée pour évoluer avec votre projet."
        },
        {
            id: "05",
            title: "Sécurité & optimisation",
            description: "Audit, optimisation et sécurisation de vos applications et sites web. Amélioration des performances, réduction des temps de chargement et mise en place des meilleures pratiques de cybersécurité."
        }
    ]

    return <Container className="mt-20">
        <SectionTitle>Mes services</SectionTitle>
        <div className="grid grid-cols-2 justify-between gap-8 max-[1166px]:gap-5 max-[580px]:grid-cols-1">
            {
                items.map(i => (
                    <div className="relative" key={i.id}>
                        <Info data={i} />
                    </div>
                ))
            }
        </div>
    </Container>
}

export const animationProps = {
    initial: {
        y: 50,
        opacity: 0
    },
    whileInView: {
        y: 0,
        opacity: 1
    },
    viewport: {
        once: true,
        margin: "0px 0px -80px 0px"
    },

}

const Info = ({data}: InfoProps) => {
    const { id, title, description } = data

    return <motion.div
        whileHover={{scale: 1.02}}
        {...animationProps}
    >
        <Card className="relative overflow-hidden">
            <BorderTrail
                className='bg-linear-to-l from-gray-200 via-gray-500 to-gray-200'
                size={120}
                duration={parseInt(id, 10) + 2}
            />
            <CardHeader>
                <CardDescription className="text-[15px]">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter className="justify-between gap-5 mt-5 text-2xl">
                <p className="font-semibold">{title}</p>
                <p className="text-neutral-500">{id}</p>
            </CardFooter>
        </Card>
    </motion.div>
}