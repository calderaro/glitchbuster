function ModeMenu(){
    Menu.call(this);

    this.button(button(nomangle('high'), 500), 0, 420, function(){
        G.setShittyMode(false);
        G.mainMenu();
    });
    this.button(button(nomangle('low'), 500), 0, 560, function(){
        G.setShittyMode(true);
        G.mainMenu();
    });

    this.animateButtons();

    var titleX = (CANVAS_WIDTH - 270) / 2;
    this.button(cache(270, 55, function(r){
        drawText(r, nomangle('quality'), 0, 5, 10, '#444');
        drawText(r, nomangle('quality'), 0, 0, 10, '#fff');
    }), titleX, titleX);
}
