import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      const form = document.getElementById('chat-form');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageInput = document.getElementById(
          'message',
        ) as HTMLInputElement;
        const message = messageInput.value.trim();
        if (message !== '') {
          const chatMessages = document.querySelector(
            '.chat-messages',
          ) as HTMLElement;
          const newMessage = document.createElement('div');
          newMessage.classList.add('mb-2');
          newMessage.innerHTML = `
            <strong>You:</strong> ${message}
          `;
          chatMessages.appendChild(newMessage);
          messageInput.value = '';
          // Code
        }
      });
    }
  }
}
