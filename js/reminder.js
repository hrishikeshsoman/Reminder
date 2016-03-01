var index=0;
var remArray = new Array();
window.onload=function(){
    var output = document.getElementById('output');
    var val="";
    var jsonString = localStorage.getItem('reminder');
    if(JSON.parse(jsonString)){
      remArray = (JSON.parse(jsonString));
    }
    while(index < remArray.length)
    {
        if(remArray[index]["complete"]!="true"){
            var contentDiv = document.createElement('Div');
            contentDiv.id = "content";
            contentDiv.className = "contentDiv";

            var buttonDiv = document.createElement('Div');
            buttonDiv.id = "button";
            buttonDiv.className = "buttonDiv";
            contentDiv.appendChild(buttonDiv);

            var textDiv = document.createElement('Div');
            textDiv.id = "text";
            textDiv.className = "textContainer";
            contentDiv.appendChild(textDiv);

            var textField = document.createElement('Input');
 
            textField.id = "textfield";
            textField.className = "textField";
            textField.setAttribute("type","text");
            textField.setAttribute("id",index);
            textField.setAttribute("onkeydown","add(event)");
            textField.setAttribute("onblur","save(this)");
            textField.setAttribute("value",remArray[index]["text"]);
            textDiv.appendChild(textField);
            
          

            var button = document.createElement('Button');
            button.id = "button1";
            button.innerText = "-";
            button.setAttribute("onclick","remove1(this)");
            buttonDiv.appendChild(button);
            document.getElementById('container').appendChild(contentDiv);
            textField.focus();
        }
         index++;
        //     var ele = document.createElement("div");
        //     var containerDiv = document.createElement("div");
        //         containerDiv.setAttribute("class","containerDiv");
        //         var contentDiv = document.createElement("div");
        //           contentDiv.setAttribute("class","contentDiv")
        //           var buttonDiv = document.createElement("div");
        //             buttonDiv.setAttribute("class","buttonDiv");
        //           contentDiv.appendChild(buttonDiv);
          
        //             var text = document.createElement("input");
        //                 text.setAttribute("type","text");
        //                 text.setAttribute("id",index);
        //                 text.setAttribute("onkeydown","add(event)");
        //                 text.setAttribute("onblur","save(this)");
        //                 text.setAttribute("value",remArray[index]["text"]);

        //         contentDiv.appendChild(text);
        //         containerDiv.appendChild(contentDiv);
        //         ele.appendChild(containerDiv);

        // index++;
    }     
}
function add(event) 
    {
      if(event.id=="add"||event.keyCode == 13) {
            var contentDiv = document.createElement('Div');
            contentDiv.id = "content";
            contentDiv.className = "contentDiv";

            var buttonDiv = document.createElement('Div');
            buttonDiv.id = "button";
            buttonDiv.className = "buttonDiv";
            // textField.setAttribute("onclick","remove(this)");
            contentDiv.appendChild(buttonDiv);

            var textDiv = document.createElement('Div');
            textDiv.id = "text";
            textDiv.className = "textContainer";
            contentDiv.appendChild(textDiv);

            var textField = document.createElement('Input');
 
            textField.id = "textfield";
            textField.className = "textField";
            textField.setAttribute("type","text");
            textField.setAttribute("id",index);
            textField.setAttribute("onkeydown","add(event)");
            textField.setAttribute("onblur","save(this)");
            textDiv.appendChild(textField);
            
            index++;

            var button = document.createElement('Button');
            button.id = "button1";
            button.innerText = "-";
             button.setAttribute("onclick","remove1(this)");
            buttonDiv.appendChild(button);
            document.getElementById('container').appendChild(contentDiv);
            textField.focus();
          }

}
function remove1(element){
var text = element.parentNode.nextSibling.children;
remArray[text[0].id]["complete"]= "true";
 var myJsonString = JSON.stringify(remArray);
            localStorage.setItem('reminder', myJsonString);
element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
}
// function addold(event){
//         if(event.id=="add"||event.keyCode == 13) {
//             var ele = document.createElement("div");
            
//             var contentDiv = document.createElement('Div');
//             contentDiv.id = "content";
//             contentDiv.className = "contentDiv";

//             var buttonDiv = document.createElement('Div');
//             buttonDiv.id = "button";
//             buttonDiv.className = "buttonDiv";
//             contentDiv.appendChild(buttonDiv);

//             var textDiv = document.createElement('Div');
//             textDiv.id = "text";
//             textDiv.className = "textContainer";
//             contentDiv.appendChild(textDiv);

//             var textField = document.createElement('Input');
//             textField.setAttribute("type","textbox");
//             textField.id = "textfield";
//             textField.className = "textField";
//             textDiv.appendChild(textField);

//             var button = document.createElement('Button');
//             button.id = "button";
//             button.innerText = "-";
//             document.getElementById('container').appendChild(contentDiv);


//             ele.setAttribute("class","inner");
//             ele.innerHTML="hi ";
//                   var output = document.getElementById('output');
//                   var text = document.createElement("input");
//                   text.setAttribute("type","text");
//                   text.setAttribute("id",index);
//                  text.setAttribute("onkeydown","add(event)");
//                   text.setAttribute("onblur","save(this)");
//                   ele.appendChild(text);
//                   output.appendChild(ele);
//                               text.focus();
//                 index++;
//             }
// }

function save(currentRem) {
            if(remArray[currentRem.id]["text"]!=currentRem.value){
              var text = currentRem.value;
              var priority = "high";
              var note = "";
              var reminder = {}; 
                  reminder["text"] = text; 
                  reminder["priority"] = priority; 
                  reminder["note"] = note;    

                  // if(reminder["complete"] === 'undefined'){
                  //   reminder["complete"]="false";
                  // }
              remArray[currentRem.id] = reminder;
              // alert("hi"+ currentRem.value);
              var myJsonString = JSON.stringify(remArray);
              localStorage.setItem('reminder', myJsonString);
              var str = localStorage.getItem('reminder');
              var pars = JSON.parse(str);
            }
            
}