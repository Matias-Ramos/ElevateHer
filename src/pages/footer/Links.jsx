// Navigation
import { HashLink } from 'react-router-hash-link';

const sections = [
    { id: 'presentation', label: 'Video de EmpowerHer' },
    { id: 'aboutTheProgram', label: 'Acerca del programa' },
    { id: 'warranty', label: 'Garantía condicional' },
    { id: 'benefits', label: 'Beneficios' },
    { id: 'testimonies', label: 'Testimonios' },
    { id: 'CAT', label: 'Agendar una cita' },
];
const Links = () => (
    <ol>
        { sections.map(( section ) => (
            <li key={section.id}>
                <HashLink
                    smooth
                    to={`#${section.id}`}
                >
                    {section.label}
                </HashLink>
            </li>
        ))}
    </ol>
)

export default Links