// Components
import { Image } from "react-bootstrap"
import beforeAfterImg from '../../assets/before_and_after/3/3.jpg';
// Utils
const altTxt = "Imagen antes y después de Ana";
// Styling
const containerStyling = { fontSize: "1.25rem" }
const imgStyling = "w-100 d-md-none mb-3";

const StoryTelling = () => (
    <div style={containerStyling} id="storyTelling">

        <p>"Hace 4 años, tenía una autoestima baja, me sentía <b>deprimida</b> y tenía dificultades con mi alimentación y entrenamiento. El problema era que estaba tratando de todo para mejorar. Quería lucir más atlética y en la mejor forma posible, pero simplemente no parecía poder llegar allí, incluso si intentaba restringir mi dieta y entrenar lo más duro posible. Sabía que necesitaba cambiar algo porque, mentalmente, no estaba en el lugar correcto para alcanzar mis metas.</p>

        <Image
            src={beforeAfterImg}
            alt={altTxt}
            className={imgStyling}
        />

        <p> Avancemos hasta hoy y ahora me siento más <b>empoderada</b> de mi salud, tengo una relación saludable con la comida y físicamente estoy en el mejor momento de mi vida. Pero, lo más importante, tengo una comprensión completa de lo que significa tener mi bienestar físico, social y mental en equilibrio: <b>Aqui estoy para ayudarte</b>."</p>

    </div>
)
export default StoryTelling