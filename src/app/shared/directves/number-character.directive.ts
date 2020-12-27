import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumberCharacters]'
})
export class NumberCharacterDirective {
/*constraint variable represent numbersonly ,numbersWithChars
  or numbersWithCharsWithSpecial */
  @Input('constraint') constraint: string;
  /*to listen for key press event */
  @HostListener('keypress', ['$event'])
  /*fuction that handle which is allowed to write upon constraint */
  onkeypress(e: KeyboardEvent) {
    let value=e.keyCode||e.charCode
    switch (this.constraint) {
      case 'numbersonly':
        if (!(value >= 48 && value <= 57)) {
          e.preventDefault();
        }
        break;
      case 'charsOnly':
            if (!( value === 32 ||
            (value >= 97 && value <= 122) ||
            (value >= 65 &&value <= 90) ||
            (value > 1568 && value< 1611))) {
        e.preventDefault();
      }
        break
      case 'numbersWithChars':
        if (!((value >= 48 && value <= 57) ||
              (value >= 97 && value <= 122) ||
              (value >= 65 &&value <= 90) ||
              (value > 1568 && value< 1611))) {
          e.preventDefault();
        }
        break;
      // case 'numbersWithCharsWithSpecial':
      //   if (!((value>= 48 && value <= 57) || (value > 1568 &&value < 1611) || (value >= 97 && value <= 122) || (value >= 65 &&value<= 90) ||
      //     (value >= 32 &&value <= 47) || (value >= 58 &&value <= 59) || (value >= 60 && value <= 64)
      //     || (value >= 91 && value <= 96) || (value >= 123 &&value <= 126)
      //   )) {
      //     e.preventDefault();
      //   }
      //   break;
      case 'numbersWithSpecial':
        if (!((value >= 48 &&value <= 57) ||
          (value >= 32 && value <= 47) || (value>= 58 && value <= 59) || (value >= 60 && value <= 64)
          || (value>= 91 && value <= 96) || (value >= 123 && value <= 126)
        )) {
          e.preventDefault();
        }
        break;
      //   case 'whitSpace':
      //     if (value === 32) {
      //       event.preventDefault();
      //     }
      //     break;
    }

  }
}
