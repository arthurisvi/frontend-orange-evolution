import React from "react";
import { Box } from "@mui/system";
import logo from '../../../assets/icons/Fcamara.svg'
import Instagram from '../../../assets/icons/Instagram.svg'
import Linkedin from '../../../assets/icons/Linkedin.svg'
import Glassdoor from '../../../assets/icons/Glassdoor.svg'
import Youtube from '../../../assets/icons/Youtube.svg'
import Facebook from '../../../assets/icons/Facebook.svg'
import styled from "styled-components";

const Text = styled.p`
color: #686C72;
font-size: 12px;
`

const Column = styled.div`
display: flex;
justify-content: space-between;
align-itens: center;
@media screen and (max-width: 958px) {
    flex-direction: column;
  }
`
const FooterAll = styled.div`
padding: 35px 60px 35px 80px;
background-color: #EFF1F2;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
`

const Footer = () => {
    
    return (
        <FooterAll>
            <Box sx={{
                marginBottom:'30px'
            }}>
                <img src={logo}></img>
            </Box>
            <Column>
                <Box sx={{display: 'flex', gap: '30px', alignItems: 'center'}}>
                <img src={Facebook} width='20px'></img>
                <img src={Instagram} width='24px'></img>
                <img src={Linkedin} width='24px'></img>
                <img src={Youtube} width='27px'></img>
                <img src={Glassdoor} width='30px'></img>
                </Box>
                <Box>
                <Text>© 2022 FCamara Formação e Consultoria.</Text>
                <Text> Todos os direitos reservados.</Text>
                </Box>
            </Column>
        </FooterAll>
    )
}

export default Footer;