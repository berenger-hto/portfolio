import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Container} from "@/components/ui/Container.tsx";
import {SectionTitle} from "@/components/ui/SectionTitle.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {type FormEvent, useRef, useState} from "react";
import emailjs from "@emailjs/browser"
import {toast} from "sonner";
import {Loader2Icon} from "lucide-react"

export function Section7() {
    const formRef = useRef<HTMLFormElement | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    /**
     * Send mail
     */
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        let fieldEnter = false
        const envKey = import.meta.env
        const data = Object.fromEntries(
            new FormData(e.currentTarget as HTMLFormElement)
        )
        Object.values(data).forEach(d => {
            if (!d.toString()) fieldEnter = true
        })
        if (fieldEnter) {
            toast.warning("Renseignez tous les champs")
            return
        }

        setIsSubmitting(true)
        if (formRef.current) {
            const form = formRef.current
            emailjs.sendForm(envKey.VITE_EMAIJS_SERVICE_ID, envKey.VITE_EMAILJS_TEMPLATE_ID, form, {
                publicKey: envKey.VITE_EMAILJS_PUBLIC_KEY,
            })
                .then(() => toast.success("Votre message a bien été envoyé !"))
                .catch(() => toast.error("Une erreur s'est produite. Réessayez plus tard"))
                .finally(() => {
                    form.reset()
                    setIsSubmitting(false)
                })
        }
    }

    return <Container className="mt-20 contact">
        <SectionTitle>Contactez-moi</SectionTitle>
        <div className="flex flex-col items-center justify-center">
        <p className="text-gray-500 text-sm/5 max-[930px]:text-xl w-100 text-center">
        </p>
            <Card className="w-full max-w-160">
                <CardHeader>
                    <CardTitle>Coucou 👋</CardTitle>
                    <CardDescription>
                        Merci de donner un maximum de détail sur le projet afin que je puisse évaluer correctement la charge de travail que représente votre projet.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nom</Label>
                                <Input name="name" id="name" type="text" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input name="email" id="email" type="email" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea name="message" id="message" className="h-30" required />
                            </div>
                        </div>
                        <div className="grid gap-2 mt-5">
                            <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
                                {isSubmitting && <Loader2Icon className="animate-spin"/>}
                                {isSubmitting ? "Patientez" : "Envoyez"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    </Container>
}