import ISEO from './interface-search-engine-optimization';

interface IApeliePageTemplate {
  SEOProps: ISEO;
  PAGEProps: {
    template: 'DEFAULT' | 'COMMON' | 'CUSTOM';
  };
}

export default IApeliePageTemplate;
