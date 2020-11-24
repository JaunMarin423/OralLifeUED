import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              target="_blank"
              id="navbar-brand"
            >
            <img
                alt="100px"
                className="invision-logo"
                src={require("assets/img/logo/oral_life_ued1.png")}
              ></img>
              ORAL LIFE Unidad Estética Dental
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Vamos al inicio
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Agenda tu cita</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Vamos a agendar!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/OralLifeUED"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Danos Like en Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/ued.orallife/?hl=es-la"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Siguenos en Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://api.whatsapp.com/send?phone=573057060487&text=hola,%20me%20gustaria%20mas%20informacion%20de%20tus%20servicios."
                  target="_blank"
                  id="whatsapp-tooltip"
                >
                  <i className="fab fa-whatsapp"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#whatsapp-tooltip">
                  Vamos a WhatsApp
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
