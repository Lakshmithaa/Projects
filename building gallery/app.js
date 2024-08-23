const boxes=[...document.querySelectorAll(".box")]

boxes.forEach((box) =>{
    box.addEventListener("mousemove", (e)=>{
        const cursorPostion = e.clientX-box.getBoundingClientRect().left
        const width=box.getBoundingClientRect().width

        if(cursorPostion > width/2){
            !box.classList.contains("leftEffect") && box.classList.add("rightEffect")
        }else{
            !box.classList.contains("rightEffect") && box.classList.add("leftEffect")
        }
    })
    box.addEventListener("mouseleave", ()=>{
        box.classList.remove("leftEffect")
        box.classList.remove("rightEffect")
    })
})