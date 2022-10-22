import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

export default function Payment() {
  const [isOnline, setIsOnline] = useState(null);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Advise>Primeiro, escolha sua modalidade de ingresso</Advise>
      <Container>
        <Ingresso
          onClick={() => setIsOnline(false)}
          border={!isOnline ? 'none' : '1px solid #cecece'}
          background={!isOnline ? '#FFEED2' : '#ffffff'}
        >
          <h6>Presencial</h6>
          <p>R$ 250</p>
        </Ingresso>
        <Ingresso
          onClick={() => setIsOnline(true)}
          border={isOnline ? 'none' : '1px solid #cecece'}
          background={isOnline ? '#FFEED2' : '#ffffff'}
        >
          <h6>Online</h6>
          <p>R$ 100</p>
        </Ingresso>
      </Container>
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
