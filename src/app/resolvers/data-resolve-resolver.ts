import { Injectable } from "@angular/core";
import {Resolve } from "@angular/router";
import { delay, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataResolver implements Resolve<any>{
resolve(): Observable<any> {
  // Simulate/ Mimic use of API
  return of({
    message: 'Data loaded by resolver',
    timestamp: new Date()
  }).pipe(delay(1000))
}
}