#Explain how hoisting allows the printGreeting function to be called before where it's actually written in the file.

printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}

#The above function call using hoisting will execute properly because during the compile phase
#The program reads through all the code and "noted" that there was a match between the function call
#and the function itself
#both called printGreeting()




#Explain why this function called printGoodbye can't be executed until after it's actually written in the file.

printGoodbye(); // this one won't execute!
#This won't work anyway because the function doesn't even match either of the function calls
#printGreeting    vs    printGoodbye
const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();


#Even if the function calls matched the function, it would not run because variables are affected in hoisting as well
#The =  in the printGreeting variable also means that the function will not be read or declared during the compile phase
#Only during the execution phase
printGoodbye();

function printGreeting() {
    console.log("that's all, folks!")
}

printGoodbye();
#This would solve the issue