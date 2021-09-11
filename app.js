var stockinitial=document.querySelector("#stock-initial");
var stockqt=document.querySelector("#stock-qt");
var stockfinal=document.querySelector("#stock-final");
var btn=document.querySelector("#check-button");
var outputbox=document.querySelector("#output-box");

btn.addEventListener("click",function stocks(){let s1=0;let s2=0;

     s1=Number(stockinitial.value)*Number(stockqt.value);
     s2=Number(stockfinal.value)*Number(stockqt.value);

         var amt=s2-s1;
         percent(amt);
     
});
function percent(amt){
    var s3=Number(stockinitial.value)*Number(stockqt.value);
        if(amt>0)
        {
           var percentage=(amt/s3)*100;
            outputbox.innerText="You made a profit of Rs."+amt+" which is "+Math.abs(percentage.toFixed(2))+"% 🥳🥳";
        }
        else
        {
           var percentage=(amt/s3)*100;
            outputbox.innerText="You made a loss of Rs."+Math.abs(amt)+" which is "+Math.abs(percentage.toFixed(2))+"% 😔😔";
        }
}