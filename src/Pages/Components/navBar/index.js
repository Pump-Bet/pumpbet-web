import {Container, Logo, LogoIMG, Menu, MenuItem} from "./styles";
import LogoIcon from '../../../assets/icons/logo.svg';

export function NavBar(){
    return(
        <nav>
            <Container>
                <Logo>
                    PUMP.BET
                    <LogoIMG src={LogoIcon}/>
                </Logo>
                <Menu>
                    <MenuItem>
                        contact
                    </MenuItem>
                    <MenuItem>
                        donate
                    </MenuItem>
                    <MenuItem>
                        about
                    </MenuItem>
                </Menu>
            </Container>
        </nav>
    )
}