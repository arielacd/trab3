function alterarStatus(salaId, novoStatus) {
    var statusElemento = document.getElementById('status-' + salaId);
    
    if (statusElemento) {
        statusElemento.textContent = novoStatus;
    }
}
