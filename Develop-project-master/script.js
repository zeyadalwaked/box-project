
     const box= document.getElementById("box-1");
     box.addEventListener("click",function(event){
         event.target.style.backgroundColor ="red";
     })

     const boxes =document.getElementsByClassName("box-to-select")
     for(const elemnt of boxes){
         elemnt.addEventListener("click",function(event){
             event.target.style.backgroundColor="blue";
             console.log(event,"event");


         });
        }

        queryFifthBox=document.querySelector("div ul #box-5");
        queryFifthBox.addEventListener("click",function(event){
            event.target.style.backgroundColor="yellow";

        });
        const queryBoxes= document.querySelectorAll(".box-to-select-2");
        for (const element of queryBoxes) {
            element.addEventListener("click",function(event) {
                event.target.style.backgroundColor="green";
            });
        }
    


