//this variable keeps track of whose turn it is
let activePlayer = 'X';
//this array stores an array of moves. we use this to determine win conditions
let selectedSquares = [];

//this function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //this condition ensures a square hasnt been selected already,
    //the .some() method is used to chack each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is.
        if (activePlayer === 'X') {
            //if activePLayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be 'X' pr 'O' so, if not 'C' it must be 'O'
        } else {
            //if activePlayer is equal to 'O'. the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkwinConditions();
            //this condition is for changing the active player
            if (activePlayer === 'X') {
                //if actgive player is 'X' change it to 'O'
                activePlayer = 'O';
                //if active player is anything other than 'X'
            } else {
                //change the activePlayer to 'X'
                activePlayer = 'X';
            }
            //this function plays placement sound.
            audio('./media/place.mp3');
            //this condition checks to see if it is the computers turn
            if (activePlayer === 'O') {
                //this function disables clickung for computers turn.
                disableClick();
                //this function waits 1 second before the computer places an image and enables click
                setTimeout(function () { computersTurn(); }, 1000);
            }
            //returning true is needed for out computersTurn() function to work
            return true;
    }
    //this function results in a random square being selected by the computer
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true the square hasnt been selected yet
            if (placeXOrO(pickASquare)) {
                //this linee calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            }
        }
    }
}

//this function parses the selectedSquares array to search for win conditions
//drawline() function is called to draw a line on the screen if the condition is met
function checkwinConditions() {
    // x 0, 1, 2 conditon
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //x 3, 4, 5 conditon
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // x 6, 7, 8
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // x 0, 3, 6 condition
    else if (arrayIncludes ('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // x 1 , 4, 7
    else if (arrayIncludes ('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // x 2, 5, 8
    else if (arrayIncludes ('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // x 6, 4, 2
    else if (arrayIncludes ('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //x 0, 4, 8
    else if (arrayIncludes ('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2
    else if (arrayIncludes ('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
   // o 3,4, 5
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition
    else if (arrayIncludes ('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1 , 4, 7
    else if (arrayIncludes ('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8
    else if (arrayIncludes ('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2
    else if (arrayIncludes ('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O 0, 4, 8
    else if (arrayIncludes ('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. if none of the above conditions are met and
    //9 squares are slected the code executes
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 500);
    }
    //this function checks if an array includes 3 strings. it is used to check for 
    ///each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 varaibles will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in our array theb
        //true is returnned and our else if condition executes the drawwLine() function.
        if (a === true && b === true && c === true) { return true; } 
    }
}

//this function makes our body element temporarily unclickable
function disableClick() {
    //this makes our body unclickable
    ReportBody.style.pointerEvents = 'none';
    //this makes our body clickable after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000)
}

//this function takes a string parameteer of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //we create a new audio object and we [ass the path as a parameter
    let audio = new Audio(audioURL) ;
    //play methos plays our audio sound
    audio.play();
}

//this function utilizes HTMl canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is
    let x1 = coordX1,
        //this line indicates where the stRt of a lines y axis is
        y1 = coordY1,
        //indicates where the end of the x axis is
        x2 = coordX2,
        //indicates where the end of the y axis is
        y2 = coordY2,
        //this variable stores temporary x axis data we update in our animation loop
        x = x1,
        //this cariable stores temporary y axis data we update in our animation loop
        y = y1;
     //thiis function interacts with the canvas
     function animateLineDrawing() {
        //this variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path
        c.beginPath();
        //this method moves us to a starting point in our line
        c.moveTo(x1, y1);
        //this method sets the width of our line
        c.lineTo(x, y);
        //this method sets the width of the line
        c.lineWidth = 10;
        //this method ssets the color of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this method draws qeverything we laid out above
        c.stroke();
        //this condtion checks if weve reached the endpoints
        if (x1 <= x2 && y1 <= y2) {
            //thiis condition adds 10 to the previous end x endpoint
            if (x < x2) { x += 10; }
            //this condition adds 10 to the previous end y endpoint
            if (y < y2) { y += 10; }
            //this condition is similar to the one above
            //this is necessary for te 6, 4, 2 win conditions
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //this cindition is simiklar to the one above
        //this is necessary for the 6, 4 2 win condiiton
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //this function clears our canvas after our win line is drawn
    function clear() {
        //this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sound
    audio('./media/winGame.mp3');
    //this line calls our main animation loop
    animateLineDrawing();
    //this line waits 1 second. then clear canvas resets game, an allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}