import {ListComponentsComponent} from '../../pages/component-list/list-components.component';

export const EXAMPLE_COMPONENTS = {
    "example1": {
        "title": "Highlight the first autocomplete option",
        "component": ListComponentsComponent,
        "additionalFiles": [],
        "selectorName": ""
    }
};

export class ExampleData {
    exampleFiles;
    selectorName;
    indexFilename;
    description;
    componentName;
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        /** @type {?} */
        const exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map((/**
         * @param {?} extension
         * @return {?}
         */
        extension => `${example}-example.${extension}`));
        this.selectorName = this.indexFilename = `${example}-example`;
        if (exampleConfig.additionalFiles) {
            this.exampleFiles.push(...exampleConfig.additionalFiles);
        }
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        letter => letter.toUpperCase()));
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
}
