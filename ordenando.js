const swap=(lista,pos) => {
    
}

const shuffle=(lista,QtTr) =>{

}

const bubble_sort = (v) =>{
    let ordenado = false;
    while(!ordenado){
        ordenado = true;
        for (let i = 1; i<v.length;i++)
            if(v[i-1]>v[i]){
                const aux = v[i]; v[i] = v[i-1];
                v[i-1] = aux;
                ordenado = false;
            }
    }
}

const selection_sort= () =>{
    for(let i = 0; i < lista.length; i++){
        let min = i
        let aux
        for(let j = i; j <= lista.length; j++){
            if(lista[j] < lista[min]){
                min = j
            }
        }
        if(i != min){
            aux = lista[i]
            lista[i] = lista[min]
            lista[min] = aux
        }
    }
}

const quick_sort= (vetor, IniPos, FinPos) =>{
    if(IniPos < FinPos){
        let pivot = particionamento(vetor, IniPos, FinPos);
        quick_sort(vetor, IniPos, pivot -1);
        quick_sort(vetor, pivot + 1, FinPos);
    }
}

const particionamento= (v, IniPos, FinPos) =>{
    let i = IniPos - 1;
    for(let j = IniPos; j < FinPos; j++){
        if(v[j] <= v[FinPos]){
            i = i + 1;
            [v[i], v[j]] = [v[j], v[i]];
        }
    }
    [v[i + 1], v[FinPos]] = [v[FinPos], v[i + 1]];
    return i + 1;
}