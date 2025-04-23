export const loginObjects = {
    usernameField: 'input#userEmail',
    passwordField: 'input#password',
    loginButton: 'button[type="submit"]'
}

export const regObjects = {
    applicationButton: 'button[data-type="restaurant"]',
    businessNameField: 'input[name="business_name"]',
    phoneNumberField: 'input[name="phone_number"]',
    countryCodeField: 'select#area_code_resto',
    mobileNumberField: 'input[id="mobile_number_resto"]',
    businessPermitField: 'label[id="uploadLabel"]',
    certRegField: 'label[id="uploadLabelCertReg"]',
    nextButton: 'button[data-type="next"]'
}

export const regUserObjects = {
    firstNameField: 'input[class="charCheck w-full border border-gray-600 bg-white p-2 rounded-lg font-normal px-2 outline-none"]',
    lastNameField: 'input#lastname_resto',
    emailField: 'input#resto-grid-email',
    passwordField: 'input#password-all',
    verifyPasswordField: 'input#all-confirm-password'
}

export const restoLocationObjects = {
    areaField: 'input#restaurant_input',
    houseNumField: 'div.col-span-1 input[name="number"]',
    buildingField: 'div.col-span-1 input[name="building"]',
    streetField: 'div.col-span-1 input[name="street"]',
    districtField: 'div.col-span-1 input[name="district"]',
    zipcodeField: 'div.col-span-1 input[name="zipcode"]',
    agreeCheckbox: 'input#agreeBox',
    submitButton: 'button#submit-btn',
    confirmation: 'div.swal2-popup swal2-modal swal2-icon-error swal2-show'
}

export const riderRegObjects = {
    riderRegButton: 'button[data-type="rider"]',
    firstNameField: 'div.flex-1 input#firstname',
    lastNameField: 'div.flex-1 input#lastname_rider',
    emailField: 'div.flex-1 input#rider-grid-email',
    countryField: 'select#area_code_rider',
    contactNumberField: 'div.flex-1 input#mobile_number_rider',
    areaField: 'input#rider_input',
    houseNumField: 'input#number_rider',
    buildingField: 'input#building_rider',
    streetField: 'input#street_rider',
    districtField: 'input#district_rider',
    zipcodeField: 'input#zipcode_rider',
    brandField: 'input#brand-rider',
    modelField: 'input#model_rider',
    plateField: 'input#plate_number',
    colorField: 'input#color_rider',
    licenseNumField: 'input#licensenumber',
    disabilityField: 'input#disability',
    driverlcField: 'label[class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg  bg-gray-50"]',
    roadTaxField: 'input[name="or"]',
    certRegField: 'input[name="cr"]',
    vaccField: 'input[name="vaccine"]',
    passwordField: 'input#password-rider',
    verifyPasswordField: 'input#rider-confirm-password',
    agreeCheckbox: 'input#agreeBox',
    submitButton: 'button#submit-btn',
    confirmation: 'div.swal2-popup swal2-modal swal2-icon-success swal2-show'
}

export const orderObjects = {
    dine_inButton: 'a[href="https://staging.rockygo.com/order/index?order_type=dine-in&order_status=pending"]',
    pick_upButton: 'a[href="https://staging.rockygo.com/order/index?order_type=pickup&order_status=pending"]',
    deliveryButton: 'a[href="https://staging.rockygo.com/order/index?order_type=&order_status=pending"]',
    processButton: 'button[data-val="processing"]',
    serveButton: 'button[data-val="completed"]'

}