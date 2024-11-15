let data = JSON.parse(localStorage.getItem("user_list")) || [];
let tbody = document.querySelector("tbody");
init();
function init() {

    const newtr = (ele) => {
        const tr = document.createElement("tr");
        tr.className = "border-b border-gray-200 hover:bg-blue-100";
        tr.setAttribute("data-level", ele.dificulty);
        tr.innerHTML = `
            <td id="level" class="py-3 px-6 text-center font-medium">
                ${ ele.dificulty == 1 ? "A1" : ele.dificulty == 2 ? "A2" : ele.dificulty == 3 ? "B1" : ele.dificulty == 4 ? "B2" : ele.dificulty == 5 ? "C1" : ele.dificulty == 6 ? "C2" : ""}
            </td>
            <td id="score" class="py-3 px-6 text-center font-medium">
                ${validated(ele.dificulty)}%
            </td>
            <td id="attempts" class="py-3 px-6 text-center font-medium">
                ${attempts(ele.dificulty)}
            </td>
        `;
        return tr;
    };

    function filter() {
        let res = data;


        tbody.innerHTML = "";
        res.forEach(ele => {
            ele.tests.forEach(cat => {
                tbody.appendChild(newtr(cat));
            });
        });
    }
    filter();
}

function validated(level) {
    var validate = 0;
    data.forEach(row => {
        row.tests.forEach(ele => {
            if (ele.dificulty === level) {
                validate += 1 ? ele.score >= 10 : 0;
            }
        });

    });
    validate = (validate / data.length * 100) ? validate !== 0 : 0;
    return validate;
}

function attempts(level) {
    var attempt = 0;
    var counter = 0;
    data.forEach(row => {
        row.tests.forEach(ele => {
            if (ele.dificulty === level) {
                attempt++;
            }
        });
        counter++;
    });
    
    return attempt / counter;
}