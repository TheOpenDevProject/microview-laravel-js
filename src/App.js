export class App{

    constructor(){
        this.widgets = [];
    }



    registerWidgets(widgets = []){
        this.widgets = widgets;
        return this;
    }

    initializeApp(){
        for(let widget of this.widgets){
            widget.init();
        }
        return this;
    }
}