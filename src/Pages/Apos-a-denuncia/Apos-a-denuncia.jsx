import { Container, Accordion } from 'react-bootstrap';
import { procedimentos } from './Apos-a-denuncia';
import './Apos-a-denuncia.css';

function AposADenuncia() {
  return (
    <>
      <section className="headerSection">
        <Container className="headerContainer">
          <h1>
            COMO PROCEDER <span style={{ color: "#603fad" }}>APÓS A DENÚNCIA</span>
          </h1>
          <p>Clique nos tópicos abaixo para entender cada etapa do seu processo de proteção.</p>
        </Container>
      </section>

      <section className="py-5">
        {/* Adicionado a classe container do accordion */}
        <Container className="accordion-container">
          <div className="introConteudo text-center mb-5">
            <h2>Próximos Passos</h2>
            <p>
              Após o registro da ocorrência, o caso segue para o juiz em até <strong>48 horas</strong>.
              Veja seus direitos abaixo:
            </p>
          </div>

          {/* ACCORDION COM CLASSES CUSTOMIZADAS */}
          <Accordion flush>
            {procedimentos.map((item) => (
              <Accordion.Item
                eventKey={item.id}
                key={item.id}
                className="accordion-item-custom"
              >
                <Accordion.Header className="accordion-header-custom">
                  {item.titulo}
                </Accordion.Header>

                <Accordion.Body>
                  <div className="accordion-text">
                    <p>{item.conteudo}</p>
                    {item.extra && (
                      <div className="accordion-extra">
                        {item.extra}
                      </div>
                    )}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="text-center mt-5">
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="headerBtn"
              aria-label="Saiba mais sobre Lei Maria da Penha no site do Planalto"
            >
              Saiba Mais
            </a>
          </div>
        </Container>
      </section>

      <section className="mensagemFinal">
        <Container>
          <div className="mensagemConteudo">
            <h3>Sua voz é sua força</h3>
            <p>Continue acompanhando seu processo e utilize os canais de apoio sempre que precisar.</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AposADenuncia;
