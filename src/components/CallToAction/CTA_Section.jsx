import CTA_Container from "./CTA_Container"

const CTA_Section = ({ text }) => (
    <section>
        <CTA_Container text={text} isCTAsection={true} />
    </section>
)

export default CTA_Section