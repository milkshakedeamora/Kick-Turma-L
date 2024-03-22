programa {
  funcao calculadora(){
    escreva("CALCULADORA\n")
    real n1,n2,n3
    caracter op
    escreva("Digite o primeiro numero:")
    leia(n1)
    escreva("Digite o segundo numero:")
    leia(n2)
    escreva("Escolha a operação (+ - / * ):")
    leia(op)
    escolha(op){
      caso '+':
        n3 = n1+n2
        pare
      caso '-':
        n3 = n1-n2
        pare
      caso '/':
        n3 = n1/n2
        pare
      caso '*':
        n3 = n1*n2
        pare
      caso contrario:
        escreva("Operação invalida.")
        retorne
    }
    escreva(n1,op,n2,"=",n3)

  }
  funcao inicio() {
    caracter i
    faca{
      calculadora()
      escreva("\nPara continuar pressione qualquer tecla alfanumerica e enter...")
      leia(i)
      limpa()

    }enquanto(i != "")
    
  }
}
