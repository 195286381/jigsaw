import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { JigsawButtonModule } from "jigsaw/component/button/button";
import { JigsawInputModule } from "jigsaw/component/input/input";
import { TabContentComponent, TabContentDefine } from "./tabContent";

const routes=[
    {
        path:'', component: TabContentComponent, outlet: 'tab-page'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        JigsawButtonModule, JigsawInputModule
    ],
    declarations: [
        TabContentComponent, TabContentDefine
    ],
    entryComponents: [ TabContentDefine, TabContentComponent ]
})
export class TabContentModule { }
