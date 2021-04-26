interface ITypograph{
  fontSize: string,
  fontWeight: string,
  lineHeight: number,
}

interface ITypographyVariants {
  title: ITypograph,
  titleXS: ITypograph,
  subTitle: ITypograph,
  subTitleXs: ITypograph,
  paragraph1: ITypograph,
  paragraph1Xs: ITypograph,
  paragraph2: ITypograph,
  paragraph2Xs: ITypograph,
  smallException: ITypograph,
}

export default ITypographyVariants;
