const url = 'https://script.google.com/macros/s/AKfycbw9W1Ctu9286GWSJf6Db2HyNY7gKzbjVLE3QvAompXgf8Gk3K902DiUIvH9nWSx9_v0zQ/exec';

const queryString = window.location.search;
let currentCode = queryString.split("=")[1];

let customerName = document.getElementById('customerName');
let jobsite = document.getElementById('jobsite');
let currentDate = document.getElementById('currentDate');

let af6x4 = document.getElementById('af6x4');
let af5x4 = document.getElementById('af5x4');
let af4x4 = document.getElementById('af4x4');

let sf6x4 = document.getElementById('sf6x4');
let sf5x4 = document.getElementById('sf5x4');
let sf4x4 = document.getElementById('sf4x4');
let sf3x4 = document.getElementById('sf3x4');

let cb10x4 = document.getElementById('cb10x4');
let cb10x2 = document.getElementById('cb10x2');
let cb7x4 = document.getElementById('cb7x4');
let cb7x2 = document.getElementById('cb7x2');
let cb5x4 = document.getElementById('cb5x4');
let cb5x2 = document.getElementById('cb5x2');
let cb4x4 = document.getElementById('cb4x4');
let cb4x2 = document.getElementById('cb4x2');

let auh = document.getElementById('auh');
let abp = document.getElementById('abp');
let suh = document.getElementById('suh');
let sbp = document.getElementById('sbp');

let afc = document.getElementById('afc');
let sfc = document.getElementById('sfc');
let bc = document.getElementById('bc');

let sh1 = document.getElementById('sh1');
let sh2 = document.getElementById('sh2');
let sh3 = document.getElementById('sh3');
let sh4 = document.getElementById('sh4');

let ab20 = document.getElementById('ab20');
let ab18 = document.getElementById('ab18');
let ab16 = document.getElementById('ab16');
let ab14 = document.getElementById('ab14');
let ab13 = document.getElementById('ab13');
let ab12 = document.getElementById('ab12');
let ab106 = document.getElementById('ab106');
let ab10 = document.getElementById('ab10');
let ab9 = document.getElementById('ab9');
let ab8 = document.getElementById('ab8');
let ab7 = document.getElementById('ab7');
let ab6 = document.getElementById('ab6');
let ab5 = document.getElementById('ab5');
let ab4 = document.getElementById('ab4');

let wb12 = document.getElementById('wb12');
let wb11 = document.getElementById('wb11');
let wb10 = document.getElementById('wb10');
let wb9 = document.getElementById('wb9');
let wb8 = document.getElementById('wb8');
let wb7 = document.getElementById('wb7');
let wb6 = document.getElementById('wb6');
let wb5 = document.getElementById('wb5');

function showResults(){
    console.log("Fetching Results .....");
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(i = 0; i < data.length; i ++){
            let code = data[i][0];
            if (currentCode == code){
                for(j = 0; j < data[i].length; j ++){
                    if(data[i][j] == 0){
                        data[i][j] = "";
                    }
                }
                customerName.innerHTML = data[i][1];
                jobsite.innerHTML = data[i][2];
                currentDate.innerHTML = (new Date()).toLocaleDateString('en-US');

                af6x4.innerHTML = data[i][3]; 
                af5x4.innerHTML = data[i][4]; 
                af4x4.innerHTML = data[i][5]; 
                
                sf6x4.innerHTML = data[i][6]; 
                sf5x4.innerHTML = data[i][7]; 
                sf4x4.innerHTML = data[i][8]; 
                sf3x4.innerHTML = data[i][9]; 

                cb10x4.innerHTML = data[i][51]; 
                cb10x2.innerHTML = data[i][52]; 
                cb7x4.innerHTML = data[i][10]; 
                cb7x2.innerHTML = data[i][11]; 
                cb5x4.innerHTML = data[i][12]; 
                cb5x2.innerHTML = data[i][13]; 
                cb4x4.innerHTML = data[i][53]; 
                cb4x2.innerHTML = data[i][54]; 

                auh.innerHTML = data[i][14];
                abp.innerHTML = data[i][15];
                suh.innerHTML = data[i][16];
                sbp.innerHTML = data[i][17];
                afc.innerHTML = data[i][18];
                sfc.innerHTML = data[i][19];
                bc.innerHTML = data[i][20];

                sh1.innerHTML = data[i][21];
                sh2.innerHTML = data[i][22];
                sh3.innerHTML = data[i][23];
                sh4.innerHTML = data[i][24];

                ab20.innerHTML = data[i][25]; 
                ab18.innerHTML = data[i][26]; 
                ab16.innerHTML = data[i][27]; 
                ab14.innerHTML = data[i][28]; 
                ab13.innerHTML = data[i][29]; 
                ab12.innerHTML = data[i][30]; 
                ab106.innerHTML = data[i][31]; 
                ab10.innerHTML = data[i][32]; 
                ab9.innerHTML = data[i][33]; 
                ab8.innerHTML = data[i][34]; 
                ab7.innerHTML = data[i][35]; 
                ab6.innerHTML = data[i][36]; 
                ab5.innerHTML = data[i][37]; 
                ab4.innerHTML = data[i][38]; 
                
                wb12.innerHTML = data[i][39];
                wb11.innerHTML = data[i][46]; 
                wb10.innerHTML = data[i][40]; 
                wb9.innerHTML = data[i][41]; 
                wb8.innerHTML = data[i][42]; 
                wb7.innerHTML = data[i][47]; 
                wb6.innerHTML = data[i][43]; 
                wb5.innerHTML = data[i][48];      
                
                document.getElementById('loader').style.display = "none";
            }
        }
    })
}


showResults();
