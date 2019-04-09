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
     * {\@link https://stackblitz.com/edit/angular-sw5vxm?embed=1&file=src/app/app.module.ts}
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
    var ComponentsLibraryModule = (function () {
        function ComponentsLibraryModule() {
        }
        ComponentsLibraryModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.LibraryButtonComponent = LibraryButtonComponent;
    exports.ComponentsLibraryModule = ComponentsLibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJ6LWNvbXBvbmVudHMtbGlicmFyeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Fiei1jb21wb25lbnRzLWxpYnJhcnkvbGliL2xpYnJhcnktYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vYWJ6LWNvbXBvbmVudHMtbGlicmFyeS9saWIvY29tcG9uZW50cy1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICoge0BsaW5rIGh0dHBzOi8vc3RhY2tibGl0ei5jb20vZWRpdC9hbmd1bGFyLXN3NXZ4bT9lbWJlZD0xJmZpbGU9c3JjL2FwcC9hcHAubW9kdWxlLnRzfVxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkNsaWNrIE1lITwvYnV0dG9uPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJyYXJ5QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBuYW1lID0gJ2RlZmF1bHQnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpYnJhcnlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2xpYnJhcnktYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTGlicmFyeUJ1dHRvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMaWJyYXJ5QnV0dG9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTGlicmFyeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQU1BO1FBV0U7WUFGQSxTQUFJLEdBQUcsU0FBUyxDQUFDO1NBRUE7Ozs7UUFFakIseUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSw4Q0FDWDt3QkFDQyxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzsyQkFHRUMsVUFBSzs7UUFRUiw2QkFBQztLQUFBOzs7Ozs7QUN0QkQ7UUFHQTtTQU13Qzs7b0JBTnZDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNsQzs7UUFDc0MsOEJBQUM7S0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=