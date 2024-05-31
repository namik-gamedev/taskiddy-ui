import styled from 'styled-components/native';
import { Typography } from '../../typography';
import { textVariants } from '../../../theme';

export const FormLabel = styled(Typography)`
  margin-bottom: 4px;
  font-weight: 600;
  font-size: ${textVariants.body2.fontSize}px;
`;
