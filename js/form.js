class Form{
    constructor(){
       this.input=createInput("name");
       this.title=createElement("h2");
       this.button=createButton("play");
       this.greeting=createElement("h3");
    }

    display(){
        
        this.title.html("CAR RACING GAME");
        this.title.position(130,0);
        
        
        this.input.position(130,160);
        
        
        this.button.position(250,200);

        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

           player.name=this.input.value();
            playerCount++;
            player.index=playerCount;
           player.update();
           player.updateCount(playerCount);

           this.greeting.html("hello "+this.name);
           this.greeting.position(130,160);
        })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}