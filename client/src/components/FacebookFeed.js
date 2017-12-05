import React from 'react'
import FacebookProvider, { Page } from 'react-facebook'


class FacebookFeed extends React.Component {
  render(){
    return (
      <FacebookProvider appId="824211277780300">
        <Page href="https://www.facebook.com/adamkasagolf/" tabs="timeline" />
      </FacebookProvider>
    )
  }
}
export default FacebookFeed
