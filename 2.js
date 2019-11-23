function username(username){
	var uLength = username.length;										//menghitung panjang username
	var uLower = username.toLowerCase();								//merubah username menjadi lowercase lalu dimasukkan ke variabel
	if (uLength < 3 || uLength > 5){									//jika panjang username kurang dari 3
		return false;													//atau lebih dari 5, maka username tidak cocok
	} else if (username == uLower){										//jika variabel username dibandingkan dengan username 
		return true;													//yang sudah di lowercase, sama
	} else {															//maka true
		return false; 
	}
}

function password(password){
	var pLength = password.length;										//panjang karakter password dimasukkan ke dalam variabel
	var password3 = password.slice(0,3);								//memotong karakter password dari karakter pertama sampai ketiga
	var password4 = password[3];										//memasukkan karakter ke 4 password ke dalam variabel baru
	var password7 = password.slice(4,7);								//memotong karakter password ke-5 sampai ke-7
	var password11 = password.slice(7,11);								//memotong karakter password ke-8 sampai ke 11

	var reg3 = /^[0-9]*$/;												//regex untuk hanya angka yang akan dicari
	var res3 = reg3.test(password3);

	var reg7 = /^[0-9]*$/;												//regex untuk hanya angka yang akan dicari
	var res7 = reg7.test(password7);

	var reg11 = /^[A-Z]*$/;												//regex untuk hanya huruf kapital yang akan dicari
	var res11 = reg11.test(password11);
  	
	if (password.length == 11){
		if (password4 == "-" && res3 == true && res7 == true){
			return res11;
		} else {
			return false;
		}
	} else {
    	return false;
    }
}

//PLEASE DELETE THESE BACKSLASH BELOW IF YOU WANT EXAMPLE

//console.log(username("tania"));
//console.log(username("Eka"));
//console.log(password("021-333BUDI"));
//console.log(password("021-444DEA"));
//console.log(password("987-654Oliv"));

//OR IF YOU WANT YOUR ONLY INPUT, CHANGE THIS CODE BELOW AND COPY TO CONSOLE
// --> username("change this");
// --> password("change this");
