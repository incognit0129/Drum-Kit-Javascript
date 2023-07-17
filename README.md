# Drum-Kit-Javascript

The provided code is written in JavaScript and appears to be implementing a simple drum kit application with clickable buttons that play different sounds when clicked or when specific keys are pressed on the keyboard. Here's a breakdown of how the code works:

1. The first line selects all elements with the class "drum" and assigns the length of the resulting NodeList to the variable `buttons`. This is done using the `querySelectorAll` method.

2. The `for` loop iterates from 0 to the value of `buttons`. It's used to add event listeners to each drum element.

3. Within the loop, the line `document.querySelectorAll(".drum")[i]` selects the i-th drum element using its index and adds a click event listener to it.

4. Inside the click event listener function, `makeSound(this.innerHTML)` is called. It passes the innerHTML (the content) of the clicked drum element to the `makeSound` function.

5. Additionally, the code attaches a keydown event listener to the `document` object. Whenever a key is pressed, the callback function is triggered.

6. Inside the keydown event listener function, `makeSound(event.key)` is called. It passes the key value of the pressed key to the `makeSound` function.

7. The `makeSound` function is defined outside the loop. It takes the `buttonInnerhtml` parameter, which represents the key or the innerHTML of the clicked drum element.

8. Inside the `makeSound` function, a switch statement is used to determine which sound to play based on the value of `buttonInnerhtml`.

9. Depending on the value, an `Audio` object is created using the corresponding sound file path, such as "sounds/crash.mp3" or "sounds/kick-bass.mp3".

10. The `play()` method is called on the `Audio` object to play the sound.

11. If none of the expected keys or innerHTML values are matched in the switch statement, a console log is printed with `this.innerHTML`.

In summary, this code sets up an interactive drum kit where each drum element has a clickable area and can also be played by pressing specific keys on the keyboard. When clicked or when the corresponding keys are pressed, different sounds associated with each drum element are played.
