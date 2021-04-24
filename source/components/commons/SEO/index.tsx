import React from 'react';
import Head from 'next/head';
import ISEO from '@/types/interfaces/interface-search-engine-optimization';

const SEO: React.FC<ISEO> = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle} | Apelie` : 'Apelie';

  const description = 'Venha fazer parte da maior comunidade de comércio de itens artesanais do Brasil.';
  const image = 'https://meunegocio.uol.com.br/blog/wp-content/uploads/2020/06/store-1485872691192_600x320.png';
  const urlBase = 'https://www.apelie.com.br';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
