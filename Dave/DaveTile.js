function C_tile(l_x,l_y,l_image,l_size,l_type)
{
    this.xpos       = l_x;
    this.ypos       = l_y;
    this.size       = l_size;
    this.image      = l_image;
    this.type       = l_type;
    this.Alive      = true;
    
    this.m_drawImage = function m_drawImage(l_ctx)
    {
        if(this.image != null)
        {
            if(this.Alive)
            {l_ctx.drawImage(this.image,this.xpos,this.ypos,this.size,this.size);}
        }
    }
}