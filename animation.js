function animation()
{
	this.animation=[[0,[0,0]],[1,[0,1,2,3]],[0,[0,1,2,3]],[2,[0,1,2,3]],[3,[0,1,2,3]]]
this.curentanim=0;
this.curentfrm=0;
this.framh=0;
this.deley=0;
	
	
}
animation.prototype.change=function()
{
	this.framh=this.animation[this.curentanim][0]
this.frams=this.animation[this.curentanim][1]
	if(this.deley>20)
{

if (this.curentfrm < this.frams.length-1)
this.curentfrm++
else
this.curentfrm=0
this.deley=0
}else
this.deley++;
	
}