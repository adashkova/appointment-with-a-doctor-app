import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
  ...theme.typography.fontWeightBold?.toString,
  textAlign: 'center',
  color: theme.palette.common.white,
  textDecoration: 0,
}));

interface ILinkProps {
  path: string;
}

const NavBarLogo: FC<ILinkProps> = ({ children, path }) => (
  <StyledRouterLink to={path}>{children}</StyledRouterLink>
);

export default NavBarLogo;
