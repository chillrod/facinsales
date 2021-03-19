import styled from 'styled-components'
import IconStyled from '@material-ui/core/Icon'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const BackgroundContainer = styled.div`
  padding: 1em;
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
  flex-direction: column;
`

export const MediaQuery = styled.div``

export const SectionGrid = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1 0;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#A2EFFF", endColorstr="#FEFEFF", GradientType=1 );
`

export const SectionTransitionGrid = styled(motion.div)`
  grid-column: 1 / -1;
  padding: 0 1em;
  padding-bottom: 1em;
`

export const SectionGridItemMotion = styled(motion.div)`
  padding: 1.2em;
  margin-bottom: 0.6em;
  border-radius: 10px;
  @media (min-width: 800px) {
    max-width: 400px;
  }
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
    margin-bottom: 0.5em;
    color: ${(props) => props.theme.colors.text};
  }
`

export const Typography = styled(TypographyStyled).attrs({
  variant: 'h5',
  component: 'span'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.text};
    font-weight: 300;
  }
`
export const TypographyHead = styled(TypographyStyled).attrs({
  variant: 'h4',
  component: 'span'
})`
  &.MuiTypography-root {
    font-weight: 300;
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
    color: ${(props) => props.theme.colors.secondBackground};
  }
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
    width: 300px;
    font-size: 1.3rem;
    margin-top: 1em;
    margin-bottom: 1em;
    align-self: center;
    display: inline-block;
    padding: 0.9em;
    color: ${(props) => props.theme.colors.text};
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
