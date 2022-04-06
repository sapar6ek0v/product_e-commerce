export interface ProductItem {
    product_id: number,
    name: string,
    description: string,
    quantity_available: number,
    initial_price: number,
    created_by: {
        display_name: string
    },
    type: string,
    avatar: {
        original: string,
        compressed: string
    },
    additional_photos: [Photo]
}

export type Photo = {
    original: string,
    compressed: string
}