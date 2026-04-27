import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';

import logoSvg from '../../assets/logo.svg';

const Repository: React.FC = () => {
    const { repository = '' } = useParams();

    return (
        <>
            <Header>
                <img src={logoSvg} alt="Github Explorer" />
                <Link to="/"> Voltar </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src={logoSvg} alt="Github Explorer" />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>descrição do reposotório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to={'assad'}>
                    <div>
                        <strong>asda</strong>
                        <p>asada</p>
                    </div>
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
