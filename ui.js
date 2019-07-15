class UI{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;
    
    
    
        this.outPutFirst = document.getElementById("outputFirst");
        this.outPutSecond = document.getElementById("outputSecond");
        this.outPutResult = document.getElementById("outputResult");
    }


    changeFirst(){
        this.outPutFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;

    }

    changeSecond(){
        this.outPutSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;

    }

    displayResult(result) {
        this.outPutResult.value = result;
    }
}