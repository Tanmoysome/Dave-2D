function C_Monster(l_x,l_y,l_s,l_image)
{
    this.xpos   = l_x;
    this.ypos   = l_y;
    this.size   = l_s;
    this.PathX  = l_x;
    this.PathY  = l_y;
    this.PathW  = 180;
    this.PathH  = 95;
    this.image  = l_image;
    this.alive  = true;
    this.speed  = 3;
    this.speedY = 0
    this.speedX = 0;
    
    this.m_drawMonster = function m_drawMonster(l_ctx)
    {
        if(this.alive)
        {
            l_ctx.drawImage(this.image,this.xpos,this.ypos,this.size,this.size);
        }     
    }
    
    this.m_MoveMonster = function m_MoveMonster()
    {
        if(this.alive)
        {
            if(this.xpos <= this.PathX && this.ypos >= this.PathY)
            {
                this.speedX = this.speed;
                this.speedY = 0;
            }
            
            if(this.xpos >= this.PathX + this.PathW && this.ypos >= this.PathY)
            {
                this.speedX = 0;
                this.speedY = -this.speed;
            }
            
            if(this.xpos >= this.PathX + this.PathW && this.ypos <= this.PathY - this.PathH)
            {
                this.speedX = -this.speed;
                this.speedY = 0;
            }
            
            if(this.xpos <= this.PathX && this.ypos <= this.PathY - this.PathH)
            {
                this.speedX = 0;
                this.speedY = this.speed;
            }
            this.xpos += this.speedX;
            this.ypos += this.speedY;
        }
    }
}