import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import Button from '../../../components/Form/Button';

export default function Payment() {
  const [isPresencial, setIsPresencial] = useState(null);
  const [isWithHotel, setIsWithHotel] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [ticketType, setTicketType] = useState(null);
  const [ticketCost, setTicketCost] = useState(null);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {isConfirmed === true ? (
        <>
          <Advise>Ingresso escolhido</Advise>
          <TicketInfo>
            <h1>{ticketType}</h1>
            <h2>R$ {ticketCost}</h2>
          </TicketInfo>
        </>
      ) : (
        <>
          <Advise>Primeiro, escolha sua modalidade de ingresso</Advise>
          <Container>
            <Ingresso
              onClick={() => {
                setIsPresencial(true);
                setTicketType('Presencial + Sem Hotel');
                setTicketCost('250');
              }}
              border={isPresencial ? 'none' : '1px solid #cecece'}
              background={isPresencial ? '#FFEED2' : '#ffffff'}
            >
              <h6>Presencial</h6>
              <p>R$ 250</p>
            </Ingresso>
            <Ingresso
              onClick={() => {
                setIsPresencial(false);
                setTicketType('Online');
                setTicketCost('100');
              }}
              border={!isPresencial ? 'none' : '1px solid #cecece'}
              background={!isPresencial ? '#FFEED2' : '#ffffff'}
            >
              <h6>Online</h6>
              <p>R$ 100</p>
            </Ingresso>
          </Container>
          {isPresencial ? (
            <>
              <Advise>Ótimo! Agora escolha sua modalidade de hospedagem</Advise>
              <Container>
                <Ingresso
                  onClick={() => {
                    setIsWithHotel(false);
                    setTicketType('Presencial + Sem Hotel');
                    setTicketCost('250');
                  }}
                  border={!isWithHotel ? 'none' : '1px solid #cecece'}
                  background={!isWithHotel ? '#FFEED2' : '#ffffff'}
                >
                  <h6>Sem Hotel</h6>
                  <p>+ R$ 0</p>
                </Ingresso>
                <Ingresso
                  onClick={() => {
                    setIsWithHotel(true);
                    setTicketType('Presencial + Com Hotel');
                    setTicketCost('600');
                  }}
                  border={isWithHotel ? 'none' : '1px solid #cecece'}
                  background={isWithHotel ? '#FFEED2' : '#ffffff'}
                >
                  <h6>Com Hotel</h6>
                  <p>+ R$ 350</p>
                </Ingresso>
              </Container>
            </>
          ) : null}
          {isPresencial !== null ? (
            <>
              <Advise>
                Fechado! O total ficou em <span>R$ {ticketCost}</span>. Agora é só confirmar:
              </Advise>
              <SubmitContainer>
                <Button onClick={() => setIsConfirmed(true)} type="submit">
                  RESERVAR INGRESSO
                </Button>
              </SubmitContainer>
            </>
          ) : null}
        </>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Advise = styled.p`
  font-size: 20px;
  color: #8e8e8e;

  span {
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Ingresso = styled.div`
  border: ${(props) => props.border};
  background-color: ${(props) => props.background};
  border-radius: 20px;
  height: 145px;
  width: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 25px;

  :hover {
    cursor: pointer;
  }

  h6 {
    font-size: 16px;
    color: #454545;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #898989;
  }
`;

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;

const TicketInfo = styled.div`
  width: 300px;
  height: 110px;
  background-color: #ffeed2;
  border-radius: 20px;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 22px;
    color: #454545;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 18px;
    color: #898989;
  }
`;
