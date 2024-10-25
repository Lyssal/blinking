import Blinking from './blinking';

/**
 * An element which blinks.
 *
 * @author Rémi Leclerc
 */
export default class BlinkingElement {
  /**
   * Create a new Blinking.
   *
   * @param {ChildNode} element The element
   */
  constructor(element) {
    this.element = element;
    this.layer = global.document.createElement('div');
    this.layer.classList.add(Blinking.cssClass);
  }

  /**
   * Start the blinking.
   */
  start() {
    this.intLayerStyles();
    this.element.insertAdjacentHTML('beforeend', this.layer.outerHTML);

    this.layer = this.element.querySelector("div." + Blinking.cssClass + ":last-child");
  }

  /**
   * Stop the blinking.
   */
  stop() {
    this.layer.remove();
  }

  /**
   * Init the layer styles.
   */
  intLayerStyles() {
    this.initLayerStyleTop();
    this.initLayerStyleLeft();

    this.layer.style.height = `${this.element.offsetHeight}px`;
    this.layer.style.width = `${this.element.offsetWidth}px`;
    // this.layer.style.zIndex = Blinking.zIndex;
  }

  /**
   * Init the layer style top.
   */
  initLayerStyleTop() {
    const top = this.element.offsetTop;
    this.layer.style.top = `${top}px`;
  }

  /**
   * Init the layer style left.
   */
  initLayerStyleLeft() {
    const left = this.element.offsetLeft;
    this.layer.style.left = `${left}px`;
  }
}
