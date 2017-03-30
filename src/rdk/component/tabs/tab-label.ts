/**
 * Created by 10177553 on 2017/3/29.
 */

import {Directive, Input, ElementRef} from "@angular/core";


@Directive({
    selector: '[tab-label]'
})
// todo label 渲染器,以备将来支持html的渲染;
export class RdkLabel {
    @Input()
    public key: number;
    constructor(private _elementRef: ElementRef) {}

    // label 左侧的距离
    getOffsetLeft(): number {
        return this._elementRef.nativeElement.offsetLeft;
    }

    getOffsetTop(): number {
        return this._elementRef.nativeElement.offsetTop;
    }

    // 组件的宽度
    getOffsetWidth(): number {
        return this._elementRef.nativeElement.offsetWidth;
    }
}
