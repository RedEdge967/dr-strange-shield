/* Scene Controller Only */

const PARAMS = {
    rotate: { 
        x: 0,
        y: 0,
        z: 0
    },
    position: {
        x: 20,
        y: 100,
        z: 0
    },
    rules: {
        min: 0,
        max: 360
    }
};
  
const update = () => {
    document.documentElement.style.setProperty('--rotate-x', PARAMS.rotate.x);
    document.documentElement.style.setProperty('--rotate-y', PARAMS.rotate.y);
    document.documentElement.style.setProperty('--rotate-z', PARAMS.rotate.z);
    document.documentElement.style.setProperty('--x-position', PARAMS.position.x);
    document.documentElement.style.setProperty('--y-position', PARAMS.position.y);
}

window.addEventListener('load', function () {
    const pane = new Tweakpane();
    pane.addInput(PARAMS, 'rotate', {
        x: PARAMS.rules,
        y: PARAMS.rules,
        z: PARAMS.rules
    });

    pane.addInput(PARAMS, 'position', {
        x: PARAMS.rules,
        y: PARAMS.rules
    });
  
    pane.on('change', update);

    const panelEl = document.querySelector('.tp-dfwv');
    panelEl.setAttribute("id", "tp-dfwv");
});
