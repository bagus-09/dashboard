/**
 * Active Links
 */

const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('aside a').
forEach(link => {
   if(link.href.includes(`${activePage}`)){
    link.classList.remove('collapsed');
   }else{
    link.classList.add('collapsed');
   }
});