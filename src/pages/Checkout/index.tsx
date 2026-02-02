import Button from "../../components/Button";
import Card from "../../components/Card";
import { InputGroup, Row } from "./styles";

const Checkout = () => {
  return (
    <>
      <div className="container">
        <Card title="Dados de cobrança">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input id="fullName" type="text" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" />
              </InputGroup>{" "}
              <InputGroup>
                <label htmlFor="cpf">Nome completo</label>
                <input id="cpf" type="text" />
              </InputGroup>
            </Row>
            <h3 className="margin-top">Dados de Cobrança - conteúdo digital</h3>{" "}
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input type="email" id="deliveryemail" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="ConfirmDeliveryEmail">Confirme o-mail</label>
                <input type="email" id="ConfirmDeliveryemail" />
              </InputGroup>
            </Row>
          </>
        </Card>
        <Card title="Pagamento">
          <div>
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somente
              após a aprovação do pagamento do boleto.
            </p>
          </div>
        </Card>
        <Button type="button" title="Clique aqui para finalizar a comprar">
          Finalizar Compra
        </Button>
      </div>
    </>
  );
};

export default Checkout;
