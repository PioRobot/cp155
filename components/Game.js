AFRAME.registerComponent("cbpc",{
    schema:{
        cbc:{
            type:"string",default:"#ring1"
        }
    },
    update:function(){
    this.ic(this.data.cbc)
    },
    ic:function(cbc){
        const e=document.querySelector(cbc)
        e.addEventListener("collide", (e)=>{
            if (cbc.includes("#ring")) {
                console.log("cr")
      } else if(cbc.includes("#hurdle")) {
                console.log("cb")
            }
        })
    }
})