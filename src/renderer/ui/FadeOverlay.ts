export default class FadeOverlay {

    private alpha = 0;
    private duration = 0;
    private elapsed = 0;
    private holdTime = 0;
    private holdElapsed = 0;
    private state: "idle" | "fadingIn" | "fadingOut" | "holding" = "idle";
    private resolve?: () => void;

    constructor(private width: number, private height: number) { }

    fadeOut(duration: number): Promise<void> {
        this.duration = duration;
        this.elapsed = 0;
        this.state = "fadingOut";

        return new Promise(resolve => {
            this.resolve = resolve;
        });
    }

    fadeIn(duration: number): Promise<void> {
        this.duration = duration;
        this.elapsed = 0;
        this.state = "fadingIn";

        return new Promise(resolve => {
            this.resolve = resolve;
        });
    }

    hold(seconds: number, alpha?: number): Promise<void> {
        this.holdTime = seconds;
        this.holdElapsed = 0;
        this.state = "holding";
        this.alpha = alpha || this.alpha;

        return new Promise(resolve => {
            this.resolve = resolve;
        });
    }

    update(dt: number) {

        switch (this.state) {

            case "fadingOut":
                this.elapsed += dt;
                this.alpha = Math.min(this.elapsed / this.duration, 1);

                if (this.alpha >= 1) {
                    this.state = "idle";
                    this.resolve?.();
                }
                break;

            case "fadingIn":
                this.elapsed += dt;
                this.alpha = 1 - Math.min(this.elapsed / this.duration, 1);

                if (this.alpha <= 0) {
                    this.state = "idle";
                    this.resolve?.();
                }
                break;

            case "holding":
                this.holdElapsed += dt;

                if (this.holdElapsed >= this.holdTime) {
                    this.state = "idle";
                    this.resolve?.();
                }
                break;
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        if (this.alpha <= 0) return;

        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
    }
}