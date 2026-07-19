const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Wishlist

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {

    button.addEventListener("click", function(){

        const icon = this.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        icon.style.color = "red";

    });

});

// Add to Cart

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button=>{

    button.addEventListener("click",function(){

        alert("Item added to cart successfully!");

    });

});

// Quick View

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button=>{

    button.addEventListener("click",function(){

        alert("Opening product details...");

    });

});

let price = 24999;
let quantity = 0;

const qty = document.getElementById("qty");
const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const total = document.getElementById("total");

function updateTotal(){

    let sub = price * quantity;
    let gst = Math.round(sub * 0.05);
    let finalTotal = sub + gst;

    subtotal.innerText = sub;
    tax.innerText = gst;
    total.innerText = finalTotal;

}

document.getElementById("plus").onclick = function(){

    quantity++;
    qty.value = quantity;
    updateTotal();

}

document.getElementById("minus").onclick = function(){

    if(quantity > 0){

        quantity--;
        qty.value = quantity;
        updateTotal();

    }

}

document.getElementById("applyCoupon").onclick = function(){

    const coupon = document.getElementById("coupon").value;

    if(coupon === "JEWEL10"){

        let currentTotal = Number(total.innerText);
        let discount = currentTotal * 0.10;
        total.innerText = Math.round(currentTotal - discount);

        alert("Coupon Applied Successfully!");

    }else{

        alert("Invalid Coupon Code");

    }

}

document.querySelector(".order-btn").onclick = function(){

    alert("🎉 Your order has been placed successfully!");

}
// Wishlist

const hearts = document.querySelectorAll(".heart");

hearts.forEach(btn => {

    btn.addEventListener("click", function(){

        this.classList.toggle("active");

    });

});

// Add to Cart

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button=>{

    button.addEventListener("click",function(){

        button.innerHTML="✔ Added";
        button.style.background="#28a745";

        setTimeout(()=>{

            button.innerHTML="Add to Cart";
            button.style.background="#b8860b";

        },2000);

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        // Email Validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("🎉 Thank you, " + name + "! Your message has been sent successfully.");

        form.reset();

    });

});