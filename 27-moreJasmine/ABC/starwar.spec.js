
const Jedi = require("./starwars.js").Jedi;
const Sith = require("./starwars.js").Sith;
const duel = require("./starwars.js").duel;

let fO = new Jedi ("fO",70,700)
let fA = new Sith ("fA",100,1000)

beforeEach(()=>{
    spyOn(fO, "attack").and.callFake(()=>{
        return "obiwanAttack"
    });
    spyOn(fA, "attack").and.callFake(()=>{
        return "anakinAttack"
    });
    spyOn(fO, "injure").and.callThrough();
    spyOn(fA, "injure").and.callThrough();
    spyOn(fO, "dead").and.callThrough();
    spyOn(fA, "dead").and.callThrough();
    spyOn(fA, "choke").and.callThrough();
    jasmine.clock().install();
})

afterEach(()=>{
    fO = new Jedi ("fO",70,700)
    fA = new Sith ("fA",100,1000)
    jasmine.clock().uninstall();
})

describe ("A", ()=>{
    it (":attack", ()=>{
        duel(fO, fA);
        expect(fA.attack).toHaveBeenCalledTimes(6);
        expect(fA.attack).toHaveBeenCalledWith(fO);
        expect(fO.attack).toHaveBeenCalledTimes(6);
        expect(fO.attack).toHaveBeenCalledWith(fA);
    })
    it (":injure", ()=>{
        duel(fO, fA);
        expect(fA.injure).toHaveBeenCalledTimes(1);
        expect(fO.injure).not.toHaveBeenCalled();
    })
    it(":dead", ()=>{
        duel(fO, fA);
        expect(fA.dead).toHaveBeenCalledTimes(1);
        expect(fO.dead).not.toHaveBeenCalled();
    })
})

describe("B", ()=>{
    it("constructor test", ()=>{
        expect(fO.name).toEqual("fO")
        expect(fA.power).toEqual(100);
        expect(fO.health).toEqual(700);
    })
    it (":attack", ()=>{
        expect(fO.attack()).toEqual("obiwanAttack");
        expect(fA.attack()).toEqual("anakinAttack");
    })
    it(":injure", ()=>{
        fA.injure(10);
        fO.injure(10);
        expect (fA.health).toEqual(990);
        expect (fO.health).toEqual(690);
    })
    it(":dead", ()=>{
        fO.health = -10
        expect(fO.dead()).toBeTruthy();
        fA.health = -10
        expect(fA.dead()).toBeTruthy();
    })
    it((":choke"), ()=>{
        expect(fA.choke()).toEqual("Padme says dame~")
    })
})

describe("C", ()=>{
    it (":setTimeout", ()=>{
        expect(fA.health).toEqual(1000);
        duel(fO, fA);
        jasmine.clock().tick(5001);
        expect(fA.health).toEqual(800);
    })
})

