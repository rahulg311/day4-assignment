
var num=parseInt(prompt('Chosse the number\n1.Addtion,\n2. Subtraction,\n3. Multiplication,\n4. Division,\n5. Square root,\n6. Percentage'));
while(true){
switch(num){
  case 1:
  var firstNum=parseInt(prompt('Enter First Number'));
  var secondNum=parseInt(prompt('Enter Second Number'));
  console.log('Addition '+(firstNum+secondNum));
  break;
  case 2:
  var firstNum=parseInt(prompt('Enter First Number'));
  var secondNum=parseInt(prompt('Enter Second Number'));
  console.log('Subtraction '+(firstNum-secondNum));
  break;
  case 3:
  var firstNum=parseInt(prompt('Enter First Number'));
  var secondNum=parseInt(prompt('Enter Second Number'));
  console.log('Multiplication '+(firstNum*secondNum));
  break;
  case 4:
  var firstNum=parseInt(prompt('Enter First Number'));
  var secondNum=parseInt(prompt('Enter Second Number'));
  console.log('Division '+(firstNum/secondNum));
  break;
  case 5:
  var firstNum=parseInt(prompt('Enter First Number'));
  console.log('Square Root of First Num '+ sqrt(firstNum));
  break;
  case 6:
  var firstNum=parseInt(prompt('Enter First Number'));
  var secondNum=parseInt(prompt('Enter Second Number'));
  console.log('Percentage of First Num from Second No. '+ (firstNum*secondNum);
  break;
  default:
  'Worng Input'
  break;
}
}