// Components
import Panel from './Panel';
// Data
import phasesData from './phasesData';

const PanelMapper = ({ activePhase }) => (
    <div>
        {phasesData.map(phase => (
            <Panel
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

            </Panel>
        ))}
    </div>
)
export default PanelMapper