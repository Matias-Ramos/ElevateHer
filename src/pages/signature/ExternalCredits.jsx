const heropatternsLink = "https://heropatterns.com/";
const svgBckgLink = "https://www.svgbackgrounds.com/";

const ExternalCredits = () => (
    <div id="externalCredits">
        <i>
            Bckg credits:
            <ul>
                <li>
                    <a className="px-1" href={heropatternsLink} target="_blank" rel="noopener noreferrer">
                        heropatterns
                    </a>
                </li>
                <li>
                    <a href={svgBckgLink} target="_blank" rel="noopener noreferrer">
                        svgbackgrounds
                    </a>
                </li>

            </ul>
        </i>
    </div>
)
export default ExternalCredits