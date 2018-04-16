import { NgModule } from '@angular/core';

import {
    SharedModule as PrimengSharedModule,
    InputSwitchModule, ListboxModule, DataTableModule, TreeModule, PaginatorModule, TooltipModule, CheckboxModule, PanelModule,
    MenubarModule, BreadcrumbModule, DropdownModule, DialogModule, BlockUIModule, StepsModule, SplitButtonModule,
    TreeTableModule, ContextMenuModule, CalendarModule, InputTextareaModule, FileUploadModule, ButtonModule, GrowlModule,
    TabViewModule, OrderListModule, PickListModule, InputTextModule, MessagesModule, PasswordModule, ProgressBarModule, SpinnerModule
} from 'primeng/primeng';
// import { UploadModule } from '../documentation/file-upload-rewrite/upload.module';


/**
 * Primeng共享模块
 * @export
 * @class PrimengModule
 */
@NgModule({
    imports: [
        PrimengSharedModule,
        DataTableModule,
        TreeModule,
        PaginatorModule,
        TooltipModule,
        CheckboxModule,
        MenubarModule,
        BreadcrumbModule,
        DropdownModule,
        DialogModule,
        ListboxModule,
        BlockUIModule,
        StepsModule,
        TreeTableModule,
        InputTextareaModule,
        ContextMenuModule,
        CalendarModule,
        PanelModule,
        SplitButtonModule,
        InputSwitchModule,
        FileUploadModule,
        // UploadModule,
        ButtonModule,
        GrowlModule,
        TabViewModule,
        OrderListModule,
        PickListModule,
        InputTextModule,
        MessagesModule,
        PasswordModule,
        ProgressBarModule,
        SpinnerModule
    ],
    exports: [
        PrimengSharedModule,
        DataTableModule,
        TreeModule,
        PaginatorModule,
        TooltipModule,
        CheckboxModule,
        MenubarModule,
        BreadcrumbModule,
        DropdownModule,
        DialogModule,
        ListboxModule,
        BlockUIModule,
        StepsModule,
        TreeTableModule,
        InputTextareaModule,
        ContextMenuModule,
        CalendarModule,
        PanelModule,
        SplitButtonModule,
        InputSwitchModule,
        FileUploadModule,
        // UploadModule,
        ButtonModule,
        GrowlModule,
        TabViewModule,
        OrderListModule,
        PickListModule,
        InputTextModule,
        MessagesModule,
        PasswordModule,
        ProgressBarModule,
        SpinnerModule
    ]
})
export class PrimengModule { }
