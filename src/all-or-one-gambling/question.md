Mahadali lives in "Qhala" and sometimes gambles at "Si metri" Casino.
When Mahadali goes to the csino for gambling, He always starts with 1 chip and gambles only in one of these two ways:

    - Chip : playing by gambling on 1 chip only
    - All : playing by gambling on All he has

every win will double the wager, it means playing with n chips will return 2n, and loose will return nothing.

lets say Mahadali wins all the rounds, and given number K which is the number of times he played ALL, calculate minimum number of rounds he had to play till he has N chips.

example1:
Mahadali wins 41, and k = 3,

41 --Chip-> 40 --ALL-> 20 --All--> 10 --ALL--> 5 --Chip-->4 --Chip--> 3 --Chip--> 2 --Chip-> 1

this is 8 games

example1:
Mahadali wins 41, and k = 4,

41 --Chip-> 40 --ALL-> 20 --All--> 10 --ALL--> 5 --Chip-->4 --All--> 2 --Chip--> 1

this is 7 games

assumption:(playing 1 chip is never considered all , even if it is all Mahadali has)

Write a function given N and K , returns minimum number of games Mahadali has to play to win N without playing all more than K times.
