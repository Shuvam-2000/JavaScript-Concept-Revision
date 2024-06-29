// nested loops 
// example

// program to print the name each time after counting betwenn 1 and 10 

// to stop or break the outer loop for further execution a name is given to the
// loop (outer) and the name is then assigned to the 
// break statement in the inner loop
outer: for(let counter = 1; counter <= 10; counter++){


    document.write(counter);
    document.write('<br>');    

    for(let counter2 = 2; counter2 < 3;  counter2++){

        if(counter == 3){
            break outer;   // to stop the loop 
            // exceution when the outer loop (counter becomes 3)
        }

        document.write("Shuvam Saha");
        document.write('<br>');    
    }
}
