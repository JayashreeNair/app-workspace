(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('abz-components-library', ['exports', '@angular/core'], factory) :
    (factory((global['abz-components-library'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Examples:  <example-url>https://stackblitz.com/edit/angular-sw5vxm?embed=1&file=src/app/app.module.ts</example-url>
     */
    var LibraryButtonComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'lib-button',
                        template: "<button type=\"button\">Click Me!</button>\n",
                        styles: []
                    },] },
        ];
        LibraryButtonComponent.ctorParameters = function () { return []; };
        LibraryButtonComponent.propDecorators = {
            name: [{ type: core.Input }]
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
    var LibraryCheckboxComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'lib-checkbox',
                        template: "<input type=\"checkbox\" name=\"vehicle1\" value=\"Bike\"> I have a bike<br>\n<input type=\"checkbox\" name=\"vehicle2\" value=\"Car\"> I have a car<br>\n<input type=\"checkbox\" name=\"vehicle3\" value=\"Boat\" checked> I have a boat<br><br>\n",
                        styles: []
                    },] },
        ];
        LibraryCheckboxComponent.ctorParameters = function () { return []; };
        LibraryCheckboxComponent.propDecorators = {
            name: [{ type: core.Input }]
        };
        return LibraryCheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsLibraryModule = (function () {
        function ComponentsLibraryModule() {
        }
        ComponentsLibraryModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.LibraryButtonComponent = LibraryButtonComponent;
    exports.ComponentsLibraryModule = ComponentsLibraryModule;
    exports.ɵa = LibraryCheckboxComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJ6LWNvbXBvbmVudHMtbGlicmFyeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Fiei1jb21wb25lbnRzLWxpYnJhcnkvbGliL2xpYnJhcnktYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vYWJ6LWNvbXBvbmVudHMtbGlicmFyeS9saWIvbGlicmFyeS1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL2Fiei1jb21wb25lbnRzLWxpYnJhcnkvbGliL2NvbXBvbmVudHMtbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEV4YW1wbGVzOiAgPGV4YW1wbGUtdXJsPmh0dHBzOi8vc3RhY2tibGl0ei5jb20vZWRpdC9hbmd1bGFyLXN3NXZ4bT9lbWJlZD0xJmZpbGU9c3JjL2FwcC9hcHAubW9kdWxlLnRzPC9leGFtcGxlLXVybD5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5DbGljayBNZSE8L2J1dHRvbj5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGlicmFyeUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgbmFtZSA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBFeGFtcGxlczogIDxleGFtcGxlLXVybD5odHRwczovL3N0YWNrYmxpdHouY29tL2VkaXQvYW5ndWxhci1zdzV2eG0/ZW1iZWQ9MSZmaWxlPXNyYy9hcHAvYXBwLm1vZHVsZS50czwvZXhhbXBsZS11cmw+XG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInZlaGljbGUxXCIgdmFsdWU9XCJCaWtlXCI+IEkgaGF2ZSBhIGJpa2U8YnI+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInZlaGljbGUyXCIgdmFsdWU9XCJDYXJcIj4gSSBoYXZlIGEgY2FyPGJyPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ2ZWhpY2xlM1wiIHZhbHVlPVwiQm9hdFwiIGNoZWNrZWQ+IEkgaGF2ZSBhIGJvYXQ8YnI+PGJyPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJyYXJ5Q2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIG5hbWUgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlicmFyeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbGlicmFyeS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7TGlicmFyeUNoZWNrYm94Q29tcG9uZW50fSBmcm9tICcuL2xpYnJhcnktY2hlY2tib3guY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMaWJyYXJ5QnV0dG9uQ29tcG9uZW50LCBMaWJyYXJ5Q2hlY2tib3hDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGlicmFyeUJ1dHRvbkNvbXBvbmVudCwgTGlicmFyeUNoZWNrYm94Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTGlicmFyeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQU1BO1FBV0U7WUFGQSxTQUFJLEdBQUcsU0FBUyxDQUFDO1NBRUE7Ozs7UUFFakIseUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSw4Q0FDWDt3QkFDQyxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzsyQkFHRUMsVUFBSzs7UUFRUiw2QkFBQztLQUFBOzs7Ozs7QUN0QkQ7OztBQU1BO1FBYUU7WUFGQSxTQUFJLEdBQUcsU0FBUyxDQUFDO1NBRUE7Ozs7UUFFakIsMkNBQVE7OztZQUFSO2FBQ0M7O29CQWhCRkQsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsc1BBR1g7d0JBQ0MsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7MkJBR0VDLFVBQUs7O1FBUVIsK0JBQUM7S0FBQTs7Ozs7O0FDeEJEO1FBSUE7U0FNd0M7O29CQU52Q0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLHdCQUF3QixDQUFDO3dCQUNoRSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSx3QkFBd0IsQ0FBQztxQkFDNUQ7O1FBQ3NDLDhCQUFDO0tBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==