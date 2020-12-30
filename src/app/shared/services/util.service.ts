import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getLocalStorage(key: string, filterKey?: string) {
    const item: any = JSON.parse(localStorage.getItem(key) || '{}');
    
    if (filterKey && item && item[filterKey]) {
      return item[filterKey];
    } else if (filterKey && item && !item[filterKey]) {
      return '';
    } else {
      return item;
    }
  }

  setLocalStorage(setTo: any, key: string, value: any) {
    let data;
    let newValue: any = {};
    newValue[key] = value;
    if (this.getLocalStorage(setTo)) {
      data = this.getLocalStorage(setTo);
      data = { ...data, ...newValue };
    } else {
      data = { ...newValue };
    }
    localStorage.setItem(setTo, JSON.stringify(data));
  }

  readLocalStorage(from: any, key: any) {
    const item = this.getLocalStorage(from);
    if (item && item[key]) {
      return true;
    } else {
      return false;
    }
  }

  removeLocalStorage(from: any, key: any) {
    const data = this.getLocalStorage(from);
    if (data) {
      delete data[key];
    }
    localStorage.setItem(from, JSON.stringify(data));
  }
}
