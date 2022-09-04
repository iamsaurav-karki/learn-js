/*function num(n1)
{
    if(n1%2==0)
    {
        console.log("Even number");
    }
    else
    console.log("Odd number");
}

num(3);
function number(n2)
{
    if(n2<=26 && n2>==0)
    {
    console.log("non negatove number equal to 26");
    }
    else
        console.log("negative number");
    }
    number(25);*/
    /*var names =["holes in zero ","eagle ","birde","par","Bogey","double bogey"];
    function golf( strokes)
    {
        if(strokes == 1){
        return names[0];
        }
        else if(strokes == 2){
        return names[1];
        }
        else if(strokes==3){
            return names[2];
        }
    }
    console.log(golf(3));*/
    function switchstat(val)
    switch(val){
        case '1':
            return "beginner";
            break;
        case '2':
            return "intermediate";
            break;
        case '3':
            return "expert";
            break;
        case '4':
            return "pro";
            break;
        default:
            return "Invalid";
    }
    console.log(switchstat(4));
    

    var dog ={
        "name":"Rockey",
        "age":"5",
        "height":"100",

    };
    var get = dog.name
    console.log(get);
    dog.height = "200";
    var get = dog.name;
    console.log(get);
    console.log(dog.age); 
    dog['bark']="bow--bow";


    var myplants = [
        {
            type : "flower",
            list : [
                "rose",
                "mariegold",
                "lotus"
            ]
            
        },
        {
            type: "tree",
            list: [
                "Pine",
                "fir",
                "rhododendron"
            ]
        }
    ];
    console.log(myplants[1].list[1]);




