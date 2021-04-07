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

function EsteticaDental() {
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
                <h2 className="title">Estética Dental</h2>
                <h5 className="description">
                  Una sonrisa puede abrirte muchas puertas. juntos haremos que
                  tu sonrisa lo logre.
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
                        "url(" +
                        require("assets/img/Estetica Dental/carillas_dentales.jfif") +
                        ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Estetica Dental/estetica_dental.jpg") +
                        ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Estetica Dental/blanqueamiento_dental.jpg") +
                        ")",
                    }}
                  ></div>
                  <h3>¿ como puedes lograr tu mejor sonrisa ?</h3>
                  <p>
                    todo comienza con una decision, "que quieras verte mejor" la
                    sonrisa es una expresion capaz de traspasar barreras en
                    todas partes del mundo y queremos que tu sonrisa lo haga.
                  </p>
                  <p>
                    Para lograrlo tomaremos varios examenes con el fin de
                    analizar cual es la mejor forma de tu sonrisa conr especto a
                    tu rostro, luego de eso escogeremos cual es el mejor
                    tratamiento para ti.
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

export default EsteticaDental;
