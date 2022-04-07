let Products = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Redmi'];

// document.getElementById('input').innerHTML += table;
function Display(){
    let table = '';

    for (let i = 0; i < Products.length; i++) {
        table += `<tr>
        <td>${i}</td>
        <td>${Products[i]}</td>
              </tr>`

    }
    document.getElementById('input').innerHTML += table;
}
function addProduct(){
    let add = prompt('Nhap ten san pham can them:');
    Products.unshift(add);
    Display();
}
// Display();

