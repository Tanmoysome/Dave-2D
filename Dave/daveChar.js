function C_Dave(l_x,l_y,l_height,l_width,l_image)
{
    this.xpos       = l_x;
    this.ypos       = l_y;
    this.h          = l_height;
    this.w          = l_width;
    this.image      = l_image;
    this.speed      = 3;
    this.isAlive    = true;
    this.Destroy    = false;
    this.life       = 3;
    this.moveLeft   = false;
    this.moveRight  = false;
    this.moveUp     = false;
    this.moveDown   = false;
    this.velocity   = 0;
    this.gravity    = 1;
    this.inAir      = false;
    this.count      = 0;
    this.frames     = 0;
    this.time       = 0;
    this.restart    = false;
    this.hasKey     = false;
    
    this.explosion1Img = new Image()
    this.explosion1Img.src = "daveartPNG/explosion1.png";
        
    this.explosion2Img = new Image()
    this.explosion2Img.src = "daveartPNG/explosion2.png";
        
    this.explosionArray = [this.explosion1Img,this.explosion2Img];
    
    this.m_drawDave = function m_drawDave(l_ctx)
    {
        if(this.isAlive && !this.hasKey)
        {
            l_ctx.drawImage(this.image,this.xpos,this.ypos,this.w,this.h);
        }
        
        if(!this.isAlive && this.time<=1)
        {
            l_ctx.drawImage(this.explosionArray[this.count],this.xpos,this.ypos,this.w,this.h);
            
            if(this.frames%10 == 0)
            {
                this.count++;
            }
            
            if(this.count>1)
            {
                this.count = 0;
            }
            
            if(this.frames%30 == 0)
            {
                this.time++;
            }
        }
        this.frames++;
    }
    
    this.m_moveDaveLeft = function m_moveDaveLeft()
    {
      //  console.log(this.xpos)
        if(this.isAlive)
        {
            if(this.moveLeft)
            {
                this.xpos -= this.speed;
            }
        }
    }
    
     this.m_moveDaveRight = function m_moveDaveRight()
    {
        if(this.isAlive)
        {
            if(this.moveRight)
            {
                this.xpos += this.speed;
            }
        }
    }
    
    this.m_Gravity = function m_Gravity()
    {
        this.ypos       += this.velocity;
        this.velocity   += this.gravity;
        this.moveDown    = true;
    }
    
}