const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')
  button.classList.toggle("active");

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

// active button setup

function setActiveButton(event){
  const buttons = document.querySelectorAll('#sidebar ul li button');
  buttons.forEach(link => {
    link.classList.remove('active-custom-btn');
  });
  event.currentTarget.classList.add('active-custom-btn');
}
document.querySelectorAll('#sidebar ul li button').forEach(link => {
  link.addEventListener('click', setActiveButton);
});


// active link setup

function setActiveLink(event) {

  const links = document.querySelectorAll('.sub-menu div li');
  links.forEach(link => {
    link.classList.remove('active');
  });


  event.currentTarget.classList.add('active');
}


document.querySelectorAll('.sub-menu div li').forEach(link => {
  link.addEventListener('click', setActiveLink);
});
