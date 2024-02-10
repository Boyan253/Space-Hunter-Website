import { PlaySection } from "../../components/playSection/PlaySection";
import { Topbar } from "../../components/topbar/Topbar";

export function Home() {

    return (<>
        <Topbar></Topbar>
        <main>
            <PlaySection></PlaySection>
            <section class="download">
                <h2>Download Shooting Dunger</h2>
                <p>Get ready to experience the ultimate shooting adventure!</p>
                <a href="#" class="download-button">Download Now</a>
            </section>
        </main>
    </>
    )
}