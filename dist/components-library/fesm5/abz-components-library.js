import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * {\@link https://stackblitz.com/edit/angular-sw5vxm?embed=1&file=src/app/app.module.ts}
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
var ComponentsLibraryModule = /** @class */ (function () {
    function ComponentsLibraryModule() {
    }
    ComponentsLibraryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [LibraryButtonComponent],
                    exports: [LibraryButtonComponent]
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

export { LibraryButtonComponent, ComponentsLibraryModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJ6LWNvbXBvbmVudHMtbGlicmFyeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYWJ6LWNvbXBvbmVudHMtbGlicmFyeS9saWIvbGlicmFyeS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9hYnotY29tcG9uZW50cy1saWJyYXJ5L2xpYi9jb21wb25lbnRzLWxpYnJhcnkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiB7QGxpbmsgaHR0cHM6Ly9zdGFja2JsaXR6LmNvbS9lZGl0L2FuZ3VsYXItc3c1dnhtP2VtYmVkPTEmZmlsZT1zcmMvYXBwL2FwcC5tb2R1bGUudHN9XG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+Q2xpY2sgTWUhPC9idXR0b24+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpYnJhcnlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIG5hbWUgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlicmFyeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbGlicmFyeS1idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMaWJyYXJ5QnV0dG9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xpYnJhcnlCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNMaWJyYXJ5TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFNQTtJQVdFO1FBRkEsU0FBSSxHQUFHLFNBQVMsQ0FBQztLQUVBOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw4Q0FDWDtvQkFDQyxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7Ozt1QkFHRSxLQUFLOztJQVFSLDZCQUFDO0NBQUE7Ozs7OztBQ3RCRDtJQUdBO0tBTXdDOztnQkFOdkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEM7O0lBQ3NDLDhCQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7OyJ9