import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers?: number[]

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.numbers?.forEach((number) => {
      this.container.createEmbeddedView(
        this.template, { $implicit: number })
    });
  }

}
