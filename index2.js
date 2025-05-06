const inputtext = document.querySelector(".input-text");
const sendbtn = document.querySelector(".sendBTN");
const fileUploadBtn = document.querySelector(".file-upload-btn");

const chatContainer = document.querySelector(".chatBot-main");


// npm install @google/genai 
// import {GoogleGenAI} from '@google/genai';
import { GoogleGenAI } from "@google/genai";

const myapikey="AIzaSyBMUapJU6q0YY95e2beoxx5WjolrKofGg4";






function SendMessage() {
  const text = inputtext.value;
  if (text === "") return;

  //   create new message element
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");

  const msg = document.createElement("p");
  msg.classList.add("Msg");
  msg.innerText = text;

  msgDiv.appendChild(msg)
  chatContainer.appendChild(msgDiv)

  BotResponce(text)

  chatContainer.scrollTop=chatContainer.scrollHeight;
  inputtext.value = "";
}

sendbtn.addEventListener("click", SendMessage);



function BotResponce(promt){
    const respDiv=document.createElement('div')
    respDiv.classList.add('botResponce')

    const respMsg=document.createElement('p')
    respMsg.classList.add('botMsg')

    respMsg.innerText=AIresponse(promt)

    respDiv.appendChild(respMsg)
    chatContainer.appendChild(respDiv)
    return
}



const ai=new GoogleGenAI({apiKey:myapikey})

async function AIresponse(promt) {
    const response=await ai.models.generateContent({
        model:"gemini-2.0-flash",
        contents:promt
    });
    console.log(response.text);
    
    return response.text
}



function intialScroll(){
    chatContainer.scrollTop=chatContainer.scrollHeight;
    return
}

intialScroll()