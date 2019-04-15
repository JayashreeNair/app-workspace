export const EXAMPLES = [
    {
        name: 'FormControls',
        docItems: [
            {id: 1, name: 'Button'},
            {id: 2, name: 'CheckBox'}
        ]
    }
];

export interface DocCategory {
    name: string;
    docItems: DocItem[];
}

export interface DocItem {
    id: number;
    name: string;
}
