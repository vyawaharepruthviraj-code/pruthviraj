function showLetter(letter) {
  const output = document.getElementById("output");
  output.textContent = letter;
}
document.addEventListener("keydown",function(event){
    const key= event.key.toLowerCase();
    switch(key){
        case 'a':
            document.getElementById("audio1P").currentTime=0;
            document.getElementById("audio1P").play(key);
            showLetter('A');
            break;
        case 's':
                document.getElementById("audio2P").currentTime=0;
                document.getElementById("audio2P").play(key);
                break;
        case 'd':
                document.getElementById("audio3P").currentTime=0;
                document.getElementById("audio3P").play(key);
                break;
        case 'f':
                document.getElementById("audio4P").currentTime=0;
                document.getElementById("audio4P").play(key);
                break;
        case 'g':
                document.getElementById("audio5P").currentTime=0;
                document.getElementById("audio5P").play(key);
                break;
        case 'h':
                document.getElementById("audio6P").currentTime=0;
                document.getElementById("audio6P").play(key);
                break;
        case 'j':
                document.getElementById("audio7P").currentTime=0;
                document.getElementById("audio7P").play(key);
                break;
    }
    let A = document.querySelector("#box1P");
    A.addEventListener("click",function(){
        document.getElementById("audio1P").currentTime=0;
        document.getElementById("audio1P").play(key);
    })
    let S = document.querySelector("#box2P");
    S.addEventListener("click",function(){
        document.getElementById("audio2P").currentTime=0;
        document.getElementById("audio2P").play(key);
    })
    let D = document.querySelector("#box3P");
    D.addEventListener("click",function(){
        document.getElementById("audio3P").currentTime=0;
        document.getElementById("audio3P").play(key);
    })
    let F = document.querySelector("#box4P");
    F.addEventListener("click",function(){
        document.getElementById("audio4P").currentTime=0;
        document.getElementById("audio4P").play(key);
    })
    let G = document.querySelector("#box5P");
    G.addEventListener("click",function(){
        document.getElementById("audio5P").currentTime=0;
        document.getElementById("audio5P").play(key);
    })
    let H = document.querySelector("#box6P");
    H.addEventListener("click",function(){
        document.getElementById("audio6P").currentTime=0;
        document.getElementById("audio6P").play(key);
    })
    let J = document.querySelector("#box7P");
    J.addEventListener("click",function(){
        document.getElementById("audio7P").currentTime=0;
        document.getElementById("audio7P").play(key);
    })
    
})


// document.addEventListener("mousedown",function(event){
//     const key= event.key.toLowerCase();
//     switch(onclick){
//         case 'a':
//             document.getElementById("audio1P").currentTime=0;
//             document.getElementById("audio1P").play(key);
//             break;
//         case 's':
//                 document.getElementById("audio2P").currentTime=0;
//                 document.getElementById("audio2P").play(key);
//     }
        
    
    
// })