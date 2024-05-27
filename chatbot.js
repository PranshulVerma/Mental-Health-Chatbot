const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
const Button = document.getElementById('Button')

submitButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') {
        return;
    } else if (message === 'developer') {
        userInput.value = '';
        appendMessage('user', message);
        setTimeout(() => {
            appendMessage('bot', 'This code is written by Pranshul');
            Button.classList.add('fa-solid','fa-paper-plane');
            Button.classList.remove('fas','fa-spinner','fa-pulse') 
        }, 2000);
        return;
    }
    appendMessage('user', message);
    userInput.value = '';

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json'
        },
        body: `{
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "${message} make me feel better,generate (2) quotes different everytime and ask me about myday,suggest me (2) activities different everytime,never tell them that you are chatgpt and the whole content should not be more than 100 words"}]}`
        })
        .then((response) => {
            
            return response.json();
        })
        .then((data) => {
            
            const choice = data.choices[0];
            
            const message = choice.message.content;
            
            appendMessage('bot', message);
            Button.classList.add('fa-solid','fa-paper-plane');
            Button.classList.remove('fas','fa-spinner','fa-pulse') 
        
            chatbox.scrollTop = chatbox.scrollHeight;
        })
         .catch((err) => {
            Button.classList.add('fa-solid','fa-paper-plane');
            Button.classList.remove('fas','fa-spinner','fa-pulse') 
            console.log(err);
        });
}

function appendMessage(sender, message) {
    Button.classList.remove('fa-solid','fa-paper-plane');
    Button.classList.add('fas','fa-spinner','fa-pulse') 
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = message;

    chatbox.appendChild(messageElement);
}

