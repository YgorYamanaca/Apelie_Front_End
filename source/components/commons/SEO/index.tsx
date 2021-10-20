import React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import ISEO from '@/types/interfaces/interface-search-engine-optimization';

const SEO: React.FC<ISEO> = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle}` : 'Apelie';
  const description = 'Venha fazer parte da maior comunidade de comércio de itens artesanais do Brasil.';
  const image = 'https://blog.lahar.com.br/wp-content/uploads/2018/08/exemplos-de-marketing-digital-650x400.png';
  const router = useRouter();
  const urlBase = `https://apelie.vercel.app/${router.pathname.includes('store') ? `store/${router.query.slug}` : router.pathname}`;
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="Apelie Icon" href="/images/Apelie/icone.png" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </NextHead>
  );
};

export default SEO;
