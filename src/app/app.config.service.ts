import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private appConfig: any;
  constructor(private http: HttpClient) {}

  async loadAppConfig() {
    const source = this.http.get('./config/config.json');

    this.appConfig = await lastValueFrom(source);
    console.log(this.appConfig);
  }

  get config() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig;
  }
}
