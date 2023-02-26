var ctrlc = {};

//create category
ctrlc.prueba = (req, res) => {

    let initialNumber = parseInt(req.body.initialNumber);
    let finalNumber = parseInt(req.body.finalNumber);

    let primos = []; //almacenar los numeros primos
    let cantidad = (finalNumber - initialNumber) - 1; //Obtener la canitdad de numeros que existen entre este rango
    let suma = 0; //Suma de los consecutivos entre este rango

    let fibo = []; //almacenar los numeros fibo

    if(initialNumber > 0 && finalNumber > 0) {
        
        if(initialNumber < finalNumber){

            for (let i = initialNumber; i <= finalNumber; i++) {
                
                if (ctrlc.primo(i)) {
                    primos.push(i);
                }
                
                suma += i;
            }

            suma = suma - initialNumber;
            suma = suma - finalNumber;

            //Bloque fibo
            fibo = ctrlc.fibo(initialNumber, finalNumber);

            // Devolver respuesta
            return res.status(200).send({
                status : 'success',
                prime_numbers : primos,
                total_numbers : cantidad,
                consecutive_sum : suma,
                m_fibo : fibo
            });

        }

        // Devolver respuesta
        return res.status(500).send({
            status: 'error',
            message: 'El primer valor tiene que ser menor que el segundo.'
        });
        
    }
        
    // Devolver respuesta
    return res.status(500).send({
        status: 'error',
        message: 'Tienen que ser numeros positivos.'
    });
    

    
};

ctrlc.primo = (num) => {
    if(num <2){
        return false;
    }
    for(let i = 2; i<num; i++){
        if(num % i === 0) {
            return false;
        }
    }

    return true;
};

ctrlc.fibo = (inicio, siguiente) => {

    let aux = 0;
    let m = 2;
    let septimo = 0;
    let fib =[inicio, siguiente];
    let suma = fib[0] + fib[1];

    while(aux == 0) {
        fib.push(fib[m - 2] + fib[m - 1])
        suma += fib[m];

        if(m == 6){
            septimo = fib[m] * 11;
        }
        
        if(m == 9){
            if(suma == septimo){

                //Se rompe la sucesión cuando la condicional se cumpla
                aux = 1;
            }
        }

        m++;
    }
    
    return fib;
};

module.exports = ctrlc;