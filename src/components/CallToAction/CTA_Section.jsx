import CTA_Container from "./CTA_Container"

const CTA_Section = ({ text, stripeLink }) => (
    <section className="ctaSection">
        <CTA_Container
            stripeLink={stripeLink}
            text={text}
            isCTAsection={true} />
    </section>
)

export default CTA_Section