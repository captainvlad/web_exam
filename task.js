function tune( arr ) {
    let standard = [329.63, 246.94, 196, 146.83, 110, 82.41];
    let currentDifference;

    let signs = ["OK", " - ", "•<", "•<<", ">•", ">>•"];
    const result = [];

    for ( let i = 0; i < arr.length; i++ ){

        currentDifference = ( arr[i] - standard[i] ) / standard[i] * 10000;
        currentDifference = Math.round(currentDifference) / 100;
        if ( arr[i] === 0 ){
            result.push(signs[1])
        } else if ( arr[i] === standard[i] ) {
            result.push(signs[0]);
        } else if ( 0 < currentDifference && currentDifference < 3 ){
            result.push(signs[2]);
        } else if ( 3 <= currentDifference ){
            result.push(signs[3]);
        } else if ( -3 < currentDifference && currentDifference <= 0 ){
                result.push(signs[4]);
        } else if ( currentDifference <= -3 ){
            result.push(signs[5]);
        }
    }
    return result;
}