var ansi = require('ansi')
  , cursor = ansi(process.stdout)
 
var s = 'Hello world! :)';

cursor.write('\n\n\n')

s.split('').forEach(function(i){
		
		// setTimeout(function(){

		cursor
			.hex('#' + Math.random() * 1000000)
			.write(i)
			
			// } 
			// , 1000)

})


cursor.write('\n\n\n')