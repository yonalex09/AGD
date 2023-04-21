	for (let i = 1; i <= 6; i++) {


		var fila_ = document.createElement('tr');
		fila_.id='filas'
		fila_.align='center'
		fila_.valign='middle'
		//var before = document.getElementById('before')
		var padre = document.getElementById('tabla')
        
        var td1 = document.createElement('td');
        td1.id = 'celda1'
        td1.innerHTML = '<br>';
       	fila_.appendChild(td1);
        
        var td2 = document.createElement('td')
        td2.id= 'celda';
        td2.innerHTML = 'NA';
        fila_.appendChild(td2);

        var td3 = document.createElement('td')
        td3.id= 'celda';
        td3.innerHTML = 'NA';
        fila_.appendChild(td3);

        var td4 = document.createElement('td')
        td4.id= 'celda';
        td4.innerHTML = 'NA';
        fila_.appendChild(td4);

        var td5 = document.createElement('td')
        td5.id= 'celda';
        td5.innerHTML = 'NA';
        fila_.appendChild(td5);

        var td6 = document.createElement('td')
        td6.id= 'celda';
        td6.colSpan = 4;
        td6.innerHTML = 'NA';
        fila_.appendChild(td6);

        var td7 = document.createElement('td')
        td7.id= 'celda';
        td7.colSpan = 2;
        td7.innerHTML = 'NA';
        fila_.appendChild(td7);

        var td8 = document.createElement('td')
        td8.id= 'celda1';
        fila_.appendChild(td8);

        padre.appendChild(fila_);
      }
