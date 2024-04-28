import { TextProps } from 'react-native';
import { textVariants } from '../../theme/text-variants';

export type TypographyVariant = keyof typeof textVariants;

export type TypographyProps = TextProps & {
  variant?: TypographyVariant;
  color?: string;
};
