const wrapperStyling = {
    position: "relative",
    height: 0,
    width: "100%",
    paddingBottom: "56.25%",
    overflow: "hidden"
}
const iframeStyling = {
    borderRadius: 7,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
}

const Video = () => (
    <div style={wrapperStyling}>
        <iframe
            style={iframeStyling}
            src="https://www.youtube.com/embed/iaZx5FLPlXo?si=tZWly1OmZDYaRxzh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
        </iframe>
    </div>
)
export default Video

