import styled from 'styled-components'
import IconStyled from '@material-ui/core/Icon'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const BackgroundContainer = styled.div`
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
`

export const Container = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto 1fr 1fr auto;
  padding: 1em;
`

export const SectionGrid = styled(motion.div).attrs({})`
  grid-column: 1 / -1;
  background: hsla(190, 100%, 82%, 1);

  background: radial-gradient(
    circle,
    hsla(190, 100%, 82%, 0.23) 19%,
    hsla(240, 100%, 100%, 0.3) 91%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(190, 100%, 82%, 0.23) 19%,
    hsla(240, 100%, 100%, 0.3) 91%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(190, 100%, 82%, 0.23) 19%,
    hsla(240, 100%, 100%, 0.3) 91%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#A2EFFF", endColorstr="#FEFEFF", GradientType=1 );
`

export const SectionTransitionGrid = styled(motion.div)`
  grid-column: 1 / -1;
  padding-bottom: 1em;
`

export const SectionGridItemMotion = styled(motion.div)`
  padding: 1em;
  margin-bottom: 0.6em;
  border-radius: 10px;
`

export const SectionGridItem = styled(motion.div).attrs({})``

export const Icon = styled(IconStyled).attrs({})`
  &.MuiIcon-root {
    font-size: 2em;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
  }
`

export const ListItemText = styled(ListItemTextStyled).attrs((props) => ({
  primaryTypographyProps: {
    variant: 'h6',
    component: 'span',
    color: 'primary'
  }
}))``
export const Typography = styled(TypographyStyled).attrs({
  variant: 'body1',
  component: 'span'
})``

export const Details = styled(motion.div).attrs({})``

export const CtaButtonGrid = styled(motion.div).attrs({})`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const CtaTypography = styled(TypographyStyled).attrs({
  variant: 'h6',
  component: 'span',
  color: 'primary',
  align: 'center'
})``
export const CtaLinkButton = styled(LinkStyled).attrs({
  component: 'button',
  variant: 'button',
  underline: 'none'
})`
  &.MuiLink-root {
    grid-column: 1 / -1;
    justify-self: center;
    grid-row: 4 / 4;
    border-radius: 20px;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 200px;
    align-self: center;
    display: inline-block;
    padding: 0.7em;
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.textWhite};
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
