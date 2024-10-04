let codeEditor = document.getElementById('codeEditor')
let output = document.getElementById('output')

let contentToBeShown

async function loaddata() {
  codeEditor = document.getElementById('codeEditor')
  output = document.getElementById('output')
  // console.log(contentToBeShown["1990"]['code'])
  codeEditor.value = contentToBeShown['1990']['code']
  output.innerHTML = contentToBeShown['1990']['code']
}

document.getElementById('btn1')?.addEventListener('click', loaddata)

// codeEditor.addEventListener('change', () => {
//   codeEditor.value = button['1990']['code']
//   output.innerHTML = codeEditor.value
// })

function buttonContentChange(){
  document.getElementById('btn2')?.addEventListener('click', function () {
    console.log("laod data btn2")
    codeEditor.value = contentToBeShown['2000']['code']
    output.innerHTML = contentToBeShown['2000']['code']
  })
  
  document.getElementById('btn3')?.addEventListener('click', function () {
   codeEditor.value = contentToBeShown['2010']['code']
    output.innerHTML = contentToBeShown['2010']['code']
  })
  
  document.getElementById('btn4')?.addEventListener('click', function () {
    codeEditor.value = contentToBeShown['2020']['code']
    output.innerHTML = contentToBeShown['2020']['code']
  })
  
  document.getElementById('btn5')?.addEventListener('click', function () {
   codeEditor.value = contentToBeShown['2030']['code']
    output.innerHTML = contentToBeShown['2030']['code']
  })
  
}


// document.getElementById('prevBtn').addEventListener('click', function () {
//   alert('Prev button clicked')
// })

// document.getElementById('nextBtn').addEventListener('click', function () {
//   alert('Next button clicked')
// })

// sidebar content desplay

const links = document.querySelectorAll('.sub-menu a')
const mainLayout = document.getElementById('mainLayout')

async function loadLayout() {
  mainLayout.innerHTML = editorLayout
}

links.forEach((link) => {
  link.addEventListener('click', async function (event) {
    event.preventDefault()
    mainLayout.classList.remove('main-container')
    await loadLayout()
    console.log(this.text);
    const title = document.getElementById('title')
    title.innerText = this.text

   
    contentToBeShown = compoenents[this.text]
    btnStateManage()
    await loaddata()
    // console.log(contentToBeShown)
  })
})

// load iconic website data

function loadIconicWebsite() {
  let res = ''
  let mainLayout = document.getElementById('mainLayout')
  console.log('clicked')
  if (mainLayout) {
    iconicWebsites.map((item, index) => {
      res += `
  <div class="max-w-sm rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105 rounded-2xl shadow-lg shadow-indigo-500/40 transition-all">
    <img class="w-full h-72 object-cover transition-opacity duration-300 hover:opacity-90" src=${item.imgUrl} alt="Sunset in the mountains">

    <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2 text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors duration-300">${item.title}</div>
        <p class="text-[var(--secondary-text-color)] text-base leading-relaxed">
            ${item.description}
        </p>
    </div>

    <div class="px-6 pt-4 pb-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="${item.articleUrl}" class="bg-[var(--accent-color)] hover:bg-[var(--hover-color)] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 custom-btn transition-transform duration-200 transform hover:scale-105 custom-btn active-custom-btn gap-[0.5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm7 2h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2zM6 7h2v2H6V7zm0 4h2v2H6v-2zm0 4h2v2H6v-2z"></path></svg>
          Read Article
        </a>
        <a href="${item.liveDemo}" class="bg-[var(--line-color)] hover:bg-[var(--hover-color)] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 custom-btn transition-transform duration-200 transform hover:scale-105 custom-btn active-custom-btn gap-[0.5rem]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path><path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z"></path></svg>
          Live Demo
        </a>
    </div>
</div>

      
      
      `
    })
    mainLayout.classList.add('main-container')
    mainLayout.innerHTML = res
  }
}

loadIconicWebsite()

// slider

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// footer

document.addEventListener('load', () => {
  document.getElementById('footer').innerHTML = footer
})



// swiper 
// Get references to elements
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close');

// Add event listener to each image
gallery.addEventListener('click', e => {
  if (e.target.classList.contains('gallery-image')) {
    const imageSrc = e.target.src;
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
  }
});

// Close lightbox when close button is clicked
closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});




// login functionality

// function handleSignUp(event) {
//   event.preventDefault(); 

//   const name = document.querySelector('.signup-form input[type="text"]').value;
//   const email = document.querySelector('.signup-form input[type="email"]').value;
//   const password = document.querySelector('.signup-form input[type="password"]').value;

//   let users = JSON.parse(localStorage.getItem('users')) || [];
//   const userExists = users.find(user => user.email === email);

//   if (userExists) {
//       alert("Email already registered. Please log in.");
//       return;
//   }

//   users.push({ name, email, password });
//   localStorage.setItem('users', JSON.stringify(users));

//   alert("Registration successful! You can now log in.");
//   window.location.href = './login.html'; 
// }

// function handleLogin(event) {
//   event.preventDefault(); 
//   console.log(clicked)
  
//   const email=document.getElementById("email").value;
//   const password=document.getElementById("password").value;
  
//   console.log(email,password)

//   let users = JSON.parse(localStorage.getItem('users')) || [];
//   const user = users.find(user => user.email === email && user.password === password);

//   console.log(user);

//   if (user) {
//       localStorage.setItem('loggedInUser', JSON.stringify(user));
//       localStorage.setItem('isAuthenticated', 'true');
//       alert(`Welcome back, ${user.name}!`);
//       window.location.href = './dashboard.html'; 
//   } else {
//       alert("Invalid email or password. Please try again.");
//   }
// }

// function checkAuthentication() {
//   const isAuthenticated = localStorage.getItem('isAuthenticated');

//   if (!isAuthenticated || isAuthenticated !== 'true') {
//       alert('You need to log in first!');
//       window.location.href = './login.html'; 
//   } else {
//       const user = JSON.parse(localStorage.getItem('loggedInUser'));
//       if (user) {
//           alert(`Welcome, ${user.name}, to your dashboard!`);
//       }
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const currentPage = window.location.pathname;

//   if (currentPage.includes('signup.html')) {
//       document.querySelector('.signup-form').addEventListener('submit', handleSignUp);
//   } else if (currentPage.includes('login.html')) {
//       document.querySelector('.login-form').addEventListener('submit', handleLogin);
//   }

//   checkAuthentication(); // Only call this on the dashboard page
// });

// function logout() {
//   localStorage.removeItem('isAuthenticated');
//   localStorage.removeItem('loggedInUser');
//   alert('You have been logged out.');
//   window.location.href = './login.html'; 
// }
