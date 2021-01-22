function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(kilometer <= 0){
        return undefined;
    }
    else{
        return meter;
    }
} 
    var result = kilometerToMeter(-10);
    console.log(result);

function budgetCalculator(clock,mobile,laptop){    //Here, clock = number of clock, mobile = number of mobile,
                                                    //laptop = number of laptop
        var clockPrice = clock * 50;
        
        var mobilePrice = mobile * 100;
        
        var laptopPrice = laptop * 500;
        

        var total = (clockPrice + mobilePrice + laptopPrice);
        return total;
}
        var result = budgetCalculator(6,3,2);
        console.log(result);

    
function hotelCost(n){        //Here n = number of days.
        if(n <= 10){
            totalCost = n * 100;
            return totalCost;
        }
        else if(n > 10 && n <= 20){
           totalCost = 10 * 100;
           var remaining_day = n - 10;
           totalCost = ((n-10) * 80) + (10 * 100);
           return totalCost;
        }
        else {
            totalCost1 = (10 * 80) + (10 * 100);
            var remaining_day = n - 20;
            totalCost = ((n-20) * 50) + (10 * 80) + (10 * 100);
            return totalCost;
        }
}
        var result = hotelCost(50);
        console.log(result);

function megaFriend(name)
    {
        var max_string = name[0].length;
        var max = name[0];
        for (var i = 1; i < name.length; i++) {
            var element = name[i].length;
            if (element > max_string) {
                max = name[i];
                max_string = element;
        }
      }
        return max;
    }
var result = megaFriend(["Rahim", "Abul", "Mustaq", "Karim", "Shihab"]);
console.log(result);