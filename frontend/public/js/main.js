
const foodMenu = {
    "category1": {
        name: "Starters",
        img: "public/img/starters.jpg"
    },
    "category2": {
        name: "Salads",
        img: "public/img/salad.jpg"
    },
    "category3": {
        name: "Seafoods",
        img: "public/img/seafoods.jpg"
    },
    "category4": {
        name: "Vegetables",
        img: "public/img/vegetables.jpg"
    },
    "category5": {
        name: "Deserts",
        img: "public/img/deserts.jpg"
    },
    "category6": {
        name: "Beverages",
        img: "public/img/tea.jpg"
    },
    "category7": {
        name: "Soups",
        img: "public/img/soup.jpg"
    },
    "category8": {
        name: "Rice Dish",
        img: "public/img/rice.jpg"
    },
    "category9": {
        name: "Swallow",
        img: "public/img/swallow.jpg"
    }
}
const registerDisplay = () => {
    const elementLogin = document.getElementById('login-div');
    fade(elementLogin);

    const elementRegister = document.getElementById('register-div');
    unfade(elementRegister);
}

const fade = (element) => {
    var op = 1;  // initial opacity
    element.style.display = 'none';

    var timer = setInterval( () => {
        if (op <= 0.1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 60);
}
const unfade = (element) => {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval( () => {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

const toggleSideBar = () => {
    document.getElementById('menu-toggle').addEventListener('click', (e) => {
        e.preventDefault();
    });
    const sidebar = document.getElementById('wrapper');
    sidebar.classList.toggle('displaySideBar');
    

}
const displayFoodCategries = () => {
    for(category in foodMenu){
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        const fooDiv = document.createElement('div');
        fooDiv.setAttribute('class', 'col-lg-12 category');
      
        
        var detailArr =[];
        for(details in foodMenu[category]) {    
            detailArr.push(foodMenu[category][details]);           
        }
        fooDiv.innerHTML = detailArr[0];
        img.setAttribute('src', 'public/img/moreInfo.png');
        img.setAttribute('id', detailArr[0] );
        
        const imgLink = document.createElement('a');
        imgDiv.setAttribute('class', 'img-div');
        
        imgLink.appendChild(img);
        imgDiv.appendChild(imgLink);

        const mainDiv = document.createElement('div');

        mainDiv.setAttribute('class', 'col-lg-3 food-menu-grid grid-item');
        mainDiv.setAttribute('id', 'food-menu-grid');
        mainDiv.setAttribute('id', detailArr[0]);
        mainDiv.style.background = `url(${ detailArr[1] }) no-repeat center`;
        mainDiv.style.backgroundSize = "cover";
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row food-menu-content');

        rowDiv.appendChild(fooDiv);
        rowDiv.appendChild(imgDiv);
        
        mainDiv.appendChild(rowDiv);

        document.getElementById('food-menu').appendChild(mainDiv);
    }
}

const displayCategoryAdmin = () => {
    for (category in foodMenu){
        detailsArr = [];
        for(details in foodMenu[category]){
            detailsArr.push(foodMenu[category][details]);  
        }
        const categoryRow = document.createElement('tr');
        categoryRow.setAttribute('class', 'category-item item-active')
        const categoryValue = document.createElement('td');
        categoryValue.style.paddingLeft = "10px";
        
        categoryValue.innerHTML= detailsArr[0];
        categoryRow.appendChild(categoryValue);
        const tableBody = document.getElementById("categories-body");
        tableBody.appendChild(categoryRow);
    }
}

const displayOrderDetailsAdmin = () => {
    document.getElementById("order-info").addEventListener('click', (e) => {
        e.preventDefault();
    });

    const setupMenu = document.getElementById("setup-menu");
    const orderDetails = document.getElementById("order-details");
    
    setupMenu.style.display = "none";
    orderDetails.style.display = "block";
}
const displayMenuSetupAdmin = () => {
    document.getElementById("setup-menu").addEventListener('click', (e) => {
        e.preventDefault();
    });

    const setupMenu = document.getElementById("setup-menu");
    const orderDetails = document.getElementById("order-details");
   
    setupMenu.style.display = "block";
    orderDetails.style.display = "none";
    orderDetails.style.transition = ".2s ease-in-out";
}

const displayModal = value => {
    const header = document.getElementById("modal-header");
    header.innerHTML = value;
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    const modal_container = document.getElementById("modal-container");
    modal_container.style.transform= 'translate(-50%, -200%)'; 
    modal_container.style.transition = "0.9s ease-in-out";
}
const removeModal = value => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    modal.style.opacity = "0"; 
    modal.style.transition = "0.2s ease-in-out";


}

const completeOrder = () => {
    alert("Thank you making this order, your meal is on the way!");
    window.open('user_dashboard.html', '_self');
}