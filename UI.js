import styled from 'styled-components';

export const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const theme = {
  blue: 'hsl(197, 100%, 47%)',
  anotherBlue: 'hsl(204, 67%, 53%)',
  grey300: 'hsl(240, 20%, 94%)',
  grey400: 'hsl(0, 0%, 80%)',
  grey600: 'hsl(0, 0%, 70%)',
  grey800: 'hsl(0, 0%, 46%)',
  black: 'hsl(0, 0%, 0%)',
};

export const Divider = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.grey400};
`;
