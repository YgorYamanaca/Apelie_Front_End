import { StoreOrdersStatus } from '../enums/enum-store-orders-status';
import { StorePaymentMethod } from '../enums/enum-store-payment-method';
import { IProduct } from './interdace-products';
import { IAddress } from './interface-address';
import ILoggedUser from './interface-logged-user';
import IOwner from './interface-owner';

export interface IStore {
  storeId: number;
  owner: IOwner;
  twitterAccount: string;
  category: string[];
  paymentMethods: Array;
  instagramAccount: string;
  state: string;
  facebookAccount: string;
  youtubeAccount: string;
  bannerUrl: string;
  theme: string;
  street: string;
  city: string;
  zipCode: string;
  name: string;
  email: string;
  phone: string;
  addressNumber: string;
  neighbourhood: string;
  rating: number;
  description: string;
  logoUrl: string;
  products: IProduct[];
  primaryColor: string;
  secondaryColor: string;
}

export interface IStoreReview {
  user: ILoggedUser,
  description: string,
  rating: number,
}

export interface IOrdersItemList {
  product: IProduct,
  description: string,
  quantity: number
}

export interface IStoreOrders {
  orderId: number,
  trackingCode: string,
  status: StoreOrdersStatus,
  paymentMethod: StorePaymentMethod,
  createdAt: string,
  totalValue: number,
  user: ILoggedUser,
  store: IStore,
  itemList: IOrdersItemList[],
  review: IStoreReview,
  address: IAddress
}

export interface IFirstRegister {
  name: string,
  logoImage?: string,
  categories: string[],
  description: string,

  nameError?: string,
  descriptionError?: string,
}

export interface IDesignRegister {
  secondaryColor: string;
  primaryColor: string;
  bannerImage?: string,
}

export interface ISocialMediaRegister {
  facebookAccount: string,
  youtubeAccount: string,
  twitterAccount: string,
  instagramAccount: string,
}

export interface IAddressRegister {
  phone: string,
  addressNumber: string,
  neighbourhood: string,
  street: string,
  city: string,
  zipCode: string,
  state: string,
  email: string,
  zipCodeError?: string,
  addressNumberError?: string,
  phoneError?: string,
  neighbourhoodError?: string,
  streetError?: string,
  emailError?: string,
}

export interface ITeste {
  bannerUrl?: string;
  logoUrl?: string;
}

export interface IStoreRequest extends IFirstRegister, IDesignRegister, ISocialMediaRegister, IAddressRegister, ITeste {}
