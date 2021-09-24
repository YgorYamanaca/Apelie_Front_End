import IOwner from './interface-owner';

interface IStore {
  storeId: number;
  owner: IOwner;
  twitterAccount: string;
  category: string;
  paymentMethods: Array;
  instagramAccount: string;
  state: string;
  facebookAccount: string;
  youtubeAccount: string;
  bannerUrl: string;
  theme: string;
  street: string;
  city: string;
  cep: string;
  name: string;
  email: string;
  phone: string;
  addressNumber: string;
  neighbourhood: string;
  rating: number;
  description: string;
  logoUrl: string;
}

export default IStore;
