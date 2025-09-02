import {Navbar} from "@/Navbar.tsx";
import {Section1} from "@/components/sections/Section1.tsx";
import {Section2} from "@/components/sections/Section2.tsx";
import {Section3} from "@/components/sections/Section3.tsx";
import {Section5} from "@/components/sections/Section5.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import {Section6} from "@/components/sections/Section6.tsx";
import {Section7} from "@/components/sections/Section7.tsx";
import {Footer} from "@/components/sections/Footer.tsx";
import {useDarkMode} from "usehooks-ts";
import {useEffect} from "react";

type ToggleType = "add" | "remove"

function App() {
    const {isDarkMode} = useDarkMode()
    const toggleMode = (type: ToggleType) => {
        document.body.classList[type]("dark")
    }

    useEffect(() => {
        if (isDarkMode) toggleMode("add")
        else toggleMode("remove")
    }, [isDarkMode])

    return <>
        <Navbar/>
        <div className="mt-44 max-[930px]:mt-32">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Footer />
        </div>
        <Toaster position="top-center" />
    </>
}

export default App