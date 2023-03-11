function loadCommunity() {
    let community = []; 
    
    const communityText = localStorage.getItem('community'); 
    if (communityText) {
        community = JSON.parse(communityText); 
    }

    const tableBodyEl = document.querySelector('#community'); 

    if (community.length) {
        for (const [friend] of community.entries()) {

            const dateTdEl = document.createElement('td'); 
            const statusTdEl = document.createElement('td'); 

            dateTdEl.textContent = friend.date; 
            statusTdEl.textContent = friend.name + " has journaled " + friend.streak + " days in a row!"; 

            const rowEl = document.createElement('tr'); 
            rowEl.appendChild(dateTdEl); 
            rowEl.appendChild(statusTdEl); 

            tableBodyEl.appendChild(rowEl); 
        }
    }else {
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to spill</td></tr>';
    }
}

loadCommunity(); 