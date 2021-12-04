import styled from 'styled-components';

export type SpacingProps = {
  space: 'small' | 'medium' | 'large' | 'x-large';
};

const spaces = {
  small: '1rem',
  medium: '1.5rem',
  large: '2.5rem',
  'x-large': '3.5rem',
};

/**
 * @layoutComponent Spacing - Creates space
 */
const Spacing = styled.div<SpacingProps>`
  margin: ${(p) => spaces[p.space]};
  background-color: red;
`;

export default Spacing;
