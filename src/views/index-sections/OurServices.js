import React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col, Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,} from "reactstrap";

function OurServices() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div
        className="section section-signup"
        style={{
          // backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundColor: "#ffff" ,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
          <Col>

            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <img className="imageDental" src="https://static.wixstatic.com/media/0648cd_21f8be0b671148be8099107599a3da12~mv2.png/v1/fill/w_120,h_105,al_c,q_85,usm_0.66_1.00_0.01/Artboard%203_150x.webp"/>
                  <h2 className="subtitle">
                    Estética Dental prueba
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
                  Ortodoncia
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
                    Cirugía Oral
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
                    Implantes Dentales
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
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/more-treatments"
              outline
              size="lg"
              tag={Link}
            >
              Más Tratamientos
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default OurServices