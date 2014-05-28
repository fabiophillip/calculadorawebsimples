package comandos;

import tutorial.Calculadora;




public class FazerCalculoBean 
{
	
	private String numero1;
	private String numero2;
	private String operacao;
	
	private float resultado = 0;
	
	
	
	
	public float getResultado() {
		return resultado;
	}


	public void setResultado(float resultado) {
		this.resultado = resultado;
	}


	public String getOperacao() {
		return operacao;
	}


	public void setOperacao(String operacao) {
		this.operacao = operacao;
	}


	


	public String getNumero1() {
		return numero1;
	}


	public void setNumero1(String numero1) {
		this.numero1 = numero1;
	}


	public String getNumero2() {
		return numero2;
	}


	public void setNumero2(String numero2) {
		this.numero2 = numero2;
	}


	public String fazercalculo()
	{
		Calculadora calculadora = new Calculadora();
		int numero1Float = Integer.valueOf(this.numero1);
		int numero2Float = Integer.valueOf(this.numero2);
		if(this.operacao.compareTo("soma") == 0)
		{
			this.resultado = calculadora.somar(numero1Float, numero2Float);
		}
		else if(this.operacao.compareTo("subtracao") == 0)
		{
			this.resultado = calculadora.subtrair(numero1Float, numero2Float);
		}
		else if(this.operacao.compareTo("multiplicacao") == 0)
		{
			this.resultado = calculadora.multiplicar(numero1Float, numero2Float);
		}
		else if(this.operacao.compareTo("divisao") == 0)
		{
			this.resultado = calculadora.dividir(numero1Float, numero2Float);
		}
		
		
		
		return "fezCalculo";
	}

}
