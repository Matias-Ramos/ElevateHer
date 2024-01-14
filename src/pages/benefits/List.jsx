import { Row, Col } from "react-bootstrap"

const List = () => (
    <>
        <Row style={{alignItems:"center"}}>
           <Col xs={11} md={6}>
               <div className="benefit-item-list">
                  <ul className="customBullets">
                      <li><b>Programa personalizado</b>:<br />Adaptado a tu estilo de vida para que alcances tus metas de la manera mas directa posible.</li><br />
                      <li><b>Orientación y acompañamiento</b>:<br />Evita sentirte perdida en el gimnasio y recibe apoyo personalizado.</li><br />
                      <li><b>Educación nutricional</b>:<br />Aprende a tomar decisiones saludables, incluso en eventos sociales.</li><br />
                      <li><b>Salud Digestiva</b>:<br />Mejora tu sistema digestivo.</li><br />
                  </ul>
               </div>
           </Col>
           <Col xs={11} md={6}>
               <div className="benefit-item-list">
                  <ul className="customBullets">
                      <li><b>Recursos exclusivos</b>:<br /> Acceso indefinido a herramientas y materiales.</li><br />
                      <li><b>Bienestar emocional</b>:<br />Gestiona el estrés y desarrolla confianza.</li><br />
                      <li><b>Enfoque holístico</b>:<br /> Rompe con la mentalidad de dieta y logra una nutrición según tus necesidades.</li><br />
                  </ul>
               </div>
           </Col>
       </Row>
    </>
)
export default List