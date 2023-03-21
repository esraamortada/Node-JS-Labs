function add(x,y) {
    if(!isNaN(x) && !isNaN(y))
    {
        console.log( x+y);
    }
    else
    {
        console.log("Error");
    }
	
}


function sub(x,y){
    if(!isNaN(x) && !isNaN(y))
    {
        console.log( x-y);
    }
    else
    {
        console.log("Error");
    }
	
}

function multi(x,y){
    if(!isNaN(x) && !isNaN(y))
    {
        console.log( x*y);
    }
    else
    {
        console.log("Error");
    }
	
}

module.exports = {
	add: add,
	sub: sub,
    multi:multi
}
