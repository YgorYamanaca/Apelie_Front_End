import IOwner from './interface-owner';

interface IStore {
  storeId: number,
  owner: IOwner,
  twitterLink: string,
  category: string,
  paymentMethods: Array,
  instagramLink: string,
  state: string,
  facebookLink: string,
  youtubeLink: string,
  bannerUrl: string,
  theme: string,
  street: string,
  city: string,
  cep: string,
  name: string,
  email: string,
  phone: string,
  addressNumber: string,
  neighbourhood: string,
  rating: number,
}

export default IStore;
