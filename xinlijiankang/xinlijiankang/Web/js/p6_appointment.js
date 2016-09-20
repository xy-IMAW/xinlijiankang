// JavaScript Document

window.onload=function(){
	var maqv=document.getElementById("place").getElementsByTagName("tr").item(0).getElementsByTagName("td").item(0);
	var dongyuan=document.getElementById("place").getElementsByTagName("tr").item(1).getElementsByTagName("td").item(0);
	maqv.style.backgroundColor="#FFF";
	dongyuan.style.backgroundColor="#FFF";
	table_display("dongyuan");
	
	//表格内有老师的背景设为蓝色
	var tables=document.getElementsByClassName("time")
	for(var i=0;i<tables.length;i++){
		var rows=tables.item(i).getElementsByTagName("tr");
		for(var j=0;j<rows.length;j++){
			var cells=rows.item(j).getElementsByTagName("td");
			for(var k=0;k<cells.length;k++){
				if(cells.item(k).innerHTML==""){
					cells.item(k).style.backgroundColor="#FFF";
					}
				else{
					cells.item(k).style.backgroundColor="#50B1F2";
					}
				}
			}
		}
	}


function table_display(table){
	var tabTime=document.getElementsByClassName("time");
	for(var i=0;i<tabTime.length;i++){
		tabTime.item(i).style.display="none";
		}
	if(table=='maqv'){
		table="dongyuan";
		}
	document.getElementById(table).style.display="block";
	}

function change(td,table){
	var row=document.getElementById("place").getElementsByTagName("tr");
	var col1=row.item(0).getElementsByTagName("td");
	var col2=row.item(1).getElementsByTagName("td");
	for(var i=0;i<col1.length;i++){
		col1.item(i).style.backgroundColor="#E4E4E4";
		}
	if(table!='yuqv'){
		col1.item(0).style.backgroundColor="#FFF";
		}
	for(var i=0;i<col2.length;i++)
		col2.item(i).style.backgroundColor="#F4F4F4";
	td.style.backgroundColor="#FFF";
	if(table=='maqv'){
		col2.item(0).style.backgroundColor="#FFF";
		}
	table_display(table);
	}


