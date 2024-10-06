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
      code: `    <div style="background-color: #eaeaea; color: #333; font-family: 'Times New Roman', Times, serif; margin: 20px; text-align: center;">
    <h1 style="font-size: 36px; color: #2c3e50;">1990s Typography</h1>
    <p style="font-size: 20px;">In the 1990s, most websites relied on basic system fonts such as <strong>Times New Roman</strong>, <strong>Arial</strong>, and <strong>Courier</strong>. Web designers often used simple styling for headings, paragraphs, and links, which resulted in a uniform but limited typographic experience.</p>
    <h2 style="font-size: 28px; color: #2980b9;">Key Features:</h2>
    <ul style="font-size: 18px; color: #8e44ad; list-style-type: square; padding: 0;">
        <li>Basic system fonts</li>
        <li>Minimal styling options</li>
        <li>Consistent across browsers</li>
    </ul>
  </div>`,
      explanation: {
        details: 'Typography in the 1990s was bold and experimental, capturing the rebellious, grunge-inspired spirit of the era. Influenced by alternative music, punk culture, and DIY aesthetics, designers embraced distressed and chaotic styles, often using hand-drawn fonts and layered layouts in print media. While the web was still in its early stages, and limited to a few safe fonts, print typography flourished, with unconventional, imperfect styles dominating album covers, posters, and magazines ',
      },
    },
    "2000": {
      code: ` <div style="font-family: 'IBM Plex Sans', sans-serif; margin: 20px; line-height: 1.6;">
    <p style="font-size: 16px;">
        Here is some text that should show up by default in Plex Sans. Here is another sentence with 
        <strong>some text in a strong tag</strong> and some <em>other text that should be italicized</em> 
        and even some that should be <strong><em>bold and italic</em></strong>. Whew!
    </p>
    <p style="font-family: 'IBM Plex Serif', serif; font-size: 16px;">
        Here is the same text, but in Plex Serif and all we did was change the font-family. Here is another 
        sentence with <strong>some text in a strong tag</strong> and some <em>other text that should be italicized</em> 
        and even some that should be <strong><em>bold and italic</em></strong>. Whew!
    </p>
    <h1 style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 100;">A nice headline in a very thin weight</h1>
    <p style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 100; font-size: 16px;">
        Here is the same text, but in Plex Sans and shifted to lighter weights, and again all we did was change 
        the font-family. Here is another sentence with <strong>some text in a strong tag</strong> and some <em>other text 
        that should be italicized</em> and even some that should be <strong><em>bold and italic</em></strong>. Whew!
    </p>
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
      code: `<div style="width: 100%; height: 100vh; overflow-x: hidden;">

    <div style="width: 100%; height: 100vh; background-color: white; color: black; text-align: center; display: flex; align-items: center; justify-content: center; font-family: 'Poppins', sans-serif;">
        <h1><a href='https://citeal.web.app' target='_blank' style="color: black;">Citeal</a>, my very first app</h1>
    </div>

    <div style="width: 100%; height: 100vh; background-color: white; color: black; text-align: center; display: flex; align-items: center; justify-content: center; font-family: 'Poppins', sans-serif;">
        <h1 style="animation: revealing 1.5s ease; margin: 0px;">It has hit <i>v2.0</i>, Check it out to support me</h1>
    </div>

    <style>
        @keyframes revealing {
            from {
                color: gray;
                margin-left: 100vw;
                filter: blur(50px);
                opacity: 0.5;
            }
            to {
                margin: 0px;
                filter: blur(0px);
                opacity: 1;
            }
        }
    </style>

</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
    "2030": {
      code: `<div style="margin: 0; padding: 0; width: 100%; height: 100%; font-family: Arial, sans-serif;">

    <article style="padding: 20px; max-width: 800px; margin: auto;">
        <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             style="width: 100%; height: auto; border-radius: 8px;" />
        
        <div style="margin-top: 20px; line-height: 1.6; color: #333;">
            <h1 style="font-size: 24px; margin-bottom: 10px;">We all know everyone only skims articles these days.</h1>
            
            <p>I'm baby kickstarter authentic farm-to-table fam whatever. Unicorn keytar food truck neutral milk hotel kogi you probably haven't heard of them distillery gastropub paleo seitan actually quinoa try-hard.</p>
            
            <p>Gochujang bitters vexillologist, pop-up sriracha shabby chic ascot flannel tattooed fanny pack. 
                <mark style="background-color: yellow;">But there’s a lot of good stuff in the article body.</mark> Quinoa subway tile tacos af listicle prism.</p>
            
            <p>Biodiesel pop-up fam ramps vegan microdosing woke. YOLO gentrify celiac hot chicken big mood fanny pack.</p>
            
            <p>Succulents shoreditch crucifix, pork belly intelligentsia thundercats bespoke taxidermy hoodie plaid mustache solarpunk biodiesel. 
                <mark style="background-color: yellow;">How do we get anyone to read it?</mark> Taxidermy echo park occupy blackbird spyplane pitchfork, food truck small batch.</p>
            
            <p>Man bun lomo put a bird on it fit raw denim tumeric gastropub yes plz gorpcore listicle cloud bread brunch heirloom typewriter green juice. 
                Pickled cliche next level, affogato butcher tilde four loko.</p>
            
            <p>Vegan keytar chambray air plant asymmetrical, kale chips biodiesel seitan literally street art skateboard kickstarter locavore bruh franzen.</p>
            
            <h2 style="font-size: 20px; margin-top: 20px; margin-bottom: 10px;">Headlines are often the only parts that get read.</h2>
            
            <p>Kickstarter thundercats kale chips waistcoat bodega boys asymmetrical raclette bespoke church-key flannel flexitarian. 
                <mark style="background-color: yellow;">Maybe we can call some attention to other parts of the story.</mark> Swag neutra edison bulb, wolf forage put a bird on it tofu fanny pack.</p>
            
            <p>Pug godard mustache deep v jawn 3 wolf moon sus. Schlitz asymmetrical everyday carry DSA ramps raclette.</p>
            
            <p>Live-edge Brooklyn ramps prism. Chicharrones retro sustainable messenger bag bruh vibecession try-hard gastropub viral iceland polaroid VHS. 
                <mark style="background-color: yellow;">The details are what make a story great, after all.</mark> Occupy tumblr heirloom hot chicken, cliche Brooklyn pickled XOXO actually bushwick everyday carry swag ennui tattooed food truck.</p>
            
            <p>Pug letterpress readymade, migas retro gatekeep listicle ugh cronut gastropub venmo everyday carry. Chicharrones vinyl gastropub scenester blog beard truffaut trust fund. 
                <mark style="background-color: yellow;">We just have to convince folks to notice.</mark> Crucifix pitchfork swag vegan pinterest taxidermy hashtag mumblecore freegan normcore yr hella iceland butcher.</p>
            
            <p>Brunch swag fingerstache, bushwick pop-up banjo schlitz 3 wolf moon stumptown edison bulb bodega boys. Hell of cliche polaroid, cloud bread whatever distillery VHS glossier tofu grailed. 
                Distillery mustache skateboard, locavore celiac big mood salvia tonx. Banjo JOMO tote bag flexitarian seitan readymade. Biodiesel trust fund pork belly, XOXO jawn venmo mukbang fashion axe.</p>
            
            <p><mark style="background-color: yellow;">Let’s give ’em a little nudge.</mark></p>
            
            <p>Tofu messenger bag Brooklyn, godard palo santo microdosing coloring book meggings keffiyeh. Gentrify gochujang direct trade franzen.</p>
        </div>
    </article>

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
  
  "Hero Banner": {
    title: 'Hero Banner"',
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
      code: ` <div class="sc1" style="font-family: 'Verdana', sans-serif; background-color: #e4e4e4; margin: 0; padding: 0;">
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
      code: `<div class="bg-white p-6 shadow-lg">
    <div class="text-center mb-4">
      <h1 class="text-2xl font-bold">The New York Times</h1>
    </div>

    <div class="border-t border-b border-gray-300 py-4">
      <div class="grid grid-cols-3 gap-4">
        <!-- Column 1 -->
        <div class="space-y-2">
          <h2 class="font-bold">News</h2>
          <ul class="space-y-1">
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Home Page</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">World</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">U.S.</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Politics</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Election 2020</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">New York</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Business</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Tech</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Science</a></li>
          </ul>
        </div>
        
        <!-- Column 2 -->
        <div class="space-y-2">
          <ul class="space-y-1">
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Climate</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Sports</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Obituaries</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">The Upshot</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Español</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">中文网</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Today’s Paper</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Corrections</a></li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div class="space-y-2">
          <h2 class="font-bold">Opinion</h2>
          <ul class="space-y-1">
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Today’s Opinion</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Op-Ed</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Contributors</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Letters</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Columnists</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Editorials</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Sunday Review</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-500 hover:text-lg transition-all duration-300 transform">Video: Opinion</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-4 text-center">
      <div class="flex justify-center">
        <input type="text" placeholder="Search" class="border rounded px-2 py-1 mr-2">
        <button class="bg-blue-500 px-4 py-1 text-sm  hover:text-gray-500 hover:text-lg transition-all duration-300 transform">GO</button>
      </div>
    </div>
  </div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div class="w-64 bg-gray-800 h-full p-4">

    <!-- User Accounts Section -->
    <div class="space-y-6">
      <div class="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded">
        <div class="bg-blue-500 h-8 w-8 rounded-full"></div>
        <span class="font-medium">All Accounts</span>
      </div>

      <!-- Inbox Section -->
      <div class="flex items-center justify-between p-2 hover:bg-gray-700 rounded">
        <div class="flex items-center space-x-4">
          <div class="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center text-white">📥</div>
          <span>Inbox</span>
        </div>
        <span class="text-xs text-gray-400 bg-gray-700 rounded-full px-2 py-1">38</span>
      </div>

      <!-- Other Sections -->
      <ul class="space-y-2">
        <li class="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded">
          <div class="bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center text-white">📄</div>
          <span>Drafts</span>
        </li>
        <li class="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded">
          <div class="bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center text-white">📦</div>
          <span>Archive</span>
        </li>
        <li class="flex items-center space-x-4 p-2 hover:bg-gray-700 rounded">
          <div class="bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center text-white">📤</div>
          <span>Sent</span>
        </li>
       
      </ul>
    </div>

    <!-- Footer Menu Icons -->
    <div class="mt-6 space-y-6">
      <div class="flex justify-center space-x-4">
        <div class="bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-gray-500 transition">⚙️</div>
        <div class="bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-gray-500 transition">🔔</div>
        <div class="bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center text-white hover:bg-gray-500 transition">📬</div>
      </div>
    </div>
  </div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },


  "Icons and Imagery": {
    title: 'scroll',
    "1990": {
      code: `div style="font-family: 'Arial', sans-serif; background-color: #f9f9f9; color: #333; text-align: center; padding: 20px;">
    <h1 style="font-size: 36px; color: #ff3366;">1990s: Bitmap Icons and Low-Resolution Graphics</h1>
    <p style="font-size: 20px; color: #666;">In the 1990s, web design was characterized by pixelated icons and low-resolution GIF images.</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTcUH4LLjSVfkKEXJ30BBRyAhfT4s_YZO3g&s" alt="90s Icon" style="width: 150px; height: 150px; image-rendering: pixelated; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
    <p style="font-size: 20px; color: #666;">Example of a pixelated icon typical of 90s web design.</p>
    <p style="font-size: 20px; color: #666;">Limited color palettes and low fidelity were common.</p>
</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="font-family: 'Verdana', sans-serif; background-color: #e0f7fa; color: #111; text-align: center; padding: 20px;">
    <h1 style="font-size: 40px; color: #00796b;">2000s: Flash Graphics and Scalable Icons</h1>
    <p style="font-size: 20px; color: #444;">The rise of Flash allowed for more dynamic graphics, while SVGs began to gain traction as a scalable format.</p>
    <img src="https://i.pinimg.com/736x/b9/b5/5e/b9b55e8714f4142abc808c992bc3eb77.jpg" alt="Flash Graphic" style="width: 150px; height: 150px; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
    <p style="font-size: 20px; color: #444;">This icon showcases the vibrant, animated graphics of the 2000s.</p>
    <p style="font-size: 20px; color: #444;">Flash graphics were prominent but began to decline with the rise of mobile devices.</p>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="font-family: 'Arial', sans-serif; background-color: #fff3e0; color: #000; text-align: center; padding: 20px;">
    <h1 style="font-size: 42px; color: #ff9800;">2010s: Font Icons and SVGs</h1>
    <p style="font-size: 20px; color: #333;">The introduction of icon fonts like Font Awesome transformed icon design.</p>
    <i class="fas fa-camera" style="font-size: 80px; color: #3f51b5; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></i>
    <p style="font-size: 20px; color: #333;">Example of a scalable vector icon using Font Awesome.</p>
    <p style="font-size: 20px; color: #333;">High-quality icons became standard for responsive web design.</p>
</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div style="font-family: 'Verdana', sans-serif; background-color: #e8f5e9; color: #111; text-align: center; padding: 20px;">
    <h1 style="font-size: 44px; color: #388e3c;">2020s: Animated SVGs and Lottie Files</h1>
    <p style="font-size: 20px; color: #444;">The use of animated SVGs and Lottie files allows for high-quality, lightweight animations.</p>
    <div>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_qd6wnu.json" background="transparent" speed="1" loop autoplay style="width: 200px; height: 200px; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></lottie-player>
    </div>
    <p style="font-size: 20px; color: #444;">Lottie files provide smooth transitions with minimal performance impact.</p>
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

  Light: {
    title: 'homepages',
    "1990": {
      code: `<div>
    <h1>Welcome to the 90s Web!</h1>
    <p>This is a static webpage with no theme switching.</p>
    <img src="under_construction.gif" alt="Under Construction" />
</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="font-family: Arial, sans-serif; background-color: lightblue; color: black;">
    <h1 style="text-align: center;">2000s: CSS and Flash Era</h1>

    <div style="text-align: center;">
        <img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3a75e3d1-c38b-4e1c-8323-28ff8221b64c/edwinmurat.jpg" alt="Flash Animation Example" style="width: 300px;">
    </div>

    <div style="width: 100%; background-color: darkgray; padding: 10px; margin-top: 20px; text-align: center;">
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">Home</a>
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">About</a>
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">Contact</a>
    </div>

    <form style="margin: 20px;">
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email" style="padding: 5px; border: 1px solid gray;">
        <input type="submit" value="Submit" style="padding: 5px; background-color: green; color: white;">
    </form>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="font-family: 'Helvetica', sans-serif; text-align: center; transition: background-color 0.5s, color 0.5s; background-color: white; color: black;">
    <h1>Welcome to the 2010s Web!</h1>
    <button style="padding: 10px; margin: 20px; background-color: #2196F3; color: white; border: none; cursor: pointer;" onclick="toggleTheme()">Toggle Dark Mode</button>
</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div style="background-color: #ffffff; color: #000000; font-family: Arial, sans-serif; text-align: center; padding: 50px; transition: background-color 0.5s, color 0.5s;">
    <h1 style="color: #0077cc;">2020s: System-Wide Dark Mode</h1>
    <p>In the 2020s, websites began using CSS variables to create adaptive light/dark modes.</p>
    <p>This era features smooth transitions and custom themes based on system settings.</p>
    <button style="padding: 10px 20px; background-color: #007bff; color: white; border: none; cursor: pointer;" onclick="document.body.style.backgroundColor = document.body.style.backgroundColor === 'rgb(26, 26, 26)' ? '#ffffff' : '#1a1a1a'; document.body.style.color = document.body.style.color === 'rgb(255, 255, 255)' ? '#000000' : '#ffffff';">Toggle Dark Mode</button>
</div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div style="background-color: #f0f0f0; color: #333; font-family: 'Arial', sans-serif; text-align: center; padding: 50px; transition: background-color 0.5s, color 0.5s;">
    <h1 style="color: #003366;">2030s: Futuristic Light/Dark Mode</h1>
    <p>The 2030s could bring us interactive and customizable interfaces.</p>
    <p>Imagine using voice commands or gestures to switch themes effortlessly!</p>
    <p>In this speculative future, interfaces will feel dynamic and tailored to individual preferences.</p>
    <button onclick="toggleTheme()" style="padding: 10px 20px; background-color: #0066cc; color: white; border: none; cursor: pointer;">Toggle Dark Mode</button>

    <script>
        // Inline dark mode styles
        const darkModeStyles = {
            backgroundColor: "#2a2a2a",
            color: "#e0e0e0"
        };

        // Function to toggle dark mode
        function toggleTheme() {
            const body = document.body;
            if (body.style.backgroundColor === darkModeStyles.backgroundColor) {
                body.style.backgroundColor = "#f0f0f0";
                body.style.color = "#333";
            } else {
                body.style.backgroundColor = darkModeStyles.backgroundColor;
                body.style.color = darkModeStyles.color;
            }
        }
    </script>
</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },


  Popups:{
    title: 'Popups',
    "1990": {
      code: `<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
    <h1 style="color: #333;">1990s: Browser-Default Tooltips</h1>
    <div style="background-color: #fff; border: 1px solid #ccc; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #444;">Tooltip Example</h2>
        <button title="This is a tooltip!">Hover over me!</button>
        <p style="font-size: 14px; color: #666;">
            In the 1990s, web design utilized browser-default tooltips, which were simple and straightforward. Tooltips were created using the <code>title</code> attribute in HTML. When users hovered over an element, the tooltip text would appear as a small box, providing additional information without cluttering the interface. This method was limited but effective for basic interactions.
        </p>
    </div>
</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: `<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
    <h1 style="color: #333;">2000s: JavaScript Popups and Alerts</h1>
    <div style="background-color: #fff; border: 1px solid #ccc; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #444;">Popup Example</h2>
        <button onclick="showAlert()">Click me for an alert!</button>
        <p style="font-size: 14px; color: #666;">
            The 2000s saw the rise of JavaScript popups, which allowed for more interactive user experiences. Using the <code>alert()</code> and <code>confirm()</code> functions, developers could create simple dialog boxes that interrupted the user's workflow. While these popups were effective for alerting users, they often became intrusive and were eventually overused, leading to their decline in favor of more user-friendly options.
        </p>
    </div>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
    <h1 style="color: #333;">2010s: CSS Tooltips and Modal Popups</h1>
    <div style="background-color: #fff; border: 1px solid #ccc; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #444;">Tooltip Example</h2>
        <div style="position: relative; display: inline-block; cursor: pointer;">
            Hover over me
            <span style="visibility: hidden; width: 120px; background-color: black; color: #fff; text-align: center; border-radius: 6px; padding: 5px; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -60px; opacity: 0; transition: opacity 0.3s;" class="tooltiptext">This is a tooltip!</span>
        </div>
        <h2 style="color: #444;">Modal Example</h2>
        <button onclick="showModal()" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">Open Modal</button>
        <div id="myModal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4); padding-top: 60px;">
            <div style="background-color: #fefefe; margin: 5% auto; padding: 20px; border: 1px solid #888; width: 80%;">
                <span style="color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span>
                <h2 style="color: #444;">Modal Header</h2>
                <p>This is a simple modal popup example!</p>
            </div>
        </div>
        <p style="font-size: 14px; color: #666;">
            The 2010s brought significant advancements in web design, particularly with CSS tooltips and modal popups. Tooltips became more visually appealing with custom styles and animations, enhancing the user experience. Modals emerged as a powerful tool for capturing user attention without navigating away from the page, often used for forms and critical alerts. This era emphasized smooth transitions and responsive designs to improve usability.
        </p>
    </div>
</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
    <h1 style="color: #333; text-align: center;">2020s: Interactive, Animated Popups</h1>
    <div style="max-width: 600px; margin: auto; background-color: #fff; border: 1px solid #ccc; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
        <h2 style="color: #444;">Animated Modal Popup Example</h2>
        <p style="font-size: 16px; color: #666;">
            The 2020s have seen a surge in the use of interactive and animated popups in web design. These popups enhance user experience through smooth transitions, engaging micro-interactions, and scroll-based triggers. This approach not only draws attention but also makes the interface more dynamic and enjoyable.
        </p>
        <button onclick="showModal()" style="padding: 10px 20px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px;">Open Animated Modal</button>
        <div id="myModal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4); padding-top: 60px;">
            <div style="background-color: #fefefe; margin: 5% auto; padding: 20px; border: 1px solid #888; width: 80%; border-radius: 8px;">
                <span style="color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span>
                <h2 style="color: #444;">Modal Header</h2>
                <p style="font-size: 16px; color: #666;">This is an animated modal popup example! Notice the subtle entrance and exit animations, which enhance user engagement.</p>
            </div>
        </div>
        <p style="font-size: 14px; color: #666;">
            In this example, the modal features a fade-in effect when displayed and a fade-out effect when closed, providing a smooth user experience. These types of animations have become a standard practice in modern web design, helping to create an immersive experience for users. Interactive elements like these are crucial for capturing attention and improving navigation.
        </p>
    </div>
</div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div style="font-family: 'Arial', sans-serif; background: linear-gradient(to right, #0f0c29, #302b63, #24243e); color: #fff; padding: 20px; transition: background-color 0.3s ease;">
    <h1 style="color: #ffde59;">2030s: Immersive Interactive Popups</h1>
    <div style="background-color: rgba(255, 255, 255, 0.1); border: 1px solid #ccc; padding: 20px; margin-bottom: 20px; border-radius: 15px;">
        <h2 style="color: #ffde59;">Futuristic Modal Popup Example</h2>
        <button onclick="showModal()" style="padding: 12px 24px; font-size: 18px; cursor: pointer; background-color: #00c6ff; color: #fff; border: none; border-radius: 10px; transition: background-color 0.3s ease;">Open Futuristic Modal</button>

        <div id="myModal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0, 0, 0, 0.8); padding-top: 60px;">
            <div style="background-color: rgba(255, 255, 255, 0.9); margin: 5% auto; padding: 20px; border: 1px solid #888; width: 70%; border-radius: 15px; animation: zoomIn 0.3s forwards;">
                <span style="color: #ff6b81; float: right; font-size: 28px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span>
                <h2 style="color: #444;">Futuristic Modal Header</h2>
                <p>Welcome to the 2030s! This modal uses immersive design techniques to engage users.</p>
            </div>
        </div>

        <p style="font-size: 16px; color: #ddd;">
            The 2030s are envisioned to be a transformative era in web design. Interactive popups will incorporate augmented reality elements and seamless transitions. Designers will prioritize user experience with immersive backgrounds and dynamic interactions that adapt to user behavior, leading to a more personalized and engaging web environment.
        </p>
    </div>

    <style>
        @keyframes zoomIn {
            from {
                transform: scale(0);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes zoomOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }

        .zoomIn {
            animation: zoomIn 0.3s forwards;
        }

        .zoomOut {
            animation: zoomOut 0.3s forwards;
        }
    </style>
</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },

  Footers: {
    title: 'Footer',
    "1990": {
      code: `<div>
    <footer>
        <p>Contact us: info@example.com | Phone: (123) 456-7890</p>
        <div class="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
        </div>
        <p>&copy; 2024 Your Company Name</p>
    </footer>
</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div>
    <footer style="font-family: Comic Sans, sans-serif; background-color: #333; color: #fff; padding: 20px; display: flex; justify-content: space-around; flex-wrap: wrap;">
        <div class="footer-section" style="width: 200px;">
            <h4 style="margin-bottom: 10px;">Company</h4>
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">About Us</a></li>
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">Careers</a></li>
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="footer-section" style="width: 200px;">
            <h4 style="margin-bottom: 10px;">Services</h4>
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">Web Design</a></li>
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">SEO Services</a></li>
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">Consulting</a></li>
            </ul>
        </div>
        <div class="footer-section" style="width: 200px;">
            <h4 style="margin-bottom: 10px;">Support</h4>
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">Contact Us</a></li>
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">FAQs</a></li>
                <li style="margin-bottom: 5px;"><a href="#" style="color: #ffffff; text-decoration: none;">Help Center</a></li>
            </ul>
        </div>
    </footer>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div>
    <footer style="background-color: #333; color: #fff; padding: 20px; text-align: center;">
        <ul style="list-style: none; padding: 0;">
            <li style="display: inline; margin: 0 10px;">
                <a href="#" style="color: #fff; font-size: 24px; text-decoration: none; transition: transform 0.3s, color 0.3s;">&#x1F426; Twitter</a>
            </li>
            <li style="display: inline; margin: 0 10px;">
                <a href="#" style="color: #fff; font-size: 24px; text-decoration: none; transition: transform 0.3s, color 0.3s;">&#x1F4F7; Instagram</a>
            </li>
            <li style="display: inline; margin: 0 10px;">
                <a href="#" style="color: #fff; font-size: 24px; text-decoration: none; transition: transform 0.3s, color 0.3s;">&#x1F4F1; Facebook</a>
            </li>
            <li style="display: inline; margin: 0 10px;">
                <a href="#" style="color: #fff; font-size: 24px; text-decoration: none; transition: transform 0.3s, color 0.3s;">&#x1F4BB; LinkedIn</a>
            </li>
            <li style="display: inline; margin: 0 10px;">
                <a href="#" style="color: #fff; font-size: 24px; text-decoration: none; transition: transform 0.3s, color 0.3s;">&#x1F4FA; YouTube</a>
            </li>
            <li style="display: inline; margin: 0 10px;">
                <a href="#" style="color: #fff; font-size: 24px; text-decoration: none; transition: transform 0.3s, color 0.3s;">&#x1F4BB; GitHub</a>
            </li>
        </ul>
        <p style="margin: 20px 0 0;">&copy; 2010s Style Footer</p>
    </footer>
</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div style="line-height: 1.5; font-family: 'Poppins', sans-serif; margin: 0; padding: 0; box-sizing: border-box;">

  <footer class="footer" style="background-color: #24262b; padding: 70px 0;">
    <div class="container" style="max-width: 1170px; margin: auto;">
      <div class="row" style="display: flex; flex-wrap: wrap;">
        <div class="footer-col" style="width: 25%; padding: 0 15px;">
          <h4 style="font-size: 18px; color: #ffffff; text-transform: capitalize; margin-bottom: 35px; font-weight: 500; position: relative;">
            company
            <span style="content: ''; position: absolute; left: 0; bottom: -10px; background-color: #e91e63; height: 2px; box-sizing: border-box; width: 50px;"></span>
          </h4>
          <ul style="list-style: none;">
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">about us</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">our services</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">privacy policy</a></li>
            <li><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">affiliate program</a></li>
          </ul>
        </div>

        <div class="footer-col" style="width: 25%; padding: 0 15px;">
          <h4 style="font-size: 18px; color: #ffffff; text-transform: capitalize; margin-bottom: 35px; font-weight: 500; position: relative;">
            get help
            <span style="content: ''; position: absolute; left: 0; bottom: -10px; background-color: #e91e63; height: 2px; box-sizing: border-box; width: 50px;"></span>
          </h4>
          <ul style="list-style: none;">
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">FAQ</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">shipping</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">returns</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">order status</a></li>
            <li><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">payment options</a></li>
          </ul>
        </div>

        <div class="footer-col" style="width: 25%; padding: 0 15px;">
          <h4 style="font-size: 18px; color: #ffffff; text-transform: capitalize; margin-bottom: 35px; font-weight: 500; position: relative;">
            online shop
            <span style="content: ''; position: absolute; left: 0; bottom: -10px; background-color: #e91e63; height: 2px; box-sizing: border-box; width: 50px;"></span>
          </h4>
          <ul style="list-style: none;">
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">watch</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">bag</a></li>
            <li style="margin-bottom: 10px;"><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">shoes</a></li>
            <li><a href="#" style="font-size: 16px; text-transform: capitalize; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#bbbbbb'">dress</a></li>
          </ul>
        </div>

        <div class="footer-col" style="width: 25%; padding: 0 15px;">
          <h4 style="font-size: 18px; color: #ffffff; text-transform: capitalize; margin-bottom: 35px; font-weight: 500; position: relative;">
            follow us
            <span style="content: ''; position: absolute; left: 0; bottom: -10px; background-color: #e91e63; height: 2px; box-sizing: border-box; width: 50px;"></span>
          </h4>
          <div class="social-links" style="display: flex;">
            <a href="#" style="display: inline-block; height: 40px; width: 40px; background-color: rgba(255,255,255,0.2); margin: 0 10px 10px 0; text-align: center; line-height: 40px; border-radius: 50%; color: #ffffff; transition: all 0.5s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#ffffff'">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" style="display: inline-block; height: 40px; width: 40px; background-color: rgba(255,255,255,0.2); margin: 0 10px 10px 0; text-align: center; line-height: 40px; border-radius: 50%; color: #ffffff; transition: all 0.5s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#ffffff'">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" style="display: inline-block; height: 40px; width: 40px; background-color: rgba(255,255,255,0.2); margin: 0 10px 10px 0; text-align: center; line-height: 40px; border-radius: 50%; color: #ffffff; transition: all 0.5s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#ffffff'">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" style="display: inline-block; height: 40px; width: 40px; background-color: rgba(255,255,255,0.2); margin: 0 10px 10px 0; text-align: center; line-height: 40px; border-radius: 50%; color: #ffffff; transition: all 0.5s ease;" onmouseover="this.style.color='#e91e63'" onmouseout="this.style.color='#ffffff'">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

</div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div style="margin: 0; font-family: 'Poppins', sans-serif;">

    <div style="display: flex; align-items: flex-end; min-height: 100vh; background: #333;">
        <footer style="position: relative; width: 100%; background: #3586ff; min-height: 100px; padding: 20px 50px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div class="waves">
                <div style="position: absolute; top: -100px; left: 0; width: 100%; height: 100px; background: url(https://i.ibb.co/rZt4Nhg/wave.png); background-size: 1000px 100px; z-index: 1000; opacity: 1; bottom: 0; animation: animateWave 4s linear infinite;"></div>
                <div style="position: absolute; top: -100px; left: 0; width: 100%; height: 100px; background: url(https://i.ibb.co/rZt4Nhg/wave.png); background-size: 1000px 100px; z-index: 999; opacity: 0.5; bottom: 10px; animation: animateWave_02 4s linear infinite;"></div>
                <div style="position: absolute; top: -100px; left: 0; width: 100%; height: 100px; background: url(https://i.ibb.co/rZt4Nhg/wave.png); background-size: 1000px 100px; z-index: 1000; opacity: 0.2; bottom: 0; animation: animateWave 3s linear infinite;"></div>
                <div style="position: absolute; top: -100px; left: 0; width: 100%; height: 100px; background: url(https://i.ibb.co/rZt4Nhg/wave.png); background-size: 1000px 100px; z-index: 999; opacity: 0.7; bottom: 20px; animation: animateWave_02 3s linear infinite;"></div>
            </div>
            <ul style="position: relative; display: flex; justify-content: center; align-items: center; margin: 10px 0; list-style: none;">
                <li><a href="#" style="font-size: 2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s;"> <ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#" style="font-size: 2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s;"> <ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#" style="font-size: 2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s;"> <ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href="#" style="font-size: 2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s;"> <ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>

            <ul style="position: relative; display: flex; justify-content: center; align-items: center; margin: 10px 0; list-style: none;">
                <li><a href="#" style="font-size: 1.2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s; text-decoration: none; opacity: 0.75;">Home</a></li>
                <li><a href="#" style="font-size: 1.2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s; text-decoration: none; opacity: 0.75;">About</a></li>
                <li><a href="#" style="font-size: 1.2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s; text-decoration: none; opacity: 0.75;">Services</a></li>
                <li><a href="#" style="font-size: 1.2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s; text-decoration: none; opacity: 0.75;">Team</a></li>
                <li><a href="#" style="font-size: 1.2em; color: #ccc; margin: 0 10px; display: inline-block; transition: 0.5s; text-decoration: none; opacity: 0.75;">Contact</a></li>
            </ul>
            <p style="color: #eee; text-align: center; margin-top: 15px; margin-bottom: 10px; font-size: 1.1em;">&copy; 2021 Prakash Sahu | All Rights Reserved</p>
        </footer>
    </div>

    <style>
        @keyframes animateWave {
            0% { background-position-x: 1000px; }
            100% { background-position-x: 0px; }
        }

        @keyframes animateWave_02 {
            0% { background-position-x: 0px; }
            100% { background-position-x: 1000px; }
        }
    </style>
</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },

  homepages: {
    title: 'homepages',
    "1990": {
      code: `<div style="font-family: Arial, sans-serif; background-color: yellow; color: black;">
    <h1 style="text-align: center;">1990s: The Beginning</h1>
    
    <table style="width: 100%; border: 1px solid black;">
        <tr>
            <td style="padding: 20px;">
                <h2 style="font-family: 'Comic Sans MS';">Welcome to the 90s Website!</h2>
                <p style="font-size: 18px; color: blue;">This website is under construction!</p>
                <img src="https://example.com/under_construction.gif" alt="Under Construction" style="display: block; margin: 0 auto; width: 200px;">
            </td>
        </tr>
    </table>
    
    <form style="margin: 20px;">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" style="padding: 5px; border: 1px solid gray;">
        <input type="button" value="Submit" style="padding: 5px; background-color: gray; color: white;">
    </form>

</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="font-family: Arial, sans-serif; background-color: lightblue; color: black;">
    <h1 style="text-align: center;">2000s: CSS and Flash Era</h1>

    <div style="text-align: center;">
        <img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3a75e3d1-c38b-4e1c-8323-28ff8221b64c/edwinmurat.jpg" alt="Flash Animation Example" style="width: 300px;">
    </div>

    <div style="width: 100%; background-color: darkgray; padding: 10px; margin-top: 20px; text-align: center;">
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">Home</a>
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">About</a>
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">Contact</a>
    </div>

    <form style="margin: 20px;">
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email" style="padding: 5px; border: 1px solid gray;">
        <input type="submit" value="Submit" style="padding: 5px; background-color: green; color: white;">
    </form>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="font-family: Arial, sans-serif; background-color: white; color: black;">
    <h1 style="text-align: center;">2010s: Responsive and Flat UI</h1>

    <div style="background-color: lightgray; padding: 20px; text-align: center;">
        <h2 style="font-family: sans-serif;">Flat UI Form</h2>
        <form style="margin: 20px;">
            <input type="text" placeholder="Your Name" style="padding: 10px; width: 100%; border: none; margin-bottom: 10px;">
            <input type="email" placeholder="Your Email" style="padding: 10px; width: 100%; border: none; margin-bottom: 10px;">
            <input type="submit" value="Submit" style="padding: 10px; width: 100%; background-color: blue; color: white; border: none;">
        </form>
    </div>

    <div style="margin-top: 20px; text-align: center;">
        <p>Resize the browser to see responsive design in action!</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XzjFvWTPanU0ij-LKfYmkuNnipyQ9svLzA&s" alt="Responsive Layout" style="width: 50%; max-width: 600px;">
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


  homepages: {
    title: 'homepages',
    "1990": {
      code: `<div style="font-family: Arial, sans-serif; background-color: yellow; color: black;">
    <h1 style="text-align: center;">1990s: The Beginning</h1>
    
    <table style="width: 100%; border: 1px solid black;">
        <tr>
            <td style="padding: 20px;">
                <h2 style="font-family: 'Comic Sans MS';">Welcome to the 90s Website!</h2>
                <p style="font-size: 18px; color: blue;">This website is under construction!</p>
                <img src="https://example.com/under_construction.gif" alt="Under Construction" style="display: block; margin: 0 auto; width: 200px;">
            </td>
        </tr>
    </table>
    
    <form style="margin: 20px;">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" style="padding: 5px; border: 1px solid gray;">
        <input type="button" value="Submit" style="padding: 5px; background-color: gray; color: white;">
    </form>

</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="font-family: Arial, sans-serif; background-color: lightblue; color: black;">
    <h1 style="text-align: center;">2000s: CSS and Flash Era</h1>

    <div style="text-align: center;">
        <img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3a75e3d1-c38b-4e1c-8323-28ff8221b64c/edwinmurat.jpg" alt="Flash Animation Example" style="width: 300px;">
    </div>

    <div style="width: 100%; background-color: darkgray; padding: 10px; margin-top: 20px; text-align: center;">
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">Home</a>
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">About</a>
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">Contact</a>
    </div>

    <form style="margin: 20px;">
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email" style="padding: 5px; border: 1px solid gray;">
        <input type="submit" value="Submit" style="padding: 5px; background-color: green; color: white;">
    </form>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="font-family: Arial, sans-serif; background-color: white; color: black;">
    <h1 style="text-align: center;">2010s: Responsive and Flat UI</h1>

    <div style="background-color: lightgray; padding: 20px; text-align: center;">
        <h2 style="font-family: sans-serif;">Flat UI Form</h2>
        <form style="margin: 20px;">
            <input type="text" placeholder="Your Name" style="padding: 10px; width: 100%; border: none; margin-bottom: 10px;">
            <input type="email" placeholder="Your Email" style="padding: 10px; width: 100%; border: none; margin-bottom: 10px;">
            <input type="submit" value="Submit" style="padding: 10px; width: 100%; background-color: blue; color: white; border: none;">
        </form>
    </div>

    <div style="margin-top: 20px; text-align: center;">
        <p>Resize the browser to see responsive design in action!</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XzjFvWTPanU0ij-LKfYmkuNnipyQ9svLzA&s" alt="Responsive Layout" style="width: 50%; max-width: 600px;">
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
  Inputs: {
    title: 'Input',
    "1990": {
      code: `<section class="py-20 bg-gray-300">
    <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">1990s: Simple HTML Forms</h1>
        <p class="text-lg mb-6">Forms were plain and unstyled, with default browser input styles.</p>
        <div class="bg-white p-8 rounded shadow-lg">
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="border p-1 mb-2 block w-full" style="background-color: #ffffff; color: #000; border: 1px solid #000;"><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" class="border p-1 mb-2 block w-full" style="background-color: #ffffff; color: #000; border: 1px solid #000;"><br>

                <button type="submit" class="border px-4 py-2 bg-gray-400" style="background-color: #cccccc; border: 1px solid #000;">Submit</button>
            </form>
        </div>
    </div>
</section>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="font-family: Arial, sans-serif; background-color: lightblue; color: black;">
    <h1 style="text-align: center;">2000s: CSS and Flash Era</h1>

    <div style="text-align: center;">
        <img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3a75e3d1-c38b-4e1c-8323-28ff8221b64c/edwinmurat.jpg" alt="Flash Animation Example" style="width: 300px;">
    </div>

    <div style="width: 100%; background-color: darkgray; padding: 10px; margin-top: 20px; text-align: center;">
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">Home</a>
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">About</a>
        <a href="#" style="color: white; text-decoration: none; padding: 10px; display: inline-block;">Contact</a>
    </div>

    <form style="margin: 20px;">
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email" style="padding: 5px; border: 1px solid gray;">
        <input type="submit" value="Submit" style="padding: 5px; background-color: green; color: white;">
    </form>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="font-family: Arial, sans-serif; background-color: white; color: black;">
    <h1 style="text-align: center;">2010s: Responsive and Flat UI</h1>

    <div style="background-color: lightgray; padding: 20px; text-align: center;">
        <h2 style="font-family: sans-serif;">Flat UI Form</h2>
        <form style="margin: 20px;">
            <input type="text" placeholder="Your Name" style="padding: 10px; width: 100%; border: none; margin-bottom: 10px;">
            <input type="email" placeholder="Your Email" style="padding: 10px; width: 100%; border: none; margin-bottom: 10px;">
            <input type="submit" value="Submit" style="padding: 10px; width: 100%; background-color: blue; color: white; border: none;">
        </form>
    </div>

    <div style="margin-top: 20px; text-align: center;">
        <p>Resize the browser to see responsive design in action!</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XzjFvWTPanU0ij-LKfYmkuNnipyQ9svLzA&s" alt="Responsive Layout" style="width: 50%; max-width: 600px;">
    </div>
</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<section class="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
    <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold mb-4">2020s: Colorful and Modern Forms</h1>
        <p class="text-xl mb-6">Bright colors, gradients, and animations make forms pop while keeping them modern and user-friendly.</p>
        <div class="bg-white text-gray-800 p-8 rounded-xl shadow-2xl">
            <form>
                <label for="name" class="block text-left text-lg font-semibold">Name:</label>
                <input type="text" id="name" name="name" class="border-none focus:ring-4 focus:ring-pink-300 transition duration-300 ease-in-out bg-gray-100 p-3 mb-6 block w-full rounded-lg shadow-md focus:outline-none"><br>

                <label for="email" class="block text-left text-lg font-semibold">Email:</label>
                <input type="email" id="email" name="email" class="border-none focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out bg-gray-100 p-3 mb-6 block w-full rounded-lg shadow-md focus:outline-none"><br>

                <button type="submit" class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wide shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">Submit</button>
            </form>
        </div>
    </div>
</section>
`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<section class="py-20 bg-gray-800 text-white">
    <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">2030s: AR & AI Enhanced Forms</h1>
        <p class="text-lg mb-6">Future forms may include AI-driven enhancements and augmented reality features for immersive experiences.</p>
        <div class="bg-gray-900 p-8 rounded shadow-lg">
            <form>
                <label for="name" class="block text-left">Name:</label>
                <input type="text" id="name" name="name" class="border p-2 mb-4 block w-full rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"><br>

                <label for="email" class="block text-left">Email:</label>
                <input type="email" id="email" name="email" class="border p-2 mb-4 block w-full rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"><br>

                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
            </form>
        </div>
    </div>
</section>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
 "Background Patterns and Effects": {
    title: "Background patterns and Effects",
    "1990": {
      code: `<div>
    <div style="width: 100%; height: 80vh; background-color: #d0cca0; display: flex; justify-content: center; align-items: center; opacity: 0.2; background-image: linear-gradient(30deg, #70095d 12%, transparent 12.5%, transparent 87%, #70095d 87.5%, #70095d), linear-gradient(150deg, #70095d 12%, transparent 12.5%, transparent 87%, #70095d 87.5%, #70095d), linear-gradient(30deg, #70095d 12%, transparent 12.5%, transparent 87%, #70095d 87.5%, #70095d), linear-gradient(150deg, #70095d 12%, transparent 12.5%, transparent 87%, #70095d 87.5%, #70095d), linear-gradient(60deg, #70095d77 25%, transparent 25.5%, transparent 75%, #70095d77 75%, #70095d77), linear-gradient(60deg, #70095d77 25%, transparent 25.5%, transparent 75%, #70095d77 75%, #70095d77); background-size: 28px 49px; background-position: 0 0, 0 0, 14px 25px, 14px 25px, 0 0, 14px 25px;"></div>
    
   

</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div id="app" style="height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; background-image: repeating-linear-gradient(135deg, hsl(242, 31%, 80%) 0px, hsl(242, 31%, 80%) 3px, transparent 3px, transparent 122px), repeating-linear-gradient(225deg, hsl(242, 31%, 80%) 0px, hsl(242, 31%, 80%) 3px, transparent 3px, transparent 122px), linear-gradient(313deg, hsl(242, 31%, 70%), hsl(242, 31%, 70%));">
    <h1 style="text-decoration: underline;">Gradient and Random Color Generator</h1>
    <button @click="randomize">Randomize Gradient</button>
    <button @click="copyCSS">Copy CSS</button>
    <div id="copyBox" style="display:none"></div>
  </div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-family: 'Shrikhand', cursive; position: relative; overflow: hidden;">
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 2;">
        <h1 style="font-size: 4rem; letter-spacing: .2rem; color: rgb(25, 52, 82); font-weight: 600; margin: 1rem 5rem; text-shadow: 1px 1px 0 rgb(77,162,252), -1px -1px 0 rgb(77,162,252), 1px -1px 0 rgb(77,162,252), -1px 1px 0 rgb(77,162,252), 4px 4px 1px rgba(44,88,137,.5), -4px 4px 1px rgba(44,88,137,.5), 4px -4px 1px rgba(44,88,137,.5), -4px -4px 1px rgba(44,88,137,.5);">
            &ldquo;Thundering<br />Typhoons!&rdquo;
        </h1>
        <h2 style="font-size: 2rem; color: rgb(25, 52, 82); font-weight: 600; margin: 1rem 5rem; text-shadow: 1px 1px 0 rgb(77,162,252), -1px -1px 0 rgb(77,162,252), 1px -1px 0 rgb(77,162,252), -1px 1px 0 rgb(77,162,252), 4px 4px 1px rgba(44,88,137,.5), -4px 4px 1px rgba(44,88,137,.5), 4px -4px 1px rgba(44,88,137,.5), -4px -4px 1px rgba(44,88,137,.5);">
            &mdash; Captain Haddock
        </h2>
    </div>
    <div style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; background-color: rgb(35, 74, 116); z-index: 1;">
        <div style="background-color: rgb(35, 74, 116); padding: 3rem; overflow: hidden; position: absolute; left: -50%; top: -50%; height: 200%; width: 200%; transform: rotate(20deg);">
            <div style="background: repeating-linear-gradient(45deg, rgb(27, 57, 89), rgb(27, 57, 89) 70px, rgb(31, 64, 100) 70px, rgb(31, 64, 100) 140px); position: absolute; top: 0; left: 0; height: 200%; width: 100%;"></div>
        </div>
    </div>
</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div style="margin: 0; height: 100vh; background-color: #FF69B4; background-image: radial-gradient(circle, #FFB6C1 20%, transparent 20%), radial-gradient(circle, #DB7093 20%, transparent 20%); background-size: 50px 50px; background-position: 0 0, 25px 25px; display: flex; justify-content: center; align-items: center;">
  <div>
    <h1 style="font-family: 'Comic Sans MS', cursive; font-size: 3rem; color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);">2020s Era</h1>
    <p style="font-family: 'Comic Sans MS', cursive; font-size: 2rem; color: white; text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);">Bold, Colorful, and Playful</p>
  </div>
</div>
`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div style="margin: 0; height: 100vh; background-color: #00CED1; background-image: linear-gradient(45deg, #00ffcc 25%, transparent 25%, transparent 50%, #00ffcc 50%, #00ffcc 75%, transparent 75%, transparent), linear-gradient(45deg, #00ffcc 25%, transparent 25%, transparent 50%, #00ffcc 50%, #00ffcc 75%, transparent 75%, transparent); background-size: 50px 50px; background-position: 0 0, 25px 25px; display: flex; justify-content: center; align-items: center;">
  <div>
    <h1 style="font-family: 'Roboto', sans-serif; font-size: 3rem; color: #00ffcc; text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);">2030s Era</h1>
    <p style="font-family: 'Roboto', sans-serif; font-size: 2rem; color: #00ffcc; text-shadow: 0 0 6px rgba(0, 255, 204, 0.7);">Futuristic, Sleek, and Advanced</p>
  </div>
</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
  Animations: {
    title: 'homepages',
    "1990": {
      code: `<div style="margin: 0; padding: 0; overflow: hidden; background-color: #000; font-family: 'Arial', sans-serif;">
    <div style="width: 300px; height: 100px; margin: 50px auto; padding: 20px; border: 3px solid #ffcc00; text-align: center; color: #fff; position: relative; overflow: hidden;">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: repeating-linear-gradient(135deg, #ff00ff 25%, transparent 25%, transparent 50%, #ff00ff 50%, #ff00ff 75%, transparent 75%); opacity: 0.3; animation: move 3s linear infinite;">
        </div>
        <h1 style="font-size: 1.5em; color: #ff00ff; animation: glow 1s infinite alternate; text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;">
            90s Vibes!
        </h1>
        <h2 style="font-size: 1.2em; color: #00ffff;">Feel the Retro!</h2>
    </div>
    <style>
        @keyframes glow {
            0% { text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff; }
            100% { text-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
        }
        @keyframes move {
            0% { background-position: 0 0; }
            100% { background-position: 100% 100%; }
        }
    </style>
</div>
`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="margin: 0; padding: 0; height: 100vh; display: flex; justify-content: center; align-items: center; flex-wrap: wrap;">

    <div class="container" style="width: 500px; height: 500px; border: 5px solid lightgray; background: royalblue; position: relative; margin: 5px; display: flex; justify-content: center; align-items: center;">
        <div class="shape" style="position: absolute; background-color: burlywood; width: 350px; height: 350px; rotate: 45deg; border-radius: 10%; animation: shape 3s steps(1) infinite;">
        </div>
    </div>

    <div class="container" style="width: 500px; height: 500px; border: 5px solid lightgray; background: royalblue; position: relative; margin: 5px; display: flex; justify-content: center; align-items: center;">
        <div class="circle-with-steps" style="position: absolute; background-color: burlywood; width: 400px; height: 400px; animation: circle-with-steps 3s steps(4) infinite alternate;">
        </div>
    </div>

    <style>
        /* Circle with Steps Animation */
        @keyframes circle-with-steps {
            from { }
            80% { border-radius: 50%; }
            to { border-radius: 50%; }
        }

        /* Shape Animation */
        @keyframes shape {
            from { }
            25% { border-radius: 50%; width: 400px; height: 400px; }
            50% { height: 330px; width: 480px; rotate: 0deg; }
            75% { border-radius: 140px 140px 140px 30px; height: 350px; width: 350px; rotate: 135deg; }
            to { border-radius: 140px 140px 140px 30px; }
        }
    </style>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="background-color: #000; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
    <h1 style="
        display: inline-block; 
        background-image: linear-gradient(90deg, #1d4adb 0%, #bbb4ff 43.5%, #1a30ff 89.5%); 
        background-size: 300%; 
        -webkit-background-clip: text; 
        background-clip: text; 
        -webkit-text-fill-color: transparent; 
        text-fill-color: transparent; 
        animation: Gradient 5s ease infinite;
    ">Animated gradient text</h1>
    <style>
        /* Animation Keyframes */
        @keyframes Gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    </style>
</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div style="margin: 0; background-color: #000; color: #fff; font-family: 'Courier New', monospace; overflow-x: hidden;">
    <div class="marquee" style="overflow: hidden; white-space: nowrap; box-shadow: 0 0 10px #fff;">
        <div class="marquee__group" style="display: inline-block; animation: marquee 15s linear infinite;">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3MzQ&ixlib=rb-1.2.1&q=80&w=400" alt="" style="height: 200px; margin-right: 10px;">
            <img src="https://images.unsplash.com/photo-1583511666445-775f1f2116f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3MzQ&ixlib=rb-1.2.1&q=80&w=400" alt="" style="height: 200px; margin-right: 10px;">
            <img src="https://images.unsplash.com/photo-1586917383423-c25e88ac05ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3NzU&ixlib=rb-1.2.1&q=80&w=400" alt="" style="height: 200px; margin-right: 10px;">
            <img src="https://images.unsplash.com/photo-1560743173-567a3b5658b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3NzU&ixlib=rb-1.2.1&q=80&w=400" alt="" style="height: 200px; margin-right: 10px;">
            <img src="https://images.unsplash.com/photo-1603232644140-bb47da511b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400" alt="" style="height: 200px; margin-right: 10px;">
            <img src="https://images.unsplash.com/photo-1603232644140-bb47da511b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400" alt="" style="height: 200px; margin-right: 10px;">
            <img src="https://images.unsplash.com/photo-1603232644140-bb47da511b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400" alt="" style="height: 200px; margin-right: 10px;">
        </div>
    </div>

    <style>
        @keyframes marquee {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-100%, 0); }
        }
    </style>
</div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-image: linear-gradient(to top, #09203f 0%, #537895 100%); margin: 0; padding: 0; box-sizing: border-box;">
    <div style="display: flex; gap: 30px;">
        <a class="icon instagram" aria-label="Instagram" href="https://www.instagram.com/spidey._.01/" target="_blank" style="position: relative; height: 80px; width: 80px; background-image: url('https://cdn-icons-png.freepik.com/512/2111/2111463.png?ga=GA1.1.2025074602.1718813500'); background-size: cover; border-radius: 50%; animation: wave 4s ease-in-out infinite; transition: transform 0.3s ease, background-image 0.3s ease;">
        </a>
        <a class="icon x" aria-label="X" href="https://x.com/megh_bari" target="_blank" style="position: relative; height: 80px; width: 80px; background-image: url('https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1720022408~exp=1720023008~hmac=4fe274d9aaff4ab640fb81d9b4b3ff00cf8c80c719f4ff3c8ef0454de9140c53'); background-size: cover; border-radius: 50%; animation: wave 4s ease-in-out infinite; animation-delay: 1.5s; transition: transform 0.3s ease, background-image 0.3s ease;">
        </a>
        <a class="icon codepen" aria-label="codepen" href="https://codepen.io/megh-bari" target="_blank" style="position: relative; height: 80px; width: 80px; background-image: url('https://www.iconbolt.com/iconsets/phosphor-regular/codepen-logo.png'); background-size: cover; border-radius: 50%; animation: wave 4s ease-in-out infinite; animation-delay: 2s; transition: transform 0.3s ease, background-image 0.3s ease;">
        </a>
        <a class="icon linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/megh-bari-2b0700314/" target="_blank" style="position: relative; height: 80px; width: 80px; background-image: url('https://cdn-icons-png.freepik.com/512/61/61133.png'); background-size: cover; border-radius: 50%; animation: wave 4s ease-in-out infinite; animation-delay: 2.5s; transition: transform 0.3s ease, background-image 0.3s ease;">
        </a>
        <a class="icon github" aria-label="GitHub" href="https://github.com/megh-bari" target="_blank" style="position: relative; height: 80px; width: 80px; background-image: url('https://cdn-icons-png.freepik.com/512/25/25634.png'); background-size: cover; border-radius: 50%; animation: wave 4s ease-in-out infinite; animation-delay: 3s; transition: transform 0.3s ease, background-image 0.3s ease;">
        </a>
    </div>
    <style>
        /* Keyframes for the wave animation */
        @keyframes wave {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    </style>
</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
"Tooltips": {
    title: "Tooltips",
    "1990": {
      code: `<div style="background-color: #121212; color: #fff; font-family: Arial, sans-serif; padding: 20px; display: flex; flex-direction: column; align-items: center;">

    <h1 style="text-align: center;">Era Tooltips</h1>

    <!-- 1990s Tooltip -->
    <div style="position: relative; display: inline-block; cursor: pointer; margin: 20px; padding: 10px; background: #ff4d4d; color: #fff; border-radius: 5px; font-weight: bold;">
        Hover over me (1990s)
        <div style="visibility: hidden; width: 220px; background-color: #000; color: #ff4d4d; text-align: center; border-radius: 10px; padding: 10px; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -110px; opacity: 0; transition: visibility 0s, opacity 0.5s linear; box-shadow: 0 0 10px rgba(255, 77, 77, 0.5);">
            🎉 Bright Colors and Bold Patterns!
        </div>
    </div>
    <script>
        // JavaScript to handle tooltip visibility on hover
        const tooltips = document.querySelectorAll('div[style*="position: relative"]');

        tooltips.forEach(tooltip => {
            const tooltipText = tooltip.querySelector('div[style*="visibility: hidden"]');
            tooltip.onmouseover = function() {
                tooltipText.style.visibility = 'visible';
                tooltipText.style.opacity = '1';
            };
            tooltip.onmouseout = function() {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            };
        });
    </script>

</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="position: relative; display: inline-block; margin: 20px;">
    <span style="cursor: pointer; color: #00ccff; font-weight: bold;">Hover over me (2000s)</span>
    <div style="visibility: hidden; width: 200px; background-color: #cc00ff; color: #fff; text-align: center; border-radius: 10px; padding: 10px; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -100px; opacity: 0; transition: visibility 0s, opacity 0.5s linear; border: 2px solid #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
        💻 Tech-Savvy & Cool 🌐
    </div>
</div>
<script>
    const tooltip2 = document.querySelectorAll('span')[1];
    tooltip2.onmouseover = function() {
        tooltip2.nextElementSibling.style.visibility = 'visible';
        tooltip2.nextElementSibling.style.opacity = '1';
    }
    tooltip2.onmouseout = function() {
        tooltip2.nextElementSibling.style.visibility = 'hidden';
        tooltip2.nextElementSibling.style.opacity = '0';
    }
</script>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="position: relative; display: inline-block; margin: 20px;">
    <span style="background-color: #ffcc00; color: white; padding: 10px; border-radius: 10px; border: 2px solid #fff; cursor: pointer; animation: bounce 1s infinite; transition: transform 0.2s;">
        2010s
    </span>
    <div style="visibility: hidden; width: 150px; background-color: #ff6600; color: #fff; text-align: center; border-radius: 10px; padding: 10px; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -75px; transition: visibility 0s, opacity 0.5s linear; opacity: 0; animation: fadeIn 0.5s;">
        🌈 Minimalism & Flat Design 🖥️
    </div>
</div>
<script>
    const tooltip3 = document.querySelectorAll('span')[2];
    tooltip3.onmouseover = function() {
        tooltip3.nextElementSibling.style.visibility = 'visible';
        tooltip3.nextElementSibling.style.opacity = '1';
    }
    tooltip3.onmouseout = function() {
        tooltip3.nextElementSibling.style.visibility = 'hidden';
        tooltip3.nextElementSibling.style.opacity = '0';
    }
</script>
`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div style="position: relative; display: inline-block; margin: 20px;">
    <span style="background-color: #00ff00; color: white; padding: 10px; border-radius: 10px; border: 2px solid #fff; cursor: pointer; animation: bounce 1s infinite; transition: transform 0.2s;">
        2020s
    </span>
    <div style="visibility: hidden; width: 150px; background-color: #00ccff; color: #000; text-align: center; border-radius: 10px; padding: 10px; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -75px; transition: visibility 0s, opacity 0.5s linear; opacity: 0; animation: slideIn 0.5s;">
        🌟 Bold & Bright Colors 🌈
    </div>
</div>
<script>
    const tooltip4 = document.querySelectorAll('span')[3];
    tooltip4.onmouseover = function() {
        tooltip4.nextElementSibling.style.visibility = 'visible';
        tooltip4.nextElementSibling.style.opacity = '1';
    }
    tooltip4.onmouseout = function() {
        tooltip4.nextElementSibling.style.visibility = 'hidden';
        tooltip4.nextElementSibling.style.opacity = '0';
    }
</script>

`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div style="position: relative; display: inline-block; margin: 20px;">
    <span style="background-color: #6600ff; color: white; padding: 10px; border-radius: 10px; border: 2px solid #fff; cursor: pointer; animation: bounce 1s infinite; transition: transform 0.2s;">
        2030s
    </span>
    <div style="visibility: hidden; width: 150px; background-color: #ff00cc; color: #fff; text-align: center; border-radius: 10px; padding: 10px; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -75px; transition: visibility 0s, opacity 0.5s linear; opacity: 0; animation: fadeIn 0.5s;">
        🚀 Futuristic & Innovative 🔮
    </div>
</div>
<script>
    const tooltip5 = document.querySelectorAll('span')[4];
    tooltip5.onmouseover = function() {
        tooltip5.nextElementSibling.style.visibility = 'visible';
        tooltip5.nextElementSibling.style.opacity = '1';
    }
    tooltip5.onmouseout = function() {
        tooltip5.nextElementSibling.style.visibility = 'hidden';
        tooltip5.nextElementSibling.style.opacity = '0';
    }
</script>
 `,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },

  "Transitions": {
    title: "Background patterns and Effects",
    "1990": {
      code: ` 
          <style>
        /* Keyframes for animations */
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes slideIn {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes zoomIn {
            0% {
                transform: scale(0.5);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
      
      <div style="width: 300px; height: 100px; margin: 20px auto; padding: 20px; border: 3px solid #ffcc00; text-align: center; background-color: #ff00ff; animation: bounce 1s infinite; transition: background-color 0.5s;">
        <h1 style="font-size: 1.5em; color: #00ffff;">1990s Vibes!</h1>
        <h2 style="font-size: 1.2em;">Feel the Retro!</h2>
    </div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` 
       <style>
        /* Keyframes for animations */
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes slideIn {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes zoomIn {
            0% {
                transform: scale(0.5);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
      
      
      <div style="width: 300px; height: 100px; margin: 20px auto; padding: 20px; border: 3px solid #00ccff; text-align: center; background-color: #cc00ff; animation: fadeIn 1s; transition: transform 0.5s;">
        <h1 style="font-size: 1.5em; color: #ffcc00;">2000s Cool!</h1>
        <h2 style="font-size: 1.2em;">The New Millennium!</h2>
    </div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `
        <style>
        /* Keyframes for animations */
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes slideIn {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes zoomIn {
            0% {
                transform: scale(0.5);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
      
      <div style="width: 300px; height: 100px; margin: 20px auto; padding: 20px; border: 3px solid #ff6600; text-align: center; background-color: #ffcc00; animation: slideIn 1s; transition: border 0.5s;">
        <h1 style="font-size: 1.5em; color: #ff6600;">2010s Trend!</h1>
        <h2 style="font-size: 1.2em;">Simplicity is Key!</h2>
    </div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `
        <style>
        /* Keyframes for animations */
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes slideIn {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes zoomIn {
            0% {
                transform: scale(0.5);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
      
      <div style="width: 300px; height: 100px; margin: 20px auto; padding: 20px; border: 3px solid #00ff00; text-align: center; background-color: #00ccff; animation: zoomIn 1s; transition: color 0.5s;">
        <h1 style="font-size: 1.5em; color: #00ff00;">2020s Style!</h1>
        <h2 style="font-size: 1.2em; color: #fff;">Bold & Bright!</h2>
    </div>
`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `
        <style>
        /* Keyframes for animations */
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes slideIn {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes zoomIn {
            0% {
                transform: scale(0.5);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
      
      <div style="width: 300px; height: 100px; margin: 20px auto; padding: 20px; border: 3px solid #ff00cc; text-align: center; background-color: #6600ff; animation: rotate 2s infinite; transition: transform 0.5s;">
        <h1 style="font-size: 1.5em; color: #ffcc00;">2030s Future!</h1>
        <h2 style="font-size: 1.2em;">Innovate & Inspire!</h2>
    </div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
  "Cards": {
    title: "Cards",
    "1990": {
      code: `<div style="width: 300px; border: 1px solid #ccc; padding: 15px; margin: 10px;">
    <h2 style="font-family: Arial, sans-serif;">1990s Card Title</h2>
    <p style="font-family: Arial, sans-serif; color: #333;">This is a simple description for the card content. Basic HTML structure.</p>
</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="width: 300px; border: 1px solid #ccc; padding: 15px; margin: 10px;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqjthdjANsPfQLCpLry8Op4UDexxsRrPIvQ&s" alt="Image" style="width: 100%; border-radius: 5px;">
    <h2 style="font-family: Arial, sans-serif;">2000s Card Title</h2>
    <p style="font-family: Arial, sans-serif; color: #333;">This card includes an image and basic styling to enhance its look.</p>
</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="display: grid; height: 100vh; overflow: hidden; position: relative; place-content: center; background-color: #010c15; font-family: 'Kode Mono Variable', monospace; margin: 0; padding: 0; box-sizing: border-box;">

<main class="container" style="width: 100%; min-height: 100vh; gap: 3rem; display: flex; align-items: center; justify-content: center;">
    <div class="card animated" style="--size: 300px; --radius: 0.75rem; margin: 0 auto; padding: 2rem; width: var(--size); background: #1c1f2b; text-align: center; position: relative; border-radius: var(--radius);">
        <h1 style="margin: 0; color: #26d0ce;">Nice Border</h1>
        <p style="color: #ffffff;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices tortor sem, et faucibus elit feugiat a. In dapibus euismod eros, eget facilisis neque accumsan eget.</p>
        <div style="content: ''; z-index: -1; width: 100%; height: 100%; position: absolute; translate: -50% -50%; inset-block-start: 50%; inset-inline-start: 50%; border: 8px solid transparent; border-radius: var(--radius);"></div>
        <div style="content: ''; z-index: -1; width: 100%; height: 100%; position: absolute; translate: -50% -50%; inset-block-start: 50%; inset-inline-start: 50%; border: 8px solid rgba(38, 208, 206, 0.6); border-radius: var(--radius);"></div>
    </div>
</main>

</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div>
    <div class="Abt-pg">
        <img alt="Tecky AaryaN" class="Abt-img" src="https://blogger.googleusercontent.com/img/a/AVvXsEhsw7PUP_5frj-mDVttDrduB9YN2e3b1OtO_UswtTwFc2dURIs_nY3qlZEkXNhwguwTEiWc1Fc_MsFP0mqoKOuFfiK0WxvV8dt5cUIi4lko3m_myOE_OhwXN9q4jQhALElk5aOpDIQqmhRfYA2FzhS1Rp0JUdHrxlFpwaY-qpMIUpZyfN6vHTWzJfd-jWQ=s1453" title="Tecky AaryaN" />
      </div>

      <style>
        @import url("https://fonts.googleapis.com/css?family=Open+Sans|Rock+Salt|Shadows+Into+Light|Cedarville+Cursive");
        .Abt-pg {
          text-align: center;
        }

        .Abt-img {
          text-align: center;
          width: 180px;
          height: 180px!important;
          margin: 30px auto!important;
          animation: ripple 0.6s linear infinite;
          border-radius: 100px!important;
        }

        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.1), 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 40px rgba(255, 0, 0, 0.1), 0 0 0 60px rgba(255, 0, 0, 0.1);
          }

          100% {
            box-shadow: 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 40px rgba(255, 0, 0, 0.1), 0 0 0 60px rgba(255, 0, 0, 0.1), 0 0 0 80px rgba(255, 0, 0, 0.1);
          }
        }

        .st-nm {
          color: #555eed;
          word-spacing: -8px;
        }

        .pTtl {
          display: none;
        }

        .pBd h1 {
          margin: 1.4em 0 20px;
        }

        .signature {
          font-family: "Cedarville Cursive", cursive;
          font-size: 1.4em;
        }

        .Abt-footer {
          margin-top: 65px!important;
          font-style: italic;
          font-family: cursive;
        }
      </style>

      <style>
        /*<![CDATA[*/
        /* About Author Page=*/
        .aAthrP {
          font-size: 0.9rem;
          color: #08102b;
        }

        .aAthrP svg {
          width: 18px;
          height: 18px;
          fill: none!important;
          stroke: #fefefe;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.5;
          margin-right: 7px;
        }

        .webSts svg {
          stroke: #08102b;
        }

        .aAdm {
          padding: 60px 0 20px 0;
        }

        .aAdm .aAdmC {
          justify-content: center;
          position: relative;
          display: flex;
          max-width: 95%;
          margin: auto;
          padding: 80px 30px 95px 30px;
          background-color: #fff;
          box-shadow: 0 10px 40px rgba(149, 157, 165, .2);
          border-radius: 20px;
        }

        .aAdmC img {
          position: absolute;
          top: -60px;
          background-color: #ffeaef;
          width: 120px;
          height: 120px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
          padding: 0;
          border: 7px solid #fff;
          border-radius: 50%;
          pointer-events: none;
        }

        .aAdmD {
          text-align: center;
        }

        .aAdmD p {
          margin: 0;
          line-height: 1.7em;
        }

        .aAdmB {
          text-align: center;
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
        }

        .aAdmB .btn {
          display: inline-flex;
          align-items: center;
          margin: 0;
          padding: 10px 15px;
          outline: 0;
          border: 0;
          border-radius: 50px;
          line-height: 20px;
          color: #fefefe;
          background-color: #ff0000;
          font-size: 13px;
          font-family: inherit;
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .aAdmB .btn:hover {
          opacity: .8;
          transform: scale(0.97);
        }

        .webStsH {
          margin: 15px auto;
          text-align: center;
          font-size: 1.7rem;
          font-weight: 700;
          font-family: inherit;
        }

        .webSts {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 12px auto;
        }

        .webStsC {
          background-color: #fff;
          display: flex;
          justify-content: center;
          padding: 8px;
          width: 95%;
          margin: 12px auto;
          box-shadow: 0 5px 20px rgba(149, 157, 165, .2);
          border-radius: 20px;
        }

        .webStsC .stats {
          height: 80px;
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin: 0 35px;
        }

        .webStsC .statsNa {
          display: inline-flex;
          align-items: center;
          font-size: 16px;
        }

        .webStsC .statsNu {
          font-family: inherit;
          font-size: 30px;
          margin-top: 6px;
          font-weight: normal;
        }

        .drkM .aAthrP {
          color: #fefefe;
        }

        .drkM .aAdmC {
          background-color: #252526;
          box-shadow: 0 10px 40px rgba(0, 0, 0, .2);
        }

        .drkM .aAdmC img {
          background-image: linear-gradient(to top right, #363636, #717171);
          border-color: #252526;
          box-shadow: 0 10px 40px rgba(0, 0, 0, .2);
        }

        .drkM .aAdmB .btn {
          background-color: #ff0000;
        }

        .drkM .webStsC {
          background-color: #252526;
          box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
        }

        .drkM .webSts svg {
          stroke: #fefefe;
        }

        @media screen and (min-width: 641px) {
          .aAdm .aAdmC {
            max-width: 97%;
          }

          .webSts {
            flex-direction: row;
          }

          .webStsC {
            max-width: 46%;
            margin: 12px;
          }
        }
        /*]]>*/
      </style>

      <script>
        /*<![CDATA[*/
        function webStats(json) {
          document.write(parseInt(json.feed.openSearch$totalResults.$t, 10))
        }
        /*]]>*/
      </script>

      <!--[ About Author Page ]-->
      <div class="aAthrP">
        <!--[ About Author ]-->
        <div class="aAdm">
          <div class="aAdmC">
            <!--[ Author Description ]-->
            <div class="aAdmD">
              <p>We must be willing to get rid of the life we've planned, so as to have the life that is waiting for us.</p>
            </div>
            <!--[ Author Button ]-->
            <div class="aAdmB">
              <a class="btn" href="#">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
            
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div class="bg-gray-900 flex items-center justify-center min-h-screen">

    <div class="max-w-md w-full p-8 border border-primary rounded-xl shadow-xl backdrop-blur-md bg-gray-800/50 text-white transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/60">
        <img src="https://t3.ftcdn.net/jpg/04/78/81/32/360_F_478813213_eCDJfwddSyZEfoo1nZo6QZIKUKFGD3jU.jpg" alt="Image" class="rounded-xl mb-4">
        <h2 class="text-3xl font-bold text-primary mb-2">Futuristic Card Title</h2>
        <p class="text-lg text-secondary mb-4">This card incorporates glassmorphism, interactive buttons, and social icons for a modern user experience.</p>
        <div class="flex space-x-4">
            <button class="bg-primary text-gray-900 py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition-all duration-500">Learn More</button>
            <button class="bg-gray-600 py-2 px-4 rounded-lg">Share</button>
        </div>
        <div class="mt-4">
            <a href="#" class="text-primary hover:text-secondary mr-2">🔗</a>
            <a href="#" class="text-primary hover:text-secondary">🌐</a>
        </div>
    </div>

</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },

  "Sliders / Carousels": {
    title: "Sliders / Carousels",
    "1990": {
      code: `<div style="background-color: #121212; color: #fff; font-family: Arial, sans-serif; padding: 20px; text-align: center;">

<h1 style="margin-bottom: 20px;">Decade Slider</h1>

<div style="position: relative; width: 80%; max-width: 600px; margin: auto; overflow: hidden; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);">
    <div id="slides" style="display: flex; transition: transform 0.5s ease; opacity: 1;">
        <!-- 1990s Slide -->
        <div class="slide" style="min-width: 100%; box-sizing: border-box; padding: 40px; background: #ff4d4d; border-radius: 10px; opacity: 0; animation: fade 0.5s forwards;">
            <h2>1990s</h2>
            <p>🎉 Bright Colors and Bold Patterns!</p>
        </div>
        

<script>
    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.getElementById('slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        
        // Reset opacity for all slides
        document.querySelectorAll('.slide').forEach((slide) => {
            slide.style.opacity = '0';
        });

        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        
        slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
        // Set opacity of current slide to 1
        slides.children[slideIndex].style.opacity = '1';
    }

    function changeSlide(n) {
        showSlide(slideIndex + n);
    }

    // Show the first slide initially
    showSlide(slideIndex);
</script>

<style>
    @keyframes fade {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>

</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: `<div style="background-color: #121212; color: #fff; font-family: Arial, sans-serif; padding: 20px; text-align: center;">

<h1 style="margin-bottom: 20px;">Decade Slider</h1>

<div style="position: relative; width: 80%; max-width: 600px; margin: auto; overflow: hidden; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);">
    <div id="slides" style="display: flex; transition: transform 0.5s ease; opacity: 1;">
         <div class="slide" style="min-width: 100%; box-sizing: border-box; padding: 40px; background: #00ccff; border-radius: 10px; opacity: 0; animation: fade 0.5s forwards;">
            <h2>2000s</h2>
            <p>💻 Tech Influenced and Sleek Designs!</p>
        </div>
        

<script>
    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.getElementById('slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        
        // Reset opacity for all slides
        document.querySelectorAll('.slide').forEach((slide) => {
            slide.style.opacity = '0';
        });

        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        
        slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
        // Set opacity of current slide to 1
        slides.children[slideIndex].style.opacity = '1';
    }

    function changeSlide(n) {
        showSlide(slideIndex + n);
    }

    // Show the first slide initially
    showSlide(slideIndex);
</script>

<style>
    @keyframes fade {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>

</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div class="slide" style="min-width: 100%; box-sizing: border-box; padding: 40px; background: #ff9900; border-radius: 10px; opacity: 0; animation: fade 0.5s forwards;">
            <h2>2010s</h2>
            <p>🌈 Minimalistic and Flat Aesthetics!</p>
        </div>
        

<script>
    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.getElementById('slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        
        // Reset opacity for all slides
        document.querySelectorAll('.slide').forEach((slide) => {
            slide.style.opacity = '0';
        });

        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        
        slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
        // Set opacity of current slide to 1
        slides.children[slideIndex].style.opacity = '1';
    }

    function changeSlide(n) {
        showSlide(slideIndex + n);
    }

    // Show the first slide initially
    showSlide(slideIndex);
</script>

<style>
    @keyframes fade {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>

</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div>
    <div class="Abt-pg">
        <img alt="Tecky AaryaN" class="Abt-img" src="https://blogger.googleusercontent.com/img/a/AVvXsEhsw7PUP_5frj-mDVttDrduB9YN2e3b1OtO_UswtTwFc2dURIs_nY3qlZEkXNhwguwTEiWc1Fc_MsFP0mqoKOuFfiK0WxvV8dt5cUIi4lko3m_myOE_OhwXN9q4jQhALElk5aOpDIQqmhRfYA2FzhS1Rp0JUdHrxlFpwaY-qpMIUpZyfN6vHTWzJfd-jWQ=s1453" title="Tecky AaryaN" />
      </div>

      <style>
        @import url("https://fonts.googleapis.com/css?family=Open+Sans|Rock+Salt|Shadows+Into+Light|Cedarville+Cursive");
        .Abt-pg {
          text-align: center;
        }

        .Abt-img {
          text-align: center;
          width: 180px;
          height: 180px!important;
          margin: 30px auto!important;
          animation: ripple 0.6s linear infinite;
          border-radius: 100px!important;
        }

        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.1), 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 40px rgba(255, 0, 0, 0.1), 0 0 0 60px rgba(255, 0, 0, 0.1);
          }

          100% {
            box-shadow: 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 40px rgba(255, 0, 0, 0.1), 0 0 0 60px rgba(255, 0, 0, 0.1), 0 0 0 80px rgba(255, 0, 0, 0.1);
          }
        }

        .st-nm {
          color: #555eed;
          word-spacing: -8px;
        }

        .pTtl {
          display: none;
        }

        .pBd h1 {
          margin: 1.4em 0 20px;
        }

        .signature {
          font-family: "Cedarville Cursive", cursive;
          font-size: 1.4em;
        }

        .Abt-footer {
          margin-top: 65px!important;
          font-style: italic;
          font-family: cursive;
        }
      </style>

      <style>
        /*<![CDATA[*/
        /* About Author Page=*/
        .aAthrP {
          font-size: 0.9rem;
          color: #08102b;
        }

        .aAthrP svg {
          width: 18px;
          height: 18px;
          fill: none!important;
          stroke: #fefefe;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.5;
          margin-right: 7px;
        }

        .webSts svg {
          stroke: #08102b;
        }

        .aAdm {
          padding: 60px 0 20px 0;
        }

        .aAdm .aAdmC {
          justify-content: center;
          position: relative;
          display: flex;
          max-width: 95%;
          margin: auto;
          padding: 80px 30px 95px 30px;
          background-color: #fff;
          box-shadow: 0 10px 40px rgba(149, 157, 165, .2);
          border-radius: 20px;
        }

        .aAdmC img {
          position: absolute;
          top: -60px;
          background-color: #ffeaef;
          width: 120px;
          height: 120px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
          padding: 0;
          border: 7px solid #fff;
          border-radius: 50%;
          pointer-events: none;
        }

        .aAdmD {
          text-align: center;
        }

        .aAdmD p {
          margin: 0;
          line-height: 1.7em;
        }

        .aAdmB {
          text-align: center;
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
        }

        .aAdmB .btn {
          display: inline-flex;
          align-items: center;
          margin: 0;
          padding: 10px 15px;
          outline: 0;
          border: 0;
          border-radius: 50px;
          line-height: 20px;
          color: #fefefe;
          background-color: #ff0000;
          font-size: 13px;
          font-family: inherit;
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .aAdmB .btn:hover {
          opacity: .8;
          transform: scale(0.97);
        }

        .webStsH {
          margin: 15px auto;
          text-align: center;
          font-size: 1.7rem;
          font-weight: 700;
          font-family: inherit;
        }

        .webSts {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 12px auto;
        }

        .webStsC {
          background-color: #fff;
          display: flex;
          justify-content: center;
          padding: 8px;
          width: 95%;
          margin: 12px auto;
          box-shadow: 0 5px 20px rgba(149, 157, 165, .2);
          border-radius: 20px;
        }

        .webStsC .stats {
          height: 80px;
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin: 0 35px;
        }

        .webStsC .statsNa {
          display: inline-flex;
          align-items: center;
          font-size: 16px;
        }

        .webStsC .statsNu {
          font-family: inherit;
          font-size: 30px;
          margin-top: 6px;
          font-weight: normal;
        }

        .drkM .aAthrP {
          color: #fefefe;
        }

        .drkM .aAdmC {
          background-color: #252526;
          box-shadow: 0 10px 40px rgba(0, 0, 0, .2);
        }

        .drkM .aAdmC img {
          background-image: linear-gradient(to top right, #363636, #717171);
          border-color: #252526;
          box-shadow: 0 10px 40px rgba(0, 0, 0, .2);
        }

        .drkM .aAdmB .btn {
          background-color: #ff0000;
        }

        .drkM .webStsC {
          background-color: #252526;
          box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
        }

        .drkM .webSts svg {
          stroke: #fefefe;
        }

        @media screen and (min-width: 641px) {
          .aAdm .aAdmC {
            max-width: 97%;
          }

          .webSts {
            flex-direction: row;
          }

          .webStsC {
            max-width: 46%;
            margin: 12px;
          }
        }
        /*]]>*/
      </style>

      <script>
        /*<![CDATA[*/
        function webStats(json) {
          document.write(parseInt(json.feed.openSearch$totalResults.$t, 10))
        }
        /*]]>*/
      </script>

      <!--[ About Author Page ]-->
      <div class="aAthrP">
        <!--[ About Author ]-->
        <div class="aAdm">
          <div class="aAdmC">
            <!--[ Author Description ]-->
            <div class="aAdmD">
              <p>We must be willing to get rid of the life we've planned, so as to have the life that is waiting for us.</p>
            </div>
            <!--[ Author Button ]-->
            <div class="aAdmB">
              <a class="btn" href="#">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
            
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div class="bg-gray-900 flex items-center justify-center min-h-screen">

    <div class="max-w-md w-full p-8 border border-primary rounded-xl shadow-xl backdrop-blur-md bg-gray-800/50 text-white transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/60">
        <img src="https://t3.ftcdn.net/jpg/04/78/81/32/360_F_478813213_eCDJfwddSyZEfoo1nZo6QZIKUKFGD3jU.jpg" alt="Image" class="rounded-xl mb-4">
        <h2 class="text-3xl font-bold text-primary mb-2">Futuristic Card Title</h2>
        <p class="text-lg text-secondary mb-4">This card incorporates glassmorphism, interactive buttons, and social icons for a modern user experience.</p>
        <div class="flex space-x-4">
            <button class="bg-primary text-gray-900 py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition-all duration-500">Learn More</button>
            <button class="bg-gray-600 py-2 px-4 rounded-lg">Share</button>
        </div>
        <div class="mt-4">
            <a href="#" class="text-primary hover:text-secondary mr-2">🔗</a>
            <a href="#" class="text-primary hover:text-secondary">🌐</a>
        </div>
    </div>

</div>`,
      explanation: {
        details: 'button is awesomely designed',
      },
    },
  },
"Progress Bars": {
    title: "Progress Bars",
    "1990": {
      code: `<div style="background-color: #121212; color: #fff; font-family: Arial, sans-serif; padding: 20px;">

<h1 style="text-align: center; margin-bottom: 40px;"></h1>

<!-- 1990s Progress Bar -->
<div style="margin-bottom: 20px;">
    <p style="margin: 0;">1990s</p>
    <div style="background-color: #333; width: 100%; height: 30px; border-radius: 5px; overflow: hidden;">
        <div style="background-color: #ff4d4d; width: 10%; height: 100%; animation: progress90 2s ease-out;"></div>
    </div>
</div>

<style>
    @keyframes progress90 {
        0% { width: 0%; }
        100% { width: 10%; }
    }

    @keyframes progress00 {
        0% { width: 0%; }
        100% { width: 40%; }
    }

    @keyframes progress10 {
        0% { width: 0%; }
        100% { width: 70%; }
    }

    @keyframes progress20 {
        0% { width: 0%; }
        100% { width: 90%; }
    }

    @keyframes progress30 {
        0% { width: 0%; }
        100% { width: 100%; }
    }
</style>

</div>`,
      explanation: {
        details: 'A navigation bar that is constructed with a simple HTML table with basic links. ',
      },
    },
    "2000": {
      code: ` <div style="background-color: #121212; color: #fff; font-family: Arial, sans-serif; padding: 20px;">

<h1 style="text-align: center; margin-bottom: 40px;"></h1>

<!-- 2000s Progress Bar -->
<div style="margin-bottom: 20px;">
    <p style="margin: 0;">2000s</p>
    <div style="background-color: #333; width: 100%; height: 30px; border-radius: 5px; overflow: hidden;">
        <div style="background-color: #00ccff; width: 40%; height: 100%; animation: progress00 2s ease-out;"></div>
    </div>
</div>

<style>
    @keyframes progress90 {
        0% { width: 0%; }
        100% { width: 10%; }
    }

    @keyframes progress00 {
        0% { width: 0%; }
        100% { width: 40%; }
    }

    @keyframes progress10 {
        0% { width: 0%; }
        100% { width: 70%; }
    }

    @keyframes progress20 {
        0% { width: 0%; }
        100% { width: 90%; }
    }

    @keyframes progress30 {
        0% { width: 0%; }
        100% { width: 100%; }
    }
</style>

</div>`,
      explanation: {
        details: 'A CSS dropdown menu that appears when hovering over a "Menu" button. ',
      },
    },
    "2010": {
      code: `<div style="background-color: #121212; color: #fff; font-family: Arial, sans-serif; padding: 20px;">

<h1 style="text-align: center; margin-bottom: 40px;"></h1>

<div style="margin-bottom: 20px;">
    <p style="margin: 0;">2010s</p>
    <div style="background-color: #333; width: 100%; height: 30px; border-radius: 5px; overflow: hidden;">
        <div style="background-color: #ff9900; width: 70%; height: 100%; animation: progress10 2s ease-out;"></div>
    </div>
</div>

<style>
    @keyframes progress90 {
        0% { width: 0%; }
        100% { width: 10%; }
    }

    @keyframes progress00 {
        0% { width: 0%; }
        100% { width: 40%; }
    }

    @keyframes progress10 {
        0% { width: 0%; }
        100% { width: 70%; }
    }

    @keyframes progress20 {
        0% { width: 0%; }
        100% { width: 90%; }
    }

    @keyframes progress30 {
        0% { width: 0%; }
        100% { width: 100%; }
    }
</style>

</div>`,
      explanation: {
        details: 'A responsive hamburger menu that collapses for mobile and expands for desktop, using modern CSS and JavaScript. ',
      },
    },
    "2020": {
      code: `<div>
    <div class="Abt-pg">
        <img alt="Tecky AaryaN" class="Abt-img" src="https://blogger.googleusercontent.com/img/a/AVvXsEhsw7PUP_5frj-mDVttDrduB9YN2e3b1OtO_UswtTwFc2dURIs_nY3qlZEkXNhwguwTEiWc1Fc_MsFP0mqoKOuFfiK0WxvV8dt5cUIi4lko3m_myOE_OhwXN9q4jQhALElk5aOpDIQqmhRfYA2FzhS1Rp0JUdHrxlFpwaY-qpMIUpZyfN6vHTWzJfd-jWQ=s1453" title="Tecky AaryaN" />
      </div>

      <style>
        @import url("https://fonts.googleapis.com/css?family=Open+Sans|Rock+Salt|Shadows+Into+Light|Cedarville+Cursive");
        .Abt-pg {
          text-align: center;
        }

        .Abt-img {
          text-align: center;
          width: 180px;
          height: 180px!important;
          margin: 30px auto!important;
          animation: ripple 0.6s linear infinite;
          border-radius: 100px!important;
        }

        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.1), 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 40px rgba(255, 0, 0, 0.1), 0 0 0 60px rgba(255, 0, 0, 0.1);
          }

          100% {
            box-shadow: 0 0 0 20px rgba(255, 0, 0, 0.1), 0 0 0 40px rgba(255, 0, 0, 0.1), 0 0 0 60px rgba(255, 0, 0, 0.1), 0 0 0 80px rgba(255, 0, 0, 0.1);
          }
        }

        .st-nm {
          color: #555eed;
          word-spacing: -8px;
        }

        .pTtl {
          display: none;
        }

        .pBd h1 {
          margin: 1.4em 0 20px;
        }

        .signature {
          font-family: "Cedarville Cursive", cursive;
          font-size: 1.4em;
        }

        .Abt-footer {
          margin-top: 65px!important;
          font-style: italic;
          font-family: cursive;
        }
      </style>

      <style>
        /*<![CDATA[*/
        /* About Author Page=*/
        .aAthrP {
          font-size: 0.9rem;
          color: #08102b;
        }

        .aAthrP svg {
          width: 18px;
          height: 18px;
          fill: none!important;
          stroke: #fefefe;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.5;
          margin-right: 7px;
        }

        .webSts svg {
          stroke: #08102b;
        }

        .aAdm {
          padding: 60px 0 20px 0;
        }

        .aAdm .aAdmC {
          justify-content: center;
          position: relative;
          display: flex;
          max-width: 95%;
          margin: auto;
          padding: 80px 30px 95px 30px;
          background-color: #fff;
          box-shadow: 0 10px 40px rgba(149, 157, 165, .2);
          border-radius: 20px;
        }

        .aAdmC img {
          position: absolute;
          top: -60px;
          background-color: #ffeaef;
          width: 120px;
          height: 120px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
          padding: 0;
          border: 7px solid #fff;
          border-radius: 50%;
          pointer-events: none;
        }

        .aAdmD {
          text-align: center;
        }

        .aAdmD p {
          margin: 0;
          line-height: 1.7em;
        }

        .aAdmB {
          text-align: center;
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
        }

        .aAdmB .btn {
          display: inline-flex;
          align-items: center;
          margin: 0;
          padding: 10px 15px;
          outline: 0;
          border: 0;
          border-radius: 50px;
          line-height: 20px;
          color: #fefefe;
          background-color: #ff0000;
          font-size: 13px;
          font-family: inherit;
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .aAdmB .btn:hover {
          opacity: .8;
          transform: scale(0.97);
        }

        .webStsH {
          margin: 15px auto;
          text-align: center;
          font-size: 1.7rem;
          font-weight: 700;
          font-family: inherit;
        }

        .webSts {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 12px auto;
        }

        .webStsC {
          background-color: #fff;
          display: flex;
          justify-content: center;
          padding: 8px;
          width: 95%;
          margin: 12px auto;
          box-shadow: 0 5px 20px rgba(149, 157, 165, .2);
          border-radius: 20px;
        }

        .webStsC .stats {
          height: 80px;
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin: 0 35px;
        }

        .webStsC .statsNa {
          display: inline-flex;
          align-items: center;
          font-size: 16px;
        }

        .webStsC .statsNu {
          font-family: inherit;
          font-size: 30px;
          margin-top: 6px;
          font-weight: normal;
        }

        .drkM .aAthrP {
          color: #fefefe;
        }

        .drkM .aAdmC {
          background-color: #252526;
          box-shadow: 0 10px 40px rgba(0, 0, 0, .2);
        }

        .drkM .aAdmC img {
          background-image: linear-gradient(to top right, #363636, #717171);
          border-color: #252526;
          box-shadow: 0 10px 40px rgba(0, 0, 0, .2);
        }

        .drkM .aAdmB .btn {
          background-color: #ff0000;
        }

        .drkM .webStsC {
          background-color: #252526;
          box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
        }

        .drkM .webSts svg {
          stroke: #fefefe;
        }

        @media screen and (min-width: 641px) {
          .aAdm .aAdmC {
            max-width: 97%;
          }

          .webSts {
            flex-direction: row;
          }

          .webStsC {
            max-width: 46%;
            margin: 12px;
          }
        }
        /*]]>*/
      </style>

      <script>
        /*<![CDATA[*/
        function webStats(json) {
          document.write(parseInt(json.feed.openSearch$totalResults.$t, 10))
        }
        /*]]>*/
      </script>

      <!--[ About Author Page ]-->
      <div class="aAthrP">
        <!--[ About Author ]-->
        <div class="aAdm">
          <div class="aAdmC">
            <!--[ Author Description ]-->
            <div class="aAdmD">
              <p>We must be willing to get rid of the life we've planned, so as to have the life that is waiting for us.</p>
            </div>
            <!--[ Author Button ]-->
            <div class="aAdmB">
              <a class="btn" href="#">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
            
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>`,
      explanation: {
        details: 'A fullscreen navigation menu that slides in when clicking the hamburger icon, with smooth CSS transitions. ',
      },
    },
    "2030": {
      code: `<div class="bg-gray-900 flex items-center justify-center min-h-screen">

    <div class="max-w-md w-full p-8 border border-primary rounded-xl shadow-xl backdrop-blur-md bg-gray-800/50 text-white transition-all duration-500 transform hover:scale-105 hover:bg-gray-700/60">
        <img src="https://t3.ftcdn.net/jpg/04/78/81/32/360_F_478813213_eCDJfwddSyZEfoo1nZo6QZIKUKFGD3jU.jpg" alt="Image" class="rounded-xl mb-4">
        <h2 class="text-3xl font-bold text-primary mb-2">Futuristic Card Title</h2>
        <p class="text-lg text-secondary mb-4">This card incorporates glassmorphism, interactive buttons, and social icons for a modern user experience.</p>
        <div class="flex space-x-4">
            <button class="bg-primary text-gray-900 py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition-all duration-500">Learn More</button>
            <button class="bg-gray-600 py-2 px-4 rounded-lg">Share</button>
        </div>
        <div class="mt-4">
            <a href="#" class="text-primary hover:text-secondary mr-2">🔗</a>
            <a href="#" class="text-primary hover:text-secondary">🌐</a>
        </div>
    </div>

</div>`,
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




