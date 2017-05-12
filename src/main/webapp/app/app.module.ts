import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { Jhispter4MonoSharedModule, UserRouteAccessService } from './shared';
import { Jhispter4MonoHomeModule } from './home/home.module';
import { Jhispter4MonoAdminModule } from './admin/admin.module';
import { Jhispter4MonoAccountModule } from './account/account.module';
import { Jhispter4MonoEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Jhispter4MonoSharedModule,
        Jhispter4MonoHomeModule,
        Jhispter4MonoAdminModule,
        Jhispter4MonoAccountModule,
        Jhispter4MonoEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Jhispter4MonoAppModule {}
