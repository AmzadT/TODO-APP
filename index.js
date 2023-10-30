var form = document.querySelector("form");
var task = document.getElementById("task");
var priority = document.getElementById("priority");
var AllData = [];
var Tbody = document.querySelector("tbody");


form.addEventListener("submit",function(element)
{
    element.preventDefault();

    var Data = {};

    Data.input1 = task.value;
    Data.input2 = priority.value;

    AllData.push(Data);
    Tbody.innerText = null;

    AllData.map((ele) =>
    {
        var Row = document.createElement("tr");
        var Td1 = document.createElement("td");
        var Td2 = document.createElement("td");

        Td1.innerText = ele.input1;
        Td2.innerText = ele.input2;

        Row.append(Td1,Td2);
        Tbody.append(Row);
    })
})