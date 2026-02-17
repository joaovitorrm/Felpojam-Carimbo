export class Rect {
    private sides : {left: number, right: number, top: number, bottom: number};
    constructor(public x: number, public y: number, public width: number, public height: number) {
        this.sides = {left: x, right: x + width, top: y, bottom: y + height};
    }

    public get left() { return this.sides.left; }
    public get right() { return this.sides.right; }
    public get top() { return this.sides.top; }
    public get bottom() { return this.sides.bottom; }

    public get centerX() { return this.x + this.width / 2; }
    public get centerY() { return this.y + this.height / 2; }

    public get center() { return {x: this.centerX, y: this.centerY}; }

    public collide(other: Rect): boolean {
        return this.left < other.right && this.right > other.left && this.top < other.bottom && this.bottom > other.top;
    }
}