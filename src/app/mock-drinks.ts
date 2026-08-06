import { DrinkModel } from "./models";

export const MOCK_DRINKS : DrinkModel[] = [
    {
        id: 1,
        name: 'Trà sữa trân châu đường đen.',
        description: 'Ngọt, đậm vị trà cùng với trân châu đường đen.',
        giaCoBan: 45000,
        authorEmail: 'hoang@omo-tea.vn',
        imgUrl: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=600',
        isPopular: true,
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
            authorEmail: 'hoang@omo-tea.vn',
            imgUrl: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600',
            isPopular: true,
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
            authorEmail: 'hoang@omo-tea.vn',
            imgUrl: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600',
            isPopular: false,
            toppings: [
                {name: 'Trân châu trắng', quantity: 5, unit: 'gram'},
                {name: 'Trân châu đào', quantity: 10, unit: 'gram'},
            ],
        },
        {
            id: 4,
            name: 'Trà sữa full topping',
            description: 'Trà sữa với đủ loại topping.',
            giaCoBan: 60000,
            authorEmail: 'hoang@omo-tea.vn',
            imgUrl: 'https://i.pinimg.com/736x/7f/55/de/7f55de9cea23a85bfc3e22bf2842c4e6.jpg',
            isPopular: false,
            toppings: [
                {name: 'Trân châu trắng', quantity: 5, unit: 'gram'},
                {name: 'Trân châu đào', quantity: 10, unit: 'gram'},
                {name: 'Trân châu dâu', quantity: 10, unit: 'gram'},
                {name: 'Trân châu dừa', quantity: 10, unit: 'gram'},
            ],
        },
];