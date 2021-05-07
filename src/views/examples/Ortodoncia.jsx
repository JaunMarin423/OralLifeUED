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

function Ortodoncia() {
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
                <h2 className="title">Ortodoncia</h2>
                <h4 className="description">
                  Gracias a ella podemos modificarla  posición de los dientes para
                  mejorar la armonia entre función y estetica de los dientes.
                </h4>
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
                        "url(" + require("assets/img/Ortodoncia/retenedor.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Los tratamientos y la tecnología  avanzan con el tiempo
                        hoy podemos ofrecerte los mejores tratamientos con la mejor tecnología." <br></br>
                      <br></br>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Ortodoncia/ortodoncia.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Ortodoncia/brackets_esteticos.jpg") + ")",
                    }}
                  ></div>
                  <h3>
                    Una armonía que te beneficia en estética y función.
                  </h3>
                  <p>
                    La ortodoncia es una ciencia que nos permite evaluar y
                    modificar la función, posición y estética de nuestra boca.
                    Junto a nuestros especialistas analizaremos el estado de tus dientes y escogeremos la mejor opción de tratamiento para ti.
                    Podrás escoger entre una gran variedad de materiales y tipos de brackts.
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

export default Ortodoncia;
