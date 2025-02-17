//Mostrar detalles en un modal
function showDetails(user, type, reservationDate, deliveryDate) {
    document.getElementById('userType').innerText = type;
    document.getElementById('instructor').innerText = user;
    document.getElementById('reservationDate').innerText = reservationDate;
    document.getElementById('deliveryDate').innerText = deliveryDate;

    document.getElementById('myModal').style.display = "block";
}

//Cerrar el modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

//Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}

//Abrir modal de impresión
function openPrintModal(user, solicitud, reserva, entrega) {
    document.getElementById('printUser').innerText = user;
    document.getElementById('printSolicitud').innerText = solicitud;
    document.getElementById('printReserva').innerText = reserva;
    document.getElementById('printEntrega').innerText = entrega;

    document.getElementById('printModal').style.display = "flex";
}

//Cerrar el modal de impresión
function closePrintModal() {
    document.getElementById('printModal').style.display = "none";
}

let currentRow;

function showDetails(button, user, type, reserveDate, deliveryDate) {
    document.getElementById('userType').textContent = type;
    document.getElementById('instructor').textContent = user;
    document.getElementById('reservationDate').textContent = reserveDate;
    document.getElementById('deliveryDate').textContent = deliveryDate;
    currentRow = button.closest('tr');
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function authorizeRequest() {
    if (currentRow) {
        currentRow.querySelector('input[type="checkbox"]').checked = true;
    }
    closeModal();
}

function rejectRequest() {
    if (currentRow) {
        currentRow.querySelector('input[type="checkbox"]').checked = false;
    }
    closeModal();
}
