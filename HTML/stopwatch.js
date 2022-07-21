function Stopwatch(){
        let startTime, stopTime, running = 0;
        let duration;


        this.start = () => {
            if(running){
                console.log("Stopwatch is already running");
            }
            startTime = new Date().getTime();
            console.log(startTime);
            console.log("Stopwatch started running");
            running = true;
        
        }

        this.stop = () =>{
            if(running == false){
                console.log("Stopwatch is not running");
            }
            else{
                stopTime = new Date().getTime();
                running = false;
                console.log("Stopwatch stopped"); 
                console.log(stopTime);  
            }
        }
        this.duration = () =>{
            if(startTime != null && stopTime != null){
                duration = stopTime - startTime;
                console.log(duration);
            }
            else{
                console.log("No durations!!");
            }
            
        }

   
   
}
let _stopwatch = new Stopwatch();