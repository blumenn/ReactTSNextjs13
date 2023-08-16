import * as timers from "timers";

export const dynamic = "force-static";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "We are some sort of company"
} ;

export default async function About(){
    return(
        <main>
            <h1>About</h1>
            <p>We are a company of some sort</p>

        </main>
    )
}