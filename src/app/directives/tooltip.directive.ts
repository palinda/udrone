import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(private elementRef: ElementRef) {
  }

      tooltipObj: any;
      elemPosition: any;
      tooltipOffset = 8;
      hideTimeoutId: any;
      showTimeoutId: any;

      @Input() tooltip = '';
      @Input() placement = 'top';
      @Input() delay = 0;
      @Input() showDelay = 0;
      @Input() hideDelay = 300;
      @Input() zIndex = false;

      @HostListener('focusin')
      @HostListener('mouseenter')
      onMouseEnter() {
          this.getElemPosition();

          if (!this.tooltipObj) {
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

      getElemPosition() {
          this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();
      }

      create() {
          this.showDelay = this.delay || this.showDelay;
          this.tooltipObj = document.createElement('span');
          this.tooltipObj.className += 'ng-tooltip ng-tooltip-' + this.placement;
          this.tooltipObj.textContent = this.tooltip;
          if (this.zIndex) {
            this.tooltipObj.style.zIndex = this.zIndex;
          }

          document.body.appendChild(this.tooltipObj);
      }

      show() {
          if (this.showTimeoutId) {
              clearTimeout(this.showTimeoutId);
          }

          this.showDelay = this.delay || this.showDelay;
          this.showTimeoutId = setTimeout(() => {
              if (this.tooltipObj) {
                  this.tooltipObj.className += ' ng-tooltip-show';
              }
          }, this.showDelay);
      }

      hide() {
          if (this.hideTimeoutId) {
              clearTimeout(this.hideTimeoutId);
          }

          if (this.tooltipObj) {
              this.tooltipObj.classList.remove('ng-tooltip-show');
              this.hideTimeoutId = setTimeout(() => {
                 this.tooltipObj.parentNode.removeChild(this.tooltipObj);
                 this.tooltipObj = null;
              }, this.hideDelay);
          }
      }

      setPosition() {
          const elemHeight = this.elementRef.nativeElement.offsetHeight;
          const elemWidth = this.elementRef.nativeElement.offsetWidth;
          const tooltipHeight = this.tooltipObj.clientHeight;
          const tooltipWidth = this.tooltipObj.offsetWidth;
          const scrollY = window.pageYOffset;

          if (this.placement === 'top') {
              this.tooltipObj.style.top = (this.elemPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset) + 'px';
          }

          if (this.placement === 'bottom') {
              this.tooltipObj.style.top = (this.elemPosition.top + scrollY) + elemHeight + this.tooltipOffset + 'px';
          }

          if (this.placement === 'top' || this.placement === 'bottom') {
              this.tooltipObj.style.left = (this.elemPosition.left + elemWidth / 2) - tooltipWidth / 2 + 'px';
          }

          if (this.placement === 'left') {
              this.tooltipObj.style.left = this.elemPosition.left - tooltipWidth - this.tooltipOffset + 'px';
          }

          if (this.placement === 'right') {
              this.tooltipObj.style.left = this.elemPosition.left + elemWidth + this.tooltipOffset + 'px';
          }

          if (this.placement === 'left' || this.placement === 'right') {
              this.tooltipObj.style.top = (this.elemPosition.top + scrollY) + elemHeight / 2 - this.tooltipObj.clientHeight / 2 + 'px';
          }
      }

}
