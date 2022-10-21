import React from 'react';
import UserMinified from '../UserMinified/UserMinified';
import classes from './LiftStatus.module.scss';

const { liftStatusContainer, statusContent, statusActions, statusFlex } = classes;

// This is going to be iterable. These are the style tweet status updates
const LiftStatus = (props) => {
    return (
        <div className={liftStatusContainer}>
            <section className={statusFlex}>
                <UserMinified
                    feed
                    userName={'LilBuffStuff93'}
                    gym={'Xperience'}
                />
                <div>
                    <div className={statusContent}>
                        Making them gains! Whole squad coming up this Saturday for a 💦✅<br />
                        'Cause I'm sinking into cold, cold water
                        And I wanna be closer to you
                        Like a Chainsmoker in Boulder
                        We're never getting older
                        'Cause on the other side of the screen
                        I wish it was summer of '16
                    </div>
                </div>
            </section>
            <div className={statusActions}>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                    Like
                </button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>

                    Reply
                </button>
            </div>

        </div>
    );
};

export default LiftStatus;