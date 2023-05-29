

/* Declaración de variables */

var text = document.getElementById('enc_txt')
const btn_encrypt = document.getElementById('encrypt')
const btn_decrypt = document.getElementById('decrypt')
const btn_copy = document.getElementById('btn_copy')
const image = document.getElementById('main-image')
var ctn_message_h = document.getElementById('message_h2')
var encrypt_message = document.getElementById('message_p')


/* botón copiar con la función correspondiente */

btn_copy.addEventListener('click', copy);


/* botón cifrar con validaciones */

btn_encrypt.addEventListener('click', () => {


   if(validText()){

    alert("Escriba solo letras minúsculas y sin acentos!")
    text.value = '';


   }else{


    encrypt(text.value);
    text.value = '';
   

   }


});

/* botón de descifrar con validaciones */

btn_decrypt.addEventListener('click', () => {

    if(validText()){

        alert("Escriba solo letras minúsculas y sin acentos!")
        text.value = '';

    }else{


        decrypt_message(text.value);
        text.value = '';
    }

   
});


/* encriptar función */

function encrypt(message) {

    if (text.value.length == 0) {

        alert('Ingrese el mensaje que desea encriptar!')

    } else {


        image.style.display = 'none';
        ctn_message_h.innerHTML = 'Mensaje encriptado:';
        encrypt_message.innerHTML = message.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        btn_copy.style.display = 'block';


    }
}

/* función de descifrado */

function decrypt_message(message) {

    if (text.value.length == 0) {

        alert('Ingrese el mensaje que desea desencriptar!')
    } else {

        image.style.display = 'none';
        ctn_message_h.innerHTML = ' mensaje descifrado:';
        encrypt_message.innerHTML = message.replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/imes/g, 'i').replace(/enter/g, 'e').replace(/ufat/g, 'u');

    }
}

/* función de copia */

function copy() {

    var text_copy = document.getElementById('message_p').innerText;


    navigator.clipboard.writeText(text_copy)

    alert('mensaje copiado!')

}


/* función que desactiva los acentos y las mayúsculas */

function validText() {
    var reg = /[A-Z]|[À-Ú]|[à-ä]|[è-ë]|[ì-ï]|[ò-ö]|[ù-ü]/g;
    
    return reg.test(text.value)
   

}


