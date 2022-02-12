import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let $sidenav_block = document.querySelector('.sidenav_block');
    let $sidenav = document.querySelector('.sidenav');
    let $sidenav_overlay = document.querySelector('.sidenav_block .overlay');
    $sidenav.style.transform = 'translateY(-'+$sidenav.offsetHeight+'px)';
    $sidenav_overlay.style.opacity = 0;
    $sidenav_block.style.visibility = 'hidden';
    document.body.style.overflowY = 'unset';

  }, [pathname]);

  return null;
}