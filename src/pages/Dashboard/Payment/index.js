import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Payment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <p>Primeiro, escolha sua modalidade de ingresso</p>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
