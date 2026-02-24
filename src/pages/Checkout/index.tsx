import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";

import { usePurchaseMutation } from "../../services/api";
import type { RootReducer } from "../../store";
import {
  formatPrice,
  getTotalPrice,
} from "../../components/ProductsList/fomartPrice";

import Button from "../../components/Button";
import Card from "../../components/Card";

import barIcon from "../../assets/images/icon-barcode.png";
import cardIcon from "../../assets/images/icon-credit-card.png";

import * as S from "./styles";

type Installments = {
  quantity: number;
  amount: number;
  formattedAmount: string;
};

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false);

  const [purchase, { isSuccess, data }] = usePurchaseMutation();

  const { items } = useSelector((state: RootReducer) => state.cart);

  const [installments, setInstallments] = useState<Installments[]>([]);

  const totalPrice = getTotalPrice(items);

  const form = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      cpf: "",
      deliveryEmail: "",
      confirmDeliveryEmail: "",
      cardOwner: "",
      cpfCardOwner: "",
      cardDisplayName: "",
      cardNumber: "",
      expiresMonth: "",
      expiresYear: "",
      cardCode: "",
      installments: 1,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa conter pelo menos 5 caracteres")
        .required("O campo é obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("O campo é obrigatório"),
      cpf: Yup.string()
        .min(14, "O campo precisa conter 14 caracteres")
        .max(14, "O campo precisa conter 14 caracteres")
        .required("O campo é obrigatório"),
      deliveryEmail: Yup.string()
        .email("E-mail inválido")
        .required("O campo é obrigatório"),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref("deliveryEmail")], "Os e-mails são diferentes")
        .required("O campo é obrigatório"),

      cardOwner: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema,
      ),
      cpfCardOwner: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema,
      ),
      cardDisplayName: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema,
      ),
      cardNumber: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema,
      ),
      expiresMonth: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema,
      ),
      expiresYear: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema,
      ),
      cardCode: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema,
      ),
      installments: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required("O campo é obrigatório") : schema,
      ),
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName,
        },
        delivery: {
          email: values.deliveryEmail,
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner,
            },
            expires: {
              month: 1,
              year: 2026,
            },
          },
        },
        products: [
          {
            id: 1,
            price: 200,
          },
        ],
      });
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;
    return hasError;
  };

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installments[] = [];
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: formatPrice(totalPrice / i),
        });
      }
      return installmentsArray;
    };

    if (totalPrice > 0) {
      setInstallments(calculateInstallments());
    }
  }, [totalPrice]);

  if (items.length === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            {" "}
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso!
              <br /> Abaixo estão os detalhes da sua compra:
              <br /> Número do pedido: {data.orderId}
              <br /> Forma de pagamento:
              {payWithCard ? "Cartão de Crédito" : " Boleto Bancário"}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis.
              <br />
              Após a aprovação do pagamento, enviaremos um e-mail contendo o
              código de ativação do jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão.
              <br /> Você receberá o código no e-mail cadastrado em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação.
              <br /> Caso tenha alguma dúvida ou necessite de mais informações,
              por favor, entre em contato conosco através dos nossos canais de
              atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("fullName") ? "error" : ""}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    autoComplete="email"
                    className={checkInputHasError("email") ? "error" : ""}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cpf") ? "error" : ""}
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de Cobrança - conteúdo digital
              </h3>{" "}
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError("deliveryEmail") ? "error" : ""
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">Confirme o-mail</label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError("confirmDeliveryEmail") ? "error" : ""
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                $isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
                type="button"
              >
                <img src={barIcon} alt="boleto" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                $isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={cardIcon} alt="cartão de crédito" />
                Cartão de crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    {" "}
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cardOwner") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          Cpf do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cpfCardOwner") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row $marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cardDisplayName") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cardNumber") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup $maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês do vencimento</label>
                        <input
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("expiresMonth") ? "error" : ""
                          }
                        />
                      </S.InputGroup>{" "}
                      <S.InputGroup $maxWidth="123px">
                        <label htmlFor="expiresYear">Ano do venximento</label>
                        <input
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("expiresYear") ? "error" : ""
                          }
                        />
                      </S.InputGroup>{" "}
                      <S.InputGroup $maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("cardCode") ? "error" : ""
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row $marginTop="24px">
                      <S.InputGroup $maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError("installments") ? "error" : ""
                          }
                        >
                          {installments.map((installment) => (
                            <option key={installment.quantity}>
                              {installment.quantity}X de{" "}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="button"
            title="Clique aqui para finalizar a comprar"
            onClick={() => form.handleSubmit()}
          >
            Finalizar Compra
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
