import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Styledtestigrid = styled.div`
    display: grid;
    min-height: 80vh;
    width: 82%;
    grid-template-columns: repeat(5,auto);
    grid-template-rows: repeat(2,auto);
    grid-template-areas:
        'A A A B E'
        'C D D D E'
        ;
    grid-gap: 2.1em;
    @media screen and (max-width:1025px) {
       width:auto;
       grid-gap: 1em;
       margin:20px;
    }
    @media screen and (max-width:600px) {
        min-height: 80vh;
        grid-template-columns: 100%;
        grid-template-rows: repeat(5,auto);
        grid-template-areas:
            'A'
            'B'
            'C'
            'D'
            "E"
            ;
        margin:25px 20px;
    }
`
export const Article = styled(Vstack)`
    padding: 20px 25px;
    border-radius: 8px;
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    grid-area: ${(ga)=> ga.$gridarea};
    background-color: ${(bg) => bg.$bgcolor};
    background-repeat: no-repeat;
    position:relative;
    .p_testi_name{
        font-weight: var(--medium);
        color: ${(namecolor)=> namecolor.$namecolor};
    }
    .p_testi_status{
        font-size:.9em;
        font-weight: var(--medium);
        color: ${(statuscolor)=> statuscolor.$statuscolor};
    }
    .p_testi_maindesc{
        font-size:1.43em;
        font-weight: var(--semibold);
        letter-spacing: .03em;
        color: ${(maindescolor)=> maindescolor.$maindescolor};
        margin:10px 0;
        z-index: 1;
    }
    .p_testi_subdesc{
        font-size:1.1em;
        font-weight: var(--medium);
        letter-spacing: .04em;
        line-height:1.3em;
        color: ${(subdescolor)=> subdescolor.$subdescolor};
        margin:8px 0 0;
    }
    @media screen and (max-width:1025px) {
        padding:15px;
        .p_testi_maindesc{
            font-size:1.4em;
        }
        .p_testi_subdesc{
            font-size:1em;
        }
    }
    @media screen and (max-width:600px) {
        padding:25px;
        .p_testi_maindesc{
            font-size:1.42em;
        }
        .p_testi_subdesc{
            font-size:1.1em;
        }
    }
`
export const Profilpicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid hsla(263, 55%, 62%, 0.8);
    margin:0 10px 0 0;
`
export const Quoteimage = styled.img`
    width: 90px;
    height: 90px;
    opacity:${(op)=>op.$opacity};
    position:absolute;
    inset:0;
    left:64%;
    z-index: 0;
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`