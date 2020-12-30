import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getLocalStorage(key: any, filterKey?: string) {
    const item = JSON.parse(localStorage.getItem(key));
    
    if (filterKey && item && item[filterKey]) {
      return item[filterKey];
    } else if (filterKey && item && !item[filterKey]) {
      return '';
    } else {
      return item;
    }
  }

  setLocalStorage(setTo, key, value) {
    let data;
    const newValue = {};
    newValue[key] = value;
    if (this.getLocalStorage(setTo)) {
      data = this.getLocalStorage(setTo);
      data = { ...data, ...newValue };
    } else {
      data = { ...newValue };
    }
    localStorage.setItem(setTo, JSON.stringify(data));
  }

  readLocalStorage(from, key) {
    const item = this.getLocalStorage(from);
    if (item && item[key]) {
      return true;
    } else {
      return false;
    }
  }

  removeLocalStorage(from, key) {
    const data = this.getLocalStorage(from);
    if (data) {
      delete data[key];
    }
    localStorage.setItem(from, JSON.stringify(data));
  }
}
