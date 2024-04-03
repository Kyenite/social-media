let action2;

function newForm(action, event) {
    event.preventDefault();
    const formInfo = document.getElementById("formInfo");

    action2 = action;

    checkInputs(action2);

    if (action === 'register') {
        formInfo.style.height = "330px";

        formInfo.innerHTML = `
            <h5>Register</h5>
            <form class="m-auto mt-4">
                <input id="input1" type="text" name="fname" class="form-control mb-2" placeholder="First Name"/>
                <input id="input2" type="text" name="lname" class="form-control mb-2" placeholder="Last Name"/>
                <input id="input3" type="text" name="email" class="form-control mb-2" placeholder="Example@gmail.com"/>
                <input id="input4" type="password" class="form-control" placeholder="Password"/>
                <div class="mt-4">
                    <button id="btn1" class="btn btn-primary w-auto" onclick="document.location='dashboard.html'" disabled>Register</button>
                    <button class="btn btn-secondary w-auto" onclick="newForm('login')">Sign In</button>
                </div>
            </form>
        `;
    } else {
        formInfo.innerHTML = `
            <h5>Login</h5>
            <form class="m-auto mt-4">
                <input id="input1" type="email" name="text" class="form-control mb-2" placeholder="Example@gmail.com">
                <input id="input2" type="password" class="form-control" placeholder="Password">
                <div class="mt-3">
                    <button class="btn btn-primary w-auto" onclick="document.location='dashboard.html'">Login</button>
                    <button class="btn btn-secondary w-auto" onclick="newForm('register')" id="btn2">Register</button>
                </div>
                <div class="pt-4 mt-4">
                    <a href="" class="text-decoration-none" style="font-weight: 500; color: gray;">Forgot Password?</a>
                </div>
            </form>
        `;
    }
}

function checkInputs(action) {
    if (action === 'register') {
        const fnameInput = document.getElementById("input1");
        const lnameInput = document.getElementById("input2");
        const emailInput = document.getElementById("input3");
        const passwordInput = document.getElementById("input4");
        const registerButton = document.getElementById("btn1");

        if (fnameInput.value.trim() !== "" && lnameInput.value.trim() !== "" && emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            registerButton.removeAttribute("disabled");
        } else {
            registerButton.setAttribute("disabled", true);
        }
    } else {
        const emailInput = document.getElementById("input1");
        const passwordInput = document.getElementById("input2");
        const loginButton = document.getElementById("btn1");

        if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            loginButton.removeAttribute("disabled");
        } else {
            loginButton.setAttribute("disabled", true);
        }
    }
}

document.addEventListener("input", function() {
    checkInputs(action2);
});