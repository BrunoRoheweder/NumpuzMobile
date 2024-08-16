// Verificando se e um dispositivo movel ou desktop

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

if (isMobileDevice()) {
    // Código para dispositivos móveis
    
    var mobile = document.getElementById('mobile');
    var black = document.getElementById('black');

    // Verifica qual folha de estilo está ativa e troca para a outra
    if (mobile.disabled) {
        mobile.disabled = false;
        black.disabled = true;
    } else {
        mobile.disabled = true;
        black.disabled = false;
    }
    
       
// linkando o js
function puz3(){
    window.location.href = "./pages/3x3.html";
}
function puz4(){
    window.location.href = "./pages/4x4.html";
}
function puz5(){
    window.location.href = "./pages/5x5.html";
}
function puz6(){
    window.location.href = "./pages/6x6.html";
}
function voltar(){
    window.location.href = "../index.html";
}

var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;
var num8;
var num9;
var num10;
var num11;
var num12;
var num13;
var num14;
var num15;
var num16;
var num17;
var num18;
var num19;
var num20;
var num21;
var num22;
var num23;
var num24;
var num25;
var num26;
var num27;
var num28;
var num29;
var num30;
var num31;
var num32;
var num33;
var num34;
var num35;
var num0;

// Criando numeros aleatorios

function sortearNumeros(qtdNumeros, minimo, maximo) {
    // Cria um array com todos os números disponíveis
    var numerosDisponiveis_3x3 = [];
    var numerosDisponiveis_4x4 = [];
    var numerosDisponiveis_5x5 = [];
    var numerosDisponiveis_6x6 = [];

    for (var i = minimo; i <= maximo; i++) {
        numerosDisponiveis_3x3.push(i);
        numerosDisponiveis_4x4.push(i);
        numerosDisponiveis_5x5.push(i);
        numerosDisponiveis_6x6.push(i);
    }


    // Array para armazenar os números sorteados
    var numerosSorteados_3x3 = [];
    var numerosSorteados_4x4 = [];
    var numerosSorteados_5x5 = [];
    var numerosSorteados_6x6 = [];
    
    // Sorteia os números
    for (var j = 0; j < qtdNumeros; j++) {
        // Escolhe um índice aleatório dentro do array de números disponíveis
        var indiceSorteado_3x3 = Math.floor(Math.random() * numerosDisponiveis_3x3.length);
        var indiceSorteado_4x4 = Math.floor(Math.random() * numerosDisponiveis_3x3.length);
        var indiceSorteado_5x5 = Math.floor(Math.random() * numerosDisponiveis_3x3.length);
        var indiceSorteado_6x6 = Math.floor(Math.random() * numerosDisponiveis_3x3.length);

        // Remove o número sorteado do array de disponíveis e adiciona ao array de sorteados
        numerosSorteados_3x3.push(numerosDisponiveis_3x3.splice(indiceSorteado_3x3, 1)[0]);
        numerosSorteados_4x4.push(numerosDisponiveis_4x4.splice(indiceSorteado_4x4, 1)[0]);
        numerosSorteados_5x5.push(numerosDisponiveis_5x5.splice(indiceSorteado_5x5, 1)[0]);
        numerosSorteados_6x6.push(numerosDisponiveis_6x6.splice(indiceSorteado_6x6, 1)[0]);
    }

    return numerosSorteados_3x3;
    return numerosSorteados_4x4;
    return numerosSorteados_5x5;
    return numerosSorteados_6x6;
}

var numerosSorteados_3x3 = sortearNumeros(8, 1, 8);

var numerosSorteados_4x4 = sortearNumeros(15, 1, 15);

var numerosSorteados_5x5 = sortearNumeros(24, 1, 24);

var numerosSorteados_6x6 = sortearNumeros(35, 1, 35);

// Fim da criação de numeros

// Adicionando o numero no array necessario para o jogo inicial em posições aleatorias

var array_3x3 = [[num1],[num2],[num3],
                 [num4],[num5],[num6],
                 [num7],[num8],[num0]]; 
                    

var array_4x4 = [[num1],[num2],[num3],[num4],
                 [num5],[num6],[num7],[num8],
                 [num9],[num10],[num11],[num12],
                 [num13],[num14],[num15],[num0]];  

var array_5x5 = [[num1],[num2],[num3],[num4],[num5],
                 [num6],[num7],[num8],[num9],[num10],
                 [num11],[num12],[num13],[num14],[num15],
                 [num16],[num17],[num18],[num19],[num20],
                 [num21],[num22],[num23],[num24],[num0]]; 

var array_6x6 = [[num1],[num2],[num3],[num4],[num5],[num6],
                 [num7],[num8],[num9],[num10],[num11],[num12],
                 [num13],[num14],[num15],[num16],[num17],[num18],
                 [num19],[num20],[num21],[num22],[num23],[num24],
                 [num25],[num26],[num27],[num28],[num29],[num30],
                 [num31],[num32],[num33],[num34],[num35],[num0]];     

// Adicionando numeros aleatorios nos arrays

numerosSorteados_3x3.forEach(function(valor, index) {
    array_3x3[index][0] = valor;
    array_3x3[8][0] = parseInt(0);
});

numerosSorteados_4x4.forEach(function(valor, index) {
    array_4x4[index][0] = valor;
    array_4x4[15][0] = parseInt(0);
});

numerosSorteados_5x5.forEach(function(valor, index) {
    array_5x5[index][0] = valor;
    array_5x5[24][0] = parseInt(0);
});

numerosSorteados_6x6.forEach(function(valor, index) {
    array_6x6[index][0] = valor;
    array_6x6[35][0] = parseInt(0);
});

// Fim de adição de numeros aleatorios nos arrays

// Aqui esta adicionando os numeros na tela aleatoriamente

function atualizarNumeros(array, tamanho, indiceVazio) {
    array.forEach(function (valor, index) {
        var idNumeros = "num_" + tamanho + "x" + tamanho + "_" + (index + 1);
        var numeroElement = document.getElementById(idNumeros);
    
        if (numeroElement) {
            numeroElement.innerHTML = valor[0];
        }
    
        // Verifique e limpe o índice vazio
        if (index === indiceVazio) {
            var idVazio = "num_" + tamanho + "x" + tamanho + "_" + (tamanho * tamanho);
            var vazioElement = document.getElementById(idVazio);
    
            if (vazioElement) {
            vazioElement.innerHTML = " ";
            }
        }
    });
}
atualizarNumeros(array_3x3, 3, 8); // 3x3, índice vazio: 8
atualizarNumeros(array_4x4, 4, 15); // 4x4, índice vazio: 15
atualizarNumeros(array_5x5, 5, 24); // 5x5, índice vazio: 24
atualizarNumeros(array_6x6, 6, 29); // 6x6, índice vazio: 29

// Fim da adição de numeros

// Verificando se pode se mover e mover

function mover_3x3(origem, destino) {
    if (array_3x3[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array_3x3[origem][0];
        array_3x3[origem][0] = 0;
        array_3x3[destino][0] = numeroOrigem;
        
        var numeroOrigemElement = document.getElementById("num_3x3_" + (origem + 1));
        numeroOrigemElement.innerHTML = " ";
        
        var numeroDestinoElement = document.getElementById("num_3x3_" + (destino + 1));
        numeroDestinoElement.innerHTML = numeroOrigem;
    }
};

function mover_4x4(origem, destino) {
    if (array_4x4[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array_4x4[origem][0];
        array_4x4[origem][0] = 0;
        array_4x4[destino][0] = numeroOrigem;

    var numeroOrigemElement = document.getElementById("num_4x4_" + (origem + 1));
    numeroOrigemElement.innerHTML = " ";

    var numeroDestinoElement = document.getElementById("num_4x4_" + (destino + 1));
    numeroDestinoElement.innerHTML = numeroOrigem;
    }
};

function mover_5x5(origem, destino) {
    if (array_5x5[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array_5x5[origem][0];
        array_5x5[origem][0] = 0;
        array_5x5[destino][0] = numeroOrigem;

    var numeroOrigemElement = document.getElementById("num_5x5_" + (origem + 1));
    numeroOrigemElement.innerHTML = " ";

    var numeroDestinoElement = document.getElementById("num_5x5_" + (destino + 1));
    numeroDestinoElement.innerHTML = numeroOrigem;
    }
};

function mover_6x6(origem, destino) {
    if (array_6x6[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array_6x6[origem][0];
        array_6x6[origem][0] = 0;
        array_6x6[destino][0] = numeroOrigem;
        
    var numeroOrigemElement = document.getElementById("num_6x6_" + (origem + 1));
    numeroOrigemElement.innerHTML = " ";

    var numeroDestinoElement = document.getElementById("num_6x6_" + (destino + 1));
    numeroDestinoElement.innerHTML = numeroOrigem;
    }
};

// inicio 3x3
function mover_1(modo) {
    if (modo === 3) {
        mover_3x3(0, 1);
        mover_3x3(0, 3);
    } else if (modo === 4) {
        mover_4x4(0, 1);
        mover_4x4(0, 4);
    } else if (modo === 5) {
        mover_5x5(0, 1);
        mover_5x5(0, 5);
    } else if (modo === 6) {
        mover_6x6(0, 1);
        mover_6x6(0, 6);
    }
};

function mover_2(modo) {
    if (modo === 3) {
        mover_3x3(1, 0);
        mover_3x3(1, 2);
        mover_3x3(1, 4);
    } else if (modo === 4) {
        mover_4x4(1, 0);
        mover_4x4(1, 2);
        mover_4x4(1, 5);
    } else if (modo === 5) {
        mover_5x5(1, 0);
        mover_5x5(1, 2);
        mover_5x5(1, 6);
    } else if (modo === 6) {
        mover_6x6(1, 0);
        mover_6x6(1, 2);
        mover_6x6(1, 7);
    }
};

function mover_3(modo) {
    if (modo === 3) {
        mover_3x3(2, 1);
        mover_3x3(2, 5);
    } else if (modo === 4) {
        mover_4x4(2, 1);
        mover_4x4(2, 3);
        mover_4x4(2, 6);
    } else if (modo === 5) {
        mover_5x5(2, 1);
        mover_5x5(2, 3);
        mover_5x5(2, 7);
    } else if (modo === 6) {
        mover_6x6(2, 1);
        mover_6x6(2, 3);
        mover_6x6(2, 8);
    }
};

function mover_4(modo) {
    if (modo === 3) {
        mover_3x3(3, 0);
        mover_3x3(3, 4);
        mover_3x3(3, 6);
    } else if (modo === 4) {
        mover_4x4(3, 2);
        mover_4x4(3, 7);
    } else if (modo === 5) {
        mover_5x5(3, 2);
        mover_5x5(3, 4);
        mover_5x5(3, 8);
    } else if (modo === 6) {
        mover_6x6(3, 2);
        mover_6x6(3, 4);
        mover_6x6(3, 9);
    }
};

function mover_5(modo) {
    if (modo === 3) {
        mover_3x3(4, 1);
        mover_3x3(4, 3);
        mover_3x3(4, 5);
        mover_3x3(4, 7);
    } else if (modo === 4) {
        mover_4x4(4, 0);
        mover_4x4(4, 5);
        mover_4x4(4, 8);
    } else if (modo === 5) {
        mover_5x5(4, 3);
        mover_5x5(4, 9);
    } else if (modo === 6) {
        mover_6x6(4, 3);
        mover_6x6(4, 5);
        mover_6x6(4, 10);
    }
};

function mover_6(modo) {
    if (modo === 3) {
        mover_3x3(5, 2);
        mover_3x3(5, 4);
        mover_3x3(5, 8);
    } else if (modo === 4) {
        mover_4x4(5, 1);
        mover_4x4(5, 4);
        mover_4x4(5, 6);
        mover_4x4(5, 9);
    } else if (modo === 5) {
        mover_5x5(5, 0);
        mover_5x5(5, 6);
        mover_5x5(5, 10);
    } else if (modo === 6) {
        mover_6x6(5, 4);
        mover_6x6(5, 11);
    }
};

function mover_7(modo) {
    if (modo === 3) {
        mover_3x3(6, 3);
        mover_3x3(6, 7);
    } else if (modo === 4) {
        mover_4x4(6, 2);
        mover_4x4(6, 5);
        mover_4x4(6, 7);
        mover_4x4(6, 10);
    } else if (modo === 5) {
        mover_5x5(6, 1);
        mover_5x5(6, 5);
        mover_5x5(6, 7);
        mover_5x5(6, 11);
    } else if (modo === 6) {
        mover_6x6(6, 0);
        mover_6x6(6, 7);
        mover_6x6(6, 12);
    }
};

function mover_8(modo) {
    if (modo === 3) {
        mover_3x3(7, 4);
        mover_3x3(7, 6);
        mover_3x3(7, 8);
    } else if (modo === 4) {
        mover_4x4(7, 3);
        mover_4x4(7, 6);
        mover_4x4(7, 11);
    } else if (modo === 5) {
        mover_5x5(7, 2);
        mover_5x5(7, 6);
        mover_5x5(7, 8);
        mover_5x5(7, 12);
    } else if (modo === 6) {
        mover_6x6(7, 1);
        mover_6x6(7, 6);
        mover_6x6(7, 8);
        mover_6x6(7, 13);
    }
};

function mover_9(modo) {
    if (modo === 3) {
        mover_3x3(8, 5);
        mover_3x3(8, 7);
    } else if (modo === 4) {
        mover_4x4(8, 4);
        mover_4x4(8, 9);
        mover_4x4(8, 12);
    } else if (modo === 5) {
        mover_5x5(8, 3);
        mover_5x5(8, 7);
        mover_5x5(8, 9);
        mover_5x5(8, 13);
    } else if (modo === 6) {
        mover_6x6(8, 2);
        mover_6x6(8, 7);
        mover_6x6(8, 9);
        mover_6x6(8, 14);
    }
};
// fim 3x3

// incio 4x4
function mover_10(modo) {
    if (modo === 4) {
        mover_4x4(9, 5);
        mover_4x4(9, 8);
        mover_4x4(9, 10);
        mover_4x4(9, 13);
    } else if (modo === 5) {
        mover_5x5(9, 4);
        mover_5x5(9, 8);
        mover_5x5(9, 14);
    } else if (modo === 6) {
        mover_6x6(9, 3);
        mover_6x6(9, 8);
        mover_6x6(9, 10);
        mover_6x6(9, 15);
    }
};

function mover_11(modo) {
    if (modo === 4) {
        mover_4x4(10, 6);
        mover_4x4(10, 9);
        mover_4x4(10, 11);
        mover_4x4(10, 14);
    } else if (modo === 5) {
        mover_5x5(10, 5);
        mover_5x5(10, 11);
        mover_5x5(10, 15);
    } else if (modo === 6) {
        mover_6x6(10, 4);
        mover_6x6(10, 9);
        mover_6x6(10, 11);
        mover_6x6(10, 16);
    }
};

function mover_12(modo) {
    if (modo === 4) {
        mover_4x4(11, 7);
        mover_4x4(11, 10);
        mover_4x4(11, 15);
    } else if (modo === 5) {
        mover_5x5(11, 6);
        mover_5x5(11, 10);
        mover_5x5(11, 12);
        mover_5x5(11, 16);
    } else if (modo === 6) {
        mover_6x6(11, 5);
        mover_6x6(11, 10);
        mover_6x6(11, 17);
    }
};

function mover_13(modo) {
    if (modo === 4) {
        mover_4x4(12, 8);
        mover_4x4(12, 13);
    } else if (modo === 5) {
        mover_5x5(12, 7);
        mover_5x5(12, 11);
        mover_5x5(12, 13);
        mover_5x5(12, 17);
    } else if (modo === 6) {
        mover_6x6(12, 6);
        mover_6x6(12, 13);
        mover_6x6(12, 18);
    }
};

function mover_14(modo) {
    if (modo === 4) {
        mover_4x4(13, 9);
        mover_4x4(13, 12);
        mover_4x4(13, 14);
    } else if (modo === 5) {
        mover_5x5(13, 8);
        mover_5x5(13, 12);
        mover_5x5(13, 14);
        mover_5x5(13, 18);
    } else if (modo === 6) {
        mover_6x6(13, 7);
        mover_6x6(13, 12);
        mover_6x6(13, 14);
        mover_6x6(13, 19);
    }
};

function mover_15(modo) {
    if (modo === 4) {
        mover_4x4(14, 10);
        mover_4x4(14, 13);
        mover_4x4(14, 15);
    } else if (modo === 5) {
        mover_5x5(14, 9);
        mover_5x5(14, 13);
        mover_5x5(14, 19);
    } else if (modo === 6) {
        mover_6x6(14, 8);
        mover_6x6(14, 13);
        mover_6x6(14, 15);
        mover_6x6(14, 20);
    }
};

function mover_16(modo) {
    if (modo === 4) {
        mover_4x4(15, 11);
        mover_4x4(15, 14);
    } else if (modo === 5) {
        mover_5x5(15, 10);
        mover_5x5(15, 16);
        mover_5x5(15, 20);
    } else if (modo === 6) {
        mover_6x6(15, 9);
        mover_6x6(15, 14);
        mover_6x6(15, 16);
        mover_6x6(15, 21);
    }
};
// fim 4x4

// inicio 5x5
function mover_17(modo) {
    if (modo === 5) {
        mover_5x5(16, 11);
        mover_5x5(16, 15);
        mover_5x5(16, 17);
        mover_5x5(16, 21);
    } else if (modo === 6) {
        mover_6x6(16, 10);
        mover_6x6(16, 15);
        mover_6x6(16, 17);
        mover_6x6(16, 22);
    }
};

function mover_18(modo) {
    if (modo === 5) {
        mover_5x5(17, 12);
        mover_5x5(17, 16);
        mover_5x5(17, 18);
        mover_5x5(17, 22);
    } else if (modo === 6) {
        mover_6x6(17, 11);
        mover_6x6(17, 16);
        mover_6x6(17, 23);
    }
};

function mover_19(modo) {
    if (modo === 5) {
        mover_5x5(18, 13);
        mover_5x5(18, 17);
        mover_5x5(18, 19);
        mover_5x5(18, 23);
    } else if (modo === 6) {
        mover_6x6(18, 12);
        mover_6x6(18, 19);
        mover_6x6(18, 24);
    }
};

function mover_20(modo) { 
    if (modo === 5) {
        mover_5x5(19, 14);
        mover_5x5(19, 18);
        mover_5x5(19, 24);
    } else if (modo === 6) {
        mover_6x6(19, 13);
        mover_6x6(19, 18);
        mover_6x6(19, 20);
        mover_6x6(19, 25);
    }
};

function mover_21(modo) { // continuar daqui
    if (modo === 5) {
        mover_5x5(20, 15);
        mover_5x5(20, 21);
    } else if (modo === 6) {
        mover_6x6(20, 14);
        mover_6x6(20, 19);
        mover_6x6(20, 21);
        mover_6x6(20, 26);
    }
};

function mover_22(modo) {
    if (modo === 5) {
        mover_5x5(21, 16);
        mover_5x5(21, 20);
        mover_5x5(21, 22);
    } else if (modo === 6) {
        mover_6x6(21, 15);
        mover_6x6(21, 20);
        mover_6x6(21, 22);
        mover_6x6(21, 27);
    }
};

function mover_23(modo) {
    if (modo === 5) {
        mover_5x5(22, 17);
        mover_5x5(22, 21);
        mover_5x5(22, 23);
    } else if (modo === 6) {
        mover_6x6(22, 16);
        mover_6x6(22, 21);
        mover_6x6(22, 23);
        mover_6x6(22, 28);
    }
};

function mover_24(modo) {
    if (modo === 5) {
        mover_5x5(23, 18);
        mover_5x5(23, 22);
        mover_5x5(23, 24);
    } else if (modo === 6) {
        mover_6x6(23, 17);
        mover_6x6(23, 22);
        mover_6x6(23, 29);
    }
};

function mover_25(modo) {
    if (modo === 5) {
        mover_5x5(24, 19);
        mover_5x5(24, 23);
    } else if (modo === 6) {
        mover_6x6(24, 18);
        mover_6x6(24, 25);
        mover_6x6(24, 30);
    }
};
// fim 5x5

// inicio 6x6
function mover_26(modo) {
    if (modo === 6) {
        mover_6x6(25, 19);
        mover_6x6(25, 24);
        mover_6x6(25, 26);
        mover_6x6(25, 31);
    }
};

function mover_27(modo) {
    if (modo === 6) {
        mover_6x6(26, 20);
        mover_6x6(26, 25);
        mover_6x6(26, 27);
        mover_6x6(26, 32);
    }
};

function mover_28(modo) {
    if (modo === 6) {
        mover_6x6(27, 21);
        mover_6x6(27, 26);
        mover_6x6(27, 28);
        mover_6x6(27, 33);
    }
};

function mover_29(modo) {
    if (modo === 6) {
        mover_6x6(28, 22);
        mover_6x6(28, 27);
        mover_6x6(28, 29);
        mover_6x6(28, 34);
    }
};

function mover_30(modo) {
    if (modo === 6) {
        mover_6x6(29, 23);
        mover_6x6(29, 28);
        mover_6x6(29, 35);
    }
};

function mover_31(modo) {
    if (modo === 6) {
        mover_6x6(30, 24);
        mover_6x6(30, 31);
    }
};

function mover_32(modo) {
    if (modo === 6) {
        mover_6x6(31, 25);
        mover_6x6(31, 30);
        mover_6x6(31, 32);
    }
};

function mover_33(modo) {
    if (modo === 6) {
        mover_6x6(32, 26);
        mover_6x6(32, 31);
        mover_6x6(32, 33);
    }
};

function mover_34(modo) {
    if (modo === 6) {
        mover_6x6(33, 27);
        mover_6x6(33, 32);
        mover_6x6(33, 34);
    }
};

function mover_35(modo) {
    if (modo === 6) {
        mover_6x6(34, 28);
        mover_6x6(34, 33);
        mover_6x6(34, 35);
    }
};

function mover_36(modo) {
    if (modo === 6) {
        mover_6x6(35, 29);
        mover_6x6(35, 34);
    }
};
// fim 6x6

// Fim da vereficação de mover e mover


//  CONFIRMANDO QUE TODOS ESTÃO IGUAIS OU SEJA TODOS ESTÃO NOS DEVIDOS LUGARES
//  VERIFICAÇÃO 
function pronto() {
    var array_confirm_3x3 = [[1],[2],[3],
                             [4],[5],[6],
                             [7],[8],[0]];

    var array_confirm_4x4 = [[1],[2],[3],[4],
                             [5],[6],[7],[8],
                             [9],[10],[11],[12],
                             [13],[14],[15],[0]];

    var array_confirm_5x5 = [[1],[2],[3],[4],[5],
                             [6],[7],[8],[9],[10],
                             [11],[12],[13],[14],[15],
                             [16],[17],[18],[19],[20],
                             [21],[22],[23],[24],[0]];

    var array_confirm_6x6 = [[1],[2],[3],[4],[5],[6],
                             [7],[8],[9],[10],[11],[12],
                             [13],[14],[15],[16],[17],[18],
                             [19],[20],[21],[22],[23],[24],
                             [25],[26],[27],[28],[29],[30],
                             [31],[32],[33],[34],[35],[0]];;

    var todosConfirmados_3x3 = true;  
    var todosConfirmados_4x4 = true;  
    var todosConfirmados_5x5 = true;  
    var todosConfirmados_6x6 = true;  

    array_confirm_3x3.forEach(function(valor, index) {
        if (array_confirm_3x3[index][0] !== array_3x3[index][0]) {
            todosConfirmados_3x3 = false;
        }
    });
    array_confirm_4x4.forEach(function(valor, index) {
        if (array_confirm_4x4[index][0] !== array_4x4[index][0]) {
            todosConfirmados_4x4 = false;
        }
    });
    array_confirm_5x5.forEach(function(valor, index) {
        if (array_confirm_5x5[index][0] !== array_5x5[index][0]) {
            todosConfirmados_5x5 = false;
        }
    });
    array_confirm_6x6.forEach(function(valor, index) {
        if (array_confirm_6x6[index][0] !== array_6x6[index][0]) {
            todosConfirmados_6x6 = false;
        }
    });

    if (todosConfirmados_3x3) {
        alert("Você Ganhou");
    } else if (todosConfirmados_4x4) {
        alert("Você Ganhou");
    } else if (todosConfirmados_5x5) {
        alert("Você Ganhou");
    } else if (todosConfirmados_6x6) {
        alert("Você Ganhou");
    }
    else {
        alert("Todos os numeros deve estar em sequencia pedida")
    }
    
}

//  FIM DA VERIFICAÇÃO  

function recarregar() {
    location.reload();
};


    // document.body.classList.add("mobile");
} else {
    
// linkando o js
function puz3(){
    window.location.href = "./pages/3x3.html";
}
function puz4(){
    window.location.href = "./pages/4x4.html";
}
function puz5(){
    window.location.href = "./pages/5x5.html";
}
function puz6(){
    window.location.href = "./pages/6x6.html";
}
function voltar(){
    window.location.href = "../index.html";
}

var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;
var num8;
var num9;
var num10;
var num11;
var num12;
var num13;
var num14;
var num15;
var num16;
var num17;
var num18;
var num19;
var num20;
var num21;
var num22;
var num23;
var num24;
var num25;
var num26;
var num27;
var num28;
var num29;
var num30;
var num31;
var num32;
var num33;
var num34;
var num35;
var num0;

// Criando numeros aleatorios

function sortearNumeros(qtdNumeros, minimo, maximo) {
    // Cria um array com todos os números disponíveis
    var numerosDisponiveis_3x3 = [];
    var numerosDisponiveis_4x4 = [];
    var numerosDisponiveis_5x5 = [];
    var numerosDisponiveis_6x6 = [];

    for (var i = minimo; i <= maximo; i++) {
        numerosDisponiveis_3x3.push(i);
        numerosDisponiveis_4x4.push(i);
        numerosDisponiveis_5x5.push(i);
        numerosDisponiveis_6x6.push(i);
    }


    // Array para armazenar os números sorteados
    var numerosSorteados_3x3 = [];
    var numerosSorteados_4x4 = [];
    var numerosSorteados_5x5 = [];
    var numerosSorteados_6x6 = [];
    
    // Sorteia os números
    for (var j = 0; j < qtdNumeros; j++) {
        // Escolhe um índice aleatório dentro do array de números disponíveis
        var indiceSorteado_3x3 = Math.floor(Math.random() * numerosDisponiveis_3x3.length);
        var indiceSorteado_4x4 = Math.floor(Math.random() * numerosDisponiveis_3x3.length);
        var indiceSorteado_5x5 = Math.floor(Math.random() * numerosDisponiveis_3x3.length);
        var indiceSorteado_6x6 = Math.floor(Math.random() * numerosDisponiveis_3x3.length);

        // Remove o número sorteado do array de disponíveis e adiciona ao array de sorteados
        numerosSorteados_3x3.push(numerosDisponiveis_3x3.splice(indiceSorteado_3x3, 1)[0]);
        numerosSorteados_4x4.push(numerosDisponiveis_4x4.splice(indiceSorteado_4x4, 1)[0]);
        numerosSorteados_5x5.push(numerosDisponiveis_5x5.splice(indiceSorteado_5x5, 1)[0]);
        numerosSorteados_6x6.push(numerosDisponiveis_6x6.splice(indiceSorteado_6x6, 1)[0]);
    }

    return numerosSorteados_3x3;
    return numerosSorteados_4x4;
    return numerosSorteados_5x5;
    return numerosSorteados_6x6;
}

var numerosSorteados_3x3 = sortearNumeros(8, 1, 8);

var numerosSorteados_4x4 = sortearNumeros(15, 1, 15);

var numerosSorteados_5x5 = sortearNumeros(24, 1, 24);

var numerosSorteados_6x6 = sortearNumeros(35, 1, 35);

// Fim da criação de numeros

// Adicionando o numero no array necessario para o jogo inicial em posições aleatorias

var array_3x3 = [[num1],[num2],[num3],
                 [num4],[num5],[num6],
                 [num7],[num8],[num0]]; 
                    

var array_4x4 = [[num1],[num2],[num3],[num4],
                 [num5],[num6],[num7],[num8],
                 [num9],[num10],[num11],[num12],
                 [num13],[num14],[num15],[num0]];  

var array_5x5 = [[num1],[num2],[num3],[num4],[num5],
                 [num6],[num7],[num8],[num9],[num10],
                 [num11],[num12],[num13],[num14],[num15],
                 [num16],[num17],[num18],[num19],[num20],
                 [num21],[num22],[num23],[num24],[num0]]; 

var array_6x6 = [[num1],[num2],[num3],[num4],[num5],[num6],
                 [num7],[num8],[num9],[num10],[num11],[num12],
                 [num13],[num14],[num15],[num16],[num17],[num18],
                 [num19],[num20],[num21],[num22],[num23],[num24],
                 [num25],[num26],[num27],[num28],[num29],[num30],
                 [num31],[num32],[num33],[num34],[num35],[num0]];     

// Adicionando numeros aleatorios nos arrays

numerosSorteados_3x3.forEach(function(valor, index) {
    array_3x3[index][0] = valor;
    array_3x3[8][0] = parseInt(0);
});

numerosSorteados_4x4.forEach(function(valor, index) {
    array_4x4[index][0] = valor;
    array_4x4[15][0] = parseInt(0);
});

numerosSorteados_5x5.forEach(function(valor, index) {
    array_5x5[index][0] = valor;
    array_5x5[24][0] = parseInt(0);
});

numerosSorteados_6x6.forEach(function(valor, index) {
    array_6x6[index][0] = valor;
    array_6x6[35][0] = parseInt(0);
});

// Fim de adição de numeros aleatorios nos arrays

// Aqui esta adicionando os numeros na tela aleatoriamente

function atualizarNumeros(array, tamanho, indiceVazio) {
    array.forEach(function (valor, index) {
        var idNumeros = "num_" + tamanho + "x" + tamanho + "_" + (index + 1);
        var numeroElement = document.getElementById(idNumeros);
    
        if (numeroElement) {
            numeroElement.innerHTML = valor[0];
        }
    
        // Verifique e limpe o índice vazio
        if (index === indiceVazio) {
            var idVazio = "num_" + tamanho + "x" + tamanho + "_" + (tamanho * tamanho);
            var vazioElement = document.getElementById(idVazio);
    
            if (vazioElement) {
            vazioElement.innerHTML = " ";
            }
        }
    });
}
atualizarNumeros(array_3x3, 3, 8); // 3x3, índice vazio: 8
atualizarNumeros(array_4x4, 4, 15); // 4x4, índice vazio: 15
atualizarNumeros(array_5x5, 5, 24); // 5x5, índice vazio: 24
atualizarNumeros(array_6x6, 6, 29); // 6x6, índice vazio: 29

// Fim da adição de numeros

// Verificando se pode se mover e mover

function mover_3x3(origem, destino) {
    if (array_3x3[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array_3x3[origem][0];
        array_3x3[origem][0] = 0;
        array_3x3[destino][0] = numeroOrigem;
        
        var numeroOrigemElement = document.getElementById("num_3x3_" + (origem + 1));
        numeroOrigemElement.innerHTML = " ";
        
        var numeroDestinoElement = document.getElementById("num_3x3_" + (destino + 1));
        numeroDestinoElement.innerHTML = numeroOrigem;
    }
};

function mover_4x4(origem, destino) {
    if (array_4x4[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array_4x4[origem][0];
        array_4x4[origem][0] = 0;
        array_4x4[destino][0] = numeroOrigem;

    var numeroOrigemElement = document.getElementById("num_4x4_" + (origem + 1));
    numeroOrigemElement.innerHTML = " ";

    var numeroDestinoElement = document.getElementById("num_4x4_" + (destino + 1));
    numeroDestinoElement.innerHTML = numeroOrigem;
    }
};

function mover_5x5(origem, destino) {
    if (array_5x5[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array_5x5[origem][0];
        array_5x5[origem][0] = 0;
        array_5x5[destino][0] = numeroOrigem;

    var numeroOrigemElement = document.getElementById("num_5x5_" + (origem + 1));
    numeroOrigemElement.innerHTML = " ";

    var numeroDestinoElement = document.getElementById("num_5x5_" + (destino + 1));
    numeroDestinoElement.innerHTML = numeroOrigem;
    }
};

function mover_6x6(origem, destino) {
    if (array_6x6[destino][0] === 0) {
        // Condição de movimento
        var numeroOrigem = array_6x6[origem][0];
        array_6x6[origem][0] = 0;
        array_6x6[destino][0] = numeroOrigem;
        
    var numeroOrigemElement = document.getElementById("num_6x6_" + (origem + 1));
    numeroOrigemElement.innerHTML = " ";

    var numeroDestinoElement = document.getElementById("num_6x6_" + (destino + 1));
    numeroDestinoElement.innerHTML = numeroOrigem;
    }
};

// inicio 3x3
function mover_1(modo) {
    if (modo === 3) {
        mover_3x3(0, 1);
        mover_3x3(0, 3);
    } else if (modo === 4) {
        mover_4x4(0, 1);
        mover_4x4(0, 4);
    } else if (modo === 5) {
        mover_5x5(0, 1);
        mover_5x5(0, 5);
    } else if (modo === 6) {
        mover_6x6(0, 1);
        mover_6x6(0, 6);
    }
};

function mover_2(modo) {
    if (modo === 3) {
        mover_3x3(1, 0);
        mover_3x3(1, 2);
        mover_3x3(1, 4);
    } else if (modo === 4) {
        mover_4x4(1, 0);
        mover_4x4(1, 2);
        mover_4x4(1, 5);
    } else if (modo === 5) {
        mover_5x5(1, 0);
        mover_5x5(1, 2);
        mover_5x5(1, 6);
    } else if (modo === 6) {
        mover_6x6(1, 0);
        mover_6x6(1, 2);
        mover_6x6(1, 7);
    }
};

function mover_3(modo) {
    if (modo === 3) {
        mover_3x3(2, 1);
        mover_3x3(2, 5);
    } else if (modo === 4) {
        mover_4x4(2, 1);
        mover_4x4(2, 3);
        mover_4x4(2, 6);
    } else if (modo === 5) {
        mover_5x5(2, 1);
        mover_5x5(2, 3);
        mover_5x5(2, 7);
    } else if (modo === 6) {
        mover_6x6(2, 1);
        mover_6x6(2, 3);
        mover_6x6(2, 8);
    }
};

function mover_4(modo) {
    if (modo === 3) {
        mover_3x3(3, 0);
        mover_3x3(3, 4);
        mover_3x3(3, 6);
    } else if (modo === 4) {
        mover_4x4(3, 2);
        mover_4x4(3, 7);
    } else if (modo === 5) {
        mover_5x5(3, 2);
        mover_5x5(3, 4);
        mover_5x5(3, 8);
    } else if (modo === 6) {
        mover_6x6(3, 2);
        mover_6x6(3, 4);
        mover_6x6(3, 9);
    }
};

function mover_5(modo) {
    if (modo === 3) {
        mover_3x3(4, 1);
        mover_3x3(4, 3);
        mover_3x3(4, 5);
        mover_3x3(4, 7);
    } else if (modo === 4) {
        mover_4x4(4, 0);
        mover_4x4(4, 5);
        mover_4x4(4, 8);
    } else if (modo === 5) {
        mover_5x5(4, 3);
        mover_5x5(4, 9);
    } else if (modo === 6) {
        mover_6x6(4, 3);
        mover_6x6(4, 5);
        mover_6x6(4, 10);
    }
};

function mover_6(modo) {
    if (modo === 3) {
        mover_3x3(5, 2);
        mover_3x3(5, 4);
        mover_3x3(5, 8);
    } else if (modo === 4) {
        mover_4x4(5, 1);
        mover_4x4(5, 4);
        mover_4x4(5, 6);
        mover_4x4(5, 9);
    } else if (modo === 5) {
        mover_5x5(5, 0);
        mover_5x5(5, 6);
        mover_5x5(5, 10);
    } else if (modo === 6) {
        mover_6x6(5, 4);
        mover_6x6(5, 11);
    }
};

function mover_7(modo) {
    if (modo === 3) {
        mover_3x3(6, 3);
        mover_3x3(6, 7);
    } else if (modo === 4) {
        mover_4x4(6, 2);
        mover_4x4(6, 5);
        mover_4x4(6, 7);
        mover_4x4(6, 10);
    } else if (modo === 5) {
        mover_5x5(6, 1);
        mover_5x5(6, 5);
        mover_5x5(6, 7);
        mover_5x5(6, 11);
    } else if (modo === 6) {
        mover_6x6(6, 0);
        mover_6x6(6, 7);
        mover_6x6(6, 12);
    }
};

function mover_8(modo) {
    if (modo === 3) {
        mover_3x3(7, 4);
        mover_3x3(7, 6);
        mover_3x3(7, 8);
    } else if (modo === 4) {
        mover_4x4(7, 3);
        mover_4x4(7, 6);
        mover_4x4(7, 11);
    } else if (modo === 5) {
        mover_5x5(7, 2);
        mover_5x5(7, 6);
        mover_5x5(7, 8);
        mover_5x5(7, 12);
    } else if (modo === 6) {
        mover_6x6(7, 1);
        mover_6x6(7, 6);
        mover_6x6(7, 8);
        mover_6x6(7, 13);
    }
};

function mover_9(modo) {
    if (modo === 3) {
        mover_3x3(8, 5);
        mover_3x3(8, 7);
    } else if (modo === 4) {
        mover_4x4(8, 4);
        mover_4x4(8, 9);
        mover_4x4(8, 12);
    } else if (modo === 5) {
        mover_5x5(8, 3);
        mover_5x5(8, 7);
        mover_5x5(8, 9);
        mover_5x5(8, 13);
    } else if (modo === 6) {
        mover_6x6(8, 2);
        mover_6x6(8, 7);
        mover_6x6(8, 9);
        mover_6x6(8, 14);
    }
};
// fim 3x3

// incio 4x4
function mover_10(modo) {
    if (modo === 4) {
        mover_4x4(9, 5);
        mover_4x4(9, 8);
        mover_4x4(9, 10);
        mover_4x4(9, 13);
    } else if (modo === 5) {
        mover_5x5(9, 4);
        mover_5x5(9, 8);
        mover_5x5(9, 14);
    } else if (modo === 6) {
        mover_6x6(9, 3);
        mover_6x6(9, 8);
        mover_6x6(9, 10);
        mover_6x6(9, 15);
    }
};

function mover_11(modo) {
    if (modo === 4) {
        mover_4x4(10, 6);
        mover_4x4(10, 9);
        mover_4x4(10, 11);
        mover_4x4(10, 14);
    } else if (modo === 5) {
        mover_5x5(10, 5);
        mover_5x5(10, 11);
        mover_5x5(10, 15);
    } else if (modo === 6) {
        mover_6x6(10, 4);
        mover_6x6(10, 9);
        mover_6x6(10, 11);
        mover_6x6(10, 16);
    }
};

function mover_12(modo) {
    if (modo === 4) {
        mover_4x4(11, 7);
        mover_4x4(11, 10);
        mover_4x4(11, 15);
    } else if (modo === 5) {
        mover_5x5(11, 6);
        mover_5x5(11, 10);
        mover_5x5(11, 12);
        mover_5x5(11, 16);
    } else if (modo === 6) {
        mover_6x6(11, 5);
        mover_6x6(11, 10);
        mover_6x6(11, 17);
    }
};

function mover_13(modo) {
    if (modo === 4) {
        mover_4x4(12, 8);
        mover_4x4(12, 13);
    } else if (modo === 5) {
        mover_5x5(12, 7);
        mover_5x5(12, 11);
        mover_5x5(12, 13);
        mover_5x5(12, 17);
    } else if (modo === 6) {
        mover_6x6(12, 6);
        mover_6x6(12, 13);
        mover_6x6(12, 18);
    }
};

function mover_14(modo) {
    if (modo === 4) {
        mover_4x4(13, 9);
        mover_4x4(13, 12);
        mover_4x4(13, 14);
    } else if (modo === 5) {
        mover_5x5(13, 8);
        mover_5x5(13, 12);
        mover_5x5(13, 14);
        mover_5x5(13, 18);
    } else if (modo === 6) {
        mover_6x6(13, 7);
        mover_6x6(13, 12);
        mover_6x6(13, 14);
        mover_6x6(13, 19);
    }
};

function mover_15(modo) {
    if (modo === 4) {
        mover_4x4(14, 10);
        mover_4x4(14, 13);
        mover_4x4(14, 15);
    } else if (modo === 5) {
        mover_5x5(14, 9);
        mover_5x5(14, 13);
        mover_5x5(14, 19);
    } else if (modo === 6) {
        mover_6x6(14, 8);
        mover_6x6(14, 13);
        mover_6x6(14, 15);
        mover_6x6(14, 20);
    }
};

function mover_16(modo) {
    if (modo === 4) {
        mover_4x4(15, 11);
        mover_4x4(15, 14);
    } else if (modo === 5) {
        mover_5x5(15, 10);
        mover_5x5(15, 16);
        mover_5x5(15, 20);
    } else if (modo === 6) {
        mover_6x6(15, 9);
        mover_6x6(15, 14);
        mover_6x6(15, 16);
        mover_6x6(15, 21);
    }
};
// fim 4x4

// inicio 5x5
function mover_17(modo) {
    if (modo === 5) {
        mover_5x5(16, 11);
        mover_5x5(16, 15);
        mover_5x5(16, 17);
        mover_5x5(16, 21);
    } else if (modo === 6) {
        mover_6x6(16, 10);
        mover_6x6(16, 15);
        mover_6x6(16, 17);
        mover_6x6(16, 22);
    }
};

function mover_18(modo) {
    if (modo === 5) {
        mover_5x5(17, 12);
        mover_5x5(17, 16);
        mover_5x5(17, 18);
        mover_5x5(17, 22);
    } else if (modo === 6) {
        mover_6x6(17, 11);
        mover_6x6(17, 16);
        mover_6x6(17, 23);
    }
};

function mover_19(modo) {
    if (modo === 5) {
        mover_5x5(18, 13);
        mover_5x5(18, 17);
        mover_5x5(18, 19);
        mover_5x5(18, 23);
    } else if (modo === 6) {
        mover_6x6(18, 12);
        mover_6x6(18, 19);
        mover_6x6(18, 24);
    }
};

function mover_20(modo) { 
    if (modo === 5) {
        mover_5x5(19, 14);
        mover_5x5(19, 18);
        mover_5x5(19, 24);
    } else if (modo === 6) {
        mover_6x6(19, 13);
        mover_6x6(19, 18);
        mover_6x6(19, 20);
        mover_6x6(19, 25);
    }
};

function mover_21(modo) { // continuar daqui
    if (modo === 5) {
        mover_5x5(20, 15);
        mover_5x5(20, 21);
    } else if (modo === 6) {
        mover_6x6(20, 14);
        mover_6x6(20, 19);
        mover_6x6(20, 21);
        mover_6x6(20, 26);
    }
};

function mover_22(modo) {
    if (modo === 5) {
        mover_5x5(21, 16);
        mover_5x5(21, 20);
        mover_5x5(21, 22);
    } else if (modo === 6) {
        mover_6x6(21, 15);
        mover_6x6(21, 20);
        mover_6x6(21, 22);
        mover_6x6(21, 27);
    }
};

function mover_23(modo) {
    if (modo === 5) {
        mover_5x5(22, 17);
        mover_5x5(22, 21);
        mover_5x5(22, 23);
    } else if (modo === 6) {
        mover_6x6(22, 16);
        mover_6x6(22, 21);
        mover_6x6(22, 23);
        mover_6x6(22, 28);
    }
};

function mover_24(modo) {
    if (modo === 5) {
        mover_5x5(23, 18);
        mover_5x5(23, 22);
        mover_5x5(23, 24);
    } else if (modo === 6) {
        mover_6x6(23, 17);
        mover_6x6(23, 22);
        mover_6x6(23, 29);
    }
};

function mover_25(modo) {
    if (modo === 5) {
        mover_5x5(24, 19);
        mover_5x5(24, 23);
    } else if (modo === 6) {
        mover_6x6(24, 18);
        mover_6x6(24, 25);
        mover_6x6(24, 30);
    }
};
// fim 5x5

// inicio 6x6
function mover_26(modo) {
    if (modo === 6) {
        mover_6x6(25, 19);
        mover_6x6(25, 24);
        mover_6x6(25, 26);
        mover_6x6(25, 31);
    }
};

function mover_27(modo) {
    if (modo === 6) {
        mover_6x6(26, 20);
        mover_6x6(26, 25);
        mover_6x6(26, 27);
        mover_6x6(26, 32);
    }
};

function mover_28(modo) {
    if (modo === 6) {
        mover_6x6(27, 21);
        mover_6x6(27, 26);
        mover_6x6(27, 28);
        mover_6x6(27, 33);
    }
};

function mover_29(modo) {
    if (modo === 6) {
        mover_6x6(28, 22);
        mover_6x6(28, 27);
        mover_6x6(28, 29);
        mover_6x6(28, 34);
    }
};

function mover_30(modo) {
    if (modo === 6) {
        mover_6x6(29, 23);
        mover_6x6(29, 28);
        mover_6x6(29, 35);
    }
};

function mover_31(modo) {
    if (modo === 6) {
        mover_6x6(30, 24);
        mover_6x6(30, 31);
    }
};

function mover_32(modo) {
    if (modo === 6) {
        mover_6x6(31, 25);
        mover_6x6(31, 30);
        mover_6x6(31, 32);
    }
};

function mover_33(modo) {
    if (modo === 6) {
        mover_6x6(32, 26);
        mover_6x6(32, 31);
        mover_6x6(32, 33);
    }
};

function mover_34(modo) {
    if (modo === 6) {
        mover_6x6(33, 27);
        mover_6x6(33, 32);
        mover_6x6(33, 34);
    }
};

function mover_35(modo) {
    if (modo === 6) {
        mover_6x6(34, 28);
        mover_6x6(34, 33);
        mover_6x6(34, 35);
    }
};

function mover_36(modo) {
    if (modo === 6) {
        mover_6x6(35, 29);
        mover_6x6(35, 34);
    }
};
// fim 6x6

// Fim da vereficação de mover e mover


//  CONFIRMANDO QUE TODOS ESTÃO IGUAIS OU SEJA TODOS ESTÃO NOS DEVIDOS LUGARES
//  VERIFICAÇÃO 
function pronto() {
    var array_confirm_3x3 = [[1],[2],[3],
                             [4],[5],[6],
                             [7],[8],[0]];

    var array_confirm_4x4 = [[1],[2],[3],[4],
                             [5],[6],[7],[8],
                             [9],[10],[11],[12],
                             [13],[14],[15],[0]];

    var array_confirm_5x5 = [[1],[2],[3],[4],[5],
                             [6],[7],[8],[9],[10],
                             [11],[12],[13],[14],[15],
                             [16],[17],[18],[19],[20],
                             [21],[22],[23],[24],[0]];

    var array_confirm_6x6 = [[1],[2],[3],[4],[5],[6],
                             [7],[8],[9],[10],[11],[12],
                             [13],[14],[15],[16],[17],[18],
                             [19],[20],[21],[22],[23],[24],
                             [25],[26],[27],[28],[29],[30],
                             [31],[32],[33],[34],[35],[0]];;

    var todosConfirmados_3x3 = true;  
    var todosConfirmados_4x4 = true;  
    var todosConfirmados_5x5 = true;  
    var todosConfirmados_6x6 = true;  

    array_confirm_3x3.forEach(function(valor, index) {
        if (array_confirm_3x3[index][0] !== array_3x3[index][0]) {
            todosConfirmados_3x3 = false;
        }
    });
    array_confirm_4x4.forEach(function(valor, index) {
        if (array_confirm_4x4[index][0] !== array_4x4[index][0]) {
            todosConfirmados_4x4 = false;
        }
    });
    array_confirm_5x5.forEach(function(valor, index) {
        if (array_confirm_5x5[index][0] !== array_5x5[index][0]) {
            todosConfirmados_5x5 = false;
        }
    });
    array_confirm_6x6.forEach(function(valor, index) {
        if (array_confirm_6x6[index][0] !== array_6x6[index][0]) {
            todosConfirmados_6x6 = false;
        }
    });

    if (todosConfirmados_3x3) {
        alert("Você Ganhou");
    } else if (todosConfirmados_4x4) {
        alert("Você Ganhou");
    } else if (todosConfirmados_5x5) {
        alert("Você Ganhou");
    } else if (todosConfirmados_6x6) {
        alert("Você Ganhou");
    }
    else {
        alert("Todos os numeros deve estar em sequencia pedida")
    }
    
}

//  FIM DA VERIFICAÇÃO  

function recarregar() {
    location.reload();
};

}


