const inputtext = document.querySelector(".input-text");
const sendbtn = document.querySelector(".sendBTN");
const fileUploadBtn = document.querySelector(".file-upload-btn");

const chatContainer = document.querySelector(".chatBot-main");

function SendMessage() {
  console.log('clik')
  const text = inputtext.value;
  if (text === "") return;

  //   create new message element
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");

  const msg = document.createElement("p");
  msg.classList.add("Msg");
  msg.innerText = text;

  msgDiv.appendChild(msg);
  chatContainer.appendChild(msgDiv);

  BotResponce();

  chatContainer.scrollTop = chatContainer.scrollHeight;
  inputtext.value = "";
}

sendbtn.addEventListener("click", SendMessage);

function BotResponce() {
  const respDiv = document.createElement("div");
  respDiv.classList.add("botResponce");

  const respMsg = document.createElement("p");
  respMsg.classList.add("botMsg");

  respMsg.innerText = "This bot responce";

  respDiv.appendChild(respMsg);
  chatContainer.appendChild(respDiv);
  return;
}

function intialScroll() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
  return;
}

intialScroll();
