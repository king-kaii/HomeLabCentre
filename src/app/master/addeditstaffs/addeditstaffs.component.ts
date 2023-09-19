import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addeditstaffs',
  templateUrl: './addeditstaffs.component.html',
  styleUrls: ['./addeditstaffs.component.scss']
})
export class AddeditstaffsComponent implements OnInit{
  addStaff!:FormGroup;
  constructor(private formBuilder: FormBuilder){
  
  }
  ngOnInit(): void{
    this.addStaff = this.formBuilder.group({
      firstname: new FormControl(),
      lastname: new FormControl(),
      Gender: new FormControl(),
      DOB: new FormControl()
    })
  }
  addStaffs(){
    
  }

}
