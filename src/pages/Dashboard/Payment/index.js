import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

export default function Payment() {
  const [isPresencial, setIsPresencial] = useState(null);
  const [isWithHotel, setIsWithHotel] = useState(null);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Advise>Primeiro, escolha sua modalidade de ingresso</Advise>
      <Container>
        <Ingresso
          onClick={() => setIsPresencial(true)}
          border={isPresencial ? 'none' : '1px solid #cecece'}
          background={isPresencial ? '#FFEED2' : '#ffffff'}
        >
          <h6>Presencial</h6>
          <p>R$ 250</p>
        </Ingresso>
        <Ingresso
          onClick={() => setIsPresencial(false)}
          border={!isPresencial && isPresencial !== null ? 'none' : '1px solid #cecece'}
          background={!isPresencial && isPresencial !== null ? '#FFEED2' : '#ffffff'}
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
              onClick={() => setIsWithHotel(false)}
              border={!isWithHotel && isWithHotel !== null ? 'none' : '1px solid #cecece'}
              background={!isWithHotel && isWithHotel !== null ? '#FFEED2' : '#ffffff'}
            >
              <h6>Sem Hotel</h6>
              <p>+ R$ 0</p>
            </Ingresso>
            <Ingresso
              onClick={() => setIsWithHotel(true)}
              border={isWithHotel ? 'none' : '1px solid #cecece'}
              background={isWithHotel ? '#FFEED2' : '#ffffff'}
            >
              <h6>Com Hotel</h6>
              <p>+ R$ 350</p>
            </Ingresso>
          </Container>
        </>
      ) : null}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Advise = styled.p`
  font-size: 20px;
  color: #8e8e8e;
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
