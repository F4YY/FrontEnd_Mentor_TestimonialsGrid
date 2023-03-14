import React from 'react';
import { Container } from './styled/Container.styled';
import Datas from '../data.json';
import {
    Article,
    Attribution,
    AttributionA,
    Hstack,
    Profilpicture,
    Quoteimage,
    Styledtestigrid,
    Vstack
} from './styled/Testigrid.styled';

export const TestimonialsGrid = () => {
  return (
    <Container>
        <Styledtestigrid>
        {Datas.map((data)=>{
            return(
                <Article
                    key={data.name}
                    $gridarea={data.gridarea}
                    $namecolor={data.namecolor}
                    $statuscolor={data.statuscolor}
                    $maindescolor={data.maindescolor}
                    $subdescolor={data.subdescolor}
                    $bgcolor={data.bgcolor}
                    $bgimage={data.bgimage}
                >
                    <Hstack>
                        <Profilpicture src={require(`${data.profpic}`)} alt={data.profpic} />
                        <Quoteimage src={require(`${data.bgimage}`)} alt={data.bgimage} $opacity={data.opacity}/>
                        <Vstack>
                            <p className='p_testi_name'>
                                {data.name}
                            </p>
                            <p className='p_testi_status'>
                                {data.status}
                            </p>
                        </Vstack>
                    </Hstack>
                    <p className='p_testi_maindesc'>
                        {data.maindesc}
                    </p>
                    <p className='p_testi_subdesc'>
                        {data.subdesc}
                    </p>
                </Article>
            )}
        )}
        </Styledtestigrid>
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Testimonials Grid Section.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
          </footer>
    </Container>
  )
}
