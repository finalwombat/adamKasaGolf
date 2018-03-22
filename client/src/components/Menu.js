import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import './Menu.css'
import logo from '../img/logo.jpg'

const menuStyle = {
  display: "flex"
}

const logoStyle = {
  "marginTop": "auto",
  "marginBottom": "auto",
  "marginLeft": "2vw"
}
const logoImgStyle = {
  width: "20vw"
}

class Menu extends Component {
    render() {
      return (
        <section className="ns-TabsModule" data-active-tab="A">
            <div className="ns-ScrollWrapper">
              <nav className="ns-TabNav">
                <a href="#ns-TabPanelA" className="ns-TabNav_Link" data-tab="A"><span>Home</span></a>
                <a href="#ns-TabPanelB" className="ns-TabNav_Link" data-tab="B"><span>Schedule</span></a>
                <a href="#ns-TabPanelC" className="ns-TabNav_Link" data-tab="C"><span>About</span></a>
                <span className="ns-TabNav_Indicator"></span>
              </nav>
          </div>
          <div className="ns-TabPanels">
            <div className="ns-TabPanel" id="ns-TabPanelA" data-tab-panel="A">Panel A</div>
            <div className="ns-TabPanel" id="ns-TabPanelB" data-tab-panel="B">Panel B</div>
            <div className="ns-TabPanel" id="ns-TabPanelC" data-tab-panel="C">Panel C</div>
          </div>
        </section>




        // <div className="menu" style={menuStyle}>
        //   <div className="logo" style={logoStyle}>
        //     <img src={logo} style={logoImgStyle} alt="logo"
        //     onClick={() => {props.history.push('/')}} />
        //   </div>
        //   <nav className="slidemenu">
        //     <input type="radio" name="slideItem" id="slide-item-1" className="slide-toggle"
        //     onClick={() => {props.history.push('/')}} defaultChecked/>
        //     <label htmlFor="slide-item-1"><p className="icon">♬</p><span>Home</span></label>
        //     <input type="radio" name="slideItem" id="slide-item-2" className="slide-toggle"
        //     onClick={() => {props.history.push('/schedule')}} />
        //     <label htmlFor="slide-item-2" ><p className="icon">♬</p><span>Schedule</span></label>
        //     <input type="radio" name="slideItem" id="slide-item-3" className="slide-toggle"
        //     onClick={() => {props.history.push('/about')}} />
        //     <label htmlFor="slide-item-3"><p className="icon">♬</p><span>About</span></label>
        //
        //     <div className="clear"></div>
        //
        //
        //    <div className="slider">
        //      <div className="bar"></div>
        //    </div>
        //   </nav>
        // </div>

      )
    }

  }

export default withRouter(Menu)


function tabs() {
      //used for tabs
    //still learning. be kind.

    //get tabs module parent
    var tabsModule = document.body.querySelector(".ns-TabsModule");
    //get tab nav
    var tabNavList = document.body.querySelector(".ns-TabNav");
    //get all tab nav links
    var tabNavLinks = document.querySelectorAll(".ns-TabNav_Link");
    //get tab nav current link indicator
    var tabNavCurrentLinkindicator = tabNavList.querySelector(".ns-TabNav_Indicator");
    //get all tab panel elements
    var tabPanels = document.querySelectorAll(".ns-TabPanel");

    //show tab panel A first because panel A nav link has indicator on page load
    document.getElementById("ns-TabPanelA").style.display = "block";

    /**
    * position indicator function
    */
    function positionIndicator() {
      //get left position of tab nav ul
      var tabNavListLeftPosition = tabNavList.getBoundingClientRect().left;
      //get tab module parent current data value
      var tabsModuleSectionDataValue = tabsModule.getAttribute("data-active-tab") || "A";
      //get nav link span with data value that matches current tab module parent data value
      var tabNavCurrentLinkText = tabNavList.querySelector("[data-tab='" + tabsModuleSectionDataValue + "'] span");
      //get dimensions of current nav link span
      var tabNavCurrentLinkTextPosition = tabNavCurrentLinkText.getBoundingClientRect();
      //set indicator left position via CSS transform
      //current nav link span left position - tab nav ul left position
      //prefix me for live
      tabNavCurrentLinkindicator.style.transform =
        "translate3d(" +
        (tabNavCurrentLinkTextPosition.left - tabNavListLeftPosition) +
        "px,0,0) scaleX(" +
        tabNavCurrentLinkTextPosition.width * 0.01 +
        ")";
    }
    /**
    * fire position indicator function right away
    */
    positionIndicator();

    /**
    * hide all tab panels function
    */
    function hideAllTabPanels() {
      //loop through all tab panel elements
      for (i = 0; i < tabPanels.length; i++) {
        //get each tab panel element
        var eachTabPanel = tabPanels[i];
        //remove style attribute from each tab panel element to hide them
        eachTabPanel.removeAttribute("style");
      }
    };

    /**
    * tab nav link function
    * tab nav link event shows matching panel and positions the indicator
    */
    var tabNavLinkEvent = function() {
      //get this link data value
      var thisLink = this.getAttribute("data-tab");
      //get this link href value
      var thisHref = this.getAttribute("href");
      //get tab panel element with ID that matches this link href value
      var thisTabPanel = document.querySelector(thisHref);
      //set tab module parent data to this link data value
      tabsModule.setAttribute("data-active-tab", thisLink);
      //fire hide all tab panels function
      hideAllTabPanels();
      //get tab panel element with ID that matches this link href value and set its style to show it
      thisTabPanel.style.display = "block";
      //fire the position indicator function
      positionIndicator();
    };

    /**
    * loop through all nav links and add event
    * need to change to parent element and use e.target maybe
    */
    for (var i = 0; i < tabNavLinks.length; i++) {
      //for each nav link, add click event that fires tab nav link click event function
      tabNavLinks[i].addEventListener("click", tabNavLinkEvent, false);
    }

    /**
    * should really position indicator from parent left edge rather than body,
    * to keep indicator in position on resize. meh
    * for now, here's a quick win because i'm tired
    * https://developer.mozilla.org/en-US/docs/Web/Events/resize
    */
    (function() {
      window.addEventListener("resize", resizeThrottler, false);
      //someone smarter than me code
      var resizeTimeout;
      function resizeThrottler() {
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(function() {
            resizeTimeout = null;
            actualResizeHandler();
          }, 66);
        }
      }
      //function to fire after resize timeout delay
      function actualResizeHandler() {
        //fire the position indicator function
        positionIndicator();
      }
    })();

}
