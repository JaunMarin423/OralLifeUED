import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function CirugiaOral() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Cirugía Oral</h2>
                <h5 className="description">
                  Son el conjunto de Procedimientos quirurgicos que se utilizan para tratar enfermedades de los tejidos, dientes muy dañado e
                  impactados o cualquier intervencion que amerite abrir los tejidos.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Cirugia Oral/Cirugia_Oral.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Gracias a las imágenes de diagnóstico como la radiografía panorámica, 
                        podemos diagnósticar y prevenir enfermedades orales." <br></br>
                      <br></br>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Cirugia Oral/Cordales.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Cirugia Oral/cirugia.jfif") + ")",
                    }}
                  ></div>
                  <h3>
                    ¿Cuándo es necesario realizar intervenciones quirúrgicas?
                  </h3>
                  <p>
                    Siempre, antes de cualquier intervención quirúrgica es necesario un examen y un diagnóstico. Dependiendo el diagnóstico nuestros especialistas decidirán si es necesario o no.
                  </p>
                  <p>
                    Para cualquier intervención quirúrgica necesitamos exámenes radiológicos
                    que nos permiten tener una información más clara de lo que está pasando internamente.
                  </p>
                  <p>
                    Junto a nuestros especialistas se evaluará el caso para darle un diagnóstico y planear el tratamiento.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default CirugiaOral;
