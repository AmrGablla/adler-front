import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()

export class AlertService {
  constructor(private messageService: MessageService) {}

  newAlert(type: string, message: string): void {
    const summary = type.charAt(0).toUpperCase() + type.slice(1);
    this.messageService.add({ severity: type, summary, detail: message, life: 3000 });
  }

}

