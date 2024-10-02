var editorLayout=`
<div class="max-w-7xl mx-auto">
          <div class="flex justify-start mb-8">
            <h1 id="title" class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
               Button
            </h1>
        </div>
            <!-- Buttons at the top -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
                <button id="btn1" class="custom-btn active-custom-btn py-2 px-4 rounded-lg">1990's</button>
                <button id="btn2" class="custom-btn py-2 px-4 rounded-lg">2000's</button>
                <button id="btn3" class="custom-btn py-2 px-4 rounded-lg">2010's</button>
                <button id="btn4"class="custom-btn py-2 px-4 rounded-lg">2020's</button>
                <button id="btn5" class="custom-btn py-2 px-4 rounded-lg">2030's</button>
            </div>
    
            <!-- Editor and Output Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Code Editor -->
                <div class="bg-gray-800 p-4 rounded-lg">
                  <h2 class="text-lg font-semibold mb-4">Code Editor</h2>
                  <textarea id="codeEditor" class="w-full h-64 bg-gray-900 text-white p-4 rounded-lg resize-none" placeholder="Write your code here..."></textarea>
              </div>
                
                <!-- Output Area -->
                <div class="bg-gray-800 p-4 rounded-lg">
                    <h2 class="text-lg font-semibold mb-4">Output</h2>
                    <div id="output" class="w-full h-64 bg-gray-900 text-white p-4 rounded-lg">
                        <!-- This is where the output will be displayed -->
                        <p>Your code output will appear here...</p>
                    </div>
                </div>
            </div>

                      <!-- Explanation Section -->
              <div class="bg-gray-700 p-6 mt-6 rounded-lg">
                <h3 class="text-lg font-semibold text-white mb-4">Component Explanation</h3>
                <div class="text-gray-300 mb-4">
                    <h4 class="font-bold">Before:</h4>
                    <p id="previousExplanation">Explanation of the previous component will go here...</p>
                </div>
                <div class="text-gray-300">
                    <h4 class="font-bold">Now:</h4>
                    <p id="currentExplanation">Explanation of the current component will go here...</p>
                </div>
            </div>
    
            <!-- Prev/Next Buttons -->
            <div class="mt-6 flex justify-between">
                <button class="custom-btn py-2 px-4 rounded-lg">Prev</button>
                <button class="custom-btn py-2 px-4 rounded-lg">Next</button>
            </div>
        </div>
`


