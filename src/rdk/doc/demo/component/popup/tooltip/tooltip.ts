import {Component, ViewChild, ElementRef, ComponentRef} from "@angular/core";

import {UseTooltipComponent} from './use-tooltip/use-tooltip';

import {
    PopupService, PopupOptions, PopupPositionType, PopupInfo, PopupEffect
} from '../../../../../service/popup.service';

@Component({
    templateUrl: 'tooltip.html',
    styleUrls: ['tooltip.scss']
})
export class TooltipDemoComponent {
    private _tooltipInfo: PopupInfo;

    @ViewChild("insertPlace", {read: ElementRef}) insertPlaceEl: ElementRef;

    tooltipMessage:string = '这里是tooltip的内容 <span class="fa fa-thumbs-up"></span>';

    constructor(private _popupService: PopupService) {
    }

    popup() {
        this._tooltipInfo = this._popupService.popup(UseTooltipComponent, this._getTooltipOptions(this.insertPlaceEl));
    }

    close() {
        this._tooltipInfo.dispose();
    }

    private _getTooltipOptions(insertPlaceEl: ElementRef): PopupOptions {
        return {
            modal: false, //是否模态
            showEffect: PopupEffect.bubbleIn,
            hideEffect: PopupEffect.bubbleOut,
            pos: insertPlaceEl, //插入点
            posOffset: { //偏移位置
                bottom: -8,
                left: 0
            },
            posType: PopupPositionType.absolute, //定位类型
        };
    }

}

