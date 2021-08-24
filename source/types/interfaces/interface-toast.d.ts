export type ToastType = 'error' | 'success' | 'info' | 'warning';
interface IToastObject {
  message: string;
  type: ToastType;
  closeFunction?: VoidFunction;
}

export default IToastObject;
