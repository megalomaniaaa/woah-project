var SpeechRecognition = window.webkitSpeechRecognition

var recognition =new SpeechRecognition()

function start()
{
 document.getElementById("textbox").innerHTML=""
 recognition.start();
 }
 recognition.onresult=function(event)
       {
           console.log(event)
           var content=event.results[0][0].transcript
           console.log(content)
           document.getElementById("textbox").innerHTML=content
       }
       function setTimeout()
       {
           var synth=window.speechSynthesis
           speak_data="taking your selie in 10 sec"
           var utterthis=new SpeechSynthesisUtterance(speak_data);
           synth.speak(utterthis)
           

           },5000)
           function take_snapshot()
{
    Webcam.snap(function(data_uri)
{
    if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">'
    }
    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">'
    }
    if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'">'
    }
}    )
}