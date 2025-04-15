//for

for (let i = 0; i < 10; i++) { //press ctrl+d to select all the i and change the variable

    const element = i;

    // console.log(element);

}

// console.log(element);// can't be access becase its declare inside the block error [element is not defined]

// h

//if inside the for loop

for (let i = 0; i < 10; i++) {

    const element = i;

    if (element == 5) {

        // console.log("5 is the best number");

    }

    // console.log(element);

}



//for inside for

for (let i = 0; i <=10; i++) {

    // console.log(`Outer loop ${i}`);

    for (let j = 0; j <=10; j++) {

        // console.log(`Inner loop value ${j} outer loop value`);

        // console.log(i + '*' + j + ' = ' + (i*j));

    }

}



//array in for loop

let myArray=["Joydeb","Roy","kal"]

// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {

    const element = myArray[i];

    // console.log(element);

}

//in JS array don't give out of bound error it gives undefined



//break and continue

for (let i = 1; i <=20; i++) {

    const element = i;

    if (element==5) {

        // console.log("detected 5");

        // break;// out of the if and for loop loop stops

    }

    // console.log(`value of id is ${element}`);

   

}



for (let i = 1; i <=20; i++) {

    const element = i;

    if (element==5) {

        console.log("detected 5");

        continue;// skip the detected value

    }

    console.log(`value of id is ${element}`);

}

//hello