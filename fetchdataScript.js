fetch('https://dummyjson.com/products')
.then((res)=>{
   // console.log(data); json format
   return res.json(); //converted to object
}) 
.then((data)=>{
    const products = Array.isArray(data) ? data : data.products;

    console.log(products);
    console.log(products[0].title);
    
    let tableData="";
    
    products.map((product)=>{
        tableData+=
        `<tr>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td><img src="${product.images[0]}"/></td>
        </tr>`;
    })
    document.getElementById("table_body").
    innerHTML=tableData;
})

.catch((error)=>{console.error(error)});


