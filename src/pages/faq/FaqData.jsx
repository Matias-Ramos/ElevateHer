import { FaPersonCircleQuestion, FaPhoneVolume } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { RiRecycleFill } from "react-icons/ri";
import List from "./List";


const FaqData = [
    {
      id: '0',
      question: 'Cómo saber si soy elegible para la devolución de mi dinero si no estoy satisfecho?',
      answer: 'Si al final de los tres meses no has visto ningún cambio, puedes agendar una llamada y revisaré con mi equipo de acuerdo a nuestra garabtia condicional, si eres elegible para el reembolso. Esto dependerá que hayas asistido a todas nuestras reuniones virtuales, chequeos constantes y demuestres que seguiste el plan de entrenamiento y el plan nutricional al 100%.',
      icon: <GiReceiveMoney />,
    },
    {
      id: '1',
      question: 'Cómo agendo las llamadas semanales?',
      answer:'Te enviaré un link a tu correo o WhatsApp y allí puedes agendar tu primera sesión y seguir agendando tus otras sesiones semanales o cada dos semanas, de acuerdo a tu plan.',
      icon: <FaPhoneVolume />,
    },
    {
      id: '2',
      question: 'Puedo comprar el programa más de una vez?',
      answer:'Absolutamente! Si te encuentras en una posición que requieres más acompañamiento y te gustaría que yo siguiera siendo tu coach, puedes inscribirte y comprarlo nuevamente.',
      icon: <RiRecycleFill />,
    },
    {
      id: '3',
      question: 'Cómo se si este programa es para mi?',
      answer: <List/>,
      icon: <FaPersonCircleQuestion />,
    },
];
export default FaqData;