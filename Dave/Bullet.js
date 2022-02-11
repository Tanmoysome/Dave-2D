function C_Bullet(l_s,l_image)
{
    this.xpos   = -10;
    this.ypos   = -10;
    this.size   = l_s;
    this.image  = l_image;
    this.Alive  = false;
    this.speed  = 0;
    
    this.m_drawBullet = function m_drawBullet(l_ctx)
    {
        if(this.Alive)
        {
            l_ctx.drawImage(this.image,this.xpos,this.ypos,this.size,this.size);
        }
    }
    
    this.m_moveBullet = function m_moveBullet()
    {
        if(this.Alive)
        {
            this.xpos += this.speed;
        }
    }
}