function setActiveBtn(event) {
    // console.log("clicked")
    const btns = document.querySelectorAll('.grid .custom-btn');
    btns.forEach(link => {
      link.classList.remove('active-custom-btn');
    });
  
  
    event.currentTarget.classList.add('active-custom-btn');
  }
  
  


function btnStateManage(){
    document.querySelectorAll('.grid .custom-btn').forEach(btn => {
        btn.addEventListener('click', setActiveBtn);
    });
}