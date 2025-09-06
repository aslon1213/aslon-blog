# Student Number Guessing Game

A Python GUI application that displays student details with a photo and implements a number guessing game.

## Features

- Student profile display with name, ID, and photo
- Number guessing game with three difficulty levels:
  - Easy: 1-10
  - Medium: 1-100
  - Hard: 1-1000
- Feedback system that tells if your guess is higher or lower
- Attempt counter
- User-friendly interface

## Prerequisites

Before running this application, you need to have Python installed along with the following libraries:

- Tkinter (usually comes with Python installation)
- PIL (Python Imaging Library) / Pillow

## Installation

1. Clone or download this repository

2. Install the required dependencies:
   ```
   pip install Pillow
   ```

3. (Optional) To use a custom student photo, place an image file named `student_photo.jpg` in a folder named `resources` in the project directory.

## Running the Application

Run the application by executing:

```
python app.py
```

## How to Play

1. Select a difficulty level by clicking one of the three buttons (1-10, 1-100, or 1-1000)
2. Click the "Start Game" button
3. Enter your guess in the input field
4. Click "Submit Guess" or press Enter
5. Based on your guess, the application will give you feedback (higher or lower)
6. Continue guessing until you find the number
7. The game will display the number of attempts you took to find the correct number

## Customization

You can customize the student details by editing the following variables in the `StudentGameApp` class:

- `self.student_name`
- `self.student_id`

To use a custom student photo, place an image file named `student_photo.jpg` in a folder named `resources` in the project directory.
