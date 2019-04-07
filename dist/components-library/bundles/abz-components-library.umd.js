(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('abz-components-library', ['exports', '@angular/core'], factory) :
    (factory((global['abz-components-library'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsLibraryComponent = (function () {
        function ComponentsLibraryComponent() {
            this.name = 'default';
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
            { type: core.Component, args: [{
                        selector: 'lib-components-library',
                        template: "\n    <p>\n      components-library works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        ComponentsLibraryComponent.ctorParameters = function () { return []; };
        ComponentsLibraryComponent.propDecorators = {
            name: [{ type: core.Input }]
        };
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
            { type: core.NgModule, args: [{
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

    exports.ComponentsLibraryComponent = ComponentsLibraryComponent;
    exports.ComponentsLibraryModule = ComponentsLibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJ6LWNvbXBvbmVudHMtbGlicmFyeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2Fiei1jb21wb25lbnRzLWxpYnJhcnkvbGliL2NvbXBvbmVudHMtbGlicmFyeS5jb21wb25lbnQudHMiLCJuZzovL2Fiei1jb21wb25lbnRzLWxpYnJhcnkvbGliL2NvbXBvbmVudHMtbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29tcG9uZW50cy1saWJyYXJ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGNvbXBvbmVudHMtbGlicmFyeSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c0xpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIG5hbWUgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50c0xpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMtbGlicmFyeS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NvbXBvbmVudHNMaWJyYXJ5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbXBvbmVudHNMaWJyYXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzTGlicmFyeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFnQkU7WUFGQSxTQUFJLEdBQUcsU0FBUyxDQUFDO1NBRUE7Ozs7UUFFakIsNkNBQVE7OztZQUFSO2FBQ0M7O29CQWpCRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSwwREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzsyQkFHRUMsVUFBSzs7UUFRUixpQ0FBQztLQUFBOzs7Ozs7QUNyQkQ7UUFHQTtTQU13Qzs7b0JBTnZDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7d0JBQzFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO3FCQUN0Qzs7UUFDc0MsOEJBQUM7S0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=