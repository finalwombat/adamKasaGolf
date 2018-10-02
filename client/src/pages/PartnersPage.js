import React from 'react'
import styled from 'styled-components'
import Background from '../components/Background'
import backgroundImage from '../img/clubs.jpg'
import tga from '../img/thegolfathlete.jpg'
import vp from '../img/vicpark.jpg'
import golfinfo from '../img/golfinfonetwork.png'
import ptgc from '../img/ptgc.png'
import eg from '../img/eg.jpeg'
import crest from '../img/logoCrest.png'


const Partners = styled.div`
                  display: flex;
                  justify-content: center;
                  flex-wrap: wrap;

                  & img {
                    margin: 40px;
                  }
                  
                  @media only screen and (max-width: 599px) {
                        flex-direction: column;
                        text-align: center;
                      }
                  `
const Container = styled.div`
                  position: relative;

                  & .image {
                    opacity: 1;
                    height: auto;
                    transition: .5s ease;
                    backface-visibility: hidden;
                  }
                  
                  & .overlay {
                    transition: .5s ease;
                    opacity: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    text-align: center;
                  }

                  &:hover .image {
                    opacity: 0.3;
                  }

                  &:hover .overlay {
                    opacity: 1;
                  }

                  & .text {
                    color: white;
                    font-size: 16px;
                    padding: 16px 32px;
                  }

                  @media only screen and (max-width: 599px) {

                        & .image {
                          width: 60%;
                        }

                        & .overlay {
                          width: 60%;
                          height: inherit;
                        } 
                      }
                  `



const PartnersPage = () => {
    return (
      <Partners className="partners">
        <Container>
          <a href="https://crestlink.com.au/">
          <img className="image" src={crest} />
            <div className='overlay'>
              <div className="text">Crest Link Golf Apparel</div>
            </div>
          </a>
        </Container>
        <Container>
          <a href="https://victoriapark.com.au/">
          <img className="image" src={vp} />
            <div className='overlay'>
              <div className="text">Victoria Park Golf Complex</div>
            </div>
          </a>
        </Container>
        <Container>
        <a href="http://www.thegolfathlete.com/">
          <img className="image" src={tga} />
            <div className='overlay'>
              <div className="text">The Golf Athlete</div>
            </div>
          </a>
        </Container>
        <Container>
        <a href="http://www.golfinfonetwork.com/">
          <img className="image" src={golfinfo} />
            <div className='overlay'>
              <div className="text">Golf Info Network</div>
            </div>
         </a>
        </Container>
        <Container>
        <a href="http://www.protourgolfcollege.com/">
          <img className="image" src={ptgc} />
            <div className='overlay'>
              <div className="text">Pro Tour Golf College</div>
            </div>
         </a>
        </Container>
        <Container>
        <a href="http://www.empowergolf.com.au/">
          <img className="image" src={eg} />
            <div className='overlay'>
              <div className="text">Empower Golf Australia</div>
            </div>
         </a>
        </Container>
          
          
          
      </Partners>
    );
  }

export default PartnersPage
