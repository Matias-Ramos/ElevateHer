// Styling
const headerStyling = {
    color: '#fafafa',
    textShadow: '2px 2px 2px rgba(76, 42, 42, 0.7)',
    marginBottom: "1.2rem",
    textAlign: "center"
};

const Header = () => (
    <>
        <h2 style={headerStyling}>
            Qué incluye el programa EMPOWERHER?
        </h2>
        <div className="chevronContainer">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
        </div>
    </>
)

export default Header