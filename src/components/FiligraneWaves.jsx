import React from "react";
import Wavify from "react-wavify";
import styles from './FiligraneWaves.module.css';

const FiligraneWaves = () => {
    return (
        <div className={styles.wavesContainer}>
            <Wavify
                fill="#5485c4"
                paused={false}
                className={styles.wave}
                options={{
                    height: 40,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3
                }}
            />
            <Wavify
                fill="#4371b0"
                paused={false}
                className={styles.wave}
                options={{
                    height: 30,
                    amplitude: 25,
                    speed: 0.2,
                    points: 4
                }}
            />
            <Wavify
                fill="#325c96"
                paused={false}
                className={styles.wave}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.25,
                    points: 5
                }}
            />
        </div>
    );
};

export default FiligraneWaves;