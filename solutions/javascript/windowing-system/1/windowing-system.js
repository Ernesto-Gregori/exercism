// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/*Define Size for storing the dimensions of the window*/
export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(width, height) {
    this.width = width;
    this.height = height;
}

/*Define Position to store a window position*/
export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}

/*Define a ProgramWindow class*/
export class ProgramWindow extends (Size, Position){
  constructor() {
    super()
      this.screenSize = new Size(800, 600);
      this.size = new Size();
      this.position = new Position();

  }
/*Add a method to resize the window*/
  resize(newSize){
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(newWidth, newHeight);
  }

/*Add a method to move the window*/
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(newX, newY);
  }
}

/*Change a program window*/
export function changeWindow(programWindow) {

  programWindow.move(new Position());

  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));

  return programWindow;
}
