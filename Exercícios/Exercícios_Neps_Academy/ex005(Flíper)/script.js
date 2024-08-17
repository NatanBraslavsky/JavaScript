function verificar() {
    var p = window.document.getElementById('P1').value
    var r = window.document.getElementById('R1').value
    var res = window.document.getElementsByClassName('res')[0];
    
    if (p === "" || r === "" || isNaN(p) || isNaN(r) || p < 0 || p > 1 || r < 0 || r > 1) {
        res.innerHTML = ''
        alert('Valor inválido.')
    } else {
        p = +p;
        r = +r;
        if (p == 0) {
            res.innerHTML = 'A bolinha caiu na casa C.'
        } else if (p == 1 && r == 1) {
            res.innerHTML = 'A bolinha caiu na casa A.'
        } else if (p == 1 && r == 0) {
            res.innerHTML = 'A bolinha caiu na casa B.'
        }
    }
}
