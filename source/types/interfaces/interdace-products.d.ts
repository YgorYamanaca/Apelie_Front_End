export interface IProdutcImage {
    // eslint-disable-next-line camelcase
    product_image_id: number,
    url: string,
}

export interface IProduct {
    category: string,
    description: string,
    images: IProdutcImage[],
    name: string,
    price: number,
    productId: number,
    quantity: number,
}
