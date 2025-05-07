import { createBrowserRouter } from "react-router";
import App from "./App";
import LandingPage from "./components/landing-page/landing-page";

let Router = createBrowserRouter([
    {
        path: "/",
        Component: LandingPage
    }
])

export {Router};