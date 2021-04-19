interface ITypograph{
  fontSize: string,
}

interface ITypographyVariants {
  title: ITypograph,
  titleXS: ITypograph,
  subTitle: ITypograph,
  paragraph1: ITypograph,
  paragraph2: ITypograph,
  smallestException: ITypograph,
}

export default ITypographyVariants;
