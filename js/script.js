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

document.getElementById('btn2')?.addEventListener('click', function () {
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
    // console.log(this.text);
    const title = document.getElementById('title')
    title.innerText = this.text
    title.text = this.text
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
  <div class="max-w-sm rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105 bg-[var(--base-color)]">
    <img class="w-full h-72 object-cover transition-opacity duration-300 hover:opacity-90" src=${item.imgUrl} alt="Sunset in the mountains">

    <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2 text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors duration-300">${item.title}</div>
        <p class="text-[var(--secondary-text-color)] text-base leading-relaxed">
            ${item.description}
        </p>
    </div>

    <div class="px-6 pt-4 pb-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="${item.articleUrl}" class="bg-[var(--accent-color)] hover:bg-[var(--hover-color)] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 custom-btn transition-transform duration-200 transform hover:scale-105 custom-btn active-custom-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m0 0l-3-3m3 3l3-3m0 0V8m0 8V8" />
            </svg>
           <a href=${item.articleUrl}> <span>Reac Article</span></a> 
        </a>
        <a href="${item.liveDemo}" class="bg-[var(--line-color)] hover:bg-[var(--hover-color)] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 custom-btn transition-transform duration-200 transform hover:scale-105 custom-btn active-custom-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h8m-8 4h8M8 8h8" />
            </svg>
            <a href=${item.liveDemo}><span>Live Demo</span></a>
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
