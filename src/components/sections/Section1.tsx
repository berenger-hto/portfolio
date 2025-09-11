import {Container} from "@/components/ui/Container.tsx";
import {Button} from "@/components/ui/button.tsx";
import type {ReactNode} from "react";
import {Profil} from "@/components/ui/Profil.tsx";
import {scrollToContact} from "@/functions/scrollToContact.ts";

type Social = {
    name: string
    icon: ReactNode
    link: string
}

export function Section1() {
    const socials: Social[] = [
        {
            name: "Facebook",
            icon: <svg role="img" fill="#0866FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>,
            link: "https://www.facebook.com/Berenger.hto"
        },
        {
            name: "Github",
            icon: <svg role="img" className="text-[#181717] dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
            link: "https://github.com/berenger-hto"
        },
        {
            name: "WhatsApp",
            icon: <svg role="img" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
            link: "https://wa.me/2290190817575"
        },
        {
            name: "X",
            icon: <svg role="img" className="text-[#00000] dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
            link: "https://x.com/llsberenger"
        }
    ]

    return <Container className="flex items-center justify-center gap-15 max-[930px]:flex-col">
        <div className="max-[930px]:text-center">
            <div
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 flex items-center justify-center gap-2 rounded-4xl py-2 px-4 hover:opacity-75 cursor-pointer duration-200 w-30 max-930-center">
                <div className="bg-green-400 rounded-full animate-pulse h-2 w-2"></div>
                <p className="text-sm">Disponible</p>
            </div>
            <div className="my-6">
                <p className="text-6xl/17 font-bold !font-[Cossette_Texte] max-[1040px]:text-5xl/14 max-[770px]:text-4xl">
                    Salut, Je suis développeur web fullstack
                    <span className="text-3xl">&copy;</span>
                </p>
            </div>
            <div className="my-7">
                <p className="text-gray-500 text-sm/5 max-[930px]:text-xl">
                    J'ai 3 ans d'expérience en travaillant sur des projets utiles et réfléchis avec des startups et des
                    marques connues
                </p>
            </div>
            <Button className="cursor-pointer" onClick={scrollToContact}>Contactez-moi</Button>
        </div>
        <div className="flex gap-2 max-555-align">
            <div className="w-[220px] max-[555]:w-[300px]">
                <div
                    className="flex flex-col justify-between h-[250px] rounded-xl bg-card p-6 hover:opacity-80 duration-200">
                    <div>
                        <p className="text-lg">Porto-Novo</p>
                        <p className="text-[12px]">Bénin, Afrique</p>
                    </div>
                    <div>
                        <Button variant="ghost" className="bg-gray-200 dark:bg-transparent h-8 uppercase font-semibold my-3 cursor-pointer">Dev module</Button>
                        <Button variant="ghost" className="bg-sky-100 dark:bg-transparent dark:text-neutral-300 h-8 uppercase font-semibold cursor-pointer">$50 - $100/HR</Button>
                    </div>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2 max-[555]:grid-cols-6">
                    {socials.map(s => (
                        <div
                            className="h-12 w-12 bg-card rounded-full flex items-center justify-center cursor-pointer hover:opacity-50 duration-200">
                            <a href={s.link} target="_blank" className="shrink-0 h-7 w-7" title={s.name}>
                                {s.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Profil />
        </div>
    </Container>
}