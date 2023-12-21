const videoWrapperClasses = {
    position: "relative",
    height: 0,
    width: "100%",
    paddingBottom: "56.25%",
    overflow: "hidden"
}
const videoIframeClasses = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
}

const Video = () => (
    <div style={videoWrapperClasses}>
        <iframe
            style={videoIframeClasses}
            src="https://www.youtube.com/embed/iaZx5FLPlXo?si=tZWly1OmZDYaRxzh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    </div>
)
export default Video

