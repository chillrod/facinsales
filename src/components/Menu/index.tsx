import { footerData } from '../../services/api'
import { NavLink, NavContainer } from '../../styles/template/Menu/styles'
const Menu = () => {
  return (
    <>
      <NavContainer>
        {footerData?.links?.map((link) => (
          <NavLink key={link.id} href={`/about/${link.title}`}>
            {link.title}
          </NavLink>
        ))}
      </NavContainer>
    </>
  )
}

export default Menu
