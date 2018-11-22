import { Directive, AfterViewInit, AfterContentInit, HostBinding, HostListener, Input, ElementRef, ViewContainerRef, TemplateRef, Renderer2 } from '@angular/core'

@Directive({
    selector: '[TextColor]'
})
export class MusicDirective implements AfterViewInit, AfterContentInit {

    private color = 'orange' // lime

    constructor(private element: ElementRef, private viewContainer: ViewContainerRef, private renderer: Renderer2){
        this.setStyle(this.color)
        console.log('music directive....')
    }

    @Input('TextColor') textcolor: string           // 输入属性, 用于设置background

    @HostBinding('style.font-weight') fontWeight = 'bold';

    @HostListener('click', ['HH'])
    handleDelete(){                                // 鉴别宿主对象的点击事件
        this.setStyle(this.textcolor || this.color)
    }

    @Input() set customIf(condition: boolean){console.log(condition)
        if(condition){
            //this.viewContainer.createEmbeddedView(this.template)
        }else {
            //this.viewContainer.clear()
        }
    }

    private setStyle(color: string){
        //this.fontWeight = 'normal'
        this.renderer.setStyle(this.element.nativeElement, 'color', color)
    }

    ngAfterContentInit(){

    }

    ngAfterViewInit(){
        this.renderer.addClass(this.element.nativeElement, 'recomment')
    }
}
