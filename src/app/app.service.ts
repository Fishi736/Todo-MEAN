import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseurl = "http://localhost:8000";
  constructor(private http: HttpClient) { }


  addtask(task) {
    return this.http.post(this.baseurl + "/addTask", task);
  }

  gettask() {
    return this.http.get(this.baseurl + "/getTask");
  }

  deleteTask(id) {
    return this.http.delete(this.baseurl + "/deleteTask/" + id);
  }

  updateTask(item) {
    return this.http.post(this.baseurl + "/updateTask", item);
  }
}
