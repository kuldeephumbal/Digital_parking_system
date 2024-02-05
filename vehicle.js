var count = 1;
var activerow;
function AddVehicle() {
    let vehiclename = document.getElementById("vehiclename").value;
    let registration = document.getElementById("registration").value;
    let ownername = document.getElementById("ownername").value;
    // console.log(vehiclename, registration, ownername);
    if (document.getElementById("submit").value === "Add vehicle") {
        document.getElementById("output").innerHTML += `<tr id="tr-${count}">
                       <td>${count}</td> 
                       <td>${vehiclename}</td>
                       <td>${registration}</td>  
                       <td>${ownername}</td>
                       <td><button type="button" class="btn btn-danger" onclick="Delete('tr-${count}');">Delete</button>
                       <button type="button" class="btn btn-info" onclick="Edit(this);">Edit</button></td>
                       </tr>`
                       count++;
    }
    else {
        document.getElementById(activerow).cells[0].innerHTML = count;
        document.getElementById(activerow).cells[1].innerHTML = vehiclename;
        document.getElementById(activerow).cells[2].innerHTML = ownername;
        document.getElementById(activerow).cells[3].innerHTML = registration;
        document.getElementById("submit").value = "Add vehicle";
    }
    document.getElementById("vehiclename").value = '';
    document.getElementById("registration").value = '';
    document.getElementById("ownername").value = '';
    document.getElementById("ownercontact").value = '';

    return false;
}
function Delete(trId) {
    // console.log("product has been deleted ", trId);
    document.getElementById(trId).remove();
}
function Edit(button) {
    // console.log("Edit function called....");
    let tr = button.parentNode.parentNode;
    activerow = tr.getAttribute('id');
    let count = tr.cells[0].innerHTML;
    let vehiclename = tr.cells[1].innerHTML;
    let registration = tr.cells[2].innerHTML;
    let ownername = tr.cells[3].innerHTML;
    // console.log(vehiclename, ownername, registration);

    document.getElementById("vehiclename").value = vehiclename;
    document.getElementById("registration").value = registration;
    document.getElementById("ownername").value = ownername;
    document.getElementById("submit").innerHTML = "save change";
}