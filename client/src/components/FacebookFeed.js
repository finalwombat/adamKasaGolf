import React from 'react'

const myScript = function(){
  const s = document.getElementById('fb-root')
  const js = document.createElement('script')
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=824211277780300';
  s.parentNode.insertBefore(js, s)
}


console.log('run')
class FacebookFeed extends React.Component {

  componentDidMount(){
    myScript()
  }





render(){
  return (
    <div className="FacebookFeed">
    <div id="fb-root"></div>

      <div className="fb-page" data-href="https://www.facebook.com/adamkasagolf/" data-tabs="timeline"
          data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
          data-show-facepile="true"><blockquote cite="https://www.facebook.com/adamkasagolf/"
          className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/adamkasagolf/">Facebook</a></blockquote></div>
    </div>
  )
}

}

export default FacebookFeed
