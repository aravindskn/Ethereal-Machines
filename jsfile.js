var itemarray = [];
var item;

//Adding of Items to local Storage
function additems()
{
    item ={
           name:document.getElementById('name').value,
           quantity:document.getElementById('quantity').value,
           itype:document.getElementById('itype').value,
           makemat:document.getElementById('makemat').value,
           pdate:document.getElementById('pdate').value,
           netvalue:document.getElementById('netvalue').value
          };
    itemarray = JSON.parse(localStorage.getItem('item')) || [];
    itemarray.push(item);
    localStorage.setItem('item',JSON.stringify(itemarray));
    alert("Inventory ADDed");
}

//Search Items According to Type or Material

function viewitem(tt,make)
{
    itemarray = localStorage.getItem('item');
    itemarray = JSON.parse(itemarray);
    for (var i = 0; i < itemarray.length; i++)
    {
        var row = itemlist.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

       if(itemarray[i].itype === tt || itemarray[i].makemat === make)
       {
            cell1.innerHTML = itemarray[i].name;
            cell2.innerHTML = itemarray[i].quantity;
            cell3.innerHTML = itemarray[i].itype;
            cell4.innerHTML = itemarray[i].makemat;
            cell5.innerHTML = itemarray[i].pdate;
            cell6.innerHTML = itemarray[i].netvalue;
       }
    }
}

//Display of all Items in Storage
function edititem()
{
    itemarray = localStorage.getItem('item');
    itemarray = JSON.parse(itemarray);
    for (i = 0; i < itemarray.length; i++)
    {
        var row = itemlist.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

            cell1.innerHTML = itemarray[i].name;
            cell2.innerHTML = itemarray[i].quantity;
            cell3.innerHTML = itemarray[i].itype;
            cell4.innerHTML = itemarray[i].makemat;
            cell5.innerHTML = itemarray[i].pdate;
            cell6.innerHTML = itemarray[i].netvalue;

    }
}

//Delete an Item..... The Logic Used is Correct here but it does not work properly. Please have look at the logic!
function deleteitem(m)
{
    itemarray = localStorage.getItem('item');
    itemarray = JSON.parse(itemarray);
    for(var i = 0; i < itemarray.length; i++)
    {
        if(itemarray[i].name === m)
        {
            itemarray.splice((i),1);
            localStorage.setItem('item',JSON.stringify(itemarray));
        }
    }
}

//Edit Item
function eitem(m,m1,v)
{
    itemarray = localStorage.getItem('item');
    itemarray = JSON.parse(itemarray);
    for(i = 0; i < itemarray.length; i++)
    {
        if(itemarray[i].name === m)
        {

            if(m1 === 'qt')
                itemarray[i].quantity = v;
            else if(m1 === 'tp')
                itemarray[i].itype = v;
            else if(m1 === 'mt')
                itemarray[i].makemat = v;
            else if(m1 === 'dp')
                itemarray[i].pdate = v;
            else if(m1 === 'nv')
                itemarray[i].netvalue = v;
            localStorage.setItem('item',JSON.stringify(itemarray));
        }
    }
}

//Display name of items in storage.
function details()
{
    itemarray = localStorage.getItem('item');
    itemarray = JSON.parse(itemarray);
    for (i = 0; i < itemarray.length; i++)
    {
        var row = itemlist.insertRow(1);
        var cell1 = row.insertCell(0);

        cell1.innerHTML = itemarray[i].name;

    }
}

// Display details
function detitem(m)
{
    itemarray = localStorage.getItem('item');
    itemarray = JSON.parse(itemarray);
    for (i = 0; i < itemarray.length; i++)
    {
        var row = itemlist1.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        if(itemarray[i].name === m)
        {
            cell1.innerHTML = itemarray[i].name;
            cell2.innerHTML = itemarray[i].quantity;
            cell3.innerHTML = itemarray[i].itype;
            cell4.innerHTML = itemarray[i].makemat;
            cell5.innerHTML = itemarray[i].pdate;
            cell6.innerHTML = itemarray[i].netvalue;
        }

    }
}