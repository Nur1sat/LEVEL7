object_ = {
    something1: "sth1",
    something2: "sth2",
    something3: "sth3",
    something4: "sth4"
};
for (const properties in object_) {
    console.log(`${properties}: ${object_[properties]}`);
}
