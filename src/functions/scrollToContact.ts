export const scrollToContact = () => {
    document.body.querySelector(".contact")?.scrollIntoView({
        behavior: "smooth"
    })
}