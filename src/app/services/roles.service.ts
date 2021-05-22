import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Worker, WorkersService } from './workers.service';
export interface Role {
  id: number;
  role: string,
}
@Injectable({
  providedIn: 'root'
})
export class RolesService {


  getRoles() {
    // ספרייה לקריאות שרת
    // מכילה את כל הפונקציות של הקריאות הסטנדרטיות
    // מקבלת כפרמטר ראשון את כתובת הקריאה
    // מחזירה אובסרבל
    // יש להירשם אליו ע"י פונקציה subscribe
    // אחרת הקריאה לא תישלח בכלל
    return this.httpService.get<Role[]>('/assets/roles.json');
  }

  constructor(private httpService: HttpClient) { }
}
