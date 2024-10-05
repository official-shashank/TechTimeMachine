var compoenents = {
  "Buttons": {
    title: 'button',
    "1990": {
      code: `<button>Click Me</button>`,
      explanation: {
        details: 'Display pixelated, low-resolution icons and images representing typical 90s web design, perhaps using bitmap images. ',
      },
    },
    "2000": {
      code: ` <button style="background: linear-gradient(to bottom, #e0e0e0 0%, #b0b0b0 100%); border: 2px solid #888; padding: 10px 20px; color: #000; font-size: 16px; font-family: Verdana, sans-serif; border-radius: 5px; text-shadow: 1px 1px 1px #fff; box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); cursor: pointer; transition: all 0.2s ease-in-out;" 
    onmousedown="this.style.boxShadow='none'; this.style.transform='translate(3px, 3px)';" 
    onmouseup="this.style.boxShadow='3px 3px 5px rgba(0, 0, 0, 0.5)'; this.style.transform='translate(0, 0)';"
    onmouseover="this.style.background='linear-gradient(to bottom, #d0d0d0 0%, #a0a0a0 100%)';" 
    onmouseout="this.style.background='linear-gradient(to bottom, #e0e0e0 0%, #b0b0b0 100%)';">
    2000
  </button>`,
      explanation: {
        details: "A button with a CSS gradient background and a hover effect that changes the button's color or size.",
      },
    },
    "2010": {
      code: `<button 
    style="
      background: linear-gradient(to bottom, #e0e0e0 0%, #b0b0b0 100%);
      border: 2px solid #888;
      padding: 10px 20px;
      color: #000;
      font-size: 16px;
      font-family: 'Helvetica', 'Arial', sans-serif;
      border-radius: 15px;
      text-shadow: 1px 1px 1px #fff;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    "
    onmouseover="this.style.background='linear-gradient(to bottom, #d0d0d0 0%, #a0a0a0 100%)';
                 this.style.boxShadow='3px 3px 7px rgba(0, 0, 0, 0.7)';"
    onmouseout="this.style.background='linear-gradient(to bottom, #e0e0e0 0%, #b0b0b0 100%)';
                 this.style.boxShadow='3px 3px 5px rgba(0, 0, 0, 0.5)';"
    onmousedown="this.style.boxShadow='none';
                 this.style.transform='translate(3px, 3px)';"
    onmouseup="this.style.boxShadow='3px 3px 7px rgba(0, 0, 0, 0.7)';
               this.style.transform='translate(0px, 0px)';">
    2010
  </button>`,
      explanation: {
        details: 'A flat button styled according to Material Design, with a ripple effect on click. ',
      },
    },
    "2020": {
      code: ` <button style="
    background: linear-gradient(145deg, #6a11cb, #2575fc);
    border: none;
    border-radius: 30px;
    padding: 15px 30px;
    color: #fff;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease-in-out;"
    onmouseover="this.style.background='linear-gradient(145deg, #2575fc, #6a11cb)'; this.style.boxShadow='0 10px 20px rgba(0, 0, 0, 0.3)'; this.style.transform='translateY(-5px)';"
    onmouseout="this.style.background='linear-gradient(145deg, #6a11cb, #2575fc)'; this.style.boxShadow='0 5px 15px rgba(0, 0, 0, 0.2)'; this.style.transform='translateY(0)';"
    onmousedown="this.style.transform='translateY(3px)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.2)'; this.style.background='linear-gradient(145deg, #5a0fcb, #1e68fc)';"
    onmouseup="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0, 0, 0, 0.3)'; this.style.background='linear-gradient(145deg, #2575fc, #6a11cb)';">
    2020
  </button>`,
      explanation: {
        details: 'A neomorphic button with soft shadows or a glassmorphic button with a translucent, frosted glass appearance and subtle animations.',
      },
    },
    "2030": {
      code: ` <div class="flex items-center justify-center">
    <button class="neumorphism-btn bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xl font-semibold py-3 px-6 rounded-full transform hover:scale-105 transition-transform duration-300">
      2030 Futuristic Button
    </button>
  </div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
  "Typography": {
    title: 'typography',
    "1990": {
      code: `    <div class="bg-gray-600 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 mb-6">
    <!-- 1990s Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14v10H5V8zM2 8a1 1 0 011-1h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V8zM12 4l-2 2m4 0l-2-2" />
    </svg>
    <h2 class="text-2xl font-sans mb-4">1990s</h2>
    <p class="font-sans text-5xl">Retro & Bold Designs</p>
  </div>`,
      explanation: {
        details: 'A webpage using only system-default fonts like Times New Roman and basic styling for headings, paragraphs, and links. ',
      },
    },
    "2000": {
      code: ` <div class="bg-gray-700 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 mb-6">
    <!-- 2000s Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17h4.5M3 6h18M8 20h8M5 6v9a1 1 0 001 1h12a1 1 0 001-1V6M10 11h4" />
    </svg>
    <h2 class="text-2xl font-sans mb-4">2000s</h2>
    <p class="font-sans text-5xl mt-6">The Rise of Web 2.0</p>
  </div>`,
      explanation: {
        details: 'A page using @font-face to load custom fonts for headings and body text, reflecting the rise of typographic diversity. ',
      },
    },
    "2010": {
      code: `   <div class="bg-gray-700 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 mb-6">
    <!-- 2010s Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zM12 18h.01" />
    </svg>
    <h2 class="text-2xl font-sans mb-4">2010s</h2>
    <p class="font-sans text-5xl">Flat Design & Minimalism</p>
  </div> `,
      explanation: {
        details: 'A page using @font-face to load custom fonts for headings and body text, reflecting the rise of typographic diversity. ',
      },
    },
    "2020": {
      code: ` <div class="bg-gray-700 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 mb-6">
    <!-- 2020s Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 6h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2zM11 18h2" />
    </svg>
    <h2 class="text-2xl font-sans mb-4">2020s</h2>
    <p class="font-sans text-5xl">Neumorphism & 3D Effects</p>
  </div> `,
      explanation: {
        details: 'Variable fonts, allowing dynamic changes to weight, width, and style without loading multiple font files. Fluid typography, where font sizes scale based on viewport width. ',
      },
    },
    "2030": {
      code: `   <div class="bg-gray-700 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
    <!-- 2030s Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12h-1m-4 0H9m-2 0H5m16-4v8m-1-8a4 4 0 00-4-4h-1m-5 0H8a4 4 0 00-4 4v8a4 4 0 004 4h1m5 0h1a4 4 0 004-4v-1m-4 5V5" />
    </svg>
    <h2 class="text-2xl font-sans mb-4">2030s</h2>
    <p class="font-sans text-5xl">AI-Driven & Responsive Designs</p>
  </div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
  "Scroll Effects": {
    title: 'scroll',
    "1990": {
      code: `     <section class="era-section bg-indigo-700 text-white flex items-center justify-center">
      <div class="text-center p-10">
        <h1 class="text-5xl font-bold mb-6">1990s</h1>
        <p class="text-lg">Minimal design, early HTML sites with basic layouts, limited interactivity, and bright colors.</p>
      </div>
    </section> `,
      explanation: {
        details: 'A static page with simple text and images that remain fixed as you scroll, representing early web pages without scroll effects. ',
      },
    },
    "2000": {
      code: `   <div class="sc1" style="font-family: 'Verdana', sans-serif; background-color: #e4e4e4; margin: 0; padding: 0;">
        <header style="background-color: #4682b4; color: white; text-align: center; padding: 15px 0;">
            <h1 style="margin: 0; font-size: 2.5em;">Scroll-Based Animation Showcase</h1>
        </header>

        <div class="content" style="padding: 20px; line-height: 1.6; max-width: 800px; margin: auto; background: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
            <h2>Welcome to the 2000s Style Web</h2>
            <p style="margin: 20px 0;">
                This is a simple page to demonstrate scroll effects reminiscent of the 2000s web design. Scroll down to see the "Scroll to Top" button in action!
            </p>

            <p style="margin: 20px 0;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Cras purus odio, vestibulum in suscipit at, pharetra a odio. Sed aliquam, nunc in bibendum ultrices, nisi nulla scelerisque enim, at tristique dolor nulla ac nulla. In tincidunt, urna nec porttitor vehicula, quam nisi pharetra massa, a scelerisque nisi lacus sit amet nulla. Duis non sodales magna. Etiam malesuada ut libero at efficitur.
            </p>

            <p style="margin: 20px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p style="margin: 20px 0;">Morbi facilisis nisi eu sollicitudin volutpat.</p>
            <p style="margin: 20px 0;">Phasellus quis nisi sed magna feugiat bibendum ut quis metus.</p>
            <p style="margin: 20px 0;">Praesent vel elit eu dolor feugiat varius vel at purus.</p>
            <p style="margin: 20px 0;">In vitae nisi non est tempor interdum ac sit amet eros.</p>
            <p style="margin: 20px 0;">Mauris ultricies sapien vitae nibh blandit, et venenatis felis pretium.</p>
            <p style="margin: 20px 0;">Sed vestibulum dolor ac suscipit malesuada.</p>
            <p style="margin: 20px 0;">Duis vel massa ac enim blandit tempor.</p>
            <p style="margin: 20px 0;">Curabitur semper ligula sed nisi cursus, nec pulvinar risus consequat.</p>
            <p style="margin: 20px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p style="margin: 20px 0;">Morbi facilisis nisi eu sollicitudin volutpat.</p>
            <p style="margin: 20px 0;">Phasellus quis nisi sed magna feugiat bibendum ut quis metus.</p>
            <p style="margin: 20px 0;">Praesent vel elit eu dolor feugiat varius vel at purus.</p>
            <p style="margin: 20px 0;">In vitae nisi non est tempor interdum ac sit amet eros.</p>
            <p style="margin: 20px 0;">Mauris ultricies sapien vitae nibh blandit, et venenatis felis pretium.</p>
            <p style="margin: 20px 0;">Sed vestibulum dolor ac suscipit malesuada.</p>
        </div>

        <button class="scroll-to-top" id="scrollToTopBtn" style="position: fixed; bottom: 20px; right: 20px; display: none; background-color: #4682b4; color: white; border: none; border-radius: 5px; padding: 10px; cursor: pointer; font-size: 1em; box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); transition: background-color 0.3s ease;">
            ↑ Scroll to Top
        </button>
    </div>`,
      explanation: {
        details: 'A page with a "scroll to top" button that appears after the user scrolls a certain distance, using basic JavaScript. ',
      },
    },
    "2010": {
      code: ` <div class="parallax" style="background-image: url('https://t3.ftcdn.net/jpg/03/91/46/10/240_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg'); height: 100vh; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;"></div>

    <div class="content" style="text-align: center; background-color: white; padding: 50px 20px;">
        <h1 style="margin: 0; font-size: 2.5em;">Welcome to Parallax Scrolling</h1>
        <p style="font-size: 1.2em; line-height: 1.6; margin: 20px 0;">This is a simple demonstration of parallax scrolling effect where the background image moves slower than the foreground content, creating an immersive experience.</p>
    </div>

    <div class="section" style="padding: 60px 20px; background-color: #f4f4f4;">
        <h2 style="margin: 0;">About Parallax Scrolling</h2>
        <p style="font-size: 1.2em; line-height: 1.6; margin: 20px 0;">Parallax scrolling is a web design technique where background images move slower than foreground images, giving a sense of depth and 3D effect as you scroll down the page.</p>
    </div>

    <div class="parallax" style="background-image: url('https://t3.ftcdn.net/jpg/03/91/46/10/240_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg'); height: 100vh; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;"></div>

    <div class="section" style="padding: 60px 20px; background-color: #e2e2e2;">
        <h2 style="margin: 0;">Benefits of Parallax Scrolling</h2>
        <ul style="font-size: 1.2em; line-height: 1.6; margin: 20px 0; padding-left: 20px;">
            <li>Creates a more dynamic and engaging user experience.</li>
            <li>Can help guide the user's attention to specific content.</li>
            <li>Offers a visually appealing layout that can differentiate your site from others.</li>
        </ul>
    </div>

    <div class="parallax" style="background-image: url('https://t3.ftcdn.net/jpg/03/91/46/10/240_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg'); height: 100vh; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;"></div>

    <div class="footer" style="text-align: center; padding: 20px; background-color: #333; color: white;">
        <p style="margin: 0;">&copy; 2024 Parallax Scrolling Example</p>
    </div>`,
      explanation: {
        details: 'A page with a "scroll to top" button that appears after the user scrolls a certain distance, using basic JavaScript. ',
      },
    },
    "2020": {
      code: `<div class="demo-section" style="margin-bottom: 50px;">
              
              <div style="font-size: 1.5rem; color: white; text-align: center; margin-bottom: 20px; animation: blink 1s infinite;">
                  Loading...
              </div>
              <!-- Optional: Embed classic GIF -->
              <img src="https://i.gifer.com/ZZ5H.gif" alt="90s spinning globe" width="100" style="display: block; margin: 0 auto;">
          </div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
    "2030": {
      code: `<div class="demo-section" style="margin-bottom: 50px;">
              
              <div style="font-size: 1.5rem; color: white; text-align: center; margin-bottom: 20px; animation: blink 1s infinite;">
                  Loading...
              </div>
              <!-- Optional: Embed classic GIF -->
              <img src="https://i.gifer.com/ZZ5H.gif" alt="90s spinning globe" width="100" style="display: block; margin: 0 auto;">
          </div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
  "Forms": {
    title: 'form',
    "1990": {
      code: `<div class="bg-white p-5 shadow-lg border border-gray-400">
        <div class="mb-4">
            <label for="name" class="block mb-2">Name:</label>
            <input type="text" id="name" name="name" class="border border-black p-2 w-full" placeholder="Enter your name">
        </div>
        
        <div class="mb-4">
            <label for="email" class="block mb-2">Email:</label>
            <input type="email" id="email" name="email" class="border border-black p-2 w-full" placeholder="Enter your email">
        </div>
        
        <div class="mb-4">
            <p class="mb-2">Choose your favorite color:</p>
            <div>
                <label class="block"><input type="radio" name="color" value="red" checked> Red</label>
                <label class="block"><input type="radio" name="color" value="blue"> Blue</label>
                <label class="block"><input type="radio" name="color" value="green"> Green</label>
            </div>
        </div>
        
        <div class="mb-4">
            <p class="mb-2">Select your hobbies:</p>
            <div>
                <label class="block"><input type="checkbox" name="hobby" value="music"> Music</label>
                <label class="block"><input type="checkbox" name="hobby" value="sports"> Sports</label>
                <label class="block"><input type="checkbox" name="hobby" value="art"> Art</label>
            </div>
        </div>
        
        <div>
            <input type="submit" value="Submit" class="bg-blue-500 text-white p-2 cursor-pointer">
        </div>
    </div> `,
      explanation: {
        details: 'A basic contact form with only text fields, no padding, and basic buttons like <input type="submit">.  ',
      },
    },
    "2000": {
      code: `<div class="era-header">
      <h2 class="text-2xl font-bold text-gray-700">2000s</h2>
      <p class="text-gray-500">Enhanced Interaction</p>
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input type="email" id="email" class="border rounded-lg w-full py-2 px-3 text-gray-700" placeholder="Enter your email">
    </div>`,
      explanation: {
        details: 'Create a form with inline validation messages using basic JavaScript, e.g., “Please enter a valid email.” ',
      },
    },
    "2010": {
      code: ` <div class="era-header">
      <h2 class="text-2xl font-bold text-gray-700">2010s</h2>
      <p class="text-gray-500">Mobile-First Design</p>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
      <input type="password" id="password" class="border rounded-lg w-full py-2 px-3 text-gray-700" placeholder="Enter your password">
    </div>`,
      explanation: {
        details: 'Display a responsive form that changes its layout when the screen size shifts, with floating labels and real-time error validation. ',
      },
    },
    "2020": {
      code: `<div class="era-header">
      <h2 class="text-2xl font-bold text-gray-700">2020s</h2>
      <p class="text-gray-500">Dark Mode & Accessibility</p>
    </div>
    <div class="mb-4">
      <label for="theme" class="block text-gray-700 text-sm font-bold mb-2">Choose Theme:</label>
      <select id="theme" class="border rounded-lg w-full py-2 px-3 text-gray-700">
        <option>Light Mode</option>
        <option>Dark Mode</option>
      </select>
    </div>`,
      explanation: {
        details: 'A login form with smooth input transitions, an animated password strength meter, and a simple micro-interaction on the submit button (slight color shift). ',
      },
    },
    "2030": {
      code: `  <div class="era-header">
      <h2 class="text-2xl font-bold text-gray-700">2030s</h2>
      <p class="text-gray-500">AI-Powered Interfaces</p>
    </div>
    <div class="mb-4">
      <label for="feedback" class="block text-gray-700 text-sm font-bold mb-2">Feedback:</label>
      <textarea id="feedback" class="border rounded-lg w-full py-2 px-3 text-gray-700" placeholder="Share your thoughts..."></textarea>
    </div>

    <button type="submit" class="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
      Submit
    </button>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
  
  hero_banner: {
    title: 'hero_banner',
    "1990": {
      code: `<div style="margin: 0; font-family: 'Arial', sans-serif;">

    <div style="background-image: url('https://ik.imagekit.io/aoi3fgebjgr/wp-content/uploads/2002/01/eboy.png'); background-size: cover; height: 400px; display: flex; align-items: center; justify-content: center; color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);">
        <h1 style="font-size: 36px; color: black;">Welcome to the 90s Web</h1>
    </div>

</div>`,
      explanation: {
        details: 'A static hero section featuring a large, pixelated image background with text overlaid, simulating the early use of banner images. ',
      },
    },
    "2000": {
      code: `<div style="margin: 0; font-family: 'Verdana', sans-serif;">

    <div style="position: relative; height: 400px; background-color: #e0f7fa; overflow: hidden;">
        <img src="https://via.placeholder.com/1200x400.png?text=Flash+Animation" 
             style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; 
             animation: opacityChange 5s infinite;">
        <h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
             font-size: 40px; color: #00796b; text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.7);">
             Flash Animated Hero
        </h1>
    </div>

    <style>
        @keyframes opacityChange {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
    </style>

</div>`,
      explanation: {
        details: 'A simulated Flash-style hero banner that features animated text and images transitioning in and out. ',
      },
    },
    "2010": {
      code: `<div style="margin: 0; font-family: 'Arial', sans-serif;">

    <div style="background-image: url('https://via.placeholder.com/1200x800.png?text=Parallax+Background'); 
                height: 400px; background-attachment: fixed; background-position: center; 
                background-repeat: no-repeat; background-size: cover; position: relative; 
                display: flex; align-items: center; justify-content: center; color: white;">
        <h1 style="font-size: 40px; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);">Explore the Parallax Effect</h1>
    </div>

</div>`,
      explanation: {
        details: 'A hero section with a parallax scrolling effect, where the background image moves slower than the overlaid text as the user scrolls down. ',
      },
    },
    "2020": {
      code: `<div style="margin: 0; font-family: 'Verdana', sans-serif;">

    <div style="position: relative; height: 400px; overflow: hidden;">
        <video autoplay muted loop style="position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; z-index: 1; transform: translate(-50%, -50%);">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div style="position: relative; z-index: 2; text-align: center; color: white;">
            <h1 style="font-size: 40px; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);">Welcome to the Future of Web Design</h1>
            <button style="background-color: #ff9800; color: white; border: none; padding: 10px 20px; font-size: 18px; cursor: pointer; transition: background-color 0.3s;" 
            onmouseover="this.style.backgroundColor='#f57c00'" onmouseout="this.style.backgroundColor='#ff9800'">Get Started</button>
        </div>
    </div>

</div>`,
      explanation: {
        details: 'A hero section with a looping video background, animated text, and an interactive call-to-action button that changes color or size on hover. ',
      },
    },
    "2030": {
      code: `<div style="margin: 0; padding: 0; font-family: 'Bruno Ace SC', cursive;">
    <main>
        <section style="background-attachment: fixed; background-position: center; background-size: cover; height: 100vh; width: 100%; color: #FFFFFF; display: flex; justify-content: center; align-items: center; background-image: url('https://images.unsplash.com/photo-1558985040-ed4d5029dd50?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIzODkxNjg&ixlib=rb-1.2.1&q=80');">
            <h2 style="font-size: 125px;">Desert</h2>
        </section>

        <section style="margin: 75px;">
            <p style="font-size: 22px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
            <p style="font-size: 22px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
        </section>

        <section style="background-attachment: fixed; background-position: center; background-size: cover; height: 100vh; width: 100%; color: #FFFFFF; display: flex; justify-content: center; align-items: center; background-image: url('https://images.unsplash.com/photo-1610128114197-485d933885c5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIzOTA2Nzc&ixlib=rb-1.2.1&q=80');">
            <h2 style="font-size: 125px;">Mountain</h2>
        </section>

        <section style="margin: 75px;">
            <p style="font-size: 22px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
        </section>

        <section style="background-attachment: fixed; background-position: center; background-size: cover; height: 100vh; width: 100%; color: #FFFFFF; display: flex; justify-content: center; align-items: center; background-image: url('https://images.unsplash.com/photo-1562095241-8c6714fd4178?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIzOTA5OTg&ixlib=rb-1.2.1&q=80');">
            <h2 style="font-size: 125px;">Sea</h2>
        </section>

        <section style="background-attachment: fixed; background-position: center; background-size: cover; height: 100vh; width: 100%; color: #FFFFFF; display: flex; justify-content: center; align-items: center; background-image: url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjIzOTExOTg&ixlib=rb-1.2.1&q=80');">
            <h2 style="font-size: 125px;">Galaxy</h2>
        </section>
    </main>
</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },

  "Loading Animations": {
    title: 'Loading',
    "1990": {
      code: `<div>
    <div style="text-align: center; font-family: Arial, sans-serif;">
        <!-- Optional 90s GIF -->
        <p id="loadingText" style="font-size: 24px; font-weight: bold; opacity: 1;">Loading...</p>
    </div>
    
</div>`,
      explanation: {
        details: 'Simple "Loading..." text that blinks or remains static. ',
      },
    },
    "2000": {
      code: `<div class="loader-container" style="text-align: center;">
    <!-- Company Logo -->
    
    <!-- Loading Bar -->
    <div class="loading-bar" style="width: 300px; height: 30px; border: 2px solid #000; background: linear-gradient(to right, #e8e6e4, #ff6600); border-radius: 5px; overflow: hidden;">
        <div class="progress" id="progress" style="height: 100%; width: 0; background-color: #908888;"></div>
    </div>
    
    <!-- Percentage -->
    <div class="percentage" id="percentage" style="margin-top: 10px; font-size: 18px; font-weight: bold;">0%</div>
</div>
`,
      explanation: {
        details: 'A simple JavaScript progress bar that fills as the page loads or when performing a task (e.g., form submission). ',
      },
    },
    "2010": {
      code: `<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0; margin: 0;">
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0; margin: 0;">
        <div style="
            width: 60px; 
            height: 60px; 
            border: 8px solid #e0e0e0; 
            border-top: 8px solid #2b2927; 
            border-radius: 50%; 
            animation: spin 1s linear infinite;">
        </div>
    </div>

    <style>
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</div>`,
      explanation: {
        details: 'A horizontal progress bar that smoothly animates as content loads, using CSS @keyframes. ',
      },
    },
    "2020": {
      code: `<div>
    <div style="width: 80%; max-width: 600px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); padding: 20px;">
        <div style="background-color: #e0e0e0; border-radius: 4px; margin: 10px 0; height: 150px; width: 100%; animation: pulse 1.5s infinite;"></div>
        <div style="background-color: #e0e0e0; border-radius: 4px; margin: 10px 0; height: 20px; width: 100%; animation: pulse 1.5s infinite;"></div>
        <div style="background-color: #e0e0e0; border-radius: 4px; margin: 10px 0; height: 20px; width: 80%; animation: pulse 1.5s infinite;"></div>
        <div style="background-color: #e0e0e0; border-radius: 4px; margin: 10px 0; height: 20px; width: 100%; animation: pulse 1.5s infinite;"></div>
        <div style="background-color: #e0e0e0; border-radius: 4px; margin: 10px 0; height: 150px; width: 100%; animation: pulse 1.5s infinite;"></div>
    </div>
    <style>
        @keyframes pulse {
            0% {
                background-color: #e0e0e0;
            }
            50% {
                background-color: #d0d0d0;
            }
            100% {
                background-color: #e0e0e0;
            }
        }
    </style>
</div>`,
      explanation: {
        details: 'An animated circular loader that gradually fills up, with subtle shadow effects and a percentage display in the center. ',
      },
    },
    "2030": {
      code: `     <div class="flex items-center justify-center space-x-2">
    <div class="w-8 h-8 bg-purple-600 rounded-full animate-bounce" style="animation: bounce 0.6s infinite;"></div>
    <div class="w-8 h-8 bg-purple-600 rounded-full animate-bounce" style="animation: bounce 0.6s infinite 0.2s;"></div>
    <div class="w-8 h-8 bg-purple-600 rounded-full animate-bounce" style="animation: bounce 0.6s infinite 0.4s;"></div>
  </div>
`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
  "Navigation Menu": {
    title: 'scroll',
    "1990": {
      code: `<div>
    <table style="font-family: Arial, sans-serif; background-color: #ffffff; width: 100%; border-collapse: collapse;">

        <tr>
    
            <td style="padding: 10px; text-align: center; border: 1px solid #dddddd;"><a href="#home" style="text-decoration: none; color: #000000;">Home</a></td>
    
            <td style="padding: 10px; text-align: center; border: 1px solid #dddddd;"><a href="#about" style="text-decoration: none; color: #000000;">About</a></td>
    
            <td style="padding: 10px; text-align: center; border: 1px solid #dddddd;"><a href="#services" style="text-decoration: none; color: #000000;">Services</a></td>
    
            <td style="padding: 10px; text-align: center; border: 1px solid #dddddd;"><a href="#contact" style="text-decoration: none; color: #000000;">Contact</a></td>
    
        </tr>
    
    </table>
    
</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="font-family: Arial, sans-serif; position: relative; display: inline-block;">
        <button style="padding: 10px 15px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">Menu</button>
        <div style="display: none; position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;">
            <a href="#home" style="color: black; padding: 12px 16px; text-decoration: none; display: block;">Home</a>
            <a href="#about" style="color: black; padding: 12px 16px; text-decoration: none; display: block;">About</a>
            <a href="#services" style="color: black; padding: 12px 16px; text-decoration: none; display: block;">Services</a>
            <a href="#contact" style="color: black; padding: 12px 16px; text-decoration: none; display: block;">Contact</a>
        </div>
    </div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="font-family: 'Arial', sans-serif; background-color: #4CAF50; color: #fff; display: flex; justify-content: space-between; align-items: center; padding: 15px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);">
        <div style="display: flex; flex-direction: column; cursor: pointer;" onclick="toggleMenu()">
            <div style="width: 30px; height: 4px; background-color: white; margin: 3px 0; transition: all 0.3s;"></div>
            <div style="width: 30px; height: 4px; background-color: white; margin: 3px 0; transition: all 0.3s;"></div>
            <div style="width: 30px; height: 4px; background-color: white; margin: 3px 0; transition: all 0.3s;"></div>
        </div>
        <div style="display: flex; gap: 15px;">
            <a href="#home" style="color: white; text-decoration: none; padding: 10px 15px; transition: background 0.3s;">Home</a>
            <a href="#about" style="color: white; text-decoration: none; padding: 10px 15px; transition: background 0.3s;">About</a>
            <a href="#services" style="color: white; text-decoration: none; padding: 10px 15px; transition: background 0.3s;">Services</a>
            <a href="#contact" style="color: white; text-decoration: none; padding: 10px 15px; transition: background 0.3s;">Contact</a>
        </div>
    </div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div class="menu" style="font-family: Arial, sans-serif; background-color: rgba(76, 175, 80, 0.9); position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; transform: translateX(-100%); transition: transform 0.3s ease-in-out; z-index: 1000;">

        <div class="menu-content" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white;">
            <ul class="menu-links" style="list-style: none; padding: 0;">
                <li style="margin: 20px 0;">
                    <a href="#home" 
                       style="color: white; text-decoration: none; font-size: 2em; transition: color 0.3s;" 
                       onmouseover="this.style.color='#ffc107'" 
                       onmouseout="this.style.color='white'">Home</a>
                </li>
                <li style="margin: 20px 0;">
                    <a href="#about" 
                       style="color: white; text-decoration: none; font-size: 2em; transition: color 0.3s;" 
                       onmouseover="this.style.color='#ffc107'" 
                       onmouseout="this.style.color='white'">About</a>
                </li>
                <li style="margin: 20px 0;">
                    <a href="#services" 
                       style="color: white; text-decoration: none; font-size: 2em; transition: color 0.3s;" 
                       onmouseover="this.style.color='#ffc107'" 
                       onmouseout="this.style.color='white'">Services</a>
                </li>
                <li style="margin: 20px 0;">
                    <a href="#contact" 
                       style="color: white; text-decoration: none; font-size: 2em; transition: color 0.3s;" 
                       onmouseover="this.style.color='#ffc107'" 
                       onmouseout="this.style.color='white'">Contact</a>
                </li>
            </ul>
        </div>
    </div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div style="font-family: 'Arial', sans-serif; background-color: #f3e5f5; color: #222; text-align: center; padding: 20px;">
    <h1 style="font-size: 50px; color: #6a1b9a;">2030s: Future Icons and Imagery Projection</h1>
    <p style="font-size: 24px; color: #444;">By the 2030s, we will see adaptive, AI-driven icons that change based on user preferences and context.</p>
    <p style="font-size: 20px; color: #333;">Expect interactive icons that enhance accessibility and user engagement.</p>
    <p style="font-size: 20px; color: #333;">The evolution will focus on personalization and contextual relevance in design.</p>
</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
  "Inputs": {
    title: 'Inputs',
    "1990": {
      code: ` <form action="#" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br><br>

    <input type="submit" value="Submit">
</form>  `,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <form action="#" method="post" style="width: 300px; border: 1px solid #ccc; padding: 10px;">
    <label for="username" style="font-family: Arial, sans-serif;">Username:</label><br>
    <input type="text" id="username" name="username" style="width: 100%; margin-bottom: 10px; padding: 5px; border: 1px solid #ccc;"><br>

    <label for="email" style="font-family: Arial, sans-serif;">Email:</label><br>
    <input type="email" id="email" name="email" style="width: 100%; margin-bottom: 10px; padding: 5px; border: 1px solid #ccc;"><br>

    <input type="submit" value="Submit" style="background-color: #007BFF; color: white; padding: 8px 16px; border: none; cursor: pointer;">
</form>  `,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: ` <form action="#" method="post" style="max-width: 400px; margin: 0 auto; padding: 20px; border-radius: 8px; border: 1px solid #ddd; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
    <label for="username" style="font-family: 'Helvetica', sans-serif; font-weight: bold;">Username:</label><br>
    <input type="text" id="username" name="username" style="width: 100%; margin-bottom: 15px; padding: 10px; border-radius: 4px; border: 1px solid #ccc;"><br>

    <label for="email" style="font-family: 'Helvetica', sans-serif; font-weight: bold;">Email:</label><br>
    <input type="email" id="email" name="email" style="width: 100%; margin-bottom: 15px; padding: 10px; border-radius: 4px; border: 1px solid #ccc;"><br>

    <input type="submit" value="Submit" style="background-color: #28a745; color: white; padding: 10px 20px; border-radius: 4px; border: none; cursor: pointer; transition: background-color 0.3s;">
</form> `,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: ` <form action="#" method="post" class="max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-md flex flex-col gap-4">
    <label for="username" class="font-semibold text-gray-700">Username:</label>
    <input type="text" id="username" name="username" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

    <label for="email" class="font-semibold text-gray-700">Email:</label>
    <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

    <button type="submit" class="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300">Submit</button>
</form> `,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `   <form action="#" method="post" class="max-w-lg w-full p-8 border border-primary rounded-xl shadow-lg backdrop-blur-md bg-gray-800/50 flex flex-col gap-6 transition-all duration-500 hover:scale-105">
        <label for="username" class="text-lg font-semibold text-primary">Username:</label>
        <input type="text" id="username" name="username" class="w-full p-4 rounded-lg border border-secondary bg-gray-900 focus:outline-none focus:ring-4 focus:ring-secondary transition-all duration-300">

        <label for="email" class="text-lg font-semibold text-primary">Email:</label>
        <input type="email" id="email" name="email" class="w-full p-4 rounded-lg border border-secondary bg-gray-900 focus:outline-none focus:ring-4 focus:ring-secondary transition-all duration-300">

        <button type="submit" class="bg-primary text-gray-900 py-4 px-8 rounded-xl hover:bg-secondary hover:text-white transition-all duration-500 ease-in-out">Submit</button>
    </form> `,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },

  "Cards": {
    title: 'cards',
    "1990": {
      code: ` <div style="width: 300px; border: 1px solid #ccc; padding: 15px; margin: 10px;">
    <h2 style="font-family: Arial, sans-serif;">1990s Card Title</h2>
    <p style="font-family: Arial, sans-serif; color: #333;">This is a simple description for the card content. Basic HTML structure.</p>
</div> `,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="width: 300px; border: 1px solid #ccc; padding: 15px; margin: 10px;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-l_5oXo2UG5jr2KXUJz9UfiEBGGq_EkVWpQ&s" alt="Image" style="width: 100%; border-radius: 5px;">
    <h2 style="font-family: Arial, sans-serif;">2000s Card Title</h2>
    <p style="font-family: Arial, sans-serif; color: #333;">This card includes an image and basic styling to enhance its look.</p>
</div>  `,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: ` <div style="max-width: 350px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64OcZGCJYRQPrVmRfdb2vKyBaNNsBnj-tkQ&s" alt="Image" style="width: 100%; border-radius: 10px;">
    <h2 style="font-family: 'Helvetica', sans-serif; font-weight: bold;">2010s Card Title</h2>
    <p style="color: #555;">This card includes a button and a more modern design aesthetic.</p>
    <button style="background-color: #28a745; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer;">Read More</button>
</div> `,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: ` <div class="max-w-sm mx-auto my-10 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlv2SKoD4zDsFXcE5u-md4W4S8BLj50t_LfQ&s" alt="Image" class="rounded-lg w-full">
    <h2 class="text-2xl font-semibold text-gray-800 mt-4">2020s Card Title</h2>
    <p class="mt-4 text-gray-600">This is a responsive card with an image and Tailwind CSS styling.</p>
    <button class="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 transition-all duration-300">Learn More</button>
</div> `,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `      <div class="max-w-md w-full p-8 border border-primary rounded-xl shadow-xl backdrop-blur-md bg-gray-800/50 text-white transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/60">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PwAuabLHhIeBTigE8Vwg05c58L8GbiNqmA&s" alt="Image" class="rounded-xl mb-4">
        <h2 class="text-3xl font-bold text-primary mb-2">Futuristic Card Title</h2>
        <p class="text-lg text-secondary mb-4">This card incorporates glassmorphism, interactive buttons, and social icons for a modern user experience.</p>
        <div class="flex space-x-4">
            <button class="bg-primary text-gray-900 py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition-all duration-500">Learn More</button>
            <button class="bg-gray-600 py-2 px-4 rounded-lg">Share</button>
        </div>  `,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },




}

var iconicWebsites = [
  {
    "title": "World Wide Web",
    "description": "Tim Berners-Lee launched the world’s first website on August 6th, 1991, originally to streamline information sharing between scientists.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddb9ed6a207484123b7ce6_ozGFnp_ISpPaG6c1r8YFqwGkIh4PmFw7j5urAvjrn77noblCnIxkasfLbnY97-xb_KFVma-3GLxqSwMbeF37DUkV3QQuUq3measnlpRLICiPBjVY9irpljWH48fnZN9tpBcUdfsw.jpeg",
    "liveDemo": "http://info.cern.ch/",
    "articleUrl": "https://www.webdesignmuseum.org/website/world-wide-web"
  },
  {
    "title": "Space Jam",
    "description": "The official 1996 website promoting the Space Jam movie, full of 90s web design features like starry tiled backgrounds and interactive games.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddb9ed55fdd4017838353b_zPX4UBBjtWeemWC2Ts6yDMxC26OmeytCnjFvCf57lHcwOVhingf-rZX5WwwU7NCBoq7ILa12-zB9ae5_gHMdy3C3t5iFAZvvcTe4aOzsnM4zfezw00efjoiTE_XwcKoBbyf6eClk.jpeg",
    "liveDemo": "http://www.spacejam.com/1996/",
    "articleUrl": "https://www.webdesignmuseum.org/website/space-jam"
  },
  {
    "title": "Yahoo Games",
    "description": "Launched in 1998, Yahoo Games hosted a wide range of free-to-play games with a simple design but addictive content.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddb9ed9a2589b582708f7f_rBJK9JD48hdaTaHIirMYQ_-YkqkuUKrX81F9sfROX2wnPF-UsyHgh2FuVljNuB1AzhiLoyo6NbOvdIx7fGlgM8Qf2_LcEBxWNqEEA7o7iGvWULy-Q9ED2ep-g7VjgJO64uCwQYwG.jpeg",
    "liveDemo": "https://www.yahooinc.com/",
    "articleUrl": "https://www.webdesignmuseum.org/website/yahoo-games"
  },
  {
    "title": "San Francisco FogCam",
    "description": "The world’s oldest running webcam, created in 1994 to monitor fog conditions at San Francisco State University.",
    "imgUrl": "https://fogcam.org/fogcam2.jpg?Fri%20Oct%2004%202024%2000:22:51%20GMT+0530%20(India%20Standard%20Time)",
    "liveDemo": "https://fogcam.org/",
    "articleUrl": "https://www.webdesignmuseum.org/website/fogcam"
  },
  {
    "title": "Hampster Dance",
    "description": "An iconic meme website from 1998, featuring rows of animated GIFs of hamsters and a never-ending catchy song.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddb9ee26b35025a927617a_lyaskPVhs0RETPve4GxO59T1PFvlzaAewedvD2-Dg8eAMh7RdhLfJuXwkOK1fisJZb5Bl4MIPBpgdNHcq6-JuvxZ1pG9ZBeptrNVv6VAhh5RHlFWpNhMUTfj2HeiM7aUekGL6ITE.jpeg",
    "liveDemo": "http://www.hampsterdance.com/",
    "articleUrl": "https://www.webdesignmuseum.org/website/hampster-dance"
  },
  {
    "title": "AuctionWeb (eBay)",
    "description": "Launched in 1995 as a virtual auction platform, AuctionWeb — now known as eBay — revolutionized online shopping.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddb9ee75b3cbe0e81350d7_1HNsrkie7E2vy_-gvYuswkRtpJ0iaxolxD-gtXDJVpfYfK00miP9ftXtGNFyAyoEyn52RWrXNP2tAItmWTy0dSIbCFysO4m4A0LeuKRUffenNyhMvRPsmCug5mhkmLh1mOxZ0KlS.jpeg",
    "liveDemo": "https://www.ebay.com/",
    "articleUrl": "https://www.webdesignmuseum.org/website/auctionweb"
  },
  {
    "title": "CNN O.J. Simpson Trial",
    "description": "CNN’s dedicated section for O.J. Simpson’s 1995 murder trial, complete with trial transcripts, evidence, and player profiles.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddbb1084bdd14f9295eb8a_Fz-CwHkz8aMkZOVA6mebbSpxFu-iNkgCk8qILXRW7F7yGpaznFY66dCx0RIH-Xx1fXU2TNogGHl-PI9JAvTxzgncGqlz95iZyHitqDfB-ZHANnTHQolgnR9UYxMeQ0gcuHFRvWsV.png",
    "liveDemo": "https://edition.cnn.com/SPECIALS/oj/",
    "articleUrl": "https://www.webdesignmuseum.org/website/cnn-oj-simpson-trial"
  },
  {
    "title": "Pitchfork",
    "description": "Online music magazine Pitchfork launched in 1995, becoming a go-to source for indie music reviews and news.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddbb106a207421773c861b_Lp0-glcQSTncmRcpgJSUHQ9lm0RE7wM6o6wVsXzh5LgZ_vPibLb6-7oAaYck0exkpU7tEEc-BsiTThun0v7HdZSICpO45l0mTZ3iGvZWn42pb5oX5C39n-ZSiva8EESxvXQN51v1.png",
    "liveDemo": "https://pitchfork.com/",
    "articleUrl": "https://www.webdesignmuseum.org/website/pitchfork"
  },
  {
    "title": "PizzaNet",
    "description": "Pizza Hut’s 1994 experiment in online food ordering, where visitors could order pizza through a form and pay in cash on delivery.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddbb0fb9c6233253412921_cABQru5pPDRqtUVqFrU-3H0W3iXDpD1Pyf3OvbZ-KNBSNbn8i5L7xT0PUTxjwILjqCMpZt7gv0v-n3172ukXfq88obWWiH7XlPoqvHVY7Zx1PBJ1Ar6-PQNlu1deJBa79VNCVdhB.png",
    "liveDemo": "https://thehistoryoftheweb.com/postscript/pizzanet/",
    "articleUrl": "https://www.webdesignmuseum.org/website/pizzanet"
  },
  {
    "title": "NASA",
    "description": "NASA’s first website launched in 1994, offering centralized access to space-related news, images, and updates on space missions.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddbb1084bdd197ed95ebd1_RbVljegBYEj629kTeNTVLDPeKWsG4qukQAWVQu-IIxJRJh85378NdvAXXg7scLOPpbgdo0QfX2nfV7qR6y8YNHudDcGzpR1lCdOcO9bwg-DIjFmsD_8xi0rYo7lvb26nS0hPKNuP.jpeg",
    "liveDemo": "https://www.nasa.gov/",
    "articleUrl": "https://www.webdesignmuseum.org/website/nasa"
  },
  {
    "title": "MapQuest",
    "description": "Launched in 1996, MapQuest helped drivers map out routes long before car GPS devices, making it an early favorite for road trips.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddbb10b10b2958cfb75afa_k6keaSHL8_BcvdOGQBcYvpJjo67edGz4fbGwoLvP3X7e4wj-n1lXQffjq_oKH7ijOLXjEvmIgTl4DSwWbV6ZVoyMXs1wPBo8Gg-PkyHXDvNwpir8kQASNfAiOOtadwzwSruAtGWm.png",
    "liveDemo": "https://www.mapquest.com/",
    "articleUrl": "https://www.webdesignmuseum.org/website/mapquest"
  },
  {
    "title": "LEGO",
    "description": "LEGO’s 1996 website catered to kids with interactive games and low-resolution animated GIFs of spinning LEGO bricks.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddbb1075b3cb139513b682_F_GCv0Sut7OuwKvdS9ZthTPMwDakJn4DTrShAslDZ8Kj7TaEypbyXl5pXXET6P303AsQ76XQqFIhiRrdJM-K_zxaa6eZ0JkJ5WQ3XoPOSTrTxgH2LLm-GsvszGc4n5huEGlS-eLY.png",
    "liveDemo": "https://www.lego.com/",
    "articleUrl": "https://www.webdesignmuseum.org/website/lego"
  },
  {
    "title": "Webaholics",
    "description": "Launched in 1994, Webaholics was a directory of top links and a support forum for people who felt addicted to the internet.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddbb111a199979c9ff2d2b_3IPVU_Wbfj8IXkWv0c44wuwbyq-1wGlZH9mVEMr0ay0LZJSGJVeMXHd1jNxbhMKY4_uxRZCzk40g6we2a5cLcT5p5k_La6uIE6GOPukJKhv8uoKmFpcRnI4It1CVmbGwB7GzhiuZ.png",
    "liveDemo": "https://www.chicagotribune.com/1996/06/26/oh-no-another-addiction-how-the-mental-health-community-views-the-problem-a-place-for-webaholics/",
    "articleUrl": "https://www.webdesignmuseum.org/website/webaholics"
  },
  {
    "title": "Goosebumps",
    "description": "The official Goosebumps website launched in 1996, featuring monster-themed navigation and spooky e-greetings.",
    "imgUrl": "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/61ddbb10c0763c5ece7e79b8_fi88IJlDR0LLY6b1XUbl_scERn2op6X-AK9w_lOuN3rASHdDZciJGm8BJLwC33KbqaIVPXNrq726sfYcxN5CBANSy3EGoIeysguQQhxbziOGOF2JpmwnyVTb8BsOsISXt2sbW4oY.png",
    "liveDemo": "https://www.scholastic.com/goosebumps/",
    "articleUrl": "https://www.webdesignmuseum.org/website/goosebumps"
  }
]




