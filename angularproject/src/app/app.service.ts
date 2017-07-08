import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AppService {
  private userURL = 'api/heroes';
  constructor(private http:Http) { }

  getUser(): Promise<any> {
     return this.http.get(this.userURL).toPromise().then(this.extractData).catch(this.handleErrorPromise);
}

private extractData(res: Response) {
    let body = res.json();
    return body;
}  

private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
}

}
