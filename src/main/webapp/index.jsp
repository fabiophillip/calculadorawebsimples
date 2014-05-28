<%@ page import="tutorial.Calculadora" %>
<html>
<head>
<title>calculator program in jsp</title>
<script>
function checkValue(){
var msg = "";
if (f1.operand1.value == "" || f1.operand2.value == "")
msg += "Operands missing\n";
if (f1.op.selectedIndex == 3 && f1.operand2.value == 0)
msg += "Division by zero";
if (msg.length > 0){
alert(msg);
return false;
} else
return true;
}
</script>
</head>

<body>

<%
Calculadora calculadora = new Calculadora();
String operador1 = "0",op2 = "0";
int result = 0;
String op = "+";
char opchar = op.charAt(0);
if (request.getParameter("op") != null){
op = request.getParameter("op");
opchar = op.charAt(0);
operador1 = request.getParameter("operand1");
op2 = request.getParameter("operand2");
switch(opchar){
case '0': result = calculadora.somar(Integer.parseInt(operador1), Integer.parseInt(op2));
break;
case '1': result = calculadora.subtrair(Integer.parseInt(operador1), Integer.parseInt(op2));
break;
case '2': result = calculadora.multiplicar(Integer.parseInt(operador1), Integer.parseInt(op2));
break;
case '3': result = calculadora.dividir(Integer.parseInt(operador1), Integer.parseInt(op2));;
break;

}
}
%>
<center>

<h2>Simple calculator program in jsp</h2>
<form method ="get" name ="f1" onsubmit = "return checkValue()">
<input type ="text" size ="20" name ="operand1" value = <%= operador1 %> />

<select name = op size = 1>
<option value = "0" <% if (opchar == '0') out.print("selected"); %> >+</option>
<option value = "1" <% if (opchar == '1') out.print("selected"); %> >-</option>
<option value = "2" <% if (opchar == '2') out.print("selected"); %> >*</option>
<option value = "3" <% if (opchar == '3') out.print("selected"); %> >/</option>
</select>

<input type ="text" size="20" name ="operand2" value = <%= op2 %> />
<p>
<input type = submit value = Calculate />

Result = <%= result + "" %>
</form>

</body>

</html>