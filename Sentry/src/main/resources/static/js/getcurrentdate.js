function startTime()   
            {   
                var today=new Date(); 
                var yyyy = today.getFullYear();//Return the year through the getFullYear() method of the date object  
                var MM = today.getMonth()+1;
                var dd = today.getDate();    
                var hh=today.getHours();  
                var mm=today.getMinutes();  
                var ss=today.getSeconds(); 
                var monthNames = ["January", "February", "March", "April", "May", "June",
					  "July", "August", "September", "October", "November", "December"
					];
               // If the value of minutes or hours is less than 10, add 0 before the value, for example, if the time is 3:20:9 in the afternoon, it will display 15:20:09
                MM=monthNames[today.getMonth()];              
                dd=checkTime(dd);
                mm=checkTime(mm);   
                //ss=checkTime(ss);    
                var day; //Used to save the week (getDay() method to get the week number)
                if(today.getDay()==0)   day   =   "Sunday" 
                if(today.getDay()==1)   day   =   "Monday" 
                if(today.getDay()==2)   day   =   "Tuesday" 
                if(today.getDay()==3)   day   =   "Wednesday" 
                if(today.getDay()==4)   day   =   "Thursday" 
                if(today.getDay()==5)   day   =   "Friday" 
                if(today.getDay()==6)   day   =   "Saturday" 
                document.getElementById('show_time0').innerHTML=day+", "+ dd +" "+ MM +" "+ yyyy+", "+ hh+":"+mm ;   
                setTimeout('startTime()',1000);//Reload the startTime() method every second
            }   

            function checkTime(i)   
            {   
                if (i<10){
                    i="0" + i;
                }   
                  return i;
            }  

