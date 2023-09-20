import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ViewPresciptionComponent } from './view-presciption/view-presciption.component';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
form!: FormGroup
disList : any[] = []
disease =['Diabetes','Cardiovascular','Cancer']
prescriptionImageURL: string | ArrayBuffer | any | null = null ;
showDisList: boolean = false;
lang: string = 'English';
isLang: boolean = false;
constructor(private fb: FormBuilder,private dialog: MatDialog , private global: GlobalService){
  this.form = this.fb.group({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    symptoms: new FormControl('',[Validators.required,Validators.minLength(6)]),
    age: new FormControl('',[Validators.required,Validators.maxLength(2)]),
    gender: new FormControl('',[Validators.required]),
    previouDisease: new FormControl('',[Validators.required]),
    uploadPresciption: new FormControl('',[Validators.required]),
    disEase: []
  })
}

ngOnInit() {
 
}

  submit(){
    console.log(this.form.value);
    this.global.postPatientData(this.form.value).subscribe((data)=>{
      console.log('Data after .... post ' ,data);
      
    })
  }

  prevDisease(){
    if(this.form.get('previouDisease')?.value == '1'){
    this.showDisList = true
    } else{
      this.showDisList = false  
    }
  }

  get disEase(): FormArray{
    return this.form.get('disEase') as FormArray
  }
 
  
  viewPres(){
    if(this.prescriptionImageURL){
      this.dialog.open(ViewPresciptionComponent,{
        data: {imageURL:this.prescriptionImageURL}
      })
    }
  }
  onFileChange(event: any){
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.prescriptionImageURL = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
  changeLang(){
    if(this.isLang == false){
         this.isLang = true;
         this.lang = 'Odia'
    } else if(this.isLang == true){
      this.isLang = false;
         this.lang = 'English'
    }
    
    
  }
  }


