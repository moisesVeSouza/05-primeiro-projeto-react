import React from 'react';

import logoSvg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoSvg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/164575006?v=4&size=64"
                        alt="Moises Souza"
                    />

                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReatJS & React Native
                            forms!
                        </p>
                    </div>
                </a>

                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/164575006?v=4&size=64"
                        alt="Moises Souza"
                    />

                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReatJS & React Native
                            forms!
                        </p>
                    </div>
                </a>

                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/164575006?v=4&size=64"
                        alt="Moises Souza"
                    />

                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>
                            Easy peasy highly scalable ReatJS & React Native
                            forms!
                        </p>
                    </div>
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
