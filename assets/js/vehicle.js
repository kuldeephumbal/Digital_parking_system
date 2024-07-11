var count = 1;
class details {
    constructor(vehiclename, registration, ownername, tr) {
        this.vehiclename = vehiclename;
            this.registration = registration;
            this.ownername = ownername;
            this.tr = `<tr id="tr">
                            <td>${count}</td> 
                            <td>${this.vehiclename}</td>
                            <td colspan="1">${this.registration}</td>  
                            <td>${this.ownername}</td>
                            <td><button type="button" class="btn" onclick="Edit();"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" class="btn" onclick="Delete(this.parentNode.parentNode);"><i class="fa-solid fa-trash"></i></button></td>
                            </tr>`;
        document.getElementById("output").innerHTML += this.tr;
        count++;

    }
    display() {
        console.log(this.vehiclename, this.registration, this.ownername);
    }
}
function AddVehicle() {
    // console.log("submited....")
    let vehiclename = document.getElementById("vehiclename").value;
    let registration = document.getElementById("registration").value;
    let ownername = document.getElementById("ownername").value;
    let ownercontact = document.getElementById("ownercontact").value;
    // console.log(vehiclename, registration, ownername, ownercontact);
    
    if (vehiclename === "") {
        document.getElementById("vehiclename").classList.add("is-invalid");
        document.getElementById("invalid_vehiclename").innerHTML = "Please enter your vehicle name";
        return false;
    }
    else {
        document.getElementById("vehiclename").classList.remove("is-invalid");
        document.getElementById("invalid_vehiclename").innerHTML = "";
    }
    if (!/^([A-Z]{2}\s\d{2}\s[A-Z]{1,2}\s\d{4})$/.test(registration) || registration === "") {
        document.getElementById("registration").classList.add("is-invalid");
        document.getElementById("invalid_regnumber").innerHTML = "Please enter a valid vehicle registration number";
        return false; 
    } else {
        document.getElementById("registration").classList.remove("is-invalid");
        document.getElementById("invalid_regnumber").innerHTML = "";
    }
    if (ownername === "") {
        document.getElementById("ownername").classList.add("is-invalid");
        document.getElementById("invalid_ownername").innerHTML = "Please enter your name";
        return false; 
    }
    else {
        document.getElementById("ownername").classList.remove("is-invalid");
        document.getElementById("invalid_ownername").innerHTML = "";
    }
    if (ownercontact.length !== 10 || isNaN(ownercontact) || ownercontact === "") {
        document.getElementById("ownercontact").classList.add("is-invalid");
        document.getElementById("invalid_contact").innerHTML = "Please enter valid contact number";
        return false; 
    } else {
        document.getElementById("invalid_contact").innerHTML = "";
        document.getElementById("ownercontact").classList.remove("is-invalid");
    }
    
    let d1 = new details(vehiclename, registration, ownername);
    d1.display();

    document.getElementById("vehiclename").value = '';
    document.getElementById("registration").value = '';
    document.getElementById("ownername").value = '';
    document.getElementById("ownercontact").value = '';

    return false;

}
function Delete(tr) {
    if (confirm("Are you sure you want to delete?")) {
        tr.remove();
    }
}
function Edit() {
    // alert("Edit button is clicked successfully....");
    let tr = document.getElementById("tr").children;
    // console.log(tr);
    let vehiclename = tr[1].innerHTML;
    let registration = tr[2].innerHTML;
    let ownername = tr[3].innerHTML;
    console.log(vehiclename, registration, ownername);

    document.getElementById("vehiclename").value = vehiclename;
    document.getElementById("registration").value = registration;
    document.getElementById("ownername").value = ownername;

    document.getElementById("button").innerHTML = `<button type="button" onclick="Update();" class="btn btn-success">Save change</button>`;

}
function Update() {
    // console.log("update function called...");
    let tr = document.getElementById("tr").children;

    tr[1].innerHTML = document.getElementById("vehiclename").value;
    tr[2].innerHTML = document.getElementById("registration").value;
    tr[3].innerHTML = document.getElementById("ownername").value;

    document.getElementById("vehiclename").value = '';
    document.getElementById("registration").value = '';
    document.getElementById("ownername").value = '';

    document.getElementById("button").innerHTML = `<button type="submit" class="btn btn-primary">Add Vehicle</button>`;
}
