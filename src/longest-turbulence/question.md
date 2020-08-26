given an array of numbers (representing an airplane height during a flight measured each 1 second), a turbulence is definded the period that airplane goes up and down every second.

it means every second the height is a local minimum or maximum and direction of vertical movement is changing.

technically , if P and Q are two time indexes, then

H[P] > H[P+1] < H [P+2] > H[P+3] < ......> H[P+i] < H[P+i+1] > .......<H[Q]
(or the same condition holds with all < > signs sreversed)
then length of turbulence is (P-Q)+1 .

write a function that returns the longest turbulence period detected in an array.(by definition, an empty array has max turbulence 0 and array with length 1 has max turbulence of 1, any non-equal pair of numbers make a turbulence of 2).
