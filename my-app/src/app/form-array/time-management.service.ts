import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeManagementService {

  constructor(private readonly http: HttpClient) { }
  createTimeSheet(input) {
    return this.http.post('http://13.235.98.235:4000/saveits', input);
  }
}
