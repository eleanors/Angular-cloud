import { Directive, AfterViewInit, AfterContentInit, HostListener, Input, ElementRef, Renderer2 } from '@angular/core'

@Directive({
    selector: '[musicRecomment]'
})
export class MusicDirective implements AfterViewInit, AfterContentInit {

    private color = 'purple'

    constructor(private element: ElementRef, private renderer: Renderer2){
        this.setStyle(this.textcolor)
        console.log('music directive....')
    }

    @Input('textcolor')            // 输入属性, 用于设置background
    textcolor: string

    @HostListener('click', ['HH'])
    handleDelete(){                // 鉴别宿主对象的点击事件
        this.setStyle(this.textcolor || this.color)
    }

    private setStyle(color: string){
        this.renderer.setStyle(this.element.nativeElement, 'color', color)
    }

    ngAfterViewInit(){
        console.log('view init after...')
    }

    ngAfterContentInit(){
        console.log('view content init after...')
    }
}
