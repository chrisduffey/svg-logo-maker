const {  Triangle, Square, Circle } = require("./shapes");



describe('Triangle', () => {
    it('should render a red triangle', () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 50, 50, 150, 250, 150" style="fill: red" />');
    });
});

describe('Square', () => {
    it('should render an orange square', () => {
        const shape = new Square();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" style="fill: orange"/>');
    });
});

describe('Circle', () => {
    it('should render a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" style="fill: blue"/>');
    });
});


// const { describe, it, expect } = require("node:test");
// const { Shape, Triangle, Square, Circle } = require("./shapes");

// describe('Shape', () => {
//     it('should render shape with a color', () => {
//         const shape = new Shape();
//         shape.setColor('green');
//         expect(shape.render()).toEqual('green');
//     });
// });

// describe('Triangle', () => {
//     it('should render a red triangle', () => {
//         const shape = new Triangle();
//         shape.setColor("red");
//         expect(shape.render()).toEqual('<polygon points="150,50 50,150 250,150" style="fill:red"/>');
//     });
// });

// describe('Square', () => {
//     it('should render an orange square', () => {
//         const shape = new Square();
//         shape.setColor("orange");
//         expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" style="fill:orange"/>');
//     });
// });

// describe('Circle', () => {
//     it('should render a blue circle', () => {
//         const shape = new Circle();
//         shape.setColor("blue");
//         expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" style="fill:blue"/>');
//     });
// });




// const { describe, it, expect } = require("node:test");
// const {Shape, Triangle, Square, Circle } = require("./shapes");

// describe('Shape', () => {
//     it('should render shape with a color', () =>{
//         const shape= new Shape();
//     shape.setColor('green');
//         expect(shape.render()).toEqual(green);
//    });
// });


// describe('Triangle', () => {
//     it('should render a red triangle', () =>{
//         const shape= new Triangle();
//     shape.setColor("red");
//     expect(shape.render()).toEqual ("<poloygon points = "150, 50, 50, 150, 250, 150" style= fill: "red"/> ")
    
//    });
// });
// describe('Square', () => {
//     it('should render a orange square', () =>{
//         const shape= new Square();
//     shape.setColor("orange");
//     expect(shape.render()).toEqual ("<rect x= "50" y="50" width="200" height="200" style=fill:"orange"/> ")
  
//    });
// });
// describe('Circle', () => {
//     it('should render a blue circle', () =>{
//         const shape= new Circle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual ("<circle cx="150" cy="100" r="80" style= fill:"blue"/>")
   
//    });
// });