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


/*  */
function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
}
return b*c;
}
a(0,10);
console.log(a(0,10));


/*  */
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}


/*  */
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}


/*  */
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);


/*  */
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);


/*  */
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

