import {useState, useEffect} from 'react'

const getOrientation = () =>
  window.screen.orientation.type

const hideHeaderLandscape = () => {

  let lastScrollY = window.scrollY;
  let header = document.getElementById('myHeader'); 
  let navLinks = document.querySelector(".nav-links");
  
  window.addEventListener('scroll', () => {
    console.log("scroll")
    if (window.matchMedia("(orientation: landscape)").matches) {
    if (window.scrollY > lastScrollY && window.scrollY > 5 && window.innerWidth < 1024) {
      console.log(window.scrollY,"window.scrollY")
      header.style.top = "-100px";
      navLinks.style.visibility = "hidden"
    } else {
      header.style.top = "0px";
      navLinks.style.visibility = "visible"
    }
    lastScrollY = window.scrollY;
  }
  });
  }

const useScreenOrientation = () => {
  const [orientation, setOrientation] =
    useState(getOrientation())

  const updateOrientation = event => {
    const currentOrient = getOrientation()
  
    if (currentOrient === "landscape-primary") {
      const isLandscape = true;
      document.body.classList.toggle("landscape-mode", isLandscape);
    }else {
      document.body.classList.toggle("landscape-mode", false);
    }
    setOrientation(getOrientation())
  }

  useEffect(() => {
    hideHeaderLandscape()
    window.addEventListener(
      'orientationchange',
      updateOrientation
    )
    return () => {
      window.removeEventListener(
        'orientationchange',
        updateOrientation
      )
    }
  }, [])

  return orientation
}

export default useScreenOrientation