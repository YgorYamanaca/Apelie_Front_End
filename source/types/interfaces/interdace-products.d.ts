export interface IProdutcImage {
    // eslint-disable-next-line camelcase
    product_image_id: number,
    url: string,
}

export interface IProduct {
    productId: number,
    category: string,
    description: string,
    images: IProdutcImage[],
    name: string,
    price: number,
    productId: number,
    quantity: number,
}

export interface IProductRegister {
    category: string,
    description?: string,
    images: string[],
    name: string,
    price: number,
    quantity: number,
}

export interface IProductRegisterWithErrors extends IProductRegister {
    priceError?: string,
    quantityError?: string,
}
