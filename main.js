/**
 Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.
**/

//P.R.E.P

//Parameter - an array will be given. THe array will only contain strings

//return to the console

//example - ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

//Psuedo code


    //seperate array into string

    function friend(friends){
        return friends.filter(n => n.length === 4)
      }

    //have a loop that counts the string letters

    //push the strings that contain 4 letters into a new array
