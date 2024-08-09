window.addEventListener('load', Displayemojii);
let con=document.querySelector('#content');

let emoji_container=document.getElementById('emoji_container');

let search= document.getElementById('search_field');

search.addEventListener('keyup',(e)=>{
   
 let keyword=e.target.value;
  console.log(keyword);
   Displayemojii(keyword);

})

function Displayemojii(keyword){
    console.log(keyword);
    let filterlist=emojiList.filter((e)=>e.description.includes(keyword));
   
 emoji_container.innerHTML = '';
 
 if(filterlist.length==0)
    filterlist=Array.from(emojiList);

    let new_row=document.createElement('div');
    new_row.style.display='flex'; 
    new_row.style.flexWrap = 'wrap';
    new_row.style.width='100%';
    new_row.style.height='100vh';


    

filterlist.forEach((val)=>{
        
        
        let emojiFace=document.createElement('div');
        emojiFace.addEventListener('mouseover',()=>{
            emojiFace.style.transform = 'scale(1.5)';
        })
        emojiFace.addEventListener('mouseout',()=>{
            emojiFace.style.transform = 'scale(1)';
        })
        emojiFace.addEventListener('click',()=>{

           let notifyBar= document.getElementById('notification');
           notifyBar.appendChild(emojiFace); 
           notifyBar.appendChild(con); 
           
                notifyBar.style.display = 'block';
                // emojiFace.style.opacity = '1';

           notifyBar.innerText=val.emoji + `\ncopied`;
           

          

       
             navigator.clipboard.writeText(val.emoji).then(() => {
                alert('Copied to clipboard: ' + text);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });

            setTimeout(() => {
                notifyBar.style.display = 'none';
            }, 2000);
        })
        
        
        emojiFace.style.fontSize='50px';
        emojiFace.innerText=val.emoji;
        emoji_container.appendChild(new_row); 
        new_row.appendChild(emojiFace);

        
        
        
    })
    
}

