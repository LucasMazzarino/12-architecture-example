import { inject, Injectable } from '@angular/core';
import { IOrder } from '../../domain/model/order.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'shared';



@Injectable({
  providedIn: 'root'
})
export class GetAllOrdersService {

  private http = inject(HttpClient);

  execute(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(environment.apiUrl + 'orders');
  }
}
