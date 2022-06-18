export default {
    name: 'wishlist',
    title: 'Wishlist',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
                name: 'item',
                type: 'string',
                title: 'Item'
            }]
        }
    ]
}