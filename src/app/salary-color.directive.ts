import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[SalaryColor]'
})
export class SalaryColorDirective {


  // caso não crie a variavel com o mesmo nome da diretiva ele e chamado diferente na pag HTML.
  //@Input()
 // teste;

  constructor(private element: ElementRef) {

  }

    @Input()
    set SalaryColor(valor){
      const nativeElement: HTMLElement = this.element.nativeElement;
      const salary = parseFloat(valor);
      nativeElement.style.color = salary > 2000 ? 'blue' : 'red';
  //  console.log(this.teste);
    }
   
   

}
