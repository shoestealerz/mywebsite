import styled from 'styled-components'


export const Image = styled.img`
    width: 45%
    padding-left:150px
    position: fixed
    left: 10vw
    width: 80vw
    top: 10vh
    height:90vh
`;

export const AboutBackground = styled.div`
    height: 100vh;
    background-image: url('${require('../../../assets/doubleliftheader.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    
    text-align: center;
    color: white;
    
    font-size : 0.8cm;

    h1{
        margin-bottom: 0;
    }
    
`

export const White = styled.p`
    color:white
`