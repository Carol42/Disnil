import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
      &copy;2020 Desenvolvido por
        {' '}
        <a href="https://github.com/Carol42">
         Caroline H Oliveira
        </a>
      </p>
     {/* <p>
        Acesse:
        <a href="https://www.youtube.com/user/coisadenerd" > Coisa de Nerd</a>
        <a href="https://www.youtube.com/user/cadeachave" > Cadê a Chave?</a>
        <a href="https://www.youtube.com/channel/UChmOR1T5ZNnbRUba3lHRTOg" > República Coisa de Nerd</a>
        <a href="https://www.youtube.com/channel/UC6X2Vzr7iM1TyXlozomjOGQ" > Financeiro</a>
        <a href="https://www.youtube.com/channel/UCj_eKZk7V9VrGeiUz0XsWRw" > Quero Ouvir Podcast (YouTube)</a>
        <a href="https://open.spotify.com/show/0xA7pRQAWXrHyKJtAk7XaZ"> Quero Ouvir Podcast (Spotify)</a>
     </p>*/}
    </FooterBase>
  );
}

export default Footer;
