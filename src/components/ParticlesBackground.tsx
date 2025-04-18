import React, { PureComponent, useCallback } from "react";
import { tsParticles } from "tsparticles-engine";

tsParticles.load({
    id: "tsparticles",
    options: {
        /* options here */
    },
    // url: "http://foo.bar/particles.js // this can be used as an alternative to options property
});

// after initialization this can be used.

/* tsParticles.setOnClickHandler(@callback); */

/* this will be fired from all particles loaded */

tsParticles.setOnClickHandler((event, particles) => {
    /* custom on click handler */
});

// now you can control the animations too, it's possible to pause and resume the animations
// these methods don't change the config so you're safe with all your configurations
// domItem(0) returns the first tsParticles instance loaded in the dom
const particles = tsParticles.domItem(0);

// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
particles.play();

// pause will stop the animations
particles.pause();