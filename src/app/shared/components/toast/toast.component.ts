import { Component, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';


@Component({
  selector: 'pr-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent {

  constructor(public toastService: ToastService) { }

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

}
