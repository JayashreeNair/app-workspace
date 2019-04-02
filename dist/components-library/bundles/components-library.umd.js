(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('components-library', ['exports', '@angular/core'], factory) :
    (factory((global['components-library'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsLibraryService = (function () {
        function ComponentsLibraryService() {
        }
        ComponentsLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        ComponentsLibraryService.ctorParameters = function () { return []; };
        /** @nocollapse */ ComponentsLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function ComponentsLibraryService_Factory() { return new ComponentsLibraryService(); }, token: ComponentsLibraryService, providedIn: "root" });
        return ComponentsLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsLibraryComponent = (function () {
        function ComponentsLibraryComponent() {
        }
        /**
         * @return {?}
         */
        ComponentsLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ComponentsLibraryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-components-library',
                        template: "\n    <p>\n      components-library works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        ComponentsLibraryComponent.ctorParameters = function () { return []; };
        return ComponentsLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsLibraryModule = (function () {
        function ComponentsLibraryModule() {
        }
        ComponentsLibraryModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [ComponentsLibraryComponent],
                        exports: [ComponentsLibraryComponent]
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

    exports.ComponentsLibraryService = ComponentsLibraryService;
    exports.ComponentsLibraryComponent = ComponentsLibraryComponent;
    exports.ComponentsLibraryModule = ComponentsLibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy1saWJyYXJ5LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29tcG9uZW50cy1saWJyYXJ5L2xpYi9jb21wb25lbnRzLWxpYnJhcnkuc2VydmljZS50cyIsIm5nOi8vY29tcG9uZW50cy1saWJyYXJ5L2xpYi9jb21wb25lbnRzLWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly9jb21wb25lbnRzLWxpYnJhcnkvbGliL2NvbXBvbmVudHMtbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTGlicmFyeVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tcG9uZW50cy1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNvbXBvbmVudHMtbGlicmFyeSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c0xpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudHNMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzLWxpYnJhcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb21wb25lbnRzTGlicmFyeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDb21wb25lbnRzTGlicmFyeUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c0xpYnJhcnlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7O3VDQUpEO0tBUUM7Ozs7OztBQ1JEO1FBYUU7U0FBaUI7Ozs7UUFFakIsNkNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLDBEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7UUFRRCxpQ0FBQztLQUFBOzs7Ozs7QUNsQkQ7UUFHQTtTQU13Qzs7b0JBTnZDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7d0JBQzFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO3FCQUN0Qzs7UUFDc0MsOEJBQUM7S0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9