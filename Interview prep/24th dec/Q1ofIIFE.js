//load a pase which asks user for timer 
//you can print if u want to 
// then as soon as timer is finished alert tht user
//(Hint : use setInterval methods )

(function fun(){
   let timeUnits= prompt("Enter the amount of time you want to give!")
    let interval=prompt("Enter the interval you want to give")
    //calls the handleCall function after every interval  seconds(passed as millis)
    let iid =setInterval(handleCalls,interval*1000)
    //returns an id used to  stop calling via clearInterval

    handleCalls.orgTU=timeUnits; //**function can be used as a store of properties (static property)

    function handleCalls(){
        console.log(timeUnits +" left")
        timeUnits -= interval
        if(timeUnits<=0){
            clearInterval(iid)
            alert(handleCalls.orgTU+" is counted")
        }
    }
})()