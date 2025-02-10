const uri = "https://imc-api.edsonmelo.com.br/api/"
const nome = "Rafael"
const sobrenome = "Jesus"
let data
try {
    const response = await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "peso": 78,
            "altura": 1.82,
            "idioma": "br"
        })
    });

    data = await response.json();
} catch (error) {
    console.error('Erro:', error);
}

console.log("Olá ",nome,sobrenome,"\nseu IMC é de",data.imc);