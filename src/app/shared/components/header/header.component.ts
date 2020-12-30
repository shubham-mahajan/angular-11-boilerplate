import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor(
    public toastService: ToastService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

  }

}
