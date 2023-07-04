# Guessing Game Pixel Skin

This project is a simple guessing game where the user tries to guess a secret number between 1 and 20. The user has a limited number of attempts to guess the correct number, and the score is updated accordingly.

## Features

- Randomly generates a secret number between 1 and 20 at the start of the game.
- Allows the user to input their guess and check if it matches the secret number.
- Provides feedback to the user indicating if their guess is too high or too low.
- Updates the score based on the number of attempts made by the user.
- Displays a message indicating whether the guess is correct or incorrect.
- Changes the background color of the page to reflect the outcome of the guess.
- Allows the user to reset the game and start over.
- Keeps track of the high score achieved by the user.
- Includes a modal for displaying credits and instructions.

## Setup

To use this project, follow these steps:

1. Include the JavaScript file in your HTML document.
2. Add the necessary HTML elements for the game interface, including:
   - A button with the id "credits-button" to open the credits modal.
   - An element with the class "overlay" to serve as the overlay for the modal.
   - An element with the class "modalpara" to display the credits and instructions.
   - An input field with the id "guess" to allow the user to input their guess.
   - A button with the id "check-btn" to check the user's guess.
   - A button with the id "again-btn" to reset the game.
   - Elements with the ids "number", "score", "the-message", and "highscore" to display game information.
   - A button with the class "close-modal" to close the credits modal.
3. Customize the styles and content of the HTML elements as desired.
4. Optionally, modify the range of the secret number by adjusting the values in the `Math.trunc(Math.random() * 20) + 1` expression.
5. Save the JavaScript code in a separate file and link it to your HTML document using the `<script>` tag.
6. Open your HTML document in a web browser to play the game.
![image](https://github.com/mehdiAbDev/guessNumberPixel/assets/65425310/87625766-f34d-490f-a5e8-ec0223593f49)
![image](https://github.com/mehdiAbDev/guessNumberPixel/assets/65425310/143b9760-2093-49b8-a1af-ccb1bd47135a)

## Usage

- Click the "Credits" button to open the credits and instructions modal.
- Enter a number in the input field and click the "Check" button to make a guess.
- The game will provide feedback on whether the guess is too high or too low.
- The score will be updated based on the number of attempts made.
- If the guess is correct, the game will display a success message and update the high score if necessary.
- If the score reaches zero, the game will display a failure message and end.
- Click the "Play Again" button to reset the game and start over.
- Press the "R" key to reset the game.
- Press the "Space" or "Enter" key to check the current guess.
- Press the "Escape" key to close the credits modal.

## Credits

This project was created by [your name]. Feel free to modify and distribute it as needed.
