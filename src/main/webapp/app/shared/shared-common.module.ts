import { NgModule } from '@angular/core';

import { EnigmagieBackOfficeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EnigmagieBackOfficeSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EnigmagieBackOfficeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EnigmagieBackOfficeSharedCommonModule {}
