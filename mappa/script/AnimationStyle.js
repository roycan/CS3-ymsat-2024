// Get the canvas element by its ID
const canvas = document.getElementById("myCanvas");

// Get the 2D rendering context for the canvas
const context = canvas.getContext("2d");

const canvasBackgroundSelect = document.getElementById("canvasBackground");
const images = {
  "": "../images/animation/whitebackground.png",
  "1": "../images/animation/dororo.jpg",
  "2": "../images/animation/eren.jpg",
  "3": "../images/animation/gojo.png",
  "4": "../images/animation/thorfinn.png",
};

canvasBackgroundSelect.addEventListener("change", function() {
  const selectedOption = canvasBackgroundSelect.value;
  const imagePath = images[selectedOption];
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (imagePath) {
    const img = new Image();
    img.onload = function() {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);

    };
    img.src = imagePath;
  }
});

// Initialize a variable to track if the user is currently drawing
let isDrawing = false;

// Initialize a variable to track the selected tool
let selectedTool = "pencil";

// Function to start drawing
function startDrawing(event) {
  isDrawing = true;
  draw(event);
}

// Function to draw on the canvas
function draw(event) {
  // If the user is not drawing, exit the function
  if (!isDrawing) return;

  // Get the bounding rectangle of the canvas
  const rect = canvas.getBoundingClientRect();

  // Calculate the x and y coordinates of the mouse relative to the canvas
  const x = event.clientX - rect.left - 6;
  const y = event.clientY - rect.top - 6;

  // Draw a line to the x and y coordinates
  context.lineTo(x, y);

  // Apply the stroke to the path you've defined with lineTo
  context.stroke();
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
  // Start a new path
  context.beginPath();
}

// Add event listeners to mousedown, mousemove, mouseup, and mouseout events
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Get the clear button by its ID
const clearButton = document.getElementById("clearButton");

// Add a click event listener on the clear button
clearButton.addEventListener("click", function() {
  // Clear the entire canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// Get all the color swatches
const colorSwatches = document.querySelectorAll(".color-swatch");

// Add a click event listener on each color swatch
colorSwatches.forEach((swatch) => {
  swatch.addEventListener("click", function() {
    // Get the background color of the clicked swatch
    const color = this.style.backgroundColor;
    // Set the stroke style to the selected color
    context.strokeStyle = color;
  });
});

// Get the brush size select element by its ID
const brushSizeSelect = document.getElementById("brushSize");

// Add a change event listener on the brush size select element
brushSizeSelect.addEventListener("change", function() {
  // Get the selected brush size
  const brushSize = this.value;
  // Set the line width to the selected brush size
  context.lineWidth = brushSize;
});

// Get the pencil tool by its ID
const pencilTool = document.getElementById("pencilTool");

// Add a mousedown event listener on the pencil tool
pencilTool.addEventListener("mousedown", function() {
  // Set the selected tool to pencil
  selectedTool = "pencil";
  // Set the global composite operation to source-over (default)
  context.globalCompositeOperation = "source-over";
});

// Get the brush tool by its ID
const brushTool = document.getElementById("brushTool");

// Add a mousedown event listener on the brush tool
brushTool.addEventListener("mousedown", function() {
  // Set the selected tool to brush
  selectedTool = "brush";
  // Set the global composite operation to multiply
  context.globalCompositeOperation = "multiply";
});

// Get the eraser tool by its ID
const eraserTool = document.getElementById("eraserTool");

// Add a mousedown event listener on the eraser tool
eraserTool.addEventListener("mousedown", function() {
  // Set the selected tool to eraser
  selectedTool = "eraser";
  // Set the global composite operation to destination-out
  context.globalCompositeOperation = "destination-out";
});

// Get the color picker by its ID
const colorPicker = document.getElementById("colorPicker");

// Add an input event listener on the color picker
colorPicker.addEventListener("input", function() {
  // Get the selected color from the color picker
  const color = this.value;
  // Set the stroke style to the selected color
  context.strokeStyle = color;
});

