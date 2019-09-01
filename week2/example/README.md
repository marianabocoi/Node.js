# Implement HangPerson

## Overall description

We want to create a commandline app that does the following:

- Takes your name and says hi
- Chooses a random word from a file
- Displays the number of letters and allows you to guess
- Tells you if leter exists in word and remembers letter
- Tells you if you press same letter again
- Remembers state and word until it is guessed for each person

## Steps

Create small steps and commmit when code is done for each step

1. Say hi. Create hello world node project
2. Say hi with name. Read name from command if none provided default is `you`
3. Generate random number between 1 - 200
4. Read list of words from file and print first 5
5. Take the random number and print the word from that line
6. List only number of letters as: `_ _ _ _`
7. Remember the user and the word and show the same word next time it is run with how to provide a letter
8. Allow user to call the command with a letter and print it then print word representation again
9. Actually answer if the letter exists to the user and remember the letter they guess
10. Throw an error if the user provides more than one letter
11. Notify user if they said it before
12. Update the printing to include the guessed letters
13. Celebrate the user when they guessed all letters by printing Congratulations, you guessed `<word>`!!!
14. Allow for more than one user to be remembered
