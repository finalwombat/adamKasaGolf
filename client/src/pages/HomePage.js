import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/golfshot.jpg'
import FacebookFeed from '../components/FacebookFeed'
import Social from '../components/Social'
import styled from 'styled-components'



const Content = styled.div`
                    display: flex;
                    justify-content: space-around;
                    padding-top: 50px;
                
                @media only screen and (max-width: 599px){
                  flex-direction: column-reverse;
                  justify-content: space-around;
                  align-items: center;
                  align-content: center;

                  & div {
                    margin-top: 20px;
                    margin-bottom: 30px;
                  }
                }


`
  

const HomePage = () => {
    return (
      <div className="home" >
        <Background img={backgroundImage}></Background>
        <Content>
          <FacebookFeed />
          <Social />
        </Content>
      </div>
    );
  }

export default HomePage
