import { Component, OnInit } from '@angular/core';
import { faCertificate, faLink, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../../../services/title-service';
import { CertificateService } from '../../../services/certificate-service';
import { Certificate } from '../../../classes/certificate';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates implements OnInit {

  public faCertificate: IconDefinition = faCertificate;
  public faLink: IconDefinition = faLink;

  public certificates: Certificate[] = [];

  public loadingCertificates: boolean = true;

  constructor(
    public title: TitleService,
    public certificateService: CertificateService
  ) {

  }

  ngOnInit(): void {
    this.setTitle();
    this.getCertificates();
  }

  public setTitle(): void {
    this.title.setTitle("Certificados");
  }

  public getCertificates(): void {
    this.loadingCertificates = true;
    this.certificateService.getCertificates()
    .then((certificates) => {
      this.certificates = certificates;
    })
    .catch((error) => {

    })
    .finally(() => {
      this.loadingCertificates = false;
    });

  }

}
