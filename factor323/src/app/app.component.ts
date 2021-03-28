import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'factor323';
  guessPrime = 2;
  p = 0;
  educatedGuesses: number[];
  isFactor: boolean;
  hideCalculateP=true;
  hidePowerCalc=true;
  hideGuessCheck=true;
  gcf: number;
  guessWorked=false;
  guessNotWork=true;
  betterGuessWorked=false;
  betterGuessNotWorked=false;
  plusMinus: string;


  updatePrime(number){
    this.guessPrime = number
    this.hideCalculateP = false;
    this.guessWorked = !(323 % this.guessPrime == 0)
    this.guessNotWork= !this.guessWorked
  }

  computePower(){
    let power = 1 
    while (this.guessPrime**power % 323 != 1){
      power += 1 
    }
    this.p = power
    this.hidePowerCalc = false
  }

  gcd(a: number, b: number) {
    if (b == 0){
      this.gcf = a;
      return
    }
    this.gcd(b, a % b);
  }

  checkGuesses(){
    if((this.guessPrime**(this.p/2))%1 != 0){
      this.betterGuessWorked = false
      this.betterGuessNotWorked = true
      return
    }
    this.gcd(this.guessPrime**(this.p/2) + 1, 323)
    
    if (this.gcf == 1 || this.gcf == 323) {
      this.gcd(this.guessPrime**(this.p/2) - 1, 323)
      if (this.gcf == 1 || this.gcf == 323) {
        this.betterGuessWorked = false
        this.betterGuessNotWorked = true
        this.hideGuessCheck = false
        return 
      }
      this.plusMinus = "- 1"
    }
    this.plusMinus = "+ 1"
    this.betterGuessWorked = true
    this.betterGuessNotWorked = false
    this.hideGuessCheck = false
  }

  startOver(){
    this.hideCalculateP=true;
    this.hideGuessCheck=true;
    this.hidePowerCalc=true;
  }


}