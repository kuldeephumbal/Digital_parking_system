function Dashboard() {
    // alert("Dashbord function called....");
    document.getElementById("output2").innerHTML = `<div class="row">
        <div class="col-12">
            <div class="h1 mb-3">Dashboard</div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Owner name</th>
                        <th>Vehicle name</th>
                        <th>Vehicle reg number</th>
                    </tr>
                </thead>
                <tbody>
    
                </tbody>
            </table>
        </div>
    </div>`;
}
function Addvehicle() {
    document.getElementById("output2").innerHTML = `<div class="row mb-3">
    <div class="col-12">
        <form method="post" onsubmit="return AddVehicle();">
            <div class="row mb-3">
                <div class="col-12">
                    <h1>Add Vehicle</h1>
                </div>
            </div>
            <div class="row mb-3">
                <label for="vehiclename" class="col-sm-2 col-form-label">Vehicle name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="vehiclename" placeholder="Enter the name of vehicle" required />
                </div>
            </div>
            <div class="row mb-3">
                <label for="registration" class="col-sm-2 col-form-label">Registration
                    number</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="registration" placeholder="Enter the registration number" required />
                </div>
            </div>
            <div class="row mb-3">
                <label for="ownername" class="col-sm-2 col-form-label">Owner name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="ownername" placeholder="Enter your name" required />
                </div>
            </div>
            <div class="row mb-3">
                <label for="ownercontact" class="col-sm-2 col-form-label">Owner contact
                    number</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="ownercontact" placeholder="Enter your contact number" required />
                    <div class="invalid-feedback" id="invalid_contact"></div> <!-- Error message container -->
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center" id="button">
                    <button type="submit" class="btn btn-primary">Add vehicle</button>
                </div>
            </div>
        </form>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <table class="table">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Vehicle name</th>
                    <th>Vehicle Reg.No</th>
                    <th>Owner name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="output">

            </tbody>
        </table>
    </div>
</div>`;
}
function Category() {
    document.getElementById("output2").innerHTML = `<div class="row mb-3">
        <div class="col-12">
            <form>
                <div class="row mb-3">
                    <label for="vehicleCategory" class="col-sm-2 col-form-label">Select Vehicle
                        categories</label>
                    <div class="col-sm-10">
                        <select class="form-select" aria-label="Default select example"
                            id="vehicleCategory">
                            <option selected>None</option>
                            <option value="twoWheeler">Two Wheeler</option>
                            <option value="fourWheeler">Four Wheeler</option>
                            <option value="commercialVehicle">Commercial Vehicle</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <button type="submit" value="Add vehicle" name="submit" id="submit" class="btn btn-primary">Add vehicle</button>
                    </div>
                </div>
            </form>
        </div>
    </div>`;
}
function Review() {
    document.getElementById("output2").innerHTML = ` <div class="row">
        <div class="col-8">
            <label for="customRange2" class="form-label fs-2">Review</label>
            <input type="range" class="form-range" min="0" max="5" id="customRange2">
            <textarea name="review" id="review" placeholder="Enter your review......"
                class="form-control" cols="5" rows="5"></textarea>
        </div>
        <div class="col-12 mt-2">
            <button type="submit" value="Add vehicle" name="submit" id="submit"
                class="btn btn-primary">Submit</button>
        </div>
    </div>`;
}
function Option(option) {
    if (option === 'Dashboard') {
        Dashboard();
    }
    else if (option === 'Addvehicle') {
        Addvehicle();
    }
    else if (option === 'Category') {
        Category();
    }
    else if (option === 'Review') {
        Review();
    }
}

Option('Review');
Option('Category');
Option('Addvehicle');
Option('Dashboard');

var count = 1;
class details {
    constructor(vehiclename, registration, ownername, tr) {
        this.vehiclename = vehiclename;
            this.registration = registration;
            this.ownername = ownername;
            this.tr = `<tr id="tr">
                            <td>${count}</td> 
                            <td>${this.vehiclename}</td>
                            <td>${this.registration}</td>  
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

    // Validate contact number
    if (ownercontact.length !== 10 || isNaN(ownercontact)) {
        document.getElementById("invalid_contact").innerHTML = "Invalid mobile number (should be 10 digits)";
        return false; // Prevent form submission
    } else {
        document.getElementById("invalid_contact").innerHTML = ""; // Clear error message if validation succeeds
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
    if (confirm("Are you sure you want to Delete this data")) {
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
