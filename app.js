const allSections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');       
const sectBtn = document.querySelectorAll('.control');   

    function pageTransition() {
        for( let i=0; i < sectBtn.length; i++ ) {
         //active button       
                sectBtn[i].addEventListener("click", function(){
                        let currentBtn = document.querySelectorAll('.active-btn');
                        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '' );
                        this.className = this.className + 'active-btn';
                })
        }
     
        //section active
        allSections.addEventListener('click', (e) => {
        //console.log(e.target) any div you click, it indicates immediately
            const id = e.target.dataset.id;
            //just an identity not called
            
            if(id) {
                    //removing selected from other btns
                sectBtns.forEach((btn) => {
                        btn.classList.remove('active')
                 e.target.classList.add('active')
                })      
               

                //add other section
                sections.forEach((section) => {
                      section.classList.remove('active')
                      
                      //here, getting the dataset id
                      const element = document.getElementById(id);
                      element.classList.add('active');
                })
               
                
            }
        })
}  

     pageTransition();