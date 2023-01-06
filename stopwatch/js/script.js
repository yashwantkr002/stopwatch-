let hr=0;
let min=0;
let sec=0;
let count=0;
let flag=false;


function start(){
    flag=true;
    show();
    document.getElementById("start").removeAttribute("onclick");
    
   
}

function stop(){
    flag=false;
    document.getElementById("start").setAttribute("onclick","start()");
}

function reset(){
    flag=false;

    hr=0;
    min=0;
    sec=0;
    count=0;



    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
    
   
   
    document.getElementById("start").setAttribute("onclick","start()");
}

function show(){

    if(flag==true){
    count+=1;
    if(count==100){
        sec+=1;
        count=0;
    }
    if(sec==60){
        min+=1;
        sec=0;
        
    }
    if(min==60){
        hr+=1;
        min=0;
        sec=0;
    }
    
      let strhr=hr;
      let strmin=min;
      let strsec=+sec;
      
     if(strsec<10){
        strsec="0"+strsec;
     }
     if(strmin<10){
        strmin="0"+strmin;
     }
     if(strhr<10){
        strhr="0"+strhr;
     }


    document.getElementById("hr").innerHTML=strhr;
    document.getElementById("min").innerHTML=strmin;
    document.getElementById("sec").innerHTML=strsec;
    document.getElementById("count").innerHTML=count;
     setTimeout("show()",10);
    }
}
