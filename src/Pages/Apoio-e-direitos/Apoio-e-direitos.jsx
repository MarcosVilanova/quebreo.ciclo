import { useState } from 'react';
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap';
import { dadosMecanismos } from './Data';
import './Apoio-e-direitos.css';

export default function ApoioEDireitos() {
  const [mecanismoAtivo, setMecanismoAtivo] = useState(0);

  return (
    <div className="pagina-apoio-direitos">
      <header className="headerSection">
        <div className="headerContainer">
          <h1>
            APOIO E <span className="text-destaque">DIREITOS</span>
          </h1>
          <p>
            Denunciar a violência doméstica é um passo difícil, mas é o início de uma nova
            jornada de proteção e autonomia.
          </p>
        </div>
      </header>

      <section className="py-5 bg-intercalado">
        <Container>
          <Tab.Container id="direitos-tabs" defaultActiveKey="auxilio">
            <Row className="gap-y-4">
              <Col lg={4}>
                <ListGroup className="custom-list-group">
                  <ListGroup.Item action eventKey="auxilio">
                    Auxílio Aluguel (SP)
                  </ListGroup.Item>
                  <ListGroup.Item action eventKey="indenizacao">
                    Indenização Maria da Penha
                  </ListGroup.Item>
                  <ListGroup.Item action eventKey="defensoria">
                    Defensoria Pública
                  </ListGroup.Item>
                  <ListGroup.Item action eventKey="guarda">
                    Guarda dos Filhos
                  </ListGroup.Item>
                  <ListGroup.Item action eventKey="psicologia">
                    Assistência Psicológica
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col lg={8}>
                <Tab.Content className="content-area">
                  <Tab.Pane eventKey="auxilio">
                    <h3>Auxílio Aluguel</h3>
                    <div className="badge-info">R$ 500,00 por seis meses (renovável)</div>
                    <p>
                      Destinado a mulheres com medida protetiva residentes em São Paulo, em
                      situação de vulnerabilidade e com renda familiar anterior à separação de até
                      dois salários-mínimos.
                    </p>
                    <div className="documentos-box">
                      <h6>Documentos Necessários</h6>
                      <ul>
                        <li>Comprovante de renda anterior à separação ou CadÚnico atualizado;</li>
                        <li>Medida protetiva expedida e vigente (Lei Maria da Penha);</li>
                        <li>Comprovante de domicílio no Estado de São Paulo;</li>
                        <li>Relatório psicossocial da assistência social.</li>
                      </ul>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="indenizacao">
                    <h3>Indenização Maria da Penha</h3>
                    <p>
                      Direito a indenização por <strong>danos morais</strong> decorrentes da
                      violência sofrida.
                    </p>
                    <div className="documentos-box">
                      O dano à honra e o abalo emocional são juridicamente presumidos quando
                      comprovada a violência, sendo a indenização fixada pelo juiz criminal, sem
                      necessidade de novas provas em âmbito civil.
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="defensoria">
                    <h3>Defensoria Pública</h3>
                    <p>
                      Assistência jurídica integral, gratuita, prioritária e humanizada para a
                      garantia de direitos.
                    </p>
                    <div className="documentos-box">
                      <h6>Documentos geralmente solicitados</h6>
                      <ul>
                        <li>
                          Pessoais: RG, CPF, comprovante de residência e certidões familiares;
                        </li>
                        <li>
                          Provas da violência: Boletim de Ocorrência, medida protetiva, laudos
                          ou mensagens;
                        </li>
                        <li>Comprovação de renda estável ou ausência de recursos próprios.</li>
                      </ul>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="guarda">
                    <h3>Guarda dos Filhos</h3>
                    <p>
                      A <strong>guarda unilateral</strong> prioriza o melhor interesse e a
                      integridade da criança. Ela afasta a regra da guarda compartilhada se
                      houver histórico de risco comprovado.
                    </p>
                    <div className="documentos-box">
                      A aplicação de medida protetiva em favor da mãe justifica legalmente o
                      pedido de guarda unilateral, mas a regulamentação ou suspensão das visitas
                      paternas dependerá de avaliação técnica e decisão judicial específica.
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="psicologia">
                    <h3>Assistência Psicológica</h3>
                    <p>
                      Direito assegurado que atua diretamente no acolhimento de impactos
                      emocionais profundos gerados pelo contexto abusivo.
                    </p>
                    <div className="documentos-box">
                      <h6>Principais quadros acompanhados</h6>
                      <ul>
                        <li>Transtornos de Ansiedade e Síndrome do Pânico;</li>
                        <li>Estresse Pós-Traumático (TEPT) e Depressão;</li>
                        <li>
                          Fragilização da autoestima e dependência emocional provocada pelo
                          isolamento.
                        </li>
                      </ul>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

   

      <section className="py-5 bg-intercalado">
        <Container className="max-width-md text-center">
          <div className="section-title-wrapper">
            <h2>Mecanismos de Defesa Psíquica</h2>
            <p>
              Respostas psicológicas inconscientes que atuam temporariamente como proteção diante
              do trauma.
            </p>
          </div>

          <div className="mecanismos-nav">
            {dadosMecanismos.map((item, index) => (
              <button
                key={index}
                onClick={() => setMecanismoAtivo(index)}
                className={`mecanismo-tab-btn ${mecanismoAtivo === index ? 'is-active' : ''}`}
              >
                {item.t}
              </button>
            ))}
          </div>

          <div className="mecanismo-display-card">
            <h4>{dadosMecanismos[mecanismoAtivo].t}</h4>
            <p>{dadosMecanismos[mecanismoAtivo].d}</p>
          </div>
        </Container>
      </section>
    </div>
  );
}

