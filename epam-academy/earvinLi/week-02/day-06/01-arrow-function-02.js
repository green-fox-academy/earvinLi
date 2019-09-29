function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));
    }
}

function frameFunction(){
    // Write your code here
    var exampleAnonymFunctionES5 = function(first, second) {
      return first === '' ? second : `${first} ${second}`;
    };

    const exampleAnonymFunctionES6 = (first, second) => first === '' ? second : `${first} ${second}`;

    multiPurposeFunction(exampleAnonymFunctionES6);
}

frameFunction();
