import React from 'react'
import styled from 'styled-components'
import tga from '../img/golfAthlete.png'
import ptgc from '../img/ptgc.png'
import eg from '../img/eg.jpeg'
import crest from '../img/logoCrest.png'
import tc from '../img/theclub.png'
import bg from '../img/boltgolf.png'


const Partners = styled.div`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-wrap: wrap;

                  & img {
                    margin: 40px;
                    max-width: 450px;
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
          <a href="http://www.theclubparkwood.com.au/">
          <img className="image" src={tc} />
            <div className='overlay'>
              <div className="text">The Club @ Parkwood Village</div>
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
        <a href="http://www.boltgolf.com.au/">
          <img className="image" src={bg} />
            <div className='overlay'>
              <div className="text">Bolt Golf</div>
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
