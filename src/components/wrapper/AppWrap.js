import React from 'react'
import NavigationDots from '.././NavigationDots'

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container ${classNames}`}
      >
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">
              Copyright © 2022 Clean Technologies
              Ltd | All Rights Reserved
            </p>
            <p className="p-text"></p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    )
  }

export default AppWrap
