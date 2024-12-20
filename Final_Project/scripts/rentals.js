async function loadRentals() {
    const response = await fetch('data/rentals.json');
    const rentals = await response.json();
  
    const tableBody = document.getElementById('rentaltable');
  
    rentals.rentals.forEach(rental => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${rental.type}</td>
        <td>${rental.capacity}</td>
        <td>$${rental.halfDay}</td>
        <td>$${rental.fullDay}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  loadRentals();
  