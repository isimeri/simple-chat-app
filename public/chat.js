// const PORT = process.env.PORT || 5000;
const socket = io.connect(`http://localhost:5000`);

const outputBox = document.querySelector(".output-box");
const inputBox = document.querySelector(".message-box");
const sendBtn = document.querySelector(".send-btn");
const username = prompt("Waht is ur name");

sendBtn.addEventListener("click", () => {
    socket.emit("chat", {
        name: username,
        message: inputBox.value
    });
    inputBox.value = "";
});

socket.on("chat", function(data){
    outputBox.innerHTML+= `<p><strong>${data.name}:</strong> ${data.message}</p>`;
});