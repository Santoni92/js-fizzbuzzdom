//PSEUDOCODICE
//1.PER i DA 1 A 100 ESEGUI
    //1.a SE i%3==0 && i%5==0
    //    ALLORA stampa "fizzbuzz"
    //    ALTRIMENTI
    //1.b           SE i%3==0
    //              ALLORA stampa"fizz"
    //              ALTRIMENTI
    //1.c                       SE i%5==0
    //                          ALLORA stampa "buzz"
    //                          ALTRIMENTI stampa numero
    //                          FINE SE
    //              FINE SE
    //      FINE SE
    //RIPETI


    console.log('JS OK!');
    for(let i = 1;i <= 100;i++)
    {
       if(i % 3 == 0 && i % 5 == 0)
       {
           console.log('FizzBuzz');
       }else if( i % 3 == 0)
       {
        console.log('Fizz');
       }else if(i % 5 == 0)
       {
        console.log('Buzz');
       }else{
        console.log(i);
       }
         
    }