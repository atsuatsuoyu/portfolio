(function(){
    'use strict';
    
    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var record = document.getElementById('record');
    var output = document.getElementById('output');
    var startTime;
    var elapsedTime = 0;
    var timerId;
    var recordtimerId;
    var recordtimeToadd = 0;
    var timeToadd = 0;

    function updateTimetText(){

        let h = Math.floor(elapsedTime /86400000);

        let m = Math.floor(elapsedTime / 60000);

        let s = Math.floor(elapsedTime % 60000 / 1000);

        let ms = elapsedTime % 1000;

        h = ('0' + h).slice(-2);
        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-2);
 

        timer.textContent =h + ':' + m + ':' + s + ':' + ms;
    }

    function recordtext(){

        let h = Math.floor(elapsedTime /86400000);

        let m = Math.floor(elapsedTime / 60000);

        let s = Math.floor(elapsedTime % 60000 / 1000);

        let ms = elapsedTime % 1000;

        h = ('0' + h).slice(-2);
        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-2);

        output.textContent =h + ':' + m + ':' + s + ':' + ms;

    }

    

    function countUp(){

        timerId = setTimeout(function(){
            
            elapsedTime = Date.now() - startTime + timeToadd;
            updateTimetText()

            countUp();
        },10);
    }

   function countrecord(){

    recordtimerId = setTimeout(() => {
        
        elepsedTime = recordtimeToadd + recordtimeToadd;
        recordtext()

        countrecord();

    }, 10);
   }

    start.addEventListener('click',function(){

        startTime = Date.now();

        countUp();

        // start.setAttribute("disabled", true);
        // stop.removeAttribute("disable");
        // reset.removeAttribute("disable");
    })

    stop.addEventListener('click',function(){
        clearTimeout(timerId);

        timeToadd += Date.now() - startTime;

        // stop.setAttribute("disabled", true);
        // start.removeAttribute("disable");


        
    });

    reset.addEventListener('click',function(){

        elapsedTime = 0;

        timeToadd = 0;

        updateTimetText();

        // start.setAttribute("disabled");
        // stop.setAttribute("disabled",true);
        // reset.setAttribute("disabled", true);

    });

    record.addEventListener('click' ,function(){
        // output.textContent(elapsedTime);

        countrecord();


        recordtext();

    })


})();

