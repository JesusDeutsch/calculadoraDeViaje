document.addEventListener('DOMContentLoaded', function() {

    const title = document.createElement('h1')
    title.innerHTML = 'Calculadora de viaje'
    title.id = 'titlePage'
    document.body.appendChild(title)

    const form = document.createElement('form');
    form.id = 'travelForm';

    const labelcity = document.createElement('label');
    labelcity.for = 'city';
    labelcity.innerText = 'Ciudad:';
    const selectCity = document.createElement('select');
    selectCity.id = 'city';
    selectCity.name = 'city';
    ['Barcelona', 'Madrid', 'Sevilla', 'Valencia'].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.innerText = city;
        selectCity.appendChild(option);
    });

    
    const labelHotelNights = document.createElement('label');
    labelHotelNights.for = 'hotelNights';
    labelHotelNights.innerText = 'Número de noches en el hotel:';
    const inputhotelNights = document.createElement('input');
    inputhotelNights.type = 'number';
    inputhotelNights.id = 'hotelNights';
    inputhotelNights.name = 'hotelNights';
    inputhotelNights.required = true;
    
    
    const labelCarDays = document.createElement('label');
    labelCarDays.for = 'carDays';
    labelCarDays.innerText = 'Número de días de alquiler del coche:';
    const inputCarDays = document.createElement('input');
    inputCarDays.type = 'number';
    inputCarDays.id = 'carDays';
    inputCarDays.name = 'carDays';
    inputCarDays.required = true;
    
    
    const botonSubmit = document.createElement('button');
    botonSubmit.type = 'submit';
    botonSubmit.innerText = 'Calcular Coste';
    
    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');
    const br4 = document.createElement('br');
    const br5 = document.createElement('br');
    const br6 = document.createElement('br');
    const br7 = document.createElement('br');
    const br8 = document.createElement('br');
    const br9 = document.createElement('br');
    const br10 = document.createElement('br');
    
   
    form.appendChild(br1);
    form.appendChild(labelcity);
    form.appendChild(br2);
    form.appendChild(selectCity);
    form.appendChild(br3);
    form.appendChild(labelHotelNights);
    form.appendChild(br4);
    form.appendChild(inputhotelNights);
    form.appendChild(br5);
    form.appendChild(labelCarDays);
    form.appendChild(br6);
    form.appendChild(inputCarDays);
    form.appendChild(br7);
    form.appendChild(br8);
    form.appendChild(botonSubmit);




    document.body.appendChild(form);

    const result = document.createElement('h2');
    result.id = 'result';
    document.body.appendChild(br9);
    document.body.appendChild(br10);
    document.body.appendChild(result);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        calcularCoste();
    });

    function calcularCoste() {
        const city = document.getElementById('city').value;
        const hotelNights = document.getElementById('hotelNights').value;
        const carDays = document.getElementById('carDays').value;

        const totalHotelCost = costeHotel(hotelNights);
        const totalFlightCost = costeAvion(city, hotelNights);
        const totalCarCost = costeCoche(carDays);

        const totalTravelCost = totalHotelCost + totalFlightCost + totalCarCost;

        document.getElementById('result').innerText = `El coste total del viaje es: ${totalTravelCost}€`;
    }

    function costeHotel(nights) {
        return nights * 140;
    }

    function costeAvion(city, nights) {
        let cost= 0;
        switch(city) {
            case 'Barcelona':
            case 'Madrid':
                cost= 90;
                break;
            case 'Sevilla':
                cost= 50;
                break;
            case 'Valencia':
                cost= 40;
                break;
        }
        if (nights >= 3) {
            cost*= 0.9;
        }
        return cost;
    }

    function costeCoche(days) {
        let cost= days * 40;
        if (days >= 7) {
            cost-= 50;
        } else if (days >= 3) {
            cost-= 20;
        }
        return cost;
    }
});
//                                                1:41AM
//                                     REVISAR POR SI HAY ALGUN ERROR
//                              PREGUNTAR SI USAR TYPE NUMBER O TYPE TEXT
//                                          AGREGAR MAS ESTILOS



















