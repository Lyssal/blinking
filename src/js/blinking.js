import BlinkingElement from './blinking-element';

/**
 * A class to do blinking an element.
 *
 * @author Rémi Leclerc
 */
class Blinking {
  /**
   * Create a new Blinking.
   *
   * @param {string}  selector The selector string
   * @param {boolean} start    If the blinking starts
   */
  constructor(selector, start = false) {
    if (undefined !== selector) {
      this.setSelector(selector);
      if (start) {
        this.start();
      }
    }
  }

  /**
   * Set the selector.
   *
   * @param {string} selector The selector
   */
  setSelector(selector) {
    this.elements = [];

    if (selector.constructor === String) {
      Object.values(global.document.querySelectorAll(selector)).forEach((element) => {
        this.elements.push(new BlinkingElement(element));
      });
    } else if (selector instanceof global.Element) {
      this.elements.push(new BlinkingElement(selector));
    } else if (selector instanceof global.NodeList) {
      Object.values(selector).forEach((element) => {
        this.elements.push(new BlinkingElement(element));
      });
    }
  }

  /**
   * Start the blinking.
   */
  start() {
    Object.values(this.elements).forEach((element) => {
      element.start();
    });
  }

  /**
   * Stop the blinking.
   */
  stop() {
    Object.values(this.elements).forEach((element) => {
      element.stop();
    });
  }
}

/**
 * @var {string} cssClass The CSS class of the layer
 */
Blinking.cssClass = 'lyssal-blinking-layer';

export default Blinking;
