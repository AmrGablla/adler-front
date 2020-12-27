import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable()

export class ConfirmService {
    constructor(private confirmationService: ConfirmationService) { }

    newConfirmation(
        message: string,
        accept: Function,
        header?: string,
        icon?: string,
        reject?: Function,
        acceptLabel?: string,
        rejectLabel?: string,
        acceptIcon?: string,
        rejectIcon?: string
        ) {
        this.confirmationService.confirm({
            message,
            accept,
            header: header ? header : 'Confirmation',
            icon, reject,
            acceptLabel: acceptLabel ? acceptLabel : 'Yes',
            rejectLabel: rejectLabel ? rejectLabel : 'No',
            acceptIcon: acceptIcon ? acceptIcon : 'pi pi-check',
            rejectIcon: rejectIcon ? rejectIcon : 'pi pi-times'
        })
    }

}

