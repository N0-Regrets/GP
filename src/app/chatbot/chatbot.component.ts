import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/49eefe5a-0e3a-418f-afcd-f899fbd07948/webchat/config.js';
    script2.defer = true;
    document.body.appendChild(script2);
  }
}
