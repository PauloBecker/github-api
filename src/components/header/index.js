import React from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import { useState } from 'react';

const Header = () => {

  const {getUser} = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => 
  {
    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (

    <header>
        <S.Wrapper>
            <input type="text" 
            placeholder='Digite o username para pesquisa...' 
            onChange={(event) => setUsernameForSearch(event.target.value)}></input>
            <button type='submit' onClick={submitGetUser}>
                <span>Buscar</span>
            </button>
        </S.Wrapper>

    </header>
  );
};

export default Header;