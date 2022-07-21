function selectColor(color){

    if(color == "red" || color == "blue" || color == "yellow"){

        var colorArray = [];

        for(var i=0; i<color.length; i++ ){

            colorArray.push(color[i]);
            

        }

        console.log(colorArray);

    }

    else {

        console.log( `the ${color} is not a primary color`);

    }

}
selectColor("green");

