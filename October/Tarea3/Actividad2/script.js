document.getElementById('calc').addEventListener('click', function() {
    // Get the selected values
    let proValue = document.querySelector('input[name="pro"]:checked').value;
    let gpValue = document.querySelector('input[name="gp"]:checked').value;
    let boxValue = document.querySelector('input[name="box"]:checked').value;
    let refrValue = document.querySelector('input[name="refr"]:checked').value;
    let monitorValue = document.querySelector('input[name="moni"]:checked').value;

    // Convert values to numbers and calculate the total
    let total = Number(proValue) + Number(gpValue) + Number(boxValue) + Number(refrValue) + Number(monitorValue);

    // Display the total
    document.getElementById('cost').innerHTML = `
<br>    
  <table>  
    <tr>
        <th>Processor</th>
        <th>Box</th>
        <th>Refrigeration</th>
        <th>Monitor</th>
        <th>Graphic Card</th>
    </tr>
    <tr>
        <td>${proValue}</td>
        <td>${boxValue}</td>
        <td>${refrValue}</td>
        <td>${monitorValue}</td>
        <td>${gpValue}</td>
    </tr>
    <tr>
        <td colspan="2"> <strong>Total</td>
        <td colspan="3"> ${total}
  </table>`;      
});