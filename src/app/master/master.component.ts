import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, OnChanges {
  isTestSelected = false;
  constructor(private dialog: MatDialog, private global: GlobalService){

  }
  ngOnChanges(){
   
  }
  ngOnInit(): void {
    
  }
  toggleTestSelection(){
    this.isTestSelected = true;
  }

  
}
