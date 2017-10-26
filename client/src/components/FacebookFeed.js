import React from 'react'

const script = function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=824211277780300';
        fjs.parentNode.insertBefore(js, fjs);
        };

const FacebookFeed = () => {
  return (
    <div className="FacebookFeed">
    <div id="fb-root"></div>
      {script(document, 'script', 'facebook-jssdk')}

      <div className="fb-page" data-href="https://www.facebook.com/adamkasagolf/" data-tabs="timeline"
          data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
          data-show-facepile="true"><blockquote cite="https://www.facebook.com/adamkasagolf/"
          className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/adamkasagolf/">Facebook</a></blockquote></div>
    </div>
  )
}

export default FacebookFeed
