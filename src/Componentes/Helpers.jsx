
export const restanteCondicional = (capital,restante) => {

    let color_bg;

    if (capital /4 > restante) {

        color_bg ='bg-danger  p-3 rounded text-light';
        
    }
    else if (capital / 2 > restante) {
        color_bg ='bg-warning rounded p-3';
    }
    else{

        color_bg ='bg-success rounded p-3 text-light'
    }


    return color_bg;
 
}
