function food()
{
	this.foodnum=0
	this.x=150;
	this.z=150;
	this.height=15
		this.width=15
		this.foodimg=new Image();
		this.foodc=0
		this.foodp=[[615,1200],[325,120],[360,100],[325,100]]
this.foodimg.src="food.png";
	
}
food.prototype.drow=function(edx)
{
	edx.drawImage(this.foodimg,this.foodnum*41,0,32,43,this.x,this.z,this.height,this.width)
	
	
}
food.prototype.drowp=function(edx,p)
{
	edx.drawImage(this.foodimg,this.foodnum*41,0,32,43,p.x+250,p.z+250,this.height,this.width)
	
	
}
food.prototype.chekco=function (p){
	
	

if (this.x < p.x + p.width &&
   this.x + this.width > p.x &&
   this.z< p.z + p.height &&
   this.height + this.z > p.z) {
   if(this.foodc<this.foodp.length)
   {
	   this.x=this.foodp[this.foodc][0];
	   this.z=this.foodp[this.foodc][1];
	   this.foodc++
	   p.fo=p.fo+1
   }
   this.foodnum=Math.floor((Math.random() * 5) + 1)
  
}
else
{
}

	
}