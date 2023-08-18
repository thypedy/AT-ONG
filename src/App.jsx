import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../img/logo.png"
import Carousel from "react-bootstrap/Carousel";
import Slides from "../img/slide1.jpg";
import Slides2 from "../img/slide2.jpg";
import Slides3 from "../img/dasdasdadsadadsa.png"

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary white">
        <Container fluid>
          <Navbar.Brand href="#"><img src={Logo} style={{Height:"100px", width:"100px"}}/></Navbar.Brand>
  
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end"
              style={{ marginLeft: "650px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Notícias</Nav.Link>
              <NavDropdown title="Mais" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Pesquise aqui"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Slides} />
          
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slides2} />
          
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slides3} />
          
        </Carousel.Item>
      </Carousel>

      <div className="textos">
        <h1>Criança primeiro. Esse é o nosso porquê.</h1>

        <div className="paddings">
          <p>
            A Criança esperança é um grupo de impacto socioambiental que promove
            e inspira um mundo melhor para as crianças. Um mundo sustentável,
            justo, inclusivo, igualitário e plural. Um mundo que celebra e
            protege a democracia, a justiça social, os direitos humanos e das
            crianças com prioridade absoluta. Um mundo que cuida dos seus povos,
            de suas florestas, dos seus mares, do seu ar.
            <br />
          </p>
          <p>
            Vivemos um momento extraordinário de urgências interconectadas com
            cruéis e avassaladoras ameaças. Fome, desigualdade, crise climática,
            ambientes digitais sem regulamentação. Criar um mundo melhor para as
            crianças é buscar transformar esta realidade.
            <br />
          </p>
          <p>
            Somos a reunião de educadores, cineastas, advogados, cientistas,
            jornalistas, administradores, ativistas, comunicadores, designers,
            pedagogos, conteudistas, empreendedores e artistas trabalhando
            juntos todos os dias para promover e inspirar novas possibilidades
            de mundo. Um mundo onde a floresta é viva, as tecnologias são
            centradas no humano, com condições dignas de vida para todos. Um
            mundo melhor para as crianças. Um mundo melhor para todas as
            pessoas.
          </p>
        </div>
      </div>

      <Container fluid className="container">
        <Row>
          <Col md={6} className="content">
            <h1>Utilizando Tecnologias: Relógio Localizador para Crianças</h1>
            <p>
              Com o avanço das redes móveis e dos sistemas de posicionamento
              global (GPS), os relógios localizadores representam uma solução
              prática e eficaz para os pais acompanharem seus filhos de maneira
              remota. Através de um aplicativo no smartphone, os responsáveis
              podem monitorar em tempo real a localização de seus entes
              queridos, garantindo assim uma sensação de proximidade e proteção
              mesmo quando estão fisicamente separados.
            </p>
            <p>
              Além da funcionalidade de rastreamento, o recurso de alerta
              presente no próprio relógio adiciona uma camada extra de
              segurança. Ao tocar em um botão dedicado, a criança pode
              instantaneamente notificar seus pais em situações de emergência ou
              quando se sentir desconfortável. Essa capacidade de comunicação
              imediata oferece aos pais a tranquilidade de que seus filhos podem
              pedir ajuda quando necessário, criando um vínculo de confiança e
              proteção mútua.
            </p>
            <p>
              À medida que a tecnologia continua a evoluir, os relógios
              localizadores desempenham um papel vital na forma como as famílias
              abordam a segurança infantil no mundo digital e móvel de hoje.
              Combinando funcionalidade prática com tranquilidade emocional,
              esses dispositivos representam uma ferramenta valiosa para os pais
              modernos que desejam manter seus filhos seguros e conectados, não
              importa onde estejam.
            </p>
          </Col>
          <Col md={5} className="image-col">
            <div className="image-overlay">
              <img
                src="../img/relogios.jpg"
                alt="Imagem de exemplo"
                className="custom-img"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Guardiãs Infantis. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
