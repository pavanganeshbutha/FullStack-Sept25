
class Point{

    #title;

    constructor(x, y, title) {
        this.x = x;
        this.y = y;
        this.#title = title;
    }

    distance(p) {
        const dx = this.x - p.x;
        const dy = this.y - p.y;
        return Math.hypot(dx, dy)
    }

    static euclidianDist(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;

        return Math.hypot(dx, dy);
    }

    get getTitle() {
        return this.#title;
    }
}

const p1 = new Point(3, 4, 'T1');
const p2 = new Point(10, 12, 'T2');

const dist = p1.distance(p2);

console.log(Point.euclidianDist(p1, p2))

// Here we get syntax error, because title is a private variable
// console.log(p1.#title)

console.log(p1.getTitle);


