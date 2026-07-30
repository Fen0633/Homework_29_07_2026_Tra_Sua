import { DrinkModel } from "./models";

export const MOCK_DRINKS : DrinkModel[] = [
    {
        id: 1,
        name: 'Trà sữa trân châu đường đen.',
        description: 'Ngọt, đậm vị trà cùng với trân châu đường đen.',
        giaCoBan: 45000,
        toppings: [
            {name: 'Trân châu đường đen', quantity: 10, unit: 'gram'},
            {name: 'Trân châu trắng', quantity: 5, unit: 'gram'},
        ],
    },
        {
            id: 2,
            name: 'Trà sữa matcha',
            description: 'Đậm vị trà xanh và độ ngọt của sữa.',
            giaCoBan: 42000,
            toppings: [
                {name: 'Trân châu trắng', quantity: 5, unit: 'gram'},
                {name: 'Thạch matcha', quantity: 8, unit: 'gram'},
            ],
        },
        {
            id: 3,
            name: 'Hồng trà sữa',
            description: 'Đậm vị hồng trà và ít ngọt của sữa.',
            giaCoBan: 35000,
            toppings: [
                {name: 'Trân châu trắng', quantity: 5, unit: 'gram'},
                {name: 'Trân châu đào', quantity: 10, unit: 'gram'},
            ],
        },
];