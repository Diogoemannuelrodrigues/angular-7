import {Injectable} from '@angular/core'
import {Companias} from './companias/companias.model'
import {MEAT_API} from '../app.api'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class CompaniasService{

    constructor(private http: Http){}

    companias(): Observable<Companias[]>{
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}