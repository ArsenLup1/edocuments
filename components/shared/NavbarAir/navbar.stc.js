import { Navbar } from 'reactstrap';
import Styled from 'styled-components';

const NavbarStc=Styled(Navbar)`

.logo
{
    transition:.4s;
    &:hover
    {
        opacity:.4;
    }
}

`;

export default NavbarStc