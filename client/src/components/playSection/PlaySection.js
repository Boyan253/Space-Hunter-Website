import "./playSection.css"
export  function PlaySection() {

    return (
        <div className="play-section">
            {/* Background video */}
            <video autoPlay loop muted className="background-video">
                <source src="/materials/video/Shooter-Dungeon-Play-Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Button */}
            <button className="play-button">Play Game</button>
        </div>
    )

}