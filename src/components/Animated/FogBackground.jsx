import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const VantaFogBackground = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = FOG({
            el: vantaRef.current,
            THREE: THREE,
            highlightColor: 0x207d81,
            midtoneColor: 0x0a2629,
            lowlightColor: 0x461204,
            baseColor: 0x44bdbd,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return <div ref={vantaRef} style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }}></div>;
};

export default VantaFogBackground;