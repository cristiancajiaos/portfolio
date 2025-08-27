import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certificate } from '../classes/certificate';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor (
    private http: HttpClient
  ) {}

  public async getCertificates(): Promise<Certificate[]> {
    return await lastValueFrom(this.http.get<Certificate[]>('json/certificates.json'));
  }
}
