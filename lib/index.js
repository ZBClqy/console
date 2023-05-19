"use strict";
class ButtonLogClass {
  constructor(config) {
    this.logBy = config.logBy;
    this.logName = config.logName;
    this.preButtonColor = config.preButtonColor || VUE_DEEP_CYAN;
    this.nextButtonColor = config.nextButtonColor || VUE_BLUE_GRAY;
    this.padding = config.padding || 6;
    this.borderRadius = config.borderRadius || 1;
    this.fontColor = config.fontColor || "#fff";
  }
  logTemplate(logBy, logName) {
    return `%c ${logBy} %c ${logName} `;
  }
  log(...data) {
    const firstButtonStyle = `background: ${this.preButtonColor}; padding:${this.padding}px; border-radius: ${this.borderRadius}px 0 0 ${this.borderRadius}px; color:${this.fontColor} `;
    const secondButtonStyle = `background: ${this.nextButtonColor}; padding:${this.padding}px; border-radius: 0 ${this.borderRadius}px ${this.borderRadius}px 0; color:${this.fontColor} `;
    console.log(
      this.logTemplate(this.logBy, this.logName),
      firstButtonStyle,
      secondButtonStyle,
      ...data
    );
  }
}
module.exports = ButtonLogClass;
