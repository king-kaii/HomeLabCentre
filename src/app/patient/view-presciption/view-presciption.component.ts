import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-presciption',
  templateUrl: './view-presciption.component.html',
  styleUrls: ['./view-presciption.component.scss']
})
export class ViewPresciptionComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
