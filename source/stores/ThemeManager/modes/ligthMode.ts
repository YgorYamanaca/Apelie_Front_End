import IColors from "@/types/interfaces/interface-colors";

const ligthTheme: IColors = {
  primary: {
    color: '#01576e',
    contrastText: '#fff',
    colorHex: 'rgba(1,87,110,1)',
    colorHexAlpha: 'rgba(1,87,110, 0.5)',
  },
  secondary: {
    color: '#41abc3',
    contrastText: '#fff',
    colorHex: 'rgba(65,171,195, 1)',
    colorHexAlpha: 'rgba(65,171,195, 0.5)',
  },
  tertiary: {
    main: {
      color: '#F0F8FF',
      contrastText: '#fff',
    },
  },
  background: {
    color: '#fff',
    contrastText: '#54b6e5',
  },
  statusColor: {
    done: '#43CF3B',
    inProgress: '#007ACD',
  },
};

export default ligthTheme;
