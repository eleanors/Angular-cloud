import { Directive, AfterViewInit, AfterContentInit, HostBinding, HostListener, Input, ElementRef, Renderer2 } from '@angular/core'

@Directive({
    selector: '[TextColor]'
})
export class MusicDirective implements AfterViewInit, AfterContentInit {

    private color = 'lime'

    constructor(private element: ElementRef, private renderer: Renderer2){
        this.setStyle(this.color)
        console.log('music directive....')
    }

    @Input('TextColor')            // 输入属性, 用于设置background
    textcolor: string

    @HostBinding('style.font-weigth')
    fontWeigth: string

    @HostListener('click', ['HH'])
    handleDelete(){                // 鉴别宿主对象的点击事件
        this.setStyle(this.textcolor || this.color)
    }

    private setStyle(color: string){
        this.fontWeigth = 'bold'
        this.renderer.setStyle(this.element.nativeElement, 'color', color)
    }

    ngAfterViewInit(){
        console.log('view init after...')
        console.log(this.renderer)
        this.renderer.addClass(this.element.nativeElement, 'recomment')
    }

    ngAfterContentInit(){
        console.log('view content init after...')
    }
}
