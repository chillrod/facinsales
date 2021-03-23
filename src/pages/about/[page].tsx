import { useRouter } from 'next/router'
import { Typography } from '@material-ui/core'
import {
  Container,
  Background,
  ListItemText
} from '../../styles/template/OtherPages/styles'
// import { aboutData } from '../../services/api'

const About = () => {
  const router = useRouter()

  const { page } = router.query

  return (
    <Container>
      <Background>
        <ListItemText primary={page} secondary={page} />
      </Background>
    </Container>
  )
}

export default About
