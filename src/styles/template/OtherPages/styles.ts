import styled from 'styled-components'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto auto 1fr auto;
  grid-column: 1 / -1;
  padding: 3em;

  background: radial-gradient(
    circle,
    hsla(99, 80%, 10%, 0.1) 19%,
    hsla(1, 2%, 1%, 1) 91%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#3D71FF", endColorstr="#FEFEFF", GradientType=1 );
`

export const BackgroundContainer = styled.div`
  padding: 3em;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(5px);

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#3D71FF", endColorstr="#FEFEFF", GradientType=1 );
`
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1em.4rem;
  }
  a {
    font-size: 1.4rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }
`

export const HeadingGrid = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  margin-top: 0.6em;
`

export const HeadMenu = styled.div``

export const ProductNameType = styled(TypographyStyled).attrs({
  variant: 'h5',
  component: 'div'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.text};
  }
`

export const CtaContent = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 2 / 2;
  justify-self: left;
  align-self: end;
  margin-top: 1em;
`

export const CtaText = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'h2',
  component: 'h1'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.text};
  }
`

export const CtaParagraphContent = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 3 / 3;
  align-self: center;
  margin-top: 1em;
`

export const CtaParagraphText = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'h5',
  component: 'div'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.text};
    margin-top: 0.3em;
    font-weight: 300;
  }
`
