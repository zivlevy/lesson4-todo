import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[hideit]'
})
export class HideitDirective {
  @HostBinding ('hidden') isHidden:boolean = false;
  @Input() delaytime:number = 1000;

  constructor(public element:ElementRef ) {

  }

  @HostListener('click') myparentclicked(){

    this.isHidden=true;
  setTimeout(()=>{
    this.isHidden=false;
  },this.delaytime );

}



}
