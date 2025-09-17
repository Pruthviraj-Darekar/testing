document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chatbot-query');
    const sendButton = document.getElementById('chatbot-send');
    const chatMessages = document.querySelector('.chatbot-messages');

    // Simple function to add a message to the chatbot display
    const addMessage = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
    };

    // Handle sending a message
    const handleSend = () => {
        const query = chatInput.value.trim();
        if (query === '') return;

        addMessage(query, 'user');
        chatInput.value = '';

        // Simple chatbot response logic
        setTimeout(() => {
            let botResponse = 'Thank you for your message. An expert will respond shortly.';
            const lowerQuery = query.toLowerCase();

            if (lowerQuery.includes('pm-kisan')) {
                botResponse = 'For information on the PM-KISAN scheme, please visit the official government portal.';
            } else if (lowerQuery.includes('e-nam')) {
                botResponse = 'e-NAM is a pan-India electronic trading portal for agricultural commodities.';
            } else if (lowerQuery.includes('agri machinery')) {
                botResponse = 'We have a dedicated help desk for queries related to the Agri Machinery scheme. Please use the form on the left.';
            } else if (lowerQuery.includes('weather')) {
                botResponse = 'The weather forecast is available in the Weather Forecast section above.';
            } else if (lowerQuery.includes('crop')) {
                botResponse = 'Our crop recommendation tool analyzes market data to help you decide what to plant.';
            }
            
            addMessage(botResponse, 'bot');
        }, 500);
    };

    // Event listeners
    sendButton.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    // Initial message from the chatbot
    addMessage('Hello! How can I assist you with your farming needs today?', 'bot');
});