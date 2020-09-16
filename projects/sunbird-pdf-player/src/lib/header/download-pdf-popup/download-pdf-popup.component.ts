import { Component, OnInit, ViewChild } from '@angular/core';
import { SunbirdPdfPlayerService } from '../../sunbird-pdf-player.service';
@Component({
  selector: 'download-pdf-popup',
  templateUrl: './download-pdf-popup.component.html',
  styleUrls: ['./download-pdf-popup.component.css']
})
export class DownloadPdfPopupComponent implements OnInit {
  constructor(public pdfPlayerService: SunbirdPdfPlayerService) { }

  ngOnInit() {
  }

  hidePdfDownloadPopup() {
    this.pdfPlayerService.showDownloadPopup = false;
  }

}
