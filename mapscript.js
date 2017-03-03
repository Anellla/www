
function showmap() {
	var log = document.getElementById("login").value;
	var pass = document.getElementById("password").value;
	var formAut = document.getElementById("autorisationBlock").value;
	var showMapShop = document.getElementById("map").value;

	$.post('/d/auth.php', {login:log,password:pass}, function(data){
        if (data.error===null) {
            
            
            fift.style.display = "block";
            autorisationBlock.style.display = "none";
            namemap.style.display = "block";
            map.style.display = "block";
        } else {
           document.getElementById('result').innerHTML = data.error;
        }
        
    }, 'json');
    
}

var fifteenOrder = [1,2,3,4,5,6,7,8,9,10,12,15,13,14,11,0];
//15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,


function init(){

    var i, div, td;
    for (i=0; i < fifteenOrder.length - 1; i++) {
        div = document.createElement('div');
        div.innerHTML = fifteenOrder[i];
        td = document.getElementById('t'+ i);
        td.appendChild(div);
        

    }   
document.body.addEventListener("keydown", theKeyIsPressed);
}

var counter = 0;
function moveKey (e) {
    //console.log("key pressed" + (counter++), e);
}

function theKeyIsPressed (e) {
    console.log("moved" + (counter++), e);
    if (e.key =='ArrowLeft')
    {
        console.log("key pressed left");
        LEFT();
    }
    if (e.key =='ArrowRight')
    {
        console.log("key pressed right");
        RIGHT();
    }
    if (e.key =='ArrowUp')
    {
        console.log("key pressed up");
        UP();
    }
    if (e.key =='ArrowDown')
    {
        console.log("key pressed down");
        DOWN();
    }
}

function LEFT () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    
    if (columnZero == 0)
    {
        console.log ("At the edge of left border");
    }

    else    
    {   
        var nearCell = zero - 1;
        moveCellsZero (zero, nearCell);
        fifteenOrder[zero] = fifteenOrder[nearCell];
        fifteenOrder[nearCell] = 0;
        console.log ("Swapping");
    }
    console.log ("Row is" + " " + rowZero , "Column is" + " " + (columnZero - 1));
}

function RIGHT () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    
    if (columnZero == 3)
    {
        console.log ("At the edge of right border");
    }

    else    
    {     
        var nearCell = zero + 1;
        moveCellsZero (zero, nearCell);
        fifteenOrder[zero] = fifteenOrder[nearCell];
        fifteenOrder[nearCell] = 0;
        console.log ("Swapping");
    }
    win();
    console.log ("Row is" + " " + rowZero , "Column is" + " " + (columnZero + 1));
}

function UP () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    
    if (rowZero == 0)
    {
        console.log ("At the edge of upper border");
    }

    else    
    {   
        var nearCell = zero - 4;
        moveCellsZero (zero, nearCell);
        fifteenOrder[zero] = fifteenOrder[nearCell];
        fifteenOrder[nearCell] = 0;
        console.log ("Swapping");
    }
    win();
    console.log ("Row is" + " " + (rowZero - 1) , "Column is" + " " + columnZero);
}

function DOWN () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    
    if (rowZero  == 3)
    {
        console.log ("At the edge of bottom border");
    }

    else    
    {   
        var nearCell = zero + 4;
        moveCellsZero (zero, nearCell);
        fifteenOrder[zero] = fifteenOrder[nearCell];
        fifteenOrder[nearCell] = 0;
        console.log ("Swapping");
    }
    win();
    console.log ("Row is" + " " + (rowZero + 1) , "Column is" + " " + columnZero);
}

function moveCellsZero (from,to) {
    
    zero = document.getElementById('t' + from);
    nearElement = document.getElementById('t' + to);
    baby = nearElement.firstChild;
    nearElement.removeChild(baby);
    zero.appendChild(baby);
    
}



function moveCells(from,to) {
    
    
    eight = document.getElementById('t' + from);
    zero = document.getElementById('t' + to);
    baby = eight.firstChild;
    eight.removeChild(baby);
    zero.appendChild(baby);
    
}

function areNeighbors(n1, n2) {
   var row1 = Math.floor(n1 / 4),
        column1 = n1 % 4,
        row2 = Math.floor(n2 / 4),
        column2 = n2 % 4;
        
    return row1==row2 && 
    (column1==column2+1 || column2==column1+1) || 
    column1==column2 &&
    (row1==row2+1 || row2==row1+1); 
    
}

function win () {
    var counter = 0;
    for (i=0; i<15; i++)
    {
        if ( fifteenOrder[i] != 0 && fifteenOrder[i] < fifteenOrder[i + 1])
         counter++; 
    }
    if (counter == 14)
        alert('you win');
        console.log ( "you win a game!!!!");
}

function move (place) {
    
    if (fifteenOrder[place]==0) return;
    var emptyCell = fifteenOrder.indexOf(0);
    if (!areNeighbors(place, emptyCell)) return;
    moveCells(place, emptyCell);
    fifteenOrder[emptyCell] = fifteenOrder[place];
    fifteenOrder[place] = 0;
    win();
  }



var marker;
function initMap() {
    var uluru = {lat: 50.4117942, lng: 30.5230838};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var image = 'pics/logoBrain.png';
    marker = new google.maps.Marker({
        position: uluru,
        animation: google.maps.Animation.DROP,
        map: map,
        icon: image

    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

