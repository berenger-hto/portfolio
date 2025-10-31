import { render } from 'preact'
import "./styles/main.css"
import App from './app.tsx'
import {ErrorBoundary} from "react-error-boundary";
import {Button} from "@/components/ui/button.tsx";

render(<ErrorBoundary fallback={<Error />}>
    <App />
</ErrorBoundary>, document.getElementById('app')!)

function Error() {
    return <div className="h-[100vh] w-full flex items-center justify-center flex-col gap-8">
        <p className="text-3xl font-bold text-center">Une erreur s'est produite ! Recharger la page</p>
        <Button
            onClick={() => location.reload()}
            className="cursor-pointer"
        >
            Recharger la page
        </Button>
    </div>
}