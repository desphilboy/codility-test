write a function that accepts an string as input and returns maximum number of times letter 'a' can be inserted somewhere in this string so that 'aaa' never happens in the string.

Example:
f('') = 2 , because it can become '' --> 'a' --> 'aa'
f('a') = 1 , because 'a' --> 'aa' and this is the maximum.
f('l') = 4, because 'aalaa'
and so on ...
by default, f('aaa') = f('aaaa') = f('aaaaaaaaaa...') = -1

assumptions:
string lenght is less than 200,000,
string is containing only small alphabet letter characters 'a' to 'z',
