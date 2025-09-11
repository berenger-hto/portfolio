import {Container} from "@/components/ui/Container.tsx";
import {SectionTitle} from "@/components/ui/SectionTitle.tsx";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {motion} from "motion/react";
import {Button} from "@/components/ui/button.tsx";
import creation1 from "../../assets/creations/1.png"
import creation2 from "../../assets/creations/2.webp"
import creation3 from "../../assets/creations/3.webp"
import {type MouseEvent} from "react";
import {animationProps} from "@/components/sections/Section3.tsx";
import {toast} from "sonner";

type Item = {
    name: string
    description: string
    github: string
    image: string
    date: number
    link?: string
}

type CreationProps = {
    data: Item
}

type PopUpProps = CreationProps

export function Section5() {
    const items: Item[] = [
        {
            name: "Quiz Min",
            description:
                "QuizMin est une petite app interactive et évolutive pour contrôler vérifier votre culture générale et en apprendre plus davanatage. Cultivez-vous plus en testant et en comparant vos connaissances avec vos proches.",
            github: "https://github.com/berenger-hto/quiz",
            date: 2024,
            image: creation1,
            link: "https://quiz-min.onrender.com"
        },
        {
            name: "EcomWeb",
            description:
                "Interface de commerce électronique moderne conçue pour une découverte fluide des produits et un filtrage transparent. 🛒 Cette conception de marché équilibre des visuels épurés avec des composants fonctionnels - des onglets de catégories dynamiques aux curseurs de prix intuitifs et aux filtres de marque intelligents.",
            github: "https://github.com/berenger-hto",
            date: 2024,
            image: creation2
        },
        {
            name: "Pharmacie",
            description:
                "Cette conception d'application mobile est destinée à un magasin de produits de santé. Il comporte des écrans colorés pour des produits tels que les plaquettes solubles « Sleep » et « Relax », avec une navigation simple et des boutons « Acheter maintenant » clairs pour faciliter les achats. Chaque écran présente une incitation à l'action claire, une navigation intuitive et des informations détaillées sur le produit, garantissant une expérience d'achat conviviale.",
            github: "https://github.com/berenger-hto",
            date: 2025,
            image: creation3
        }
    ]

    return <Container className="mt-20">
        <SectionTitle>Mes créations</SectionTitle>
        <div className="grid grid-cols-2 gap-8 max-[1166px]:gap-5 max-[580px]:grid-cols-1">
            {items.map((d, i) => (
                <div key={i}>
                    <Creation data={d}/>
                </div>
            ))}
        </div>
    </Container>
}

const Creation = ({data}: CreationProps) => {
    const { name, github, image, date} = data
    const handleOpenGithub = () => {
        toast(`Redirection vers ${github}`)
        setTimeout(() => location.href = github, 1000)
    }
    return <motion.div
        className='flex flex-col overflow-hidden border rounded-[12px] border-zinc-950/10 bg-card dark:border-zinc-50/10'
        whileHover={{y: -7}}
        {...animationProps}
    >
        <img
            src={image}
            alt={name}
            className='h-65 w-full object-cover'
            loading="lazy"
        />
        <div className='p-4'>
            <div className="flex items-center justify-between gap-4">
                <p className='font-mono font-semibold uppercase leading-snug text-zinc-950 dark:text-zinc-50'>
                    {name}
                </p>
                <p className="font-mono font-semibold uppercase leading-snug text-zinc-950 dark:text-zinc-50">
                    {date}
                </p>
            </div>
            <div className="mt-4 flex gap-2 items-center">
                <Button variant="ghost" size="icon" className="cursor-pointer" onClick={handleOpenGithub}>
                    <svg role="img" className="text-[#181717] dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </Button>
                <PopUp data={data} />
            </div>
        </div>
    </motion.div>
}

const PopUp = ({data}: PopUpProps) => {
    const { name, description, link } = data
    const handleRedirect = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const href = e.currentTarget.href
        const origin = window.location.origin
        if (href.startsWith(origin)) {
           toast("Hey ! 👋", {
               description: `${name} est en développement`
           })
            return
        }

        setTimeout(() => location.href = href, 2000)
        toast(`Redirection vers ${href}`)
    }

    return <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">Plus d'infos</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-xl">{name}</DialogTitle>
                <DialogDescription className="text-base">
                    <p className="mb-4">{description}</p>
                    <a
                        href={link ? link : "#"}
                        target="_blank"
                        className="border-dotted border-gray-900 dark:border-neutral-500 hover:border-b-2 text-gray-900 dark:text-white font-medium"
                        onClick={handleRedirect}
                    >
                        <DialogClose className="cursor-pointer">
                            Consulter l'application
                        </DialogClose>
                    </a>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}