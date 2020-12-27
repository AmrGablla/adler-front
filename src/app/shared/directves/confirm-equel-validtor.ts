import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator ,  AbstractControl  } from '@angular/forms';
import { Key } from 'protractor';

@Directive({
  selector:'[appConfirmEqualValidator]',
  providers:[{
      provide: NG_VALIDATORS,
      useExisting:confirmEquelValidator,
      multi:true
  }]

})
export class confirmEquelValidator implements Validator {
  constructor(){
  }
  @Input() appConfirmEqualValidator:string ;
  validate(control:AbstractControl): {[Key:string]: any} |null {
    const controlCompare = control.parent.get(this.appConfirmEqualValidator);
    // const controlCompare = control.parent.get(this.appConfirmEqualValidator);
    if (controlCompare && controlCompare.value !== control.value){
      return {'NotEqual': true } ;
    }
      return null ;

  }

}
