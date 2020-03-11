function addBtn() {
    let wrapper = document.getElementById('addwrap');
    let currentBtns = document.getElementsByClassName('removebtn').length;
    let maxBtns = 7;
    if (currentBtns < maxBtns) {
        currentBtns++;
        let idNum = currentBtns;
        wrapper.insertAdjacentHTML('beforeend', `
                <div class="form-group" id="removeBtn_${idNum}">
                    <div class="row">
                        <div class="col-md-8">
                            <input id="items" type="text" name="items" class="form-control">
                        </div>
                        <div class="col-md-4">
                            <button type="button" class="btn btn-outline-danger removebtn" onclick="removeBtn(${idNum})">Remove</button>
                        </div>
                    </div>
                </div>
            `);
    };
};

function removeBtn(idNumber) {
    document.getElementById(`removeBtn_${idNumber}`).remove();
};

const buyer = document.getElementById('buyer');
const amount = document.getElementById('amount');
const phone = document.getElementById('buyer');
const city = document.getElementById('city');
const note = document.getElementById('note');
const email = document.getElementById('email');
const receiptID = document.getElementById('receiptID');
const form = document.getElementById('validate');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateForm();
});
function validateForm(){
    const emailValue = email.value.trim();
    const buyerValue = buyer.value.trim();
    const amountValue = amount.value.trim();
    const phoneValue = phone.value.trim();
    const cityValue = city.value.trim();
    const noteValue = note.value.trim();
    const receiptIDValue = receiptID.value.trim();
    
}