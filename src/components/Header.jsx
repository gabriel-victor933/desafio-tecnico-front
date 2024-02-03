import HeaderContainer from '../styles/HeaderContainer';
import CircularButton from '../styles/CircularButton';
import logoSvg from '../assets/images/LogoHeader.svg';
import { BsPerson } from 'react-icons/bs';

function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} />
      <CircularButton>
        <BsPerson className="icon" />
      </CircularButton>
    </HeaderContainer>
  );
}

export default Header;
