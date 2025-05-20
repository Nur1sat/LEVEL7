const object_ = {
    name: "Someone", about: "hello",
    greet: function () {
        console.log(`His name is ${this.name}.`);
    }
};
object_.greet();