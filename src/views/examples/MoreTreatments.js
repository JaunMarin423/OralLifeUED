import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Row,
  Form,
  Col,
  
} from "reactstrap";
import { Link } from "react-router-dom";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function MoreTreatments() {
  const [pills, setPills] = React.useState("2");
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
                <h2 className="title">Más Tratamientos</h2>
                <h5 className="description">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">


              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <h4 className="title text-center">Tratamientos</h4>
                  <div className="nav-align-center">
                  </div>
                </Col>




          <Row>
             <Col>

            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <img className="imageDental" src="https://static.wixstatic.com/media/0648cd_21f8be0b671148be8099107599a3da12~mv2.png/v1/fill/w_120,h_105,al_c,q_85,usm_0.66_1.00_0.01/Artboard%203_150x.webp"/>
                  <h2 className="subtitle">
                    Rehabilitacion
                  </h2>
                </CardHeader>
                <CardBody>

                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    to="/estetica-dental"
                    size="lg"
                    tag={Link}
                  >
                    Más Información
                  </Button>
                </CardFooter>
              </Form>
            </Card>

          </Col>
          <Col>

            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                <img className="imageDental" src="https://static.wixstatic.com/media/0648cd_f8d2cb8cb07645e3ac69ea80a76251de~mv2.png/v1/fill/w_120,h_105,al_c,q_85,usm_0.66_1.00_0.01/Artboard%205_150x.webp"/>
                <h2 className="subtitle">
                  Endodoncia
                </h2>
                </CardHeader>
                <CardBody>

                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    to="/Ortodoncia"
                    size="lg"
                    tag={Link}
                  >
                    Más Información
                  </Button>
                </CardFooter>
              </Form>
            </Card>

          </Col>

          <Col>

            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <img className="imageDental" src="https://static.wixstatic.com/media/0648cd_7e168ba791fe4e59921f148b780b48e1~mv2.png/v1/fill/w_120,h_105,al_c,q_85,usm_0.66_1.00_0.01/Artboard%206_150x.webp"/>
                  <h2 className="subtitle">
                    Periodoncia
                  </h2>
                </CardHeader>
                <CardBody>

                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    to="/cirugia-oral"
                    size="lg"
                    tag={Link}
                  >
                    Más Información
                  </Button>
                </CardFooter>
              </Form>
            </Card>

          </Col>

          <Col>

            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <img className="imageDental" src="https://static.wixstatic.com/media/0648cd_d3ddd44de04a411a9f5f924aad97fd6d~mv2.png/v1/fill/w_120,h_105,al_c,q_85,usm_0.66_1.00_0.01/Artboard%204_150x.webp"/>
                  <h2 className="subtitle">
                    Resinas      
                  </h2>
                </CardHeader>
                <CardBody>

                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    to="/implantes-dental"
                    size="lg"
                    tag={Link}
                  >
                    Más Información
                  </Button>
                </CardFooter>
              </Form>
            </Card>

          </Col>

          </Row>
              </Row>



            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default MoreTreatments;
