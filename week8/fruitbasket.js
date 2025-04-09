let basket = 0;
 
function addFruit(quantity){
    basket = quantity ;
    console.log(`${quantity} fruit added .`)
}

function removeFruit(quantity) {
    if (quantity <= basket){
        basket -= quantity ;
        console.log(`${quantity} fruit removed .`);
    }
    else {
        console.log("Not enough fruits to remove .");
    }
}

function showTotal(){
    console.log(`Total fruits in basket : ${basket}`);
}