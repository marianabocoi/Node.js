# Implement HangPerson

## Overall description

We want to create a commandline app that does the following:

- Takes your name and says hi
- Chooses a random word from a file
- Displays number of letters and allows you to guess
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
7. Ask user for letter and print it then print word representation again
8. Actually answer if the letter exists to the user
9. Remember what letter user says and notify them if they said it before
10. Update the printing to include the guessed letters
11. Celebrate the user when they guessed all letters by printing Congratulations, you guessed `<word>`!!!
12. Store a representation of the state in json
13. Read state when starting the console
14. Allow for multiple users
