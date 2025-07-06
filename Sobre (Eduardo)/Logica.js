 let indiceAtual = 0;

        const insta= [
            "@eduardo_lucas48",
            "@eae_rush1",
            "@matzu_mag",
            "@soviet069"
        ]

        const contato = [
            "eduardo.fonseca@ufv.br",
            "jeferson.juliano@ufv.br",
            "mateus.h.santos@ufv.br",
            "luis.m.alves@ufv.br"
        ]

        const texto = [
            "Fiquei responsável por esta página e fui o único\nmembro a usar o JavaScript o Back do Frontend.\nGostei muito de fazer esse trabalho ganhei\nmuitas risadas e insônias que carregarei pelo\nresto da vida.",
            "Clique aqui para adicionar seu\ntexto. Sou um ótimo lugar para você contar a sua\nSou um parágrafo. Clique aqui para adicionar seu\nhistória e compartilhar um pouco mais sobre você.",
            "Sou um parágrafo.  seu\ntexto. Sou um ótimo lugar para você contar a sua\nSou um parágrafo. Clique aqui para adicionar seu\nhistória e compartilhar um pouco mais sobre você.",
            "Sou um parágrafo. Clique aqui para adicionar seu\ntexto.a sua\nSou um parágrafo. Clique aqui para adicionar seu\nhistória e compartilhar um pouco mais sobre você."

        ]

        const titulo=[
            "Eduardo Lucas Leite Fonseca",
            "Jeferson Juliano dos Santos",
            "Mateus Henrique Malagutte Santos",
            "Luis Miguel Moraes Alves"
        ]

        const imagens=[
            "imagens/Eduardo_imagem.jpg",
            "imagens/Jeferson_imagem.jpg",
            "imagens/Mateus_imagem.jpg",
            "imagens/Luis_imagem.jpg"
        ]

        const contatinho = document.getElementById('contato');
        const instagram = document.getElementById('contato_0');
        const tetexto = document.getElementById('texto');
        const titexto = document.getElementById('titulo');
        const image = document.getElementById('perfil');
        const probotao = document.getElementById('botao');
        const antbotao = document.getElementById('botao_voltar');

        function mudarperfil(){

            contatinho.textContent = contato[indiceAtual];
            instagram.textContent = insta[indiceAtual];
            tetexto.textContent = texto[indiceAtual]; 
            titexto.textContent = titulo[indiceAtual];
            image.src = imagens[indiceAtual];

            if(indiceAtual === titulo.length - 1){
                probotao.style.display = 'none';
            }else{
                probotao.style.display = 'block';
            }

            if(indiceAtual > 0){
                antbotao.style.display = 'block';
            }else{
                antbotao.style.display = 'none';
            }
        }

        function proximo(){
            
                if(indiceAtual < titulo.length -1){
                    indiceAtual++;
                    mudarperfil();
                }
            }
        function voltar(){
                if(indiceAtual > 0){
                    indiceAtual--;  
                    mudarperfil();                         
                }
                   
                
            }


            mudarperfil();
    
        probotao.addEventListener('click', proximo);
        antbotao.addEventListener('click', voltar);
