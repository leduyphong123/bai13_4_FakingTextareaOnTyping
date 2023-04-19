let value=document.getElementById("value");
value.addEventListener("input",changeValue);
let texValue="Anh Tiến Bê ĐÊ";
let count=0;

function changeValue(){
    value.value =value.value.substring(0,value.value.length-1)+ texValue.charAt(count);
    if(count>texValue.length){
        count=0;
        value.value="";
    }else{
        count++;
    }
}