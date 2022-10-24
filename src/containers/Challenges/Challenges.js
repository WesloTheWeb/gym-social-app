import React from 'react';
import ChallengeObjective from '../../components/ChallengeObjective/ChallengeObjective';
import classes from './Challenges.module.scss';

const { container } = classes;

const Challenges = () => {
    return (
        <section className={container}>
            <div>
                <ChallengeObjective
                    ObjectiveName="Objective Name"
                />
                <ChallengeObjective
                    ObjectiveName="Objective Name"
                />
                <ChallengeObjective
                    ObjectiveName="Objective Name"
                />
                <ChallengeObjective
                    ObjectiveName="Objective Name"
                />
                <ChallengeObjective
                    ObjectiveName="Objective Name"
                />
            </div>
        </section>
    );
};

export default Challenges;