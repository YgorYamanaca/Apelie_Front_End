interface ILoggedUser {
  userId: number | string;
  fullName: string;
  email: string;
  photoUrl: string;
  hasStore: boolean;
}

export default ILoggedUser;
