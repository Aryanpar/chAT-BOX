const clients = [
    { name: "Client 1", platform: "whatsapp" },
    { name: "Client 2", platform: "instagram" },
    { name: "Client 3", platform: "facebook" },
];

const platformIcons = {
    whatsapp: '<i class="fab fa-whatsapp" style="color: green;"></i>',
    instagram: '<i class="fab fa-instagram" style="color: #c13584;"></i>',
    facebook: '<i class="fab fa-facebook" style="color: #1877f2;"></i>',
};

const chatMessages = document.getElementById("chatMessages");
const clientList = document.getElementById("clientList");

// Load clients dynamically
function loadClients() {
    clients.forEach(client => {
        const li = document.createElement("li");
        li.innerHTML = `${platformIcons[client.platform]} ${client.name}`;
        li.addEventListener("click", () => {
            alert(`Chat with ${client.name} selected.`);
        });
        clientList.appendChild(li);
    });
}

// Send message
function sendMessage() {
    const platform = document.getElementById("platformSelector").value;
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    if (message.trim()) {
        const messageElement = document.createElement("div");
        messageElement.className = "chat-message";
        messageElement.innerHTML = `
            ${platformIcons[platform]}
            <p>${message}</p>
        `;
        chatMessages.appendChild(messageElement);
        messageInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
    }
}

// Handle image upload
function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (file) {
        const platform = document.getElementById("platformSelector").value;
        const messageElement = document.createElement("div");
        messageElement.className = "chat-message";
        messageElement.innerHTML = `
            ${platformIcons[platform]}
            <p><img src="${URL.createObjectURL(file)}" alt="Uploaded" style="max-width: 100%; border-radius: 5px;"></p>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
    }
}

window.onload = loadClients;
