function drawRotated(ctx, img, rad, posX, posY, alto, ancho) {
    //ctx.clearRect(0,0,lienzo2.width,lienzo2.height);

    // save the unrotated context of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    ctx.save();

    // move to the center of the canvas
    ctx.translate(posX, posY);

    // rotate the canvas to the specified degrees
    ctx.rotate(rad);

    // draw the image
    // since the context is rotated, the image will be rotated also
    ctx.drawImage(img, -ancho / 2, -alto / 2, ancho, alto);

    // we’re done with the rotating so restore the unrotated context
    ctx.restore();
}