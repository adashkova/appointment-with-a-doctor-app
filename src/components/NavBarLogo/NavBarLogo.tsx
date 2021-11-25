import { FC } from 'react'
import { StyledRouterLink } from '../styled'

interface ILinkProps {
  path: string
}

export const NavBarLogo: FC<ILinkProps> = ({ children, path }) => (
  <StyledRouterLink to={path}>{children}</StyledRouterLink>
)
