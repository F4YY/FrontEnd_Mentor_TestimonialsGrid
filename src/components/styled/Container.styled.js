import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap');
    //Primary:
    --Moderate-violet: hsl(263, 55%, 52%);
    --Very-dark-grayish-blue: hsl(217, 19%, 35%);
    --Very-dark-blackish-blue: hsl(219, 29%, 14%);
    --White: hsl(0, 0%, 100%);
    //Neutral:
    --Light-gray: hsl(0, 0%, 81%);
    --Light-grayish-blue: hsl(210, 46%, 95%);
    //Note for text colors:
    /* 1. "Verified Graduate" has the same color as the person's name with 50% opacity */
    /* 2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity */
    *{
        margin:0;
    }
    font-size: 13px;
    font-family: 'Barlow Semi Condensed', sans-serif;
    --medium: 500;
    --semibold: 600;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--Light-grayish-blue);
`