const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const socket = io();



// Message submit
chatForm.addEventListener('submit', (e)=>{
    // when we submit a form, it automatically submits to a file
    // to prevent that from happening, we use prevent default
    e.preventDefault();

    // Get message text
    const msg = e.target.elements.msg.value;

    // Emit message to server
    socket.emit('chatMessage', msg);

    //Clear inputs
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// Message from server
socket.on('message',message=>{
    outputMessage(message);

    //scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
 
});


// Output message to DOM
function outputMessage(message){
    console.log(message);
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}
