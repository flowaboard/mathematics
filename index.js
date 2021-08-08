import { Design, DesignElement, FlowDesigns } from 'https://flowaboard.github.io/flowaboard/front-end/flowdesign/design.js';

class MathematicsDesign extends FlowDesigns.ListDesign{

}

var matheMaticsDesign = new MathematicsDesign('MatheMatics', 'mathematics', `https://en.wikipedia.org/wiki/Mathematics`)
matheMaticsDesign.add(new DesignElement('Functions', 'function', `https://en.wikipedia.org/wiki/Function_(mathematics)`,'flow-info','/functiondesign.js'))
matheMaticsDesign.add(new DesignElement('Equations', 'equation', `https://en.wikipedia.org/wiki/Equation`,'flow-info','/equationdesign.js'))

matheMaticsDesign.root='https://flowaboard.github.io/mathematics'
matheMaticsDesign.flowConfig = {
    flex: true,
    defaultValue: {
        widthfactor: matheMaticsDesign.designElements.length,
        xPadding: 0.4,
        yPadding: 0.4,
    },
    elementAction: {
        "click" : {"action":"flow","state":"default"}
    }
}

export default matheMaticsDesign;