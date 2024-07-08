// qquestion solved

var autoMobile = {
    carName: "Glanza",
    carCompany: "Toyota",


    get getCarDetails(){
        return this.carName.toUpperCase()
    },

    set setCarDetails(carModel){
        return this.carModel = carModel.toUpperCase()
    }
};

autoMobile.setCarDetails = "Model E";

console.log(autoMobile);
