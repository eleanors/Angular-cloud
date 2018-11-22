模块，组件，模板，元数据，数据绑定，指令，服务，依赖注入


组件类应保持精简，而且组件本身不从服务器获得数据、不进行验证输入，也不直接往控制台写日志。那么这一切改如何处理呢， 它们把这些任务委托给服务
所谓的元数据，元数据告诉 Angular 如何处理一个类，常用的有@Component，其里面的元数据会告诉 Angular 从哪里获取你为组件指定的主要的构建块



三种指令：
    组件 、结构型指令（ngif  ngfor等）和属性型指令 （所有组件都为指令）
    结构型指令 —   通过添加和移除 DOM 元素改变 DOM 布局的指令
    属性型指令 —   改变元素、组件或其它指令的外观和行为的指令。
    
    使用@input 向指令传递值，  @Input装饰器都告诉Angular，该属性是公共的，并且能被父组件绑定。 如果没有@Input，Angular就会拒绝绑定到该属性 组件或指令不应该盲目的信任其它组件或指令。 因此组件或指令的属性默认是不能被绑定的, 从Angular绑定机制的角度来看，它们是私有的，而当添加了@Input时，它们变成了公共的 只有这样，它们才能被其它组件或属性绑定


    结构型指令
    结构型指令的职责是HTML布局。 它们塑造或重塑DOM的结构，比如添加、移除或维护这些元素。Angular会解开这个*语法糖，变成一个<ng-template>标记，包裹着宿主元素及其子元素


    1. ElementRef是一个服务，它赋予我们通过它的nativeElement属性直接访问 DOM 元素的能力。 Renderer服务允许通过代码设置元素的样式
    2.@HostListener装饰器引用属性型指令的宿主元素 相当于addEventListene
           当然，你可以通过标准的JavaScript方式手动给宿主 DOM 元素附加一个事件监听器。 但这种方法至少有三个问题:
           必须正确的书写事件监听器。当指令被销毁的时候，
           必须拆卸事件监听器，否则会导致内存泄露。
           必须直接和 DOM API 打交道，应该避免这样做。
    3.@inpout取别名@Input('appHighlight') highlightColor: string;
    4. 每个宿主元素上只能有一个结构型指令,  有一个简单的解决方案：把*ngIf放在一个"容器"元素上，再包装进 *ngFor 元素。 这个元素可以使用ng-container，以免引入一个新的HTML层级
    5.使用TemplateRef取得<ng-template>的内容，并通过ViewContainerRef来访问这个视图容器。 


    结构型指令可以操纵 HTML 的元素布局。
    当没有合适的容器元素时，可以使用<ng-container>对元素进行分组。
    Angular 会把星号（*）语法解开成<ng-template>。
    内置指令NgIf、NgFor和NgSwitch的工作原理。
    微语法如何展开成<ng-template>。
    写了一个自定义结构型指令 —— UnlessDirective。
    angular默认是单数据绑定   angularjs默认是双数据绑定  。 属性指令意味着标签的左右都为组件的属性 。



生命周期
    constructor       构造函数

    ngOnchanges             绑定属性发生变化的时候调用，第一次调用一定在ngOnInit之前。
    ngOninit                第一轮ngChanges之后调用，本钩子只调用一次。
    ngDoCheck               在ngOnInit和ngDoCheck之后，会一直检查。
    ngAfterContentInit      当内容投影进组件之后调用。第一次ngDoCheck之后调用，只调用一次，只适用于组件。父组件调用完成之后，所有子组件才会调用。
    ngAfterContentChecked   每完成被投影组件内容发生变化时调用。ngAfterContentInit和ngDocheck之后调用，只适用于组件。父组件调用完成之后，所有子组件才会调用。
    ngAfterViewInit         初始化完成组件试图及其子视图之后调用。第一次ngAfterContentChecked之后调用，只调用一次，只适用于组件。所有子组件调用完成之后，父组件才会调用。此阶段更改属性的值会报错，可在settimeout后运行。
    ngAfterViewChecked      每次做完组件视图和子组件视图的变更检测之后调用。ngAfterViewInit和ngAfterContentChecked之后调用，只适用于组件。所有子组件调用完成之后，父组件才会调用。此阶段更改属性的值会报错，可在settimeout后运行。
    ngDoDestory             组件销毁时调用，主要用于内存回收。路由跳转时组件会销毁。

基于指令与组件的区别来分类:
　　　　1、指令与组件共有的钩子：
　　　　　　　　ngOnChanges
　　　　　　　　ngOnInit
　　　　　　　　ngDoCheck
　　　　　　　　ngOnDestroy
　　　　2、组件特有的钩子
　　　　　　　　ngAfterContentInit
　　　　　　　　ngAfterContentChecked
　　　　　　　　ngAfterViewInit
　　　　　　　　ngAfterViewChecked