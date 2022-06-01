class Animal {
    // name: string;

    protected age: number = 18;

    static isAnimal(a: any) {
        return a instanceof Animal;
    }

    constructor(public name: string) {
        this.name = name;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

const zhangsan = new Snake('zhangsan');
zhangsan.move();

const isAnimal = Animal.isAnimal(new Snake('zhangsan'));
console.dir(isAnimal);
