import img1 from '../../assets/before_and_after/1/1.jpg';
import img2 from '../../assets/before_and_after/2/2.jpg';
import img4 from '../../assets/before_and_after/4/4.jpg';
const images = [img1, img2, img4];


const writtenTestimonies = [
  {
    personName: "Juanita Perez",
    wrTestimony: '"¡Increíble transformación! Gracias a los programas de fitness de ElevateHer, logré superar mis metas de acondicionamiento físico en tiempo récord. ¡Una experiencia motivadora y efectiva!"'
  },
  {
    personName: "Mariana Vélez",
    wrTestimony: '"He probado muchos entrenamientos, pero ninguno como los de EmpowerHer. Los entrenamientos que me envío Ana fueron retadores pero sacaron mi mejor version. Gracias por tomarse el tiempo cada semana en los chequeos y mantenerme responsible de mis acciones. Hizo que cada session fuera desafiante y divertida. ¡Altamente recomendado!"',
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
