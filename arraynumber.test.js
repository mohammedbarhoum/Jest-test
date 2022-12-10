let mytest =require("./arreynumber")
test("the sumation numbers",()=>{

    expect(mytest(10,20,20,50,50,8,90,70)).toBe(318);

})