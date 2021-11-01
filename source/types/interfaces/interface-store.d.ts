import { IProduct } from './interdace-products';
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
}

export interface IStoreRequest {
  twitterAccount: string,
  categories: string[],
  instagramAccount: string,
  state: string,
  facebookAccount: string,
  youtubeAccount: string,
  bannerImage: string,
  logoImage: string,
  primaryColor: string,
  secondaryColor: string,
  street: string,
  city: string,
  zipCode: string,
  name: string,
  email: string,
  phone: string,
  addressNumber: string,
  neighbourhood: string,
  description: string
}
