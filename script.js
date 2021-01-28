var screenStatus = false;

document.getElementById('start-btn').addEventListener('click',sn)
window.addEventListener('load',sn)
function sn(){
if(screenStatus==true){
   document.getElementById('screen').style.opacity="0";
   document.getElementById('time').style.marginTop="40px"
   document.getElementById('time').style.opacity="0"
   screenStatus=false;
}else if(screenStatus==false){
   document.getElementById('screen').style.opacity="1";
   document.getElementById('time').style.marginTop="0px"
   document.getElementById('time').style.opacity="1"
   screenStatus=true;
}
}

window.addEventListener('load',function(){
setInterval(function(){  
    var x = new Date();
   var hours = x.getHours();
   var hour = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
   document.getElementById('hours').innerHTML=hour[hours-1];
   var minutes = x.getMinutes();
   if(minutes<10){
   document.getElementById('minutes').innerHTML='0'+minutes;
   }else{
   document.getElementById('minutes').innerHTML=minutes;
   }
   if(hours<12){
      document.getElementById('ap').innerHTML="am"
   }
   else if(hours>12){
      document.getElementById('ap').innerHTML="pm"
   }


   var date = x.getDate();
   document.getElementById('date-number').innerHTML=date;
   if(date==1){
      document.getElementById('th').innerHTML="st"
   }
   else if(date==2){
      document.getElementById('th').innerHTML="nd"
   }
   else if(date==3){
      document.getElementById('th').innerHTML="rd"
   }
   else if(date>3){
      document.getElementById('th').innerHTML="th"
   }
   var month = x.getMonth();
   var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
   document.getElementById('month').innerHTML=months[month];

   var year = x.getFullYear();
   document.getElementById('year').innerHTML=year;
},1)
})