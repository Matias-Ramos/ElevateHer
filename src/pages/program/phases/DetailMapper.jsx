// Components
import TabDetail from './TabDetail';

const phasesDetail = [
    {
        id: 0,
        nutshell: "Evaluación y Compromiso",
        days: "(Días 1-7)",
        objectiveA: "Objetivo: Establecer metas claras y compromiso total."
    },
    {
        id: 1,
        nutshell: "Entrenamiento Físico Personalizado",
        days: "(Días 8-30)",
        objectiveA: "Objetivo: Iniciar la recomposición corporal."
    },
    {
        id: 2,
        nutshell: "Nutrición Consciente y Salud Mental",
        days: "(Días 31-60)",
        objectiveA: "Objetivo: Transformar la relación con la comida y fortalecer la mente.",
        objectiveB: "Sesiones de mindfulness y apoyo emocional."
    },
    {
        id: 3,
        nutshell: "Empoderamiento Integral",
        days: "(Días 61-90)",
        objectiveA: "Objetivo: Consolidar cambios y fortalecer la confianza.",
        objectiveB: "Estrategias para mantener los resultados a largo plazo implementando hábitos sostenibles y autoevaluación continua."
    },

]
const DetailMapper = ({ activePhase }) => (
    <div>
        {phasesDetail.map(phase => (
            <TabDetail
                key={phase.id}
                activePhase={activePhase}
                index={phase.id}>

                {phase.nutshell}<br />
                <i>{phase.days}</i><br />
                {phase.objectiveA}
                {phase.objectiveB && (
                    <>
                    <br />
                    {phase.objectiveB}
                    </>
                )}

            </TabDetail>
        ))}
    </div>
)
export default DetailMapper