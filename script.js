const hour =  document.querySelector('.hour');
const minute = document.querySelector('.minute');
const secon = document.querySelector('.secon');

// const displayTime = (val)=>{

//       console.log(val);
   
// };

// window.setInterval(()=>{
//      // displayTime(10);
//      displayTime(10);
// },1000);

hour.innerHTML = `<span>${new Date().getHours()}</span>`;
     minute.innerHTML =  `<span>${new Date().getMinutes()}</span>`;
     secon.innerHTML = `<span>${new Date().getSeconds()}</span>`;

const time = ()=>{
     const now = new Date();
     const h = now.getHours();
     const m = now.getMinutes();
     const s = now.getSeconds();
     hour.innerHTML = `<span>${h}</span>`;
     minute.innerHTML =  `<span>${m}</span>`;
     secon.innerHTML = `<span>${s}</span>`;

}
setInterval(time,1000);
