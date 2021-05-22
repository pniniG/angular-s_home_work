import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Worker {
  name: string;
  roleId: number
  salary: number
}
@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  workers = [];
  constructor(private httpService: HttpClient) { }
  getWorkers() {
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }
}
