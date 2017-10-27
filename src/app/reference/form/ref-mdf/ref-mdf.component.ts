import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ref-mdf',
  templateUrl: './ref-mdf.component.html',
  styleUrls: ['./ref-mdf.component.css']
})

export class RefMdfComponent implements OnInit {
  constructor() { }

  @ViewChild('ref_fld1') field1;
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup( {
      field1: new FormControl('Value 1'),
      field2: new FormControl('Value 2')
    });
  }

  fieldChange(evt) { // evt only comes with the value
    // console.log(evt);
    // const elem = this.field1.nativeElement;
    // console.log(elem);
    // console.log(elem.getAttribute('formcontrolname') === 'field1');
    // if (elem.name === 'name_field1') { console.log('got it....'); } else { console.log('poop'); }
    // for input from field1, send to field 2

    const elem = this.field1.nativeElement;
    const src = elem.getAttribute('formcontrolname');
    console.log('Got ', evt, ' from ', src);
    if (src === 'field1') {
      this.myForm.patchValue({field2: 'from field1'});
    } else { this.myForm.patchValue({field1: 'from field2'}); }
  }
}
