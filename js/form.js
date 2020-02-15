function validateType(){
    var eventType= document.getElementById("eventType");
        if (eventType.value == "")
        {
            alert("An event type must be selected.");
        }
    }

function validateEvent(){
    var event = document.getElementById("event");
        if(event.value =="")
        {
            alert("Event Title cannot be blank.");
        }
    }

function validateD1(){
    var date1 = document.getElementById("date1");

        if(date1.value=="")
        {
            alert("A starting date must be entered.");
        }
    }

function validateD2(){
    var date2 = document.getElementById("date2");

        if(date2.value=="")
        {
            alert("An end date must be entered.");
        }
    }

function validatePDate(){
    var pdate = document.getElementById("pdate");

        if(pdate.value=="")
        {
            alert("A posting date must be entered.");
        }
    }

function validateCB(){
    var checkbox = document.getElementsByName("box");

    var temp = 0;

    for(var i = 0; i < checkbox.length; i++)  
        {  
            if(checkbox[i].checked)  
                temp++;  
        }  
            if(temp<1)  
            {  
                alert("Please select at least one of the choices.");  
            }
    }

function validate(){
 
    if (eventType.value || event.value || date1.value || date2.value || pdate.value == ""){
        validateType();
        validateEvent();
        validateD1();
        validateD2();
        validatePDate();
        validateCB();
    }

    else(eventType && event && date1 && date2 && pdate);
    {
        alert("Current Data Saved!");
    }
}




