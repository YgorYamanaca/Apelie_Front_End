export interface IForm<T> {
    registerStoreRequestValue: T,
    changeStoreRequestFunction: (value: T) => void,
}
