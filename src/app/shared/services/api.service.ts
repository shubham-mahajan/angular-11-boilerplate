import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from 'src/app/shared/types/constants';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { RestService } from 'src/app/shared/services/rest.service'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private restService: RestService,
  ) {
    

   }

  defineHeaders() {
    let headers = new HttpHeaders({
    });
    // To do Add the login header
    return headers;
  }

  makeHttpParams(body: any) {
    let params = new HttpParams();
    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        params = params.append(key, body[key]);
      }
    }
    return params;
  }


  // API Calls

 

}
