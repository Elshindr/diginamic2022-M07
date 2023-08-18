{
  function test(): Promise<string>{
    return new Promise((resolve, reject) => {
      if(Math.random() > 0.5 ) {
        resolve("Ok")
      } else reject("Pas Ok");
    })
  }
}