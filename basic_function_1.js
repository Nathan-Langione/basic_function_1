/* Takes no parameters and returns 35 which is printed to the console. */
function a(){
    return 35;
}
console.log(a())


/* Takes no parameters and returns 4. 8 will be printed to the console as the function is called twice and the results are added.  */
function a(){
    return 4;
}
console.log(a()+a());


/* Takes a parameter, b, and returns it. 6 will be printed to the console as the function is called twice and the results are added.*/
function a(b){
    return b;
}
console.log(a(2)+a(4));


/* Takes parameter b, logs it to the console, and returns b times 3. 3 will be printed to the console when the function is called 
and then 9 will be returned and printed to the console. */
function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));


/* Takes parameter b and returns b times 4. 40 will be printed to the console, not 10 then 40, 
because the log statement in the function is after the return and does not get executed. */
function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));


/* Takes parameter b and returns 2 if b is less than 10 otherwise it returns 4. 4 will be printed to the screen, 
because the log statement in the function is outside of the if statment, where the return's are located, printing b does not get executed.*/
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));


/* Takes parameters b and c, multiplies them, and returns the result. 10 and 3 will be printed to the console by the first log statement 
and then 30 will be returned by the second log statement which calls the function. */
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );


/*  Takes parameter b, but does nothing with it. The for loop prints i to the console 10 times and then i is returned. 
The numbers 0-9 will be printed to the screen on separate lines for each pf the two log statements where the function is executed.  */
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);


/* Takes no parameters, executes a for loop, and returns nothing. Each time the loop runs 2 is added to i, i is logged to the console, then i is incremented by 1. 
This will print to the console 2, 5, 8, and 11 each on their own line.*/
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();


/* Takes parameters b and c. Then will console log values from b, incremented by 1, as long as i is less than c. Then returns b times c.
When the function is called the first time will print 0-9 to the screen  and return 0.
When the function is called the second time it will print 0-9 to the screen and then print 0 which is returned by the function.*/
function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
}
return b*c;
}
a(0,10);
console.log(a(0,10));


/*  Function takes no parameters and returns no values. The nested for loop will log 0-9 to the console and it will be run 10 times by the first for loop. 
Every time 0-9 is printed to the screen the value of i from the first loop will be logged to the console.*/
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}


/*  Function takes no parameters and returns no values. The nested for loop will log the values of i and j 10 times. then the first for loop will log the values of i and j 10 times.
Results would be:
0, 1
0, 2
...
0, 9
undefined, 0
The repeat each time i is incremented*/
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}


/* Function takes no parameters and returns no values. The console log will print 10 as we do not call the function. */
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);


/* * Function takes no parameters and returns no values. When the function is executed it will print 15 tot he console 
then the log statement outside the function will print 10 to the console/ */
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);


/* Function takes no parameters and returns z. When th function is executed it will print 15 to the console and return 15 and store it in the variable z. 
The console log statement will then print 15 to the console. */
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

