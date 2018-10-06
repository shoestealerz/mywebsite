import styled, {css} from 'styled-components'


export const Container = styled.div`
    padding-left: 120px
    padding-right: 120px
    padding-top: 30px
`;

export const ProjectContainer = styled.div`
    padding-left: 0px
    padding-right: 120px
    padding-bottom: 200px
    text-align: center;
`;

export const Relative = styled.div`
    position: relative;
`

export const Flex = styled.div`
    display: flex

    ${({column}) => column && css`
        flex-direction: column
    `}

    ${({justify}) => justify && css`
        justify-content: ${justify}
    `}
    
    ${({align}) => align && css`
        align-content: ${align}
    `}
`

export const Div = styled.div`
    ${({marginBottom}) =>marginBottom && css`
        margin-bottom: ${marginBottom}
    `}
    ${({marginLeft}) =>marginLeft && css`
        margin-left: ${marginLeft}
    `}
    ${({marginRight}) =>marginRight && css`
        margin-right: ${marginRight}
    `}
    ${({marginTop}) =>marginTop && css`
        margin-top: ${marginTop}
    `}
`