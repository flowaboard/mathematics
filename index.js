import { Design, DesignElement, FlowDesigns } from 'https://flowaboard.github.io/flowaboard/front-end/flowdesign/design.js';


var matheMaticsDesign = new FlowDesigns.ListDesign('MatheMatics', 'mathematics', `https://en.wikipedia.org/wiki/matheMaticsion`)
matheMaticsDesign.add(new DesignElement('Functions', 'function', `https://en.wikipedia.org/wiki/Function_(mathematics)`))
matheMaticsDesign.add(new DesignElement('Equations', 'equation', `https://en.wikipedia.org/wiki/Computer_programming`))

matheMaticsDesign.flowConfig = {
    flex: true,
    defaultValue: {
        widthfactor: matheMaticsDesign.designElements.length,
        xPadding: 0.4,
        yPadding: 0.4,
    },
    action: {

    }
}

export default matheMaticsDesign;
