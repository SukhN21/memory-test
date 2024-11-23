# Memory Test

https://sukhn21.github.io/memory-test/

## Description
The **Memory Test** is a browser-based game where players flip cards to find matching pairs. It uses JavaScript for game logic, HTML for structure, and CSS for styling. This project is a great exercise for practicing DOM manipulation, event handling, and basic programming logic.

## Features
- **Interactive Gameplay**: Players flip two cards to match pairs.
- **Shuffled Deck**: The order of the cards is randomized every time the game starts.
- **Winning Condition**: Displays a "You Win! 🎉" message when all pairs are matched.

## Prerequisites
- Basic understanding of HTML, CSS, and JavaScript.
- A modern web browser (e.g., Chrome, Firefox, Edge).

## How It Works
1. The game consists of a set of cards represented by emoji symbols.
2. Cards are shuffled randomly when the game starts.
3. Players click on cards to flip them over and reveal their symbols.
4. When two cards are flipped:
   - If they match, they remain flipped.
   - If they don’t match, they are flipped back after a short delay.
5. The game ends when all pairs are matched, and a success message is displayed.

## Code Explanation

### Variables
- **`symbols`**: An array of paired emoji symbols to be matched.
- **`flippedCards`**: Tracks the currently flipped cards (max 2 at a time).
- **`matchedPairs`**: Keeps count of successfully matched pairs.

### Functions
1. **`shuffle(array)`**
   - Shuffles an array using `Math.random()`.
   - Ensures the cards are placed randomly on the board at the start.

   ```javascript
   function shuffle(array) {
     return array.sort(() => Math.random() - 0.5);
   }

## References
- Idea from - [https://youtu.be/M0egyNvsN-Y](https://youtu.be/M0egyNvsN-Y)
- JS functions - help from [https://www.w3schools.com/](https://www.w3schools.com/)
