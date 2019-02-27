
function player()
{
		this.carecter=new Image();
this.carecter.src="character.png"
		this.x=250
		this.z=250
		this.sx=5
		this.sz=5;
		this.height=25
		this.width=50
		this.an=new animation();
		this.edx;
		this.iscolidup=false;
		this.iscolidlef=false;
		this.iscolidlbu=false;
		this.iscolidlre=false;
		this.mx=Math.floor(this.x/100);
		this.my=Math.floor(this.z/100);
		this.life=100;
		this.isdie=false
		this.fo=0;
		
	}
	player.prototype.drow=function(edx)
	
	{
		this.edx=edx
		this.an.change();
		this.edx.drawImage(this.carecter,this.an.frams[this.an.curentfrm]*16,this.an.framh*32,16,28,this.x,this.z,this.height,this.width);
		
	}
	player.prototype.cheklife=function()
	{this.edx.font = "30px Arial";
	edx.fillStyle = "#ff0000";
		if(this.life<0)
		{
			this.edx.fillText(" لقد خسرة اضغط على اعادة اللعبة ", this.x+150, this.z);
			this.isdie=true
			
		}
	}
	
	player.prototype.curent=function(tile)
	{
		this.iscolidup=false;
		this.iscolidlef=false;
			this.iscolidlre=false;
			this.iscolidlbu=false;
		this.mx=Math.floor(this.x/100)
		this.my=Math.floor(this.z/100);
		this.life=100;
		if(!((this.my*100)<this.z))
		{
		
		if(tile[((this.my-1)*15)+this.mx]==3)
		{
			this.iscolidup=true;
		}
		if(tile[((this.my+1)*15)+this.mx]==3)
		{
			this.iscolidlbu=true;
			
		}
		}
		
		
		
		if(!((this.mx*100)<this.x))
		{
			
			if(tile[(((this.my)*15)+this.mx-1)]==3)
			{
				
				this.iscolidlef=true;
			}
			
		}
		if(!((this.mx*100)>this.x+80))
		{
			if(tile[(((this.my)*15)+this.mx+1)]==3)
			{
		
				this.iscolidlre=true;
			}
		}
		
		
		
	}
	player.prototype.handkey=function(event)
	{
		if(event.key=="ArrowRight")
{
	
this.an.curentanim=1
if(!this.iscolidlre)
{
this.x=this.x+this.sx;
edx.translate(-this.sx,0);
}
}
if(event.key=="ArrowDown")

{
this.an.curentanim=2
if(!this.iscolidlbu)
{

this.z=this.z+this.sz;

edx.translate(0,-this.sz);
}

}
if(event.key=="ArrowUp")
{
	
this.an.curentanim=3
if(!this.iscolidup)
{
this.z=this.z-this.sz;
edx.translate(0,this.sz);
}
}
if(event.key=="ArrowLeft")

{
this.an.curentanim=4
if(!this.iscolidlef)
{
this.x=this.x-this.sx;
edx.translate(this.sx,0);
}
}
		
	}
	

