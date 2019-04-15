import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Examples:  <example-url>https://stackblitz.com/edit/angular-sw5vxm?embed=1&file=src/app/app.module.ts</example-url>
 */
var LibraryButtonComponent = /** @class */ (function () {
    function LibraryButtonComponent() {
        this.name = 'default';
    }
    /**
     * @return {?}
     */
    LibraryButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LibraryButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-button',
                    template: "<button type=\"button\">Click Me!</button>\n",
                    styles: []
                },] },
    ];
    LibraryButtonComponent.ctorParameters = function () { return []; };
    LibraryButtonComponent.propDecorators = {
        name: [{ type: Input }]
    };
    return LibraryButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Examples:  <example-url>https://stackblitz.com/edit/angular-sw5vxm?embed=1&file=src/app/app.module.ts</example-url>
 */
var LibraryCheckboxComponent = /** @class */ (function () {
    function LibraryCheckboxComponent() {
        this.name = 'default';
    }
    /**
     * @return {?}
     */
    LibraryCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LibraryCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-checkbox',
                    template: "<input type=\"checkbox\" name=\"vehicle1\" value=\"Bike\"> I have a bike<br>\n<input type=\"checkbox\" name=\"vehicle2\" value=\"Car\"> I have a car<br>\n<input type=\"checkbox\" name=\"vehicle3\" value=\"Boat\" checked> I have a boat<br><br>\n",
                    styles: []
                },] },
    ];
    LibraryCheckboxComponent.ctorParameters = function () { return []; };
    LibraryCheckboxComponent.propDecorators = {
        name: [{ type: Input }]
    };
    return LibraryCheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentsLibraryModule = /** @class */ (function () {
    function ComponentsLibraryModule() {
    }
    ComponentsLibraryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [LibraryButtonComponent, LibraryCheckboxComponent],
                    exports: [LibraryButtonComponent, LibraryCheckboxComponent]
                },] },
    ];
    return ComponentsLibraryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LibraryButtonComponent, ComponentsLibraryModule, LibraryCheckboxComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJ6LWNvbXBvbmVudHMtbGlicmFyeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYWJ6LWNvbXBvbmVudHMtbGlicmFyeS9saWIvbGlicmFyeS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9hYnotY29tcG9uZW50cy1saWJyYXJ5L2xpYi9saWJyYXJ5LWNoZWNrYm94LmNvbXBvbmVudC50cyIsIm5nOi8vYWJ6LWNvbXBvbmVudHMtbGlicmFyeS9saWIvY29tcG9uZW50cy1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRXhhbXBsZXM6ICA8ZXhhbXBsZS11cmw+aHR0cHM6Ly9zdGFja2JsaXR6LmNvbS9lZGl0L2FuZ3VsYXItc3c1dnhtP2VtYmVkPTEmZmlsZT1zcmMvYXBwL2FwcC5tb2R1bGUudHM8L2V4YW1wbGUtdXJsPlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkNsaWNrIE1lITwvYnV0dG9uPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJyYXJ5QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBuYW1lID0gJ2RlZmF1bHQnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEV4YW1wbGVzOiAgPGV4YW1wbGUtdXJsPmh0dHBzOi8vc3RhY2tibGl0ei5jb20vZWRpdC9hbmd1bGFyLXN3NXZ4bT9lbWJlZD0xJmZpbGU9c3JjL2FwcC9hcHAubW9kdWxlLnRzPC9leGFtcGxlLXVybD5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidmVoaWNsZTFcIiB2YWx1ZT1cIkJpa2VcIj4gSSBoYXZlIGEgYmlrZTxicj5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidmVoaWNsZTJcIiB2YWx1ZT1cIkNhclwiPiBJIGhhdmUgYSBjYXI8YnI+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInZlaGljbGUzXCIgdmFsdWU9XCJCb2F0XCIgY2hlY2tlZD4gSSBoYXZlIGEgYm9hdDxicj48YnI+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpYnJhcnlDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgbmFtZSA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaWJyYXJ5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9saWJyYXJ5LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtMaWJyYXJ5Q2hlY2tib3hDb21wb25lbnR9IGZyb20gJy4vbGlicmFyeS1jaGVja2JveC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xpYnJhcnlCdXR0b25Db21wb25lbnQsIExpYnJhcnlDaGVja2JveENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMaWJyYXJ5QnV0dG9uQ29tcG9uZW50LCBMaWJyYXJ5Q2hlY2tib3hDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNMaWJyYXJ5TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFNQTtJQVdFO1FBRkEsU0FBSSxHQUFHLFNBQVMsQ0FBQztLQUVBOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw4Q0FDWDtvQkFDQyxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7Ozt1QkFHRSxLQUFLOztJQVFSLDZCQUFDO0NBQUE7Ozs7OztBQ3RCRDs7O0FBTUE7SUFhRTtRQUZBLFNBQUksR0FBRyxTQUFTLENBQUM7S0FFQTs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHNQQUdYO29CQUNDLE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O3VCQUdFLEtBQUs7O0lBUVIsK0JBQUM7Q0FBQTs7Ozs7O0FDeEJEO0lBSUE7S0FNd0M7O2dCQU52QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsd0JBQXdCLENBQUM7b0JBQ2hFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLHdCQUF3QixDQUFDO2lCQUM1RDs7SUFDc0MsOEJBQUM7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7In0=