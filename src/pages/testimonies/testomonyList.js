import img1 from '../../assets/before_and_after/1/1.jpg';
import img2 from '../../assets/before_and_after/2/2.jpg';
import img3 from '../../assets/before_and_after/3/3.jpg';
import img4 from '../../assets/before_and_after/4/4.jpg';
const images = [img1, img2, img3, img4];


const writtenTestimonies = [
  {
    personName: "Juanita Perez",
    wrTestimony: '"¡Increíble transformación! Gracias a los programas de fitness de ElevateHer, logré superar mis metas de acondicionamiento físico en tiempo récord. ¡Una experiencia motivadora y efectiva!"'
  },
  {
    personName: "Mariana Vélez",
    wrTestimony: '"He probado muchos entrenamientos, pero ninguno como los de EmpowerHer. Los entrenamientos que me envío Ana fueron retadores pero sacaron mi major version. Gracias por tomarse el tiempo cada semana en los chequeos y mantenerme responsible de mis acciones. Hizo que cada session fuera desafiante y divertida. ¡Altamente recomendado!"',
  },
  {
    personName: "Ana Restrepo",
    wrTestimony: `"Hace 4 años, tenía una autoestima baja, me sentía deprimida y tenía dificultades con mi alimentación y entrenamiento. El problema era que estaba tratando de todo para mejorar. Quería lucir más atlética y en la mejor forma posible, pero simplemente no parecía poder llegar allí, incluso si intentaba restringir mi dieta y entrenar lo más duro posible. Sabía que necesitaba cambiar algo porque, mentalmente, no estaba en el lugar correcto para alcanzar mis metas. 
    Avancemos hasta hoy y ahora me siento más empoderada de mi salud, tengo una relación saludable con la comida y físicamente estoy en el mejor momento de mi vida. Pero, lo más importante, tengo una comprensión completa de lo que significa tener mi bienestar físico, social y mental en equilibrio: Aqui estoy para ayudarte"`,
  },
  {
    personName: "Juan Diego Restrepo",
    wrTestimony: '"¡Fantástico! EmpowerHer no solo me ayudó a alcanzar mis objetivos de pérdida de peso, sino que también me proporcionó una comunidad de apoyo. Resultados tangibles, ¡simplemente lo mejor!"',
  }
];

const finalTestimonies = writtenTestimonies.map(({ personName, wrTestimony }, index) => ({
  personName,
  written: wrTestimony,
  img: images[index],
}));


export default finalTestimonies;
