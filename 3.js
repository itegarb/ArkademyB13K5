function arkademy(n){
	if (Number.isInteger(n) == false){
		console.log("Input harus angka!");
	} else {
		for (var i = 1; i <= n; i++){
			if (i % 3 == 0){								//jika i habis dibagi 3
				console.log("Arka");						//maka output Arka
			} else if (i % 7 == 0){							//jika i habis dibagi 7
				console.log("Demy");						//maka output Demy
			} else if (i % 7 == 0 && i % 3 == 0){			//jika i habis dibagi 3 dan 7
				console.log("Arkademy");					//maka output Arkademy
			} else {
				console.log(i);								//selain diatas, hanya mengoutputkan iterasi i
			}
		}	
	}

}