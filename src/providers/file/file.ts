import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { File } from '../../entity/file';


@Injectable()
export class FileProvider {
	url : String = "http://localhost:3000/";
  allfilesUrl = "http://localhost:8080/files/all";
	fileUrl = "http://localhost:8080/files/file";
	//Create constructor to get Http instance
	constructor(private http:HttpClient) { 
	}
	//Fetch all articles
    getAllFiles():  Observable<File[]> {
		return this.http.get<File[]>(this.allfilesUrl)
		.catch(this.handleError);

	}

	getFilesByMail(mail:string):Observable<File[]> {
		const url = `${this.allfilesUrl}/${mail}/`;
		return this.http.get(url).catch(this.handleError);
		
	}

deleteFileById(file_id: string): Observable<Boolean> {
	const url = `${this.fileUrl}/${file_id}`;
	return this.http.delete(url).catch(this.handleError);
	}
	
 private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
}

getAllItem(path) : Observable<any> {
	return this.http.get(this.url + "getfiles?path=" + path);
}


deleteItem(path) : Observable<any> {
	return this.http.get(this.url + "deletefile?path=" + path);
}

downloadFile(path) : Observable<any> {
	return this.http.get(this.url + "download?path=" + path, {responseType: 'arraybuffer'});
}



}