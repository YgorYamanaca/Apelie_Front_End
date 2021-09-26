import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import ApelieCookiesNotificationStyle from './styles';
import ApelieButton from '@/components/commons/ApelieButton';

const COOKIE_NAME = 'apelie-accept-cookies';

const ApelieCookiesNotification: React.VoidFunctionComponent = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setAcceptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    Cookies.set(COOKIE_NAME, 'accepted', { expires: 30 });
  };

  return (
    !acceptedCookies
      ? (
        <ApelieCookiesNotificationStyle.Container>
          <ApelieTextBase variant="paragraph1">
            Utilizamos cookies para personalizar anúncios e melhorar a sua experiência no site. Ao continuar navegando, você concorda com a nossa política de Privacidade.
          </ApelieTextBase>
          <div>
            <ApelieButton textVariant="paragraph2" onClick={() => acceptCookies()}>
              Aceitar e fechar
            </ApelieButton>
          </div>
        </ApelieCookiesNotificationStyle.Container>
      )
      : <></>
  );
};

export default ApelieCookiesNotification;
