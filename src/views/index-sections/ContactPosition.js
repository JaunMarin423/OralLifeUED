import React from "react";
// reactstrap components
import { Form, FormGroup, Input, FormText, Button, Container, Row, Col } from "reactstrap";

// core components

function ContactPosition() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Contactenos</h2>
              <h5 className="description">
                Now UI Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Now UI Kit PRO Make
                sure you check all of them and use those that you like the most.
              </h5>
              
                <Form>
                  <FormGroup>
                  <Row>
                    <div className="col">
                      <label htmlFor="InputName">Nombre</label>
                      <Input
                      id="IdName"
                      placeholder="Nombre"
                      type="text"
                      />
                      </div>
                      <div className="col">
                      <label htmlFor="InputLastName">Apellido</label>
                      <Input
                      id="IdLastName"
                      placeholder="Apellido"
                      type="text"
                      />
                      </div>
                  </Row>
                  <br/>
                  <label htmlFor="InputTel">Teléfono</label>
                  <Input
                    id="IdTel"
                    placeholder="Teléfono"
                    type="tel"
                  />
                  <br/>
                  <label htmlFor="InputEmail">Correo</label>
                  <Input
                    id="IdEmail"
                    placeholder="Email"
                    type="email"
                  />
                  <br/>
                  <label htmlFor="InputAsunto">Asunto</label>
                  <Input
                    id="IdAsunto"
                    placeholder="Asunto"
                    type="text"
                  />
                  <br/>
                  <label htmlFor="InputMsj">Mensaje</label>
                  <Input
                    id="IdMsj"
                    placeholder="Mensaje"
                    type="textarea"
                  />
                  <Button
                    className="btn-round mr-1"
                    color="info"
                    href="/nucleo-icons"
                    size="lg"
                    target="_blank"
                  >
                    Enviar
                  </Button>                  
                  </FormGroup>
                </Form>
              
              
            </Col>
            <Col lg="6" md="12">
              <div className="google-maps">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1182.3743901003993!2d-74.10442000235658!3d4.590874274816975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99210e5dcbf3%3A0x30af5100da373828!2sORAL%20LIFE%20Unidad%20Est%C3%A9tica%20Dental!5e0!3m2!1ses!2sco!4v1606156535846!5m2!1ses!2sco" width="570px" height="784px" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactPosition;
