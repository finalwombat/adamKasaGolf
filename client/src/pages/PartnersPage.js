import React from 'react'
import styled from 'styled-components'
import Background from '../components/Background'
import backgroundImage from '../img/clubs.jpg'
import tga from '../img/thegolfathlete.jpg'
import vp from '../img/vicpark.jpg'
import golfinfo from '../img/golfinfonetwork.png'

const Container = styled.div`
                  position: relative;`

const Image = styled.img`
                opacity: 1;
                height: auto;
                transition: .5s ease;
                backface-visibility: hidden;
                
                &:hover {
                  opacity: 0.3;
                }
                `
const Overlay = styled.div`
                  transition: .5s ease;
                  opacity: 0;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  -ms-transform: translate(-50%, -50%);
                  text-align: center;

                  &:hover {
                    opacity: 1;
                  }`

const Text = styled.p`
              color: white;
              font-size: 16px;
              padding: 16px 32px;
`

const PartnersPage = () => {
    return (
      <div className="partners">
        <Container>
          <a href="https://victoriapark.com.au/">
            <Image src={vp} />
            <Overlay className='overlay'>
              <Text>Victoria Park Golf Complex</Text>
            </Overlay>
          </a>
        <a href="http://www.thegolfathlete.com/">
          <Image src={tga} />
            <Overlay className='overlay'>
              <Text>The Golf Athlete</Text>
            </Overlay>
          </a>
        <a href="http://www.golfinfonetwork.com/">
          <Image src={golfinfo} />
            <Overlay>
              <Text>Golf Info Network</Text>
            </Overlay>
         </a>
        </Container>
      </div>
    );
  }

export default PartnersPage
