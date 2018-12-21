import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../category';
import { WorkTime } from '../work_time';
import { WorkTimesHour } from '../../shared/components/work_times_hour';
import { WorkTimesMinute } from '../../shared/components/work_times_minute';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InputDateService {
  apiEndpoint = environment.apiEndpoint;
  googleUrl = environment.googleUrl;
  work_times_hour: WorkTimesHour;
  work_times_minute: WorkTimesMinute;
  data: string;

  constructor(private http: HttpClient) { }

  getCategories(user_id): Observable<Category> {
    const url = `${this.apiEndpoint}/categories/${user_id}`;
    return this.http.get<Category>(url);
  }

  createWorkTimes(work_time: WorkTime): Observable<WorkTime>{
    const url = `${this.apiEndpoint}/work_times`;
    return this.http.post<WorkTime>(url, { work_time:  work_time});
  }

  getWorkTimesHour(): Observable<WorkTimesHour> {
    const url = `${this.apiEndpoint}/work_times_hours`;
    return this.http.get<WorkTimesHour>(url);
  }

  getWorkTimesMinute(): Observable<WorkTimesMinute> {
    const url = `${this.apiEndpoint}/work_times_minutes`;
    return this.http.get<WorkTimesMinute>(url);
  }

  getGoogleCalendar(queryParams: string): Observable<string>{
    const url = `${this.apiEndpoint}/work_times/import_work_times`;
    return this.http.post<string>(url, {query: queryParams});
  }

}