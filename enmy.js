function enmy()
{
	this.carecter=new Image();
this.carecter.src="skyll.png"
		this.x=260
		this.z=290
		this.sx=1
		this.sz=5;
		this.height=48
		this.width=64
		this.animation=[0,1,2,3]
		this.currentf=0;
		this.deley=0;
		this.direction=1;
		this.from=this.x+100;
		this.to=this.x-100;
		
		
	
	
}
enmy.prototype.drow=function(edx)
	
	{
		this.edx=edx
		this.change()
		this.move();
		edx.drawImage(this.carecter,64*this.animation[this.currentf],0,48,64,this.x,this.z,-1*this.height,this.width);
		
	}
	enmy.prototype.cha=function(x,z)
	{
		this.x=x
		this.z=z
		this.from=this.x+100;
		this.to=this.x-100;
	}
	enmy.prototype.move=function()
	{
		
		
		this.x=this.x+this.sx;
		if(this.x>this.from)
		{
			this.sx=-this.sx
			this.direction=-this.direction
			
		}
		
			
			if(this.x<this.to)
			{
				this.sx=-this.sx
				this.direction=-this.direction
			}
			
		
			
		
	}
	enmy.prototype.checo=function (p)
	{
		if (this.x < p.x + p.width &&
   this.x + this.width > p.x &&
   this.z< p.z + p.height &&
   this.height + this.z > p.z)
   p.life=p.life-10;
   p.cheklife()
	}
	
	enmy.prototype.change=function()
	
	{
		if(this.deley>20)
{
	if(this.currentf<this.animation.length-1)
		this.currentf++
	else
		this.currentf=0;
	
	this.deley=0;
	
}
else
	this.deley++
		
	}