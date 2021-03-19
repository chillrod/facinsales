import styled from 'styled-components'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import Image from 'next/image'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const BackgroundContainer = styled.div`
  border-radius: 25px;
  padding: 2em;
  backdrop-filter: blur(5px);
  min-height: 95vh;
  -webkit-backdrop-filter: blur(5px);

  background: radial-gradient(
    circle,
    hsla(224, 100%, 62%, 0.3) 20%,
    hsla(76, 6%, 2%, 0.9) 90%
  );

  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#3D71FF", endColorstr="#FEFEFF", GradientType=1 );
`

export const Container = styled.main`
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
  grid-column: 1 / -1;
  padding: 1em;
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
  width: 800px;
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

export const HeadingGrid = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  align-self: start;
  justify-self: start;
  margin-top: 0.6em;
`

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
    @media (min-width: 800px) {
      font-size: 6rem;
    }
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
  variant: 'h6',
  component: 'div'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
  }
`
export const LogoContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  align-self: end;
  justify-self: end;
  opacity: 0.3;
  z-index: -99;
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
    margin-top: 1em;
    width: 300px;
    align-self: start;
    display: inline-block;
    padding: 0.7em;
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
`

export const SalesLink = styled(LinkStyled).attrs((props) => ({
  variant: 'h6',
  component: 'span'
}))`  
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.secondBackground};
    }
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
