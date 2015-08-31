//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
numbers = _INPUT.split(/[\s,]+/);

veces = numbers[0];
pos = 1;

for(k = 0; k < veces; k++){
    imp = 0;
    min = numbers[pos];
    pos ++;
    max = numbers[pos];
    pos ++; 
    
    for(n = min; n <= max; n++){
      raiz = Math.sqrt(n);
      if (raiz % 1 == 0){
        imp ++;
      }
      
    }
    console.log(imp);
  }
