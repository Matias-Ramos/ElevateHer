import img1 from '../../assets/BEFORE AND AFTER/1/1.jpg';
import img2 from '../../assets/BEFORE AND AFTER/2/2.jpg';
import img3 from '../../assets/BEFORE AND AFTER/3/3.jpg';
import img4 from '../../assets/BEFORE AND AFTER/4/4.jpg';
import img5 from '../../assets/BEFORE AND AFTER/5/5.jpg';
const images = [img1, img2, img3, img4, img5];


const writtenTestimonies = [
  {
    personName: "Juan Perez",
    wrTestimony: "¡Increíble transformación! Gracias a los programas de fitness de ElevateHer, logré superar mis metas de acondicionamiento físico en tiempo récord. ¡Una experiencia motivadora y efectiva!"
  },
  {
    personName: "Milagros Sanchez",
    wrTestimony: "He probado muchos entrenamientos, pero ninguno como los de EmpowerHer. Los entrenadores expertos y las clases personalizadas hicieron que cada sesión fuera desafiante y divertida. ¡Altamente recomendado!",
  },
  {
    personName: "Micaela Espíndola",
    wrTestimony: "Me uní a EmpowerHer buscando variedad y resultados. No solo encontré una gran variedad de clases, sino que también logré mejorar mi fuerza y resistencia. ¡Un ambiente amigable y profesional!",
  },
  {
    personName: "Sofía Lezama",
    wrTestimony: "¡Fantástico! EmpowerHer no solo me ayudó a alcanzar mis objetivos de pérdida de peso, sino que también me proporcionó una comunidad de apoyo. Entrenadores motivadores y resultados tangibles, ¡simplemente lo mejor!",
  },
  {
    personName: "Paula Falcone",
    wrTestimony: "Los programas de ElevateHer no solo se enfocan en el físico, sino también en el bienestar mental. Las clases de yoga y meditación me ayudaron a encontrar equilibrio en mi vida agitada. ¡Una joya en el mundo del fitness!",
  }


];

const finalTestimonies = writtenTestimonies.map(({ personName, wrTestimony }, index) => ({
  personName,
  written: wrTestimony,
  img: images[index],
}));


export default finalTestimonies;
