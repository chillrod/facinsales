import styled from 'styled-components'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import Image from 'next/image'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const BackgroundContainer = styled.div`
  padding: 2em;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(5px);
  background: radial-gradient(
    circle,
    hsla(99, 80%, 10%, 0.1) 19%,
    hsla(1, 2%, 1%, 1) 91%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#3D71FF", endColorstr="#FEFEFF", GradientType=1 );
`

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto auto 1fr auto;
  grid-column: 1 / -1;

  @media (min-width: 800px) {
    padding: 2em;
  }
`

export const Desktop = styled.div`
  display: none;
  padding: 1em;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: auto auto 1fr;
    padding: 1em;
  }
`

export const DesktopImageContainer = styled(motion.div)`
  width: 500px;
  img {
    object-fit: cover;
  }
`

export const MediaQuery = styled.div`
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
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
export const LogoContainer = styled.div`
  position: absolute;
  top: -50px;
  left: -100px;
  width: 45%;
  z-index: -99;
  height: 400px;
  background: radial-gradient(
    circle,
    hsla(224, 100%, 62%, 0.3) 10%,
    hsla(2, 90%, 3%, 0.1) 90%
  );

  border-radius: 30% 70% 70% 30% / 30% 77% 23% 70%;
`
export const CtaLinkButton = styled(LinkStyled).attrs((props) => ({
  component: 'button',
  variant: 'button',
  underline: 'none'
}))`
  &.MuiLink-root {
    grid-column: 1 / -1;
    justify-self: start;
    grid-row: 4 / 4;
    width: 250px;
    font-size: 1.3rem;
    margin-top: 1em;
    align-self: start;
    display: inline-block;
    padding: 0.5em;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover {
      &.MuiLink-root {
        background: ${(props) => props.theme.colors.background};
        border: 2px solid ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`

export const SalesContainer = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 5 / 5;
  justify-self: start;
  align-self: end;
  margin-top: 1em;
`

export const SalesLink = styled(LinkStyled).attrs({
  variant: 'h5',
  component: 'span'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.secondBackground};
    cursor: pointer;
  }
`
export const ListItemText = styled(ListItemTextStyled).attrs({
  secondaryTypographyProps: {
    component: 'div'
  }
})``

export const TechImage = styled(Image).attrs({})`
  object-fit: contain;
`
