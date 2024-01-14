// Styling
const txtContainer = 'mt-auto mb-auto';
const txtSpanOne = 'd-block mb-2';
const txtSpanTwo = 'd-block text-end';

const Text = ({ testimony }) => (
    <div className={txtContainer}>

        <span className={txtSpanOne}>
            {testimony.written}
        </span>

        <span className={txtSpanTwo}>
            {testimony.personName}
        </span>

    </div>
)

export default Text