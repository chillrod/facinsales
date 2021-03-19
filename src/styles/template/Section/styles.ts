import styled from 'styled-components'
import IconStyled from '@material-ui/core/Icon'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const BackgroundContainer = styled.div`
  border-radius: 25px;
  box-shadow: 0 8px 90px 25px rgba(31, 38, 135, 0.9);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  padding-bottom: 3em;
  background: radial-gradient(
    circle,
    hsla(173, 80%, 77%, 0.1) 19%,
    hsla(76, 6%, 2%, 0.2) 91%
  );
`

export const Container = styled(motion.section)`
  display: flex;
  padding-top: 1.8em;
  justify-content: center;
  flex-direction: column;
`

export const MediaQuery = styled.div``

export const SectionGrid = styled(motion.div).attrs({})`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#A2EFFF", endColorstr="#FEFEFF", GradientType=1 );
`

export const SectionTransitionGrid = styled(motion.div)`
  grid-column: 1 / -1;
  padding: 0 2em;
  padding-bottom: 1em;
`

export const SectionGridItemMotion = styled(motion.div)`
  padding: 1em;
  width: 400px;
  margin-bottom: 0.6em;
  border-radius: 10px;
`

export const Icon = styled(IconStyled).attrs({})`
  &.MuiIcon-root {
    font-size: 2em;
    color: ${(props) => props.theme.colors.secondBackground};
    display: flex;
  }
`

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    variant: 'h4',
    component: 'p'
  }
})`
  &.MuiTypography-h4 {
    color: white;
  }
`
export const TypographyHeader = styled(TypographyStyled).attrs({
  variant: 'h2',
  component: 'h2'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.text};
  }
`

export const Typography = styled(TypographyStyled).attrs({
  variant: 'body1',
  component: 'span'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.text};
  }
`
export const TypographyHead = styled(TypographyStyled).attrs({
  variant: 'h5',
  component: 'span'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.secondBackground};
  }
`

export const Details = styled(motion.div).attrs({})``

export const CtaButtonGrid = styled(motion.div).attrs({})`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 800px) {
    display: none;
  }
`

export const CtaTypography = styled(TypographyStyled).attrs({
  variant: 'h2',
  component: 'span',
  align: 'center'
})`
  &.MuiTypography-root {
    padding: 0.8em;
    padding-bottom: 0;
    color: ${(props) => props.theme.colors.secondBackground};
  }
`
export const CtaLinkButton = styled(LinkStyled).attrs({
  component: 'button',
  variant: 'button',
  underline: 'none'
})`
  &.MuiLink-root {
    grid-column: 1 / -1;
    justify-self: center;
    grid-row: 4 / 4;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 200px;
    align-self: center;
    display: inline-block;
    padding: 0.7em;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover {
      &.MuiLink-root {
        background: ${(props) => props.theme.colors.primary};
        border: 2px solid ${(props) => props.theme.colors.textWhite};
        color: ${(props) => props.theme.colors.textWhite};
      }
    }
  }
`
