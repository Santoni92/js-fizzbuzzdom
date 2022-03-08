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
    //milestone 1
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
    //milestone 2
    const divContainer = document.querySelector('#container');
    for(let i = 1;i <= 100;i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            const element = '<div class="square">FizzBuzz</div> ';  //elemento div interno 
            divContainer.innerHTML += element;  //aggiungo all'interno dell'elemento(tag) div container l'html del div che voglio inserire all'interno
        }else if( i % 3 == 0)
                {
                    const element = '<div class="square">Fizz</div> ';
                    divContainer.innerHTML += element;
                 }else if(i % 5 == 0)
                 {
                    const element = '<div class="square">Buzz</div> ';
                    divContainer.innerHTML += element;
                 }else{
                    const element = `<div class="square">${i}</div>`;
                    divContainer.innerHTML += element;
                 }
    }

