import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: this.newFunction()
})

// tslint:disable-next-line:one-line
export class TooltipDirective{
    // tslint:disable-next-line:one-line
    constructor(private elementRef: ElementRef){}

    tooltip: any;
    elemPosition: any;
    tooltipOffset = 8;
    hideTimeoutId: any;
    showTimeoutId: any;

    // tslint:disable-next-line:no-input-rename
    @Input('tooltip') tooltipText = '';
    // tslint:disable-next-line:quotemark
    @Input() placement = "top";
    @Input() delay = 0;
    // tslint:disable-next-line:no-input-rename
    @Input('show-delay') showDelay = 0;
    // tslint:disable-next-line:no-input-rename
    @Input('hide-delay') hideDelay = 300;
    // tslint:disable-next-line:no-input-rename
    @Input('z-index') zIndex = false;

    private newFunction(): string {
        return '[tooltip]';
    }

    @HostListener('focusin')
    @HostListener('mouseenter')
    onMouseEnter() {
        this.getElemPosition();

        // tslint:disable-next-line:one-line
        if (!this.tooltip){
            this.create();
            this.setPosition();
            this.show();
        }
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    onMouseLeave() {
        this.hide();
    }

    // tslint:disable-next-line:one-line
    getElemPosition(){
        this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }

    // tslint:disable-next-line:one-line
    create(){
        this.showDelay = this.delay || this.showDelay;
        this.tooltip = document.createElement('span');
        this.tooltip.className += 'ng-tooltip ng-tooltip-' + this.placement;
        this.tooltip.textContent = this.tooltipText;
        this.newFunction_1();

        document.body.appendChild(this.tooltip);
    }

    private newFunction_1() {
        // tslint:disable-next-line:curly
        if (this.zIndex)
            this.tooltip.style.zIndex = this.zIndex;
    }

    // tslint:disable-next-line:one-line
    show(){
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }

        this.showDelay = this.delay || this.showDelay;
        this.showTimeoutId = setTimeout(() => {
            if (this.tooltip){
                this.tooltip.className += ' ng-tooltip-show';
            }
        }, this.showDelay);
    }

    // tslint:disable-next-line:one-line
    hide(){
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }

        // tslint:disable-next-line:one-line
        if (this.tooltip){
            this.tooltip.classList.remove('ng-tooltip-show');
            this.hideTimeoutId = setTimeout(() => {
               this.tooltip.parentNode.removeChild(this.tooltip);
               this.tooltip = null;
            }, this.hideDelay);
        }
    }

    // tslint:disable-next-line:one-line
    setPosition(){
        const elemHeight = this.elementRef.nativeElement.offsetHeight;
        const elemWidth = this.elementRef.nativeElement.offsetWidth;
        const tooltipHeight = this.tooltip.clientHeight;
        const tooltipWidth = this.tooltip.offsetWidth;
        const scrollY = window.pageYOffset;

        // tslint:disable-next-line:one-line
        if (this.placement === 'top'){
            this.tooltip.style.top = (this.elemPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset) + 'px';
        }

        // tslint:disable-next-line:one-line
        if (this.placement === 'bottom'){
            this.tooltip.style.top = (this.elemPosition.top + scrollY) + elemHeight + this.tooltipOffset + 'px';
        }

        // tslint:disable-next-line:one-line
        if (this.placement === 'top' || this.placement === 'bottom'){
            this.tooltip.style.left = (this.elemPosition.left + elemWidth / 2) - tooltipWidth / 2 + 'px';
        }

        // tslint:disable-next-line:one-line
        if (this.placement === 'left'){
            this.tooltip.style.left = this.elemPosition.left - tooltipWidth - this.tooltipOffset + 'px';
        }

        // tslint:disable-next-line:one-line
        if (this.placement === 'right'){
            this.tooltip.style.left = this.elemPosition.left + elemWidth + this.tooltipOffset + 'px';
        }

        // tslint:disable-next-line:one-line
        if (this.placement === 'left' || this.placement === 'right'){
            this.tooltip.style.top = (this.elemPosition.top + scrollY) + elemHeight / 2 - this.tooltip.clientHeight / 2 + 'px';
        }
    }
}
