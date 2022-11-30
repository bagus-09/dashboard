/**
 * Active Links
 */
// let list = document.querySelectorAll('.sidebar-nav a');
// let list = $('.sidebar-nav a');

// function activeLinks(){
//   list.forEach( (item) => item.classList.add('collapsed'));
//   this.classList.remove('collapsed');
// }

// list.forEach( (item => item.addEventListener('click', activeLinks)));

// list.forEach( (item) => alert(item.length));

// alert(list.length);

const activePage = window.location.pathname;

// console.log(activePage);

const navLinks = document.querySelectorAll('aside a').
forEach(link => {
   if(link.href.includes(`${activePage}`)){
    link.classList.remove('collapsed');
   }else{
    link.classList.add('collapsed');
   }
});