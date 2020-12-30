import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor(
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.toastService.showSuccess("I am toast message")
  }

}
