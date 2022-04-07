let Products = [['Sony Xperia', '5Tr','20/10'],
    ['Samsung Galaxy', '10Tr','22/10'],
    ['Nokia 6', '2Tr','10/5']];

// document.getElementById('input').innerHTML += table;
function Display(){
    let table = `<tr>
    <th>STT</th>
    <th>Name</th>
    <th>Price</th>
    <th>Date Add</th>
</tr>`;
    for (let i = 0; i < Products.length; i++) {
        table += `<tr>
        <td>${i+1}</td>
        <td>${Products[i][0]}</td>
        <td>${Products[i][1]}</td>
        <td>${Products[i][2]}</td>
        <td><button onclick="delProduct(${i})">Delete</button></td>
        <td><button onclick="updateProduct(${i})">Update</button></td>
              </tr>`

    }
    document.getElementById('input').innerHTML = table;
}
Display();
function addProduct(){
    let Name = prompt('Nhap ten moi');
    let Price = prompt('Nhap gia');
    let dateAdd = prompt('Ngay nhap')
    let str = [Name,Price,dateAdd];
    Products.unshift(str);
    Display();
}
function delProduct(index){
Products.splice(index,1);
Display();
}
function updateProduct(index){
    Products[index][0] = prompt('Nhap ten moi',Products[index][0]);
    Products[index][1] = prompt('Nhap Gia',Products[index][1]);
    Products[index][2] = prompt('Nhap ',Products[index][2]);
    Display();
}

