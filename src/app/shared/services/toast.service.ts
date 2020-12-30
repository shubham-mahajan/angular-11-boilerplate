import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  show(type: string, textOrTpl: string | TemplateRef<any>, options: any = {}) {
    if(this.toasts.length>0){
      this.remove(this.toasts[0])
    }
    this.toasts.push({ type, textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(message: any) {
    if (message) {
      this.show('success', message, { classname: 'bg-success text-light', delay: 5000 });
    }
  }

  showDanger(message: any) {
    if (message) {
      this.show('error', message, { classname: 'bg-danger text-light', delay: 5000 });
    }
  }

  showWarn(message: any) {
    if (message) {
      this.show('warn', message, { classname: 'bg-warning text-light', delay: 5000 });
    }
  }

  showInfo(message: any) {
    if (message) {
      this.show('info', message, { classname: 'bg-info text-light', delay: 5000 });
    }
  }
}
