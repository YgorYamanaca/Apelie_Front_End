interface ILoggedUser {
  userId: number,
  fullName: string,
  city: string,
  email: string,
  street: string,
  state: string,
  cep: string,
  addressNumber: string,
  neighbourhood: string,
  gender: string,
  cpf: string,
  birthDate: string,
  photoUrl: string,
  userType?: 'UNCOMPLETE' | 'COMPLETE'
}

export default ILoggedUser;
